let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () =>{
   searchForm.classList.toggle('active');
   navbar.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active'); 
};

document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop:true,
   grabCursor:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".blogs-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
       },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
   },
});

document.addEventListener("DOMContentLoaded", function() { 
   const carousel = document.querySelector(".carousel"); 
   const arrowBtns = document.querySelectorAll(".wrapper i"); 
   const wrapper = document.querySelector(".wrapper"); 
 
   const firstCard = carousel.querySelector(".card"); 
   const firstCardWidth = firstCard.offsetWidth; 
 
   let isDragging = false, 
       startX, 
       startScrollLeft, 
       timeoutId; 
 
   const dragStart = (e) => {  
       isDragging = true; 
       carousel.classList.add("dragging"); 
       startX = e.pageX; 
       startScrollLeft = carousel.scrollLeft; 
   }; 
 
   const dragging = (e) => { 
       if (!isDragging) return; 
     
       // Calculate the new scroll position 
       const newScrollLeft = startScrollLeft - (e.pageX - startX); 
     
       // Check if the new scroll position exceeds  
       // the carousel boundaries 
       if (newScrollLeft <= 0 || newScrollLeft >=  
           carousel.scrollWidth - carousel.offsetWidth) { 
             
           // If so, prevent further dragging 
           isDragging = false; 
           return; 
       } 
     
       // Otherwise, update the scroll position of the carousel 
       carousel.scrollLeft = newScrollLeft; 
   }; 
 
   const dragStop = () => { 
       isDragging = false;  
       carousel.classList.remove("dragging"); 
   }; 
 
   const autoPlay = () => { 
     
       // Return if window is smaller than 800 
       if (window.innerWidth < 800) return;  
         
       // Calculate the total width of all cards 
       const totalCardWidth = carousel.scrollWidth; 
         
       // Calculate the maximum scroll position 
       const maxScrollLeft = totalCardWidth - carousel.offsetWidth; 
         
       // If the carousel is at the end, stop autoplay 
       if (carousel.scrollLeft >= maxScrollLeft) return; 
         
       // Autoplay the carousel after every 2500ms 
       timeoutId = setTimeout(() =>  
           carousel.scrollLeft += firstCardWidth, 2500); 
   }; 
 
   carousel.addEventListener("mousedown", dragStart); 
   carousel.addEventListener("mousemove", dragging); 
   document.addEventListener("mouseup", dragStop); 
   wrapper.addEventListener("mouseenter", () =>  
       clearTimeout(timeoutId)); 
   wrapper.addEventListener("mouseleave", autoPlay); 
 
   // Add event listeners for the arrow buttons to  
   // scroll the carousel left and right 
   arrowBtns.forEach(btn => { 
       btn.addEventListener("click", () => { 
           carousel.scrollLeft += btn.id === "left" ?  
               -firstCardWidth : firstCardWidth; 
       }); 
   }); 
}); 