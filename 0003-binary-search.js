/* 
*   Binary Search for array
*/

document.title = 'Binary Search';

const binarySearch = (arr, searchItem) => {
    let start = 0;
    let end = arr.length;
    let result = -1;
    
    for (start; start <= end;) {
        
        if (result > 0) break;
        let middle = Math.floor((start + end) / 2);

        console.log('start',start);
        console.log('middle',middle);
        console.log('end',end);
        console.log('---------XXXX--------')

        if (arr[middle] == searchItem) {
            result = middle;
        }
        if (arr[middle] < searchItem) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
        start++;
    }
    return result;
}

const arr = [3, 13, 28, 39, 57, 88, 92];
const searchItem = 88;

console.log(binarySearch(arr, searchItem));