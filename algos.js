function printNumbers(){
    for (let x=1;x<256;x++){
        console.log(x);
    }
}
// printNumbers()
function printSum(){
    let sum =0;
    for(let x=0;x<256;x++){
        sum+=x;
    }
    console.log(sum)
}
// printSum()
function findAndPrintMax(myArray){
    if(Array.isArray(myArray)==false || myArray.length<1){
        console.log("invalid input")
        return
    }
    let max = myArray[0]
    for(let x =0; x<myArray.length;x++){
        if(myArray[x]>max){
            max = myArray[x]
        }
    }
    console.log(max)
}
// findAndPrintMax([5,8,1,3,4,7,6,])
// findAndPrintMax(100)
// findAndPrintMax([])
function arrayWithOdds(){
    let myArray =[]
    for(let x= 1;x<256;x++){
        if(x%2!=0){
            myArray.push(x)
        }
    }
    return myArray
}
// console.log(arrayWithOdds())
function greaterThanY(myArray,Y){
    if(!Array.isArray(myArray) || myArray.length<1){
        console.log("invalid array input")
        return
    }
    if(!Number.isFinite(Y)){
        console.log("invalid Y input")
        return
    }
    let count =0;
    for(let x =0; x<myArray.length; x++){
        if(myArray[x]>Y){
            count++
        }
    }
    console.log(count)
}
// greaterThanY()
// greaterThanY([1,2],"A")
// greaterThanY([1,8,1,2,47,6,3],5)

function maxMinAverage(myArray){
    if(!Array.isArray(myArray)||myArray.length<1){
        console.log("invalid input array")
        return
    }
    let min = myArray[0]
    let max = myArray[0]
    let sum = 0
    for (let x=0;x<myArray.length;x++){
        if(!Number.isFinite(myArray[x])){
            console.log("array contains invalid data")
            return
        }
        if(myArray[x]>max){
            max=myArray[x]
        }
        if(myArray[x]<min){
            min=myArray[x]
        }
        sum += myArray[x]
    }   
    console.log(max)
    console.log(min)
    console.log(sum/myArray.length)
}
// maxMinAverage([1,8,9,1,4,3,-11,8,99,41])
// maxMinAverage([1,'g',9,1,4,3,-11,8,99,41])
function swapStringForNegatives(myArray){
    for(let x =0; x<myArray.length;x++){
        if(myArray[x]<0){
            myArray[x]='Dojo'
        }
    }
    console.log(myArray)
}
// swapStringForNegatives([5,10,9,-50,-4,1])
function sigma(number){
    let sum = 0
    for(let x = 0; x<=number; x++){
        sum+=x
    }
    return sum;
}
// console.log(sigma(10))
function factorial(number){
    let product = number
    for(let x = 1; x<number; x++){
        product*=x
    }
    return product
}
// console.log(factorial(5))
function threeFives(){
    let sum =0
    for(x=100;x<=4000000;x++){
        if(x%3==0 && x%5!=0){
            sum+=x
        }else if(x%5==0 && x%3!=0){
            sum+=x
        }
    }
    return sum;
}
// console.log(threeFives())
function betterThreeFives(start,end){
    let sum =0
    for(x=start;x<=end;x++){
        if(x%3==0 && x%5!=0){
            sum+=x
        }else if(x%5==0 && x%3!=0){
            sum+=x
        }
    }
    return sum;
}
// console.log(betterThreeFives(100,4000000))
function generateCoinChange(cents){
    let quarters =0;
    let dimes =0;
    let nickels =0;
    let pennies =0;
    while(cents>=25){
        quarters+=1;
        cents-=25;
    }
    while(cents>=10){
        dimes+=1;
        cents-=10
    }
    while(cents>=5){
        nickels+=1;
        cents-=5;
    }
    while(cents>=1){
        pennies+=1;
        cents-=1;
    }
    console.log("quarters: "+quarters)
    console.log("dimes: "+dimes)
    console.log("nickels: "+nickels)
    console.log("pennies: "+pennies)
}
// generateCoinChange(228)
function rollDie(){
    return Math.ceil(Math.random()*6)
}
function statisticsToDoubles(){
    let diceOne = 7
    let diceTwo = 8;
    let min = 7;
    let max =0;
    let sum = 0;
    let count = 0;
    while(diceOne!=diceTwo){
        diceOne = rollDie()
        diceTwo = rollDie()
        count += 2;
        sum += diceOne;
        sum += diceTwo;
        if(Math.min(diceOne,diceTwo)<min){
            min=Math.min(diceOne,diceTwo)
        }
        if(Math.max(diceOne,diceTwo)>max){
            max = Math.max(diceOne,diceTwo)
        }
    }
    console.log("rolls: "+count/2)
    console.log("minimum: "+ min)
    console.log("maximum: "+max)
    console.log("average: "+(sum/count))
}
// statisticsToDoubles()
function sumToOneDigit(number){
    const numberString = number.toString()
    if(numberString.length==1){
        return number;
    }else{
        let digitSum = 0
        for(let x=0; x<numberString.length;x++){
            digitSum += Number(numberString.charAt(x))
        }
        return sumToOneDigit(digitSum)
    }
}
// console.log(sumToOneDigit(1111111111))
function fibonacci(myNumber){
    if(myNumber==0){
        return 0;
    }else if(myNumber==1){
        return 1;
    }else{
        return fibonacci(myNumber-1)+fibonacci(myNumber-2)
    }
}
// console.log(fibonacci(30))
function lastDigitOfAtoTheB(A,B){
    let product = 1;
    for(let i = 0; i<B;i++){
        product *= A
        productString = product.toString()
        product = Number(productString.charAt(productString.length-1)) 
    }
    return product;
}
// console.log(lastDigitOfAtoTheB(3,4))
function clockHandAngles(seconds){
    let secondHand = (seconds%60)*360/60
    let minutes = Math.floor(seconds/60)
    let minuteHand = ((minutes%60)*360/60)+secondHand/60
    let hours = Math.floor(minutes/60)
    let hourHand = (hours*360/12)+minuteHand/12
    console.log(secondHand)
    console.log(minuteHand)
    console.log(hourHand)
}
// clockHandAngles(1800)
function pushFront(myArray, value){
    for(let x = myArray.length; x>0; x--){
        myArray[x]=myArray[x-1]
    }
    myArray[0]=value
    return myArray
}
// console.log(pushFront([4,8,13,14,6],9))
function popFront(myArray){
    let value = myArray[0]
    for(let i = 0; i<myArray.length;i++){
        myArray[i]=myArray[i+1]
    }
    myArray.pop()
    console.log(myArray)
    return value
}
// console.log(popFront([5,8,6,4]))
function insertAt(myArray, index, value){
    for(let i = myArray.length;i>=index;i--){
        myArray[i]=myArray[i-1]
    }
    myArray[index]=value
    return myArray
}
// console.log(insertAt([5,8,1,3,4],2,100))
function removeAt(myArray,index){
    let value = myArray[index]
    for(let i = index;i<myArray.length;i++){
        myArray[i]=myArray[i+1]
    }
    myArray.pop()
    return value
}
// console.log(removeAt([1,5,61,14,38,74], 3))
function reverseArray(myArray){
    for(let i=0;i<Math.floor(myArray.length/2);i++){
        let temp = myArray[i]
        myArray[i]=myArray[myArray.length-1-i]
        myArray[myArray.length-1-i]=temp
        console.log(myArray)
    }
    return myArray
}
// console.log(reverseArray([1,2,3,4,5,6,7]))
// function removeNegatives(myArray){
//     for(let i = myArray.length-1; i>=0; i--){
//         if(myArray[i]<0){
//             for(let j = i; j<myArray.length;j++){
//                 myArray[j]=myArray[j+1]
//             }
//             myArray.pop()
//         }
//     }
//     return myArray
// }
function removeNegatives(myArray){
    let length = myArray.length
    for(let i =0; i<length;i++){
        if(myArray[0]<0){
            myArray.shift()
        }else{
            myArray.push(myArray.shift())
        }
    }
    return myArray
}
// console.log(removeNegatives([-1,8,4,-6,-2,2,4]))
function skylineHeights(myArray){
    let heights = [myArray[0]]
    for(let i =0; i<myArray.length;i++){
        if(myArray[i]>heights[heights.length-1]){
            heights.push(myArray[i])
        }
    }
    return heights
}
// console.log(skylineHeights([1,-1,7,3]))
function binarySearch(myArray, value){
    let middle = Math.floor(myArray.length/2)
    if(myArray[middle]==value){
        return true;
    }else if(value<myArray[middle]&&middle!=0){
        return binarySearch(myArray.slice(0,middle),value)
    }else if(value>myArray[middle]&& myArray[myArray.length-1]!=middle){
         return binarySearch(myArray.slice(middle+1,myArray.length-1),value)
    }else{
        return false
    }
}
// console.log(binarySearch([1,2,4,5,6,7,8,9,11],0))
function rotateArray(myArray, shiftBy){
    let shift = shiftBy%myArray.length;
    if(shift>0){
        for(let i =0; i<shift; i++){
            myArray.unshift(myArray.pop())
        }
    }else{
        for(let i=0; i>shift; i--){
            myArray.push(myArray.shift())
        }
    }
    return myArray
}
// console.log(rotateArray([1,2,3,4,5,6,7,8,9],3))
// console.log(rotateArray([1,2,3,4,5,6,7,8,9],-3))
function minOfSortedRotated(myArray){
    if(myArray[0]<myArray[myArray.length]){
        return myArray[0]
    }
    for(let min = myArray.length-1;min>0;min--){
        if(myArray[min-1]>myArray[min]){
            return myArray[min]
        }
    }
}
// console.log(minOfSortedRotated([4,5,6,7,8,9,1,2,3]))
function secondToLast(myArray){
    return(myArray[myArray.length-2])
}
// console.log(secondToLast([1,2,3,4,5,6]))
function nthToLast(myArray,N){
    return(myArray[myArray.length-N])
}
// console.log(nthToLast([1,2,3,4,5,6,7,8,9],4))
function secondLargest(myArray){
    for(let i =0; i<2;i++){
        var max = myArray[0]
        let maxIndex=0
        for(let j = 0; j<myArray.length;j++){
            if(myArray[j]>max){
                max=myArray[j]
                maxIndex=j
            }
        }
        removeAt(myArray,maxIndex)
    }
    return max;
}
// console.log(secondLargest([100,200,5,3,4,6]))
function nthLargest(myArray,N){
    for(let i =0; i<N;i++){
        var max = myArray[0]
        let maxIndex=0
        for(let j = 0; j<myArray.length;j++){
            if(myArray[j]>max){
                max=myArray[j]
                maxIndex=j
            }
        }
        removeAt(myArray,maxIndex)
    }
    return max;
}
// console.log(nthLargest([100,200,5,8,14,70,60],3))
function arrConcat(myArray,otherArray){
    let newArray = [myArray, otherArray]
    return newArray.flat()
}
// console.log(arrConcat([1,2,3,4,5],[6,7,8,9]))
function shuffle(myArray){
    for(let i = 0;i<myArray.length;i++){
        let random = Math.floor(Math.random()*myArray.length)
        let temp = myArray[i]
        myArray[i] = myArray[random]
        myArray[random]=temp
    }
}
// var array =[1,2,3,4,5,6,7,8,9]
// shuffle(array)
// console.log(array)
function tribonacci(myNumber){
    if(myNumber<=1){
        return 0
    }else if(myNumber==2){
        return 1
    }else{
        return tribonacci(myNumber-1)+ tribonacci(myNumber-2)+ tribonacci(myNumber-3)
    }
}
// console.log(tribonacci(9))
function arraysToMap(myArray, otherArray){
    const myObject = new Object()
    for(let i = 0; i<myArray.length; i++){
        myObject[myArray[i]]=otherArray[i]
    }
    return myObject
}
// console.log(arraysToMap(["a","b","c"],[1,2,3]))
function invertHash(myObject){
    const swapped = Object.fromEntries(Object.entries(myObject).map(entry=>entry.reverse()))    
    return swapped
}
// const object = {
//     a: 1,
//     b: 2,
//     c: 3,
// }
// console.log(invertHash(object))
function reverseString(myString){
    let newString =""
    for(let i = myString.length-1;i>=0;i--){
        newString = newString.concat(myString.charAt(i))
    }
    return newString
}
// console.log(reverseString("drewpetty"))
function removeBlanks(myString){
    let test = "test"
    let myArray = myString.split(" ")
    return myArray.join("")
}
// console.log(removeBlanks("play that Funky Music"))
function getStringDigits(myString){
    let numericString = ""
    for(let i =0; i<myString.length; i++){
        if(!isNaN(myString.charAt(i))){
            numericString = numericString.concat(myString.charAt(i))
        }
    }
    return parseFloat(numericString)
}
// console.log(getStringDigits("0s1a3y5w7h9a2t4?6!8?0"))
function Acronyms(myString){
    let arrayWords = myString.split(" ")
    let acronym =""
    for (let word of arrayWords){
        acronym = acronym.concat(word[0])
    }
    return acronym.toUpperCase()
}
// console.log(Acronyms("there's no free lunch - gotta pay yer way"))
function parensValid(myString){
    let openParenCount =0;
    for(let i =0; i<myString.length; i++){
        if(myString.charAt(i)=="("){
            openParenCount++
        }else if(myString.charAt(i)==")"){
            openParenCount--
        }
        if(openParenCount<0){
            return false
        }
    }
    return openParenCount == 0
}
// console.log(parensValid("y(3(p)p(3)rs)"))
function bracesValid(myString){
    let bracesArray = []
    for(let i = 0;i<myString.length;i++){
        switch (myString.charAt(i)){
            case '[':
            case '{':
            case '(':
                bracesArray.push(myString.charAt(i))
                break
            case ')':
                if(bracesArray[bracesArray.length-1]!='('){
                    return false
                }else{
                    bracesArray.pop()
                }
                break
            case ']':
                if(bracesArray[bracesArray.length-1]!='['){
                    return false
                }else{
                    bracesArray.pop()
                }
                break
            case '}':
                if(bracesArray[bracesArray.length-1]!='{'){
                    return false
                }else{
                    bracesArray.pop()
                }
                break
            default:
                break
            
        }
    }
    return bracesArray.length==0
}
// console.log(bracesValid("()[{]}"))
// console.log(bracesValid("()[{}]"))
function isPalindrome(myString){
    const half = Math.floor(myString.length/2)
    for(let i = 0; i<half;i++){
        if(myString.charAt(i)!=myString.charAt(myString.length-1-i)){
            return false
        }
    }
    return true
}
function longestPalindrome(myString){
    for(var i = myString.length; i>0; i-- ){
        for(var j =0; j<=myString.length-i;j++){
            if(isPalindrome(myString.substr(j,i))){
                return myString.substr(j,i)
            }
        }
    }   
}

// console.log(longestPalindrome("My favorite racecar erupted!"))
function bookIndex(myArray){
    if(myArray.length == 0){
        return ""
    }
    let result = myArray[0].toString()
    let index = 1
    while(index<myArray.length){
        if(myArray[index]>myArray[index-1]+1){
            result = result + ', '+myArray[index].toString()
        }else{
            result = result + '-'
            while(myArray[index+1]==myArray[index]+1){
                index++
            }
            result = result+myArray[index].toString()
        }
        index++
    }
    return result
}
// console.log(bookIndex( [1, 3, 4, 5, 7, 8, 10]))
function commonSuffix(myArray){
    var suffix =""
    var maxSuffix = myArray[0].length
    for(let i = 0; i<maxSuffix;i++){
        let character = myArray[0].charAt(myArray[0].length-1-i)
        let inSuffix = true
        for(let word of myArray){
            if(word.charAt(word.length-1-i)!=character){
                inSuffix=false
            }
        }
        if(inSuffix){
            suffix = character+suffix
        }else{
            break
        }
    }
    return suffix
}
// console.log(commonSuffix(["ovation", "notation", "action"]))
// console.log(commonSuffix(["nice", "ice", "sic"]))




function average(myArray){
    var sum = 0
    for(var value of myArray){
        sum += value
    }
    return sum/myArray.length
}
// console.log(average([1,1,1,5,5,5,6,7]))
function balancePoint(myArray){
    var array = myArray.slice()
    var left = 0
    var right = 0
    while(array.length>0){
        if(left>right){
            right+=array.pop()
        }else{
            left+=array.shift()
        }
    }
    console.log(left)
    console.log(right)

    return right == left
}
// console.log(balancePoint([1,2,3,4,10]))
// console.log(balancePoint([1,2,3,2,1]))
function balanceIndex(myArray){
    var array = myArray.slice()
    var left = 0
    var right = 0
    var index = 0
    if(array.length==1){
        return 0
    }
    while(array.length>1){
        if(array[0]==0){
            array.shift()
            index++
        }else if(array[array.length-1]==0){
            array.pop()
        }else if(left>right){
            right+=array.pop()
        }else{
            index++
            left+=array.shift()
        }
    }
    return left==right?index:-1
}
// console.log(balanceIndex([9,9]))
// console.log(balanceIndex([0,-2,5,7,0,3]))
function tacoTruck(customerArray){
    return [Math.floor(customerArray[0]/2),Math.floor(customerArray[1]/2)]
}
// console.log(tacoTruck([37,-16]))
function flatten(myArray, result){
    var returnArray = result || []
    for(var item of myArray){
        if(Array.isArray(item)){
            returnArray = flatten(item, returnArray)
        }else{
            returnArray.push(item)
        }
    }
    return returnArray
}
// console.log(flatten([1,[2,3],4,[]]))
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
// console.log(removeDuplicates([1,1,1,1,2,2,2,5,5,5]))
// console.log(removeDuplicates([1]))

function count(myArray, value){
    var count = 0
    for(var item of myArray){
        if(item == value){
            count++
        }
    }
    return count
}

function mode(myArray){
    var mode = myArray[0]
    var modeCount = count(myArray,mode)
    for(item of myArray){
        if(modeCount<count(myArray,item)){
            mode = item
            modeCount =count(myArray, item)
        }
    }
    return mode
}
// console.log(mode([2,2,2,5,5,5,6,6,5,4,1,1,2,8,4,6,9,4,4,5]))
function combineSortedArrays(arrayOne, arrayTwo){
    var arrayThree= []
    while(arrayOne.length>0 || arrayTwo.length>0){
        if(arrayOne.length == 0){
            arrayThree.push(arrayTwo.shift())
        }else if(arrayTwo.length ==0){
            arrayThree.push(arrayOne.shift())
        }else if(arrayOne[0]<arrayTwo[0]){
            arrayThree.push(arrayOne.shift())
        }else if(arrayOne[0]>arrayTwo[0]){
            arrayThree.push(arrayTwo.shift())
        }
    }
    return arrayThree
}

function medianSortedArrays(){
    var myArray=[]
    for(var array of arguments){
        myArray = combineSortedArrays(myArray,array)
    }
    console.log(myArray)
    if(myArray.length%2 !=0){
        return myArray[Math.floor(myArray.length/2)]
    }
    return (myArray[myArray.length/2]+myArray[(myArray.length/2)-1])/2
}
// console.log(medianSortedArrays([1,2],[3,4],[5,6,7,8]))

function sum(myArray){
    var sum =0
    for(var item of myArray){
        sum +=item
    }
    return sum
}
function maxSubArray(myArray){
    var returnArray = []
    var max= sum(returnArray)
    for(var i = 0;i<myArray.length;i++){
        for(var j =1;j<=myArray.length;j++){
            var subArray = myArray.slice(i,i+j)
            if(sum(subArray)>max){
                returnArray=subArray
                max=sum(returnArray)
            }
        }
    }
    return returnArray
}
// console.log(maxSubArray([1,2,-4,3,-2,3,-1]))
