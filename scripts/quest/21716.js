var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendNext("What? I don''t think there are any suspects besides that kid. Please think again.");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("What did #p1032112# say?", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("#b(You tell her what #p1032112# observed.)#k", 2);
    } else if (status == 2) {
	qm.askAcceptDecline("A kid with a puppet? That seems very suspicious. I am sure that kid is the reason the Green Mushrooms have suddenly turned violent.");
    } else if (status == 3) {
	qm.forceStartQuest();
	qm.sendNextS("这孩子怎么敢在南部森林肆虐。谁知道恢复森林需要多长时间。。。我得把大部分时间花在收拾烂摊子上。", 2);
    } else if (status == 4) {
	qm.sendPrevS("#b（你能够找出绿蘑菇变化的原因。你应该报告#p1002104#并提供你收集的信息。）#K", 2);
    } else if (status == 5) {
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}