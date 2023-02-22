let age = prompt('enter age')
if (age<0){
    alert('ERROR')
} else if (age <=2){
    alert(age*10.5)
} else{
    alert(age*10.5+(age - 2)*4)
}