const dayEl = document.querySelector("#day");
const monthEl = document.querySelector("#month");
const yearEl = document.querySelector("#year");

const kunEl = document.querySelector("#kun");
const oyEl = document.querySelector("#oy");
const yilEl = document.querySelector("#yil");

const formEl = document.querySelector("form");
const iconEl = document.querySelector("#icon-box");
const inputEl = document.querySelector("input");

const formBox1 = document.querySelector(".form-box1");
const formBox2 = document.querySelector(".form-box2");
const formBox3 = document.querySelector(".form-box3");
//
let d = 0;

let yill = 0;
let oyy = 0;
let kunn = 0;

const arr = [];
months = {
  January: 31,
  February: 28,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31,
};
let jami = 0;

formEl.addEventListener("keydown", (e) => {
    e.preventDefault();
  if (e.key == "Enter") {
    hisobFunc();
  }
});

iconEl.addEventListener("click", (e) => {
  e.preventDefault();
  hisobFunc();
});
//
let date = new Date();
const kun = date.getDate();
const oy = date.getMonth() + 1;
const yil = date.getFullYear();
//
function ofunc() {
  yearEl.value = "";
  monthEl.value = "";
  dayEl.value = "";
}
//
function oofunc() {
  yilEl.textContent = "- -";
  oyEl.textContent = "- -";
  kunEl.textContent = "- -";
}
//
function errorFunc(el) {
  const p3 = `<p class="text-sm text-red-500 font-normal mt-2">
      This field is required
    </p>`;
  el.innerHTML += p3;
}
//
function hisobFunc() {
  if (
    (yearEl.value, monthEl.value, dayEl.value > 0) &&
    yearEl.value != "" &&
    monthEl.value != "" &&
    dayEl.value != ""
  ) {
    //   YEAR
    jami =
      (yil - yearEl.value) * 365 +
      (oy - monthEl.value) * 30 +
      (kun - dayEl.value);
    console.log(jami);
    //
    if (yearEl.value <= yil) {
      yill = yil - yearEl.value;
      yilEl.textContent = yill;
    } else {
      yilEl.textContent = "- -";
      formBox3.style.color = "red";
      yearEl.style.border = "1px solid red";
      errorFunc(formBox3);
      oofunc();
    }
    //   MONTH
    oyy =
      jami / 30 - yill * 12 < 0
        ? (jami / 30 - yill * 12) * -1
        : jami / 30 - yill * 12;
    if (monthEl.value <= 12) {
      oyEl.textContent = Math.floor(oyy);
    } else {
      oyEl.textContent = "- -";
      formBox2.style.color = "red";
      monthEl.style.border = "1px solid red";
      errorFunc(formBox2);
      oofunc();
    }
    // DAY
    kunn =
      (jami - (oy - monthEl.value) * 30 - yill * 365) % 365 < 0
        ? ((jami - (oy - monthEl.value) * 30 - yill * 365) % 365) * -1
        : (jami - (oy - monthEl.value) * 30 - yill * 365) % 365;
    if (dayEl.value <= 30) {
      kunEl.textContent = kunn;
    } else {
      kunEl.textContent = "- -";
      formBox1.style.color = "red";
      dayEl.style.border = "1px solid red";
      errorFunc(formBox1);
      oofunc();
    }
    //
    ofunc();
  } else {
    oofunc();
  }
}

