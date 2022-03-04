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
	qm.sendNextS("我能为你做些什么？Tru给我发了一条信息，说你一直在维多利亚岛刻苦训练，同时帮助他完成工作。这是怎么一回事？什么黑翅膀？", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("#b(你告诉她木偶师和黑翅膀，以及他们的使命。)#k", 2);
    } else if (status == 2) {
	qm.sendNextPrevS("我懂了。。。我不知道有一个叫黑翅膀的团体。。。如果他们知道黑魔法师有多危险，想让他复活，那他们一定是傻瓜。", 8);
    } else if (status == 3) {
	qm.sendNextPrevS("That...that''s true...\r\r#b(她绝对不怕说出自己的想法)#k", 2);
    } else if (status == 4) {
	qm.sendNextPrevS("预言书上说英雄将复活并与黑魔法师战斗。我不确定这是不是真的，但这证实了黑魔法师仍然存在。", 8);
    } else if (status == 5) {
	qm.sendNextPrevS("Aren't you scared?", 2);
    } else if (status == 6) {
	qm.sendYesNo("害怕的Pfft。谁在乎黑魔法师是否出现。你会在这里保护我们。如果有什么的话，这让我想让你为这场大战做好准备。啊，这提醒了我， I found a #bskill#k. 你想看看吗?");
    } else if (status == 7) {
	if (qm.getQuestStatus(21720) == 0) {
	    qm.forceCompleteQuest();
	    qm.teachSkill(21001003, qm.getPlayer().getSkillLevel(21001003), 20);
	    qm.gainExp(3900);
	}
	qm.AranTutInstructionalBubble("Effect/BasicEff.img/AranGetSkill");
	qm.sendNextS('#b(You remembered the Polearm Booster skill!)#k', 2);
    } else if (status == 8) {
	qm.sendNextPrevS("这种技巧是在一本古老的难以理解的手稿中发现的。我有预感这可能是你过去使用的一种技能，我想我是对的。你不像以前那么强壮了，但你会及时到达那里的.", 8);
    } else if (status == 9) {
	qm.sendNextPrevS("你越来越强大，我会一直在这里激励你。你没什么好害怕的。你不会输的。你从冰上出来并不是为了输给黑魔法师，对吧？这次，你会一劳永逸地干掉他！", 8);
    } else if (status == 10) {
	qm.sendPrevS("要做到这一点，你只能做一件事。火车，火车，火车。前往维多利亚岛继续训练。让我们确保你变得如此强大，以至于黑魔法师没有机会！", 8);
    } else if (status == 11) {
	qm.dispose();
    }
}