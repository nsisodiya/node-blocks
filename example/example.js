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