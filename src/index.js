module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) {
        return false;
    }

    let arrBrackets = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        let bracketsPair = String(bracketsConfig[i][0]) + String(bracketsConfig[i][1]);
        arrBrackets.push(bracketsPair);
    }

    let strNew = str;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < arrBrackets.length; j++) {
            if (strNew.indexOf(arrBrackets[j]) !== -1) {
                let strBegin = strNew.indexOf(arrBrackets[j]);
                strNew = strNew.substring(0, strBegin) + strNew.substring(strBegin + 2);
            }
        }
    }

    if (strNew.length == 0) {
        return true;
    } else {
        return false;
    }
}
