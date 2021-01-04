var Node = function(key) {
    this.key = 0;
    this.next = null;
}

Node.prototype.setKey = function(key) {
    this.key = key;
}

Node.prototype.getKey = function() {
    return this.key;
}

Node.prototype.setNext = function(next) {
    this.next = next;
}

Node.prototype.getNext = function() {
    return this.next;
}

var LinkedList = function(config) {
    this.firstNode;
}

LinkedList.prototype.setFirstNode = function(firstNode) {
    this.firstNode = firstNode;
}

LinkedList.prototype.getFirstNode = function() {
    return this.firstNode;
}


LinkedList.prototype.insert = function(node) {
    if (!this.getFirstNode()) {
        this.setFirstNode(node);
    } else {
        // 1, 3, entry 5
        var currentNode = this.getFirstNode();

        while (currentNode.next) {
            if (node.getKey() > currentNode.getKey()) {
                currentNode = currentNode.next;
            } else {

            }
        }

        if (node.getKey() > currentNode.getKey()) {
            currentNode.next = node;
        } else {
            node.next = currentNode;
        }

        // currentNode.next = node;

        // while(!this.getFirstNode().getNext()){

        // }
    }
}


var linkedList = new LinkedList();
linkedList.insert(new Node(2));
linkedList.insert(new Node(1));
linkedList.insert(new Node(5));

console.log(linkedList)


var HashIndex = function(value, next) {
    this.value = value;
    this.branch = branch;
}

HashIndex.prototype = LinkedList.prototype;

HashIndex.prototype = {
    setValue: function(value) {
        this.value = value;
    },

    getValue: function() {
        return this.value;
    },

    setBranch: function(branch) {
        this.branch = branch;
    },

    getBranch: function() {
        return this.branch;
    }
}
