//turn pages when user click on prev and next button
const pageTurnBtn = document.querySelectorAll(".nextprev-btn");
pageTurnBtn.forEach((e1, index) => {
  e1.onclick = () => {
    const pageTurnId = e1.getAttribute("data-page");
    const pageTurn = document.getElementById(pageTurnId);

    if (pageTurn.classList.contains("turn")) {
      pageTurn.classList.remove("turn");
      setTimeout(() => {
        pageTurn.style.zIndex = 20 - index;
      }, 500);
    } else {
      pageTurn.classList.add("turn");
      setTimeout(() => {
        pageTurn.style.zIndex = 20 + index;
      }, 500);
    }
  };
});

//contact me button
const pages = document.querySelectorAll(".book-page.page-right");
const contactMeBtn = document.querySelector(".btn.contact-me");
contactMeBtn.onclick = () => {
  pages.forEach((page, index) => {
    setTimeout(() => {
      page.classList.add("turn");
      setTimeout(() => {
        page.style.zIndex = 20 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });
};

//create revrse index function
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
  pageNumber--;
  if (pageNumber < 0) {
    pageNumber = totalPages - 1;
  }
}

//back profile button
const backProfileBtn = document.querySelector(".back-profile");
backProfileBtn.onclick = () => {
  pages.forEach((_, index) => {
    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].classList.remove("turn");
      setTimeout(() => {
        reverseIndex();
        pages[pageNumber].style.zIndex = 10 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });
};

//opening animation

const coverRight = document.querySelector(".cover.cover-right");
const pageLeft = document.querySelector(".book-page.page-left");

setTimeout(() => {
  coverRight.classList.add("turn");
}, 2100);

setTimeout(() => {
  coverRight.style.zIndex = -1;
}, 2800);

//
setTimeout(() => {
  pageLeft.style.zIndex = 20;
}, 3200);

pages.forEach((_, index) => {
  setTimeout(() => {
    reverseIndex();
    pages[pageNumber].classList.remove("turn");
    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].style.zIndex = 10 + index;
    }, 500);
  }, (index + 1) * 200 + 2100);
});
const form = document.querySelector("form");

function sendEmail(){
  Email.send({
     Host : "smtp.gmail.com",
     username : "kapilbadarukhiya@gmail.com",
     password : "6F59AD1E023762120ECA66DF5F0B0DBB5D4F",
     To : "kapilbadarukhiya@gmail.com",
     From : "kapilbadarukhiya@gmail.com",
     Subject : "New Contaact",
     Body : "this is body"

  }).then(
    message => alert(message)
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
})
