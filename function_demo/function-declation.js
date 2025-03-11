// function Declation

// 1. Đặt tên hàm bằng tiếng Anh
// 2. bắt đầu = 1 động từ
// 3. truyền vào tham số cụ thể
// 4. comment hàm dầy đủ


//Khai báo 1 hàm tính tổng có hai tham số a, b
//comment code
/**
 * Hàm tính tổng 2 số nguyên
 * @param {*} firstNumber Số nguyên thứ nhất
 * @param {*} secondNumber Số nguyên thứ hai
 * @returns Tổng hai số nguyên
 * Auth: 
 * Update at:....
 */



//Khai báo hàm 
function sum (firstNumber, secondNumber){
    let total = firstNumber + secondNumber;
    return total;
    console.log(`Sum = ${total}`); // return -> dừng thực thi và trả về giá trị --> câu lệnh console.log không được thực thi
}
//Gọi hàm 

//Khai báo lại hàm
function sum(firstNumber){
    return firstNumber; // Hàm mới sẽ ghi đè các hàm khai báo cũ, được ưu tiên thực thi
}


//Gọi hàm 
const result = sum(7,8);
console.log("Result: ", result);

let resultDiv = div(10);
console.log("Result Div: ", resultDiv);


