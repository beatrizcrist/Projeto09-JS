function relogio(){
    //pega o hora atual
    let agora  = new Date()
    let horas = agora.getHours()
    let minutos = agora.getMinutes()
    let segundos = agora.getSeconds()

    //calcular a rotação dos ponteiros do relogio
    hrValue = (horas * 30) + (minutos * 6) / 12;
    minValue = minutos * 6;
    segValue = segundos * 6;

    document.querySelector(".hr-hand").style.transform = "rotate("+hrValue+"deg)"
    document.querySelector(".min-hand").style.transform = "rotate("+minValue+"deg)"
    document.querySelector(".sec-hand").style.transform = "rotate("+segValue+"deg)"
}

setInterval(relogio,1000)
