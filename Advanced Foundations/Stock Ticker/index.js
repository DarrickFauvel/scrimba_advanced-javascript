import { getStockData } from "./fakeStockAPI.js"

const comparePrices = (currentPrice, previousPrice) => {
  let iconColor = "grey"
  if (currentPrice > previousPrice) {
    iconColor = "green"
  } else if (currentPrice < previousPrice) {
    iconColor = "red"
  }
  return iconColor
}

let previousPrice = 0
function renderStockTicker(stockData) {
  const { name, sym: symbol, price, time } = stockData

  const currentPrice = Number(price)

  const stockDisplayName = document.getElementById("name")
  const stockDisplaySymbol = document.getElementById("symbol")
  const stockDisplayPrice = document.getElementById("price")
  const stockDisplayPriceIcon = document.getElementById("price-icon")
  const stockDisplayTime = document.getElementById("time")

  stockDisplayName.textContent = name
  stockDisplaySymbol.textContent = symbol
  stockDisplayPrice.textContent = price
  stockDisplayPriceIcon.innerHTML = `<img src="./svg/${comparePrices(
    currentPrice,
    previousPrice
  )}.svg" />`

  stockDisplayTime.textContent = time

  previousPrice = currentPrice
}

const refreshStockData = () => {
  const refreshIntervalId = setInterval(() => {
    renderStockTicker(getStockData())
  }, 1500)
}

refreshStockData()
