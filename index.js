const express = require("express");
const mysql = require('mysql');

const app = express();
const port = 2000;

const connection = mysql.createConnection({
	host : 'localhost',
  user : 'root',
	password : '',
  database : 'students',
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

app.get("/chapter/:SubjectId",function(req, res) {
    const SubjectId = req.params.SubjectId;
    const sql = `SELECT * FROM chapter WHERE subject_id = ${SubjectId}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

app.get("/subtopics/:ChapterId",function(req, res) {
  const ChapterId = req.params.ChapterId;
  const sql = `SELECT * FROM subtopics WHERE chapter_id = ${ChapterId}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get("/content/:SubtopicId",function(req, res) {
  const SubtopicId = req.params.SubtopicId;
  const sql = `SELECT * FROM content WHERE subtopic_id = ${SubtopicId}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
