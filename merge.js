function mergearray(arr){

    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = mergearray(arr.slice(0, middle));
    const right = mergearray(arr.slice(middle));

    return merge(left, right);
    
}

function merge(left, right){
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const array = [105, 79, 100, 110];
const sortarry = mergearray(array);
console.log(sortarry);