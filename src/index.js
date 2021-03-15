module.exports = function check(str, bracketsConfig) {
    const openedBrackets = [];
    const closedBrackets =[];
    for (let i = 0; i < bracketsConfig.length; i++) {
        openedBrackets.push(bracketsConfig[i][0]);
        closedBrackets.push(bracketsConfig[i][1]);
    }
    const toBeClosed = [];
    for (let i = 0; i < str.length; i++) {
        if (closedBrackets.indexOf(str[i]) !== -1 && toBeClosed.length) {
            let lastNotClosed = toBeClosed[toBeClosed.length - 1];
            const openedBracketIndex = openedBrackets.indexOf(lastNotClosed);
            if (closedBrackets[openedBracketIndex] === str[i]) {
                toBeClosed.pop();
                continue;
            }
        }
        if (openedBrackets.indexOf(str[i]) !== -1) {
            toBeClosed.push(str[i]);
        }
        else {
            return false;
        }
    }
    if(toBeClosed.length > 0) {
        return false;
    }
    else {
        return true;
    }
};
