var weapon = [2040006, 2040007, 2040303, 2040403, 2040506, 2040507, 2040603, 2040709, 2040710, 2040711,2040806,2040903,2041024,2041025,2043003,2043103,2043203,2043303,2043703,2043803,2044003,2044103,2044203,2044303,2044403,2044403,2044503,2044603,2044703,2044815,2044908];
var req = [
[4000313, 5],
[4032226, 5],
[4001126, 5]
];
var sels;
var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        var msg = "";
        msg += "\r\n#d需要:#b ";
        msg += "\r\n\r\n";

        for (var ii = 0; ii < req.length; ii++) {
            msg += "#i" + req[ii][0] + "##t" + req[ii][0] + "#x" + req[ii][1];
            if (ii % 3 == 0) {
                msg += "\r\n";
            }
        }


        msg += "\r\n";
        msg += "#g----------------------------------------------\r\n";
        for (var i = 0; i < weapon.length; i++) {
            msg += "#r#L" + i + "#";
            msg += "#i" + weapon[i] + "##z" + weapon[i] + "##l\r\n";
        }
        cm.sendSimple("#d您好，我是群主请来的兑换商人，想要兑换必成卷轴吗?\r\n\r\n必须亲自找到我才能兑换哦，我在#r诺特码头#k！\r\n\r\n" + msg + "");
    } else if (status == 1) {
        sels = selection;
        if (!cm.canHold(weapon[sels])) {
            cm.sendNext("#r背包空间不足");
            cm.dispose();
            return;
        }
        for (var i = 0; i < req.length; i++) {
            if (!cm.haveItem(req[i][0], req[i][1])) {
                cm.sendNext("#b你身上没有#r足够的材料#k，继续收集材料去吧！");
                cm.dispose();
                return;
            }
        }
        cm.sendYesNo("#b是否要兑换卷轴#r #i" + weapon[sels] + "#? \r\n");
    } else if (status == 2) {
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1]);
        }
        cm.gainItem(weapon[sels], 1);
        cm.sendNext("#b已经兑换了卷轴 #i" + weapon[sels] + "#");
        cm.dispose();
    } else {
        cm.sendNext("#r发生错误: mode : " + mode + " status : " + status);
        cm.dispose();
    }
}