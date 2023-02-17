//Olhe no arquivo package.json as dependencias (dependencies) usadas no projeto.
import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: "crudreactjs"

});

app.use(express.json());
app.use(cors());


app.get("/", (req, res)=>{
    res.json("Oi, Este é o backend!")
})

//SELECIONAR TODOS OS LIVROS DO BANCO
app.get("/livros", (req, res)=>{
    const q = "SELECT * FROM livros"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

//CRIAR UM LIVRO NO BANCO
app.post("/livros", (req,res)=>{
    const q = "INSERT INTO livros (`nome`, `descricao`, `img`, `preco`) VALUES (?)"
    const values = [
        req.body.nome,
        req.body.descricao,
        req.body.img,
        req.body.preco
    ]

    db.query(q,[values], (err,data)=>{
        if(err) return res.json(err)
        return res.json("Seu livro foi criado com sucesso!")
    })
})

//DELETAR UM LIVRO DO BANCO
app.delete("/livros/:id", (req, res)=>{
    const livroId = req.params.id;
    const q = "DELETE FROM livros  WHERE id = ?"

    db.query(q,[livroId], (err,data)=>{
        if(err) return res.json(err)
        return res.json("Seu livro foi deletado com sucesso!")
    })
})

//ATUALIZAR UM LIVRO NO BANCO
app.put("/livros/:id", (req, res)=>{
    const livroId = req.params.id;
    const q = "UPDATE livros SET `nome` = ?, `descricao`= ?, `img`= ?, `preco`= ? WHERE id = ?"

    const values = [
        req.body.nome,
        req.body.descricao,
        req.body.img,
        req.body.preco
    ]
    db.query(q,[...values,livroId], (err,data)=>{
        if(err) return res.json(err)
        return res.json("Seu livro foi atualizado com sucesso!")
    })
})


app.listen(8800, ()=>{
    console.log("Backend conectado!!!")
});