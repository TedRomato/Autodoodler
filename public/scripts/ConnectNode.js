class ConnectNode{

  constructor(x, y){

    this.coordinates = [x,y]

    this.connectedNodes = undefined

  }

  connectTo(node){

  }

  isConnectedTo(node){

  }

  getCoordinates(){
    return [this.coordinates[0], this.coordinates[1]];
  }

}

export default ConnectNode
