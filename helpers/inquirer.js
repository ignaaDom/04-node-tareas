const colors = require('colors');
const inquirer = require('inquirer');

// Crea un arreglo de objetos para las preguntas del menu
const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tareas`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`
            }
    ],
    }
];

// Imprime el menu
const inquirerMenu = async()=>{
    console.clear();

    console.log('========================='.green);
    console.log('  Seleccione una opcion  '.white);
    console.log('=========================\n'.green);

    // Muestra las opciones y espera a que el usuario ingrese alguna
    // Las opciones se pueden ver en 'preguntas.choices'
    const {opcion}  = await inquirer.prompt(preguntas);

    return opcion;
}

// Muestra una pausa para que no se termine de una el proceso
const pausa = async()=>{
    const preguntaPausa = [
        {
            type: 'input',
            name: 'opcion',
            message: `Presione ${'ENTER'.green} para continuar`
        }
    ];
    const {opcion} = await inquirer.prompt(preguntaPausa);
    console.log('\n');
    return opcion;
}

// Espera un mensaje. Si o si se tiene que ingresar algo porque sino no continua
const leerInput = async(message) =>{
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length === 0) return 'Por favor ingrese un valor'
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(question);
    return desc;
}

const listadoConfirmar = async(tareas = [])=>{
    const choices = tareas.map( (tarea,i) =>{
        return {
            value: tarea.id,
            name: `${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false
        }
    });

    const question = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ];
    const {ids} = await inquirer.prompt(question);
    return ids;
}

const listadoTareasBorrar = async(tareas = [])=>{
    const choices = tareas.map( (tarea,i) =>{
        const idx = `${i + 1}.`.green;
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    });

    const question = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ];

    const {id} = await inquirer.prompt(question);

    return id;
}

const confirmar = async(message) =>{
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];
    const {ok} = await inquirer.prompt(question);
    return ok;
}

// Exporta las siguientes funciones
module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    listadoConfirmar
}