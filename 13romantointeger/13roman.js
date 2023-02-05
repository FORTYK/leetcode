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
    if(!numerals[index + 1]) return {result: current, depth: 0};

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
    switch(numeral){
        case 'M':
            return 1000;
        case 'D':
            return 500;
        case 'C':
            return 100;
        case 'L':
            return 50;
        case 'X':
            return 10;
        case 'V':
            return 5;
        case 'I':
            return 1;
    }
}