function Converter() {
  var temperaturaCelcius = parseFloat(
    document.getElementById("temperaturaCelcius").value
  );
  var conversao = document.querySelector('input[name="opcoes"]:checked').value;

  if (conversao == "Fahrenheit") {
    var temperaturaFahrenheit = (temperaturaCelcius * 1.8 + 32).toFixed(2);
    var conversaoFahrenheit =
      "O resultado em graus Fahrenheit é de " + temperaturaFahrenheit + "°F";
    var elementoValorConvertido1 = document.getElementById("valorConvertido1");
    elementoValorConvertido1.innerHTML = conversaoFahrenheit;
  } else if (conversao == "Kelvin") {
    var temperaturaKelvin = (temperaturaCelcius + 273.15).toFixed(2);
    var conversaoKelvin =
      "O resultado em graus Kelvin é de " + temperaturaKelvin + "K";
    var elementoValorConvertido2 = document.getElementById("valorConvertido1");
    elementoValorConvertido2.innerHTML = conversaoKelvin;
  }
  // Para limpar os campos inseridos
  document.getElementById("temperaturaCelcius").value = "";
  var listaOpcoes = document.getElementsByName("opcoes");
  listaOpcoes[0].checked = false;
  listaOpcoes[1].checked = false;
}