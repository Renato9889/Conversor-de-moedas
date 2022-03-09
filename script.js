function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorNumerico = parseFloat(valor);
  var valorEmReal = valorNumerico * 5;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "Resultado em real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}
