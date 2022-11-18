let form = require('./forecast.js');

let response = async function(cidade){
  const fetch = require('node-fetch');
  const url = "https://api.hgbrasil.com/weather?key=979b2020&woeid="+cidade;  
  const res = await fetch(url, {method: "Get"});
  const resp = await res.json().then((json) => { 
    return json;
  });
  return resp;
}
module.exports= {
  today: function (cidade){
    let cast = response(cidade).then(function(json){
      return form.today_form(json);
    })
    return cast;
  },

  next_days: function (cidade){
    let cast = response(cidade).then(function(json){
      return form.next_days_form(json);
    })
    return cast;
  }
};