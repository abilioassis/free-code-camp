QUnit.module("DNA Pairing");
QUnit.test("cbp", function (assert) {
    assert.deepEqual(cbp("A"), ["A", "T"]);
    assert.deepEqual(cbp("T"), ["T", "A"]);
    assert.deepEqual(cbp("C"), ["C", "G"]);
    assert.deepEqual(cbp("G"), ["G", "C"]);
});

// criar base pair (cbp)
// cbp(char): Array[string]
const cbp = function (c) {
    switch (c) {
        case 'A': return ['A', 'T'];
        case 'T': return ['T', 'A'];
        case 'C': return ['C', 'G'];
        case 'G': return ['G', 'C'];
    }
}

QUnit.module("DNA Pairing");
QUnit.test("pairElement", function (assert) {
    assert.deepEqual(pairElement("ATCGA"), [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"], ["A", "T"]]);
    //assert.deepEqual(pairElement("TTGAG"), [["T", "A"], ["T", "A"], ["G", "C"], ["A", "T"], ["G", "C"]]);
    //assert.deepEqual(pairElement("CTCTA"), [["C", "G"], ["T", "A"], ["C", "G"], ["T", "A"], ["A", "T"]]);
});

// pairElement(String): Array(2x2)
function pairElement(str) {
    let r = [];
    // varro a string de entrada
    for (let i = 0; i < str.length; i++) {
        // crio o base pair e gero o resultado
        r.push(cbp(str[i]));
    }
    return r;
}
