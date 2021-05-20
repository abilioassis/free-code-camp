QUnit.module("Nivelar Vetor");
QUnit.test("nivelar", function (assert) {
    let vin = [3, 'y', [[['a', 'b', 'c']], 'd'], [[[['x']]]], [], {}];
    let vout = [3, 'y', 'a', 'b', 'c', 'd', 'x', {}];
    assert.deepEqual(nivelar_v1(vin), vout);
});

// resolvo o problema particular primeiro ;-)
function nivelar_v1(vin) {
    let r = [];
    let vout = [];
    // vin[0] = number
    r.push(vin[0]);
    // vin[1] = string
    r.push(vin[1]);
    // vin[2] = array
    r.push(vin[2][0][0][0]);
    r.push(vin[2][0][0][1]);
    r.push(vin[2][0][0][2]);
    r.push(vin[2][1]);
    // vin[3] = array
    r.push(vin[3][0][0][0][0]);
    // vin[4] = array vazio => não insiro
    // vin[5] = object
    r.push(vin[5]);

    vin[0] = 3;
    vin[1] = 'y';

    vin[2] = [[['a', 'b', 'c']], 'd'];
    vin[2][0] = [['a', 'b', 'c']];
    vin[2][1] = 'd';
    vin[2][0][0] = ['a', 'b', 'c'];
    vin[2][0][1] = undefined;
    console.log('vin[2][0][1]', vin[2][0][1]);

    vin[2][0][0][0] = 'a';
    vin[2][0][0][1] = 'b';
    vin[2][0][0][2] = 'c';


    vin[3] = [[[['x']]]];
    vin[4] = [];
    vin[5] = {};
    
    
    console.log('vin[0] = ', vin[0]);
    console.log('vin[1] = ', vin[1]);
    console.log('vin[2] = ', vin[2]);
    console.log('vin[3] = ', vin[3]);
    console.log('vin[4] = ', vin[4]);
    console.log('vin[5] = ', vin[5]);
    
    
    
    
    
    console.log('arr[0].tipo = ', typeof vin[0]);
    console.log('arr[1].tipo = ', typeof vin[1]);
    console.log('arr[2].tipo = ', typeof vin[2]);
    console.log('arr[3].tipo = ', typeof vin[3]);
    console.log('arr[4].tipo = ', Array.isArray(vin[4]));
    console.log('arr[5].tipo = ', Array.isArray(vin[5]));
    
   return r;
}

function nivelar(arr) {
    let r = []; // resultado
    let vt; // vetor temporario
    // percorro todos os elementos de arr
    for(let i = 0; i < arr.length; i++) {
        // verifico o tipo de arr[i]
        switch(typeof arr[i]) {
            case 'object': // object e arrays entram aqui
                if (Array.isArray(arr[i])) { // é array
                    vt = nivelar(arr[i]);
                    for (let j = 0; j < vt.length; j++) {
                        r.push(vt[j]);
                    }
                } else { // não é array: é object de verdade
                    // insiro o object
                    r.push(arr[i]);
                }
                break;
            default: // tipos primitivos entram aqui
                // insiro o valor
                r.push(arr[i]);
        }
    }
    return r;
}

