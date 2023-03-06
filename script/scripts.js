function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("header").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgb(31, 30, 30)";
    document.getElementById("header").backgroundColor = "rgb(0, 132, 255)";
  }
  
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("header").style.marginLeft = "0";
    document.body.style.backgroundColor = "rgb(56, 56, 56)";
    document.header.style.backgroundColor = "rgb(36, 35, 35))";
  }
  

function homeIndex() {
    const heightFromTop = 300;

    this.initialiseScrollToTopButton = function () {
        $(window).scroll(function () {
            var verticalHeight = $(this).scrollTop();
            if (verticalHeight > heightFromTop) {
                $("#scrollToTop").fadeIn();
            } else {
                $("#scrollToTop").fadeOut();
            }
        });
        
        $("#scrollToTop").click(function () {
            $("html, body").animate({ scrollTop: 0 }, "slow");
        });
    }
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


$(function() {
   
    $("#signinbutton").click(function(){
        $("#signUpModal").modal();
    });

    $("#loginButton").click(function(){
        $("#loginModal").modal();
    });

    $("#profileicon").click(function(){
        $("#loginModal").modal();
    });

});

