//odinms_MS
load("nashorn:mozilla_compat.js");
importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.client);

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			
			cm.sendSimple("\t\t\t\t\t#e#r流浪商人#b系列#n\r\n#d====================================================\r\n#d目前账户剩余金币:"+ cm.getMeso() + "\r\n====================================================\r\n#k噗，噗噗，谁把我吵醒了啊，我会生气的！\r\n\r\n古人云：大隐隐于市！\r\n#k#r#e这些个破烂就当废品卖了吧，反正不值钱！#n\r\n\r\n#L1##r#e法海大师让我来看看你。。。#b#n\r\n\r\n#L2#传说冒险岛单手剑（全属性300==#r500张#k#v4000313#）#b#n\r\n\r\n#L3#传说冒险岛单手斧（全属性300==#r500张#k#v4000313#）#b#n\r\n\r\n#L4#传说冒险岛单手钝器（全属性300==#r500张#k#v4000313#）#b#n\r\n\r\n#L5#传说冒险岛短刀（全属性300==#r500张#k#v4000313#）#b#n\r\n\r\n#L6#传说冒险岛短杖（全属性300==#r500张#k#v4000313#）#b#n\r\n\r\n#L7#传说冒险岛枪（全属性300==#r500张#k#v4000313#）#b#n\r\n\r\n#L8#传说冒险岛弓（全属性300==#r500张#k#v4000313#）#b#n\r\n\r\n#L9#传说冒险岛弩（全属性300==#r500张#k#v4000313#）#b#n\r\n\r\n#L10#传说冒险岛拳套（全属性300==#r500张#k#v4000313#）#b#n\r\n\r\n#L11#传说冒险岛指节（全属性300==#r500张#k#v4000313#）#b#n\r\n\r\n#L12#传说冒险岛手枪（全属性300==#r500张#k#v4000313#）#b#n\r\n\r\n#L13#传说冒险岛双手剑（全属性300==#r500张#k#v4000313#）#b#n\r\n\r\n#L14#传说冒险岛双手斧（全属性300==#r500张#k#v4000313#）#b#n\r\n\r\n#L15#传说冒险岛双手钝器（全属性300==#r500张#k#v4000313#）#b#n\r\n\r\n#L16#传说冒险岛矛（全属性300==#r500张#k#v4000313#）");			                } else if (status == 1) {
                  if (selection == 1) {
		  cm.sendOk("\t\t\t#e#b       飞天猪的愿望#n#d\r\n====================================================#k\r\n原来是法海大师的朋友，幸会幸会，大师身体可好？#k#d\r\n====================================================#k\r\n唉，说来话长，你知道吗，我从小就有一个愿望，就是能在天空中自由的飞翔，可是我老了，再也飞不动了。。。#d\r\n====================================================#k\r\n我想在天空中自由的飞翔，#r俯瞰神州大地#k，你能帮我实现这个愿望吗?#k#d\r\n====================================================#k\r\n如果能在#r东方神州的上空#k，哪怕只有一分钟，这辈子都值了！#d\r\n");
	          cm.dispose();
                  }else if(selection == 2){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e恭喜您获得全属性300的传说冒险岛单手剑.");
                cm.gainItem(1302192,300,300,300,300,300,300,300,300,150,150,150,150);
                cm.gainItem(4000313,-500);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性300的传说冒险岛单手剑！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();
                  }
                  }else if(selection == 3){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e恭喜您获得全属性300的传说冒险岛单手斧.");
                cm.gainItem(1312098,300,300,300,300,300,300,300,300,150,150,150,150);
                cm.gainItem(4000313,-500);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性300的传说冒险岛单手斧！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 4){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e恭喜您获得全属性300的传说冒险岛单手钝器.");
                cm.gainItem(1322138,300,300,300,300,300,300,300,300,150,150,150,150);
                cm.gainItem(4000313,-500);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性300的传说冒险岛单手钝器！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 5){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e恭喜您获得全属性300的传说冒险岛短刀.");
                cm.gainItem(1332168,300,300,300,300,300,300,300,300,150,150,150,150);
                cm.gainItem(4000313,-500);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性300的传说冒险岛短刀！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 6){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e恭喜您获得全属性300的传说冒险岛短杖.");
                cm.gainItem(1372117,300,300,300,300,300,300,300,300,150,150,150,150);
                cm.gainItem(4000313,-500);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性300的传说冒险岛短杖！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 7){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e恭喜您获得全属性300的传说冒险岛枪.");
                cm.gainItem(1432117,300,300,300,300,300,300,300,300,150,150,150,150);
                cm.gainItem(4000313,-500);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性300的传说冒险岛枪！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 8){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e恭喜您获得全属性300的传说冒险岛弓.");
                cm.gainItem(1452147,300,300,300,300,300,300,300,300,150,150,150,150);
                cm.gainItem(4000313,-500);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性300的传说冒险岛弓！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 9){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e恭喜您获得全属性300的传说冒险岛弩.");
                cm.gainItem(1462136,300,300,300,300,300,300,300,300,150,150,150,150);
                cm.gainItem(4000313,-500);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性300的传说冒险岛弩！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 10){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e恭喜您获得全属性300的传说冒险岛拳套.");
                cm.gainItem(1472159,300,300,300,300,300,300,300,300,150,150,150,150);
                cm.gainItem(4000313,-500);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性300的传说冒险岛拳套！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 11){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e恭喜您获得全属性300的传说冒险岛指节.");
                cm.gainItem(1482120,300,300,300,300,300,300,300,300,150,150,150,150);
                cm.gainItem(4000313,-500);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性300的传说冒险岛指节！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 12){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e恭喜您获得全属性300的传说冒险岛手枪.");
                cm.gainItem(1492119,300,300,300,300,300,300,300,300,150,150,150,150);
                cm.gainItem(4000313,-500);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性300的传说冒险岛手枪！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 13){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e恭喜您获得全属性300的传说冒险岛双手剑.");
                cm.gainItem(1402129,300,300,300,300,300,300,300,300,150,150,150,150);
                cm.gainItem(4000313,-500);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性300的传说冒险岛双手剑！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 14){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e恭喜您获得全属性300的传说冒险岛双手斧.");
                cm.gainItem(1412087,300,300,300,300,300,300,300,300,150,150,150,150);
                cm.gainItem(4000313,-500);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性300的传说冒险岛双手斧！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 15){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e恭喜您获得全属性300的传说冒险岛双手钝器.");
                cm.gainItem(1422089,300,300,300,300,300,300,300,300,150,150,150,150);
                cm.gainItem(4000313,-500);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性300的传说冒险岛双手钝器！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 16){ 	           
                if (cm.haveItem(4000313,500)){
                cm.sendOk("#r#e恭喜您获得全属性300的传说冒险岛矛.");
                cm.gainItem(1442154,300,300,300,300,300,300,300,300,150,150,150,150);
                cm.gainItem(4000313,-500);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性300的传说冒险岛矛！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
             }
	}
    }
}
