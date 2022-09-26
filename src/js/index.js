let characterInput = document.getElementById("textbox")

let counter = document.getElementById("count")

characterInput.addEventListener("input", function () {
    counter.innerHTML = characterInput.value.length
})
