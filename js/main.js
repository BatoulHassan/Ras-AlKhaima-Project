$(document).ready(function(){
  $('.owl-carousel1').owlCarousel({
    loop: true,
    margin:10,
    nav: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
        
      }
})
  });

  $(document).ready(function(){
    $('.owl-carousel2').owlCarousel({
      loop: true,
      margin:10,
      nav: true,
      responsiveClass:true,
      responsive:{
          0:{
              items:2,
              nav:false
          },
          600:{
              items:4,
              nav:false
          },
          1000:{
              items:6,
              nav:false,
              loop:true
          }
          
        }
  })
    });