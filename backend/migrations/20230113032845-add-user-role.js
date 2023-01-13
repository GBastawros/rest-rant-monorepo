'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'roles', {
      type: Sequelize.DataTypes.ENUM,
      values: [
        'reviewer',
        'admin'
      ]
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'roles')
  }
};
