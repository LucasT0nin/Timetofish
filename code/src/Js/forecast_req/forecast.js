export function next_days_form(json){
  return {
    'amanha': {
      'data': json['results']['forecast'][1]['date'],
      'weekday': json['results']['forecast'][1]['weekday'],
      'description:': json['results']['forecast'][1]['description'],
      'min' : json['results']['forecast'][1]['min'],
      'max' : json['results']['forecast'][1]['max'],
      'condition': json['results']['forecast'][1]['condition']
    },
    'depois amanha': {
      'data': json['results']['forecast'][2]['date'],
      'weekday': json['results']['forecast'][2]['weekday'],
      'description:': json['results']['forecast'][2]['description'],
      'min' : json['results']['forecast'][2]['min'],
      'max' : json['results']['forecast'][2]['max'],
      'condition': json['results']['forecast'][2]['condition']
    },
    'depois de depois de amanha': {
      'data': json['results']['forecast'][3]['date'],
      'weekday': json['results']['forecast'][3]['weekday'],
      'description:': json['results']['forecast'][3]['description'],
      'min' : json['results']['forecast'][3]['min'],
      'max' : json['results']['forecast'][3]['max'],
      'condition': json['results']['forecast'][3]['condition']
    }
  }   
}

export function today_form(json){
  return {
    'cidade': json['results']['city'],
    'temperatura': json['results']['temp'],
    'descricao': json['results']['description'],
    'velocidade do vento': json['results']['wind_speedy'],
    'min' : json['results']['forecast'][0]['min'],
    'max' : json['results']['forecast'][0]['max']
  };
}