
const navbar_icon = document.querySelector(".navbar--icon");
const navbar = document.querySelector(".navbar");

navbar_icon.addEventListener("click", ()=>{
    navbar_icon.classList.toggle("navbar--icon--active");
    navbar.classList.toggle("visible");
    console.log("clicked");
});


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
 
  slides[slideIndex-1].style.display = "block";
}




//FAQ Animation
const question_icon = document.getElementsByClassName("question--icon");

console.log(typeof(question_icon))

// question_icon.forEach(element => {
//   element.addEventListener("click", (e)=>{
//     console.log('fdsf');
//   })
// });

Array.from(question_icon).forEach(element => {
  element.addEventListener("click", (e)=>{
    toggleAnswer(e)
  })
});

function toggleAnswer(event){

  var target;
  target = event.target;

  if(target.className !== 'question--icon'){
    target = event.target.parentNode;

  }
  target.nextElementSibling.classList.toggle('visible');
  target.lastElementChild.classList.toggle('faq--icon-rotate')
}