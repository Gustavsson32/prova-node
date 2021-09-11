// Importando as dependências do projeto
const express = require('express');
const jogadors = require('./src/controllers/JogadorController');
const routes = express.Router();
const jwt = require('jsonwebtoken');

const accessTokenSecret = 'youraccesstokensecret';

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        console.log(err);
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// associa as rotas ao seu método do JogadorController
routes.get('/jogadors', authenticateJWT, jogadors.findAll);
routes.get('/jogadors/:id', authenticateJWT, jogadors.show);
routes.post('/jogadors', authenticateJWT, jogadors.store);
routes.put('/jogadors/:id', authenticateJWT, jogadors.update);
routes.delete('/jogadors/:id', authenticateJWT, jogadors.destroy);
module.exports = routes;
