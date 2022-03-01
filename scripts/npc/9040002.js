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
	    var prompt = "\r\n#b#L0# 沙里安是什么?#l\r\n#b#L1# #t4001024#? 那是什么?#l\r\n#b#L2# 家族任务?#l\r\n#b#L3# 不，我现在没事了.#l";
	    if (selectedOption == -1) {
		prompt = "长期以来，我们行会联盟一直在努力破译“翡翠碑”，这是一件珍贵的古老文物。因此，我们发现，过去的神秘国度沙里安就睡在这里。我们还发现 #t4001024#, 一件传奇的、神话般的珠宝，可能就在沙里安的遗骸里。这就是为什么公会联盟开启了公会探索，最终找到 #t4001024#." + prompt;
	    } else {
		prompt = "你还有其他问题吗?" + prompt;
	    }
	    cm.sendSimple(prompt);
	}
    } else if (status == 1) {
	selectedOption = selection;
	if (selectedOption == 0) {
	    cm.sendNext("沙里安是一个过去的文明，控制着维多利亚岛的每一个地区。傀儡神庙、地牢深处的神殿，以及其他无人知道是谁建造的古老建筑，都是在沙林时代建造的。");
	}
	else if (selectedOption == 1) {
	    cm.sendNext("#t4001024# 是一颗传说中的宝石，能给拥有它的人带来永恒的青春。具有讽刺意味的是，似乎每个曾经 #t4001024# 的人最终都遭到了践踏，这应该可以解释沙里安的垮台。");
	    status = -1;
	}
	else if (selectedOption == 2) {
	    cm.sendNext("我以前曾派过几组探险家去沙里安，但他们都没有回来，这促使我们开始了公会的探索。我们一直在等待强大到足以应对严峻挑战的公会，像你们这样的公会。");
	}
	else if (selectedOption == 3) {
	    cm.sendOk("真正地如果你还有什么要问的，请随时跟我说。");
	    cm.dispose();
	}
	else {
	    cm.dispose();
	}
    }
    else if (status == 2) { //should only be available for options 0 and 2
	if (selectedOption == 0) {
	    cm.sendNextPrev("沙林年的最后一位国王是一位名叫沙林三世的绅士，显然他是一位非常明智和富有同情心的国王。但有一天，整个王国崩溃了，没有任何解释。");
	}
	else if (selectedOption == 2) {
	    cm.sendNextPrev("这个公会任务的最终目标是探索沙里安并找到#t4001024#。这不是一项权力解决一切的任务。团队合作在这里更重要。");
	}
	else {
	    cm.dispose();
	}
    }
}