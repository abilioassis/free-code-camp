QUnit.module("Palindrome Checker");
QUnit.test("filtrarString", function (assert) {
    assert.deepEqual(filtrarString("_eye"), "eye");
    assert.deepEqual(filtrarString("race car"), "racecar");
    assert.deepEqual(filtrarString("not a palindrome"), "notapalindrome");
    assert.deepEqual(filtrarString("A man, a plan, a canal. Panama"), "AmanaplanacanalPanama");
    assert.deepEqual(filtrarString("never odd or even"), "neveroddoreven");
    assert.deepEqual(filtrarString("nope"), "nope");
    assert.deepEqual(filtrarString("almostomla"), "almostomla");
    assert.deepEqual(filtrarString("My age is 0, 0 si ega ym."), "Myageis00siegaym");
    assert.deepEqual(filtrarString("1 eye for of 1 eye."), "1eyeforof1eye");
    assert.deepEqual(filtrarString("0_0 (: /-\ :) 0-0"), "0000");
    assert.deepEqual(filtrarString("five|\_/|four"), "fivefour");
});

// Retira todos os caracteres especiais da string
const filtrarString = function(str) {
    let regex = /[a-z0-9]/gi;
    return str.match(regex).join('');
}


QUnit.module("Palindrome Checker");
QUnit.test("palindrome", function (assert) {
    assert.deepEqual(palindrome("eye"), true);
    assert.deepEqual(palindrome("_eye"), true);
    assert.deepEqual(palindrome("race car"), true);
    assert.deepEqual(palindrome("not a palindrome"), false);
    assert.deepEqual(palindrome("A man, a plan, a canal. Panama"), true);
    assert.deepEqual(palindrome("never odd or even"), true);
    assert.deepEqual(palindrome("nope"), false);
    assert.deepEqual(palindrome("almostomla"), false);
    assert.deepEqual(palindrome("My age is 0, 0 si ega ym."), true);
    assert.deepEqual(palindrome("1 eye for of 1 eye."), false);
    assert.deepEqual(palindrome("0_0 (: /-\ :) 0-0"), true);
    assert.deepEqual(palindrome("five|\_/|four"), false);
});

function palindrome(str) {
    // removo todos os caracteres especiais da string de entrada
    let sl = filtrarString(str); // string limpa (sl)
    // converto a string para array
    let slArr = sl.split('');
    // reverto o array e o converto para a string revertida (slr)
    let slr = slArr.reverse().join('');
    // verifico se a string revertida é igual à original, retornando true ou false
    return (sl.toLowerCase() === slr.toLowerCase());
}

