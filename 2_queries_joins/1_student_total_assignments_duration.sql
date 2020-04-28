SELECT SUM(duration) AS total_dureation
FROM assignment_submissions
JOIN students ON student_id = students.id
where students.name = 'Ibrahim Schimmel';

