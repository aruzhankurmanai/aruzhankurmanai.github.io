function slidePlugin(activeSlide = 0) {
  const slides = document.querySelectorAll('.slide')

  slides[activeSlide].classList.add('active')

  let act = activeSlide

  for (const slide of slides) { //"for" creates the cycle of 3 expressions
    slide.addEventListener('click', () => { //addEventListener add an event that happens after clicking
      clearActiveClasses() //event itself, removes active classes

      slide.classList.add('active') //shows the now active slide
    })
  }

  document.querySelector(".right").addEventListener("click", () => {
    clearActiveClasses()

    console.log(act + " Right")

    if(act == slides.length - 1){
      act++
      act = 0
      slides[act].classList.add('active')
    } else{
      act++
      slides[act].classList.add('active')
    }

  })

  document.querySelector(".left").addEventListener("click", () => {
    clearActiveClasses()

    console.log(act + "left")

    if(act == 0){
      act = slides.length
      act--
      slides[act].classList.add('active')
    }else{
      act--
      slides[act].classList.add('active')
    }

  })

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove('active')
    })
  }
}

slidePlugin ()
