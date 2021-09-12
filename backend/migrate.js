const knex = require('knex');

const db = knex({
    client: 'postgres',
    connection: {
        host: 'db',
        user: 'docker',
        password: '123456',
        database: 'employeedb',
    },
});

(async () => {
    try {
        await db.schema.dropTableIfExists('employee')
        await db.schema.withSchema('public').createTable('employee', (table) => {
            table.increments('e_id').primary().notNullable()
            table.string('last_name').notNullable()
            table.string('first_name').notNullable()
            table.integer('salary').notNullable()
            table.string('dept').notNullable()
        })
        
        console.log('Employee table created')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)

    }
})();