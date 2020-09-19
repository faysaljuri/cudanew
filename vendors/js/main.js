$(document).ready(function(){
    
    // sticky nav
    
    $(".js-sticky-nav").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
        }
        else{
        $("nav").removeClass("sticky");
    }
    });
    
    // active navbar link
    
    
    $('nav li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

    });
    
    // portfolio image mixit
var mixer = mixitup('.gallery');
    
});


function openNav(){
    document.getElementById("MyNav").style.width="100%";
}

function closeNav(){
    document.getElementById("MyNav").style.width="0";
}


