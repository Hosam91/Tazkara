function showExchange() {
  var exchangeField = document.getElementById("exchange-field");

  if (document.getElementById("exchange").checked) {
    exchangeField.style.display = "block";
  } else {
    exchangeField.style.display = "none";
  }
}
let cart = document.querySelector('.cart')
let addedItemsMenu = document.querySelector('.addedItems')


cart.addEventListener('click', function ()
{
  addedItemsMenu.style.display = 'block'
  console.log("hi");
})



// let parents=myCartIcon.parentNode
let page = document.querySelector('.content')

page.addEventListener('click', closeDropdown)

// parents.addEventListener('click', closeDropdown)
function closeDropdown()
{
  addedItemsMenu.style.display = 'none'

}