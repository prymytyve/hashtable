import { Node, LinkedList } from "./linked_list.mjs";

const node1 = new Node("a");
const node2 = new Node("b");
const node3 = new Node("c");
const node4 = new Node("d");
const node5 = new Node("e");
const node6 = new Node("f");

const list = new LinkedList();

list.append(node1);
list.append(node2);
list.prepend(node3);
list.append(node4);
list.insertAt(node5, 4);
list.append(node6);
list.removeAt(7);

console.log(list.toString());
