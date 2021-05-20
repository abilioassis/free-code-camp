QUnit.module("Sorted Union");
QUnit.test("convertHTML", function (assert) {
    assert.deepEqual(convertHTML("Dolce & Gabbana"), "Dolce &amp; Gabbana");
    assert.deepEqual(convertHTML("Hamburgers < Pizza < Tacos"), "Hamburgers &lt; Pizza &lt; Tacos");
    assert.deepEqual(convertHTML("Sixty > twelve"), "Sixty &gt; twelve");
    assert.deepEqual(convertHTML('Stuff in "quotation marks"'), "Stuff in &quot;quotation marks&quot;");
    assert.deepEqual(convertHTML("Schindler's List"), "Schindler&apos;s List");
    assert.deepEqual(convertHTML("<>"), "&lt;&gt;");
    assert.deepEqual(convertHTML("abc"), "abc");
});

function convertHTML(str) {
    let r = '';
    // percorro a string até encontrar um entidade HTML
    for (let i = 0; i < str.length; i++) {
        switch(str[i]) {
            case '&':
                r = r + '&amp;';
                break;
            case '<':
                r = r + '&lt;';
                break;
            case '>':
                r = r + '&gt;';
                break;
            case '"':
                r = r + '&quot;';
                break;
            case "'":                
                r = r + '&apos;';
                break;
            default:
                r = r + str[i];
        }
    }
    return r;
}
