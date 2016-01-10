/**
 * Created by narendrasisodiya on 10/01/16.
 */

import Node from './Node';

export default class Block {
	constructor(config, processor) {
		this.config = config;
		this.processor = processor;
		this.setup();
	}

	setup() {
		this.in = {};
		this.getConfig().in.map((v) => {
			this.in[v] = new Node();
			this.in[v].listen(()=> {
				this.run(this.in, this.out);
			});//Run the Block whenever Inout Changes
		});

		this.out = {};
		this.getConfig().out.map((v) => {
			this.out[v] = new Node();
		});
	}

	getConfig() {
		return this.config;
	}

	run(inp, out) {
		this.processor(inp, out);
	}
}