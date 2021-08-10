//Ejemplos clase
//Conexión con mySQL
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

//Select completo (*)
let sql = "SELECT * FROM marks";

//COUNT conteo de todas las filas que cumplen las condicciones
let sql = "SELECT COUNT(*) FROM teachers";

//AVG realiza una media sobre los datos del campo seleccionado
let sql = "SELECT AVG(mark) FROM marks";

//SUM sumatorio de datos numericos
let sql = "SELECT SUM(mark) FROM marks";

//AND, OR, NOT operadores lógicos para añadir al WHERE
//AND incluye un conjunto de condicciones
let sql = "SELECT mark FROM marks WHERE subject_id = 1 AND mark >= 4";

//OR solo hace falta cumplir una de las condicciones
let sql = "SELECT * FROM students WHERE (group_id >= 1 AND group_id <= 10) OR (group_id >= 30 AND group_id <= 40)";

//NOT sirve para decir que no cumplen la condiccion
let sql = "SELECT * FROM students WHERE NOT(group_id=1)";

//BETWEEN pone limites inferiores y superiores a la petición
let sql = "SELECT mark FROM marks WHERE subject_id=1 AND date BETWEEN '2020-09-01' AND '2020-09-30'";

//GROUP BY agrupa los datos obtenidos por categorías
let sql = "SELECT subject_id, COUNT(*) AS num_marks FROM marks GROUP BY subject_id";

//HAVING es usado cuando no podemos usar WHERE sobre campos que no están definidos en una tabla si no que son obtenidos mediante el SQL
let sql = "SELECT subject_id, COUNT(*) AS num_marks FROM marks GROUP BY subject_id HAVING num_marks > 1";

//ORDER BY ordenamos los resultado según queramos
let sql = "SELECT subject_id, COUNT(*) AS num_marks FROM marks GROUP BY subject_id HAVING num_marks > 1 ORDER BY subject_id DESC";

//LIKE encontrar datos que contengan la sentencia
let sql = "SELECT * FROM students WHERE last_name LIKE '%ez'";

//DISTINCT sirve para eliminar los duplicados
let sql = "SELECT DISTINCT(first_name) FROM students";

//LIMIT nos permite limitar el número de resultado que nos devuelve el SQL
let sql = "SELECT mark, student_id FROM marks ORDER BY mark DESC LIMIT 5";