const knex = require('knex');

const db = knex({
    client: 'postgres',
    connection: {
        host: 'db',
        user: 'docker',
        password: '123456',
        database: 'docker',
    },
});

(async () => {
    try {
        await db('employee').insert([{last_name:"Sodagar",first_name:"Harshit",salary:12345,dept:"Dev"}])
        await db('employee').insert([{last_name:"Scott",first_name:"Micheal",salary:54321,dept:"Manager"}])
        console.log('Dummy Data added!')
        process.exit(0)
        
    } catch (error) {
        console.log(error)
        process.exit(1)
        
    }
})()