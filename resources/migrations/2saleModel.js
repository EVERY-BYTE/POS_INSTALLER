'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('sales', {
      ...ZygoteModel,
      sale_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'users',
          key: 'user_id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      sales_code: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      sales_deliver_company_name: {
        type: DataTypes.STRING(250),
        allowNull: false
      },
      sales_deliver_company_address: {
        type: DataTypes.STRING(250),
        allowNull: false
      },
      sales_category: {
        type: DataTypes.STRING(250),
        allowNull: false
      },
      sale_total_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      sale_payment_method: {
        type: DataTypes.ENUM('cash', 'credit_card'),
        allowNull: false
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sales')
  }
}
