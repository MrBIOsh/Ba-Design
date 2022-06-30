
//Parallax

window.addEventListener("scroll", function() {
    const scrollTarget = document.querySelector('.container-bottom');
    const topOffset = 100;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;
    document.querySelector(
      ".iphone-2"
    ).style.transform = `translateY(${(-offsetPosition/10) * -.5}%)`;
    document.querySelector(
      ".iphone-1"
    ).style.transform = `translateY(${(-offsetPosition/10) * .5}%)`;
  });

  document.querySelectorAll('.input__box').forEach(function(input) {
    input.querySelector('.form__input').addEventListener("focus", function() {
      input.querySelector('.form__span').style.display = "none";
    })
    input.querySelector('.form__input').addEventListener("blur", function() {
      if (input.querySelector('.form__input').value !== '') {        
        input.querySelector('.form__span').style.display = "none";
      } else input.querySelector('.form__span').style.display = "block";
    })
  })

  const tl = new TimelineMax({repeat: -1, repeatDelay: 1});

  tl.fromTo(".form__span-name", 5, {
    width: "0",
  }, {
    width: "148px", /* same as text-description width */
    ease:  SteppedEase.config(8),
    repeatDelay: 1
  }, 0); 

  tl.fromTo(".form__span-number", 5, {
    width: "0",
  }, {
    width: "180px", /* same as text-description width */
    ease:  SteppedEase.config(10),
    repeatDelay: 1
  }, 0); 