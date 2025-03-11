let stored = [ ["bún bò", 10, 5000], ["phở bò", 12, 15000], ["bánh bao", 5, 8000], ["bánh mì Sài Gòn", 30, 20000]]
let carts = [];
function purchase(product) {
    let index;
    let exited = 0;
    for(let i=0; i<stored.length; i++){
        if(stored[i][0] === product){
            exited = 1;
            index = i;
            break;
        }
    }
    if(exited === 1 && stored[index][1] > 0){
        if(carts.length <= 0){
            carts.push[product, 1, stored[index][2]]
            stored[index][1]--;
        }else{
            let exitInCarts = 0;
            for (let i = 0; i < carts.length; i++) {
                if(product === carts[i][0]){
                    // Sản phẩm đã tồn tại trong carts
                    carts[i][1]++;
                    stored[index][1]--;
                    exitInCarts = 1;
                    break;
                }
            }
            if(exitInCarts !== 1){
                // Sản phẩm mới, chưa có trong carts
                carts.push[stored[index]]
                stored[index][1]--;
            }
        }
    return carts;
    }else{
        return "Sản phẩm đã hết hàng";
    }
}


const buying = purchase(prompt(`Nhập sản phẩm cần mua`))
console.log(buying);
