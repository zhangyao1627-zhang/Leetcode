var twoSum = function (numbers, target){
    let [left, right] = [0, numbers.length-1];
    while (left < right){
        if(numbers[left] + numbers[right] > target){
            right --;
        } else if (numbers[left] + numbers[right] < target){
            left ++;
        } else {
            // pay attention that the result will be in the array
            return [left + 1, right +1];
        }
    }
}