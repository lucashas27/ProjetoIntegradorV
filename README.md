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
<code>

 Method <b>POST:</b>  
  https://microservice-buscadeputado.herokuapp.com/user/
  
  Body:
  
  {
		"username": {{USERNAME}},
		"name": {{NAME}},
    "password": {{password}},
		"confirmPassword": {{password}}
}

</code>
</p>

## Após se cadastrar, logar-se para receber seu token:

<code>
  Method <b>POST</b>:
    https://microservice-buscadeputado.herokuapp.com/user/login
  
  {
		"username": {{username}}",
    "password": {{password}},
		"confirmPassword": {{password}}
}
</code>

<br>
</br>

# API para os microserviços: 

Using curl:

## Retorna uma lista de votações.
<b> Authentication: Bearear Token </b> +
<code> curl --request GET \  --url https://microservice-buscadeputado.herokuapp.com/votacao </code>

## Retorna informações de uma votação específica, por ID.
<b> Authentication: Bearear Token </b> +
<code> curl --request GET \  --url https://microservice-buscadeputado.herokuapp.com/votacao/{{id}} </code>

## Retorna informações de uma proposta específica, por ID.
Authentication: Bearear Token </b>
<code> <b>  curl --request GET \  --url https://microservice-buscadeputado.herokuapp.com/propositions/{{id}} </code>

## Retorna uma lista de propostas. Filtrar por tema (pegar o ID no endpoint /temas) e filtra por sigla do Estado do Autor (EX: MG, SP, RJ)
<b> Authentication: Bearear Token </b> +
<code>curl --request GET \  --url 'https://microservice-buscadeputado.herokuapp.com/propositions?codTema={{codTema}}&siglaUfAutor={{estadoAutor}}' </code>

## Retorna uma lista de temas
<b> Authentication: Bearear Token </b> +
<code> curl --request GET \  --url https://microservice-buscadeputado.herokuapp.com/temas </code>

## Retorna informações de uma tema específico, por ID.
<b> Authentication: Bearear Token </b> +
<code> curl --request GET \  --url 'https://microservice-buscadeputado.herokuapp.com/temas/{{idTema}} </code>

## Retorna uma lista de deputados
<b> Authentication: Bearear Token </b> +
<code> curl --request GET \  --url 'https://microservice-buscadeputado.herokuapp.com/deputados </code>
