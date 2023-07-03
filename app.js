const colors = require('colors');
const { inquirerMenu } = require('./helpers/inquirer');


const main = async() =>{
    console.clear(); 

    let opcion = '';

    do{
        opcion = await inquirerMenu();
    }while(opcion !== '0');

}

main();