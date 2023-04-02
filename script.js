const data = [
  {
    id: 1,
    image: "images/desktop-image-hero-1.jpg",
    head: "Discover innovative ways to decorate",
    para: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love",
  },
  {
    id: 2,
    image: "images/desktop-image-hero-2.jpg",
    head: "We are available all across the globe",
    para: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    id: 3,
    image: "images/desktop-image-hero-3.jpg",
    head: "Manufactured with the best materials",
    para: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];
let currentSlide = 0;
function next(current) {
  if (current < data.length - 1) {
    current++;
    console.log(current);
    return current;
  } else {
    current = 0;
    console.log(current);
    return current;
  }
}
function prev(current) {
  if (current > 0) {
    current--;
    return current;
  } else {
    current = data.length - 1;
    return current;
  }
}
function changeSlide(current) {
  document.querySelector(
    ".content__upper__image"
  ).style.backgroundImage = `url(${data[current].image})`;
  document.querySelector(".content__upper__descr__text__head").innerHTML =
    data[current].head;
  document.querySelector(".content__upper__descr__text__body").innerHTML =
    data[current].para;
}
document.querySelector(".next").addEventListener("click", () => {
  currentSlide = next(currentSlide);
  changeSlide(currentSlide);
});

document.querySelector(".prev").addEventListener("click", () => {
  currentSlide = prev(currentSlide);
  changeSlide(currentSlide);
});

// P
document.querySelector(".header__burger").addEventListener("click", () => {
  document.querySelector(".mobile__header__nav").classList.toggle("active");
  document.querySelector(".header__burger").classList.toggle("change");
  document.querySelector(".darken").classList.toggle("blurBackground");
  document.querySelector("body").classList.toggle("fix");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        document.querySelector(".header").style.backgroundColor =
          "rgba(0,0,1,0.7)";
      } else {
        document.querySelector(".header").style.backgroundColor = "transparent";
        document.querySelector(".header").style.transition = "all 0.3s ease";
      }
    });
  },
  { threshold: 0.5, rootMargin: "0px 0px -100px 0px" }
);

const elements = document.querySelectorAll(".content__upper__image");
elements.forEach((element) => {
  observer.observe(element);
});
