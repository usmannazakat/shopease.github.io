const slides =  document.querySelectorAll('.slide');
var counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

function slidePrev()
{
  if(counter>0)
  {
    counter--;
    toSlide();
  }
}
function slideNext()
{
  if(counter<2)
  {
    counter++;
    toSlide();
  }
}



function toSlide()
{
  slides.forEach((slide) => {
    slide.style.transform = `translate(-${counter * 100}%)`
  });
}