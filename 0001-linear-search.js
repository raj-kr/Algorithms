/* 
* https://www.geeksforgeeks.org/linear-search/
*/

let arr = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170];
let searchElement = 73;

let result = linearSearch(arr, searchElement);
if (result > 0) {
    console.log(`Element ${searchElement} is present at index ${result}`);
} else {
    console.log(`Element ${searchElement} is not present in array ${arr}`);
}

function linearSearch(arr, searchElement) {
    let result = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchElement) {
            result = i;
        }
    }
    return result;
}