// შევქმნათ ფუნქცია რომელსაც გადაეცემა დიდი ტექსტი ან წინადადება (სტრინგი) და უნდა დააბრუნოს ყველაზე დიდი და ყველაზე პატარა ნაპოვნი სიტყვა (მასივის ფორმატში) ( [ ყველაზე პატარა, ყველაზე დიდი ] )

function findSmallestAndLargestWord(sentence) {
    const words = sentence.split(/\s+/).map(word => word.replace(/[^\w]/g, ''));
    if (words.length === 0) return [];
    let smallest = words[0];
    let largest = words[0];
    
    words.forEach(word => {
        if (word.length < smallest.length) {
            smallest = word;
        }
        if (word.length > largest.length) {
            largest = word;
        }
    });
    
    return [smallest, largest];
}
const sentence = "This is an example of a sentence, where we find the smallest and largest word!";
const result = findSmallestAndLargestWord(sentence);
console.log(result);