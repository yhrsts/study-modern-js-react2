import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>モダンJavaScriptとReactの勉強をします</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// const sakeName1 = "十四代";
// const sakeName2 = "而今";

// const text = `有名な日本酒には${sakeName1}や${sakeName2}があります`;
// const textFunc = (text1 = "デフォルト値だよ") => {
//   console.log(text1);
// }

// textFunc();

const arr1 = ["十四代", "而今", "飛露喜", "射美", "勝駒"];
// console.log(...arr1);

// const arr2 = [111, 222, 333];

// const sumFunc = (num1, num2) => {
//   let sumNum = num1 + num2;
//   console.log(sumNum);
// }

// sumFunc(...arr2);

// const [sakeName1, sakeName2, ...arr3] = arr1;
// console.log(sakeName1);
// console.log(sakeName2);
// console.log(arr3[0]);

// const arr3 = [...arr1];
// console.log(arr3);

// const arr4 = ["ソガペール", "新政", "信州亀齢", "花陽浴", "鼎"];
// const arr5 = [...arr1, ...arr4];
// console.log(arr5);

// const value = undefined;

// console.log(value ? "値はあるよ" : "値はないよ");

// for(let i=0; i<arr1.length; i++) {
//   console.log(arr1[i]);
// }

// const sakeList = () => {
//   arr1.map((name) => {
//     return console.log(name);
//   });
// };

// const arr5 = [1, 2, 3, 4, 5];
// const consoleLogger = (value) => {
//   console.log(value);
// };

// arr5.filter(function (num) {
//   return num % 2 === 0 && consoleLogger(num);
// });

const sakeDetails = {
  name: "而今",
  size: "四合瓶",
  type: "にごり生",
  date: "2022/11",
};

console.log(typeof sakeDetails.name);

console.log(hoge);
console.log(fuga);
