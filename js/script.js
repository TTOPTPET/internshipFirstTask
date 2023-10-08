function myFunction(id) {

  document.getElementById(`dropdownMenu${id}`).classList.toggle("dropdown_active");
  document.getElementById(`dropdownButton${id}`).classList.toggle("table__item__link__icon_more_active");
  
}