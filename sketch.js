//Lógica do jogo: O jogador vai mover, através do teclado, o personagem para o resultado correto da operação que aprecer.
//VARIÁVEIS
var tela=1
var largura=200
var altura=55
var xMenu1=670
var xMenu2=0
var xMenu3=7
var yMenu1=400
var yMenu2=80
var yMenu3=370
var xMenu4=670
var yMenu4=400
var tela1;
var tela4;
var tela3;
var fonte2
var cont=0
var img1=[]
var tempo=0
var xObstaculo1=160
var yObstaculo1=130
var xObstaculo2=600
var yObstaculo2=130
var xObstaculo3=160
var yObstaculo3=330
var xObstaculo4=600
var yObstaculo4=330
var number1
var number2
var pontos=0
var result=[]
var cont1=0
var song;
var conta1;
var conta2;
var fase=1
var vidas=5
var soma=[]
var number=[]

function preload() {
  tela1 = loadImage('tela1.png');
  tela4 = loadImage('tela4.png');
  tela3 = loadImage('tela3.png');
  errou = loadImage('errou.jpg');
  ganhou = loadImage('ganhou.png');
  acertou = loadImage('acertou.png');
  //imagens personagem
  for(var i=0;i<8;i++){
    img1[i]=loadImage('00'+(i+1)+'.png')
  }
//sons
  song = loadSound('musica.mp3');
}

function setup() {
  createCanvas(900, 520);
song.loop()
random();
//números para as somas
 for(var j=0;j<12;j++){
    number[j]=parseInt(random(1,99))
  }
//números para os resultados falsos
  for(var k=0;k<18;k++){
    result[k]=parseInt(random(1,99))
  }
}
function draw() {

  textStyle(BOLD)
//tela menu
if(tela==1){
    background(0,0,0)
image(tela1,0,0,900,520)
  cont++
//image(img[cont%1], 20, 20, 150, 150)
    //Botão Jogar
//quando não passa o mouse:
    textAlign(LEFT)
    textSize(29)
    fill('#c2aef2')//cor de fundo do rect
    stroke('#683285')//cor de borda do rect
    rect(xMenu1, yMenu1, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#683285')//cor do texto
  text("Jogar",720,436)
    
    //quando passa o mouse:
    if(mouseX>xMenu1 && mouseX<xMenu1+largura && mouseY>yMenu1 && mouseY<yMenu1+altura){
    fill('#ea9010')//cor de fundo do rect
    stroke('#74329a')//cor de borda do rect
    rect(xMenu1, yMenu1, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#74329a')//cor do texto
  text("Jogar",720,436)
if(mouseIsPressed){
      tela=2
    }
    }
//Para o botão de Informações:
    //Quando não passa o mouse:
    fill('#c2aef2')//cor dentro do rect
    stroke('#683285')//cor da borda do rect
    rect(xMenu3, yMenu2, largura, altura, 25)
    //Pro texto dentro do rect:
    fill('#683285')//cor do texto
    noStroke()//sem borda no texto
    text("Informações", 20,120)
//Quando o mouse paassa por cima:
  if(mouseX>xMenu3 && mouseX<xMenu3+largura && mouseY>yMenu2 && mouseY<yMenu2+altura){
    fill('#ea9010')//cor do rect
    stroke('#683285')//cor da borda do rect
    rect(xMenu3, yMenu2, largura, altura, 25)
  //Pro texto dentro do rect:
    fill('#683285')//cor do texto
    noStroke()//sem borda no texto
    text("Informações", 20,120)
    if(mouseIsPressed){
      tela=3
    }
  }
//Botão créditos
   fill('#7af461')//cor dentro do rect
    stroke('#753696')//cor da borda do rect
    rect(xMenu2, yMenu3, largura, altura, 25)
    //Pro texto dentro do rect:
    fill('#753696')//cor do texto
    noStroke()//sem borda no texto
    text("Créditos", 40,410)
    //Quando o mouse paassa por cima:
    
  if(mouseX>xMenu2 && mouseX<xMenu2+largura && mouseY>yMenu3 && mouseY<yMenu3+altura){
    fill('#ea9010')//cor do rect
    stroke('#753696')//cor da borda do rect
    rect(xMenu2, yMenu3, largura, altura, 25)
  //Pro texto dentro do rect:
    fill('#753696')//cor do texto
    noStroke()//sem borda no texto
    text("Créditos", 40,410)
    if(mouseIsPressed){
      tela=4
    }
  }
  }
//tela do jogo em ação
if(tela==2){
 // frameRate(2)
  background(0,0,0)

  
//informações do jogo
  switch (pontos) {
    case 0:
    fase = 1;
    break;
    case 5:
    fase = 2;
    break;
    case 10:
    fase=3
    break;
    case 15:
    fase = 4
    break;
    case 20:
    fase = 5
    break;
    case 25:
    fase = 6
    break;
    case 30:
    tela=5
    break;
  }
  
   fill('#87e752')//cor do texto
    noStroke()//sem borda no texto
    text("Pontos: "+pontos, 20, 30)
  text("Fase: "+fase,400,30)
  
//conta
  
//FASE1
if(fase==1){
  //soma
      fill('#87e752')//cor do texto
    noStroke()//sem borda no texto
    text(number[0]+"+"+number[1], 390,490)
      soma[0]= number[0]+number[1]
      
//resultado1
//Botão resultado 1
//quando não passa o mouse:
    textAlign(LEFT)
    textSize(29)
    fill('#c2aef2')//cor de fundo do rect
    stroke('#683285')//cor de borda do rect
    rect(xObstaculo1, yObstaculo1, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#683285')//cor do texto
  text(soma[0],230,170)
    
    //quando passa o mouse:
    if(mouseX>xObstaculo1 && mouseX<xObstaculo1+largura && mouseY>yObstaculo1 && mouseY<yObstaculo1+altura){
    fill('#ea9010')//cor de fundo do rect
    stroke('#74329a')//cor de borda do rect
    rect(xObstaculo1, yObstaculo1, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#74329a')//cor do texto
  text(soma[0],230,170)
if(mouseIsPressed){
  tela=8
      pontos+=5
    }
    }//fim do resultado 1
  
//Botão resultado 2
//quando não passa o mouse:
    textAlign(LEFT)
    textSize(29)
    fill('#c2aef2')//cor de fundo do rect
    stroke('#683285')//cor de borda do rect
    rect(xObstaculo2, yObstaculo2, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#683285')//cor do texto
  text(result[0],675,170)
    
    //quando passa o mouse:
    if(mouseX>xObstaculo2 && mouseX<xObstaculo2+largura && mouseY>yObstaculo2 && mouseY<yObstaculo2+altura){
    fill('#ea9010')//cor de fundo do rect
    stroke('#74329a')//cor de borda do rect
    rect(xObstaculo2, yObstaculo2, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#74329a')//cor do texto
  text(result[0],675,170)
if(mouseIsPressed){
      tela=7
    }
    }//fim do resultado 2

//Botão resultado 3
//quando não passa o mouse:
    textAlign(LEFT)
    textSize(29)
    fill('#c2aef2')//cor de fundo do rect
    stroke('#683285')//cor de borda do rect
    rect(xObstaculo3, yObstaculo3, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#683285')//cor do texto
  text(result[1],230,370)
    
    //quando passa o mouse:
    if(mouseX>xObstaculo3 && mouseX<xObstaculo3+largura && mouseY>yObstaculo3 && mouseY<yObstaculo3+altura){
    fill('#ea9010')//cor de fundo do rect
    stroke('#74329a')//cor de borda do rect
    rect(xObstaculo3, yObstaculo3, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#74329a')//cor do texto
  text(result[1],230,370)
if(mouseIsPressed){
      tela=7
    }
    }//fim do resultado 3

//Botão resultado 4
//quando não passa o mouse:
    textAlign(LEFT)
    textSize(29)
    fill('#c2aef2')//cor de fundo do rect
    stroke('#683285')//cor de borda do rect
    rect(xObstaculo4, yObstaculo4, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#683285')//cor do texto
  text(result[2],675,370)
    
    //quando passa o mouse:
    if(mouseX>xObstaculo4 && mouseX<xObstaculo4+largura && mouseY>yObstaculo4 && mouseY<yObstaculo4+altura){
    fill('#ea9010')//cor de fundo do rect
    stroke('#74329a')//cor de borda do rect
    rect(xObstaculo4, yObstaculo4, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#74329a')//cor do texto
  text(result[2],675,370)
if(mouseIsPressed){
      tela=7
    }
    }//fim do resultado 4
  
    }//fim da fase 1
      
//FASE2
 if(fase==2){
      soma[1]= number[2]+number[3]
     fill('#87e752')//cor do texto
    noStroke()//sem borda no texto
    text(number[2]+"+"+number[3], 450,490)
 
//resultado1
//Botão resultado 1
//quando não passa o mouse:
    textAlign(LEFT)
    textSize(29)
    fill('#c2aef2')//cor de fundo do rect
    stroke('#683285')//cor de borda do rect
    rect(xObstaculo1, yObstaculo1, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#683285')//cor do texto
  text(result[5],230,170)
    
    //quando passa o mouse:
    if(mouseX>xObstaculo1 && mouseX<xObstaculo1+largura && mouseY>yObstaculo1 && mouseY<yObstaculo1+altura){
    fill('#ea9010')//cor de fundo do rect
    stroke('#74329a')//cor de borda do rect
    rect(xObstaculo1, yObstaculo1, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#74329a')//cor do texto
  text(result[5],230,170)
if(mouseIsPressed){
      tela=7
    }
    }//fim do resultado 1
  
//Botão resultado 2
//quando não passa o mouse:
    textAlign(LEFT)
    textSize(29)
    fill('#c2aef2')//cor de fundo do rect
    stroke('#683285')//cor de borda do rect
    rect(xObstaculo2, yObstaculo2, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#683285')//cor do texto
  text(result[4],675,170)
    
    //quando passa o mouse:
    if(mouseX>xObstaculo2 && mouseX<xObstaculo2+largura && mouseY>yObstaculo2 && mouseY<yObstaculo2+altura){
    fill('#ea9010')//cor de fundo do rect
    stroke('#74329a')//cor de borda do rect
    rect(xObstaculo2, yObstaculo2, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#74329a')//cor do texto
  text(result[4],675,170)
if(mouseIsPressed){
      tela=7
    }
    }//fim do resultado 2

//Botão resultado 3
//quando não passa o mouse:
    textAlign(LEFT)
    textSize(29)
    fill('#c2aef2')//cor de fundo do rect
    stroke('#683285')//cor de borda do rect
    rect(xObstaculo3, yObstaculo3, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#683285')//cor do texto
  text(result[3],230,370)
    
    //quando passa o mouse:
    if(mouseX>xObstaculo3 && mouseX<xObstaculo3+largura && mouseY>yObstaculo3 && mouseY<yObstaculo3+altura){
    fill('#ea9010')//cor de fundo do rect
    stroke('#74329a')//cor de borda do rect
    rect(xObstaculo3, yObstaculo3, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#74329a')//cor do texto
  text(result[3],230,370)
if(mouseIsPressed){
      tela=7
    }
    }//fim do resultado 3

//Botão resultado 4
//quando não passa o mouse:
    textAlign(LEFT)
    textSize(29)
    fill('#c2aef2')//cor de fundo do rect
    stroke('#683285')//cor de borda do rect
    rect(xObstaculo4, yObstaculo4, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#683285')//cor do texto
  text(soma[1],675,370)
    
    //quando passa o mouse:
    if(mouseX>xObstaculo4 && mouseX<xObstaculo4+largura && mouseY>yObstaculo4 && mouseY<yObstaculo4+altura){
    fill('#ea9010')//cor de fundo do rect
    stroke('#74329a')//cor de borda do rect
    rect(xObstaculo4, yObstaculo4, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#74329a')//cor do texto
  text(soma[1],675,370)
if(mouseIsPressed){
      pontos+=5
  tela=8
    }
    }//fim do resultado 4
  
    }//fim da fase 2
   
   
//FASE3
  if(fase==3){ 
      soma[2]= number[4]+number[5]
     fill('#87e752')//cor do texto
    noStroke()//sem borda no texto
    text(number[4]+"+"+number[5], 450,490)

//resultado1
//Botão resultado 1
//quando não passa o mouse:
    textAlign(LEFT)
    textSize(29)
    fill('#c2aef2')//cor de fundo do rect
    stroke('#683285')//cor de borda do rect
    rect(xObstaculo1, yObstaculo1, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#683285')//cor do texto
  text(result[6],230,170)
    
    //quando passa o mouse:
    if(mouseX>xObstaculo1 && mouseX<xObstaculo1+largura && mouseY>yObstaculo1 && mouseY<yObstaculo1+altura){
    fill('#ea9010')//cor de fundo do rect
    stroke('#74329a')//cor de borda do rect
    rect(xObstaculo1, yObstaculo1, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#74329a')//cor do texto
  text(result[6],230,170)
if(mouseIsPressed){
      tela=7
    }
    }//fim do resultado 1
  
//Botão resultado 2
//quando não passa o mouse:
    textAlign(LEFT)
    textSize(29)
    fill('#c2aef2')//cor de fundo do rect
    stroke('#683285')//cor de borda do rect
    rect(xObstaculo2, yObstaculo2, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#683285')//cor do texto
  text(soma[2],675,170)
    
    //quando passa o mouse:
    if(mouseX>xObstaculo2 && mouseX<xObstaculo2+largura && mouseY>yObstaculo2 && mouseY<yObstaculo2+altura){
    fill('#ea9010')//cor de fundo do rect
    stroke('#74329a')//cor de borda do rect
    rect(xObstaculo2, yObstaculo2, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#74329a')//cor do texto
  text(soma[2],675,170)
if(mouseIsPressed){
      pontos+=5
      tela=8
    }
    }//fim do resultado 2

//Botão resultado 3
//quando não passa o mouse:
    textAlign(LEFT)
    textSize(29)
    fill('#c2aef2')//cor de fundo do rect
    stroke('#683285')//cor de borda do rect
    rect(xObstaculo3, yObstaculo3, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#683285')//cor do texto
  text(result[7],230,370)
    
    //quando passa o mouse:
    if(mouseX>xObstaculo3 && mouseX<xObstaculo3+largura && mouseY>yObstaculo3 && mouseY<yObstaculo3+altura){
    fill('#ea9010')//cor de fundo do rect
    stroke('#74329a')//cor de borda do rect
    rect(xObstaculo3, yObstaculo3, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#74329a')//cor do texto
  text(result[7],230,370)
if(mouseIsPressed){
      tela=7
    }
    }//fim do resultado 3

//Botão resultado 4
//quando não passa o mouse:
    textAlign(LEFT)
    textSize(29)
    fill('#c2aef2')//cor de fundo do rect
    stroke('#683285')//cor de borda do rect
    rect(xObstaculo4, yObstaculo4, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#683285')//cor do texto
  text(result[8],675,370)
    
    //quando passa o mouse:
    if(mouseX>xObstaculo4 && mouseX<xObstaculo4+largura && mouseY>yObstaculo4 && mouseY<yObstaculo4+altura){
    fill('#ea9010')//cor de fundo do rect
    stroke('#74329a')//cor de borda do rect
    rect(xObstaculo4, yObstaculo4, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#74329a')//cor do texto
  text(result[8],675,370)
if(mouseIsPressed){
 
  tela=7
    }
    }//fim do resultado 4
  }//fim da fase3
  
  
//FASE4
if(fase==4){
      soma[3]= number[6]+number[7]
     fill('#87e752')//cor do texto
    noStroke()//sem borda no texto
    text(number[6]+"+"+number[7], 450,490) 
  
//resultado1
//Botão resultado 1
//quando não passa o mouse:
    textAlign(LEFT)
    textSize(29)
    fill('#c2aef2')//cor de fundo do rect
    stroke('#683285')//cor de borda do rect
    rect(xObstaculo1, yObstaculo1, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#683285')//cor do texto
  text(result[11],230,170)
    
    //quando passa o mouse:
    if(mouseX>xObstaculo1 && mouseX<xObstaculo1+largura && mouseY>yObstaculo1 && mouseY<yObstaculo1+altura){
    fill('#ea9010')//cor de fundo do rect
    stroke('#74329a')//cor de borda do rect
    rect(xObstaculo1, yObstaculo1, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#74329a')//cor do texto
  text(result[11],230,170)
if(mouseIsPressed){
      tela=7
    }
    }//fim do resultado 1
  
//Botão resultado 2
//quando não passa o mouse:
    textAlign(LEFT)
    textSize(29)
    fill('#c2aef2')//cor de fundo do rect
    stroke('#683285')//cor de borda do rect
    rect(xObstaculo2, yObstaculo2, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#683285')//cor do texto
  text(result[10],675,170)
    
    //quando passa o mouse:
    if(mouseX>xObstaculo2 && mouseX<xObstaculo2+largura && mouseY>yObstaculo2 && mouseY<yObstaculo2+altura){
    fill('#ea9010')//cor de fundo do rect
    stroke('#74329a')//cor de borda do rect
    rect(xObstaculo2, yObstaculo2, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#74329a')//cor do texto
  text(result[10],675,170)
if(mouseIsPressed){
     
      tela=7
    }
    }//fim do resultado 2

//Botão resultado 3
//quando não passa o mouse:
    textAlign(LEFT)
    textSize(29)
    fill('#c2aef2')//cor de fundo do rect
    stroke('#683285')//cor de borda do rect
    rect(xObstaculo3, yObstaculo3, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#683285')//cor do texto
  text(result[9],230,370)
    
    //quando passa o mouse:
    if(mouseX>xObstaculo3 && mouseX<xObstaculo3+largura && mouseY>yObstaculo3 && mouseY<yObstaculo3+altura){
    fill('#ea9010')//cor de fundo do rect
    stroke('#74329a')//cor de borda do rect
    rect(xObstaculo3, yObstaculo3, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#74329a')//cor do texto
  text(result[9],230,370)
if(mouseIsPressed){
      tela=7
    }
    }//fim do resultado 3

//Botão resultado 4
//quando não passa o mouse:
    textAlign(LEFT)
    textSize(29)
    fill('#c2aef2')//cor de fundo do rect
    stroke('#683285')//cor de borda do rect
    rect(xObstaculo4, yObstaculo4, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#683285')//cor do texto
  text(soma[3],675,370)
    
    //quando passa o mouse:
    if(mouseX>xObstaculo4 && mouseX<xObstaculo4+largura && mouseY>yObstaculo4 && mouseY<yObstaculo4+altura){
    fill('#ea9010')//cor de fundo do rect
    stroke('#74329a')//cor de borda do rect
    rect(xObstaculo4, yObstaculo4, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#74329a')//cor do texto
  text(soma[3],675,370)
if(mouseIsPressed){
 pontos+=5
  tela=8
    }
    }//fim do resultado 4
  
  }//fim da fase4
//FASE5
  if(fase==5){
      soma[4]= number[8]+number[9]
     fill('#87e752')//cor do texto
    noStroke()//sem borda no texto
    text(number[8]+"+"+number[9], 450,490)
    
//resultado1
//Botão resultado 1
//quando não passa o mouse:
    textAlign(LEFT)
    textSize(29)
    fill('#c2aef2')//cor de fundo do rect
    stroke('#683285')//cor de borda do rect
    rect(xObstaculo1, yObstaculo1, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#683285')//cor do texto
  text(result[14],230,170)
    
    //quando passa o mouse:
    if(mouseX>xObstaculo1 && mouseX<xObstaculo1+largura && mouseY>yObstaculo1 && mouseY<yObstaculo1+altura){
    fill('#ea9010')//cor de fundo do rect
    stroke('#74329a')//cor de borda do rect
    rect(xObstaculo1, yObstaculo1, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#74329a')//cor do texto
  text(result[14],230,170)
if(mouseIsPressed){
      tela=7
    }
    }//fim do resultado 1
  
//Botão resultado 2
//quando não passa o mouse:
    textAlign(LEFT)
    textSize(29)
    fill('#c2aef2')//cor de fundo do rect
    stroke('#683285')//cor de borda do rect
    rect(xObstaculo2, yObstaculo2, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#683285')//cor do texto
  text(result[13],675,170)
    
    //quando passa o mouse:
    if(mouseX>xObstaculo2 && mouseX<xObstaculo2+largura && mouseY>yObstaculo2 && mouseY<yObstaculo2+altura){
    fill('#ea9010')//cor de fundo do rect
    stroke('#74329a')//cor de borda do rect
    rect(xObstaculo2, yObstaculo2, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#74329a')//cor do texto
  text(result[13],675,170)
if(mouseIsPressed){
     
      tela=7
    }
    }//fim do resultado 2

//Botão resultado 3
//quando não passa o mouse:
    textAlign(LEFT)
    textSize(29)
    fill('#c2aef2')//cor de fundo do rect
    stroke('#683285')//cor de borda do rect
    rect(xObstaculo3, yObstaculo3, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#683285')//cor do texto
  text(soma[4],230,370)
    
    //quando passa o mouse:
    if(mouseX>xObstaculo3 && mouseX<xObstaculo3+largura && mouseY>yObstaculo3 && mouseY<yObstaculo3+altura){
    fill('#ea9010')//cor de fundo do rect
    stroke('#74329a')//cor de borda do rect
    rect(xObstaculo3, yObstaculo3, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#74329a')//cor do texto
  text(soma[4],230,370)
if(mouseIsPressed){
      tela=8
  pontos+=5
    }
    }//fim do resultado 3

//Botão resultado 4
//quando não passa o mouse:
    textAlign(LEFT)
    textSize(29)
    fill('#c2aef2')//cor de fundo do rect
    stroke('#683285')//cor de borda do rect
    rect(xObstaculo4, yObstaculo4, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#683285')//cor do texto
  text(result[12],675,370)
    
    //quando passa o mouse:
    if(mouseX>xObstaculo4 && mouseX<xObstaculo4+largura && mouseY>yObstaculo4 && mouseY<yObstaculo4+altura){
    fill('#ea9010')//cor de fundo do rect
    stroke('#74329a')//cor de borda do rect
    rect(xObstaculo4, yObstaculo4, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#74329a')//cor do texto
  text(result[12],675,370)
if(mouseIsPressed){
 
  tela=7
    }
    }//fim do resultado 4
    
  }//fim da fase5
//FASE6
  if(fase==6){
      soma[5]= number[10]+number[11]
     fill('#87e752')//cor do texto
    noStroke()//sem borda no texto
    text(number[10]+"+"+number[11], 450,490) 
    
    
//resultado1
//Botão resultado 1
//quando não passa o mouse:
    textAlign(LEFT)
    textSize(29)
    fill('#c2aef2')//cor de fundo do rect
    stroke('#683285')//cor de borda do rect
    rect(xObstaculo1, yObstaculo1, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#683285')//cor do texto
  text(soma[5],230,170)
    
    //quando passa o mouse:
    if(mouseX>xObstaculo1 && mouseX<xObstaculo1+largura && mouseY>yObstaculo1 && mouseY<yObstaculo1+altura){
    fill('#ea9010')//cor de fundo do rect
    stroke('#74329a')//cor de borda do rect
    rect(xObstaculo1, yObstaculo1, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#74329a')//cor do texto
  text(soma[5],230,170)
if(mouseIsPressed){
  tela=8
      pontos+=5
    }
    }//fim do resultado 1
  
//Botão resultado 2
//quando não passa o mouse:
    textAlign(LEFT)
    textSize(29)
    fill('#c2aef2')//cor de fundo do rect
    stroke('#683285')//cor de borda do rect
    rect(xObstaculo2, yObstaculo2, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#683285')//cor do texto
  text(result[17],675,170)
    
    //quando passa o mouse:
    if(mouseX>xObstaculo2 && mouseX<xObstaculo2+largura && mouseY>yObstaculo2 && mouseY<yObstaculo2+altura){
    fill('#ea9010')//cor de fundo do rect
    stroke('#74329a')//cor de borda do rect
    rect(xObstaculo2, yObstaculo2, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#74329a')//cor do texto
  text(result[17],675,170)
if(mouseIsPressed){
      tela=7
    }
    }//fim do resultado 2

//Botão resultado 3
//quando não passa o mouse:
    textAlign(LEFT)
    textSize(29)
    fill('#c2aef2')//cor de fundo do rect
    stroke('#683285')//cor de borda do rect
    rect(xObstaculo3, yObstaculo3, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#683285')//cor do texto
  text(result[16],230,370)
    
    //quando passa o mouse:
    if(mouseX>xObstaculo3 && mouseX<xObstaculo3+largura && mouseY>yObstaculo3 && mouseY<yObstaculo3+altura){
    fill('#ea9010')//cor de fundo do rect
    stroke('#74329a')//cor de borda do rect
    rect(xObstaculo3, yObstaculo3, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#74329a')//cor do texto
  text(result[16],230,370)
if(mouseIsPressed){
      tela=7
    }
    }//fim do resultado 3

//Botão resultado 4
//quando não passa o mouse:
    textAlign(LEFT)
    textSize(29)
    fill('#c2aef2')//cor de fundo do rect
    stroke('#683285')//cor de borda do rect
    rect(xObstaculo4, yObstaculo4, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#683285')//cor do texto
  text(result[15],675,370)
    
    //quando passa o mouse:
    if(mouseX>xObstaculo4 && mouseX<xObstaculo4+largura && mouseY>yObstaculo4 && mouseY<yObstaculo4+altura){
    fill('#ea9010')//cor de fundo do rect
    stroke('#74329a')//cor de borda do rect
    rect(xObstaculo4, yObstaculo4, largura, altura, 25)
    strokeWeight(4)//tamanho da borda do rect
//agora para o texto dentro do rect:
  noStroke()//sem borda no texto
  fill('#74329a')//cor do texto
  text(result[15],675,370)
if(mouseIsPressed){
      tela=7
    }
    }//fim do resultado 4
  
    
  }
  
  //Para o botão de voltar:
    //Quando não passa o mouse:
    fill(255)//cor do texto
    noStroke()//sem borda no texto
    text("Voltar", 20,490)
//Quando o mouse paassa por cima:
  if(mouseX>20 && mouseX<20+80 && mouseY>460 && mouseY<460+40){
    fill('#87e752')//cor do texto
    noStroke()//sem borda no texto
    text("Voltar", 20, 490)

    if(mouseIsPressed){
      tela=1
    }
  } //fim do botão de voltar

//animação
  tempo++
if(mouseX>40 && mouseX<800 && mouseY>60 && mouseY<420){
   image(img1[cont%8], mouseX-10,mouseY-20,90,90)
  if(tempo>5){
    cont++
    tempo=0
  }  
}//fim da animação

}//fim da tela 2
  
//Informações
if(tela==3){
  image(tela3,0,0,900,520)
 //Para o botão de voltar:
    //Quando não passa o mouse:
  fill('#7af461')//cor dentro do rect
    stroke('#753696')//cor da borda do rect
    rect(xMenu2, 440, 150, altura, 25)
    //Pro texto dentro do rect:
    fill('#7b2cbf')//cor do texto
    noStroke()//sem borda no texto
    text("Voltar", 30,480)
//Quando o mouse paassa por cima:
  if(mouseX>xMenu3 && mouseX<xMenu3+150 && mouseY>440 && mouseY<440+altura){
      fill('#ff9e00')//cor dentro do rect
    stroke('#753696')//cor da borda do rect
    rect(xMenu2, 440, 150, altura, 25)
    fill('#753696')//cor do texto
    noStroke()//sem borda no texto
    text("Voltar", 30,480)
    if(mouseIsPressed){
      tela=1
    }
  }
}  
//Créditos
if(tela==4){
  //Título
    image(tela4,0,0,900,520)
   //Para o botão de voltar:
    //Quando não passa o mouse:
  fill('#7af461')//cor dentro do rect
    stroke('#753696')//cor da borda do rect
    rect(xMenu2, 440, 150, altura, 25)
    //Pro texto dentro do rect:
    fill('#7b2cbf')//cor do texto
    noStroke()//sem borda no texto
    text("Voltar", 30,480)
//Quando o mouse paassa por cima:
  if(mouseX>xMenu3 && mouseX<xMenu3+150 && mouseY>440 && mouseY<440+altura){
      fill('#ff9e00')//cor dentro do rect
    stroke('#753696')//cor da borda do rect
    rect(xMenu2, 440, 150, altura, 25)
    fill('#753696')//cor do texto
    noStroke()//sem borda no texto
    text("Voltar", 30,480)
    if(mouseIsPressed){
      tela=1
    }
  } //fim do botão de voltar
    
} 
//Tela ganhou
if(tela==5){
  background(0,0,0)
    image(ganhou,0,0,900,520)
}
//Tela errou
if(tela==7){
  background(0,0,0)
  image(errou,0,0,900,520)
  fill('#ff9e00')//cor do texto
    noStroke()//sem borda no texto
    text("ERROUUUU", 200,200)
  //Para o botão de voltar:
    //Quando não passa o mouse:
  fill('#7af461')//cor dentro do rect
    stroke('#753696')//cor da borda do rect
    rect(xMenu4, 440, 150, altura, 25)
    //Pro texto dentro do rect:
    fill('#7b2cbf')//cor do texto
    noStroke()//sem borda no texto
    text("Voltar", xMenu4+30,480)
//Quando o mouse paassa por cima:
  if(mouseX>xMenu4 && mouseX<xMenu4+150 && mouseY>440 && mouseY<440+altura){
      fill('#ff9e00')//cor dentro do rect
    stroke('#753696')//cor da borda do rect
    rect(xMenu4, 440, 150, altura, 25)
    fill('#753696')//cor do texto
    noStroke()//sem borda no texto
    text("Voltar", xMenu4+30,480)
    if(mouseIsPressed){
      tela=2
    }
  } //fim do botão de voltar
}
//tela acertou
if(tela==8){
  background(0,0,0)
  image(acertou,0,0,900,520)
    //Para o botão de voltar:
    //Quando não passa o mouse:
  fill('#7af461')//cor dentro do rect
    stroke('#753696')//cor da borda do rect
    rect(xMenu4, 440, 150, altura, 25)
    //Pro texto dentro do rect:
    fill('#7b2cbf')//cor do texto
    noStroke()//sem borda no texto
    text("Voltar", xMenu4+30,480)
//Quando o mouse paassa por cima:
  if(mouseX>xMenu4 && mouseX<xMenu4+150 && mouseY>440 && mouseY<440+altura){
      fill('#ff9e00')//cor dentro do rect
    stroke('#753696')//cor da borda do rect
    rect(xMenu4, 440, 150, altura, 25)
    fill('#753696')//cor do texto
    noStroke()//sem borda no texto
    text("Voltar", xMenu4+30,480)
    if(mouseIsPressed){
      tela=2
    }
  } //fim do botão de voltar
}
}//fim