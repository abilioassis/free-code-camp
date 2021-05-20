QUnit.module("Steamroller");
QUnit.test("steamrollArray", function (assert) {
    let vin = [3, 'y', [[['a', 'b', 'c']]], [[[['x']]]], [], {}];
    let vout = [3, 'y', 'a', 'b', 'c', 'x', {}];
    assert.deepEqual(steamrollArray(vin), vout);
});

// resolvo o problema particular primeiro ;-)
function steamrollArray_old(arr) {
    let r = [];
    // arr[0] = number
    r.push(arr[0]);
    // arr[1] = string
    r.push(arr[1]);
    // arr[2] = array
    r.push(arr[2][0][0][0]);
    r.push(arr[2][0][0][1]);
    r.push(arr[2][0][0][2]);
    // arr[3] = array
    r.push(arr[3][0][0][0][0]);
    // arr[4] = array vazio => não insiro
    // arr[5] = object
    r.push(arr[5]);

    console.log('arr[0].tipo = ', typeof arr[0]);
    console.log('arr[1].tipo = ', typeof arr[1]);
    console.log('arr[2].tipo = ', typeof arr[2]);
    console.log('arr[3].tipo = ', typeof arr[3]);
    console.log('arr[4].tipo = ', Array.isArray(arr[4]));
    console.log('arr[5].tipo = ', Array.isArray(arr[5]));
    
   return r;
}

function steamrollArray(arr) {
    let r = []; // resultado
    let vt; // vetor temporario
    // percorro todos os elementos de arr
    for(let i = 0; i < arr.length; i++) {
        // verifico o tipo de arr[i]
        switch(typeof arr[i]) {
            case 'object': // object e arrays entram aqui
                if (Array.isArray(arr[i])) { // é array
                    vt = steamrollArray(arr[i]);
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

