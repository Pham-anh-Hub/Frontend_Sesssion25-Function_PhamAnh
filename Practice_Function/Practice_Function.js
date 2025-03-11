const cards = [];


/**
 * Lấy giá từ người dùng
 * @param {*} price Giá lấy từ người dùng
 * @returns giỏ hàng sau khi thêm
 */
const addPrice = (price) => {
    cards.push(price);  // Thêm giá vào cuối mảng
    return cards;   // Trả về giỏ hàng sau khi thêm
};


/**
 * Hàm cập nhật giá trong giỏ hàng
 * @param {*} index Vị trí cần cập nhật giá
 * @param {*} newPrice Giá cập nhật
 * @returns Giỏ hàng sau update
 */
const updatePrice = (array, index, newPrice) => {
    array[index] = newPrice; // Cập nhật lại gía trị cho phần tử ở vị trí index
    return array; // trả về giỏ hàng sau khi cập nhật
};



const removePrice = (array, index) => {
    if (index < 0 || index > array.length) {
        return"Vị trí không hợp lệ";
    }
        array.splice(index, 1);
        return array;
};

const formatMoney = (price) => {
    return price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}


const totalAmount = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
};


const resultAdd1 = addPrice(cards, 120000);
const resultAdd2 = addPrice(cards, 150000);
const resultAdd3 = addPrice(cards, 200000);
const resultAdd4 = addPrice(cards, 30000);
console.log("resultAdd4 = ", resultAdd4);

const updatePrice1 = updatePrice(cards, 1, 15000);
console.log("updatePrice = ", updatePrice1);

const removePrice1 = removePrice(cards, 5);
console.log(removePrice1);


const totalResult = totalAmount();
console.log("Total = ", totalResult);

