function sum2Number(a,b){
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return "Dữ liệu không hợp lệ"
    }else{
        let total = a + b;
        return `Tổng 2 số ${a} và ${b} là: ${total}`
    }
    
}

const sumAmount1 = sum2Number(2,6);
console.log(sumAmount1);

const sumAmount2 = sum2Number(3,"text");
console.log(sumAmount2);

const sumAmount3 = sum2Number(3.5,2);
console.log(sumAmount3);


