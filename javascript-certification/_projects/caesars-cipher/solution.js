QUnit.module("Caesars Cipher");
QUnit.test("nomeDaFuncao", function (assert) {
    assert.deepEqual(rot13("SERR PBQR PNZC"), "FREE CODE CAMP");
    assert.deepEqual(rot13("SERR CVMMN!"), "FREE PIZZA!");
    assert.deepEqual(rot13("SERR YBIR?"), "FREE LOVE?");
    assert.deepEqual(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."),
        "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");
});


let tcl = { // tabela de código das letras
    'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4,
    'F': 5, 'G': 6, 'H': 7, 'I': 8, 'J': 9,
    'K': 10, 'L': 11, 'M': 12, 'N': 13,
    'O': 14, 'P': 15, 'Q': 16, 'R': 17,
    'S': 18, 'T': 19, 'U': 20, 'V': 21,
    'W': 22, 'X': 23, 'Y': 24, 'Z': 25
};

function rot13(str) {
    let cc = ''; // caractere criptografado
    let cd = ''; // caractere descriptografado
    let strd = ''; // string descriptografada
    let ccc = -1; // código do caractere criptografado
    let ccd = -1; // código do caractere descriptografado

    // varro a string de entrada
    for (let i = 0; i < str.length; i++) {
        cc = str[i];
        // se o caractere está na tcl...
        if (Object.keys(tcl).indexOf(cc) !== -1) {
            // pego o seu código
            ccc = tcl[cc];
            // descriptografo o caractere
            ccd = (ccc - 13 + 26) % 26;
            // obtenho o caractere referente ao código
            cd = Object.keys(tcl)[Object.values(tcl).indexOf(ccd)];
            // adiciono o caractere à string descriptografada
            strd = strd + cd;
        } else {
            // se o caractere não está na 'tcl', ele é um caractere especial
            // deve ser adicionado ao resultado
            strd = strd + cc;
        }
    }
    return strd;
}