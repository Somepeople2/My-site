let bank = Number(prompt('What is your current bank?',1000))

while (confirm('Would you like to play?')){
    let bet = prompt('What is your bet?(number,odd/even,1dozen/2dozen/3dozen)')
    let bet_money = Number(prompt('How much are you betting?'))
    let random_number = Math.round(Math.random()*36)
    if ((bet==='odd' && random_number%2==1) || (bet==='even' && random_number%2==0)) {
        bank += bet_money
        alert(`Rolled number: ${random_number}.\nYou won!\nYour current bank is: ${bank}.`)
    } else if ((bet==='1dozen' && 1<=random_number && random_number<=12) || 
               (bet==='2dozen' && 13<=random_number && random_number<=24) ||
               (bet==='3dozen' && 25<=random_number && random_number<=36)) {
        bank += bet_money * 2
        alert(`Rolled number: ${random_number}.\nYou won!\nYour current bank is: ${bank}.`)
    } else if (bet===random_number) {
        bank += bet_money * 35
        alert(`Rolled number: ${random_number}.\nYou won!\nYour current bank is: ${bank}.`)
    } else {
        bank -= bet_money
        alert(`Rolled number: ${random_number}.\nYou lost...\nYour current bank is: ${bank}.`)
    }
}