import { propertyForSaleArr } from "./properties/propertyForSaleArr.js"
import { placeholderPropertyObj } from "./properties/placeholderPropertyObj.js"

function renderCard(property) {
  const {
    propertyLocation: location,
    priceGBP: price,
    roomsM2: roomsInSquareMeters,
    comment,
    image,
  } = property

  const totalRoomSizeInSquareMeters = roomsInSquareMeters.reduce(
    (total, currentPrice) => total + currentPrice,
    0
  )

  return `<section class="card">
    <img src="/images/${image}">
    <div class="card-right">
        <h2>${location}</h2>
        <h3>${price}</h3>
        <p>${comment}</p>
        <h3>${totalRoomSizeInSquareMeters} m&sup2;</h3>
    </div>
</section>`
}

function renderCards(properties) {
  return properties.map((property) => renderCard(property)).join("")
}


/***** Modify 👇 by adding an argument to the function call ONLY. *****/
document.getElementById('container').innerHTML = getPropertyHtml()