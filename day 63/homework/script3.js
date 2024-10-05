//Create a function calculate_area to find the area of a rectangle. It should take two parameters: length and width. If the width is not provided, use a default value of 1.

function calculate_area(length, width = 1) {
    const area = length * width;
    return area;
}
console.log(calculate_area(5, 10));
console.log(calculate_area(5));