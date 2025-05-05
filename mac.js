import fileUtils from "./src/utils/fileutils.js";
const { leerArchivoComoString, obtenerStatsDeArchivo, escribirTextoEnArchivo } = fileUtils;
const rutaArchivo = "./package.json";

const getInfo =
(ruta,cb) => {
  setTimeout(() =>
  {
    try
    {
      const contenidoStr = leerArchivoComoString(ruta);
      const contenidoObj = JSON.parse(contenidoStr);
      const size = obtenerStatsDeArchivo(ruta).size;

      cb(null, { contenidoStr, contenidoObj, size });
    }
    catch (e)
    {
      cb(e, null);
    }
  }, 500);
};

console.log("### MODO ASINCRÓNICO CON CALLBACKS ###");

let info = getInfo(rutaArchivo, (error, info) => {
  if(error)
  {
    console.error(error);
    return;
  }
  console.log(info);
  escribirTextoEnArchivo('./out/mac.out', JSON.stringify(info), true);
});