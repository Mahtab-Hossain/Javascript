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

    // Check if all numbers are equal
    if (a === b && b === c) {
        resultEl.textContent = "Biggest number not found, all the numbers are same";
    } 
    // Find the biggest number without using Math.max()
    else if (a >= b && a >= c) {
        resultEl.textContent = `Biggest number is ${a}`;
    } else if (b >= a && b >= c) {
        resultEl.textContent = `Biggest number is ${b}`;
    } else {
        resultEl.textContent = `Biggest number is ${c}`;
    }
});