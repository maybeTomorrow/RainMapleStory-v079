/*
*   矿产大亨
*   By: Razoer·瞌睡鱼               如果需要改动，请自行修改，请保留本人创意提名~
*/

var status = 0;

var needItem=[
4000035,
4000003,
4000022,
4000008,
4000036,
4000041,
4000059,
4000107,
4000234,
4000233,
4000232,
4000172,
4000241,
4000268,
4000001,
4000052,
 ];

var gotItem=[
4010000,
4010001,
4010002,
4010003,
4010004,
4010005,
4010006,
4020000,
4020001,
4020002,
4020003,
4020004,
4020005,
4020006,
4020007,
4020008,

]

var finalSelect;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
        var ask="你好， #b#h ##k,你可以拿战利品兑换矿石。\r\n"

        for(var k=0;k<needItem.length;k++){
           ask+="\r\n#L"+k+"# #i"+needItem[k]+"#   #t"+needItem[k]+"# 兑换 #i"+gotItem[k]+"#   #t"+gotItem[k]+"  \r\n";
        }
            cm.sendSimple (ask)
        } else if (status == 1) {
             var txt="你想用 #i"+needItem[selection]+"#   #t"+needItem[selection]+"# 兑换 #i"+gotItem[selection]+"#   #t"+gotItem[selection]+" 是吗？输入你要兑换的数量"
             finalSelect=selection
             cm.sendGetNumber(txt,1,1,999999999);
        } else if (status == 2){

             if(cm.haveItem(needItem[finalSelect],selection)){
                 cm.gainItem(needItem[finalSelect], -selection);
                 cm.gainItem(gotItem[finalSelect], selection);
                 cm.sendOk("合作愉快!");
                 cm.dispose();
             }else{

              cm.sendOk("您貌似没有所需要的材料");
              cm.dispose();
             }
        }
    }
}

