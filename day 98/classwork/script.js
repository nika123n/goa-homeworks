//

function Movie(name, genre, year, imdb, review) {
  this.name = name
  this.genre = genre
  this.year = year
  this.imdb = imdb
  this.review = review

  this.getSummary = function () {
    return `${this.name} (${this.year}) — ჟანრი: ${this.genre}. IMDb რეიტინგი: ${this.imdb}/10. შეფასება: "${this.review}"`
  };
}

const movie1 = new Movie("Inception", "სამეცნიერო ფანტასტიკა", 2010, 8.8, "ფენომენალური სცენარი და ვიზუალი!")
const movie2 = new Movie("The Godfather", "დრამა / კრიმინალი", 1972, 9.2, "შედევრი, რომელიც ყველას უნდა ნახოს.")
const movie3 = new Movie("Parasite", "დრამა / თრილერი", 2019, 8.6, "გენიალურად გადმოცემული სოციალური უთანასწორობა.")

console.log(movie1.getSummary())
console.log(movie2.getSummary())
console.log(movie3.getSummary())