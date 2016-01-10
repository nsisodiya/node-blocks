import { Block } from 'node-blocks';

var m1 = new Block({
	in: ["x", "y"],
	out: ["sum"]
}, function (inp, out) {
	var sum = inp.x.read() + inp.y.read();
	out.sum.write(sum);
});

m1.out.sum.listen(function () {
	console.log("Total Sum is ", m1.out.sum.read());
});

m1.in.x.write(10);
m1.in.y.write(20);
m1.in.x.write(30);
m1.in.y.write(50);