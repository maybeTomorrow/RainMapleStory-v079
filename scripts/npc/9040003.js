/* 
 * Sharen III's Soul, Sharenian: Sharen III's Grave (990000700)
 * Guild Quest - end of stage 4
 */

var status = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else {
	cm.dispose();
	return;
	}

    if (status == 0) {
	if (cm.getEventInstance().getProperty("leader").equals(cm.getPlayer().getName())) {
	    if (cm.getEventInstance().getProperty("stage4clear") != null && cm.getEventInstance().getProperty("stage4clear").equals("true")) {
		cm.sendOk("在我以为会是不朽的睡眠之后，我终于找到了能拯救沙里安的人。我现在真的可以安息了。");
		cm.safeDispose();
	    } else {
		var prev = cm.getEventInstance().setProperty("stage4clear","true",true);
		if (prev == null) {
		    cm.sendNext("在我以为会是不朽的睡眠之后，我终于找到了能拯救沙里安的人。这位老人现在将为你完成任务铺平道路。");
		} else { //if not null, was set before, and Gp already gained
		    cm.sendOk("在我以为会是不朽的睡眠之后，我终于找到了能拯救沙里安的人。我现在真的可以安息了。");
		    cm.safeDispose();
		}
	    }
	} else {
	    if (cm.getEventInstance().getProperty("stage4clear") != null && cm.getEventInstance().getProperty("stage4clear").equals("true"))
		cm.sendOk("在我以为会是不朽的睡眠之后，我终于找到了能拯救沙里安的人。我现在真的可以安息了。");
	    else
		cm.sendOk("我需要你们党的领导人跟我说话，别跟别人说话。");
	    cm.safeDispose();
	}
    } else if (status == 1) {
	cm.gainGP(90);
	cm.getMap().getReactorByName("ghostgate").hitReactor(cm.getC());
	cm.showEffect(true, "quest/party/clear");
	cm.playSound(true, "Party1/Clear");
	cm.dispose();
    }
}