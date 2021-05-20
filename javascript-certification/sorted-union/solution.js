QUnit.module("Sorted Union");
QUnit.test("uniteUnique", function (assert) {
    assert.deepEqual(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
    assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5]);
    assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), [1, 2, 3, 5, 4, 6, 7, 8]);
});

// 
function uniteUnique(arr) {
    let r = [];
    let e;
    // coloco o primeiro argumento no resultado
    r = [...arguments[0]];
    // adiciono os outros elementos dos argumentos restantes, se forem únicos
    for (let i = 1; i < arguments.length; i++) {
        for (let j = 0; j < arguments[i].length; j++) {
            // verifico se o elemento já não se encontra no resultado final
            if (r.indexOf(arguments[i][j]) == -1) {
                // adiciono o elemento ao resultado
                r.push(arguments[i][j]);
            }
        }
    }
    return r;
}

