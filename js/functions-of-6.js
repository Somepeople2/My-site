//  №1
function mult(a,b) {
    return a*b
}

//  №2
function greeting(first_n,last_n,age) {
    alert(`Привет ${first_n} ${last_n} с возрастом ${age} лет`);
}

//  №3
function gender(gender) {
    if (gender=='M') {
        alert('You are a man!')
    } else if (gender=='F') {
        alert('You are a woman!')
    } else {
        alert('You are a *UNDEFINED*!')
    }
}

//  №4
function day_o_Week(day) {
    if (day==1){
        alert('Понедельник')
    }else if (day==2){
        alert('Вторник')
    }else if (day==3){
        alert('Среда')
    }else if (day==4){
        alert('Четверг')
    }else if (day==5){
        alert('Пятница')
    }else if (day==6){
        alert('Суббота')
    }else{
        alert('Воскресенье')
    }
}

//  №5
function first_word_Z(text) {
    for (let counter=0;counter < text.split('.').length();counter++) {
        first_word(text.split('.')[counter])    
    };
}

function first_word(str) {
    alert(str.split(' ')[0])
}

//  №6
function time_greeting(name,time='morning') {
        alert(`Good ${time} ${name}`)
}