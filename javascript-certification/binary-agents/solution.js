QUnit.module("Binary Agents");
QUnit.test("binaryAgent", function (assert) {
    const bs1 = "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111";
    const bs2 = "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001";
    const s1 = "Aren't bonfires fun!?";
    const s2 = "I love FreeCodeCamp!"; 
    assert.deepEqual(binaryAgent(bs1), s1);
    assert.deepEqual(binaryAgent(bs2), s2);
});

function binaryAgent(str) {
    // transformo a string de entrada em um vetor de entrada (ve)
    let ve = str.split(' ');
    let vc = [];
    let ch = '';
    // varro o vetor e converto cada elemento para decimal e posteriormente para UTF-16
    for (let i = 0; i < ve.length; i++) {
        ch = String.fromCharCode(parseInt(ve[i], 2));
        // carrego o caractere (ch) em um vetor de caracteres (vc)
        vc.push(ch);
    }
    // transformo o vetor de caracteres na string de saida
    return vc.join('');
  }
