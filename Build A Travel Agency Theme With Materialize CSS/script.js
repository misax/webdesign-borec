//Sidenav

function sidebar(){
   const side = document.querySelector('.sidenav'); 
    M.Sidenav.init(side,{});
}

//Slider
function slider(){
    const slider = document.querySelector('.slider');
    M.Slider.init(slider,{
    indicators:false,
    height:500,
    transition:500,
    interval:6000
});
}

/*Autocomplete*/ 
function autocomplete(){
    const auto = document.querySelector('.autocomplete');
    M.Autocomplete.init(auto,{
    data:{
        "Aruba":null,
        "Cancun Mexico":null,
        "Hawaii":null,
        "Florida":null,
        "Europe":null,
        "California":null,
        "Norway":null
    }
});
}

/*Material Boxed*/
function materialBoxed(){
    const box = document.querySelectorAll('.materialboxed');

    M.Materialbox.init(box,{})
}

/*Scroll  spy*/ 
function scrollSpy(){
    const spy = document.querySelectorAll('.scrollspy');

    M.scrollSpy.init(spy,{})
}

/*Init all utilities*/ 
(function initAll(func,func2,func3,func4,func5){
   func =  sidebar();
    func2 = slider();
   func3 =   autocomplete();
  func4 = materialBoxed();
  func5 = scrollSpy();

}());



