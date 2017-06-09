'use strict';

import mobx, {
	observable,
	action,
	asMap,
	computed,
	extendObservable
} from 'mobx';

//全局store
let State = observable({
	name: 'dd',
});

//action
State.setName = action(function(params) {
    this.name = params;
});

module.exports = State;
