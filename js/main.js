$(document).ready(function () {
  $(".slider").slick({
    // bu togmalr uchun
    dots: true,

    // default holatda nechta slider turishi
    slidesToShow: 1,

    // bir next button ni bosganda nechta slider yurishi
    slidesToScroll: 1,

    // tezligi
    speed: 500,

    // slider lar qay tarizda harakat qilishi
    easing: "ease",

    // slider cheksiz ligi
    infinite: true,

    // slider qaysi slidan boshlashi kerak ligini belgilash
    initialSlide: 0,

    // sliderlar default ozgarib turish
    autoplay: true,

    //sliderlar default ozgarib turish vaqini belgilash
    autoplaySpeed: 2000,

    //silder hududiga bosganda tohtashi
    // pouseOnFocus: true
    //pouseOnHover: true
    // pouseOnDotsHover: true

    // mishka bilan click qilib sliderni surish ammo responsiv holatda yani tel va planshet larda ishlay
    // draggable: false,

    // responsive holatda scrol halt bilan otkazishni olib tashlash
    // swipe: false
  });
});

let count=1
if (window.screen.width==830) {
     count=2
}

$(document).ready(function () {
    $(".from-google__slider").slick({
      // bu togmalr uchun
      dots: true,
  
      // default holatda nechta slider turishi
      
    // default holatda nechta slider turishi
    slidesToShow: count,

    // bir next button ni bosganda nechta slider yurishi
    slidesToScroll: count,

    // tezligi
    speed: 500,

    // slider lar qay tarizda harakat qilishi
    easing: "ease",

    // slider cheksiz ligi
    infinite: true,

    // slider qaysi slidan boshlashi kerak ligini belgilash
    initialSlide: 0,

    // sliderlar default ozgarib turish
    autoplay: false,
  
      //sliderlar default ozgarib turish vaqini belgilash
      // autoplaySpeed: 500,
  
      //silder hududiga bosganda tohtashi
      // pouseOnFocus: true
      //pouseOnHover: true
      // pouseOnDotsHover: true
  
      // mishka bilan click qilib sliderni surish ammo responsiv holatda yani tel va planshet larda ishlay
      // draggable: false,
  
      // responsive holatda scrol halt bilan otkazishni olib tashlash
      // swipe: false
    });
  });
  