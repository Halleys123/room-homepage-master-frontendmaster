const slide1 = document.querySelector(".crousel-1");
const slide2 = document.querySelector(".crousel-2");
const slide3 = document.querySelector(".crousel-3");

document
  .querySelectorAll(".content__upper__crousel__imageButton__buttons__right")
  .forEach(function (el) {
    el.addEventListener("click", function (e) {
      var current = parseInt(e.target.parentElement.id);
      console.log(current);
      slide1.style.transform = `translateX(${-100 * next(current)}%)`;
      slide2.style.transform = `translateX(${-100 * next(current)}%)`;
      slide3.style.transform = `translateX(${-100 * next(current)}%)`;
    });
  });
document
  .querySelectorAll(".content__upper__crousel__imageButton__buttons__left")
  .forEach(function (el) {
    el.addEventListener("click", function (e) {
      var current = parseInt(e.target.parentElement.id);
      console.log(current);
      slide1.style.transform = `translateX(${-100 * prev(current)}%)`;
      slide2.style.transform = `translateX(${-100 * prev(current)}%)`;
      slide3.style.transform = `translateX(${-100 * prev(current)}%)`;
    });
  });

function next(current) {
  return current === 3 ? 0 : current;
}
function prev(current) {
  return current === 1 ? 2 : current - 2;
}
