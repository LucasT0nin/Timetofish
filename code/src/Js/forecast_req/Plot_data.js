import {today, next_days} from './request_cast.js';


export let layout =  {
    xaxis: {range: [0, 50], title: "Temperatura Máxima"},
    yaxis: {title: "Dia da Semana"},
    title: "Temperatura Maxima por Dia"
  }

export async function axis(cidade){
  var X = [];
  let tD = await next_days(cidade).then(function(resp){
    return [
      resp['amanha']['max'],
      resp['depois amanha']['max'],
      resp['depois de depois de amanha']['max']
    ];
  });
  let today_cast = await today(cidade);
  X[0] = today_cast['max'];
  X[1] = tD[0];
  X[2] = tD[1];
  X[3] = tD[2];

  var Y = [];
  let nD = await next_days(cidade).then(function(resp){
    return [
      resp['amanha']['weekday'],
      resp['depois amanha']['weekday'],
      resp['depois de depois de amanha']['weekday']
    ];
  });
  Y[0] = 'Hoje';
  Y[1] = nD[0];
  Y[2] = nD[1];
  Y[3] = nD[2];
  return [{
    x: X,
    y: Y,
    mode: "lines",
    type: "scatter"
  }];
}