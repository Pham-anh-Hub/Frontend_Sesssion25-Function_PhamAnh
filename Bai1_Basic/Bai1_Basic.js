
function findMin(arr) {
    if(!Array.isArray(arr)){
        return "Mảng không hợp lệ"
    }else{
        let temp = 0;
        for (let i = 0; i < arr.length; i++) {
            if(Number.isNaN(arr[i])){
                temp = 0;
            }else{
                temp = 1;
            }
        }
        if(temp === 0){
            return "Giá trị không hợp lệ"
        }else{
            let min = Infinity;
            for(let i=0; i<arr.length; i++){
                if(min > arr[i]){
                    min = arr[i];
                }
            }
            return "Phần tử nhỏ nhất trong mảng là: " + min; 
        }
    }
}
const minOfArray = findMin([]);
console.log(minOfArray);
