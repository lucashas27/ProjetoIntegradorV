const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/votacao', async (req, res, next) => {

  try {
    // Mostrando todas as votações em aberto
    const {
      data
    } = await axios('https://dadosabertos.camara.leg.br/api/v2/proposicoes?ano=2021&dataInicio=2021-09-01&codSituacao=924&ordem=ASC&ordenarPor=id')
    votacaoEmenta = data.dados.map(dados => ' ID ' + dados.id+ ' Ementa ' + dados.ementa + ' Sigla ' + dados.siglaTipo)
    // siglaTipo = data.dados.map(dados =>  dados.id)

    res.status(200).json({
      'Lista de votacao': votacaoEmenta,
       'Dados': data
            
    });
  } catch (error) {
    console.error("Algum erro inesperado aconteceu:" + error)
  }
});



module.exports = router;