class ConnectNodeDrawer{

  constructor(unitSize, context){

    this.unitSize = unitSize;
    this.context = context;
    this.drawMethods = {

        circle: {

          draw: (coordinates, options = { color:"#000000" , radius:1 }) => {

            console.log(options);

            context.beginPath();

            const radius = options.radius;
            context.ellipse(coordinates[0]*this.unitSize, coordinates[1]*this.unitSize, radius*this.unitSize, radius*this.unitSize, 0, 0, 2 * Math.PI);

            const color = options.color;
            context.fillStyle = color;
            context.fill();

            context.stroke();
          },

          options: {
            color:{type:"color", tag:"Circle color"},
            radius:{type:"number", tag:"Circle radius"}
          }
        },

        doubleCircle: {

          draw: (coordinates, options = { innerColor:"#FFFFFF" , innerRadius:1 , outerColor:"#000000" , outerRadius:2}) => {

            //Outer circle
            const outerRadius = options.outerRadius;
            const outerColor = options.outerColor;
            this.drawMethods['circle'].draw(coordinates, { color:outerColor, radius:outerRadius });

            //Inner circle
            const innerRadius = options.innerRadius;
            const innerColor = options.innerColor;
            this.drawMethods['circle'].draw(coordinates, { color:innerColor, radius:innerRadius });


          },

          options: {
            innerColor:{type:"color", tag:"Inner circle color"},
            innerRadius:{type:"number", tag:"Inner circle radius"},
            outerColor:{type:"color", tag:"Outer circle color"},
            outerRadius:{type:"number", tag:"Outer circle radius"}
          }

        }

    }
  }

  drawNode(coordinates, options, method = 'circle'){
    this.drawMethods[method].draw(coordinates, options);
  }

  getDrawMethodOptions(method){
    if(!drawMethods[method]) throw `There is no such drawing method as: ${method} in ConnectNodeDrawer.`; return;

    return this.drawMethods[method].options;
  }


}




export default ConnectNodeDrawer
