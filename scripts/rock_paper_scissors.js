score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties:0
};

/*
if(score==null){   // OR:   if(!score){}
    score = {
        wins: 0,
        losses: 0,
        ties:0
    }
}
*/

updateScore();

function playGame(value){
    user = value;
    num = Math.random();
    setvalue(num);
    userSel = setstring(user);
    compSel = setstring(comp);
    result= judge(user, comp);
    if(result=="You WIN!") score.wins++;
    else if(result=="You LOSE!") score.losses++;
    else score.ties++;
    
    console.log(score);

    localStorage.setItem('score', JSON.stringify(score))
    getResult();
    getMoves();
    updateScore();
}

let num; // 0 to < 1
let user;
let comp; // 1-rock, 2-paper, 3-scissors
let userSel, compSel, result;

function getResult(){
    document.querySelector('.js-result').innerHTML = `<b>${result}</b>`;
}
function getMoves(){
    document.querySelector('.js-moves').innerHTML = `(You)
<img class="move-icon" src="images\\${userSel}-emoji.png" alt="">
VS
<img class="move-icon"  src="images\\${compSel}-emoji.png" alt="">
(Computer)`;
}
function resetfull(){
    document.querySelector('.js-result').innerHTML = '';
    document.querySelector('.js-moves').innerHTML = '';
    updateScore();
}
function updateScore(){
    document.querySelector('.js-score').innerHTML =`Wins: ${score.wins} , Losses: ${score.losses} , Ties: ${score.ties}`;
}
function setvalue(num){
    if(num>=0 && num <1/3) comp = 1;
    else if(num>=1/3 && num<2/3) comp = 2;
    else comp = 3;
}
function setstring(value){
    let choose;
    if(value==1) choose = 'rock';
    else if(value==2) choose = 'paper';
    else choose= 'scissors';
    return choose;
}
function judge(user, comp){
    let ans;
    if(user==comp) ans = "TIE!";
    else{
        if(user==1){
            if(comp==2) ans = "You LOSE!";
            else ans = "You WIN!";
        }
        else if(user==2){
            if(comp==3) ans = "You LOSE!";
            else ans = "You WIN!";
        }
        else{
            if(comp==1) ans = "You LOSE!";
            else ans = "You WIN!";
        }
    }
    return ans;
}