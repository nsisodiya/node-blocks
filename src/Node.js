/**
 * Created by narendrasisodiya on 09/01/16.
 */

//Base Node Class Define very simple Basic Node
//  You can read/write on a Node
//  You can listen changes on a Node
//  Node act as variable container

import EventBus from './EventBus';

let changeEvtName = 'onChange';

export default class Node {
	constructor(value) {
		this._value = value;
		this._ebus = new EventBus();
	}

	listen(callback) {
		return this._ebus.subscribe(changeEvtName, callback);
	}

	write(value) {
		this._value = value;
		this._ebus.publish(changeEvtName)
	}

	read(value) {
		return this._value;
	}

	transform(callback) {
		var a = new Node();
		this.listen(() => {
			a.write(callback(this.read()));
		});
		return a;
	}
}