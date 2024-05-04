const wrapperEl = document.querySelector(".wrapper"),
  areaEl = wrapperEl.querySelector(".area"),
  readOnly = wrapperEl.querySelector(".read_only"),
  placeholderEl = wrapperEl.querySelector(".placeholder"),
  countEl = wrapperEl.querySelector(".count"),
  btnTweet = wrapperEl.querySelector(".btn_tweet");

window.addEventListener("load", () => areaEl.focus());

areaEl.addEventListener("keyup", (e) => {
  let areaText = areaEl.innerText;
  placeholderEl.classList.add("hide");
  handleText(areaText);
});

areaEl.addEventListener("keypress", (e) => {
  let areaText = areaEl.innerText;
  handleText(areaText);
});

function handleText(areaText) {
  let maxCount = 10;
  let allText = areaEl.innerHTML;

  if (areaText.length > 0) {
    wrapperEl.classList.add("active");
    // placeholderEl.classList.add("hide");
    countEl.classList.add("active");
  } else {
    wrapperEl.classList.remove("active");
    placeholderEl.classList.remove("hide");
    countEl.classList.remove("active");
  }

  countEl.textContent = maxCount - areaText.length;
  // countEl.classList.add("active");

  if (areaText.length > maxCount) {
    let overText = `<span class="higlight">${areaText.slice(maxCount)}</span>`;
    allText = areaText.slice(0, maxCount) + overText;
    wrapperEl.classList.remove("active");
    readOnly.style.zIndex = 10;
    countEl.style.color = "red";
    countEl.style.fontWeight = "700";
  } else {
    // placeholderEl.classList.add("hide");
    // countEl.classList.add("active");
    wrapperEl.classList.add("active");
    readOnly.style.zIndex = -1;
    countEl.style.color = "black";
    countEl.style.fontWeight = "700";
    // placeholderEl.classList.add("hide");
  }

  // console.log(areaText.length);
  readOnly.innerHTML = allText;
}
