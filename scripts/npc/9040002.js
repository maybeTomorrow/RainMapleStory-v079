/* 
 * Shawn, Victoria Road: Excavation Site<Camp> (101030104)
 * Guild Quest Info
 */

var status;
var selectedOption;

function start() {
    selectedOption = -1;
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (mode == 1 && status == 3) {
	status = 0;
    }
    if (status == 0) {
	if (cm.getQuestStatus(6201) == 1) {
	    var dd = cm.getEventManager("Relic");
	    if (dd != null) {
		dd.startInstance(cm.getPlayer());
	    } else {
		cm.sendOk("An unknown error occured.");
	    }
	    cm.dispose();
	} else {
	    var prompt = "\r\n#b#L0# ɳ�ﰲ��ʲô?#l\r\n#b#L1# #t4001024#? ����ʲô?#l\r\n#b#L2# ��������?#l\r\n#b#L3# ����������û����.#l";
	    if (selectedOption == -1) {
		prompt = "���������������л�����һֱ��Ŭ�����롰��䱮��������һ�����Ĺ��������ˣ����Ƿ��֣���ȥ�����ع���ɳ�ﰲ��˯��������ǻ����� #t4001024#, һ������ġ��񻰰���鱦�����ܾ���ɳ�ﰲ���ź�������Ϊʲô�������˿����˹���̽���������ҵ� #t4001024#." + prompt;
	    } else {
		prompt = "�㻹������������?" + prompt;
	    }
	    cm.sendSimple(prompt);
	}
    } else if (status == 1) {
	selectedOption = selection;
	if (selectedOption == 0) {
	    cm.sendNext("ɳ�ﰲ��һ����ȥ��������������ά�����ǵ���ÿһ��������������������������Լ���������֪����˭����Ĺ��Ͻ�����������ɳ��ʱ������ġ�");
	}
	else if (selectedOption == 1) {
	    cm.sendNext("#t4001024# ��һ�Ŵ�˵�еı�ʯ���ܸ�ӵ�������˴���������ഺ�����з����ζ���ǣ��ƺ�ÿ������ #t4001024# �������ն��⵽�˼�̤����Ӧ�ÿ��Խ���ɳ�ﰲ�Ŀ�̨��");
	    status = -1;
	}
	else if (selectedOption == 2) {
	    cm.sendNext("����ǰ���ɹ�����̽�ռ�ȥɳ�ﰲ�������Ƕ�û�л��������ʹ���ǿ�ʼ�˹����̽��������һֱ�ڵȴ�ǿ������Ӧ���Ͼ���ս�Ĺ��ᣬ�����������Ĺ��ᡣ");
	}
	else if (selectedOption == 3) {
	    cm.sendOk("����������㻹��ʲôҪ�ʵģ�����ʱ����˵��");
	    cm.dispose();
	}
	else {
	    cm.dispose();
	}
    }
    else if (status == 2) { //should only be available for options 0 and 2
	if (selectedOption == 0) {
	    cm.sendNextPrev("ɳ��������һλ������һλ����ɳ����������ʿ����Ȼ����һλ�ǳ����Ǻ͸���ͬ���ĵĹ���������һ�죬�������������ˣ�û���κν��͡�");
	}
	else if (selectedOption == 2) {
	    cm.sendNextPrev("����������������Ŀ����̽��ɳ�ﰲ���ҵ�#t4001024#���ⲻ��һ��Ȩ�����һ�е������ŶӺ������������Ҫ��");
	}
	else {
	    cm.dispose();
	}
    }
}