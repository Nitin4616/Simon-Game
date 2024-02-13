
var gamePattern=[];
var buttonColours=["red","blue","green","yellow"];
var started=false;
var level=0;
$(document).keypress(function(){
        
    if(!started){
        nextSequence();
        $("#level-title").text("Level "+level);
        started=true;
    }
});
function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
{
    console.log("Success");
    if(userClickedPattern.length===gamePattern.length){
        setTimeout(function(){
            nextSequence();
        },1000);
    }
}
else{
    console.log("wrong");
    var w="wrong";
    playSound(w);
    $("body").addClass("game-over");
    setTimeout(function(){
    $("body").removeClass("game-over");
    },200);
    $("#level-title").text("GAME OVER");
    startOver();
}
}
function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}
function nextSequence(){
    userClickedPattern=[];

    level++;
    $("#level-title").text("Level "+level);
    var randomNumber=Math.floor((Math.random()*4));
    console.log(randomNumber);
    var randomChosenColours=buttonColours[randomNumber];
    console.log(randomChosenColours);
    gamePattern.push(randomChosenColours);
    console.log(gamePattern);
    var myId="#"+randomChosenColours;
    $(myId).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColours);
    
   

}
var userClickedPattern=[];
$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});
function playSound(name){
    var audioSource="sounds/"+name+".mp3";
    var audio = new Audio(audioSource);
audio.play();

}
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed")
    },100);
}


