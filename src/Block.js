/**
 * Created by narendrasisodiya on 10/01/16.
 */

import Node from './Node';

export default class Block {
	constructor(config, processor) {
		this.config = config;
		this.processor = processor;

		this.in = {};
		config.in.map((v) => {
			this.in[v] = new Node();
			this.in[v].listen(()=> {
				this.run();
			});//Run the Block whenever Inout Changes
		});

		this.out = {};
		config.out.map((v) => {
			this.out[v] = new Node();
		});
	}

	run() {
		this.processor(this.in, this.out);
	}
}