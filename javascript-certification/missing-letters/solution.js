const alfabeto = 'abcdefghijklmnopqrstuvwxyz';

QUnit.module("Missing letters");
QUnit.test("estaFaltando", function (assert) {
    assert.deepEqual(estaFaltando("abce"), true);
    assert.deepEqual(estaFaltando("abc"), false);
    assert.deepEqual(estaFaltando("abcdefghijklmnopqrstuvwxyz"), false);
});
// estaFaltando(String): Boolean
const estaFaltando = function (s) {
    return (alfabeto.indexOf(s) == -1);
}

QUnit.module("Missing letters");
QUnit.test("fearNotLetter", function (assert) {
    assert.deepEqual(fearNotLetter("abce"), 'd');
    assert.deepEqual(fearNotLetter("abcdefghjklmno"), 'i');
    assert.deepEqual(fearNotLetter("stvwx"), 'u');
    assert.deepEqual(fearNotLetter("bcdf"), 'e');
    assert.deepEqual(fearNotLetter("abcdefghijklmnopqrstuvwxyz"), undefined);
});

//fearNotLetter(String): char or undefined
function fearNotLetter(str) {
    let deslocamento = 0;
    for (let i = 1; i < str.length; i++) {
        if (estaFaltando(str.slice(0, i+1))) {
            deslocamento = alfabeto.indexOf(str.slice(0, i));
            return alfabeto[deslocamento + i];
        }
    }
    return undefined;
}