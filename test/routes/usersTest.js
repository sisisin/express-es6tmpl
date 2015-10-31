/* eslint no-unused-expressions:0 */
import { expect } from 'chai';
import sinon from 'sinon';

import { getUsers } from '../../src/routes/users';

describe('routes GET index', () => {
	it('should respond', () => {
		let req, res, spy;

		req = {};
		res = {};
		spy = res.send = sinon.spy();

		getUsers(req, res);
		expect(spy.calledOnce).to.equal(true);
		expect(spy.calledWith('respond with a resource')).to.be.ok;
	});
});
