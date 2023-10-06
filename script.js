function multiplyByTwo() {
    const numberInput = document.getElementById('numberInput');
    const resultParagraph = document.getElementById('result');

    // Récupérer la valeur saisie par l'utilisateur
    const inputValue = parseFloat(numberInput.value);

    // Vérifier si l'entrée est un nombre
    if (!isNaN(inputValue)) {
        // Multiplier par 2 et afficher le résultat
        const result = inputValue * 2;
        resultParagraph.textContent = `Le résultat est : ${result}`;
    } else {
        resultParagraph.textContent = 'Veuillez entrer un nombre valide.';
    }
}
