function isPalindrome(string) {
    let n = string.length;
    let temp = 0;
    for (let i = 0; i < (n / 2); i++) {
        if(string[i] === string[n-1]){
            temp = 1; 
            n--;
        }else{
            temp = 0;
        } 
    }
    if(temp === 1){
        return `Chuỗi đối xứng`
    }else{
        return `Chuỗi không đối xứng`
    }
}
const checkPalindrome = isPalindrome(prompt(`Mời nhập chuỗi`));
console.log(checkPalindrome);
