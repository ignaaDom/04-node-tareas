require('colors');
const inquirer = require('inquirer');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: ['opt1','opt2','opt3']
    }
];

const inquirerMenu = async()=>{
    console.clear();

    console.log('========================='.green);
    console.log('  Seleccione una opcion  ');
    console.log('=========================\n'.green);

    const opt  = await inquirer.createPromptModule([preguntas]);

    return opt;
}

module.exports = {
    inquirerMenu
}