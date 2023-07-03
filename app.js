const colors = require('colors');
const { inquirerMenu } = require('./helpers/inquirer');
// const { mostrarMenu, pausa } = require('./helpers/mensajes');


const main = async() =>{
    console.clear(); 

    let opcion = '';

    do{
        // opcion = await mostrarMenu();
        opcion = await inquirerMenu();
        console.log(opcion);
        if(opcion !== '0') await pausa();
    }while(opcion !== '0');

}

main();