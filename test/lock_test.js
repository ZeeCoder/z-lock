var lock = require('../lock');
var assert = require('assert');

describe('lock.js', function () {
    describe('#lock and #isLocked', function () {
        it('should lock properly, and return true as the locked status', function() {
            var a_lock = new lock();
            a_lock.lock();
            assert.equal(true, a_lock.isLocked());
        });

        it('should unlock properly, and return false as the locked status', function() {
            var a_lock = new lock();
            a_lock.lock();
            a_lock.unLock();
            assert.equal(false, a_lock.isLocked());
        });
    });
});
