f=0
draw=_=>{
 f++||createCanvas(W=500,W)
 background(0)
 noStroke()
 for(i=0;i<TAU;i+=PI/5)
 for(n=-20;n<21;n++)
 for(r=1;r<250;r*=1.5){
  R=r+abs(tan(n/20)*r/2)
  rect(250+R*cos(I=i+n/40+f*noise(r)/30)-r/18,250+R*sin(I)-r/18,r/9)
 }
}





