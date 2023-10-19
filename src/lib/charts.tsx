export function getXY(data:number,total: number,chartsize: number){
    var radius = chartsize/2;
    var angle  = (data/total)*360;
    var x = radius * Math.sin(Math.PI * 2 * angle / 360);
    var y = radius * Math.cos(Math.PI * 2 * angle / 360);
    var posx = x
    var posy = (radius-(y))
  
    return [posx,posy];
  }