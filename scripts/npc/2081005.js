
importPackage(Packages.client);


function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	}
	else {
		if (mode == 0) {
			cm.sendOk("�����зǳ�а��ĺڰ���������");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.getPlayer().getBuffedValue(MapleBuffStat.MORPH) >= 0) {
				cm.sendYesNo("�����ȥ��ս�ڰ����������BOSS���Ƿǳ�ǿ��İ�������\r\nС��棺Vr001 �������˳�����..����������ϵ��1449274741");
			}
			else {
				cm.sendOk("�������㻹���߱���ս������������");
				cm.dispose();
				return;
			}
		}
		else if (status == 1) {
			cm.warp(240050000);
			cm.getPlayer().cancelEffectFromBuffStat(MapleBuffStat.MORPH);
			cm.dispose();
			return;
		}
	}
}
