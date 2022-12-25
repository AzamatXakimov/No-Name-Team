const elChooseItem = document.querySelectorAll(".choose-list__item")
const elChooseLink = document.querySelectorAll(".choose-list__link")
const elChooseWrapper = document.querySelectorAll(".choose-wrap__wrapper")

elChooseLink.forEach(function (links) {
  links.addEventListener("click", function (evt) {
    evt.preventDefault()

    elChooseLink.forEach(function (item) {
      item.classList.remove("choose-list__link--active")
      // item.classList.remove("choose-list__link--active")
    })

    links.classList.add("choose-list__link--active")

    elChooseWrapper.forEach(function (bookmark) {
      bookmark.classList.remove("choose-wrap__wrapper--active")
    })
    document
      .querySelector(links.getAttribute("href"))
      .classList.add("choose-wrap__wrapper--active")
  })
})
