let plot = require ('./Js/forecast_req/Plot_data.js');

module.exports= {
  castPlotter : async function (cidade){
    return await plot.axis(cidade).then(function(data){
      return [data, plot.layout];
    });
  }
};

