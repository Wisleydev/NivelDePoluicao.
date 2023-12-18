function verificarNivelDePoluicao(aqi) {
    if (aqi >= 0 && aqi <= 50) {
      return "Bom - Qualidade do ar é boa.";
     }else
        if(aqi > 50 && aqi <= 50){
            return "Moderado - Qualidade do ar razoável.";
        }
        else if (aqi > 100 && aqi <= 150){
            return "Prejudicial a grupos sensíveis.";
        }
        else if (aqi > 150 && aqi <= 200){
            return "Prejudicial à saúde.";
        }
        else if (aqi > 200 && aqi <= 300){
            return "Muito prejudicial à saúde.";
        }
        else
        {
            return "Perigoso - Evite atividade ao ar livre.";}
      }
    //Exemplo de uso const aqi = 120;
    //Altere o valor do AQI conforme necessário
    const aqi = 301;
    const nivelDePoluicao = verificarNivelDePoluicao(aqi);
    document.write(`Nivel de poluição: ${nivelDePoluicao}`);
