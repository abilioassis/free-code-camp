let vogais = ['a', 'e', 'i', 'o', 'u'];

// começa com vogal (ccv)
// ccv(String): String
QUnit.module("Pig Latin");
QUnit.test("começa com vogal", function (assert) {
    assert.deepEqual(ccv("algorithm"), true);
    assert.deepEqual(ccv("eight"), true);
    assert.deepEqual(ccv("schwartz"), false);
});
const ccv = function (s) {
    let r = false;
    if (vogais.indexOf(s[0]) !== -1) {
        r = true;
    }
    return r;
}

// tem vogal (tv)
// tv(String): Boolean
QUnit.module("Pig Latin");
QUnit.test("tem vogal", function (assert) {
    assert.deepEqual(tv("algorithm"), true);
    assert.deepEqual(tv("rhythm"), false);
    assert.deepEqual(tv("schwartz"), true);
});
const tv = function (s) {
    let r = false;
    for (let i = 0; i < s.length; i++) {
        if (vogais.indexOf(s[i]) !== -1) {
            r = true;
            break;
        }
    }
    return r;
}

//obter consoantes iniciais (oci)
// oci(String): String
QUnit.module("Pig Latin");
QUnit.test("obter consoantes iniciais", function (assert) {
    assert.deepEqual(oci("algorithm"), '');
    assert.deepEqual(oci("rhythm"), 'rhythm');
    assert.deepEqual(oci("schwartz"), 'schw');
});
const oci = function (s) {
    for (let i = 0; i < s.length; i++) {
        let r = '';
        if (vogais.indexOf(s[i]) !== -1) {
            r = s.substring(0, i);
            return r;
        }
    }
    return s;
}

//subtrair consoantes iniciais (sci)
// sci(String): String
QUnit.module("Pig Latin");
QUnit.test("subtrair consoantes iniciais", function (assert) {
    assert.deepEqual(sci("california"), 'alifornia');
    assert.deepEqual(sci("glove"), 'ove');
    assert.deepEqual(sci("schwartz"), 'artz');
    assert.deepEqual(sci("rhythm"), '');
});
const sci = function (s) {
    let r = '';
    for (let i = 0; i < s.length; i++) {
        if (vogais.indexOf(s[i]) !== -1) {
            r = s.substring(i);
            return r;
        }
    }
    return r;
}


QUnit.module("Pig Latin");
QUnit.test("translatePigLatins", function (assert) {
    assert.deepEqual(translatePigLatin("california"), 'aliforniacay');
    assert.deepEqual(translatePigLatin("paragraphs"), 'aragraphspay');
    assert.deepEqual(translatePigLatin("glove"), 'oveglay');
    assert.deepEqual(translatePigLatin("algorithm"), 'algorithmway');
    assert.deepEqual(translatePigLatin("eight"), 'eightway');
    assert.deepEqual(translatePigLatin("schwartz"), 'artzschway');
    assert.deepEqual(translatePigLatin("rhythm"), 'rhythmay');
});
function translatePigLatin(str) {
    let r = '';
    // começa com vogal?
    if (ccv(str)) { 
      //adiciono 'way' ao final
      r = str + 'way';
      // não tem vogal?
    } else if (!tv(str)) { 
      //adiciono 'ay' ao final
      r = str + 'ay'; 
    } else { // outros casos
      r = sci(str) + oci(str) + 'ay';
    }
    return r;
  }
  