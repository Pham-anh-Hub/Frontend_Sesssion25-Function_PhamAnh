let users = [];

function addUsers(email) {
    if(users.length <= 0){
        if(email.includes('@') && (email.includes('.com') || email.includes('.vn'))){
            users.push(email);
            alert(`Đăng ký thành công`);
        }else {
            return `Email không hợp lệ`;
        }
    }else{ 
        if(!users.includes(email)){
            if(email.includes('@') && (email.includes('.com') || email.includes('.vn'))){
                users.push(email);
                alert(`Đăng ký thành công`)
            }else {
                return `Email không hợp lệ`;
            } 
        }else{
            return "Email đã tồn tại";
        }
    }
    return users;
}

do {
    let choice = +prompt(`1. Thêm người dùng\n2. Xóa dữ liệu người dùng\n3. Thoát`);
    switch (choice) {
        case 1:
            const addUsersEmail = addUsers(prompt("Mời nhập email người dùng"));
            console.log(addUsersEmail);
            break;
        case 3:
            break;
        case 2:
            users.length = 0;
            break
        default:
            break;
    }
    if(choice === 3){
        break;
    }
} while (1);
