function onDropdown(id) {
  document.getElementById(`dropdownMenu${id}`).classList.toggle("dropdown_active");
  document.getElementById(`dropdownButton${id}`).classList.toggle("table__item__link__icon_more_active");    
}

function onSwitch() {

  document.getElementById(`switch`).classList.toggle("switch__btn_on");
  const text = document.getElementsByClassName('switch__text');
  for (let i = 0; i < text.length; i++) {
    text[i].classList.toggle('switch__text_active')
  }
  
}