let plot_data = require('./Js/forecast_req/Plot_data.js');

const cidade = '455827';
plot_data.axis(cidade).then(function(data){
  console.log(data);
});
//to run: npm start