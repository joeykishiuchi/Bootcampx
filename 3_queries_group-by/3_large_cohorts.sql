SELECT cohorts.name AS cohort_name, COUNT(*) AS student_count
FROM cohorts
JOIN students ON cohorts.id = scohort_id
GROUP BY cohorts_name
HAVING COUNT(*) >= 18
ORDER BY student_count;