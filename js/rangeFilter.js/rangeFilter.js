function rangeFilter(arr,a,b) {
    return arr.filter(item => a<=item && item<=b);
}

let list = [5, 3, 8, 1];
alert(rangeFilter(list,1,4));
alert(list);