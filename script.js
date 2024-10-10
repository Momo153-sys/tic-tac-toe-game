const edit_buttons = document.querySelectorAll("#edit-link");
let turn;
let play = 0;
let one="1";
let two ="2";
let three="3";
let four ="4";
let five="5";
let six ="6";
let seven="7";
let eight ="8";
let nine="9";
let HasTheGameStarted=false;
edit_buttons.forEach((element,index) => {
    element.addEventListener("click",function(){
        const edit_name = document.createElement('form');
        edit_name.innerHTML = "<h2>Enter Player Name</h2> <input type='text' name='player-name' id='new-player-name' required><br><button id='cancel-button'>Cancel</button> <button id='confirm-button' type='submit'>Confirm</button>";
        edit_name.classList.add("player-edit-section");
        document.body.appendChild(edit_name);
        const cancel_button = document.getElementById("cancel-button");
        cancel_button.addEventListener("click",function(){
            document.body.removeChild(edit_name);
        });
        const confirm_button = document.getElementById("confirm-button");
        const name = document.getElementById("new-player-name");
        confirm_button.addEventListener("click",function(){
            if (name.value !== ""){
                document.querySelectorAll("#player-name")[index].innerHTML=name.value;
                document.body.removeChild(edit_name);
            }
        });
    });
});
const new_game_button = document.getElementById("new-game");
let kick_off = document.createElement("div");
const game_space = document.createElement("div");
new_game_button.addEventListener("click",function(){
    play = 0;
    one="1";
    two ="2";
    three="3";
    four ="4";
    five="5";
    six ="6";
    seven="7";
    eight ="8";
    nine="9";
    turn = 1;
    if (HasTheGameStarted === true) {
        document.getElementById("game").removeChild(kick_off);
        document.getElementById("game").removeChild(game_space);
    } 
    kick_off.innerHTML = "It is your turn "+ document.querySelectorAll("#player-name")[0].innerHTML+"!";
    kick_off.classList.add("kick-off");
    kick_off.style.backgroundColor = "rgb(60, 145, 214)";
    document.getElementById("game").appendChild(kick_off);
    game_space.innerHTML = "<div class='box'></div><div class='box'></div><div class='box'></div><div class='box'></div><div class='box'></div><div class='box'></div><div class='box'></div><div class='box'></div><div class='box'></div>";
    game_space.classList.add("game-space");
    document.getElementById("game").appendChild(game_space);
    HasTheGameStarted = true;
    const boxes = document.querySelectorAll(".box");
    
boxes.forEach((element,index) => {
    element.addEventListener("click",function(){
        if (turn===1) {
            kick_off.innerHTML = "It is your turn "+ document.querySelectorAll("#player-name")[1].innerHTML+"!";
            let symbol = document.createElement("p");
            symbol.style.fontSize = "20px";
            symbol.innerHTML = "X";
            if (index===0) {
                one = "X";
            }else if (index===1) {
                two = "X";
            } else if (index===2) {
                three = "X";
            } else if (index===3) {
                four = "X";
            } else if (index===4) {
                five = "X";
            } else if (index===5) {
                six = "X";
            } else if (index===6) {
                seven = "X";
            } else if (index===7) {
                eight = "X";
            } else if (index===8) {
                nine = "X";
            } 
            element.appendChild(symbol);
            turn = 2;
            play+=1;
            check_victory();
        } else if(turn===2){
            kick_off.innerHTML = "It is your turn "+ document.querySelectorAll("#player-name")[0].innerHTML+"!";
            let symbol = document.createElement("p");
            symbol.style.fontSize = "20px";
            symbol.innerHTML = "O";
            if (index===0) {
                one = "O";
            }else if (index===1) {
                two = "O";
            } else if (index===2) {
                three = "O";
            } else if (index===3) {
                four = "O";
            } else if (index===4) {
                five = "O";
            } else if (index===5) {
                six = "O";
            } else if (index===6) {
                seven = "O";
            } else if (index===7) {
                eight = "O";
            } else if (index===8) {
                nine = "O";
            } 
            element.appendChild(symbol);
            turn = 1;
            play+=1;
            check_victory();
        }
        if (play===9) {
            kick_off.innerHTML = "It is a Draw!";
        }
    });
    });
    
}); 

function check_victory(){
    if ((one===two && two===three) || (one===four && four===seven) || (one===five && five===nine)) {
        if (one==="O") {
            kick_off.innerHTML = document.querySelectorAll("#player-name")[1].innerHTML+" has Won!";
            kick_off.style.backgroundColor = "green";
        } else if(one==="X"){
            kick_off.innerHTML = document.querySelectorAll("#player-name")[0].innerHTML+" has Won!";
            kick_off.style.backgroundColor = "green";
        }
    } else if ((four===five && five===six) || (three===five && five===seven) || (two===five && five===eight)) {
        if (five==="O") {
            kick_off.innerHTML = document.querySelectorAll("#player-name")[1].innerHTML+" has Won!";
            kick_off.style.backgroundColor = "green";
        } else if(five==="X"){
            kick_off.innerHTML = document.querySelectorAll("#player-name")[0].innerHTML+" has Won!";
            kick_off.style.backgroundColor = "green";
        }
    }else if((nine===eight && eight===seven) || (three===six && six===nine)){
        if (nine==="O") {
            kick_off.innerHTML = document.querySelectorAll("#player-name")[1].innerHTML+" has Won!";
            kick_off.style.backgroundColor = "green";
        } else if(nine==="X"){
            kick_off.innerHTML = document.querySelectorAll("#player-name")[0].innerHTML+" has Won!";
            kick_off.style.backgroundColor = "green";
        }
    }
}