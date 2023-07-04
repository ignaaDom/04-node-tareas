// Requiere el uuid para generar un id unico
const {v4: uuidv4} = require('uuid');

class Tarea{
    // Inicializa la clase
    id = '';
    desc = '';
    completadoEn = null;

    constructor(desc){
        // Crea el id aleatoria y lo guarda en el atributo id
        this.id = uuidv4();
        // Guarda la clase pasada por parametro en el atributo desc
        this.desc = desc;
    }
}

// Exporta la clase
module.exports = Tarea;