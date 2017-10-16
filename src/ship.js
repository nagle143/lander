

export default class Ship {
  constructor(screenWidth, screenHeight) {
    this.x = screenWidth / 2;
    this.y = 10;
    this.angle = 2;
  }

  render(ctx) {
    ctx.save();
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.moveTo(0, -10);
    ctx.lineTo(4, 10);
    ctx.lineTo(-4, -10);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }
}
