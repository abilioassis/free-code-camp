QUnit.module("Arguments Optional");
QUnit.test("addTogether", function (assert) {
    assert.deepEqual(addTogether(2, 3), 5);
    assert.deepEqual(addTogether("http://bit.ly/IqT6zt"), undefined);
    assert.deepEqual(addTogether(2, "3"), undefined);
    assert.deepEqual(addTogether(5)(7), 12);
    assert.deepEqual(addTogether(2)([3]), undefined);
});

function addTogether() {
    // se vierem 2 argumentos
    if (arguments.length == 2) {
        // e ambos forem numéricos
        if ((typeof arguments[0] === 'number') &&
            (typeof arguments[1] === 'number')) {
            // retorno a soma dos dois
            return arguments[0] + arguments[1];
        } 
        // se vier apenas 1 argumento
    } else if (arguments.length == 1) {
        // e for numérico
        if (typeof arguments[0] === 'number') {
            // retorno uma função
            const y = arguments[0];
            const f = function (x) {
                if (typeof x === 'number') {
                    return x + y;
                }
            }
            return f;
        }
    }
}
