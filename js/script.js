var coin = [
    "head",
    "tail"
];

function toast() {
    var generatedValue = generateCoin();
    var selectedValue = document.querySelector("#coin").value;
    var img = document.querySelector("img");
    var result = document.querySelector("#result");
    img.setAttribute("src", "img/" + generatedValue + ".png")
    if (selectedValue === generatedValue) {
        result.textContent = "You Win!";
    } else {
        result.textContent = "Try Again";
    }
}

function generateCoin() {
    return coin[Math.floor(Math.random() * 2)];
}