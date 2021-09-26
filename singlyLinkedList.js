class Node{
    constructor(value){
        this.next = null;
        this.value = value;
    }
    removeSelf(){
        this.next = null
        this.value =  null
    }
}
class SinglyLinkedList{
    constructor(){
        this.head = null
    }
    isEmpty(){
        return !this.head?true:false
    }
    printList(){
        var runner = this.head
        while(runner){
            console.log(runner.value)
            runner = runner.next
        }
    }
    addFront(value){
        var newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
    }
    addFrontNode(node){
        node.next = this.head
        this.head = node
    }
    removeFrontNode(){
        var returnNode = this.head
        this.head = this.head.next
        returnNode.next = null
        return returnNode
    }
    front(){
        return this.head.value
    }
    contains(searchValue){
        var runner = this.head
        while(runner){
            if(runner.value == searchValue){
                return true
            }
            runner = runner.next
        }
        return false
    }
    length(){
        var count = 0
        var runner = this.head
        while(runner){
            count++
            runner=runner.next
        }
        return count
    }
    rLength(node){
        var runner = node || this.head
        if(!runner.next){
            return 1
        }
        return 1+ this.rLength(runner.next)
    }
    display(){
        var nodeString = ""
        var runner = this.head
        while(runner){
            nodeString = nodeString+runner.value
            if(runner.next)(
                nodeString = nodeString +', '
            )
            runner = runner.next
        }
        console.log(nodeString)
    }
    average(){
        var sum = 0
        var count = 0
        var runner = this.head
        while(runner){
            sum += runner.value
            count++
            runner = runner.next
        }
        return sum/count
    }
    min(){
        if(this.head==null){
            return null
        }
        var min = this.head.value
        var runner = this.head.next
        while(runner){
            if(runner.value<min){
                min= runner.value
            }
            runner = runner.next
        }
        return min
    }
    max(){
        if(this.head==null){
            return null
        }
        var max = this.head.value
        var runner = this.head.next
        while(runner){
            if(runner.value>max){
                max= runner.value
            }
            runner = runner.next
        }
        return max
    }
    back(){
        var runner = this.head
        while(runner.next){
            runner = runner.next
        }
        return runner.value
    }
    removeBackNode(){
        var runner = this.head
        if(!runner){
            return
        }
        if(!runner.next){
            this.head = null
            return runner
        }
        while(runner.next.next){
            runner = runner.next
        }
        var returnNode = runner.next
        runner.next = null
        return returnNode
    }
    addBack(value){
        var node = new Node(value)
        if(!this.head){
            this.head = node
            return
        }
        var runner = this.head
        while(runner.next){
            runner = runner.next
        }
        runner.next = node
    }
    addBackNode(node){
        var runner = this.head
        while(runner.next){
            runner = runner.next
        }
        runner.next = node
    }
    removeNodeWithValue(value){
        if(!this.head){
            return "empty list"
        }
        if(this.head.value == value){
            return this.removeFrontNode()
        }
        var runner = this.head
        while(runner.next){
            if(runner.next.value == value){
                var returnNode = runner.next
                runner.next = runner.next.next
                returnNode.next = null
                return returnNode
            }
            runner = runner.next
        }
        return 'value not found'
    }
    prependValue(value, before){
        if(!this.contains(before)){
            this.addBack(value)
            return
        }
        if(this.head.value == before){
            this.addFront(value)
            return
        }
        var runner = this.head
        var newNode = new Node(value)
        while(runner.next){
            if(runner.next.value == before){
                
                newNode.next = runner.next
                runner.next = newNode
                return
            }
            runner = runner.next
        }
    }
    appendValue(value, after){
        if(!this.contains(after)){
            this.addBack(value)
            return
        }
        var newNode = new Node(value)
        var runner = this.head
        while(runner){
            if(runner.value == after){
                newNode.next = runner.next
                runner.next = newNode
                return
            }
            runner = runner.next
        }
    }
    splitOnValue(value){
        var returnList = new SinglyLinkedList()
        if(!this.contains(value)){
            return returnList
        }
        if(this.head.value == value){
            returnList.head = this.head
            this.head = null
            return returnList
        }
        var runner = this.head
        while(runner.next){
            if(runner.next.value == value){
                returnList.head = runner.next
                runner.next = null
                return returnList
            }
            runner = runner.next
        }
    }
    joinList(list){
        if(this.head == null){
            this.head= list.head
            return
        }
        var runner = this.head
        while(runner.next){
            runner = runner.next
        }
        runner.next = list.head
        list.head = null
    }
    partition(value){
        if(!this.contains(value)){
            return
        }
        var beforeList = new SinglyLinkedList()
        var equalList = new SinglyLinkedList()
        var afterList = new SinglyLinkedList()
        var runner = this.head
        while(runner){
            if(runner.value<value){
                beforeList.addFront(runner.value)
            }
            if(runner.value>value){
                afterList.addFront(runner.value)
            }
            if(runner.value==value){
                equalList.addFront(runner.value)
            }
            runner= runner.next
        }
        this.head = beforeList.head
        this.joinList(equalList)
        this.joinList(afterList)
    }
    deleteList(){
        var firstRunner = this.head.next
        var secondRunner = this.head
        while(secondRunner){
            secondRunner.removeSelf()
            secondRunner = firstRunner
            if(firstRunner!= null){
                firstRunner = firstRunner.next
            }
        }
    }
    deDupeList(){
        var usedValues = [this.head.value]
        var runner = this.head
        while(runner.next){
            if(usedValues.includes(runner.next.value)){
                var remove = runner.next
                runner.next = runner.next.next
                remove.removeSelf()
            }else{
                usedValues.push(runner.next.value)
                runner=runner.next
            }
        }
    }
    subListBeforeIndex(index){
        var returnList = new SinglyLinkedList()
        var runner = this.head
        for(var i = 0; i<index; i++){
            returnList.addBack(runner.value)
            runner = runner.next
        }
        return returnList
    }
    deDupeWithoutBuffer(){
        var count = 1
        var runner = this.head
        while(runner.next){
            var subList = this.subListBeforeIndex(count)
            if(subList.contains(runner.next.value)){
                var remove = runner.next
                runner.next = runner.next.next
                remove.removeSelf()
            }else{
                runner = runner.next
                count++
            }
            subList.deleteList()
        }
    }
    reverseList(){
        var firstRunner = this.head.next
        var secondRunner = this.head.next
        var thirdRunner = this.head
        thirdRunner.next = null
        while(firstRunner){
            firstRunner = firstRunner.next
            secondRunner.next = thirdRunner
            thirdRunner = secondRunner
            secondRunner = firstRunner
            if(!firstRunner){
                this.head = thirdRunner
            }
        }
    }
    kthLast(k){
        var length = this.length()
        var index = length-k
        var runner = this.head
        for(var i = 0;i<index;i++){
            runner = runner.next
        }
        return runner.value
    }
    isPalindrome(){
        var runner = this.head
        var k = 1
        while(runner){
            if(runner.value!=this.kthLast(k)){
                return false
            }
            k++
            runner=runner.next
        }
        return true
    }
    shiftBy(shiftAmount){
        if(shiftAmount>0){
            for(var i = 0; i<shiftAmount;i++){
                this.addFrontNode(this.removeBackNode())
            }
        }else{
            for(var i=0; i>shiftAmount;i--){
                this.addBackNode(this.removeFrontNode())
            }
        }
    }
}

function setUpLoop(length, loopStart){
    var list = new SinglyLinkedList()
    for(let i =1; i <=length;i++){  
        list.addBack(i)
    }
    var runner = list.head
    while(runner.next){
        if(runner.value===loopStart){
            var beginLoop = runner
        }
        runner=runner.next
    }
    runner.next = beginLoop
    return list
}

// setUpLoop(5,3).printList()

const myList = new SinglyLinkedList()

myList.addFront(1)
myList.addFront(2)
myList.addFront(3)
myList.addFront(4)
myList.addFront(5)
myList.addFront(6)
myList.addFront(7)
myList.display()
console.log(myList.length())
console.log(myList.rLength())