var HK="IDoNot";
function Checked(){if(HK==="IWanna"){HK="IDoNot";}else{HK="IWanna";}}
/*function MS(){alert("MS = "+HK);}*/
 function BunchOrBundle(){
    var LastX; ab=['A','B','rv','x'];
    x1.value=Half.value=Halfunction();
    for (var h=1;h<31;h++){SCube();
        var SRO=parseFloat(SROne.value), SRT=parseFloat(SRTen.value);
        SRO=db*parseFloat(TC.value);if(SS.value==="-"){SRO=SRO*(-1);};SROne.value=SRO;
        SRT = parseFloat(TConstant.value);if(ThS.value==="-"){SRT=SRT*(-1);};SRTen.value=SRT;
        LastX = parseFloat(SCubed.value)+parseFloat(SSquared.value)+parseFloat(SROne.value)+parseFloat(SRTen.value);
        $Ct = 0; Txs=[v1.value,v2.value,LastX];
        do{
            $('#'+ab[$Ct]+h)[0].value = Txs[$Ct]; $Ct++;
//            $('#'+ab[$Ct]+h)[0].style.display='inline';
        } while ($Ct<3)
        if (h<30){
            T(LastX,h);
            $('#'+ab[$Ct]+(h+1))[0].value=Halfunction();
        }
    }
}
function SCube(){var A=parseFloat(TA.value), B=db=parseFloat(Half.value),C=parseFloat(Cubed.value);
   for (var i=1;i<3;i++){
       for (var k=1;k<C;k++){B*=db;}
       A*=B;
       if (i===1){SCubed.value=A;A=parseFloat(TB.value); B=db; C=parseFloat(Squared.value);
       }else{var SSq=SSquared.value=A;if(FS.value==="-"){SSq=SSq*(-1);};SSquared.value=SSq;}}
}
function Halfunction(){var h=Half.value=(parseFloat(v1.value)+parseFloat(v2.value))/2;return h;}
function T(LastX,h){
    var ex=Half.value,E=' \u2252 ',Dash="__________________________";
    if (HK==="IWanna"){
        if(Half.placeholder==='mean'){
            if (h<2){alert('You\u2019ll Notice the Usage of Mathematical Operator \u2252 which means: Approximately Equal to or The Image of');}
            alert("Iteration N\u00B0"+h+"\n"+"\n\Mean between ("+v1.value+" And "+v2.value+") ----> is x"+h+E+Half.value+"  \n\and if we replace that mean into Formula\n\ \u0192("
                +Half.value+")"+E+LastX+"\n\How or Why? Just look at this \n"+Dash+Dash+
                "\n\ \u0192( "+TA.value+"("+ex+")^"+Cubed.value+" "+FS.value+" "+TB.value+"("+ex+")^"+Squared.value+" "+SS.value+" "+TC.value+"("+ex+") "+ThS.value+TConstant.value+")"+E+LastX+"\n"
                +"\n"+TA.value+"x^"+Cubed.value+E+SCubed.value+"\n"
                +FS.value+TB.value+"x^"+Squared.value+E+SSquared.value+"\n"
                +SS.value+TC.value+"x"+E+SROne.value+"\n"
                +ThS.value+TConstant.value
            );
        }else{
            if (h<2){alert('A continuaci\u00F3n Ud. ver\u00E1 el Uso del Operador Matem\u00E1tico \u2252 que significa: aproximadamente igual a o la viva imagen de');}
            alert("Repetici\u00F3n N\u00B0"+h+"\n"+"\n\Mitad entre ("+v1.value+" & "+v2.value+") ----> es x"+h+E+Half.value+"  \n\Y si reemplazamos esa mitad en la funci\u00F3n \n\ \u0192("
                +Half.value+")"+E+LastX+"\n\C\u00F3mo o Por qu\u00E9? Echale un vistazo a \u00E9sto \n"+Dash+Dash+
                "\n\ \u0192( "+TA.value+"("+ex+")^"+Cubed.value+" "+FS.value+" "+TB.value+"("+ex+")^"+Squared.value+" "+SS.value+" "+TC.value+"("+ex+") "+ThS.value+TConstant.value+")"+E+LastX+"\n"
                +"\n"+TA.value+"x^"+Cubed.value+E+SCubed.value+"\n"
                +FS.value+TB.value+"x^"+Squared.value+E+SSquared.value+"\n"
                +SS.value+TC.value+"x"+E+SROne.value+"\n"
                +ThS.value+TConstant.value
            );
        }
    }
    if (Side.value==="Up" || Side.value==="Arriba" ){
        if (LastX>0){
             v2.value=Half.value;
        }else{
             v1.value=Half.value;}
    }else{
        if (LastX<0){
            v2.value=Half.value;
        }else{
            v1.value=Half.value;}
    }
}
function UpSideDown(){
    if (Side.value==='Up' || Side.value==='Arriba'){
        if (Side.value==="Up"){
            Side.value='Down';
        }else{
            Side.value='Abajo';                        
        }
    }else{
        if (Side.value==="Down"){
            Side.value='Up';
        }else{
            Side.value='Arriba';
        }
    }
}
function OnOff($th) {$th.style.position='relative'; if ($th.style.background === 'transparent'){$th.style.background = 'radial-gradient(circle, yellowgreen, forestgreen)'; $th.style.left='14.5%';}else{$th.style.background='transparent'; $th.style.left='-.15%';}}
function CS(){if (FS.value === '+'){FS.value = '-';}else{FS.value = '+';}}
function CS2(){if (SS.value === '+'){SS.value = '-';}else{SS.value = '+';}}
function CS3(){if (ThS.value === '+'){ThS.value = '-';}else{ThS.value = '+';}}
function RULES(){
    if ($('.info')[0].style.display==='none'){
        $('.info')[0].style.display='block';
    }
    if ($('.info')[0].style.visibility==='hidden'){
        $('.info')[0].style.visibility='visible';
    }
}
function Vacuum_Cleaner(){
    $('.divfern input').val('');
}
