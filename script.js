console.log('------------- #4/1')

function calc() {
    let num1 = arguments[0]
    let num2 = arguments[1]

    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 * num2);
    console.log(num1 / num2);
}

calc(10, 5);

console.log('------------- #4/2')

function calculate(action, ...nums) {
    let result = 10;
    nums.forEach(function(num) {
        switch (action) {
            case 'sum':
                result += num;
                break;
            case 'sub':
                result -= num;
                break;
            case 'multiply':
                result *= num;
                break;
            case 'div':
                result /= num;
                break;

        }
    });

    return result;
}

console.log(calculate('sum', 5));
console.log(calculate('sub', 5));
console.log(calculate('multiply', 5));
console.log(calculate('div', 5));



console.log('------------- #5')

function counter(n) {

    if (n < 6) {
        console.log(n);

        return counter(n + 1);
    }
}

counter(1);

console.log('------------- #6')

function newCounter(n) {

    if (n > 0) {
        console.log(n);

        return newCounter(n - 1);
    }
}

newCounter(5);

console.log('------------- #7')

function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}
console.log(pow(2, 4));
