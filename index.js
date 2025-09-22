// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');

function openMobileMenu() {
  mobileMenuOverlay.classList.remove('hidden');
  mobileMenuToggle.setAttribute('aria-expanded', 'true');
  setTimeout(() => {
    mobileMenu.classList.remove('translate-x-full');
  }, 10);
}

function closeMobileMenu() {
  mobileMenu.classList.add('translate-x-full');
  mobileMenuToggle.setAttribute('aria-expanded', 'false');
  setTimeout(() => {
    mobileMenuOverlay.classList.add('hidden');
  }, 300);
}

mobileMenuToggle.addEventListener('click', openMobileMenu);
mobileMenuClose.addEventListener('click', closeMobileMenu);
mobileMenuOverlay.addEventListener('click', (e) => {
  if (e.target === mobileMenuOverlay) {
    closeMobileMenu();
  }
});

// Close mobile menu when clicking on nav links
document.querySelectorAll('#mobile-menu a[href^="#"]').forEach((link) => {
  link.addEventListener('click', closeMobileMenu);
});

// photos.js - Your photo configuration
const communityPhotos = [
  {
    src: 'umuigbo_photos/DSC04747.jpg',
    caption: 'Cultural Day Celebration 2025',
    category: 'cultural',
    date: '2024-03-15',
  },
  {
    src: 'umuigbo_photos/DSC04752.jpg',
    caption: 'Cultural Day Celebration 2025',
    category: 'cultural',
    date: '2024-03-15',
  },
  {
    src: 'umuigbo_photos/DSC04840.jpg',
    caption: 'Cultural Day Celebration 2025',
    category: 'cultural',
    date: '2024-03-15',
  },
  {
    src: 'umuigbo_photos/DSC04853.jpg',
    caption: 'Cultural Day Celebration 2025',
    category: 'cultural',
    date: '2024-03-15',
  },
  {
    src: 'umuigbo_photos/DSC04910.jpg',
    caption: 'Cultural Day Celebration 2025',
    category: 'cultural',
    date: '2024-03-15',
  },
  {
    src: 'umuigbo_photos/DSC04964.jpg',
    caption: 'Cultural Day Celebration 2025',
    category: 'cultural',
    date: '2024-03-15',
  },
  {
    src: 'umuigbo_photos/DSC05056.jpg',
    caption: 'Cultural Day Celebration 2025',
    category: 'cultural',
    date: '2024-03-15',
  },
  {
    src: 'umuigbo_photos/DSC05152.jpg',
    caption: 'Cultural Day Celebration 2025',
    category: 'cultural',
    date: '2024-03-15',
  },
  {
    src: 'umuigbo_photos/DSC05267.jpg',
    caption: 'Cultural Day Celebration 2025',
    category: 'cultural',
    date: '2024-03-15',
  },
  {
    src: 'umuigbo_photos/DSC05360.jpg',
    caption: 'Cultural Day Celebration 2025',
    category: 'cultural',
    date: '2024-03-15',
  },
  {
    src: 'umuigbo_photos/DSC03910-Enhanced-NR.jpg',
    caption: 'Christmas Party 2024',
    category: 'celebrations',
    date: '2024-08-20',
  },
  {
    src: 'umuigbo_photos/DSC03995-Enhanced-NR.jpg',
    caption: 'Christmas Party 2024',
    category: 'celebrations',
    date: '2024-08-20',
  },
  {
    src: 'umuigbo_photos/DSC05417.jpg',
    caption: 'Cultural Day Celebration - Traditional Dance Performance',
    category: 'cultural',
    date: '2024-03-15',
  },
  {
    src: 'umuigbo_photos/DSC05809.jpg',
    caption: 'Cultural Day Celebration - Traditional Dance Performance',
    category: 'cultural',
    date: '2024-03-15',
  },
  {
    src: 'umuigbo_photos/DSC05813.jpg',
    caption: 'Cultural Day Celebration - Traditional Dance Performance',
    category: 'cultural',
    date: '2024-03-15',
  },
  {
    src: 'umuigbo_photos/DSC05936.jpg',
    caption: 'Cultural Day Celebration - Traditional Dance Performance',
    category: 'cultural',
    date: '2024-03-15',
  },
  {
    src: 'umuigbo_photos/DSC06137.jpg',
    caption: 'Cultural Day Celebration - Traditional Dance Performance',
    category: 'cultural',
    date: '2024-03-15',
  },
  {
    src: 'umuigbo_photos/DSC06268.jpg',
    caption: 'Cultural Day Celebration - Traditional Dance Performance',
    category: 'cultural',
    date: '2024-03-15',
  },
  {
    src: 'umuigbo_photos/DSC06280.jpg',
    caption: 'Cultural Day Celebration - Traditional Dance Performance',
    category: 'cultural',
    date: '2024-03-15',
  },
  {
    src: 'umuigbo_photos/DSC05630.jpg',
    caption: 'Cultural Day Celebration - Traditional Dance Performance',
    category: 'cultural',
    date: '2024-03-15',
  },
  {
    src: 'umuigbo_photos/IMG_5895.jpg',
    caption: 'Summer Picnic 2025',
    category: 'summer-event',
    date: '2024-02-20',
  },
  {
    src: 'umuigbo_photos/IMG_5893.jpg',
    caption: 'Summer Picnic 2025',
    category: 'summer-event',
    date: '2024-02-20',
  },
  {
    src: 'umuigbo_photos/IMG_5894.jpg',
    caption: 'Summer Picnic 2025',
    category: 'summer-event',
    date: '2024-02-20',
  },
  {
    src: 'umuigbo_photos/IMG_5897.jpg',
    caption: 'Christmas-Party',
    category: 'celebrations',
    date: '2024-04-10',
  },
  {
    src: 'umuigbo_photos/IMG_5898.jpg',
    caption: 'Christmas Party 2024',
    category: 'celebrations',
    date: '2024-01-25',
  },
  {
    src: 'umuigbo_photos/IMG_5899.jpg',
    caption: 'Christmas Party 2024',
    category: 'celebrations',
    date: '2024-05-12',
  },
  {
    src: 'umuigbo_photos/IMG_5900.jpg',
    caption: 'Christmas Party 2024',
    category: 'celebrations',
    date: '2023-12-20',
  },
  {
    src: 'umuigbo_photos/IMG_5901.jpg',
    caption: 'Christmas Party 2024',
    category: 'celebrations',
    date: '2024-06-08',
  },

  {
    src: 'umuigbo_photos/DSC03585-Enhanced-NR.jpg',
    caption: 'Christmas Party 2024',
    category: 'celebrations',
    date: '2024-08-20',
  },
  {
    src: 'umuigbo_photos/DSC03699-Enhanced-NR.jpg',
    caption: 'Christmas Party 2024',
    category: 'celebrations',
    date: '2024-08-20',
  },

  {
    src: 'umuigbo_photos/DSC04011-Enhanced-NR.jpg',
    caption: 'Christmas Party 2024',
    category: 'celebrations',
    date: '2024-08-20',
  },

  // Add new photos here with proper categorization
];

// Gallery functionality
class PhotoGallery {
  constructor() {
    this.photos = communityPhotos;
    this.filteredPhotos = [...this.photos];
    this.currentFilter = 'all';
    this.photosPerLoad = 4;
    this.currentlyShown = 0;
    this.currentLightboxIndex = 0;

    this.init();
  }

  init() {
    this.generateGallery();
    this.initEventListeners();
    this.showPhotos(this.photosPerLoad);
  }

  generateGallery() {
    const gallery = document.getElementById('photo-gallery');
    gallery.innerHTML = '';

    this.filteredPhotos.forEach((photo, index) => {
      const photoElement = this.createPhotoElement(photo, index);
      gallery.appendChild(photoElement);
    });

    this.updateLoadMoreButton();
  }

  createPhotoElement(photo, index) {
    const div = document.createElement('div');
    div.className = `gallery-item cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden bg-white shadow-lg ${
      index >= this.photosPerLoad ? 'hidden' : ''
    }`;
    div.setAttribute('data-category', photo.category);
    div.setAttribute('data-index', index);

    div.innerHTML = `
          <div class="relative group">
              <img src="${photo.src}" alt="${
      photo.caption
    }" class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p class="font-semibold text-sm mb-1">${photo.caption}</p>
                  <p class="text-xs opacity-90">${this.formatDate(
                    photo.date
                  )}</p>
              </div>
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div class="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <i class="fa-solid fa-expand text-white text-xl"></i>
                  </div>
              </div>
          </div>
      `;

    div.addEventListener('click', () => this.openLightbox(index));

    return div;
  }

  initEventListeners() {
    // Filter buttons
    document.querySelectorAll('.gallery-filter').forEach((button) => {
      button.addEventListener('click', (e) => {
        const filter = e.target.getAttribute('data-filter');
        this.filterPhotos(filter);
      });
    });

    // Load more button
    document.getElementById('load-more').addEventListener('click', () => {
      this.loadMorePhotos();
    });

    // Lightbox controls
    document.getElementById('lightbox-close').addEventListener('click', () => {
      this.closeLightbox();
    });

    document.getElementById('lightbox-prev').addEventListener('click', () => {
      this.previousImage();
    });

    document.getElementById('lightbox-next').addEventListener('click', () => {
      this.nextImage();
    });

    // Lightbox keyboard controls
    document.addEventListener('keydown', (e) => {
      const modal = document.getElementById('lightbox-modal');
      if (!modal.classList.contains('hidden')) {
        if (e.key === 'Escape') this.closeLightbox();
        if (e.key === 'ArrowLeft') this.previousImage();
        if (e.key === 'ArrowRight') this.nextImage();
      }
    });

    // Close lightbox when clicking outside image
    document.getElementById('lightbox-modal').addEventListener('click', (e) => {
      if (e.target.id === 'lightbox-modal') {
        this.closeLightbox();
      }
    });
  }

  filterPhotos(filter) {
    // Update filter buttons
    document.querySelectorAll('.gallery-filter').forEach((btn) => {
      btn.classList.remove('active', 'bg-red-600', 'text-white');
      btn.classList.add('bg-gray-200', 'text-gray-700');
    });

    document
      .querySelector(`[data-filter="${filter}"]`)
      .classList.add('active', 'bg-red-600', 'text-white');
    document
      .querySelector(`[data-filter="${filter}"]`)
      .classList.remove('bg-gray-200', 'text-gray-700');

    // Filter photos
    this.currentFilter = filter;
    this.filteredPhotos =
      filter === 'all'
        ? [...this.photos]
        : this.photos.filter((photo) => photo.category === filter);

    this.currentlyShown = 0;
    this.generateGallery();
    this.showPhotos(this.photosPerLoad);
  }

  showPhotos(count) {
    const items = document.querySelectorAll('.gallery-item');
    const endIndex = Math.min(this.currentlyShown + count, items.length);

    for (let i = this.currentlyShown; i < endIndex; i++) {
      if (items[i]) {
        items[i].classList.remove('hidden');
        // Add stagger animation
        setTimeout(() => {
          items[i].classList.add('animate-fade-in');
        }, (i - this.currentlyShown) * 100);
      }
    }

    this.currentlyShown = endIndex;
    this.updateLoadMoreButton();
  }

  loadMorePhotos() {
    this.showPhotos(this.photosPerLoad);
  }

  updateLoadMoreButton() {
    const loadMoreBtn = document.getElementById('load-more');
    const totalPhotos = this.filteredPhotos.length;

    if (this.currentlyShown >= totalPhotos) {
      loadMoreBtn.style.display = 'none';
    } else {
      loadMoreBtn.style.display = 'inline-block';
      const remaining = totalPhotos - this.currentlyShown;
      loadMoreBtn.innerHTML = `<i class="fa-solid fa-images mr-2"></i>Load ${remaining} More Photo${
        remaining !== 1 ? 's' : ''
      }`;
    }
  }

  openLightbox(index) {
    this.currentLightboxIndex = index;
    const photo = this.filteredPhotos[index];

    document.getElementById('lightbox-image').src = photo.src;
    document.getElementById('lightbox-image').alt = photo.caption;
    document.getElementById('lightbox-caption').textContent = photo.caption;
    document.getElementById('lightbox-counter').textContent = `${
      index + 1
    } of ${this.filteredPhotos.length}`;

    document.getElementById('lightbox-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    document.getElementById('lightbox-modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
  }

  nextImage() {
    this.currentLightboxIndex =
      (this.currentLightboxIndex + 1) % this.filteredPhotos.length;
    this.updateLightboxImage();
  }

  previousImage() {
    this.currentLightboxIndex =
      (this.currentLightboxIndex - 1 + this.filteredPhotos.length) %
      this.filteredPhotos.length;
    this.updateLightboxImage();
  }

  updateLightboxImage() {
    const photo = this.filteredPhotos[this.currentLightboxIndex];
    document.getElementById('lightbox-image').src = photo.src;
    document.getElementById('lightbox-image').alt = photo.caption;
    document.getElementById('lightbox-caption').textContent = photo.caption;
    document.getElementById('lightbox-counter').textContent = `${
      this.currentLightboxIndex + 1
    } of ${this.filteredPhotos.length}`;
  }

  formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  }
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PhotoGallery();
});
// Event Tabs
const eventTabBtns = document.querySelectorAll('.event-tab-btn');
const upcomingEvents = document.getElementById('upcoming-events');
const pastEvents = document.getElementById('past-events');

eventTabBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const tabType = btn.getAttribute('data-tab');

    // Update button styles
    eventTabBtns.forEach((b) => {
      b.classList.remove('bg-igbo-red', 'text-white');
      b.classList.add('text-gray-600', 'hover:text-gray-900');
    });
    btn.classList.add('bg-igbo-red', 'text-white');
    btn.classList.remove('text-gray-600', 'hover:text-gray-900');

    // Show/hide event sections
    if (tabType === 'upcoming') {
      upcomingEvents.classList.remove('hidden');
      upcomingEvents.classList.add('grid');
      pastEvents.classList.add('hidden');
      pastEvents.classList.remove('grid');
    } else {
      pastEvents.classList.remove('hidden');
      pastEvents.classList.add('grid');
      upcomingEvents.classList.add('hidden');
      upcomingEvents.classList.remove('grid');
    }
  });
});

// Multi-step Form
const formSteps = document.querySelectorAll('.form-step');
const nextBtns = document.querySelectorAll('.next-btn');
const prevBtns = document.querySelectorAll('.prev-btn');
const progressBar = document.getElementById('progress-bar');
const form = document.getElementById('registration-form');
let currentStep = 0;

function updateProgressBar() {
  const progress = ((currentStep + 1) / formSteps.length) * 100;
  progressBar.style.width = progress + '%';

  // Update step indicators
  const stepIndicators = document.querySelectorAll('.w-8.h-8');
  stepIndicators.forEach((indicator, index) => {
    if (index <= currentStep) {
      indicator.classList.remove('bg-gray-200', 'text-gray-600');
      indicator.classList.add('bg-igbo-red', 'text-white');
    } else {
      indicator.classList.remove('bg-igbo-red', 'text-white');
      indicator.classList.add('bg-gray-200', 'text-gray-600');
    }
  });
}

function showStep(stepIndex) {
  formSteps.forEach((step, index) => {
    if (index === stepIndex) {
      step.classList.remove('hidden');
    } else {
      step.classList.add('hidden');
    }
  });
  updateProgressBar();
}

function validateStep(stepIndex) {
  const currentStepElement = formSteps[stepIndex];
  const requiredInputs = currentStepElement.querySelectorAll(
    'input[required], input[type="radio"][name][required]'
  );
  let isValid = true;

  // Clear previous error messages
  currentStepElement.querySelectorAll('.error-message').forEach((error) => {
    error.classList.add('hidden');
  });

  requiredInputs.forEach((input) => {
    const errorDiv =
      input.closest('div').querySelector('.error-message') ||
      input.closest('fieldset').querySelector('.error-message');

    if (input.type === 'radio') {
      const radioGroup = currentStepElement.querySelectorAll(
        `input[name="${input.name}"]`
      );
      const isRadioSelected = Array.from(radioGroup).some(
        (radio) => radio.checked
      );

      if (!isRadioSelected) {
        if (errorDiv) {
          errorDiv.textContent = 'Please select an option';
          errorDiv.classList.remove('hidden');
        }
        isValid = false;
      }
    } else if (!input.value.trim()) {
      input.classList.add('border-red-500');
      if (errorDiv) {
        errorDiv.textContent = 'This field is required';
        errorDiv.classList.remove('hidden');
      }
      isValid = false;
    } else {
      input.classList.remove('border-red-500');
      input.classList.add('border-green-500');

      // Validate email format
      if (input.type === 'email' && !isValidEmail(input.value)) {
        input.classList.remove('border-green-500');
        input.classList.add('border-red-500');
        if (errorDiv) {
          errorDiv.textContent = 'Please enter a valid email address';
          errorDiv.classList.remove('hidden');
        }
        isValid = false;
      }
    }
  });

  return isValid;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Next button handlers
nextBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (validateStep(currentStep)) {
      if (currentStep < formSteps.length - 1) {
        currentStep++;
        showStep(currentStep);
      }
    }
  });
});

// Previous button handlers
prevBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });
});

// Form submission
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (!validateStep(currentStep)) {
    return;
  }

  const submitBtn = document.querySelector('.submit-btn');
  const originalText = submitBtn.innerHTML;

  // Show loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML =
    '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Submitting...';

  try {
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      // Success
      form.innerHTML = `
                <div class="text-center py-12">
                    <div class="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fa-solid fa-check text-3xl text-white"></i>
                    </div>
                    <h3 class="font-display text-2xl font-bold text-gray-900 mb-4">Registration Successful!</h3>
                    <p class="text-gray-600 mb-6">Thank you for joining the Umu Igbo Brandon community. We'll be in touch soon with more information about upcoming events and activities.</p>
                    <a href="#events" class="bg-igbo-red text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors">View Upcoming Events</a>
                </div>
            `;
    } else {
      throw new Error('Submission failed');
    }
  } catch (error) {
    // Error handling
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;

    // Show error message
    const errorDiv = document.createElement('div');
    errorDiv.className =
      'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4';
    errorDiv.innerHTML =
      '<i class="fa-solid fa-exclamation-triangle mr-2"></i>There was an error submitting your registration. Please try again.';
    form.insertBefore(errorDiv, form.firstChild);

    // Remove error message after 5 seconds
    setTimeout(() => {
      errorDiv.remove();
    }, 5000);
  }
});

// Real-time input validation
document.querySelectorAll('input[required]').forEach((input) => {
  input.addEventListener('blur', () => {
    const errorDiv = input.closest('div').querySelector('.error-message');

    if (input.value.trim()) {
      input.classList.remove('border-red-500');
      input.classList.add('border-green-500');
      if (errorDiv) {
        errorDiv.classList.add('hidden');
      }
    }
  });

  input.addEventListener('input', () => {
    if (input.classList.contains('border-red-500') && input.value.trim()) {
      input.classList.remove('border-red-500');
      const errorDiv = input.closest('div').querySelector('.error-message');
      if (errorDiv) {
        errorDiv.classList.add('hidden');
      }
    }
  });
});

// Initialize form
showStep(0);

// Animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in');
    }
  });
}, observerOptions);
