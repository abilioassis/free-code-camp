const obterListaInicial = function (n) {
    let li = [];
    for (let i = 2; i <= n; i++) {
        li.push(i);
    }
    return li;
}

QUnit.module("Sum All Primes");
QUnit.test("eliminarMultiplos", function (assert) {
    const le =  [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    const ls2 = [2, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29];
    const ls3 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 25, 29];
    const ls5 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    assert.deepEqual(eliminarMultiplos(le, 2), ls2);
    assert.deepEqual(eliminarMultiplos(ls2, 3), ls3);
    assert.deepEqual(eliminarMultiplos(ls3, 5), ls5);

});

// eliminarMultiplos(Array, Number): Array
const eliminarMultiplos = function (l, n) {
    let r = [];
    // os primeiros elementos até n eu simplesmente copio
    let i = 0;
    while (l[i] <= n) {
        r.push(l[i]);
        i = i + 1;
    }
    // varro a lista de entrada e coloco no resultado se não for múltiplo de n
    for (let j = i; j < l.length; j++) {
        if (l[j] % n !== 0) {
            r.push(l[j]);
        }
    }
    return r;
}

QUnit.module("Sum All Primes");
QUnit.test("gerarPrimos", function (assert) {
    //assert.deepEqual(gerarPrimos(10), [2, 3, 5, 7]);
    //assert.deepEqual(gerarPrimos(30), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    assert.deepEqual(gerarPrimos(1000000), []);
});

// Gera uma lista de números primos até n
// gerarPrimos(Number): Array
function gerarPrimos(n) {
    // maior número a ser checado (mnsc)
    let mnsc = Math.floor(Math.sqrt(n));
    // gero a lista inicial (li)
    let li = obterListaInicial(n);
    // Removo todos os múltiplos de 2 (exceto ele próprio) até o valor limite (mnsc)
    let k = 2;
    let lp; // lista de números primos
    while (k <= mnsc) {
        lp = eliminarMultiplos(li, k);    
        // atualizo os parâmetos do loop
        k = k + 1;
        li = lp;
    }
    return lp;
}

QUnit.module("Sum All Primes");
QUnit.test("sumPrimes", function (assert) {
    assert.deepEqual(sumPrimes(10), 2 + 3 + 5 + 7);
    assert.deepEqual(sumPrimes(30), 2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 + 23 + 29);
    assert.deepEqual(sumPrimes(977), 73156);
});

function sumPrimes(num) {
    let s = 0;
    let lp = gerarPrimos(num);
    for (let i = 0; i < lp.length; i++) {
        s = s + lp[i];
    }
    return s;
}