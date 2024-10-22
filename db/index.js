
const Sequelize = require('sequelize');
const dbConfig = require('../db.config.js');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const Issue = sequelize.define('Issue', {
  issueTitle: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  elementName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  issueId: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  issues: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  elementId: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  modelId: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  Issue: Issue
};

module.exports = db;
