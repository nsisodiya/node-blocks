# node-blocks
Flow Based Programming with JavaScript

# Install

```
npm install node-blocks
```

# Documentation
coming soon

# Creating a Node
In this project Node function constructor is a variable container. You can store any variable on node

![alt pic](https://raw.githubusercontent.com/nsisodiya/node-blocks/master/images/node-dia.png)

```js
import { Node } from 'node-blocks';

var a1 = new Node();

a1.listen(function () {
	console.log("Value of a1 got Changed", "new value", a1.read());
});

a1.write('34');
a1.write('50');
```

![alt pic](https://raw.githubusercontent.com/nsisodiya/node-blocks/master/images/node-out.png)

# Transform a Node into Another

![alt pic](https://raw.githubusercontent.com/nsisodiya/node-blocks/master/images/transform-dia.png)

```js
import { Node } from 'node-blocks';

var a1 = new Node();
a1.listen(function () {
	console.log("a1 changed", a1.read());
});

var b1 = a1.transform(function (v) {
	return 2 * v;
});
b1.listen(function () {
	console.log("b1 changed", b1.read());
});

a1.write(10);
a1.write(50);
```
![alt pic](https://raw.githubusercontent.com/nsisodiya/node-blocks/master/images/transform-out.png)

# Connect a Node to another

![alt pic](https://raw.githubusercontent.com/nsisodiya/node-blocks/master/images/connect-dia.png)
```js
import { Node } from 'node-blocks';

var a1 = new Node();
a1.listen(function () {
	console.log("a1 changed", a1.read());
});

var b1 = new Node();
b1.listen(function () {
	console.log("b1 changed", b1.read());
});

a1.connect(b1);

a1.write(10);
a1.write(50);
```
![alt pic](https://raw.githubusercontent.com/nsisodiya/node-blocks/master/images/connect-out.png)

# Create Blocks

Block has kind of machine. Block has multiple inout and multiple out Nodes. You can connect Multiple block to 
 generate Bigger Blocks.
 
# Adder

![alt pic](https://raw.githubusercontent.com/nsisodiya/node-blocks/master/images/adder-dia.png)
```js
import { Block } from 'node-blocks';

var adder = new Block({
	in: ["x", "y"],
	out: ["sum"]
}, function (inp, out) {
	var sum = inp.x.read() + inp.y.read();
	out.sum.write(sum);
});

adder.out.sum.listen(function () {
	console.log("Total Sum is ", adder.out.sum.read());
});

adder.in.x.write(10);
adder.in.y.write(20);
adder.in.x.write(30);
adder.in.y.write(50);
```
![alt pic](https://raw.githubusercontent.com/nsisodiya/node-blocks/master/images/adder-out.png)

# Alternate Syntax
```js
class AdderBlock extends Block {
  constructor() {
    super();
  }

  getConfig() {
    return {
      in: ["x", "y"],
      out: ["sum"]
    }
  }

  run(inp, out) {
    var sum = inp.x.read() + inp.y.read();
    out.sum.write(sum);
  }
}
```
# Adder + Doubler

![alt pic](https://raw.githubusercontent.com/nsisodiya/node-blocks/master/images/adder-doubler-dia.png)

```js
import { Block } from 'node-blocks';

var doubler = new Block({
	in: ["x"],
	out: ["d"]
}, function (inp, out) {
	out.d.write(inp.x.read() * 2);
});


var adder = new Block({
	in: ["x", "y"],
	out: ["sum"]
}, function (inp, out) {
	var sum = inp.x.read() + inp.y.read();
	out.sum.write(sum);
});

adder.out.sum.connect(doubler.in.x);

doubler.out.d.listen(function () {
	console.log("Double of Sum is ", doubler.out.d.read());
});

```
![alt pic](https://raw.githubusercontent.com/nsisodiya/node-blocks/master/images/adder-doubler-out.png)