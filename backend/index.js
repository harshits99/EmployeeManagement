const express = require("express");
const app = express();
const pool = require("./db");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

//ROUTES

//get all employee

app.get("/employee", async (req, res) => {
  try {
    const allEmployees = await pool.query("Select * from employee");

    res.json(allEmployees.rows);
  } catch (error) {
    console.log(error.message);
  }
});

//get an employee

app.get("/employee/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const getEmployee = await pool.query(
      "Select * from employee where e_id =$1",
      [id]
    );

    res.json(getEmployee.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

//create an employee

app.post("/employee", async (req, res) => {
  try {
    const { last_name, first_name, salary, dept } = req.body;
    const newEmployee = await pool.query(
      "INSERT INTO employee (last_name,first_name,salary,dept) VALUES ($1,$2,$3,$4) RETURNING *",
      [last_name, first_name, salary, dept] // returning * only works with create, update and delete
    );
    res.json(newEmployee.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

//update an employee

app.put("/employee/:id", async (req, res) => {
  try {
    const { id } = req.params; //WHERE
    const { last_name, first_name, salary, dept } = req.body; //SET

    const updateEmployee = await pool.query(
      "UPDATE employee SET last_name = $1, first_name = $2, salary = $3,  dept = $4 WHERE e_id = $5",
      [last_name, first_name, salary, dept, id]
    );

    res.json("Updated");
  } catch (error) {
    console.log(error.message);
  }
});

//delete an employee

app.delete("/employee/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteEmployee = await pool.query(
      "DELETE FROM employee WHERE e_id = $1",
      [id]
    );
    res.json("Employee Deleted");
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
