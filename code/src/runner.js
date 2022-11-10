import {layout, axis} from './Js/forecast_req/Plot_data.js';

const cidade = '455827';
//to run: npm start 

module.exports = {
  castPlotter : function (div, plotter){
    axis(cidade).then(function(data){
      plotter.newPlot(div, data, layout);
    });
  }
}
