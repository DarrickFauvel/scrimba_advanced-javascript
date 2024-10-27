const collection = []

function addBookToCollection(title, author, yearPublished, libraryData) {
  // Explicitly check for title
  // if (title === undefined || title === null || title === "") {
  //   title = "Unknown Title"
  // }
  title = title || "Unknown Title"

  // Explicitly check for author
  // if (author === undefined || author === null || author === "") {
  //   author = "Unknown Author"
  // }
  author = author || "Unknown Author"

  // Explicitly check if yearPublished is undefined or null
  // if (yearPublished === undefined || yearPublished === null) {
  //   yearPublished = "Not Specified"
  // }
  yearPublished = yearPublished ?? "Not Specified"

  // Explicitly check for availability at main library
  // let availability = "Not Available" // Default value
  // if (libraryData) {
  //   if (libraryData.locations) {
  //     if (libraryData.locations.mainLibrary) {
  //       availability = "Available"
  //     }
  //   }
  // }
  const availability =
    (libraryData?.locations?.mainLibrary && "Available") || "Not Available"

  // Push the book object to 'collection'
  collection.push({
    title: title,
    author: author,
    yearPublished: yearPublished,
    availability: availability,
  })
}
// Examples of adding a book
addBookToCollection("JavaScript: The Good Parts", "Douglas Crockford", 2008, {
  locations: { mainLibrary: true },
})
addBookToCollection("", "William Shakespeare", null, null)
addBookToCollection("House of Giants", "Gemma Small", "", null, {
  locations: { mainLibrary: null },
})
console.log(collection) // House of Giants is not yet published!!
