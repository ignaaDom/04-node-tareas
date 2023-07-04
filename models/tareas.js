const colors = require('colors');

// Requiere la clase Tarea desde 'tarea.js'
const Tarea = require('./tarea');

class Tareas{
    _listado = {};
    
    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key=>{
            const tarea = this._listado[key];
            listado.push(tarea);
        });

        return listado;
    }

    // Inicializa el constructor con el listado vacio
    constructor(){
        this._listado = {};
    }

    borrarTarea(id = ''){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    cargarTareasFromArray(tareas = []){
        tareas.forEach(tarea =>{
            this._listado[tarea.id] = tarea;
        });
    }

    // Crea una tarea y la añade al listado
    // La tarea recibe la descripcion como argumento
    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(){
        this.listadoArr.forEach((tarea,i)=>{
            const idx = i+1;
            const {desc,completadoEn} = tarea;
            const estado = (completadoEn)? 'Completada'.green : 'Pendiente'.red;

            console.log(` ${(idx + '.').green} ${desc} :: ${estado}`);
        });
    }

    listarPendientesCompletadas(completadas = true){
        let contador = 1;
        this.listadoArr.forEach( tarea =>{
            const {desc,completadoEn} = tarea;
            const estado = (completadoEn)? 'Completada'.green : 'Pendiente'.red;
            if(completadas){
                if(completadoEn) {
                    console.log(` ${(contador + '.').green} ${desc} :: ${completadoEn.green}`);
                    contador++;
                }
            }else{
                if(!completadoEn){
                    console.log(` ${(contador + '.').green} ${desc} :: ${estado}`);
                    contador++;
                }
            }
        });
    }

    toggleCompletadas(ids = []){
        ids.forEach(id =>{
            const tarea = this._listado[id];

            if(!tarea.completadoEn) tarea.completadoEn = new Date().toISOString();
        });

        this.listadoArr.forEach(tarea =>{
            if(!ids.includes(tarea.id)) this._listado[tarea.id].completadoEn = null;
        });
    }
}

// Exporta la clase
module.exports = Tareas;