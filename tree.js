
class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }

}
class BinarySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root == null
    }
    add(value, myNode){
        if(this.root== null){
            this.root = new Node(value)
            return
        }
        var node = myNode || this.root
        if(value>node.value){
            if(node.right){
                this.add(value,node.right)
            }else{
                node.right = new Node(value)
            }
        }else{
            if(node.left){
                this.add(value,node.left)
            }else{
                node.left = new Node(value)
            }
        }
    }
    addWithoutDupes(value, node){
        if(arguments.length == 2){
            var current = node
        }else{
            var current = this.root
        }
        if(this.root==null){
            this.root = new Node(value)
            return true
        }
        if(current.value==value){
            return false
        }
        if(value>current.value){
            if(current.right){
                return this.addWithoutDupes(value, current.right)
            }else{
                current.right = new Node(value)
                return true
            }
        }
        if(value<current.value){
            if(current.left){
                return this.addWithoutDupes(value, current.left)
            }else{
                current.left = new Node(value)
                return true
            }
        }

    }
    min(node){
        var current = node || this.root
        if(current.left){
            return this.min(current.left)
        }else{
            return current.value
        }
    }
    max(node){
        var current = node || this.root
        if(current.right){
            return this.max(current.right)
        }else{
            return current.value
        }
    }
    contains(value, node){
        var current = node || this.root
        if(arguments.length==2 && arguments[1]==null){
            return false
        }else if(current.value==value){
            return true
        }else if(value<current.value){
            return this.contains(value, current.left)
        }else if(value>current.value){
            return this.contains(value, current.right)
        }
    }
    size(node){
        if(arguments.length ==1){
            var current = node
        }else{
            var current = this.root
        }
        if(!current){
            return 0
        }
        return 1 + this.size(current.left) + this.size(current.right)
    }
    remove(value, node){
        if(arguments.length == 2){
            var current = node
        }else{
            var current = this.root
        }
        //base case if tree is empty
        if(current == null){
            return false
        }
        if(value > current.value){
            current.right= this.remove(value, current.right)
        }
        if(value<current.value){
            current.left = this.remove(value, current.left)
        }
        if(current.value == value){
            if(current.left == null){
                return current.right
            }
            if(current.right == null){
                return current.left
            }
            current.value = this.min(current.right)
            current.right = this.remove(current.value, current.right)
        }
        return current
    }
    removeAll(node){
        if(arguments.length == 1){
            var current = node
        }else{
            var current = this.root
            this.root = null
        }
        if(current==null){
            return
        }else{
            this.removeAll(current.left)
            this.removeAll(current.right)
            current.right = null
            current.left = null
            current.value = null
            current = null
        }
    }
    isValid(node){
        if(arguments.length == 1){
            var current = node
        }else{
            var current = this.root
        }
        if(current == null){
            return true
        }
        if(current.right){
            if(current.right.value>current.value && this.isValid(current.right)){
                var rightValid = true
            }else{
                var rightValid = false
            }
        }else{
            var rightValid = true
        }
        if(current.left){
            if(current.left.value<current.value && this.isValid(current.left)){
                var leftValid = true
            }else{
                var leftValid = false
            }
        }else{
            var leftValid = true
        }
        if(rightValid && leftValid){
            return true
        }else{
            return false
        }
    }
    height(node){
        var current = arguments.length==1?node:this.root
        return current == null?0:1 + Math.max(this.height(current.left),this.height(current.right))
    }
    isBalanced(node){
        var current = arguments.length==1?node:this.root
        if(!this.root){
            return true
        }
        if(!current.right && !current.left){
            return true
        }else if(current.right && !current.left){
            return false
        }else if(!current.right && current.left){
            return false
        }
        if(this.isBalanced(current.right)&&this.isBalanced(current.left)&&  Math.abs(this.height(current.right)-this.height(current.left))<=1){
            return true
        }else{
            return false
        }
    }
    toArray(node){
        var current = arguments.length==1?node:this.root
        var results = []
        if(!current){
            return results
        }
        results = results.concat(this.toArray(current.left),current.value,this.toArray(current.right))
        return results
    }
    toArrayPre(node){
        var current = arguments.length==1?node:this.root
        var results = []
        if(!current){
            return results
        }
        results = results.concat(current.value,this.toArrayPre(current.left),this.toArrayPre(current.right))
        return results
    }
    toArrayPost(node){
        var current = arguments.length==1?node:this.root
        var results = []
        if(!current){
            return results
        }
        results = results.concat(this.toArrayPost(current.left),this.toArrayPost(current.right),current.value)
        return results
    }
    lowestCommonAncestor(valueOne, valueTwo, node=this.root){
        if(valueOne<node.value&& valueTwo<node.value){
            return this.lowestCommonAncestor(valueOne, valueTwo, node.left)
        }
        if(valueOne>node.value&& valueTwo>node.value){
            return this.lowestCommonAncestor(valueOne, valueTwo, node.right)
        }
        return node.value
    }
    printPreOrder(){
        if(this.root == null){
            return
        }
        var nodeStack = []
        nodeStack.push(this.root)
        while(nodeStack.length>0){
            var node = nodeStack[nodeStack.length-1]
            console.log(node.value)
            nodeStack.pop()
            if(node.left != null){
                nodeStack.push(node.right)
            }
            if(node.left != null){
                nodeStack.push(node.left)
            }
        }
    }
}
const BST = new BinarySearchTree()

BST.add(10)
BST.add(13)
BST.add(8)
BST.add(7)
BST.add(9)
BST.add(14)
BST.add(12)

console.log(BST.toArrayPre())
BST.printPreOrder()




