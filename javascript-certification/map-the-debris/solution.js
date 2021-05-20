QUnit.module("Map the Debris");
QUnit.test("getOrbitalPeriod", function (assert) {
    assert.deepEqual(getOrbitalPeriod(35873.5553), 86400);
});
const getOrbitalPeriod = function (avgAlt) {
    let GM = 398600.4418;
    let earthRadius = 6367.4447;
    return Math.round(2 * Math.PI * Math.sqrt(((earthRadius + avgAlt) ** 3) / GM));
}

QUnit.module("Map the Debris");
QUnit.test("orbitalPeriod", function (assert) {
    ve1 = [{ name: "sputnik", avgAlt: 35873.5553 }];
    vs1 = [{ name: "sputnik", orbitalPeriod: 86400 }];
    assert.deepEqual(orbitalPeriod(ve1), vs1);

    ve2 = [{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }];
    vs2 = [{ name: "iss", orbitalPeriod: 5557 }, { name: "hubble", orbitalPeriod: 5734 }, { name: "moon", orbitalPeriod: 2377399 }];
    assert.deepEqual(orbitalPeriod(ve2), vs2);
});

function orbitalPeriod(arr) {
    let vs = []; // vetor de saida
    let ove = {}; // objeto do vetor de entrada
    // varro o vetor de entrada
    for (let i = 0; i < arr.length; i++) {
        let ovs = {}; // objeto do vetor de saida
        // pego o objeto de entrada
        ove = arr[i];
        // copio a propriedade 'name' para o objeto de saida
        ovs['name'] = ove['name'];
        // calculo o orbital period
        ovs['orbitalPeriod'] = getOrbitalPeriod(ove['avgAlt']);
        // insiro ovs no vetor de saida
        vs.push(ovs);
    }
    return vs;
}