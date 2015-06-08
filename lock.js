function Lock() {
    this.lockedState = false;
}

Lock.prototype.lock = function() {
    this.lockedState = true;
};

Lock.prototype.unLock = function() {
    this.lockedState = false;
};

Lock.prototype.isLocked = function() {
    return this.lockedState === true;
};

module.exports = Lock;
