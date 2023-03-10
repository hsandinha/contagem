// Define a data final da contagem regressiva
var countDownDate = new Date("Mar 10, 2023 17:00:00").getTime();

// Atualiza a contagem regressiva a cada segundo
var x = setInterval(function() {

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
  document.getElementById("countdown").innerHTML = days + "Dias - " + hours + "h " + minutes + ":"  + seconds ;

  // Quando a contagem regressiva termina, exibe uma mensagem
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "A contagem regressiva terminou!";
  }
}, 1000);