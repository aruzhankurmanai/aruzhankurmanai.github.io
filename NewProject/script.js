function slidePlugin(activeSlide = 0) {
  const slides = document.querySelectorAll('.slide')

  slides[activeSlide].classList.add('active')

  for (const slide of slides) { //"for" creates the cycle of 3 expressions
    slide.addEventListener('click', () => { //addEventListener add an event that happens after clicking
      clearActiveClasses() //event itself, removes active classes

      slide.classList.add('active') //shows the now active slide
    })
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove('active')
    })
  }
}

slidePlugin ()
