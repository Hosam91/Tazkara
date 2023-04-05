function showExchange() {
  var exchangeField = document.getElementById("exchange-field");

  if (document.getElementById("exchange").checked) {
    exchangeField.style.display = "block";
  } else {
    exchangeField.style.display = "none";
  }
}