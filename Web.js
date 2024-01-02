window.onload = function() {
    var slide = document.querySelector('.slideshow');
    var images = [
       'img1.png',
       'img2.png',
       'img3.png',
       'do.png'
    ];
    var time = 3000;
    var count = 0;
   
    function moveSlideshow() {
       slide.style.backgroundImage = 'url(' + images[count] + ')';
   
       if (count < images.length - 1) {
         count++;
       } else {
         count = 0;
       }
   
       setTimeout(moveSlideshow, time);  
    }
    moveSlideshow();
   };







