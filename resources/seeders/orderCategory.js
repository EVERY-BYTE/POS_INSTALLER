'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('order_category', [
      {
        order_category_id: 1,
        order_category_name: 'Whatsapp',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        order_category_id: 2,
        order_category_name: 'E-mail',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        order_category_id: 3,
        order_category_name: 'Website',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        order_category_id: 4,
        order_category_name: 'Shopee',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        order_category_id: 5,
        order_category_name: 'Toko Pedia',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('order_category', null, {})
  }
}
