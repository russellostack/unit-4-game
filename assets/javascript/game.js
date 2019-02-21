var heros = [maul={
    name:"Darth Maul",
    hp:100,
    attack=(Math.floor(Math.random()*10)+5),
    counter=(Math.floor(Math.random()*10)+10),
    isPlayerOne=false,
    isPlayerTwo=false
},vader={
    name:"Darth Vader",
    hp:180,
    attack=(Math.floor(Math.random()*10)+10),
    counter=(Math.floor(Math.random()*10)+1),
    isPlayerOne=false,
    isPlayerTwo=false
},luke={
    name:"Luke",
    hp:160,
    attack=(Math.floor(Math.random()*10)+7),
    counter=(Math.floor(Math.random()*10)+4),
    isPlayerOne=false,
    isPlayerTwo=false
},yoda={
    name:"Yoda",
    hp:200,
    attack=(Math.floor(Math.random()*10)+8),
    counter=(Math.floor(Math.random()*10)+12),
    isPlayerOne=false,
    isPlayerTwo=false
}]
var player;
var enemy;
playerOneSelected = false;
playerTwoSelected = false;
gameStart = false;
var enemyHp;
var enemiesRemaining = heros.length -1;
playerSelect();
enemySelect();
fight();

function playerSelect(){
    $("#maul").on("click", function(){
        if (playerOneSelected === false){
            $("#maul").appendTo("#fightArea");
            $("#hero-name").text(maul.name);
            $("#hero-hp").text("Health Points");
			playerOneSelected = true;
			maul.isPlayerOne = true;
			player = rey;
			enemySelect();
        }
    });
    $("#vader").on("click", function(){
        if (playerOneSelected === false){
            $("#vader").appendTo("#fightArea");
            $("#hero-name").text(vader.name);
            $("#hero-hp").text("Health Points");
			playerOneSelected = true;
			vader.isPlayerOne = true;
			player = vader;
			enemySelect();
        }
    });
    $("#luke").on("click", function(){
        if (playerOneSelected === false){
            $("#luke").appendTo("#fightArea");
            $("#hero-name").text(luke.name);
            $("#hero-hp").text("Health Points");
			playerOneSelected = true;
			luke.isPlayerOne = true;
			player = luke;
			enemySelect();
        }
    });
    $("#yoda").on("click", function(){
        if (playerOneSelected === false){
            $("#yoda").appendTo("#fightArea");
            $("#hero-name").text(yoda.name);
            $("#hero-hp").text("Health Points");
			playerOneSelected = true;
			yoda.isPlayerOne = true;
			player = yoda;
			enemySelect();
        }
    });

}
function enemySelect(){
// almost copy and paste of the player chosing function, but with a check for if the player has alreadu been chosen. update display

}

function fight(){
    $("#attackBtn").on("click", function() {
        if (gameStart === true){
            attack();
            if (enemy.enemyHp <= 0){
            enemiesRemaining--;
            statusCheck();
            } else {
            counterAttack();
            }
            
        }
        
    });		
}
function attack(){
    enemy.enemyHp = enemy.enemyHp - player.attack;
    $("#enemy-hp").text(enemy.enemyHp);
}
function counterAttack(){
    player.hp = player.hp - enemy.counter;
    $("#hero-hp").text(player.hp);
    if (player.hp <= 0){
        gameLose();	
    }
}
function statusCheck(){
    if (enemiesRemaining === 0){
    gameWin();
    }
    else {	
        gameStart = false;
            if (enemiesRemaining === 2){
            } else if (enemiesRemaining === 1){
    }
        $("#enemy-fight-area").empty();
        $("#enemy-name").text("");
        $("#enemy-total-hp").text("");
        $('#enemy-hp').text("");
    }	
}
function gameLose(){
// reset enemy variables, maybe add a replay button.
}
function gameWin(){
    //updates wins, resets enemy variables
}
function reset()){
//resets all the hero variables, the hero selected and number of wins.
}