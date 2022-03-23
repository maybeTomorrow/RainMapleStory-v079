function start() {
    cm.sendYesNo("如果你现在离开，你将不得不重新开始。你确定要离开这里到外面去吗？");
}

function action(mode, type, selection) {

if(true){

//  cm.sendOk("he??elo")
  cm.checkMobs(cm.getPlayer())
//   cm.dispose();
//cm.mapMessage("hahahah。");
//        rm.spawnMonster(8820008);
//         cm.killAllMob();
//
//        	cm.spawnMonster(8820000);
//        	cm.spawnMonster(8820008);
//        	cm.spawnMonster(8820013);
//
//        	    cm.killMob(8820019);
//        	    cm.killMob(8820020);
//                cm.killMob(8820021);
//                cm.killMob(8820022);
//                cm.killMob(8820023);
//                cm.killMob(8820013);




//
//        	        	cm.spawnMonster(8820003);
//                    	cm.spawnMonster(8820005);
//                    	cm.spawnMonster(8820006);
//                    	cm.spawnMonster(8820004);
//                    	cm.spawnMonster(8820002);
         cm.dispose();
       return
}

    if (mode == 1) {
        if (cm.isLeader()) {
//            cm.deleteboss();
            cm.warpParty(270050000);
        }
        cm.dispose();
    }
}