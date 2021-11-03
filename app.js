let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const moveDescription_p = document.querySelector(".move-description p");
const sarape_div = document.getElementById("sarape");
const skull_div = document.getElementById("skull");
const vidrio_div =  document.getElementById("vidrio");

function getComputerWeapon(){
    const weapons = ["sarape", "skull", "vidrio"];
    const randomNum = math.floor(math.random() * 3);
    return weapons[randomNum];
}

function weapons(weapon) {
    if (weapon == 'skull') return "Skull";
    if (weapon =='sarape') return "Sarape";
    return "Vidrio Roto";
}

function win(userWeapon, computerWeapon) {
    const userLabel = "(user)".fontsize(5).sup();
    const computerLabel = "(computer)".fontsize(5).sup();
    const userWeapon_div = document.getElementById(userWeapon);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML= computerScore;
    moveDescription_p.innerHTML= '${weapons(userWeapon)}${userLabel} beats ${weapons(computerWeapon)} ${computerLabel}. You score!';

}

function lose(userWeapon, computerWeapon) {
    const userLabel = "(user)".fontsize(5).sup();
    const computerLabel = "(computer)".fontsize(5).sup();
    const userWeapon_div = document.getElementById(userWeapon);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML= computerScore;
    moveDescription_p.innerHTML= '${weapons(computerWeapon)}${computerLabel} beats ${weapons(userWeapon)} ${userLabel}. The computer scores.';
}

function draw(userWeapon, computerWeapon) {
    const userLabel = "(user)".fontsize(5).sup();
    const computerLabel = "(computer)".fontsize(5).sup();
    const userWeapon_div = document.getElementById(userWeapon);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML= computerScore;
    moveDescription_p.innerHTML= '${weapons(userWeapon)}${userLabel} is the same as ${weapons(computerWeapon)} ${computerLabel}. Its a draw.';
}

function game(userWeapon) {
    const computerWeapon = getComputerWeapon();
    switch(userWeapon + computerWeapon) {
        case "skullvidrio":
        case "sarapeskull":
        case "vidriosarape":
            win (userWeapon, computerWeapon)
            break;
        case "skullsarape":
        case "sarapevidrio":
        case "vidrioskull":
            lose(userWeapon, computerWeapon);
            break;
        case "skullskull":
        case "sarapesarape":
        case "vidriovidrio":
            draw(userWeapon, computerWeapon);
            break;        
    }
}

function main(){
    skull_div.addEventListener('click', () => game("skull"));
    sarape_div.addEventListener('click', () => game("sarape"));
    vidrio_div.addEventListener('click', () => game("vidrio"));
}

main();
