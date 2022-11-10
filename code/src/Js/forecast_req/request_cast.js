import {next_days_form, today_form} from  './forecast.js';

let response = async function(cidade){
  const fetch = require('node-fetch');
  const url = "https://api.hgbrasil.com/weather?key=979b2020&woeid="+cidade;  
  const res = await fetch(url, {method: "Get"});
  const resp = await res.json().then((json) => { 
    return json;
  });
  return resp;
}

export function today(cidade){
  let cast = response(cidade).then(function(json){
    return today_form(json);
  })
  return cast;
}

export function next_days(cidade){
  let cast = response(cidade).then(function(json){
    return next_days_form(json);
  })
  return cast;
}