/* 
* Linear Search Imporved
*/
document.title = 'Improved Linear Search';

const linearSearch = (arr, searchItem) => {
    let left = 0;
    let right = arr.length;
    let result = -1;
    let position = 0;

    for (position; position < right;) {
        if (arr[left] == searchItem) {
            result = left;
        }
        if (arr[right] == searchItem) {
            result = right;
        }
        position++;
        left++;
        right--;
    }
    return result;
}

const arr = [2, 45, 28, 12, 7, 98, 39, 88, 64];
const searchItem = 88;
console.log(linearSearch(arr, searchItem));
