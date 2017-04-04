//Player 1 starts the game
//At any point in the game, players can click reset button to reset the game
//Once a player wins, the table is disabled and the winning combination blinks letting players know the combination


var count = 1  //To track the players turn

//To check the winning combinations
check = function (){

  if(($(".t11").css('background-image') ==  $(".t12").css('background-image')) && ($(".t13").css('background-image') == $(".t12").css('background-image'))){
    if($(".t11").css('background-image') != "none"){
      $(".table").unbind("click")

      $(".t11,.t12,.t13").fadeToggle().delay(0.0000000001).fadeToggle()

      console.log("same")

    }
  }
  else if(($(".t21").css('background-image') ==  $(".t22").css('background-image')) && ($(".t23").css('background-image')== $(".t22").css('background-image'))){
    if($(".t21").css('background-image') != "none"){
      $(".table").unbind("click")
      $(".t21,.t22,.t23").fadeToggle().delay(0.0000000001).fadeToggle()
      console.log("same")

    }
  }
  else if(($(".t31").css('background-image') ==  ($(".t32").css('background-image')) && $(".t33").css('background-image')== $(".t32").css('background-image'))){
    if($(".t31").css('background-image') != "none"){
      $(".table").unbind("click")
      $(".t31,.t32,.t33").fadeToggle().delay(0.0000000001).fadeToggle()
      console.log("same")

    }
  }
  else if(($(".t11").css('background-image') ==  $(".t21").css('background-image')) && ($(".t31").css('background-image') == $(".t21").css('background-image'))){
    if($(".t21").css('background-image') != "none"){
      $(".table").unbind("click")
      $(".t11,.t21,.t31").fadeToggle().delay(0.0000000001).fadeToggle()
      console.log("same")

    }
  }
  else if(($(".t12").css('background-image') ==  $(".t22").css('background-image')) && ($(".t32").css('background-image')== $(".t22").css('background-image'))){
    if($(".t12").css('background-image') != "none"){
      $(".table").unbind("click")
      $(".t12,.t22,.t32").fadeToggle().delay(0.0000000001).fadeToggle()
      console.log("same")

    }
  }
  else if(($(".t13").css('background-image') ==  ($(".t23").css('background-image')) && $(".t33").css('background-image')== $(".t23").css('background-image'))){
    if($(".t13").css('background-image') != "none"){
      $(".table").unbind("click")
      $(".t13,.t23,.t33").fadeToggle().delay(0.0000000001).fadeToggle()
      console.log("same")

    }
  }
  else if(($(".t11").css('background-image') ==  $(".t22").css('background-image')) && ($(".t33").css('background-image') == $(".t22").css('background-image'))){
    if($(".t22").css('background-image') != "none"){
      $(".table").unbind("click")
      $(".t11,.t22,.t33").fadeToggle().delay(0.0000000001).fadeToggle()
      console.log("same")

    }
  }
  else if(($(".t13").css('background-image') ==  $(".t22").css('background-image')) && ($(".t31").css('background-image') == $(".t22").css('background-image'))){
    if($(".t22").css('background-image') != "none"){
      $(".table").unbind("click")
      $(".t13,.t22,.t31").fadeToggle().delay(0.0000000001).fadeToggle()
      console.log("same")

    }
  }
}

//Function to check when a block is clicked.
function clicking(){
  $(".table").css("background-image","none")
  $(".table").on("click", function(){
//Every time a square is clicked count is updated and based on count, player is updated
    count = count+1;
    if(count%2 != 0){
      $(this).unbind("click")
      $(this).css( {
        "background-image": "url('cross.png')",
        "background-size": "cover"
      })
      check();
    }
    else{
      $(this).unbind("click")
      $(this).css( {
        "background-image": "url('circle.png')",
        "background-size": "cover"
      })
      check();
    }
  })
  }
function init(){
  clicking()
}


init()
//When reset button is clicked, blocks are monitored again for clicking.
$(".reset").on("click",clicking)
