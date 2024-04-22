window.alert = function(message,timeout=null){
    const alert = document.createElement('div');
    const alertButton = document.createElement('button');
    alert.classList.add('alert');
 
   
    alert.setAttribute('style',
          position:fixed;
          top:100px;
          left:50%;
          padding:20px;
          border-radius:10px;
          box-shadow:0 10px 5px 0  #00000022;
     
    
    
    
    );
    alert.innerText = message;
    document.body.appendChild(alert);
   

}






$(document).ready(function(){


    $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });
  
    $(window).on('load scroll',function(){
      $('.fa-bars').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
  
      if($(window).scrollTop() >30){
        $('.header').css({'background':'#7922A6','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
      }else{
        $('.header').css({'background':'none','box-shadow':'none'});
      }
    });

 

  
  
  
    // $('.accordion-header').click(function(){
    //   $('.accordion .accordion-body').slideUp();
    //   $(this).next('.accordion-body').slideDown();
    //   $('.accordion .accordion-header span').text('+');
    //   $(this).children('span').text('-');
    // });
  
  
  
  });
  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
  