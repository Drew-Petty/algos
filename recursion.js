function rSigma(myNumber){
    if(myNumber<0){
        return 0
    }
    return Math.floor(myNumber)+rSigma(myNumber-1)
}
// console.log(rSigma(5))
// console.log(rSigma(2.5))
// console.log(rSigma(-1))
function rBinarySearch(myArray,myValue){
    if(myValue<myArray[0]||myValue>myArray[myArray.length -1] ||myArray.length==0){
        return false
    }
    
    if(myArray[0]==myValue){
        return true
    }
    if(rBinarySearch(myArray.slice(0,Math.floor(myArray.length/2)),myValue) || rBinarySearch(myArray.slice(Math.floor(myArray.length/2)),myValue)){
        return true
    }
    return false
}
// console.log(rBinarySearch([1,3,5,6],4))
// console.log(rBinarySearch([4,5,6,8,12],12))
function rFibonacci(myNumber){
    var workingNumber = Math.floor(myNumber)
    if(workingNumber == 0){
        return 0
    }
    if(workingNumber==1){
        return 1
    }
    return rFibonacci(workingNumber-1)+rFibonacci(workingNumber-2)
}
// console.log(rFibonacci(6))
function rBinaryStringExpansion(myString){
    var returnArray = []
    var index = myString.indexOf('?')
    if(index ==-1){
        returnArray.push(myString)
        return returnArray
    }
    var stringZero = myString.slice(0,index)+'0'+myString.slice(index+1)
    var stringOne = myString.slice(0,index)+'1'+myString.slice(index+1)
    return returnArray.concat(rBinaryStringExpansion(stringZero),rBinaryStringExpansion(stringOne))
}
// console.log(rBinaryStringExpansion('????'))

function rTribonacci(myNumber){
    if(myNumber ==0 ||myNumber==1){
        return 0
    }
    if(myNumber == 2){
        return 1
    }
    return rTribonacci(myNumber-1)+rTribonacci(myNumber-2)+rTribonacci(myNumber-3)
}
// console.log(rTribonacci(5))
function strSubsets(myString, results){
    if(myString.length == 0){
        return ['']
    }
    var originalArray = strSubsets(myString.slice(1))
    var newArray = []
    for(var item of originalArray){
        newArray.push(myString.charAt(0)+item)
    }
    return originalArray.concat(newArray)
}
// console.log(strSubsets("abc"))
function rFactorial(myNumber){
    var workingNumber = Math.floor(myNumber)
    if(workingNumber == 0){
        return 1
    }
    if(workingNumber<0){
        return 0
    }
    return workingNumber * rFactorial(workingNumber-1)
}
// console.log(rFactorial(5))
function stringAnagrams(myString){
    if(myString.length == 1){
        return [myString]
    }
    if(myString.length == 2){
        return [myString, myString.charAt(1).concat(myString.charAt(0))]
    }
    var returnArray = []
    for(var i = 0; i<myString.length;i++){
        var char = myString.charAt(i)
        var originalArray = stringAnagrams(myString.slice(0,i)+myString.slice(i+1))
        var results = []
        for(var item of originalArray){
            results.push(char.concat(item))
        }
        returnArray = returnArray.concat(results)
    }
    return returnArray
}
// console.log(stringAnagrams('stop'))
// console.log(stringAnagrams('stop').length)
function telephoneWords(phoneNumber){
    var phoneString = phoneNumber.toString()
    var numberLetterMap = {
        0:'O', 1:'I', 2:'ABC', 3:'DEF', 4:'GH', 5:'JKL', 6:'MN', 7:'PQRS', 8:'TUV', 9:'WXYZ'
    }
    if(phoneString.length==1){
        var letters = numberLetterMap[parseInt(phoneString)]
        var results = []
        for(var i = 0; i<letters.length;i++){
            results.push(letters.charAt(i))
        }
        return results
    }
    var originalArray = telephoneWords(phoneString.slice(1))
    var letters = numberLetterMap[parseInt(phoneString.charAt(0))]
    var results = []
    for(var i = 0;i<letters.length;i++){
        for(var item of originalArray){
            results.push(letters.charAt(i)+item)
        }
    }
    return results
}
// console.log(telephoneWords(96937130))
// console.log(telephoneWords(96937130).length)
function allValidNPairsOfParens(myNumber){
    if(myNumber==1){
        return ["()"]
    }
    if(myNumber==2){
        return ["()()","(())"]
    }
    var originalArray = allValidNPairsOfParens(myNumber-1)
    var results = []
    for(var item of originalArray){
        results.push('()'+item)
        results.push('('+item+')')
        results.push(item+'()')
    }
    results = removeDuplicates(results)
    return results
}
function removeDuplicates(myArray){
    var workingArray = myArray.slice()
    var length = workingArray.length
    for(var i =length-1;i>=0;i--){
        if(workingArray.slice(0,workingArray.length-2).includes(workingArray[workingArray.length-1])){
            workingArray.pop()
        }else{
            workingArray.unshift(workingArray.pop())
        }
    }
    return workingArray
}
// console.log(allValidNPairsOfParens(4))
// console.log(allValidNPairsOfParens(4).length)
function isChessMoveSafe(intendedMove, queen){
    if(intendedMove[0]==queen[0]){
        return false
    }
    if(intendedMove[1]==queen[1]){
        return false
    }
    if(Math.abs(queen[0]-intendedMove[0])==Math.abs(queen[1]-intendedMove[1])){
        return false
    }
    var temp = queen.slice()
    for(var i = queen[1];i>=0;i--){
        if(temp == intendedMove){
            return false
        }
        temp = [temp[0]+1,temp[1]-1]
    }
    temp = queen.slice()
    for(var i = queen[0];i>=0;i--){
        if(temp == intendedMove){
            return false
        }
        temp = [temp[0]-1,temp[1]+1]
    }
    return true
}
console.log(isChessMoveSafe([4,2],[3,3]))
