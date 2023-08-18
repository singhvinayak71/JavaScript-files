const product = [
    { name: "Shirt", category: "Clothing" },
    { name: "Paints", category: "Clothing" },
    { name: "Hats", category: "Accessories" },
    { name: "Sunglasses", category: "Accessories" },
    { name: "Watch", category: "Accessories" },
    { name: "Blazers", category: "Clothing" },
    { name: "Airpods", category: "Accessories" },
    { name: "Bluetooth", category: "Accessories" },
    { name: "T-Shirt", category: "Clothing" },
];

function filterdByCategory(p) {
    const arr = Array.from(p);
    if (filterValue == "Clothing") {
        return arr.filter((elem) => {
            return elem.category == filterValue
        })
    }
    if (filterValue = "Accessories") {
        return arr.filter((elem) => {
            return elem.category == filterValue
        })
    }

}

const filterValue = "Clothing"
// const filterValue = "Accessories"
const clothing = filterdByCategory(product);
console.log(clothing)

