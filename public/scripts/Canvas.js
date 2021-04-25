const defaultViewportWidth = 1920
const defaultViewportHeight = 1080
const defaultUnit = 10

class ContextLayer{

  constructor(viewPortWidth, viewPortHeight){

    setViewport(viewPortWidth,viewPortHeight)

  }

  getDefaultxCurrentViewportRatios(){
    return [defaultViewportWidth/this.viewportWidth, defaultViewportHeight/this.viewportHeight]
  }

  setViewport(viewportWidth, viewportHeight){
    if(typeof(viewPortWidth) !== "number" || typeof(viewPortHeight) !== "number") throw "Bad Input"

    this.viewportWidth = viewportWidth
    this.viewportHeight = viewportHeight
  }

}
