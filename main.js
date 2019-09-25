var NumberCoupon=require('./NumberCoupon');
var StringCoupon=require('./StringCoupon');

var stringCoupon=new StringCoupon(4,5);
console.log("String Coupons==>"+stringCoupon.generate());
 

var numberCoupon=new NumberCoupon(4);
console.log("Number Coupons==>"+numberCoupon.generate());
