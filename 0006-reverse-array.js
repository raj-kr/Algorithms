/* 
*   Some methods of reversing array.
*/

document.title = 'Reverse Array';

function reverseArray(a) {
    let aux = 0;
    let n = a.length;
    for (let i = 0; i < n/2; i++) {
        aux = a[n-i-1];
        a[n-i-1] = a[i];
        a[i] = aux;
    }
    return a;
}