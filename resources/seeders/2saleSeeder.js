'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales', [
      {
        sale_id: 1,
        user_id: 1,
        sales_code: 'RG123',
        sale_total_amount: 150.75,
        sale_payment_method: 'cash',
        sales_deliver_company_name: 'PT. Indah Pada Waktunya',
        sales_deliver_company_address: 'Jl.hadi nangka',
        sales_category: 'Shopee',
        created_at: new Date()
      },
      {
        sale_id: 2,
        user_id: 2,
        sales_code: 'YG124',
        sale_total_amount: 299.99,
        sales_category: 'Toko Pedia',
        sale_payment_method: 'credit_card',
        sales_deliver_company_name: 'PT. Indah Pada Waktunya',
        sales_deliver_company_address: 'Jl.hadi nangka',
        created_at: new Date()
      },
      {
        sale_id: 3,
        user_id: 1,
        sales_code: 'TT123',
        sale_total_amount: 89.5,
        sales_category: 'Whatsapp',
        sale_payment_method: 'cash',
        sales_deliver_company_name: 'PT. Indah Pada Waktunya',
        sales_deliver_company_address: 'Jl.hadi nangka',
        created_at: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales', null, {})
  }
}
