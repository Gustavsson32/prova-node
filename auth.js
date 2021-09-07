const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
// Configura o parser para requisições com JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Permite o uso do CORS (acesso a domínios externos da nossa API)
app.use(cors());
// Segredo para gerar o token JWT
const accessTokenSecret = 'youraccesstokensecret';
// Listagem de usuários do sistema
const users = [
  {
    name: 'john',
    mail: 'john@gmail.com',
    password: '123456',
  },
  {
    name: 'anna',
    mail: 'anna@gmail.com',
    password: '987654',
  },
];
app.post('/login', (req, res) => {
  // Lê o email de usuário e a senha no corpo da requisição
  const { mail, password } = req.body;
  // Filtra o usuário do array de usuários por email e senha
  const findUser = users.find((u) => {
    return u.mail === mail && u.password === password;
  });
  if (findUser) {
    // Gera um token de acesso
    const accessToken = jwt.sign({ mail: findUser.mail }, accessTokenSecret, {
      expiresIn: '20m',
    });
    const user = { name: findUser.name, mail: findUser.mail };
    res.json({
      // Retorna o token e o usuário
      accessToken,
      user,
    });
  } else {
    res.send('E-mail ou senha incorretos');
  }
});
app.listen(3333, () => {
  console.log('Serviço de autenticação iniciado na porta 3333');
});
