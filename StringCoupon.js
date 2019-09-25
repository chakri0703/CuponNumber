var Coupon = require('./Coupon');

var StringCoupon = function (number,couponLength) {
    this.number = number;
    this.couponLength=couponLength;
}

StringCoupon.prototype = Object.create(Coupon.prototype);

StringCoupon.prototype.generate = function () {
    var coupons=[];
    for(let i=0;i<this.number;i++)
    {
        var coupon=this.randomString(this.couponLength);
        coupons.includes(coupon)?i--
        :coupons.push(coupon)
    }

    return coupons;
    
}
StringCoupon.prototype.randomString = function (length) {
    var coupon='';
    for(let i=0;i<length;i++){
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        coupon+=characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return coupon
}

module.exports=StringCoupon;
