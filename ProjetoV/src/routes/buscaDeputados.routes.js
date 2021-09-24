const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/deputados', async (req, res, next) => {

  try {
    // Consumindo todos os temas de votações da API da câmara e filtrando por nome
    const {
      data
    } = await axios('https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome')
    deputadosNomes = data.dados.map(dados => dados.nome)
    dadosDeputados = data.dados.map(dados => 'Nome: ' + dados.nome + ' Membro do: ' + dados.siglaPartido + ' do estado de: ' + dados.siglaUf + ' uri Foto:' + dados.urlFoto )

    res.status(200).json({
      'Lista de deputados': deputadosNomes ,
      'Dados dos deputados': dadosDeputados ,
      'Dados gerais': data ,
    });
  } catch (error) {
    console.error("Algum erro inesperado aconteceu:" + error)
  }
});

module.exports = router;