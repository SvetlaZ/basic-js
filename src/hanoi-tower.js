module.exports = function calculateHanoi(diskNumber, turnSpeed) {
    return {
        turns: 2**diskNumber - 1,
        seconds: (2**diskNumber - 1) / (turnSpeed / 3600)
    }
}
