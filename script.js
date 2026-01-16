let loaderBtn = document.querySelector(".loader_btn")
let colorFlipperBtn = document.getElementById("colorFlipperBtn")
let paragraphChanging = document.getElementById("paragraphChanging")
let paragraphColorCode = document.getElementById("paragraphColorCode")
let flippedBackgroundColor = document.body

// RGB Color flipper 

const colorFlipper = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    flippedBackgroundColor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    paragraphColorCode.textContent = `Color Code: rgb(${r}, ${g}, ${b})`
    paragraphColorCode.style.cursor = "pointer"
    console.log(`Color Code: rgb(${r}, ${g}, ${b})`);

}

const showLoader = () => {
    loaderBtn.classList.remove("hidden")
    colorFlipperBtn.textContent = ""
}

const hideLoader = () => {
    loaderBtn.classList.add("hidden")
    colorFlipperBtn.textContent = "Click"
}

const actionState = () => {
    showLoader()
    paragraphChanging.textContent = "Changing Start"


    new Promise(resolve => setTimeout(resolve, 2000))
        .then(() => {
            colorFlipper()
            console.log("Done");

        })
        .finally(() => {
            hideLoader()
            paragraphChanging.textContent = "Color Changed"
        })
}

