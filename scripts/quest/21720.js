var status = -1;

function start(mode, type, selection) {
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 6) {
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("����Ϊ����Щʲô��Tru���ҷ���һ����Ϣ��˵��һֱ��ά�����ǵ��̿�ѵ����ͬʱ��������ɹ�����������ôһ���£�ʲô�ڳ��", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("#b(�������ľżʦ�ͺڳ���Լ����ǵ�ʹ����)#k", 2);
    } else if (status == 2) {
	qm.sendNextPrevS("�Ҷ��ˡ������Ҳ�֪����һ���кڳ������塣�����������֪����ħ��ʦ�ж�Σ�գ����������������һ����ɵ�ϡ�", 8);
    } else if (status == 3) {
	qm.sendNextPrevS("That...that''s true...\r\r#b(�����Բ���˵���Լ����뷨)#k", 2);
    } else if (status == 4) {
	qm.sendNextPrevS("Ԥ������˵Ӣ�۽�������ħ��ʦս�����Ҳ�ȷ�����ǲ�����ģ�����֤ʵ�˺�ħ��ʦ��Ȼ���ڡ�", 8);
    } else if (status == 5) {
	qm.sendNextPrevS("Aren't you scared?", 2);
    } else if (status == 6) {
	qm.sendYesNo("���µ�Pfft��˭�ں���ħ��ʦ�Ƿ���֡���������ﱣ�����ǡ������ʲô�Ļ���������������Ϊ�ⳡ��ս����׼�����������������ң� I found a #bskill#k. ���뿴����?");
    } else if (status == 7) {
	if (qm.getQuestStatus(21720) == 0) {
	    qm.forceCompleteQuest();
	    qm.teachSkill(21001003, qm.getPlayer().getSkillLevel(21001003), 20);
	    qm.gainExp(3900);
	}
	qm.AranTutInstructionalBubble("Effect/BasicEff.img/AranGetSkill");
	qm.sendNextS('#b(You remembered the Polearm Booster skill!)#k', 2);
    } else if (status == 8) {
	qm.sendNextPrevS("���ּ�������һ�����ϵ����������ָ��з��ֵġ�����Ԥ������������ȥʹ�õ�һ�ּ��ܣ��������ǶԵġ��㲻����ǰ��ôǿ׳�ˣ�����ἰʱ���������.", 8);
    } else if (status == 9) {
	qm.sendNextPrevS("��Խ��Խǿ���һ�һֱ�����Ｄ���㡣��ûʲô�ú��µġ��㲻����ġ���ӱ��ϳ���������Ϊ�������ħ��ʦ���԰ɣ���Σ����һ�����ݵظɵ�����", 8);
    } else if (status == 10) {
	qm.sendPrevS("Ҫ������һ�㣬��ֻ����һ���¡��𳵣��𳵣��𳵡�ǰ��ά�����ǵ�����ѵ����������ȷ���������ǿ�������ں�ħ��ʦû�л��ᣡ", 8);
    } else if (status == 11) {
	qm.dispose();
    }
}