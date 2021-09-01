"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30 // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },

});
var swiper = new Swiper(".mySwiper1", {
  slidesPerView: "auto",
  spaceBetween: 30 // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },

});
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  spaceBetween: 30 // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },

});
var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 3,
  spaceBetween: 30 // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },

});
var constraints = {
  touch: {
    presence: {
      message: "是必填欄位"
    }
  },
  left: {
    presence: {
      message: "是必填欄位"
    }
  },
  sport: {
    presence: {
      message: "是必填欄位"
    }
  },
  birthdate: {
    presence: {
      message: "是必填欄位"
    }
  },
  name: {
    presence: {
      message: "是必填欄位"
    }
  },
  age: {
    presence: {
      message: "是必填欄位"
    },
    numericality: {
      greaterThan: 0,
      message: "必須大於 0"
    }
  },
  "email": {
    presence: {
      message: "是必填的欄位"
    },
    email: true
  }
};
var form = document.querySelector("form#myForm");
var inputs = document.querySelectorAll("input[type=text],input[type=number],select,textarea,checkbox,data");
inputs.forEach(function (item) {
  item.addEventListener("click", function () {
    item.nextElementSibling.textContent = "";
    var errors = validate(form, constraints);
    console.log(errors); //呈現在畫面上

    if (errors) {
      Object.keys(errors).forEach(function (keys) {
        console.log(keys);
        document.querySelector(".".concat(keys)).textContent = errors[keys];
      });
    }
  });
});
//# sourceMappingURL=all.js.map
