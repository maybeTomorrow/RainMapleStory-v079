function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        if (status == 0) {
            cm.sendNext("我可以将你的所有能力点#r全部重置为4#k，在把你其它的点留给你自己加哟。");
        } else if (status == 1) {
                var p = cm.getChar();
               var totAP = p.getLevel()*5;
                p.setRemainingAp(totAP);
                p.getStat().setStr(4);
                p.getStat().setDex(4);
                p.getStat().setInt(4);
                p.getStat().setLuk(4);
		var str = p.getStat().getStr();
		var dex =p.getStat().getDex();
		var _int =p.getStat().getInt();
		var luk = p.getStat().getLuk();
		cm.resetStats(str,dex,_int,luk);
	
                cm.sendOk("恭喜您，重置成功！");
                cm.dispose();
        }
    }
}