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