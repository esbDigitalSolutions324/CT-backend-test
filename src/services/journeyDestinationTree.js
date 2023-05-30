
function validateParameters(parameters) {
  let valid = false;
  if (
    parameters != undefined &&
    parameters.journeys != undefined &&
    parameters.passenger != undefined
  ) {
    if (parameters.journeys.length > 0){
        if (parameters.passenger.adults + parameters.passenger.children > 0) {
            valid = true;
        }
    }
   }
  return valid;
}



function getAllTrainStations(parameters){
  let destinationsToSend = [];
  parameters.journeys.forEach(element => {
    let trainStations = getTrainStations(element);
    destinationsToSend.push({ journey: element, destinations: trainStations });
  });
  return destinationsToSend;
}

function getAll(){
  
}

function getTrainStations(destination) {
  
  
  
  
  return {};
  //comunicarme con el servidor para obtener los destinos
}
module.exports = { validateParameters,getAllTrainStations };
