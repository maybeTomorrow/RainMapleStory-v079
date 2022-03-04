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
	qm.sendNextS("你不是不久前还在#m101000000#的那个吗？我终于找到你了！你知道我花了多长时间才找到你吗？", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("Who are you?", 2);
    } else if (status == 2) {
	qm.askAcceptDecline("我如果你想知道，到我的山洞来看看。我甚至会给你发个请柬。你一接受就直接送到我的洞穴。期待在那里见到你。");
    } else if (status == 3) {
	qm.forceCompleteQuest();
	qm.warp(910510200, 0);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}