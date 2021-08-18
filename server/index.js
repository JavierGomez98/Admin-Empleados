
require("dotenv").config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')
const vars = require("../environmentVars")

const db = mysql.createPool({
    host: vars.db_host,
    user: vars.db_user,
    password: vars.db_password,
    database: vars.db_database
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.post('/api/register_employee', (req, res) => {
    const firstName = req.body.firstName
    const otherNames = req.body.otherNames
    const firstLastName = req.body.firstLastName
    const secondLastName = req.body.secondLastName
    const email = req.body.email
    const countryEmployment = req.body.countryEmployment
    const idType = req.body.idType
    const idNumber = req.body.idNumber
    const dateAdmission = req.body.dateAdmission
    const area = req.body.area
    const condition = req.body.condition
    const dateMod = req.body.dateMod

    const sqlQuery = "INSERT INTO employees (firstName,otherNames,firstLastName,secondLastName,email,countryEmployment,idType,idNumber,dateAdmission,area,`condition`,dateMod) VALUES (?,?,?,?,?,?,?,?,?,?,?,?);"
    db.query(sqlQuery, [firstName, otherNames, firstLastName, secondLastName, email, countryEmployment, idType, idNumber, dateAdmission, area, condition, dateMod], (err, result) => {
        if(err)
            res.send({error: err})
        else
            res.send(result)
    })
})

app.post('/api/delete_employee', (req, res) => {
    const id = req.body.id

    const sqlQuery = "DELETE FROM `employees` WHERE `id`=?"
    db.query(sqlQuery, [id], (err, result) => {
        if(err)
            res.send({error: err})
        else
            res.send(result)
    })
})

app.post('/api/edit_employee', (req, res) => {
    const id = req.body.id
    const firstName = req.body.firstName
    const otherNames = req.body.otherNames
    const firstLastName = req.body.firstLastName
    const secondLastName = req.body.secondLastName
    const email = req.body.email
    const countryEmployment = req.body.countryEmployment
    const idType = req.body.idType
    const idNumber = req.body.idNumber
    const dateAdmission = req.body.dateAdmission
    const area = req.body.area
    const condition = req.body.condition
    const dateMod = req.body.dateMod

    const sqlQuery = "UPDATE `employees` SET `firstName` = ?, `otherNames` = ?, `firstLastName` = ?, `secondLastName` = ?, `email` = ?, `countryEmployment` = ?, `idType` = ?, `idNumber` = ?, `dateAdmission` = ?, `area` = ?, `condition` = ?, `dateMod` = ? WHERE `id` = ?"
    db.query(sqlQuery, [firstName, otherNames, firstLastName, secondLastName, email, countryEmployment, idType, idNumber, dateAdmission, area, condition, dateMod, id], (err, result) => {
        if(err)
            res.send({error: err})
        else
            res.send(result)
    })
})

app.get('/api/get_employees', (req, res) => {
    const sqlQuery = `SELECT * FROM employees;`
    db.query(sqlQuery, (err, result) => {
        if(err)
            res.send({error: err})
        else
            res.send(result)
    })
})

/**
 * Get list of employees with a limit of 10 and a concidence
 */
app.get('/api/get_paginated_employees', (req, res) => {
    let currentEmployees = {
        currentEmployeesList: [],
        currentAllEmployees: []
    }

    const { searchParameter, page } = req.query;
    const to = page + 10
    let sqlQuery = `SELECT employeesdatabase.employees.* FROM employeesdatabase.employees 
    INNER JOIN employeesdatabase.countries ON employeesdatabase.countries.id = countryEmployment 
    INNER JOIN employeesdatabase.conditions ON employeesdatabase.conditions.id = employees.condition 
    INNER JOIN employeesdatabase.types_identifications ON employeesdatabase.types_identifications.id = idType 
    WHERE firstName LIKE '\%${searchParameter}%\' OR otherNames LIKE '\%${searchParameter}%\' OR firstLastName 
    LIKE '\%${searchParameter}%\' OR secondLastName LIKE '\%${searchParameter}%\' OR idNumber 
    LIKE '\%${searchParameter}%\' OR email LIKE '\%${searchParameter}%\' OR employeesdatabase.conditions.condition 
    LIKE '\%${searchParameter}%\' OR employeesdatabase.countries.name LIKE '\%${searchParameter}%\' OR 
    employeesdatabase.types_identifications.name LIKE '\%${searchParameter}%\';`
    db.query(sqlQuery, (err, result) => {
        if(err)
            res.send({error: err})
        else {
            currentEmployees.currentAllEmployees = result
            currentEmployees.currentEmployeesList = currentEmployees.currentAllEmployees.slice(page, to)
            res.send(currentEmployees)
        }
    })
})

app.get('/api/get_areas', (req, res) => {
    const sqlQuery = `SELECT * FROM areas;`
    db.query(sqlQuery, (err, result) => {
        if(err !== null)
            res.send({error: err.code})
        else
            res.send(result)
    })
})

app.get('/api/get_conditions', (req, res) => {
    const sqlQuery = `SELECT * FROM conditions;`
    db.query(sqlQuery, (err, result) => {
        if(err !== null)
            res.send({error: err.code})
        else
            res.send(result)
    })
})

app.get('/api/get_countries', (req, res) => {
    const sqlQuery = `SELECT * FROM countries;`
    db.query(sqlQuery, (err, result) => {
        if(err !== null)
            res.send({error: err.code})
        else
            res.send(result)
    })
})

app.get('/api/get_types_id', (req, res) => {
    const sqlQuery = `SELECT * FROM types_identifications;`
    db.query(sqlQuery, (err, result) => {
        if(err !== null)
            res.send({error: err.code})
        else
            res.send(result)
    })
})

app.listen(3001, () => {
    console.log('Running on port 3001');
})