import { Tree } from "./Tree.js";
import { prettyPrint } from "./print-tree.js";

function generateRandomArray(numEntries, maxValue) {
    let arr = [];
    for (let i = 0; i < numEntries; i++) {
        arr.push(Math.floor(Math.random() * maxValue));
    }
    return arr;
}

const arr = generateRandomArray(12, 100);

const tree = new Tree(arr);

prettyPrint(tree.root);
console.log("Is tree balanced? " + tree.isBalanced());

console.log("Level order:")
tree.levelOrder((node) => process.stdout.write(node.value + " "));
console.log("\nPreorder:");
tree.preOrder((node) => process.stdout.write(node.value + " "));
console.log("\nPostorder:");
tree.postOrder((node) => process.stdout.write(node.value + " "));
console.log("\nInorder:");
tree.inOrder((node) => process.stdout.write(node.value + " "));
console.log("");

tree.insert(105);
tree.insert(153);
tree.insert(135);
tree.insert(102);
tree.insert(102); 

prettyPrint(tree.root);
console.log("Is tree balanced? " + tree.isBalanced());

tree.rebalance();
prettyPrint(tree.root);
console.log("Is tree balanced? " + tree.isBalanced());

console.log("Level order:")
tree.levelOrder((node) => process.stdout.write(node.value + " "));
console.log("\nPreorder:");
tree.preOrder((node) => process.stdout.write(node.value + " "));
console.log("\nPostorder:");
tree.postOrder((node) => process.stdout.write(node.value + " "));
console.log("\nInorder:");
tree.inOrder((node) => process.stdout.write(node.value + " "));
console.log("");