import fileUtils from "./src/utils/fileutils.js";
const { leerArchivoComoString, obtenerStatsDeArchivo, escribirTextoEnArchivo } = fileUtils;
const rutaArchivo = "./package.json";

console.log("### MODO ASINCRÓNICO CON PROMISES ###");
const getInfoPromise = (ruta) => {
  return new Promise((resolve, reject) => {
    if (typeof ruta == "string") {
      try {
        const contenidoStr = leerArchivoComoString(ruta);
        const contenidoObj = JSON.parse(contenidoStr);
        const size = obtenerStatsDeArchivo(ruta).size;
        resolve({ contenidoStr, contenidoObj, size });
      } catch (e) {
        reject(
          "Hubo un error con la lectura/escritura del archivo. Error: ",
          e
        );
      }
    } else {
      reject("La ruta no es un string");
    }
  });
};

let info = getInfoPromise(rutaArchivo)
  .then((info) => {
    console.log(info);
    escribirTextoEnArchivo('./out/maptc.out', JSON.stringify(info), true);
    return info;
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(() => {
    console.log("La promesa ha finalizado");
  });
