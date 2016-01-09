//import {Node} from './../src/entry';

import { Node } from 'node-blocks';

var a1 = new Node();

a1.listen(function () {
	console.log("Value of a1 got Changed", "new value", a1.read());
});

a1.write('34');
a1.write('50');
