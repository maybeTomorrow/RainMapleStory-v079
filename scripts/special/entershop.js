var status;
var check;

function start() {
    status = -1;
    cm.sendSimple("�ҿ��Ը�����Щð���ߵļ����!!\r\n#L0##�����̳ǣ�#l\r\n#L1#�鿴����Ʒ�Ĺ��#l\r\n#L2#����������#l\r\n#L3#���������ᷢ��ʲô���飿#l\r\n#L4#�Һ�ʱ��ѡ��ְҵ��#l\r\n#L5#�������й�������죡#l\r\n#L6#��Ҫ��ô�����ܳ�Ϊսʿ��#l\r\n#L7#��Ҫ��ô�����ܳ�Ϊ�����֣�#l\r\n#L8#��Ҫ��ô�����ܳ�Ϊħ��ʦ��#l\r\n#L9#��Ҫ��ô�����ܳ�Ϊ������#l\r\n#L10#��ô��������ֵ��(S)#l\r\n#L11#��Ҫ��ôȷ���Ҽ���������Ʒ�أ�#l\r\n#L12#��Ҫ��ôװ����Ʒ��#l\r\n#L13#��Ҫ��ôȷ���������Ѿ�װ������Ʒ��#l\r\n#L14#ʲô�Ǽ��ܣ�(K)#l\r\n#L15#��Ҫ��ôǰ��ά�����ǵ���#l\r\n#L16#�����ʲô��#l#k");
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
            cm.gainItem(4031794,1);
             cm.dispose();
        }else{
             cm.sendOk("������"+mode+","+type+","+selection)
            cm.dispose();
        }
    }else if(status==0){
       if(check==1){
           cm.getMobs(selection)
       }

    }else if(status==1){
      cm.sendOk("������"+mode+","+type+","+selection)
       cm.dispose();
    }
    status++

}






