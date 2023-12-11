// jQuery script
$(document).ready(function () {
  // Function to change navbar background on scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".navbar").removeClass("bg-transparent");
      $(".navbar").addClass("bg-white");
    } else {
      $(".navbar").removeClass("bg-white");
      $(".navbar").addClass("bg-transparent");
    }
  });

  // Function to toggle navbar class
  function toggleNavbar() {
    $("nav.navbar").toggleClass("navbar-expanded");
  }

  // Function to generate random price
  function generateRandomPrice() {
    const minPrice = Math.floor(Math.random() * 50000) + 50000;
    const maxPrice = minPrice + Math.floor(Math.random() * 50000) + 50000;
    return `₹${minPrice} - ₹${maxPrice}`;
  }

  // Function to generate random content for a card
  function generateRandomCard() {
    const title = "Project " + Math.floor(Math.random() * 1000);
    const description =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    const priceRange = generateRandomPrice();

    return `
        <div class="card">
            <div class="more-info">More Info</div>
            <img src="https://placekitten.com/300/200" class="card-img-top" alt="Project Image">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-description">${description}</p>
                <p class="card-price">${priceRange}</p>
                <a href="#" class="btn btn-primary contact-button">Contact</a>
            </div>
        </div>
    `;
  }

  // Generate and append random cards to the trending projects section using Slick
  const trendingProjects = $("#trendingProjects");
  for (let i = 0; i < 6; i++) {
    trendingProjects.append(generateRandomCard());
  }

  // Initialize Slick slider with custom buttons
  $(".card-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    autoplaySpeed: 2000,
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Add an event listener for the toggle button
  $(".navbar-toggler").on("click", function () {
    toggleNavbar();
  });
});
