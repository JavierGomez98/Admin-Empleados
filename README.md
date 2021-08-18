# Admin Empleados

Este proyecto se creó para agilizar los procesos de Talento Humano de la empresa Nintendo.

Sistema que permite registrar el ingreso y la salida de sus empleados, así como administrar su información.

Las funciones principales son:

- Registro de empleados
- Consulta de empleados
- Edición de empleados
- Eliminar empleados

## Tecnologías utilizadas
___

Backend
- Node.Js   (6.14.12)
- Express   (^4.17.1)
- MySQL     (^2.18.1)
- Cors      (^2.8.5)
- Dorven    (^10.0.0)

Frontend
- React JS  (^17.0.2)
- Redux     (^4.1.0)
- Axios     (^0.21.1)

## Cómo instalar
___

Se pueden instalar automaticamente los paquetes ya establecidos en el package.json con:

    npm install

En caso de algún inconveniente se pueden instalar manualmente con los siguientes comandos:

Redux

    npm install redux
    npm install react-redux
    npm install --save redux-thunk

Router

    npm install -S react-router-dom
    npm i --save-dev @types/react-router-

DatePicker

    npm install react-datepicker --save
    npm i --save-dev @types/react-datepicker

Modales

    npm install react-confirm-alert --save

Animaciones 

    npm install gsap react-gsap

Axios

    npm install axios

MySQL

    npm install mysql

Express

    npm install express

Cors 

    npm install cors

Dotenv

    npm install dotenv

## Conexión a Base de datos
___
Importar la base de datos con el Script **employeesdatabase.sql**.

Se sugiere utilizar la interfaz de phpMyAdmin
- Crear una nueva base de datos con el nombre 'employeessdatabase'
- Importar el Script **employeesdatabase.sql**

En el archivo **.env** en la ruta raíz se podrán cambiar las variables de conexión a la base de datos.

## Ejecutar API
___
Ejecutar en la ruta raíz el siguiente comando:

    npm run startApi

## Ejecutar proyecto React
___
Ejecutar en la ruta raíz el siguiente comando:

    npm start