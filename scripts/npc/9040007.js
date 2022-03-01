/* @Author Lerk
 *
 * Sharen III's Will - Sharenian: Waterway (990000600)
 * 
 * Guild Quest Stage 4 Info
 */

function action(mode, type, selection) {
    cm.sendOk("我与鲁比安人作战，但我输了，现在我被囚禁在那扇阻挡我前进的大门里，我的身体遭到亵渎。然而，我的旧衣服内在有神圣的力量。如果你能把衣服还给我，我就可以开门了。请快点！\r\n-Sharen III\r\n\r\nP。我知道这对我来说很挑剔，但你能把衣服放回我身上吗？谢谢你的服务。");
    cm.gainItem(4001031,1)
    cm.gainItem(4001033,1)
    cm.gainItem(4001034,1)
    cm.gainItem(4001032,1)
    cm.safeDispose();
}