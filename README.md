# SCM:

<p>Branch main: código em produção do projeto</p>
<p>Feature/XXXX - Branch individual de cada participante contendo o seu código para desenvolvimento</p>

## Release

Tag - release/sprint1 -> Contém todo o código desenvolvido durante a Sprint 1.

<br>

</br>

# Autenticação JWT:

## Cadastrar um usuário para receber um token:

<p>
curl --request POST \
  --url 'http://localhost:3000/user?=' \
  --header 'Authorization: Bearer ' \
  --header 'Content-Type: application/json' \
  --data '{
		"name": "{NAME}",
		"username": "{USERNAME}",
    "password": "{PASSWORD}",
		"confirmPassword": "{PASSWORD}"
}'
</p>

## Após se cadastrar, logar-se para receber seu token:

<code> 
  curl --request POST \
  --url 'http://localhost:3000/user/login?=' \
  --header 'Authorization: Bearer ' \
  --header 'Content-Type: application/json' \
  --data '{
		"username": "{username cadastrado}",
    "password": "{password}",
		"confirmPassword": "{password}"
}'
</code>


<br>
</br>

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
