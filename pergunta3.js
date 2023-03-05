const faturamentoDiario = {
    "01": 1000,
    "02": 800,
    "03": 1200,
    "04": 0,
    "05": 1500,
    "06": 2000,
    "07": 1750,
    "08": 0,
    "09": 1000,
    "10": 1250,
    "11": 1100,
    "12": 900,
    "13": 1300,
    "14": 800,
    "15": 1750,
    "16": 2000,
    "17": 1400,
    "18": 0,
    "19": 1700,
    "20": 1500,
    "21": 1200,
    "22": 1000,
    "23": 900,
    "24": 1300,
    "25": 1800,
    "26": 1500,
    "27": 1600,
    "28": 0,
    "29": 1200,
    "30": 1100
  };
  
  const menorValor = Math.min(...Object.values(faturamentoDiario));
  console.log(`Menor valor de faturamento diário: ${menorValor}`);
  
  const maiorValor = Math.max(...Object.values(faturamentoDiario));
  console.log(`Maior valor de faturamento diário: ${maiorValor}`);
  
  const somaFaturamento = Object.values(faturamentoDiario).reduce((a, b) => a + b, 0);
  const diasComFaturamentoSuperiorMedia = Object.values(faturamentoDiario).filter(valor => valor > somaFaturamento / Object.keys(faturamentoDiario).length).length;
  console.log(`Número de dias com faturamento diário superior à média mensal: ${diasComFaturamentoSuperiorMedia}`);
  