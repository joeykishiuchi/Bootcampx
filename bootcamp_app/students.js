const { Pool } = require('pg');
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohort = process.argv[2];
const limit = process.argv[3];

pool.query('SELECT students.id AS student_id, students.name AS student_name, cohorts.name AS cohort FROM students JOIN cohorts ON cohorts.id = cohort_id WHERE cohorts.name = $1 LIMIT $2;', [cohort, limit])
  .then(res => {
    console.log(res.rows);
  })
  .catch(err => console.error('query error', err.stack));
