QUnit.module("Everything Be True");
QUnit.test("isFalsy", function (assert) {
    assert.deepEqual(isFalsy(false), true);
    assert.deepEqual(isFalsy(true), false);
    assert.deepEqual(isFalsy(null), true);
    assert.deepEqual(isFalsy(undefined), true);
    assert.deepEqual(isFalsy(0), true);
    assert.deepEqual(isFalsy(-0), true);
    assert.deepEqual(isFalsy(NaN), true);
    assert.deepEqual(isFalsy(''), true);
    assert.deepEqual(isFalsy("x"), false);
});

// retorna true se o valor é falso
const isFalsy = function(v) {
    return (!v);
}

QUnit.module("Everything Be True");
QUnit.test("truthCheck", function (assert) {
    let coll1 = [{ "user": "Tinky-Winky", "sex": "male" },
    { "user": "Dipsy", "sex": "male" },
    { "user": "Laa-Laa", "sex": "female" },
    { "user": "Po", "sex": "female" }];
    assert.deepEqual(truthCheck(coll1, "sex"), true);

    let coll2 = [{ "user": "Tinky-Winky", "sex": "male" },
    { "user": "Dipsy" },
    { "user": "Laa-Laa", "sex": "female" },
    { "user": "Po", "sex": "female" }];
    assert.deepEqual(truthCheck(coll2, "sex"), false);

    let coll3 = [{ "user": "Tinky-Winky", "sex": "male", "age": 0 },
    { "user": "Dipsy", "sex": "male", "age": 3 },
    { "user": "Laa-Laa", "sex": "female", "age": 5 },
    { "user": "Po", "sex": "female", "age": 4 }];
    assert.deepEqual(truthCheck(coll3, "age"), false);

    let coll4 = [{ "name": "Pete", "onBoat": true },
    { "name": "Repeat", "onBoat": true },
    { "name": "FastForward", "onBoat": null }];
    assert.deepEqual(truthCheck(coll4, "onBoat"), false);

    let coll5 = [{ "name": "Pete", "onBoat": true },
    { "name": "Repeat", "onBoat": true, "alias": "Repete" },
    { "name": "FastForward", "onBoat": true }];
    assert.deepEqual(truthCheck(coll5, "onBoat"), true);

    assert.deepEqual(truthCheck([{ "single": "yes" }], "single"), true);
    assert.deepEqual(truthCheck([{ "single": "" }, { "single": "double" }], "single"), false);
    assert.deepEqual(truthCheck([{"single": "double"}, {"single": undefined}], "single"), false);
    assert.deepEqual(truthCheck([{"single": "double"}, {"single": NaN}], "single"), false);
    
});

function truthCheck(collection, pre) {
    let obj;
    // varro a coleção de entrada
    for(let i = 0; i < collection.length; i++) {
        obj = collection[i];
        // se a propriedade 'pre' for falsa para qualquer objeto
        if (isFalsy(obj[pre])) {
            // termino com falso
            return false;
        }
    }
    // se não encontrei nenhum falso, retorno true
    return true;    
}
