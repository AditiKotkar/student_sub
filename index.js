const express = require("express");
const mysql = require('mysql');

const app = express();
const port = 2000;

const connection = mysql.createConnection({
	host : 'localhost',
  user : 'root',
	password : '',
  database : "students",
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

app.get("/chapter/:subjectID",function(req, resp) {
    const subject_id = req.params.subject_id;
    const sql = `SELECT * FROM chapter WHERE subject_id = ${subject_id}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

app.get("/subtopics/:chapterID",function(req, resp) {
  const chapter_id = req.params.chapter_id;
  const sql = `SELECT * FROM subtopics WHERE subject_id = ${chapter_id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get("/content/:subtopicID",function(req, resp) {
  const subtopic_id = req.params.subtopic_id;
  const sql = `SELECT * FROM content WHERE subject_id = ${subtopic_id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
