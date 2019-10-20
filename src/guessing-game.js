class GuessingGame {
    constructor() {
      this.min = 0;
      this.max = 0;
      this.curMin = 0;
      this.curMax = 0;
      this.curMid = 0;
    }

    setRange(min, max) {
      this.min = min;
      this.max = max;
      this.curMin = this.min;
      this.curMax = this.max;
    }

    guess() {
      return this.recalculateMid();
    }

    lower() {
      if(this.curMax > this.curMin) {
        this.curMax = this.curMid;
      }
    }

    greater() {
      if(this.curMin < this.curMax) {
        this.curMin = this.curMid;
      }
    }

    recalculateMid() {
      this.curMid = this.curMin + Math.ceil((this.curMax - this.curMin) / 2);
      return this.curMid;
    }
}

module.exports = GuessingGame;
