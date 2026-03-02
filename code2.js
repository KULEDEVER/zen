gdjs.Untitled_32scene4Code = {};
gdjs.Untitled_32scene4Code.localVariables = [];
gdjs.Untitled_32scene4Code.idToCallbackMap = new Map();
gdjs.Untitled_32scene4Code.GDNewSpriteObjects1= [];
gdjs.Untitled_32scene4Code.GDNewSpriteObjects2= [];
gdjs.Untitled_32scene4Code.GDNewSprite2Objects1= [];
gdjs.Untitled_32scene4Code.GDNewSprite2Objects2= [];
gdjs.Untitled_32scene4Code.GDNewSprite3Objects1= [];
gdjs.Untitled_32scene4Code.GDNewSprite3Objects2= [];
gdjs.Untitled_32scene4Code.GDNewSprite4Objects1= [];
gdjs.Untitled_32scene4Code.GDNewSprite4Objects2= [];
gdjs.Untitled_32scene4Code.GDNewSprite5Objects1= [];
gdjs.Untitled_32scene4Code.GDNewSprite5Objects2= [];
gdjs.Untitled_32scene4Code.GDGreenButtonObjects1= [];
gdjs.Untitled_32scene4Code.GDGreenButtonObjects2= [];
gdjs.Untitled_32scene4Code.GDRedButtonObjects1= [];
gdjs.Untitled_32scene4Code.GDRedButtonObjects2= [];
gdjs.Untitled_32scene4Code.GDNewSprite6Objects1= [];
gdjs.Untitled_32scene4Code.GDNewSprite6Objects2= [];


gdjs.Untitled_32scene4Code.mapOfGDgdjs_9546Untitled_959532scene4Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.Untitled_32scene4Code.GDNewSprite6Objects1});
gdjs.Untitled_32scene4Code.mapOfGDgdjs_9546Untitled_959532scene4Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Untitled_32scene4Code.GDNewSpriteObjects1});
gdjs.Untitled_32scene4Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32scene4Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene4Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene4Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene4Code.GDNewSpriteObjects1[k] = gdjs.Untitled_32scene4Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene4Code.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32scene4Code.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.Untitled_32scene4Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene4Code.GDNewSpriteObjects1[i].setX(gdjs.Untitled_32scene4Code.GDNewSpriteObjects1[i].getX() - (5));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32scene4Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene4Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene4Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene4Code.GDNewSpriteObjects1[k] = gdjs.Untitled_32scene4Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene4Code.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32scene4Code.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.Untitled_32scene4Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene4Code.GDNewSpriteObjects1[i].setX(gdjs.Untitled_32scene4Code.GDNewSpriteObjects1[i].getX() + (5));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32scene4Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.Untitled_32scene4Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene4Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").setCanNotAirJump();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32scene4Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.Untitled_32scene4Code.GDNewSprite6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32scene4Code.mapOfGDgdjs_9546Untitled_959532scene4Code_9546GDNewSprite6Objects1Objects, gdjs.Untitled_32scene4Code.mapOfGDgdjs_9546Untitled_959532scene4Code_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "YOU WON", false);
}
}

}


};

gdjs.Untitled_32scene4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32scene4Code.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32scene4Code.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32scene4Code.GDNewSprite3Objects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewSprite3Objects2.length = 0;
gdjs.Untitled_32scene4Code.GDNewSprite4Objects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewSprite4Objects2.length = 0;
gdjs.Untitled_32scene4Code.GDNewSprite5Objects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewSprite5Objects2.length = 0;
gdjs.Untitled_32scene4Code.GDGreenButtonObjects1.length = 0;
gdjs.Untitled_32scene4Code.GDGreenButtonObjects2.length = 0;
gdjs.Untitled_32scene4Code.GDRedButtonObjects1.length = 0;
gdjs.Untitled_32scene4Code.GDRedButtonObjects2.length = 0;
gdjs.Untitled_32scene4Code.GDNewSprite6Objects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewSprite6Objects2.length = 0;

gdjs.Untitled_32scene4Code.eventsList0(runtimeScene);
gdjs.Untitled_32scene4Code.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32scene4Code.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32scene4Code.GDNewSprite3Objects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewSprite3Objects2.length = 0;
gdjs.Untitled_32scene4Code.GDNewSprite4Objects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewSprite4Objects2.length = 0;
gdjs.Untitled_32scene4Code.GDNewSprite5Objects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewSprite5Objects2.length = 0;
gdjs.Untitled_32scene4Code.GDGreenButtonObjects1.length = 0;
gdjs.Untitled_32scene4Code.GDGreenButtonObjects2.length = 0;
gdjs.Untitled_32scene4Code.GDRedButtonObjects1.length = 0;
gdjs.Untitled_32scene4Code.GDRedButtonObjects2.length = 0;
gdjs.Untitled_32scene4Code.GDNewSprite6Objects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewSprite6Objects2.length = 0;


return;

}

gdjs['Untitled_32scene4Code'] = gdjs.Untitled_32scene4Code;
