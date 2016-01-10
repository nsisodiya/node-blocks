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

adder.in.x.write(10);
adder.in.y.write(20);
adder.in.x.write(30);
adder.in.y.write(50);