const { Pool } = require('pg');
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
const values = [cohortName, limit];

pool.query(`
  SELECT students.id AS student_id, students.name AS student_name, cohorts.name AS cohort 
  FROM students 
  JOIN cohorts ON cohorts.id = cohort_id 
  WHERE cohorts.name = $1 
  LIMIT $2;`, values)
  .then(res => {
    console.log(res.rows);
  })
  .catch(err => console.error('query error', err.stack));
