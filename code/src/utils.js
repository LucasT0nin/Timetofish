let plot = require ('./Js/forecast_req/Plot_data.js');

const cidade = '455827';

module.exports= {
  castPlotter : async function (){
    return await plot.axis(cidade).then(function(data){
      return [data, plot.layout];
    });
  }
};

