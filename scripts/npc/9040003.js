/* 
 * Sharen III's Soul, Sharenian: Sharen III's Grave (990000700)
 * Guild Quest - end of stage 4
 */

var status = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else {
	cm.dispose();
	return;
	}

    if (status == 0) {
	if (cm.getEventInstance().getProperty("leader").equals(cm.getPlayer().getName())) {
	    if (cm.getEventInstance().getProperty("stage4clear") != null && cm.getEventInstance().getProperty("stage4clear").equals("true")) {
		cm.sendOk("������Ϊ���ǲ����˯��֮���������ҵ���������ɳ�ﰲ���ˡ���������Ŀ��԰�Ϣ�ˡ�");
		cm.safeDispose();
	    } else {
		var prev = cm.getEventInstance().setProperty("stage4clear","true",true);
		if (prev == null) {
		    cm.sendNext("������Ϊ���ǲ����˯��֮���������ҵ���������ɳ�ﰲ���ˡ���λ�������ڽ�Ϊ�����������ƽ��·��");
		} else { //if not null, was set before, and Gp already gained
		    cm.sendOk("������Ϊ���ǲ����˯��֮���������ҵ���������ɳ�ﰲ���ˡ���������Ŀ��԰�Ϣ�ˡ�");
		    cm.safeDispose();
		}
	    }
	} else {
	    if (cm.getEventInstance().getProperty("stage4clear") != null && cm.getEventInstance().getProperty("stage4clear").equals("true"))
		cm.sendOk("������Ϊ���ǲ����˯��֮���������ҵ���������ɳ�ﰲ���ˡ���������Ŀ��԰�Ϣ�ˡ�");
	    else
		cm.sendOk("����Ҫ���ǵ����쵼�˸���˵�����������˵����");
	    cm.safeDispose();
	}
    } else if (status == 1) {
	cm.gainGP(90);
	cm.getMap().getReactorByName("ghostgate").hitReactor(cm.getC());
	cm.showEffect(true, "quest/party/clear");
	cm.playSound(true, "Party1/Clear");
	cm.dispose();
    }
}