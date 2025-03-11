// const sum = (firstNumber, secondNumber) => {
//     return firstNumber + secondNumber;
// };

const sum = (firstNumber, secondNumber) => firstNumber + secondNumber;

// [1,2,3].find(e)

console.log("Sum: ", sum(10, 15));

// Hàm vô danh, chỉ hoạt động trong phạm vị 1 hàm

(function sayHi(){
    console.log(`Hello World`);
})();
// Được thực hiện ngay khi file được load lên
