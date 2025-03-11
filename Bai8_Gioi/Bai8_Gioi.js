let smallLetter;
let upperLetter;
let includeNumber;
function  isStrongPassword(password) {
    if(password.length >= 8){
        for (let i = 0; i < password.length; i++) {
            if(password[i] >= 'a' && password[i]<= 'z'){
                smallLetter = 1;
            }else if(password[i] >= 'A' && password[i]<= 'Z'){
                upperLetter = 1;
            }else if(password[i] >= 1 && password[i]<=9){
                includeNumber = 1;
            }
        }
        if(smallLetter === 1 && upperLetter === 1 && includeNumber === 1){
            return `True`;
        }else{
            return `False`;
        }
    }else{
        return `False`;
    }
}

const checkPassword = isStrongPassword(prompt(`Mời nhập mật khẩu`));
console.log(checkPassword);
