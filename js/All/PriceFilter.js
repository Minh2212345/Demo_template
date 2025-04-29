window.onload = function() {
    slideMin();
    slideMax();
}

const minVal = document.querySelector(".min-val");
const maxVal = document.querySelector(".max-val");
const priceInputMin = document.querySelector(".min-input");
const priceInputMax = document.querySelector(".max-input");
const minTooltip = document.querySelector(".min-tooltip");
const maxTooltip = document.querySelector(".max-tooltip");
const minGap = 0;
const range = document.querySelector(".slider-track");
const sliderMinValue = parseInt(minVal.min);
const sliderMaxValue = parseInt(maxVal.max);

function formatNumber(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function slideMin() {
    let gap = parseInt(maxVal.value) - parseInt(minVal.value);
    if (gap <= minGap) {
        minVal.value = parseInt(maxVal.value) - minGap;
    }
    minTooltip.innerHTML = "VND " + formatNumber(minVal.value);
    priceInputMin.value = formatNumber(minVal.value);
    setArea();
}

function slideMax() {
    let gap = parseInt(maxVal.value) - parseInt(minVal.value);
    if (gap <= minGap) {
        maxVal.value = parseInt(minVal.value) + minGap;
    }
    maxTooltip.innerHTML = "VND " + formatNumber(maxVal.value);
    priceInputMax.value = formatNumber(maxVal.value);
    setArea();
}

function setArea() {
    range.style.left = (minVal.value - sliderMinValue) / (sliderMaxValue - sliderMinValue) * 100 + "%";
    minTooltip.style.left = (minVal.value - sliderMinValue) / (sliderMaxValue - sliderMinValue) * 100 + "%";
    range.style.right = 100 - (maxVal.value - sliderMinValue) / (sliderMaxValue - sliderMinValue) * 100 + "%";
    maxTooltip.style.right = 100 - (maxVal.value - sliderMinValue) / (sliderMaxValue - sliderMinValue) * 100 + "%";
}

function setMinInput() {
    let minPrice = parseInt(priceInputMin.value.replace(/,/g, ''));
    if (minPrice < sliderMinValue) {
        minPrice = sliderMinValue;
    } else if (minPrice > parseInt(maxVal.value)) {
        minPrice = parseInt(maxVal.value) - minGap;
    }
    minVal.value = minPrice;
    priceInputMin.value = formatNumber(minPrice);
    slideMin();
}

function setMaxInput() {
    let maxPrice = parseInt(priceInputMax.value.replace(/,/g, ''));
    if (maxPrice > sliderMaxValue) {
        maxPrice = sliderMaxValue;
    } else if (maxPrice < parseInt(minVal.value)) {
        maxPrice = parseInt(minVal.value) + minGap;
    }
    maxVal.value = maxPrice;
    priceInputMax.value = formatNumber(maxPrice);
    slideMax();
}