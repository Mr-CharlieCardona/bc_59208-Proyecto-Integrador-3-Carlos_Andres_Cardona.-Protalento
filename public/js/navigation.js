

let modalCart = document.querySelector('.modal-cart');
let cartIcon = document.querySelector('#cart');
const sectionCart = document.querySelector('.section-cart');
const closeCart = document.querySelector('#close')



let links = document.querySelectorAll('.nav-link');
links.forEach(link => {
 link.addEventListener('click', (e)=>{
   e.preventDefault();
   document.cookie = 'token=navigation'
   console.log(sessionStorage);
   const url =  e.target.pathname;
   fetch(url)
      .then(res => res.text())
      .then(data =>{
         console.log(data);
         const mainContent = document.getElementById('main-content');
         mainContent.innerHTML = '';
         mainContent.innerHTML = data;
      })
      .catch(error => console.log(error))
 
 })
})


   


