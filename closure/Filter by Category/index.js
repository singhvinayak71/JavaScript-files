const product = [
    { name: "Shirt", category: "Clothing" },
    { name: "Paints", category: "Clothing" },
    { name: "Hats", category: "Accessories" },
    { name: "Sunglasses", category: "Accessories" },
];

function filterdByCategory() {
    if (filterValue == "Clothing") {
        return product.filter((elem) => {
            return elem.category == filterValue;
        })
    }
    if (filterValue == "Accessories") {
        return product.filter((elem) => {
            return elem.category == filterValue
        })
    }

}
// const filterValue = "Clothing";
const filterValue = "Accessories";
const clothingProducts = filterdByCategory(product);
console.log(clothingProducts)

