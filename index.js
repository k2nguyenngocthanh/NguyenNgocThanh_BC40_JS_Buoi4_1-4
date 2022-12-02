function Sapxep(){
    var somotEL=document.getElementById("so-thu-nhat").value*1;
    var sohaiEL=document.getElementById("so-thu-hai").value*1;
    var sobaEL=document.getElementById("so-thu-ba").value*1;

    var sapxepEl;
 
 

    if(somotEL>sohaiEL && somotEL>sobaEL)
    {
        if(sohaiEL>sobaEL)
        {
        sapxepEl=document.getElementById("result").innerHTML=`<h2 class="mt-5 text-danger text-center">
        Số thứ tự được sắp xếp theo chiều tăng dần là :
        ${(sobaEL + "," + sohaiEL + "," + somotEL )} </h2>`;
        }
        else{
            sapxepEl=document.getElementById("result").innerHTML=`<h2 class="mt-5 text-danger text-center">
            Số thứ tự được sắp xếp theo chiều tăng dần là :
            ${(sohaiEL + "," + sobaEL + "," + somotEL )} </h2>`;
        }
    }

    else if(sohaiEL>somotEL && sohaiEL>sobaEL)
    {
        if(sobaEL>somotEL){
            sapxepEl=document.getElementById("result").innerHTML=`<h2 class="mt-5 text-danger text-center">
            Số thứ tự được sắp xếp theo chiều tăng dần là :
            ${(somotEL + "," + sobaEL + "," + sohaiEL )} </h2>`;
            }
            else{
                sapxepEl=document.getElementById("result").innerHTML=`<h2 class="mt-5 text-danger text-center">  Số thứ tự được sắp xếp theo chiều tăng dần là :${(sobaEL + "," + somotEL + "," + sohaiEL )} </h2>`;
            }

    }

    else if(sobaEL>somotEL && sobaEL>sohaiEL)
    {
        if(sohaiEL>somotEL){
            sapxepEl=document.getElementById("result").innerHTML=`<h2 class="mt-5 text-danger text-center">
            Số thứ tự được sắp xếp theo chiều tăng dần là :
            ${(somotEL + "," + sohaiEL + "," + sobaEL )} </h2>`;
            }
            else{
                sapxepEl=document.getElementById("result").innerHTML=`<h2 class="mt-5 text-danger text-center">
                Số thứ tự được sắp xếp theo chiều tăng dần là :${(sohaiEL + "," + somotEL + "," + sobaEL )} </h2>`;
            }

    }

    
}
/*----------------Bài 2----------------*/
function guiLoiChao(){
    var chaothanhvien = document.getElementById('thanh-vien').value*1;

    switch(chaothanhvien){

        case 1:
            document.getElementById("chao").innerHTML=`<h2 class="mt-5 text-danger text-center">Xin chào bố </h2>`;
            break;
        case 2:
            document.getElementById("chao").innerHTML=`<h2 class="mt-5 text-danger text-center">Xin chào mẹ </h2>`;
            break;
        case 3:
            document.getElementById("chao").innerHTML=`<h2 class="mt-5 text-danger text-center">Xin chào anh trai </h2>`;
            break;
        case 4:
            document.getElementById("chao").innerHTML=`<h2 class="mt-5 text-danger text-center">Xin chào em gái </h2>`;
            break;
        default:
            document.getElementById("chao").innerHTML=`<h2 class="mt-5 text-danger text-center">Xin chào người lạ </h2>`;

    }
}


/*----------------Bài 3----------------*/
function Dem(){
    var x=document.getElementById("mot").value*1;
    var y=document.getElementById("hai").value*1;
    var z=document.getElementById("ba").value*1;

    var DemsochanEL=0;
    

    if(x%2==0){
        DemsochanEL++;
    }
     if(y%2==0){
        DemsochanEL++;
    }
     if(z%2==0){

        DemsochanEL++;
    }

    
    var DemsoleEL=3-DemsochanEL;
    console.log("🚀 ~ file: index.js:75 ~ Dem ~ DemsoleEL", DemsoleEL)
    

    var DemEL = document.getElementById("demso").innerHTML=`<h2 class="mt-5 text-danger text-center">Có: ${DemsochanEL} số chẵn <br />
    Có:${DemsoleEL} số lẻ
    </h2>`;
}

/*----------------Bài 4----------------*/
function Kiemtra(){
    var a=document.getElementById("canhmot").value*1;
    var b=document.getElementById("canhhai").value*1;
    var c=document.getElementById("canhba").value*1;

    var kiemtraEL;

    if(a + b <= c || a + c <= b ||  b + c <= a){
        kiemtraEL=document.getElementById("kt").innerHTML=`<h2 class="mt-5 text-danger text-center">
        Tam giác không hợp lệ xin kiểm tra lại</h2>`;
    }
    else if((a==b)&&(b==c)){
        kiemtraEL=document.getElementById("kt").innerHTML=`<h2 class="mt-5 text-danger text-center">
        Đây là tam giác đều </h2>`;
    }
      
			
    else if(a == b || a == c || b == c){
        kiemtraEL=document.getElementById("kt").innerHTML=`<h2 class="mt-5 text-danger text-center">
                Đây là tam giác cân </h2>`;
    }
    else if(a*a==b*b+c*c || b*b==a*a+c*c || c*c== a*a+b*b){   
        kiemtraEL=document.getElementById("kt").innerHTML=`<h2 class="mt-5 text-danger text-center">
                Đây là tam giác vuông</h2>`;
    }
    else{
        kiemtraEL=document.getElementById("kt").innerHTML=`<h2 class="mt-5 text-danger text-center">
        Đây là tam giác khác </h2>`;

    }
}