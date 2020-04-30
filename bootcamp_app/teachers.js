const { Pool } = require('pg');
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohort = process.argv[2];

pool.query('SELECT DISTINCT teachers.name, cohorts.name AS cohorts FROM teachers JOIN assistance_requests ON assistance_requests.teacher_id = teachers.id JOIN students ON students.id = student_id JOIN cohorts ON cohorts.id = cohort_id WHERE cohorts.name = $1 ORDER BY teachers.name;', [cohort])
  .then(res => {
    console.log(res.rows);
  })
  .catch(err => console.error('query error', err.stack));