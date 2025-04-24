const fundo=document.body //veriável que pega o body

function escondeBotao(){
    btnApagar.style.display="none" //Desaparece o botão de apagar a lâmpada
    fundo.style.background = "#121212" //Fundo inicia escuro
    btnTrocar.style.display="none" //Desaparece o botão de trocar lâmpada
}

function ligado(){
    imgLampada.setAttribute("src", "imagens/lampada-on.png") //Troca a imagem
    fundo.style.background= "#5CC1E9"
    btnApagar.style.display="inline"//Aparece o botão de apagar a lâmpada
    btnAcender.style.display="none" //Desaparece o botão de acender a lâmpada
    btnTrocar.style.display="none" //Desaparece o botão de trocar lâmpada
    
}

btnAcender.addEventListener("click", ligado) //Quando clicar acende a lâmpada

function apagarTrocar(){
    imgLampada.setAttribute("src", "imagens/lampada-off.png") //Troca a imagem
    fundo.style.background= "#121212"
    btnApagar.style.display="none" //Desaparece o botão de apagar a lâmpada
    btnAcender.style.display="inline"//Aparece o botão de acender a lâmpada
    btnTrocar.style.display="none"// desaparece o botão de trocar lâmpada
    
}

btnApagar.addEventListener("click", apagarTrocar) //Quando clicar apaga a lâmpada
btnTrocar.addEventListener("click", apagarTrocar) //Quando clicar troca a lâmpada

function quebrado(){
    imgLampada.setAttribute("src", "imagens/lampada-quebrada.png") //Troca a imagem
    alert("Precisava quebrar?")
    fundo.style.background= "#121212"
    btnApagar.style.display="none" //Desaparece o botão de apagar a lâmpada
    btnAcender.style.display="none" //Desaparece o botão de acender a lâmpada
    btnTrocar.style.display="inline" // Aparece o botão de trocar lâmpada
}

imgLampada.addEventListener("dblclick", quebrado) //Quando clicar duas vezes quebra a lâmpada