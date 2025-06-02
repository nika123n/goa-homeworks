//შექმენით საიტი, სადაც გექნებათ ფოტო, სათაური და 6 ღილაკი (სხვადასხვა ფუნქციებით),
//4 ღილაკით უნდა შეგეძლოთ ფოტოს width, height, border radius, box-shadow, 
//დანარჩენი 2 ღილაკით უნდა შეგეძლოთ სათაურის ფერის და ზომის შევლა.

let img = document.getElementById('img')

function width(){
    img.style.width = "100px"
}
function height(){
    img.style.height = "100px"
}
function border(){
    img.style.borderRadius = "10px"
}
function box_shadow(){
    img.style.boxShadow = "3px 2px 4px"
}