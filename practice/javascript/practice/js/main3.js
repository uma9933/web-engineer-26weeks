// 変数とデータ型
let hello = "こんにちは";
let greeting = hello;

console.log(greeting);

let person = {
  name:{first:"太郎",last:"独習"},
  age : "18"
};

console.log(person["age"]);

let fun = {
  hello: function() {console.log("Hello!")}
};

fun.hello();
let obj = {
  prop : true,
  subObj : {val:100},
  greeting : function(){console.log("こんにちは。")}
};

console.log(obj.prop);
console.log(obj.subObj.val);
obj.greeting();

obj.subObj.val2 = 1000;
console.log(obj);

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("null"));
console.log(Boolean("undefind"));

// 理解度チェック
// [1] ①アドレス　②let ③const ④var

// [2]
const TAX_RATE = 1.1;
let productPrice = 1000;

console.log(`商品の値は${productPrice}円ですので、税込金額は${TAX_RATE*productPrice}です。`);

