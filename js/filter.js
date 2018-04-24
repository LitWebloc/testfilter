var goods = {
    "111":{
        "name": "Товар 1",
        "coins":"22",
        "color":"red",
        "brend":"Adidas"
    },
    "116":{
        "name": "Товар 1",
        "coins":"30",
        "color":"blue",
        "brend":"Adidas"
    },
    "112":{
        "name": "Товар 2",
        "coins":"23",
        "color":"blue",
        "brend":"Picaso"
    },
    "113":{
        "name": "Товар 3",
        "coins":"23",
        "color":"Green",
        "brend":"Lamoda"
    },
    "114":{
        "name": "Товар 4",
        "coins":"25",
        "color":"blue",
        "brend":"Picaso"
    },
    "115":{
        "name": "Товар 5",
        "coins":"25",
        "color":"Green",
        "brend":"Picaso"
    }
}
var b, r, g, dof, ot, adidas, lamoda, picaso;
console.log(goods);
console.log(ot, dof, red, green, blue);
function Filter(){
    ot = $("#ot").val();
    dof = $("#dof").val();
    b="null";
    r="null";
    g="null";
    picaso="null";
    lamoda="null";
    adidas="null";
    if(dof==0){
        dof=100;
    }
    if($("#red").prop("checked")){
        r="red";
    }
    if($("#blue").prop("checked")){
        b="blue";
    }
    if($("#green").prop("checked")){
        g="Green";
    }
    if($("#picaso").prop("checked")){
        picaso="Picaso";
    }
    if($("#lamoda").prop("checked")){
        lamoda="Lamoda";
    }
    if($("#adidas").prop("checked")){
        adidas="Adidas";
    }
    var out ='';    
    console.log(ot, dof, r, g, b);
    for (var key in goods){
        if(goods[key].coins>=ot && goods[key].coins<=dof){
            if(goods[key].color==g || goods[key].color==b || goods[key].color==r){
               if(goods[key].brend==lamoda || goods[key].brend==adidas  || goods[key].brend==lamoda || goods[key].brend==picaso){
                out+='<div class="fi '+goods[key].color+'">'+goods[key].name+'<br>';
                out+=goods[key].coins+'<br>';
                out+=goods[key].color+'<br>';
                out+=goods[key].brend+'</div>';}
               }
        }
    }
    $(".text").html(out);
}