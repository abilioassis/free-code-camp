QUnit.module("Smallest Common Multiple");
QUnit.test("mdc", function (assert) {
    assert.deepEqual(mdc(2, 3), 1);
    assert.deepEqual(mdc(8, 12), 4);
    assert.deepEqual(mdc(2, 10), 2);
    assert.deepEqual(mdc(90, 10), 10);
});

const mdc = function (a, b) {
    // algoritmos de Euclides
    let t = 0; // temporario
    while (b !== 0) {
        t = b;
        b = a % b;
        a = t;
    }
    return a;
}

QUnit.module("Smallest Common Multiple");
QUnit.test("mdcN", function (assert) {
    assert.deepEqual(mdcN([1, 2, 3, 4, 5]), 1);
    assert.deepEqual(mdcN([2, 3, 4, 5, 6, 7, 8, 9, 10]), 1);
    assert.deepEqual(mdcN([18, 60, 126]), 6);
    assert.deepEqual(mdcN([15, 90, 1500, 15000]), 15);
});

// mdcN(Array): Number
const mdcN = function (arr) {
    let r = arr[0]; // resultado
    for (let i = 1; i < arr.length; i++) {
        r = mdc(arr[i], r);
        if (r == 1) { return 1; }
    }
    return r;
}

QUnit.module("Smallest Common Multiple");
QUnit.test("smallestCommons", function (assert) {
    assert.deepEqual(smallestCommons([1, 5]), 60);
    assert.deepEqual(smallestCommons([5, 1]), 60);
    assert.deepEqual(smallestCommons([2, 10]), 2520);
    assert.deepEqual(smallestCommons([1, 13]), 360360);
    assert.deepEqual(smallestCommons([23, 18]), 6056820);
});

function smallestCommons(arr) {
    // gero o intervalo (inter)
    let inter = [];
    if (arr[0] < arr[1]) {
        for (let i = arr[0]; i <= arr[1]; i++) {
            inter.push(i);
        }
    } else {
        for (let i = arr[1]; i <= arr[0]; i++) {
            inter.push(i);
        }
    }
    // inicializo o resultado
    let mmc = inter[0];
    // aplico a formula ao vetor: mmc(a, b, c) = mmc(mmc(a, b), c) = mmc(a, b) * c / mdc(mdc(a, b), c)
    for (let i = 1; i < inter.length; i++) {
        mmc = (inter[i] * mmc) / (mdc(inter[i], mmc));
    }

    return mmc;
}


