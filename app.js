const colors = require('colors');
const { mostrarMenu, pausa } = require('./helpers/mensajes');


const main = async() =>{
    console.clear(); 

    let opcion = '';

    do{
        opcion = await mostrarMenu();
        if(opcion !== '0') await pausa();
    }while(opcion !== '0');

}

main();