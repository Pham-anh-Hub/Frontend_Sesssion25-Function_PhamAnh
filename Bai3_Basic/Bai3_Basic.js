
function checkEven(arr = []){
    if(!Array.isArray(arr)){
        return "Mảng không hợp lệ";
    }else{
        let evenArr = [];
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] % 2 === 0){
                count++;
                evenArr.push(arr[i]);
            }
        }
        if(count !== 0){
            return `Các số chẵn trong mảng ${evenArr}`;
        }else{
        return `Mảng không có số chẵn nào`;
        }
    }
}

const findEven = checkEven(arr = [1,2,3,4,5,6,7,8,10]);
console.log(findEven);
