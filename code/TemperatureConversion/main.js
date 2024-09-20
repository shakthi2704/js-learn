const textBox = document.getElementById("textBox")
const toFahrenheit = document.getElementById("toFahrenheit")
const toCelsius = document.getElementById("toCelsius")
const result = document.getElementById("result")

function convert(event) {
  event.preventDefault()

  const inputTemp = parseFloat(textBox.value)
  let convertedTemp

  if (toFahrenheit.checked) {
    convertedTemp = (inputTemp * 9) / 5 + 32
    result.textContent = `${inputTemp} °C = ${convertedTemp.toFixed(2)} °F`
  } else if (toCelsius.checked) {
    convertedTemp = ((inputTemp - 32) * 5) / 9
    result.textContent = `${inputTemp} °F = ${convertedTemp.toFixed(2)} °C`
  } else {
    result.textContent = "Please select a conversion unit."
  }
}
