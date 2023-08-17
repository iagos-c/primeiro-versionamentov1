var txtCep = document.getElementById("cep")
var txtLogradouro = document.getElementById("logradouro")
var txtBairro = document.getElementById("bairro")
var txtUf = document.getElementById("uf")
var txtLocalidade = document.getElementById("localidade")
var span = document.getElementById("erro")


function limparCampos(){
    txtLogradouro.value = ""
    txtBairro.value = ""
    txtLocalidade = ""
    txtUf.value = ""
}

function preencherCampos(json){
    txtLogradouro.value = json.logradouro
    txtBairro.value = json.bairro
    txtLocalidade.value = json.localidade
    txtUf.value = json.uf
}


async function getCep(){
    
    if(txtCep.value.length < 8){

    } else {
    let resposta = await fetch(`https://viacep.com.br/ws/${txtCep.value}/json/`)
    let json = await resposta.json()
        if(json.erro){
            limparCampos()
            span.innerText = "Cep inválido"
        } else{
            span.innerText = ""
            preencherCampos(json)
        }
    }
    
}


txtCep.addEventListener('focusout', getCep)
