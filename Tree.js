import { Node } from "./Node.js";
import { mergeSort } from "./merge-sort.js";

export class Tree {
    constructor(array) {
        let filteredArr = array.filter((value, index) => array.indexOf(value) === index);
        let sortedArr = mergeSort(filteredArr);
        this.root = this.buildTree(sortedArr)
    }

    buildTree(arr, start = 0, end = arr.length - 1) {
        if (start > end) {
            return null;
        }
        
        let mid = Math.floor((start + end) / 2);
        
        const root = new Node(arr[mid]);
        root.left = this.buildTree(arr, start, mid-1);
        root.right = this.buildTree(arr, mid+1, end);

        return root;
    }

    insert(value, root = this.root) {
        // check the new value with value of current node
        // if new value is less, move to the left subtree
        // otherwise, move to the right subtree
        // once leaf node is reached, insert new value to left or right
        if (root === null) {
            return new Node(value);
        }

        if (root.value === value) {
            return root;
        }

        if (value < root.value) {
            root.left = this.insert(value, root.left);
        }

        if (value > root.value) {
            root.right = this.insert(value, root.right);
        }

        return root;
    }

    deleteItem(value, root = this.root) {
        if (root === null) {
            return root;
        }
        if (value < root.value) {
            root.left = this.deleteItem(value, root.left);
        } else if (value > root.value) {
            root.right = this.deleteItem(value, root.right);
        } else {
            if (root.left === null) {
                return root.right;
            }
            if (root.right === null) {
                return root.left;
            }
            
            let inorderSuccessor = this.findInorderSucc(root.left);
            root.value = inorderSuccessor.value;
            root.left = this.deleteItem(inorderSuccessor.value, root.left);
        }          
        return root;
    }

    findInorderSucc(root) {
        if (root.right === null) {
            return root;
        }
        return this.findInorderSucc(root.right);
    }

    find(value, root = this.root) {
        if (root === null) {
            return null;
        } else if (root.value === value) {
            return root;
        } else if (value < root.value) {
            return this.find(value, root.left);
        } else if (value > root.value) {
            return this.find(value, root.right);
        }
    }

    levelOrder(callback, root = this.root) {
        if (!callback) {
            throw new Error("A callback function must be provided.");
        }
        if (root === null) {
            return;
        }
        let q = [];
        q.push(root)
        
        while(q.length > 0) {
            let current = q[0];
            callback(current);
            if (current.left !== null) {
                q.push(current.left);
            }
            if (current.right !== null) {
                q.push(current.right);
            }
            q.shift();
        }
    }

    preOrder(callback, root = this.root) {
        // root, left right
        if (!callback) {
            throw new Error("A callback function must be provided.");
        }
        if (root === null) {
            return;
        }
        callback(root);
        this.preOrder(callback, root.left);
        this.preOrder(callback, root.right);
    }

    inOrder(callback, root = this.root) {
        // left, root, right
        if (!callback) {
        throw new Error("A callback function must be provided.");
        } 
        if (root === null) {
            return;
        }
        this.inOrder(callback, root.left);
        callback(root);
        this.inOrder(callback, root.right);
    }
    

    postOrder(callback, root = this.root) {
        // left, right, root
        if (!callback) {
            throw new Error("A callback function must be provided.");
        }
        if (root === null) {
            return;
        }
        this.postOrder(callback, root.left);
        this.postOrder(callback, root.right);
        callback(root);
    }

    height(node) {
        if (node === null) {
            return -1;
        }
        let heightLeft = this.height(node.left);
        let heightRight = this.height(node.right);
        if (heightLeft > heightRight) {
            return heightLeft + 1;
        } else {
            return heightRight + 1;
        }
    }

    depth(node, root = this.root) {
        if (node === null) {
            return null;
        }
        if (root === null) {
            return null;
        } else if (node === root) {
            return 0;
        } else if (node.value < root.value) {
            return this.depth(node, root.left) + 1;
        } else if (node.value > root.value) {
            return this.depth(node, root.right) + 1;
        }
    }

    isBalanced(root = this.root) {
        if (root === null) {
            return true;
        }
        let leftBalanced = this.isBalanced(root.left);
        let rightBalanced = this.isBalanced(root.left);
        let heightLeft = this.height(root.left);
        let heightRight = this.height(root.right);
        let diff = Math.abs(heightLeft - heightRight);
        if (diff < 2 && leftBalanced && rightBalanced) {
            return true;
        } else {
            return false;
        }        
    }

    rebalance() {
        let arr = [];
        this.inOrder(node => arr.push(node.value));
        this.root = this.buildTree(arr)
    }

}

