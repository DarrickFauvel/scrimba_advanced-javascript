import { contactsArr } from "./contactsData.js"

const patternSearchInput = document.getElementById("pattern-search-input")
const patternSearchSubmit = document.getElementById("pattern-search-submit")
const contactDisplay = document.getElementById("contact-display")

function renderContact(contactObj) {
  const { name, email, phone } = contactObj

  const contactCard = document.createElement("aside")
  contactCard.classList.add("contact-card")

  const p1 = document.createElement("p")
  p1.textContent = name
  contactCard.appendChild(p1)

  const p2 = document.createElement("p")
  p2.textContent = email
  contactCard.appendChild(p2)

  const p3 = document.createElement("p")
  p3.textContent = phone
  contactCard.appendChild(p3)

  contactDisplay.appendChild(contactCard)
}

function handleSubmit(e) {
  e.preventDefault()
  contactDisplay.innerHTML = ""
  const searchTerm = patternSearchInput.value
  const foundContacts = contactsArr.filter((contact) => {
    return Object.values(contact).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  })
  if (foundContacts.length > 0) {
    foundContacts.forEach((contact) => renderContact(contact))
    patternSearchInput.value = ""
    patternSearchInput.focus()
  }
}

patternSearchSubmit.addEventListener("click", handleSubmit)
