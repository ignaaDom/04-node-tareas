// Requiere el paquete 'colors'
const colors = require('colors');

// Requiere las siguientes funciones desde 'inquirer.js'
const { inquirerMenu,
        pausa,
        leerInput,
        listadoTareasBorrar,
        confirmar,
        listadoConfirmar
} = require('./helpers/inquirer');

// Rquiere la clase Tareas desde 'tareas.js'
const Tareas = require('./models/tareas');

// Requiere las siguientes funciones desde 'guardarArchivo.js'
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');


const main = async() =>{
    console.clear(); 

    let opcion = '';

    // Inicializa una nueva tarea
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if(tareasDB){
        tareas.cargarTareasFromArray(tareasDB);
    }

    do{
        // Imprime el menú
        opcion = await inquirerMenu();

        switch(opcion){

            // Crear opcion
            case '1':
                // Imprime 'Descripcion:' y espera a que el usuario ingrese una desc.
                const desc = await leerInput('Descripcion:');
                // Le pasa la descripcion al metodo de tareas para que la cree
                tareas.crearTarea(desc);
            break;
            // Listar tareas
            case '2':
                // Lista las tareas
                tareas.listadoCompleto();
            break;
            case '3':
                tareas.listarPendientesCompletadas(true);
            break;
            case '4':
                tareas.listarPendientesCompletadas(false);
            break;
            case '5':
                const ids = await listadoConfirmar(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
            break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if(id !== '0'){
                    const ok = await confirmar('¿Estas seguro?');
                    if(ok) {
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada');
                    }
                }
            break;
        }

        guardarDB(tareas.listadoArr);

        console.log();
        await pausa();
    }while(opcion !== '0');

}

main();