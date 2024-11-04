function contagem(){
// Obtém o elemento de entrada e o elemento de saída
var countdownInput = document.getElementById("dtcontagem");
var countdownOutput = document.getElementById("countdown");

// Atualiza a contagem regressiva a cada segundo
var x = setInterval(function() {

  // Obtém a data final da contagem regressiva do elemento de entrada
  var countDownDate = new Date(countdownInput.value).getTime();

  // Obtém a data e hora atual
  var now = new Date().getTime();

  // Calcula a distância entre a data atual e a data final da contagem regressiva
  var distance = countDownDate - now;

  // Calcula dias, horas, minutos e segundos restantes
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Exibe a contagem regressiva na página HTML
  countdownOutput.innerHTML = days + " Dias  " + hours + " Horas " + minutes + "Minutos " + seconds + " Segundos Para as Férias ";

  // Quando a contagem regressiva termina, exibe uma mensagem
  if (distance < 0) {
    clearInterval(x);
    countdownOutput.innerHTML = "FERIASSSSSSSSSSSS!";
  }
}, 1000);

}
