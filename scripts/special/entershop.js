var status;
var check;
var wea=[-11,-106,-1,-8,-7,-9,-5,-17]


var fastmap=[280030000,220080001,910500200]
var fastmaptitle=["扎昆祭坛","帕普帕斯boss","遗忘的圣殿"]

function start() {
    status = -1;
    cm.sendSimple("我可以告诉你些冒险者的技巧唷!!\r\n#L0##进入商城？#l\r\n#L1#查看爆物品的怪物？#l\r\n#L2#给个东西？#l\r\n#L3#宠物排除道具？#l\r\n#L4#查看怪物爆率？#l\r\n#L5#武器的等级情况#l\r\n#L6#飞去打扎昆？#l\r\n#L7#快速商店？#l\r\n#L8#测试飞图？#l\r\n#L9#我要怎么做才能成为盗贼？#l\r\n#L10#怎么提升能力值？(S)#l\r\n#L11#我要怎么确认我捡起来的物品呢？#l\r\n#L12#我要怎么装备物品？#l\r\n#L13#我要怎么确认我身上已经装备的物品？#l\r\n#L14#什么是技能？(K)#l\r\n#L15#我要怎么前往维多利亚岛？#l\r\n#L16#金币是什么？#l#k");
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
            cm.gainItem(4000313,500);
             cm.dispose();
        }else if (selection==3){
             //cm.showExcludeItem();
             var list=cm.getPlayer().getPet(0).getExcludedTotal()
             var txt=""
             var c=0
             for(var k=0;k<list.length;k++){

                if(list[k]>0){
                if(list[k]>1000000000){
                  txt+="\r\n#L"+k+"# 金币 \r\n";
                 }else{
                   txt+="\r\n#L"+k+"# #i"+list[k]+"#   #t"+list[k]+"# \r\n";
                 }

                 c++;
                }
             }

             cm.sendNext("#d你排除了下列物品共（"+c+"件）,点击删除#k: \r\n"+txt)
        }else if (selection==4){
             cm.checkMobs(cm.getPlayer())

        }else if (selection==5){
          var txt=""

         var wz=["武器","盾牌","帽子","手套","鞋子","披风","套服","坠子"]
          for(var i=0;i<wea.length;i++){
           txt+="\r\n#L"+i+"# 位置"+wz[i]+" \r\n";
          }
        cm.sendNext("#d选择要查看的装备#k: \r\n"+txt)

        }else if (selection==6){

       cm.warp(211042300,0);
           cm.dispose();
        }else if (selection==7){


            cm.dispose();
            cm.openNpc(9110102,0);
        }else if (selection==8){
        check=selection;
        var txt="请选择要飞的图\r\n"



         for(var i=0;i<fastmaptitle.length;i++){
            txt+="#L"+i+"# "+fastmaptitle[i]+"  \r\n"
         }

          cm.sendSimple(txt);



        }else{
             cm.sendOk("参数是"+mode+","+type+","+selection)
            cm.dispose();
        }
    }else if(status==0){
       if(check==1){
           cm.getMobs(selection)
       }else if(check==3){
             cm.sendOk("你选择了"+selection)
             cm.getPlayer().getPet(0).removeExcluded(selection)
            cm.dispose();
       }else if (check==4){
//         cm.sendOk("你选择了"+selection)
          var checkRs=cm.checkDrop(selection)
          cm.sendOk(checkRs)
          cm.dispose();
       }else if (check==5){
        var rs=cm.equipStat(wea[selection]);

        if(rs==null){
        cm.sendOk("没有信息")
        cm.dispose();
        }else{
          var txt="当前情况#i" + rs.item_id + "##z" +rs.item_id + "#   \r\n真实武器等级："+rs.true_level+"\r\n"
                       txt+="总经验："+rs.item_exp+"\r\n"
                       txt+="当前等级经验："+rs.equip_exp_for+"\r\n"
                       txt+="升级所需总经验："+rs.lvl_up_need+"\r\n"
                       txt+="升级所需经验："+(rs.lvl_up_need-rs.equip_exp_for)+"\r\n"
                       txt+="显示经验百分比："+(rs.equip_percentage)+"\r\n"

                        cm.sendOk(txt)
                        cm.dispose();
        }



       }else if (check==8){
          cm.warp(fastmap[selection],0);
          cm.dispose();


       }

    }else if(status==1){
      cm.sendOk("参数是"+mode+","+type+","+selection)
       cm.dispose();
    }
    status++

}






