const Jogador = require('../models/Jogador');

module.exports = {
  async findAll(req, res) {
    try {
      const jogadors = await Jogador.findAll();
      return res.json(jogadors);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },
  async show(req, res) {
    try {
      const jogador = await Jogador.findByPk(req.params.id);
      return res.json(jogador);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },
  async store(req, res) {
    try {
      const jogador = await Jogador.create(req.body);
      return res.json(jogador);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },
  async update(req, res) {
    try {
      const jogador = await Jogador.findByPk(req.params.id);
      await jogador.update(req.body);
      return res.json({ jogador });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },
  async destroy(req, res) {
    try {
      const jogador = await Jogador.findByPk(req.params.id);
      await jogador.destroy();
      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },
};
