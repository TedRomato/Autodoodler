import ConnectNode from "./ConnectNode.js"
import ConnectNodeDrawer from "./ConnectNodeDrawer.js"

function contextToFullScreen(context){
  context.canvas.width = $( window ).width();
  context.canvas.height = $( window ).height();
}

const context = $("#Canvas")[0].getContext('2d');

contextToFullScreen(context);

let testConnectNode = new ConnectNode(20,20);


let testDrawer = new ConnectNodeDrawer(10, context);
testDrawer.drawNode(testConnectNode.getCoordinates(), undefined, 'doubleCircle');
