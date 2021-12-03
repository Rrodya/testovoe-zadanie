--а)
SELECT students.FirstName, students.LastName
FROM students INNER JOIN Exams
ON Students.StudentId = Exams.StudentId
WHERE Exams.Result < 3
GROUP BY Students.StudentId HAVING COUNT(Exams.ExamName) >= 2;

--б)
SELECT students.GroupName
FROM (
	SELECT students.StudentId
    FROM students INNER JOIN Exams
    ON Students.StudentId = Exams.StudentId
    WHERE Exams.Result < 3
    GROUP BY Students.StudentId HAVING COUNT(Exams.ExamName) >= 2
) AS ten
INNER JOIN students ON Students.StudentId = ten.StudentId
GROUP BY students.GroupName HAVING COUNT(students.StudentId) > 10;


