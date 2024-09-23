import {
  displayStockPriceIcon,
  getIconColor,
  getStockData,
} from "./fakeStockAPI.js"

let previousPrice = 0
function renderStockTicker(stockData) {
  const stockDisplayName = document.getElementById("name")
  const stockDisplaySymbol = document.getElementById("symbol")
  const stockDisplayPrice = document.getElementById("price")
  const stockDisplayPriceIcon = document.getElementById("price-icon")
  const stockDisplayTime = document.getElementById("time")

  const { name, sym, price, time } = stockData
  const currentPrice = Number(price)
  const iconColor = getIconColor(currentPrice, previousPrice)

  stockDisplayName.textContent = name
  stockDisplaySymbol.textContent = sym
  stockDisplayPrice.textContent = price
  displayStockPriceIcon(stockDisplayPriceIcon, iconColor)
  stockDisplayTime.textContent = time

  previousPrice = currentPrice
}

setInterval(() => {
  const stockData = getStockData()
  renderStockTicker(stockData)
}, 1500)
