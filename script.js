document.getElementById('task1').addEventListener('click', () => {
    const countStr = prompt('How many numbers do you want to compare? (Minimum 3)');
    if (countStr === null) return; // cancelled
    
    const count = parseInt(countStr, 10);
    if (count !== count || count <= 0) { // NaN check via !==
        alert('Please enter a valid positive integer for the count.');
        return;
    }

    const values = [];
    for (let i = 0; i < count; i++) {
        const input = prompt(`Enter number ${i + 1}:`);
        if (input === null) return; // cancelled
        const num = parseFloat(input);
        if (num !== num) { // NaN check
            alert('Please enter a valid number.');
            return;
        }
        values.push(num);
    }

    const resultEl = document.getElementById('result');
    if (values.length === 0) return;

    let allEqual = true;
    let max = values[0];

    for (let i = 0; i < values.length; i++) {
        if (values[i] !== values[0]) allEqual = false;
        if (values[i] > max) max = values[i];
    }

    if (allEqual) {
        resultEl.textContent = "Biggest number not found, all the numbers are same";
    } else {
        resultEl.textContent = `Biggest number is ${max}`;
    }
});