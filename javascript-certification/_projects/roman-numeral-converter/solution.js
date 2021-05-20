QUnit.module("Roman Numeral Converter");
QUnit.test("convertToRoman", function (assert) {
    assert.deepEqual(convertToRoman(2), 'II');
    assert.deepEqual(convertToRoman(3), 'III');
    assert.deepEqual(convertToRoman(4), 'IV');
    assert.deepEqual(convertToRoman(5), 'V');
    assert.deepEqual(convertToRoman(9), 'IX');
    assert.deepEqual(convertToRoman(12), 'XII');
    assert.deepEqual(convertToRoman(16), 'XVI');
    assert.deepEqual(convertToRoman(29), 'XXIX');
    assert.deepEqual(convertToRoman(44), 'XLIV');
    assert.deepEqual(convertToRoman(45), 'XLV');
    assert.deepEqual(convertToRoman(68), 'LXVIII');
    assert.deepEqual(convertToRoman(83), 'LXXXIII');
    assert.deepEqual(convertToRoman(97), 'XCVII');
    assert.deepEqual(convertToRoman(99), 'XCIX');
    assert.deepEqual(convertToRoman(400), 'CD');
    assert.deepEqual(convertToRoman(500), 'D');
    assert.deepEqual(convertToRoman(501), 'DI');
    assert.deepEqual(convertToRoman(649), 'DCXLIX');
    assert.deepEqual(convertToRoman(798), 'DCCXCVIII');
    assert.deepEqual(convertToRoman(891), 'DCCCXCI');
    assert.deepEqual(convertToRoman(1000), 'M');
    assert.deepEqual(convertToRoman(1004), 'MIV');
    assert.deepEqual(convertToRoman(1006), 'MVI');
    assert.deepEqual(convertToRoman(1023), 'MXXIII');
    assert.deepEqual(convertToRoman(2014), 'MMXIV');
    assert.deepEqual(convertToRoman(3999), 'MMMCMXCIX');
});

// casas decimais individuais (cdi)
let cdi = {
    0: { milhar: '', centena: '', dezena: '', unidade: '' },
    1: { milhar: 'M', centena: 'C', dezena: 'X', unidade: 'I' },
    2: { milhar: 'MM', centena: 'CC', dezena: 'XX', unidade: 'II' },
    3: { milhar: 'MMM', centena: 'CCC', dezena: 'XXX', unidade: 'III' },
    4: { milhar: '', centena: 'CD', dezena: 'XL', unidade: 'IV' },
    5: { milhar: '', centena: 'D', dezena: 'L', unidade: 'V' },
    6: { milhar: '', centena: 'DC', dezena: 'LX', unidade: 'VI' },
    7: { milhar: '', centena: 'DCC', dezena: 'LXX', unidade: 'VII' },
    8: { milhar: '', centena: 'DCCC', dezena: 'LXXX', unidade: 'VIII' },
    9: { milhar: '', centena: 'CM', dezena: 'XC', unidade: 'IX' },
};

const getMilhar = function (num) {
    return Math.trunc(num / 1000);
}

const getCentena = function (num) {
    return Math.trunc((num - getMilhar(num) * 1000) / 100);
}

const getDezena = function (num) {
    return Math.trunc((num - getMilhar(num) * 1000 - getCentena(num) * 100) / 10);
}

const getUnidade = function (num) {
    return Math.trunc(num - getMilhar(num) * 1000 - getCentena(num) * 100 - getDezena(num) * 10);
}

// converte um número (num) para romano (r)
function convertToRoman(num) {
    // separo o número em suas partes decimais
    let m = getMilhar(num);
    let c = getCentena(num);
    let d = getDezena(num);
    let u = getUnidade(num);
    // obtenho o romano corresponde a cada parte decimal
    let mr = cdi[m]['milhar'];
    let cr = cdi[c]['centena'];
    let dr = cdi[d]['dezena'];
    let ur = cdi[u]['unidade'];
    // junto tudo no número romano
    let r = mr + cr + dr + ur;
    return r;
}



