var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("�㲻�ǲ���ǰ����#m101000000#���Ǹ����������ҵ����ˣ���֪���һ��˶೤ʱ����ҵ�����", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("Who are you?", 2);
    } else if (status == 2) {
	qm.askAcceptDecline("���������֪�������ҵ�ɽ��������������������㷢�������һ���ܾ�ֱ���͵��ҵĶ�Ѩ���ڴ�����������㡣");
    } else if (status == 3) {
	qm.forceCompleteQuest();
	qm.warp(910510200, 0);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}