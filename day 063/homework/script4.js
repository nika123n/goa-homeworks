//Create a function add_to_shopping_list that accepts an item and a quantity. The quantity should default to 1 if not provided.

function add_to_shopping_list(item, quantity = 1) {
    const entry = `${quantity} x ${item}`;
    return entry;
}

console.log(add_to_shopping_list("Apples", 3));
console.log(add_to_shopping_list("Bananas"));