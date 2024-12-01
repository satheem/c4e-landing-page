const words = ["innovate", "create", "lead", "dream", "achieve"];
let index = 0;

const dynamicWord = document.getElementById("dynamic-word");

setInterval(() => {
    dynamicWord.classList.add('fade-out');

    setTimeout(() => {
        index = (index + 1) % words.length;
        dynamicWord.textContent = words[index];

        dynamicWord.classList.remove('fade-out');
    }, 1000);

}, 4000); 
