function execute() {
    let questionTextElement = document.querySelector('.qtext');
    if (questionTextElement) {
        let questionText = questionTextElement.innerText;
        console.log("Soal: ", questionText);
    } else {
        console.log("Soal tidak ditemukan");
    }
    
    let choices = document.querySelectorAll('.answer div');
    if (choices.length > 0) {
        let options = [];
        choices.forEach(choice => {
            let optionText = choice.querySelector('.flex-fill');
            if (optionText) {
                options.push(optionText.innerText);
            }
        });

        let optionsUnique = [...new Set(options)];

        let formattedOptions = optionsUnique.map((year, index) => {
            let letter = String.fromCharCode(65 + index);
            return `${letter}. ${year}`;
        });

        console.log("Pilihan: ", formattedOptions);
    } else {
        console.log("Pilihan tidak ditemukan");
    }
}

// Menambahkan fungsi ke global scope sehingga dapat diakses lewat window
window.execute = execute;
