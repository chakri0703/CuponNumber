var Coupon = function () {
    if (this.constructor == Coupon)
        throw new Error("can't create object of abstract class");
}

Coupon.prototype.generate = function () {
    throw new Error("Overide the abstract method")
}

module.exports=Coupon;
