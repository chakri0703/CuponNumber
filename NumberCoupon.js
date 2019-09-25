var Coupon = require('./Coupon')
var NumberCoupon = function (number) {
    this.number = number;
    this.couponList = [];
}

NumberCoupon.prototype = Object.create(Coupon.prototype);

NumberCoupon.prototype.generate = function () {
    for (let i = 0; i < this.number; i++) {
        var token = Math.floor(Math.random() * 100);
        this.couponList.includes(token)?i--
        :this.couponList.push(token)
    
    }
  return this.couponList;
}

module.exports= NumberCoupon
