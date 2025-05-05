import fileUtils from "./src/utils/fileutils.js";
const { leerArchivoComoString, obtenerStatsDeArchivo, escribirTextoEnArchivo } = fileUtils;
const rutaArchivo = "./package.json";

console.log("### MODO SINCRÓNICO ###");

try {
  let info = {
    contenidoStr: leerArchivoComoString(rutaArchivo),
    contenidoObj: JSON.parse(leerArchivoComoString(rutaArchivo)),
    size: obtenerStatsDeArchivo(rutaArchivo).size
  };
  console.log(info);
  escribirTextoEnArchivo('./out/ms.out', JSON.stringify(info), true);

} catch (e) {
  console.error(e);
}

