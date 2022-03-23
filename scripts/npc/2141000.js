/*
 * Time Temple - Kirston
 * Twilight of the Gods
 */

function start() {
    cm.askAcceptDecline("如果我有一面善良的镜子，那么我就可以重新召唤黑巫师了！\r\n等待有点不对劲！为什么黑巫师没有被召唤？等等，这是什么光环？我感觉到。。。与黑巫师完全不同啊！！！！！ \r\n\r\n #b(把手放在Kryston的肩膀上。)");
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