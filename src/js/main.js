const openNavBtn = document.querySelector("#openNavBtn");
const mobileNav = document.querySelector("#mobileNav");
const closeNavBtn = document.querySelector("#closeBtn");

openNavBtn.onclick = function () {
  mobileNav.classList.remove('top-[-300%]');
  mobileNav.classList.add('top-0');
}

closeNavBtn.onclick = function () {
  mobileNav.classList.add('top-[-300%]');
  mobileNav.classList.remove('top-0');
}


const owl = $('.owl-carousel');

owl.owlCarousel({
  loop: true,
  items: 1,
  autoplay: true,
  autoplayTimeout: 3000,
  nav: false,
  dots: false,
});

$('.nextSliderBtn').click(function () {
  owl.trigger('next.owl.carousel');
})
$('.prevSliderBtn').click(function () {
  owl.trigger('prev.owl.carousel', [300]);
});


let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("a");
console.log(tabTogglers);

tabTogglers.forEach(function (toggler) {
  toggler.addEventListener("click", function (e) {
    e.preventDefault();

    let tabName = this.getAttribute("href");

    let tabContents = document.querySelector("#tab-contents");

    for (let i = 0; i < tabContents.children.length; i++) {

      tabTogglers[i].parentElement.classList.remove("border-black", "border-b", "-mb-px", "opacity-100"); tabContents.children[i].classList.remove("hidden");
      if ("#" + tabContents.children[i].id === tabName) {
        continue;
      }
      tabContents.children[i].classList.add("hidden");

    }
    e.target.parentElement.classList.add("border-black", "border-b-4", "-mb-px", "opacity-100");
  });
});

document.getElementById("default-tab").click();

let acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// const owlItem = document.querySelectorAll('.owl-item');
// const progressBar = document.querySelectorAll('.progress-bar');
// owlItem.forEach(item => {
//   if(item.classList.contains('active')){
//     console.log('active');
//     progressBar.forEach(bar => {
//       bar.classList.add('animate-progress')
//     })
//   } else{
//     progressBar.forEach(bar => {
//       bar.classList.remove('animate-progress')
//     })
    
//   }
// })