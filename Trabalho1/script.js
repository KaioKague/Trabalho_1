function selecionarImgProduto(imgMiniatura){
    document.getElementsById("imgPrincipal").src = imgMiniatura.src;
}

function mudarPreco(botTipos){
    if(botTipos.id == "btnModeloPreto"){
        document.getElementById('precoProduto').innerHTML = "R$ 56,90";
        document.getElementById('qtdDisponivel').innerHTML = "171 peças disponíveis";
    }
    else if(botTipos.id == "btnModeloAzul"){
        document.getElementById('precoProduto').innerHTML = "R$ 56,90";
        document.getElementById('qtdDisponivel').innerHTML = "152 peças disponíveis";
    }
    else if(botTipos.id == "btnModeloVerde"){
        document.getElementById('precoProduto').innerHTML = "R$ 49,90";
        document.getElementById('qtdDisponivel').innerHTML = "213 peças disponíveis";
    }
    else if(botTipos.id == "btnModeloCinza"){
        document.getElementById('precoProduto').innerHTML = "R$ 69,90";
        document.getElementById('qtdDisponivel').innerHTML = "353 peças disponíveis";
    }
    else if(botTipos.id == "btnModeloRosa"){
        document.getElementById('precoProduto').innerHTML = "R$ 69,90";
        document.getElementById('qtdDisponivel').innerHTML = "319 peças disponíveis";
    }
}

function mudarTamanho(botSelecionado){
    if(botSelecionado.id == "btnTamanhoM"){
        document.getElementById('tamanhoSelecionado').innerHTML = "Tamanho Selecionado: M";
    }
    else if(botSelecionado.id == "btnTamanhoP"){
        document.getElementById('tamanhoSelecionado').innerHTML = "Tamanho Selecionado: P";
    }
    else if(botSelecionado.id == "btnTamanhoG"){
        document.getElementById('tamanhoSelecionado').innerHTML = "Tamanho Selecionado: G";
    }
    else if(botSelecionado.id == "btnTamanhoGG"){
        document.getElementById('tamanhoSelecionado').innerHTML = "Tamanho Selecionado: GG";
    }
}