const express = require('express');
const fs = require('fs');  
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


app.use(bodyParser.json());
app.use(cors());


const usuariosFilePath = './data/dbusers.json';  


app.get('/api/usuarios', (req, res) => {
  fs.readFile(usuariosFilePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ mensagem: 'Erro ao ler dados dos usuários' });
    }
    res.json(JSON.parse(data));
  });
});


app.post('/api/cadastrar', (req, res) => {
  const { nome, email, telefone, senha } = req.body;

  
  fs.readFile(usuariosFilePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ mensagem: 'Erro ao ler dados dos usuários' });
    }

    const usuarios = JSON.parse(data);

    
    const usuarioExistente = usuarios.find(usuario => usuario.email === email);
    if (usuarioExistente) {
      return res.status(400).json({ mensagem: 'Usuário já cadastrado' });
    }

    
    const novoUsuario = { id: usuarios.length + 1, nome, email, telefone, senha };
    usuarios.push(novoUsuario);

    
    fs.writeFile(usuariosFilePath, JSON.stringify(usuarios, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ mensagem: 'Erro ao salvar o usuário' });
      }
      res.status(201).json({ mensagem: 'Cadastro realizado com sucesso!' });
    });
  });
});


app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
