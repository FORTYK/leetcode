const numeralMap = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
}

/**
 * @param {string} numerals
 * @return {number}
 */
var romanToInt = function(numerals) {
    var result = 0;

    for(i = 0; i < numerals.length; i++) {
        const section = splitRoman(numerals, i);
        
        i += section.depth;
        result += section.result;
    }

    return result;
};

/**
 * @param {string} numerals
 * @param {number} index
 * @return {object}
 */
var splitRoman = function(numerals, index) {
    const current = convert(numerals[index]);
    const next = convert(numerals[index + 1]);
    
    if(next > current){
        return  {result: next - current, depth: 1};
    } else {
        return {result: current, depth: 0};
    }
}

/**
 * @param {string} numeral
 * @return {number}
 */
var convert = function (numeral) {
    return numeralMap[numeral];
}