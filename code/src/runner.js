import {layout, axis} from './Js/forecast_req/Plot_data.js';

const cidade = '455827';
axis(cidade).then(function(data){
  console.log(data);
});
//to run: npm start