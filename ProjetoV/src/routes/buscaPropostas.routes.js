const express = require('express');
const router = express.Router();
const axios = require('axios');

// Lista todos de votação
router.get('/votacao/:id', async(req, res, next) => {
    let idTema = req.params.id
    try {
        // Consumindo as propostas de votação com base no ID do tema
        const {
            data
        } = await axios('https://dadosabertos.camara.leg.br/api/v2/proposicoes/' + idTema)

        res.status(200).json({

            'Nomes das ementas': data,

        });
    } catch (error) {
        console.error("Algum erro inesperado aconteceu: " + error)
    }

});

module.exports = router;