var status;
var check;

function start() {
    status = -1;
    cm.sendSimple("我可以告诉你些冒险者的技巧唷!!\r\n#L0##进入商城？#l\r\n#L1#查看爆物品的怪物？#l\r\n#L2#给个东西？#l\r\n#L3#当我死掉会发生什么事情？#l\r\n#L4#我何时能选择职业？#l\r\n#L5#告诉我有关这个岛屿！#l\r\n#L6#我要怎么做才能成为战士？#l\r\n#L7#我要怎么做才能成为弓箭手？#l\r\n#L8#我要怎么做才能成为魔法师？#l\r\n#L9#我要怎么做才能成为盗贼？#l\r\n#L10#怎么提升能力值？(S)#l\r\n#L11#我要怎么确认我捡起来的物品呢？#l\r\n#L12#我要怎么装备物品？#l\r\n#L13#我要怎么确认我身上已经装备的物品？#l\r\n#L14#什么是技能？(K)#l\r\n#L15#我要怎么前往维多利亚岛？#l\r\n#L16#金币是什么？#l#k");
}



function action(mode, type, selection) {
    if(status==-1){
        check=selection
        if(selection==0){
        		cm.EnterCS(0);
            	cm.dispose();
        }else if (selection==1){
           cm.sendGetNumber("请输入物品的id.",1,1,999999999);
        }else if (selection==2){
            cm.gainItem(4031794,1);
             cm.dispose();
        }else{
             cm.sendOk("参数是"+mode+","+type+","+selection)
            cm.dispose();
        }
    }else if(status==0){
       if(check==1){
           cm.getMobs(selection)
       }

    }else if(status==1){
      cm.sendOk("参数是"+mode+","+type+","+selection)
       cm.dispose();
    }
    status++

}






