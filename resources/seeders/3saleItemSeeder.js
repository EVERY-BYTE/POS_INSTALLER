'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales_items', [
      {
        sales_item_id: 1,
        sale_id: 1,
        product_id: 1,
        sales_item_quantity: 2,
        sales_item_price: 50.00,
        sales_item_subtotal: 100.00,
      },
      {
        sales_item_id: 2,
        sale_id: 1,
        product_id: 2,
        sales_item_quantity: 1,
        sales_item_price: 49.99,
        sales_item_subtotal: 49.99,
      },
      {
        sales_item_id: 3,
        sale_id: 2,
        product_id: 3,
        sales_item_quantity: 3,
        sales_item_price: 25.00,
        sales_item_subtotal: 75.00,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales_items', null, {});
  },
};
