import fileUtils from "./src/utils/fileutils.js";
const {leerArchivoComoString, obtenerStatsDeArchivo, escribirTextoEnArchivo} = fileUtils;
const rutaArchivo = './package.json';

console.log("### MODO ASINCRÓNICO CON PROMISES ASYNC/AWAIT ###");


const obtenerInformacionArchivo = async()=>
{
    try {
        const contenidoStrArchivo = leerArchivoComoString(rutaArchivo)
        const contenidoObj = JSON.parse(contenidoStrArchivo);
        const objStats = obtenerStatsDeArchivo(rutaArchivo);
        return {
            contenidoStr: contenidoStrArchivo,
            contenidoObj: contenidoObj,
            size: objStats.size
        }
    }
    catch(error) {
        console.log(error)
    }
    finally {
        console.log('La llamada async ha terminado')
    }
}
let info = await obtenerInformacionArchivo();
console.log(info);
escribirTextoEnArchivo('./out/mapaa.out', JSON.stringify(info), true);
escribirTextoEnArchivo('./out/info.out', JSON.stringify(info), true);