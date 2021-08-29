'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Jogadors', [{
      nome: 'Gustavo',
      idade: '26',
      clube: 'Gremio',
      posicao: 'Atacante',
      createdAt: new Date(),
      updatedAt: new Date()
      }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }    
};
