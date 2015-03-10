$(function(){
 u=['QHpgL']
 $('<audio id=Hover src=high.ogg></audio>').appendTo('body')
 $("#Hover")[0].play()
 $("<input type='button' id='SolveNow' class='Solve' value='SolveNow'>").appendTo('center');
 $('#SolveNow')[0].setAttribute('style','background-image:-webkit-radial-gradient(circle, #660000, black); position:relative; font-size:200%;');
 $('center').append('<br><br>');
 $('<input class="R" align="left" id="SCubed" type="text" readonly>______<input class="G" align="left" id="SSquared" type="text" readonly>______<input align="left" id="SROne" type="text" readonly>_______<input class="A" id="SRTen" type="text" readonly><br><br/>').appendTo('center');
 $("<div class='divfern'><br></div>").appendTo('center');
 Tov=['v1', 'v2', 'TA', 'Cubed', 'TB', 'Squared', 'TC', 'TConstant'];
 $('#SolveNow').on('click',
  function(){
   if (this.value==='SolveNow' || this.value==='A Resolver Se Dijo'){
    Tv=[v1.value, v2.value, TA.value, Cubed.value, TB.value, Squared.value, TC.value, TConstant.value];
    SSquared.style.width=SCubed.style.width=SROne.style.width=SRTen.style.width=Half.style.width=v2.style.width=v1.style.width='14.5%';
    $(this)[0].style.webkitTransform='rotateX(360deg)';
    if (this.value==='SolveNow'){
     $(this)[0].value='Erase';
    }else{
     $(this)[0].value='Borron y Cuenta Nueva';
    }
    BunchOrBundle();
   }else{
    Vacuum_Cleaner();
    SSquared.style.width=SCubed.style.width=SROne.style.width=SRTen.style.width=Half.style.width=v2.style.width=v1.style.width='5%';
    SSquared.value=SCubed.value=SROne.value=SRTen.value=Half.value='';
    v1.value=Tv[0]; v2.value=Tv[1];
    $Number = 2;
    do{
     if ($('#'+Tov[$Number])[0].value !== Tv[$Number]){
      $('#'+Tov[$Number])[0].value = Tv[$Number]; //alert(Tv[$Number]);
     }
     $Number++;
    }while($Number<8)
    $(this)[0].style.webkitTransform='rotateX(-360deg)';
    if (this.value==='Erase'){
     $(this)[0].value='SolveNow';
    }else{
     this.value='A Resolver Se Dijo';
    }
   }
  }
 );
 v=['1','2',' is x = (V1+V2) / 2','\u0192(x)','i'];
 L=['12.5','32.1','49.3','66','76'];
 ids=['owe','when','too','thread','forth'];
 ar=['A','B','x','rv'];
 Symbols=[' +',' = x',' =>',' '];
 $l=0;
 do{
  $ar = ar[$l];
  if ($l<2){v[$l]='Value'+v[$l];}
  if ($l===2){v[$l]='mean'+v[$l];}
  $('<span id='+ids[$l]+' style="float:left; position:relative; left:'+L[$l]+'%;">'+v[$l]+'</span>').appendTo('.divfern');
  $l++;
 }while($l<5)
 $Sco = 200; $Eco = 0;
 for($j=1;$j<31;$j++){
  $('<br>').appendTo('.divfern');
  $l=0;
  do{
   $r = 'rotate';
   $t = Symbols[$l];
   if ($l===1 || $l === 3){if ($j<10){$t+='0';} $t+=$j;}
   $ar = ar[$l]; $id = "'#"+$ar+$j+"'";
   if ($ar==='A'){
    $r+='3D'; $Sco='3,5,-10,200'; $Eco='0,0,0,0';
   }else if ($ar==='x'){
    $r+='X';
   }else if ($ar==='rv'){
    $r+='Y';
   }else{
    $Sco = 200; $Eco = 0;
   }
   $rot = "'"+$r+"("+$Sco+"deg)'"; $ro = "'"+$r+"("+$Eco+"deg)'";
   $('<input type=text id='+$ar+$j+' onmousemove="$('+$id+')[0].style.webkitTransform='+$rot+'; setTimeout(function(){$('+$id+')[0].style.webkitTransform='+$ro+'},1000);"><span>'+$t+' </span>').appendTo('.divfern');
   $l++;
  }while($l<4)
 }
 $('input').hover(function(){$('#Hover')[0].play();},function(){$('#Hover')[0].pause(); $('#Hover')[0].currentTime = 0;});
 $("img:not(#Idioms)").hover(
  function(){
    $i = 1;
    do{
   $o = "rotate("+$i+"deg)";
   $u = "scale("+($i/1.3)+") skew(0deg)";
   this.style.webkitTransform=$u;
   $i++;
    }while($i<=2)
  }
 ,
  function(){
    $i = 1;
    do{
   $o = "rotate("+$i+"deg)";
    $('img:not(#Idioms):not(.info img)')[0].style.webkitTransform=$o;
   $i++;
    }while($i<=45)
  }
 );
 $('.Images').on('click',
  function(){
   $('.Images img').slideToggle('slow');
  }
 );
 $("#chckbx").hover(function(){this.style.webkitTransform="rotate3D(1, -1, 1, 180deg)";},function(){this.style.webkitTransform="rotate3d(1, -1, 1, 0deg)";});
 $("#lbl").on("click",
  function(){
   if (chckbx.style.webkitTransform === "rotate3D(5, -10, 1, 0deg)"){
    chckbx.style.webkitTransform="rotate3D(1, -1, 1, 1440deg)";
   }else{
    chckbx.style.webkitTransform="rotate3D(5, -10, 1, 0deg)";
   }
  }
 );
 $("#lbl").hover(function(){chckbx.style.webkitTransform="rotate3D(1, -1, 1, 180deg)";},function(){chckbx.style.webkitTransform="rotate3D(1, -1, 1, 0deg)";});
 $(".Solve").hover(
  function(){
   $(this).css('background-image','-webkit-radial-gradient(circle, brown, black)');
  }
 ,
  function(){
   $(this).css('background-image','-webkit-radial-gradient(circle, #660000, black)');
  }
 );
 $IF=' if x1 < x2 and if \u0192(x1)'; $SI=' Si x1 < x2 y \u0192(x1) ';
 $Grtr=' > '; $Lssthn=' < ';
 $F2=' \u0192(x2) ';
 $PhraseU = $IF+$Lssthn+$F2; $FraseA=$SI+$Lssthn+$F2;
 $PhraseD = $IF+$Grtr+$F2; $FraseAb=$SI+$Grtr+$F2;
 $Ento = 'then we can say that\u00B4s going '; $Ent = 'Entonces decimos que va hacia ';
 $PthU = $PhraseU+$Ento; $PtA = $FraseA+$Ent;
 $PthD = $PhraseD+$Ento; $PtAb = $FraseAb+$Ent;
 $U = 'Up or Increasing '; $Dow = 'Down or Decreasing ';
 $Aba = 'Abajo o Descendiendo ';
  $Down = $PthD+$Dow; $Abajo = $PtAb+$Aba;
  $Arri = 'Arriba o Incrementando ';
  $Up = $PthU+$U; $Arriba = $PtA+$Arri;
 url='up down x'.split(' '); ID=['1','2'];
 $("<div class=info style='border:3px groove orangered;font-size:22px;position:fixed;left:9%;top:15%;background-image:-webkit-radial-gradient(circle, black, grey, whitesmoke, black);visibility:hidden;-webkit-border-radius:30%'>\n\
  <span id=spO>"+$Up+"</span>\n\
   <img id=close src=img/x.jpg style='-webkit-transform:rotate(0deg);border:5.5px double lightgrey;height:2%;width:3%;left:20%;' title=close><br>\n\
  <span id=spT>"+$Down+"</span>\n\
  </div>").appendTo('center');
 $('#close').on('click',
  function(){
   $('.info')[0].style.display='none'});
 $T=['Increasing','Decreasing'];Fl=['left','center'];
 for(i=0;i<2;i++){
  $images = '<img src=img/'+url[i]+'.jpg id=IMG'+ID[i]+' title='+$T[i]+' style=float:'+Fl[i]+';>';
  $('.info').append($images)}
 spO.style.visibility=spT.style.visibility='hidden';
 $('.info span').css('background-image','-webkit-linear-gradient(darkgray, grey, lightblue)');
 $('.info img').css('-webkit-border-radius','50%');
 $('.info img').hover(
  function(){
   $(this)[0].style.webkitTransform="scale(1.5)";
  }
 ,
  function(){
   $(this)[0].style.webkitTransform='scale(1)';
  }
 );
 function Vis ($N){
  $N.style.visibility='hidden';
  $N.style.webkitBoxShadow='0px 0px 0px whitesmoke';
 }
 $('#IMG1').hover(
  function(){
   Vis(spT);
   $('#spO').css('visibility','visible');
   $('#spO').css('-webkit-box-shadow','0px 0px 30px whitesmoke');
  }
 );
 $('#IMG2').hover(
  function(){
   Vis(spO);
   $('#spT').css('visibility','visible');
   $('#spT').css('-webkit-box-shadow','0px 0px 30px whitesmoke');
  }
 );
 $Me = 'Luis Fernando Avila Suarez';
 $fu = "\u0192(x)'";
 $('#Idioms').on('click',
  function(){
   if(SolveNow.value==='SolveNow' || SolveNow.value==='A Resolver Se Dijo' ){
    if (SolveNow.value==='SolveNow'){
     SolveNow.value='A Resolver Se Dijo'; //alert('AResolverSeDijo');
    }else{
     SolveNow.value='SolveNow';
    }
   }else{
    if (SolveNow.value==='Erase'){
     SolveNow.value='Borron y Cuenta Nueva';
    }else{
     SolveNow.value='Erase'; //alert('Erase');
    }
   }
   if (this.style.left!=='0%'){
    this.style.left='0%';
    this.setAttribute('src','img/CO.jpg');
    if(Side.value==='Up'){
     Side.value='Arriba';
    }else{
     Side.value='Abajo';
    }
    Explanation.value='Leer Explicaci\u00F3n';
    Half.placeholder='mitad';
      lasf.innerHTML='M\u00E9todo de bisecci\u00F3n - Buscando la raiz de \u0192(x) por: '+$Me;
    Career.innerHTML='de Ingenieria de Sistemas';
    BM.title='Metodo de Bisecci\u00F3n';
    lbl.innerHTML='Quiero ver el Paso a Paso';
    owe.innerHTML='Valor1';
    when.innerHTML='Valor2';
    too.innerHTML='mitad es x = (V1+V2) / 2';
    forth.innerHTML='R';
    spO.innerHTML=$Arriba;
    spT.innerHTML=$Abajo;
    Dire.innerHTML='la direcci\u00F3n de la funci\u00F3n va hacia ';
   }else{
    this.style.left='95.1%';
    this.setAttribute('src','img/UK.jpg');
    if (Side.value==='Arriba'){
     Side.value='Up';
    }else{
     Side.value='Down';        
    }
    Explanation.value='Read Explanation';
    Half.placeholder='mean';
     lasf.innerHTML='Bisection Method - Fetching some '+$fu+'s Root By: '+$Me;
    Career.innerHTML='From Engineering Systems';
    if (BM.title!=='Bisection Method'){BM.title='Bisection Method';}
    lbl.innerHTML='I Wanna see Step by Step';
    owe.innerHTML=v[0];
    when.innerHTML=v[1];
    too.innerHTML=v[2];
    forth.innerHTML=v[4];
    spO.innerHTML=$Up;
    spT.innerHTML=$Down;
    Dire.innerHTML='Function\u0027s Direction Goes ';
   }
  }
 );
});
