function pretendInput() {
    return '1234';
}

function isValid(digits) {
    if (digits == null){
        return false;
    }
    var isFourNumber = checkDigitsNumber(digits);
    var isNonRepetition = checkRepetition(digits);
    return isFourNumber && isNonRepetition;
}

function checkDigitsNumber(digits){
    return (digits.length == 4);
}

function checkRepetition(digits){
    var hash = {};
    for(var i = 0, len = digits.length;i < len; i++){
        if(hash[digits[i]]){
            return false;
        }
        hash[digits[i]] = 'anything';
    }
    return true;
}


function generateDigits() {
    var targetDigit = '';
    var numOfDigits = 4;
    for(var i = 0; i < numOfDigits; i++){
        var digit = Math.floor(Math.random() * 10);
        targetDigit += digit.toString();
    }
    return targetDigit;
}

function compareDigits(oneDigits, anotherDigits){
    var numOfA = 0;
    var numOfB = 0;
    for(var i = 0,lenOfOne = oneDigits.length;i < lenOfOne; i++){
        for(var j = 0,lenOfAnother = anotherDigits.length;j < lenOfAnother;j++){
            if(oneDigits[i] === anotherDigits[j] && i === j){
                numOfA++;
            }
            else if (oneDigits[i] === anotherDigits[j] && i!=j){
                numOfB++;
            }
        }
    }
    return `${numOfA}A${numOfB}B`;
}

function gameController() {
    var maxTimes = 6;

    console.log('Please entry four digits without repetition:');
    var playerDigits = pretendInput();
    
    while (!isValid(playerDigits)){
        console.log('digits is invalid!\n');
        console.log('Please entry again:');
        playerDigits = pretendInput();
    }

    var targetDigits = null;
    do{
        targetDigits = generateDigits();
    }while (!isValid(targetDigits));

    for (var remainingTimes = maxTimes; remainingTimes > 0;remainingTimes--){
        var compareResult = compareDigits(targetDigits,playerDigits);
        if(compareResult === '4A0B'){
            console.log('You Win!\n');
            return true;
        }else {
            console.log(compareResult + '\n');
            playerDigits = pretendInput();
        }
    }
    return false;
}