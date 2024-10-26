import { propertyForSaleArr } from "./properties/propertyForSaleArr.js"
import { placeholderPropertyObj } from "./properties/placeholderPropertyObj.js"
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

    <div class="card-right">
        <h2>PROPERTY LOCATION</h2>
        <h3>PRICE GBP</h3>
        <p>COMMENT</p>
        <h3>TOTAL SIZE IN SQUARE METRES m&sup2;</h3>
    </div>
</section> 
*/
}

/***** Modify 👇 by adding an argument to the function call ONLY. *****/
document.getElementById('container').innerHTML = getPropertyHtml()