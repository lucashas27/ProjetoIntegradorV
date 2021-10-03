# API para os microserviços: 

Using curl:

## Retorna uma lista de votações.
curl --request GET \  --url https://microservice-buscadeputado.herokuapp.com/votacao

## Retorna informações de uma votação específica, por ID.
curl --request GET \  --url https://microservice-buscadeputado.herokuapp.com/votacao/{{id}}

## Retorna informações de uma proposta específica, por ID.
curl --request GET \  --url https://microservice-buscadeputado.herokuapp.com/propositions/{{id}}

## Retorna uma lista de propostas. Filtrar por tema (pegar o ID no endpoint /temas) e filtra por sigla do Estado do Autor (EX: MG, SP, RJ)
curl --request GET \  --url 'https://microservice-buscadeputado.herokuapp.com/propositions?codTema={{codTema}}&siglaUfAutor={{estadoAutor}}'

## Retorna uma lista de temas
curl --request GET \  --url https://microservice-buscadeputado.herokuapp.com/temas

## Retorna informações de uma tema específico, por ID.
curl --request GET \  --url 'https://microservice-buscadeputado.herokuapp.com/temas/{{idTema}}

## Retorna uma lista de deputados
curl --request GET \  --url 'https://microservice-buscadeputado.herokuapp.com/deputados
