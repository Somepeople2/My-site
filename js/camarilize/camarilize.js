function camarilize(a) {
    let Z = a.split();
    while (Z.indexOf("-")) {
        Z.splice(Z.indexOf("-"),2,Z[Z.indexOf('-')+1].toUpperCase());
    }
    return Z.join();
}

alert(camarilize("list-style-image"));