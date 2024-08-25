# Binary Search Tree

A binary search tree (BST) built as a javascript class. Each instance of the class generates a balanced BST from an array of integers. First the array is sorted and duplicates are removed, then the tree is created. Several methods are available to the class, enabling functionality such as adding and removing new values, finding a node of a given value, various breadth-first and depth-first traversal methods, and rebalancing.

See the driver script provided in main.js for detailed usage examples.

## Usage

See the driver script provided in main.js for detailed usage examples.

### 1. Import and create a tree instance
```
import { Tree } from "./Tree.js";

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

const tree = new Tree(arr);

prettyPrint(tree.root);
```
Outputs:
```
│           ┌── 6345
│       ┌── 324
│   ┌── 67
│   │   │   ┌── 23
│   │   └── 9
└── 8
    │       ┌── 7
    │   ┌── 5
    └── 4
        │   ┌── 3
        └── 1
```
### 2. Add values to the tree
```
tree.insert(40);
tree.insert(43);
tree.insert(41);
tree.insert(40);
prettyPrint(tree.root);
console.log("Is tree balanced? " + tree.isBalanced());
```

Outputs:
```
│           ┌── 6345
│       ┌── 324
│   ┌── 67
│   │   │           ┌── 43
│   │   │           │   └── 41
│   │   │       ┌── 40
│   │   │   ┌── 23
│   │   └── 9
└── 8
    │       ┌── 7
    │   ┌── 5
    └── 4
        │   ┌── 3
        └── 1
Is tree balanced? false
```
### 3. Rebalance the tree
```
tree.rebalance();
prettyPrint(tree.root);
console.log("Is tree balanced? " + tree.isBalanced());
```
Outputs:
```
│           ┌── 6345
│       ┌── 324
│       │   └── 67
│   ┌── 43
│   │   │   ┌── 41
│   │   └── 40
│   │       └── 23
└── 9
    │       ┌── 8
    │   ┌── 7
    │   │   └── 5
    └── 4
        │   ┌── 3
        └── 1
Is tree balanced? true
```

### 4. Visit tree elements in level, pre, post and in order.
```
console.log("Level order:")
tree.levelOrder((node) => process.stdout.write(node.value + " "));
console.log("\nPreorder:");
tree.preOrder((node) => process.stdout.write(node.value + " "));
console.log("\nPostorder:");
tree.postOrder((node) => process.stdout.write(node.value + " "));
console.log("\nInorder:");
tree.inOrder((node) => process.stdout.write(node.value + " "));
```
Outputs:
```
Level order:
9 4 43 1 7 40 324 3 5 8 23 41 67 6345
Preorder:
9 4 1 3 7 5 8 43 40 23 41 324 67 6345
Postorder:
3 1 5 8 7 4 23 41 40 67 6345 324 43 9
Inorder:
1 3 4 5 7 8 9 23 40 41 43 67 324 6345
```
