let calculator = {
  total: 0,
  add: function(num) {
    this.total += num;
    return this.total;
  },
  subtract: function(num) {
    this.total -= num;
    return this.total;
  },
  clear: function() {
    this.total = 0;
    return this.total;
  },
};