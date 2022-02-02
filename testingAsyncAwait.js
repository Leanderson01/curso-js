// sem async

function bestRockBand(band) {
  return new Promise((resolve, reject) => {
    if (band === "Queen"){
      resolve({
        success: true,
        bandName: band,
        msg: "Will well will well Rock u"
      });
    } else {
      reject({
        success: false,
        bandName: "Não é essa",
        msg: "Reveja seus conceitos musicais"
      });
    }
  });
};

function bestRockSong(response) {
  return new Promise((resolve, reject) => {
    if (response.success) {
      resolve('Bohemian Rhapsody by ' + response.bandName);
    } else {
      reject('Você conhece a banda Queen?!');
    };
  });
};

bestRockBand('aa')
  .then((response) => {
    console.log("Verificando sua resposta ...");
    // return bestRockSong(response);
  })
  .then(response => {
    console.log("Verificando a melhor música ...");
    // console.log(response);
  })
  .catch((err) => {
    // console.log(err.msg);
  });

// com async

async function doTheJob() {
  try{
    const bestRockBandResponse = await bestRockBand('Queen');
    console.log(bestRockBandResponse);
    const bestRockSongResponse = await bestRockSong(bestRockBandResponse);
    console.log(bestRockSongResponse);
  } catch(err){
    console.error(err.msg);
  }
};

doTheJob();

