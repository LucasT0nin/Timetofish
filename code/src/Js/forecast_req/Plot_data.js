let cast = require('./request_cast.js');

module.exports = {
  layout :  {
    xaxis: {title: "Dias da Semana"},
    yaxis: {title: "Temperatura Máxima"},
    title: "Temperatura Maxima por Dia"
  },

  axis: async function (cidade){
    var X = [];
    let tD = await cast.next_days(cidade).then(function(resp){
      return [
        resp['amanha']['max'],
        resp['depois amanha']['max'],
        resp['depois de depois de amanha']['max']
      ];
    });
    let today_cast = await cast.today(cidade);
    X[0] = today_cast['max'];
    X[1] = tD[0];
    X[2] = tD[1];
    X[3] = tD[2];

    var Y = [];
    let nD = await cast.next_days(cidade).then(function(resp){
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
      x: Y,
      y: X,
      mode: "lines",
      type: "scatter"
    }];
  }
}