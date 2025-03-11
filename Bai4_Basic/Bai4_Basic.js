function checkPrime(number) {
    if(Number.isNaN(number)){
        return `Dữ liệu không hợp lệ`;
    }else{
        let count=0;
        for(let i=2; i<=number; i++){
            if(number % i === 0){
                count++;
            }
        }
        if(count === 1){
            return `Số ${number} là số nguyên tố`;
        }else{
            return `Số ${number} không phải số nguyên tố`;
        }
    }
}

const  checkPrimeNumber = checkPrime(4);
console.log(checkPrimeNumber);
