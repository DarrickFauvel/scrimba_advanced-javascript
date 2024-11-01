export function getStockData() {
  const getRandomNumber = () => (Math.random() * 3).toFixed(2)

  const getTimestamp = () => {
    const now = new Date()
    const hours = now.getHours().toString().padStart(2, "0")
    const minutes = now.getMinutes().toString().padStart(2, "0")
    const seconds = now.getSeconds().toString().padStart(2, "0")
    return `${hours}:${minutes}:${seconds}`
  }

  return {
    name: "QtechAI",
    sym: "QTA",
    price: getRandomNumber(),
    time: getTimestamp(),
  }
}

export function displayStockPriceIcon(stockDisplayPriceIcon, iconColor) {
  if (stockDisplayPriceIcon) {
    const imgEl = stockDisplayPriceIcon.querySelector("img")
    if (imgEl) {
      stockDisplayPriceIcon.removeChild(imgEl)
    }
  }
  const imgEl = document.createElement("img")
  imgEl.src = `./svg/${iconColor}.svg`
  imgEl.alt = `${isSecureContext} triangle`
  stockDisplayPriceIcon.appendChild(imgEl)
}

export function getIconColor(currentPrice, previousPrice) {
  return currentPrice > previousPrice
    ? "green"
    : currentPrice < previousPrice
    ? "red"
    : "grey"
}
