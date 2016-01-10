# node-blocks
Flow Based Programming with JavaScript

# Install

```
npm install node-blocks
```

# Node
In this project Node function constructor is a variable container. You can store any variable on node

```js
import { Node } from 'node-blocks';

var a1 = new Node();

a1.listen(function () {
	console.log("Value of a1 got Changed", "new value", a1.read());
});

a1.write('34');
a1.write('35');

```

![alt pic](https://raw.githubusercontent.com/nsisodiya/node-blocks/master/images/node.png)

 
# Transformer Function

![alt pic](https://raw.githubusercontent.com/nsisodiya/node-blocks/master/images/transform.png)

# Connect Function

![alt pic](https://raw.githubusercontent.com/nsisodiya/node-blocks/master/images/connect.png)

# Block

Block has kind of machine. Block has multiple inout and multiple out Nodes. You can connect Multiple block to 
 generate Bigger Blocks.
 
 Example 
![alt pic](https://raw.githubusercontent.com/nsisodiya/node-blocks/master/images/adder.png)