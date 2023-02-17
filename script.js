function toggleham(x) {
  x.classList.toggle("change");

  let mymenu =document.querySelector('#my-menu')
  if (mymenu.className ==='menu') {
    mymenu.className += 'menu-active'
  }else{
    mymenu.className = 'menu'
  }
}