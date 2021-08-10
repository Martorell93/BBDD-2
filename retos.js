//Retos día 2 del módulo 4
//Reto 1

//Creamos la conexión con la BBDD
let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Jaimecodenotch2021",
        database: "codenotch"
    }
);

connection.connect(function(error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Conexión correcta: ");
    }
});

//Nota media de los alumnos de la asignatura 1
// let sql = "SELECT AVG(mark) FROM marks WHERE subject_id = 1";

// connection.query(sql, function(err, result) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Media de la asignatura 1: ");
//         console.log(result);
//     }
// });

//Número total de alumnos en el bootcamp
// let sql = "SELECT COUNT(*) FROM students";

// connection.query(sql, function(err, result) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Número total de alumnos: ");
//         console.log(result);
//     }
// });

//Listar todos los campos de la tabla "groups"
// let sql = "SELECT * FROM codenotch.groups";

// connection.query(sql, function(err, result) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Listado de campos de la tabla groups: ");
//         console.log(result);
//     }
// });

//Elimina todas las notas que estén por encima de 5 y que sean del 2020
// let sql = "DELETE FROM marks WHERE mark > 5 AND date like '2020-%'";

// connection.query(sql, function(err, result) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Notas eliminadas del año pasado por encima de 5: ");
//         console.log(result);
//     }
// });

//Estudiantes de este año del bootcamp
// let sql ="SELECT * FROM students WHERE entryYear = '2021'";

// connection.query(sql, function(err, result) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Datos sobre los estudiantes del 2021: ");
//         console.log(result);
//     }
// });

//Número de profesores por asignatura
// let sql = "SELECT subject_id, COUNT(*) AS nºprofesores FROM marks GROUP BY subject_id";

// connection.query(sql, function(err, result) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Listado de profesores por asignatura: ");
//         console.log(result);
//     }
// });

//Obtener id y nota de aquellos estudiantes que tenga id entre 1 y 20, o nota mayor de 8 del año pasado
// let sql ="SELECT student_id, mark FROM marks WHERE (student_id > 1 AND student_id < 20) OR (mark > 8 AND date LIKE '2020-%')";

// connection.query(sql, function(err, result) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Resultado: ");
//         console.log(result);
//     }
// });

//Obtén la media de las notas que se han dado en el último año por asignatura
// let sql = "SELECT subject_id , AVG(mark) AS nota_media FROM marks WHERE date LIKE '2020-%' GROUP BY subject_id";

// connection.query(sql, function(err, result) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Notas medias del año pasado por asignatura: ");
//         console.log(result);
//     }
// });

//Obten la medía artimética de las notas en el ultimo año por alumno
let sql = "SELECT student_id, AVG(mark) AS nota_media FROM marks WHERE date > '2020-08-10' GROUP BY student_id";

connection.query(sql, function(err, result) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Nota media por alumno año pasado: ");
        console.log(result);
    }
});