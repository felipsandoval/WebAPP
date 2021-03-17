var slideIndex = 0;
showSlides();


function showSlides() {
       var i;
       var semaforo=0;
       var slides = document.getElementsByClassName("mySlides");
       console.log(slides)
       for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
              slides[i].style.visibility = "hidden";
              console.log(i)
       }
       slideIndex++;
       console.log("SlideIndex= " + i)
       if(slideIndex > slides.length) {
              slideIndex = 1
       }
       slides[slideIndex-1].style.display = "block";
       slides[slideIndex-1].style.visibility = "visible";

       // if (i>=2) {
       //        slides[slideIndex-2].style.display = "none";
       //        semaforo=1;
       // }
       // else{
       //        if (semaforo == 1){
       //               slidesIndex.style.display = "none";
       //        }
              
       // }
       setTimeout(showSlides,10000);

}




