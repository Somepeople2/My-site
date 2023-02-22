function cost(km) {
    return 4+div(km,0.14)*0.25
}

function div(val, by){
    return (val - val % by) / by;
}