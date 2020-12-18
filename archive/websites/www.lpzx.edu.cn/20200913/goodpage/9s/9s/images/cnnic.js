var cnnic0;
var cnnic1;
var cnnic2;
var cnnic3;
var cnnic4;
var cnnic5;
var cnnic6;
var cnnic7;
var cnnic8;
var cnnic9;
var cnnic10;
var brOK=false;
var mie=false;
var aver=parseInt(navigator.appVersion.substring(0,1));
var aname=navigator.appName;

function checkbrOK()
{if(aname.indexOf("Internet Explorer")!=-1)
   {if(aver>=4) brOK=navigator.javaEnabled();
    mie=true;
   }
 if(aname.indexOf("Netscape")!=-1)  
   {if(aver>=4) brOK=navigator.javaEnabled();}
}

var vmin=2;
var vmax=5;
var vr=2;
var timer1;

function cnnic(cnnicname,width,height)
{this.named=cnnicname;
 this.vx=vmin+vmax*Math.random();
 this.vy=vmin+vmax*Math.random();
 this.w=width;
 this.h=height;
 this.xx=0;
 this.yy=0;
 this.timer1=null;
}

function movecnnic(cnnicname)
{
 if(brOK)
  {eval("cnnic="+cnnicname);
   if(!mie)
    {pageX=window.pageXOffset;
     pageW=window.innerWidth;
     pageY=window.pageYOffset;
     pageH=window.innerHeight;
    }
   else
    {pageX=window.document.body.scrollLeft;
     pageW=window.document.body.offsetWidth-8;
     pageY=window.document.body.scrollTop;
     pageH=window.document.body.offsetHeight;
    } 

   cnnic.xx=cnnic.xx+cnnic.vx;
   cnnic.yy=cnnic.yy+cnnic.vy;
   
   cnnic.vx+=vr*(Math.random()-0.5);
   cnnic.vy+=vr*(Math.random()-0.5);
   if(cnnic.vx>(vmax+vmin))  cnnic.vx=(vmax+vmin)*2-cnnic.vx;
   if(cnnic.vx<(-vmax-vmin)) cnnic.vx=(-vmax-vmin)*2-cnnic.vx;
   if(cnnic.vy>(vmax+vmin))  cnnic.vy=(vmax+vmin)*2-cnnic.vy;
   if(cnnic.vy<(-vmax-vmin)) cnnic.vy=(-vmax-vmin)*2-cnnic.vy;


   if(cnnic.xx<=pageX)
     {cnnic.xx=pageX;
      cnnic.vx=vmin+vmax*Math.random();
     }
   if(cnnic.xx>=pageX+pageW-cnnic.w)
     {cnnic.xx=pageX+pageW-cnnic.w;
      cnnic.vx=-vmin-vmax*Math.random();
     }
   if(cnnic.yy<=pageY)
     {cnnic.yy=pageY;
      cnnic.vy=vmin+vmax*Math.random();
     }
   if(cnnic.yy>=pageY+pageH-cnnic.h)
     {cnnic.yy=pageY+pageH-cnnic.h;
      cnnic.vy=-vmin-vmax*Math.random();
     }

   if(!mie)
      {eval('document.'+cnnic.named+'.top ='+cnnic.yy);
       eval('document.'+cnnic.named+'.left='+cnnic.xx);
      } 
   else
      {eval('document.all.'+cnnic.named+'.style.pixelLeft='+cnnic.xx);
       eval('document.all.'+cnnic.named+'.style.pixelTop ='+cnnic.yy); 
      }
   cnnic.timer1=setTimeout("movecnnic('"+cnnic.named+"')",100);
  }
}


function stopme(cnnicname)
{if(brOK)
  {//alert(cnnicname)
   eval("cnnic="+cnnicname);
   if(cnnic.timer1!=null)
    {clearTimeout(cnnic.timer1)}
  }
}

function cnnewsstart()
{checkbrOK(); 
 cnnic0=new cnnic("cnnic0",70,80);
  if(brOK) 
   { movecnnic("cnnic0");
    }
}

function newsstart()
{checkbrOK(); 
 cnnic1=new cnnic("cnnic1",70,80);
  if(brOK) 
   { movecnnic("cnnic1");
    }
}

function financestart()
{checkbrOK(); 
 cnnic2=new cnnic("cnnic2",70,80);
  if(brOK) 
   { movecnnic("cnnic2");
    }
}

function shtodaystart()
{checkbrOK(); 
 cnnic3=new cnnic("cnnic3",70,80);
  if(brOK) 
   { movecnnic("cnnic3");
    }
}

function militarystart()
{checkbrOK(); 
 cnnic4=new cnnic("cnnic4",70,80);
  if(brOK) 
   { movecnnic("cnnic4");
    }
}

function china110start()
{checkbrOK(); 
 cnnic5=new cnnic("cnnic5",70,80);
  if(brOK) 
   { movecnnic("cnnic5");
    }
}

function cnsportstart()
{checkbrOK(); 
 cnnic6=new cnnic("cnnic6",70,80);
  if(brOK) 
   { movecnnic("cnnic6");
    }
}

function sciencestart()
{checkbrOK(); 
 cnnic7=new cnnic("cnnic7",70,80);
  if(brOK) 
   { movecnnic("cnnic7");
    }
}

function educatestart()
{checkbrOK(); 
 cnnic8=new cnnic("cnnic8",70,80);
  if(brOK) 
   { movecnnic("cnnic8");
    }
}

function culturestart()
{checkbrOK(); 
 cnnic9=new cnnic("cnnic9",70,80);
  if(brOK) 
   { movecnnic("cnnic9");
    }
}

function cncnnicstart()
{checkbrOK(); 
 cnnic10=new cnnic("cnnic10",70,80);
  if(brOK) 
   { movecnnic("cnnic10");
    }
}