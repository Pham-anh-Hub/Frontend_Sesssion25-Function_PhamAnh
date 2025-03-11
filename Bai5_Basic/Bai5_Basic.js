function isPositiveInteger(arr = []) {
    if(!Array.isArray(arr)){
        return ``
    }else{
        let count = 0;
        let positiveNumber = [];
        for (let i = 0; i < arr.length; i++) {
            if(Number.isInteger(arr[i]) && arr[i] > 0){
                positiveNumber.push(arr[i]);
                count++;
            }
        }
        if(count > 0){
            return "Các số nguyên dương trong mảng: " + positiveNumber;
        }else{
            return `Mảng không có số nguyên dương`;
        }
    }
}

const findPositiveNum = isPositiveInteger(arr = [1.2 -4, -7]);
console.log(findPositiveNum);
