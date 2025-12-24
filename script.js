function parseNumber(str) {
    if (str == null || str.length === 0) return NaN;
    let i = 0, sign = 1;
    if (str[0] === '+' || str[0] === '-') {
        if (str[0] === '-') sign = -1;
        i++;
    }
    let intPart = 0;
    let foundDigit = false;
    for (; i < str.length; i++) {
        const code = str.charCodeAt(i);
        if (code >= 48 && code <= 57) {
            intPart = intPart * 10 + (code - 48);
            foundDigit = true;
            continue;
        }
        if (str[i] === '.') {
            i++;
            let frac = 0;
            let place = 1;
            let foundFrac = false;
            for (; i < str.length; i++) {
                const c = str.charCodeAt(i);
                if (c >= 48 && c <= 57) {
                    frac = frac * 10 + (c - 48);
                    place *= 10;
                    foundFrac = true;
                } else {
                    return NaN;
                }
            }
            if (!foundDigit && !foundFrac) return NaN;
            return sign * (intPart + frac / place);
        }
        return NaN;
    }
    return foundDigit ? sign * intPart : NaN;
}

document.getElementById('task1').addEventListener('click', () => {
    const countStr = prompt('How many numbers do you want to compare? (Minimum 1)');
    if (countStr === null) return;

    const countNum = parseNumber(countStr);
    if (countNum !== countNum || countNum <= 0) { // NaN check
        alert('Please enter a valid positive integer for the count.');
        return;
    }
    const count = Math.floor(countNum); // only to ensure integer loops for prompt flow

    const values = [];
    for (let i = 0; i < count; i++) {
        const input = prompt('Enter number ' + (i + 1) + ':');
        if (input === null) return;
        const num = parseNumber(input);
        if (num !== num) {
            alert('Please enter a valid number.');
            return;
        }
        values.push(num);
    }

    if (values.length === 0) return;
    let allEqual = true;
    let max = values[0];

    for (let i = 0; i < values.length; i++) {
        if (values[i] !== values[0]) allEqual = false;
        if (values[i] > max) max = values[i];
    }

    const resultEl = document.getElementById('result');
    if (allEqual) {
        resultEl.textContent = "Biggest number not found, all the numbers are same";
    } else {
        resultEl.textContent = "Biggest number is " + max;
    }
});