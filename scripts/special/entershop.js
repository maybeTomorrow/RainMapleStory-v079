var status;
var check;

function start() {
    status = -1;
    cm.sendSimple("�ҿ��Ը�����Щð���ߵļ����!!\r\n#L0##�����̳ǣ�#l\r\n#L1#�鿴����Ʒ�Ĺ��#l\r\n#L2#����������#l\r\n#L3#�����ų����ߣ�#l\r\n#L4#�鿴���ﱬ�ʣ�#l\r\n#L5#�����ĵȼ����#l\r\n#L6#��ȥ��������#l\r\n#L7#��Ҫ��ô�����ܳ�Ϊ�����֣�#l\r\n#L8#��Ҫ��ô�����ܳ�Ϊħ��ʦ��#l\r\n#L9#��Ҫ��ô�����ܳ�Ϊ������#l\r\n#L10#��ô��������ֵ��(S)#l\r\n#L11#��Ҫ��ôȷ���Ҽ���������Ʒ�أ�#l\r\n#L12#��Ҫ��ôװ����Ʒ��#l\r\n#L13#��Ҫ��ôȷ���������Ѿ�װ������Ʒ��#l\r\n#L14#ʲô�Ǽ��ܣ�(K)#l\r\n#L15#��Ҫ��ôǰ��ά�����ǵ���#l\r\n#L16#�����ʲô��#l#k");
}



function action(mode, type, selection) {
    if(status==-1){
        check=selection
        if(selection==0){
        		cm.EnterCS(0);
            	cm.dispose();
        }else if (selection==1){
           cm.sendGetNumber("��������Ʒ��id.",1,1,999999999);
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
                  txt+="\r\n#L"+k+"# ��� \r\n";
                 }else{
                   txt+="\r\n#L"+k+"# #i"+list[k]+"#   #t"+list[k]+"# \r\n";
                 }

                 c++;
                }
             }

             cm.sendNext("#d���ų���������Ʒ����"+c+"����,���ɾ��#k: \r\n"+txt)
        }else if (selection==4){
             cm.checkMobs(cm.getPlayer())

        }else if (selection==5){

        var rs=cm.equipStat(-11);
//        var rs=cm.equipStat(-5);

        var txt="��ǰ���\r\n��ʵ�����ȼ���"+rs.true_level+"\r\n"
        txt+="�ܾ��飺"+rs.item_exp+"\r\n"
        txt+="��ǰ�ȼ����飺"+rs.equip_exp_for+"\r\n"
        txt+="���������ܾ��飺"+rs.lvl_up_need+"\r\n"
        txt+="�������辭�飺"+(rs.lvl_up_need-rs.equip_exp_for)+"\r\n"

         cm.sendOk(txt)
         cm.dispose();
        }else if (selection==6){

            cm.warp(211042300,0);
            cm.dispose();

        }else{
             cm.sendOk("������"+mode+","+type+","+selection)
            cm.dispose();
        }
    }else if(status==0){
       if(check==1){
           cm.getMobs(selection)
       }else if(check==3){
             cm.sendOk("��ѡ����"+selection)
             cm.getPlayer().getPet(0).removeExcluded(selection)
            cm.dispose();
       }else if (check==4){
//         cm.sendOk("��ѡ����"+selection)
          var checkRs=cm.checkDrop(selection)
          cm.sendOk(checkRs)
          cm.dispose();
       }

    }else if(status==1){
      cm.sendOk("������"+mode+","+type+","+selection)
       cm.dispose();
    }
    status++

}






