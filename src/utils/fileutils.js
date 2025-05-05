import fs from 'node:fs';
/**
 * lee y devuelve el contenido de un archivo como texto en 'utf-8'
 * @param {string} ruta relativa al directorio del proyecto
 * @return {string} el texto leído
 */
function leerArchivoComoString(ruta) {
    try
    {
        let datos = fs.readFileSync(ruta, 'utf-8');
        return datos;
    }
    catch(error)
    {
        console.log(`ERROR en la operación de lectura/escritura: ${error}`);
    }
}


/**
 * lee y devuelve las estadísticas del archivo buscado
 * @param {string} ruta relativa al directorio del proyecto
 * @return {object} el texto leído como JSON
 */
function obtenerStatsDeArchivo(ruta) {
    try
    {
        let obj = fs.statSync(ruta);
        return obj;
    }
    catch(error)
    {
        console.log(`ERROR en la operación de lectura/escritura: ${error}`);
    }
}



/**
 * escribe el texto en el archivo de la ruta, sólo si tal archivo existe. sino, lanza error.
 * @param {string} ruta relativa al directorio del proyecto
 * @param {string} texto
 */
function escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists) {
    try
    {   
        if (fs.existsSync(ruta) || shouldCreateIfNotExists)
            if(typeof texto != "string") //Si no es un string da error, esto lo evita
                texto = texto.toString();
            fs.writeFileSync(ruta, texto);
    }
    catch(error)
    {
        console.log(`Error en la operación sincrónica de lectura/escritura: ${error.message}`)
    }
}

// exportar ambas funciones
export default
{
    leerArchivoComoString,
    obtenerStatsDeArchivo,
    escribirTextoEnArchivo
}