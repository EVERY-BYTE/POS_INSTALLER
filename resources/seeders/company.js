'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('company', [
      {
        company_id: 1,
        company_name: 'TechCorp',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        company_id: 2,
        company_name: 'GreenEnergy Ltd.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        company_id: 3,
        company_name: 'HealthPlus',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('company', null, {})
  }
}
