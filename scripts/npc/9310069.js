/*
*   ������
*   By: Razoer���˯��               �����Ҫ�Ķ����������޸ģ��뱣�����˴�������~
*/

var status = 0;

var needItem=[
4000270,
4000269,
4000268,
4000035,
4000003,
4000036,
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
4010005,
4010002,
4010003,
4010000,
4010001,
4010004,
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
var changeItem;

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
        var ask="��ã� #b#h ##k,�������ս��Ʒ�һ���ʯ��\r\n"
        for(var k=0;k<needItem.length;k++){
           ask+="\r\n#L"+k+"# #i"+needItem[k]+"#   #t"+needItem[k]+"# �һ� #i"+gotItem[k]+"#   #t"+gotItem[k]+"  \r\n";
        }
          cm.sendSimple(ask)
        } else if (status == 1) {
           finalSelect=selection;
          var ask="";
               ask+="#L1#����#i"+needItem[finalSelect]+"# #t"+needItem[finalSelect]+"#\r\n"
               ask+="#L2#�������Ҫ˫��������껻�Ļ���ѡ������\r\n"
                 ask+="#L3#�������Ҫ˫��������Ƭ���Ļ���ѡ������\r\n"
              cm.sendSimple(ask)

        } else if(status==2){
                         if(selection==2){
                             changeItem=4000244;
                         }else if (selection==3){
                             changeItem=4000245;
                         } else{
                         changeItem=needItem[finalSelect]
                      }
                      var txt="������ #i"+changeItem+"#   #t"+changeItem+"# �һ� #i"+gotItem[selection]+"#   #t"+gotItem[selection]+" ����������Ҫ�һ�������"
                      cm.sendGetNumber(txt,1,1,999999999);
        }else if (status == 3){
             if(cm.haveItem(changeItem,selection)){
                 cm.gainItem(changeItem, -selection);
                 cm.gainItem(gotItem[finalSelect], selection);
                 cm.sendOk("�������!");
                 cm.dispose();
             }else{

              cm.sendOk("��ò��û������Ҫ�Ĳ���");
              cm.dispose();
             }
        }
    }
}

