/*
 * Time Temple - Kirston
 * Twilight of the Gods
 */

function start() {
    cm.askAcceptDecline("�������һ�������ľ��ӣ���ô�ҾͿ��������ٻ�����ʦ�ˣ�\r\n�ȴ��е㲻�Ծ���Ϊʲô����ʦû�б��ٻ����ȵȣ�����ʲô�⻷���Ҹо��������������ʦ��ȫ��ͬ������������ \r\n\r\n #b(���ַ���Kryston�ļ���ϡ�)");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.removeNpc(270050100, 2141000);
	cm.forceStartReactor(270050100, 2709000);
    }
    cm.dispose();

// If accepted, = summon PB + Kriston Disappear + 1 hour timer
// If deny = NoTHING HAPPEN
}