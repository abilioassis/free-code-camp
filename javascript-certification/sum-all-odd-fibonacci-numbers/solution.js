QUnit.module("Sum All Odd Fibonacci Numbers");
QUnit.test("fib", function (assert) {
    assert.deepEqual(fib(0), 0);
    assert.deepEqual(fib(1), 1);
    assert.deepEqual(fib(6), 8);
    assert.deepEqual(fib(40), 102334155);
});

// isso poderia estar numa classe
let memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

function fib(n) {
    if (!memo.has(n)) {
        console.log(n);
        memo.set(n, fib(n - 1) + fib(n - 2));
    }
    return memo.get(n);
}

QUnit.module("Sum All Odd Fibonacci Numbers");
QUnit.test("sumFibs", function (assert) {
    assert.deepEqual(sumFibs(1000), 1785);
    assert.deepEqual(sumFibs(4000000), 4613732);
    assert.deepEqual(sumFibs(4), 5);
    assert.deepEqual(sumFibs(75024), 60696);
    assert.deepEqual(sumFibs(75025), 135721);
});

function sumFibs(num) {
    // chamo a função fib até a condição ser atendida
    let n = 0;
    let s = 0;
    
    while (fib(n) <= num) {
        // se for ímpar
        if (fib(n) % 2 == 1) {
            s = s + fib(n);
        }
        n = n + 1;
    }
    return s;
}

