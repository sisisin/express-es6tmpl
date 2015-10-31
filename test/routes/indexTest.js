/* eslint no-unused-expressions:0 */
import { expect } from 'chai';
import sinon from 'sinon';

import { getIndex } from '../../src/routes/index';

describe('routes GET index', () => {
	it('should respond', () => {
		let req, res, spy;

		req = {};
		res = {};
		spy = res.render = sinon.spy();

		getIndex(req, res);
		expect(spy.calledOnce).to.equal(true);
		expect(spy.calledWith('index', { title: 'Express' })).to.be.ok;
	});
});
