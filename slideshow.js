
var slideIndex = 0;
showSlides(0);
var time;
var isPrev=false;

function plusSlides(n) {
  clearTimeout(time)
  if (n==1){
    showSlides(n);
  }
  else if (n==-1){
    isPrev=true;
    showSlides(n);
  }
}



function currentSlide(n) {
  clearTimeout(time)
  showSlides(slideIndex = n);
}

function showSlides(n) {
 
  var i;
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
   slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (isPrev==true){
    slideIndex-=2;
    isPrev=false;
  }
  if (slideIndex > slides.length) {slideIndex = 1}
  if (slideIndex==0){slideIndex = slides.length} 
  slides[slideIndex-1].style.display = "block"; 
  
  time=setTimeout(function(){showSlides(n)}, 4000);
}