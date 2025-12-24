document.getElementById('task1').addEventListener('click', () => {
    const values = [];
    for (let i = 1; i <= 3; i++) {
        const input = prompt(`Enter number ${i}:`);
        if (input === null) return; // cancelled
        const num = Number(input);
        if (Number.isNaN(num)) {
            alert('Please enter a valid number');
            return;
        }
        values.push(num);
    }

    const [a, b, c] = values;
    const resultEl = document.getElementById('result');

    if (a === b && b === c) {
        resultEl.textContent = "Bigest number not found , all the number's are same";
    } else {
        const max = Math.max(a, b, c);
        resultEl.textContent = `Biggest number is ${max}`;
    }
});