//node class
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//nodes with values
const a = new Node('a');
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

//binary tree
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

//Depth-First algorith iteratively
const depthFirstAlgo = (root) =>{
    //gaurd from an empty tree
    if(root === null) return [];

    const stack = [root] // let root sit on top of the stack at the beggining
    const results = [] // storing values;
    while(stack.length > 0){//while stack have items in it
        //pop from the top of the stack select the node to go through
        const current = stack.pop();

        //operations here(store/display/calculate ect)
        results.push(current.value);

        //check if the children exist
        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left);
    }
    return results;
}
console.log(depthFirstAlgo(a));

//recursive solution DFA
const recDepthFirstAlgo = (root) =>{
    if(root === null) return [];

    const leftValues = recDepthFirstAlgo(root.left);
    const rightValues = recDepthFirstAlgo(root.right);

    return [root.value, ...leftValues, ...rightValues];
}

//Breadth first algo

