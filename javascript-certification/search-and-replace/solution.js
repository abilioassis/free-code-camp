// verifica se a palavra começa com maiúscula
QUnit.module("Search and Replace");
QUnit.test("eMaiuscula", function (assert) {
    assert.deepEqual(eMaiuscula("Abacaxi"), true);
    assert.deepEqual(eMaiuscula("abacaxi"), false);
    assert.deepEqual(eMaiuscula("Pedro"), true);
});


// eMaiuscula(String): String
const eMaiuscula = function(s) {
    return /[A-Z]/.test(s[0]);
}

QUnit.module("Search and Replace");
QUnit.test("myReplace", function (assert) {
    assert.deepEqual(myReplace("Let us go to the store", "store", "mall"), 'Let us go to the mall');
    assert.deepEqual(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"), 'He is Sitting on the couch');
    assert.deepEqual(myReplace("I think we should look up there", "up", "Down"), 'I think we should look down there');
    assert.deepEqual(myReplace("This has a spellngi error", "spellngi", "spelling"), 'This has a spelling error');
    assert.deepEqual(myReplace("His name is Tom", "Tom", "john"), 'His name is John');
    assert.deepEqual(myReplace("Let us get back to more Coding", "Coding", "algorithms"), 'Let us get back to more Algorithms');
});

// myReplace(String, String, String): String
function myReplace(str, before, after) {
    let s = '';
    // posição da string 'before' em str
    let n1 = str.indexOf(before);
    // obtenho a string anterior a before
    let inicio = str.slice(0, n1);
    // posição da string posterior à before
    let n2 = n1 + before.length;
    // obtenho a string posterior à before
    let fim = str.slice(n2);
    // trato letra maiúscula e minúscula
    let after2 = '';
    if (eMaiuscula(before)) {
        // converto a primeira letra de after para maiúscula
        after2 = (after[0]).toUpperCase() + after.slice(1);
    } else {
        after2 = (after[0]).toLowerCase() + after.slice(1);
    }
    //console.log(p);
    // monto a string de saída
    s = inicio + after2 + fim;
    return s;
  }