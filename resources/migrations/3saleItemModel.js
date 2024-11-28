'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('sales_items', {
      ...ZygoteModel,
      sales_item_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      sale_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'sales',
          key: 'sale_id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      product_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'products',
          key: 'product_id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      sales_item_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      sales_item_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      sales_item_subtotal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sales_items')
  }
}
