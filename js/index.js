var vez = 0;

var left = 0;

var zindex = 10000;

var jogadores = [
  {
    "name" : "",
    "pontos" : 0,
    "venceu" : 0
  },
  {
    "name" : "",
    "pontos" : 0,
    "venceu" : 0
  },
  {
    "name" : "",
    "pontos" : 0,
    "venceu" : 0
  },
  {
    "name" : "",
    "pontos" : 0,
    "venceu" : 0
  },
]

var mesa ={
    "card" : 0,
    "color" : "",
    "aux" : "",
    };

var deck = [
    {
    "card" : 0,
    "color" : "",
    "aux" : "",
    },
    {
    "card" : 0,
    "color" : "",
    "aux" : "",
    },
    {
    "card" : 0,
    "color" : "",
    "aux" : "",
    },
    {
    "card" : 0,
    "color" : "",
    "aux" : "",
    },
    {
    "card" : 0,
    "color" : "",
    "aux" : "",
    },
    {
    "card" : 0,
    "color" : "",
    "aux" : "",
    },
    {
    "card" : 0,
    "color" : "",
    "aux" : ""
    }
  ];

var botcard1 = [
    {
    "card" : 0,
    "color" : "",
    "aux" : "",
    },
    {
    "card" : 0,
    "color" : "",
    "aux" : "",
    },
    {
    "card" : 0,
    "color" : "",
    "aux" : "",
    },
    {
    "card" : 0,
    "color" : "",
    "aux" : "",
    },
    {
    "card" : 0,
    "color" : "",
    "aux" : "",
    },
    {
    "card" : 0,
    "color" : "",
    "aux" : "",
    },
    {
    "card" : 0,
    "color" : "",
    "aux" : ""
    }
  ];

$(document).ready(function(){
  console.log("Ready");
  getcards();
  getmesacard();
  pegarjogador();
  botgetcards(1);
  jogar();
  pularvez();
  botjogar();
});


function getcards(){
  var min=1; 
  var max=10;  
  var random = 0;
  var minc=0; 
  var maxc=4;
  var randomcolor = 0;
  var aux = "";
  var color = "";
  
  for(var i = 0; i <= 6; i++){
    
    randomcolor = Math.floor(Math.random() * (+maxc - +minc)) + +minc;
    if(randomcolor == 0){
      aux = "r";
      color = "red";
    } else if(randomcolor == 1){
      aux = "y";
      color = "yellow";
    } else if(randomcolor == 2){
      aux = "g";
      color = "green";
    } else if(randomcolor == 3){
      aux = "b";
      color = "blue";
    }
    random = Math.floor(Math.random() * (+max - +min)) + +min;
    console.log(i);
      if(deck[i].card == random){
        random = Math.floor(Math.random() * (+max - +min)) + +min;
      }

    $(".showcards .before").before("<div class='card deck card"+ aux + random + " carta"+ i + aux + random + "' data-id='"+ i + "' data-color='"+ color +"' data-cartaid='"+ random +"' data-aux='"+ aux +"'></div>");
    deck[i].card = random;
    deck[i].color = color;
    deck[i].aux = aux;
    }
  }

function botgetcards(botid){
  var min=1; 
  var max=10;  
  var random = 0;
  var minc=0; 
  var maxc=4;
  var randomcolor = 0;
  var aux = "";
  var color = "";
  var b = 0;

  for(var i = 0; i <= 6; i++){

    randomcolor = Math.floor(Math.random() * (+maxc - +minc)) + +minc;
    if(randomcolor == 0){
      aux = "r";
      color = "red";
    } else if(randomcolor == 1){
      aux = "y";
      color = "yellow";
    } else if(randomcolor == 2){
      aux = "g";
      color = "green";
    } else if(randomcolor == 3){
      aux = "b";
      color = "blue";
    }
    
    random = Math.floor(Math.random() * (+max - +min)) + +min;
    console.log(i);
      if(botcard1[i].card == random){
        random = Math.floor(Math.random() * (+max - +min)) + +min;
      }
    
    $(".showcardsbot .before").before("<div class='card card"+ aux + random + " carta"+ i + aux + random +"' data-id='"+ (i + 1) + "' data-color='"+ color +"'><div class='after'></div></div>");
    botcard1[i].card = random;
    botcard1[i].color = color;
    botcard1[i].aux = aux;
    }
  }


function getmesacard(){
  var min=1; 
  var max=10; 
  var minc=0; 
  var maxc=4;
  var randomcolor = 0;
  var aux = "";
  var color = "";
  randomcolor = Math.floor(Math.random() * (+maxc - +minc)) + +minc;
  if(randomcolor == 0){
      aux = "r";
      color = "red";
    } else if(randomcolor == 1){
      aux = "y";
      color = "yellow";
    } else if(randomcolor == 2){
      aux = "g";
      color = "green";
    } else if(randomcolor == 3){
      aux = "b";
      color = "blue";
    }
  random = Math.floor(Math.random() * (+max - +min)) + +min;
  $(".mesa .before").before("<div class='nothover card card"+ aux + random + "' data-id="+ random +"></div>");
  mesa.card = random;
  mesa.color = color;
  mesa.aux = aux;
}

function atualizarmesa(aux, card){
  //Mesa
  left+= 22;
  $(".mesa .before").before("<div style='left:" + left + "px;' class='card card"+ aux + card + "' data-id="+ card +"></div>");
}

function jogar(){
  if(vez == 0){
    $(".deck").click(function(){
    var id = $(this).data("id");
    var color = $(this).data("color");
    var cartaid = $(this).data("cartaid");
    var auxcarta = $(this).data("aux");
    var totaldecartajogada = 0;
    console.log(color);
      if(color == mesa.color){
        mesa.card = cartaid;
        mesa.aux = auxcarta;
        mesa.color = color;
        console.log(mesa.card);
        console.log(mesa.aux);
        console.log(mesa.color);
        atualizarmesa(auxcarta, cartaid);
        zindex++;
        $(this).hide();
        left++;
        zindex++;
        cartaverificaid = 0;
        verificarcartajogada(cartaid);
        totaldecartajogada = 1;
        vez = 1;
      }
      else if(totaldecartajogada == 0){
      if(cartaid == mesa.card){
        mesa.card = cartaid;
        mesa.aux = auxcarta;
        mesa.color = color;
        console.log(mesa.card);
        console.log(mesa.aux);
        console.log(mesa.color);
        atualizarmesa(auxcarta, cartaid);
        zindex++;
        $(this).hide();
        left++;
        verificarcartajogada(cartaid);
        vez = 1;
        }
      }
    });
  }
}

function botjogar(){
  setInterval(function(){
    setTimeout(function(){
  if(vez == 1){
    var totalDeCartaJogada = 0;
    for(var i = 0; i < botcard1.length;i++){
      console.log(i);
      if(botcard1[i].color == mesa.color){
        if(totalDeCartaJogada == 0){
        mesa.card = botcard1[i].card;
        mesa.color = botcard1[i].color;
        mesa.aux = botcard1[i].aux;
        atualizarmesa(botcard1[i].aux, botcard1[i].card);
        $(".showcardsbot .carta"+ i + botcard1[i].aux + botcard1[i].card).hide();
        console.log("Bot tem a cor " + mesa.color);
        totalDeCartaJogada = 1;
        vez = 0;
        break;
        }
      }
      if(i >= botcard1.length){
        vez = 0;
        break;
      }
    }
    if(totalDeCartaJogada == 0){
    for(var i = 0; i < botcard1.length;i++){
      console.log(i);
      if(botcard1[i].card == mesa.card){
        mesa.card = botcard1[i].card;
        mesa.color = botcard1[i].color;
        mesa.aux = botcard1[i].aux;
        atualizarmesa(botcard1[i].aux, botcard1[i].card);
        $(".showcardsbot .carta"+ i + botcard1[i].aux + botcard1[i].card).hide();
        console.log("Bot tem o numero " + mesa.color);
        totalDeCartaJogada = 1;
        vez = 0;
        break;
      } else{
        bloqueio("Bot pulou a vez, e teve que comprar uma carta");
       var newCard = {"card" : 0, "color" : "blue", "aux" : "b"};
       botcard1.push(newCard);
        var min=0; 
        var max=10;  
        var random = 0;
        var minc=0; 
        var maxc=4;
        var randomcolor = 0;
        var aux = "";
        var color = "";
        randomcolor = Math.floor(Math.random() * (+maxc - +minc)) + +minc;
        if(randomcolor == 0){
            aux = "r";
            color = "red";
          } else if(randomcolor == 1){
            aux = "y";
            color = "yellow";
          } else if(randomcolor == 2){
            aux = "g";
            color = "green";
          } else if(randomcolor == 3){
            aux = "b";
            color = "blue";
          }
        for(var i = 0; i <= 6; i++){
          random = Math.floor(Math.random() * (+max - +min)) + +min;
              console.log(i);
                if(botcard1[i].card == random){
                  random = Math.floor(Math.random() * (+max - +min)) + +min;
                }
        }
          $(".showcardsbot .before").before("<div class='card carta"+ (i + 1) + aux + random + "' data-id='"+ (i + 1) + "' data-color='"+ color +"'><div class='after'></div></div>");
       vez = 0;
       break;
      }
    }
}
}
}, 2000);
}, 1000);
}
     
  

function pegarjogador(){
  $(".who button").click(function(){
    var name = $("#who").val();
    if(name == ""){
      $("#who").css("border", "2px solid #e23030");
    } else{
      jogadores[0].name = name;
      console.log(jogadores[0].name);
      $(".getname").css("opacity", "0");
      setTimeout(function(){
      $(".getname").css("z-index", "-10");
      }, 1000);
    }
    return false;
  });
}

function verificarcartajogada(cartaid){
  if(cartaid == 10){ //Bloqueia
    if(vez == 0){
      vez = 1;
    } else{
      vez = 0;
    }
    console.log("Você bloqueiou");
  } else if(cartaid == 11){ //Volta pra mim
    if(vez == 0){
      vez = 1;
    } else{
      vez = 0;
    }
    console.log("Você bloqueiou");
  }
}

function bloqueio(messagem){
  $(".bloqueio").css("z-index", 10000);
  $(".bloqueio").css("opacity", 1);
  $(".bloqueio .msg").html("<h1>" +messagem + "</h1>");
  setInterval(function(){ 
    $(".bloqueio").css("opacity", 0);
    $(".bloqueio").css("z-index", -100);
  }, 3000);
}

function pularvez(){
  if(vez == 0){
  $(".pularvez").click(function(){
    vez = 1;
    bloqueio("Você pulou sua vez :c");
  });
  }
}