const colors = require('colors');
const inquirer = require('inquirer');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar taeas pendientes'
            },
            {
                value: '5',
                name: '5. Completar taeas'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            }
    ],
    }
];

const preguntaPausa = [
    {type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: ""
    }
];

const inquirerMenu = async()=>{
    console.clear();

    console.log('========================='.green);
    console.log('  Seleccione una opcion  '.green);
    console.log('=========================\n'.green);

    const {opcion}  = await inquirer.prompt(preguntas);

    return opcion;
}

const pausa = ()=>{
    
}

module.exports = {
    inquirerMenu
}