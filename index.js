const range = document.getElementById("range");
const rangeValue = document.getElementById("rangeValue");
const rangeMax = Number(range.getAttribute("max"));
const rangeBorder = Number(
  window
    .getComputedStyle(range, "::-webkit-slider-runnable-track")
    .getPropertyValue("--borderWidth")
    .match(/\d/g)
    .join("") * 2
);
const widthThumb = Number(
  window
    .getComputedStyle(range, "::-webkit-slider-thumb")
    .getPropertyValue("--thumbWidth")
    .match(/\d/g)
    .join("")
);
const lables = document.querySelectorAll(".lables label");
const step = range.offsetWidth / rangeMax;
const stepThumb = widthThumb / rangeMax;
const centerThumb = widthThumb / 2;
console.log(stepThumb);
range.addEventListener("input", (ev) => {
  rangeValue.innerText = ev.target.value;
  // lables[0].style.left = `${step * range.value - stepThumb * range.value + widthThumb / 2}px`;
});

const setPositon = () => {
  lables.forEach((el) => {
    const dataPercent = Number(el.dataset.percent);
    const centerLabel = el.offsetWidth / 2;
    translateTo = step * dataPercent - (stepThumb * dataPercent - centerThumb) - centerLabel;
    if (el.offsetWidth % 2 > 0) {
      translateTo += 1;
    }
    el.style.left = `${translateTo}px`;
  });
};

setPositon();
