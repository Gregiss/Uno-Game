var vez = 0;

var left = -50;

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
});

function getcards(){
  var min=0; 
  var max=13;  
  var random = 0;
  var minc=0; 
  var maxc=4;
  var randomcolor = 0;
  var aux = "";
  var color = "";
  
  for(var i = 0; i <= 6; i++){
    console.log(i);
    randomcolor = Math.floor(Math.random() * (+maxc - +minc)) + +minc;
    if(randomcolor == 0){
      aux = "";
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
    $(".showcards .before").before("<div class='card deck card"+ aux + random + "' data-id='"+ i + "' data-color='"+ color +"' data-cartaid='"+ random +"' data-aux='"+ aux +"'></div>");
    deck[i].card = random;
    deck[i].color = color;
    deck[i].aux = aux;
    console.log(deck[i].color+deck[i].card);  
    }
  }

function botgetcards(botid){
  var min=0; 
  var max=13;  
  var random = 0;
  var minc=0; 
  var maxc=4;
  var randomcolor = 0;
  var aux = "";
  var color = "";
  
  for(var i = 0; i <= 6; i++){
    randomcolor = Math.floor(Math.random() * (+maxc - +minc)) + +minc;
    if(randomcolor == 0){
      aux = "";
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
    $(".showcardsbot .before").before("<div class='card card"+ aux + random + " botcard"+ aux + random + "' data-id='"+ (i + 1) + "' data-color='"+ color +"'><div class='after'></div></div>");
    botcard1[i].card = random;
    botcard1[i].color = color;
    botcard1[i].aux = aux;
    console.log(botcard1[i].color+botcard1[i].card);  
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
      aux = "";
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
  $(".mesa").html("<div class='before'><div class='card card"+ aux + card + "' data-id="+ card +"></div></div>");
}

function jogar(){
  if(vez == 0){
  $(".deck").click(function(){
    var id = $(this).data("id");
    var color = $(this).data("color");
    var cartaid = $(this).data("cartaid");
    var auxcarta = $(this).data("aux");
      if(color == mesa.color){
        mesa.card = cartaid;
        mesa.aux = auxcarta;
        mesa.color = color;
        atualizarmesa(auxcarta, cartaid);
        zindex++;
        $(".showcards .card" + auxcarta + cartaid).hide();
        left++;
        zindex++;
        deck.shift(id);
        vez = 1;
      } else if(cartaid == mesa.card){
        mesa.card = cartaid;
        mesa.aux = auxcarta;
        mesa.color = color;
        atualizarmesa(auxcarta, cartaid);
        zindex++;
        $(this).hide();
        left++;
        deck.shift(id);
        vez = 1;
      }
    vez = 1;
    verificarcartajogada(mesa.card);
    botjogar(color, cartaid);
    });
  }
}

function botjogar(color, cartanumero){
  if(vez == 0){
    console.log("Bot Bloqueado");
  }
  else if(vez == 1){
    if(mesa.card == 12){
      console.log("Bot comprou duas carta");
      bloqueio("Você fez o bot comprar 2 cartas, é você novamente");
        var min=0; 
        var max=13;  
        var random = 0;
        var minc=0; 
        var maxc=4;
        var randomcolor = 0;
        var aux = "";
        var color = "";
      randomcolor = Math.floor(Math.random() * (+maxc - +minc)) + +minc;
          if(randomcolor == 0){
            aux = "";
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
        var newCard = [{'card' : botcard1.length + 1, 'color' : color, aux : aux}];
        botcard1.push(newCard);
        botcard1.push(newCard);
        $(".showcardsbot .before").before("<div class='card deck card"+ aux + random + "' card"+ aux + random + "' data-id='"+ deck.length + "' data-color='"+ color +"'><div class='after'></div></div>");
      $(".showcardsbot .before").before("<div class='card deck card"+ aux + random + "' card"+ aux + random + "' data-id='"+ deck.length + "' data-color='"+ color +"'><div class='after'></div></div>");
      mesa.card = 0;
      atualizarmesa(mesa.aux, 0);
    } else{
    console.log(botcard1.length);
    var cartaid = 0;
    while(cartaid <= botcard1.length){
      console.log("Contando for " + cartaid);
      if(color == mesa.color){
        mesa.card = botcard1[cartaid].card;
        mesa.aux = botcard1[cartaid].aux;
        mesa.color = botcard1[cartaid].color;
        atualizarmesa(botcard1[cartaid].aux, botcard1[cartaid].card);
        console.log("Bot jogou " + botcard1[cartaid].aux + botcard1[cartaid].card)
        console.log("Bot pode jogar, porque a carta é da mesma cor ou do mesmo nipe");
        zindex++;
        $(".showcardsbot .botcard" + botcard1[cartaid].aux + botcard1[cartaid].card).hide();
        console.log("hidden card");
        left++;
        zindex++;
        botcard1.shift(cartaid);
        vez = 0;
        jogar();
        break;
      } else{
        if(cartanumero == mesa.card){
        mesa.card = botcard1[cartaid].card;
        mesa.aux = botcard1[cartaid].aux;
        mesa.color = botcard1[cartaid].color;
        atualizarmesa(botcard1[cartaid].aux, botcard1[cartaid].card);
        zindex++;
        $(this).hide();
        left++;
        botcard1.shift(cartaid);
        vez = 0;
        break;
        }
        }
      cartaid++;
      if(cartaid >= botcard1.length){
        break;
      }
      }
      verificarcartajogada(mesa.card);
      vez = 0;
      jogar();
    }
  }
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

function verificarsetemcarta(){
        if(deck[i].color == mesa.color){
          break;
        } else if(deck[i].card == mesa.card){
          break;
        } else{
        console.log("Você não tem a carta");
        var min=0; 
        var max=13;  
        var random = 0;
        var minc=0; 
        var maxc=4;
        var randomcolor = 0;
        var aux = "";
        var color = "";
          if(randomcolor == 0){
            aux = "";
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
          randomcolor = Math.floor(Math.random() * (+maxc - +minc)) + +minc;
        var newCard = [{'card' : botcard1.length + 1, 'color' : color, aux : aux}];
        deck.push(newCard);
          deck.push(newCard);
          $(document).ready(function(){
        $(".showcards .before").before("<div class='card deck card"+ aux + random + "' card"+ aux + random + "' data-id='"+ deck.length + "' data-color='"+ color +"'></div>");
          });
        }

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
  } else if(cartaid == 12){ //Volta pra mim e faz comprar duas carta
    if(vez == 0){
      vez = 0;
      mesa.card = 0;
      atualizarmesa(mesa.aux, 0);
    } else{
      vez = 1;
    }
    var comprar2 = true;
  } else{
    vez = 1;
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