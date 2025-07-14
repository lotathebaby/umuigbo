const carousel = document.getElementById('carousel');

const imgArray = [
  {
    src: 'umuigbo_photos/IMG_5893.jpg',
    alt: 'picture2',
    caption: 'cultural day',
  },
  {
    src: 'umuigbo_photos/IMG_5895.jpg',
    alt: 'picture4',
    caption: 'cultural day',
  },
  {
    src: 'umuigbo_photos/IMG_5897.jpg',
    alt: 'picture6',
    caption: 'cultural day',
  },
  {
    src: 'umuigbo_photos/IMG_5898.jpg',
    alt: 'picture7',
    caption: 'cultural day',
  },
  {
    src: 'umuigbo_photos/IMG_5899.jpg',
    alt: 'picture8',
    caption: 'cultural day',
  },
  {
    src: 'umuigbo_photos/IMG_5900.jpg',
    alt: 'picture9',
    caption: 'cultural day',
  },
  {
    src: 'umuigbo_photos/IMG_5901.jpg',
    alt: 'picture10',
    caption: 'cultural day',
  },
];

let currentIndex = 0;
//update DOM
const updateCarousel = () => {
  carousel.innerHTML = '';
  const carouselImg = document.createElement('img');
  carouselImg.src = imgArray[currentIndex].src;
  carouselImg.alt = imgArray[currentIndex].alt;
  carousel.appendChild(carouselImg);
};
updateCarousel();

setInterval(() => {
  updateCarousel();
  currentIndex++;
  if (currentIndex === imgArray.length) {
    currentIndex = 0;
  }
}, 4000);

const headingBtn = document.querySelectorAll('.heading');

const revealContent = () => {
  headingBtn.forEach((heading) => {
    heading.addEventListener('click', () => {
      const content = heading.nextElementSibling;
      content.classList.toggle('hidden');
    });
  });
};

revealContent();

const slides = document.querySelectorAll('.slide');
const slideContainer = document.getElementById('slides');
let current = 0;
setInterval(() => {
  slides.forEach((slide) => {
    slide.classList.add('hidden');
  });
  slides[current].classList.remove('hidden');
  slides[current].classList.add('block');

  current++;
  if (current >= slides.length) {
    current = 0;
  }
}, 5000);

const pastBtn = document.getElementById('past');
const upcomingBtn = document.getElementById('upcoming');
const pastEvent = document.getElementById('past-event');
const upcomingEvent = document.getElementById('upcoming-event');

pastBtn.addEventListener('click', () => {
  pastEvent.classList.remove('hidden');
  pastEvent.classList.add('grid');
  upcomingEvent.classList.remove('grid');
  upcomingEvent.classList.add('hidden');
});

upcomingBtn.addEventListener('click', () => {
  upcomingEvent.classList.remove('hidden');
  upcomingEvent.classList.add('grid');
  pastEvent.classList.remove('grid');
  pastEvent.classList.add('hidden');
});

const prevBtn = document.querySelectorAll('.prev');
const nextBtn = document.querySelectorAll('.next');
const steps = document.querySelectorAll('.step');
const submit = document.getElementById('submit');
const input = document.querySelectorAll('.input');
let currentStep = 0;

const changeSteps = () => {
  steps.forEach((step, index) => {
    if (index === currentStep) {
      step.classList.remove('hidden');
      step.classList.add('block');
    } else {
      step.classList.remove('block');
      step.classList.add('hidden');
    }
  });
};

const prevStep = () => {
  currentStep--;
  if (currentStep < 0) currentStep = 0;
  changeSteps();
};

const nextStep = () => {
  currentStep++;
  if (currentStep >= steps.length) currentStep = steps.length - 1;
  changeSteps();
};

changeSteps();

prevBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    prevStep();
  });
});

nextBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    nextStep();
  });
});

// submit.addEventListener('click', (e) => {
//   e.preventDefault();

//   let isValid = true;
//   input.forEach((item) => {
//     if (item.value === '') {
//       item.style.borderColor = 'red';
//       isValid = false;
//     } else {
//       item.style.borderColor = 'green';
//     }
//   });

// });
