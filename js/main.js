function myFunction(x) {
    x.classList.toggle("change");
  } 

  const navbar = document.querySelector('.navbar');
  const menu = document.querySelector('.menu-list');
  const menuBtn = document.querySelector('.menu-btn');
  const cancelBtn = document.querySelector('.cancel-btn');
  
menuBtn.onclick = ()=>{
      menu.classList.add("active");
      menu.classList.add("hide");
  }
cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menu.classList.remove("hide");

}
window.onscroll = ()=>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}