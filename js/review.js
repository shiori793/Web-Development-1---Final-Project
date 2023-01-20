window.onload =function divScroller(){
    $('.slider').slick({
        autoplay: true,         //autoplay
        autoplaySpeed: 0,       //autoplay speed
        speed: 8000,            //slide speed
        slidesToShow: 1,        //number of slides displayed
        cssEase: "linear",      //Same slide movement
        pauseOnHover: false,    //not hovering and not stopping.
        pauseOnFocus: false,    //not stopping when focusing.
    });
};