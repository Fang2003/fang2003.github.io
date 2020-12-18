//<script>
if (document.layers) 
	{
	origWidth = innerWidth;
	origHeight = innerHeight;
	}
if (document.layers) 
	{
	onresize = reDo;
	}

 //Variables
 window.onerror = null;
 var bName = navigator.appName;
 var bVer = parseInt(navigator.appVersion);
 var NS4 = (bName == "Netscape" && bVer >= 4);
 var IE4 = (bName == "Microsoft Internet Explorer" && bVer >= 4);
 var NS3 = (bName == "Netscape" && bVer < 4);
 var IE3 = (bName == "Microsoft Internet Explorer" && bVer < 4);
 var menuActive = 0
 var menuOn = 0
 var onLayer
 var secondlayer = null
 var LastFrame = null
 var timeOn = null
 var loaded = 0
 var displayedmenu = "";
 var newmenu = "";
 var openlayer = false;
 var picCur=0;
 var rotateID;
 var TimerID;
 var menu1 = new Image(); menu1.src = "images/invis.gif";
 var menu2 = new Image(); menu2.src = "images/bluearrow.gif";
 var start_pos = 0
 var destination = 106
 var animationrate = 20
 var timerRunning = false
 var TimerOn1
 var starttime
 var rotateImages ="backward"
 var menuColor = "#000000"

 //PRECACHE IMAGES HERE
Introduction0 = new Image(); Introduction0.src = "images/leftnav_7a.gif"; Introduction1 = new Image(); Introduction1.src = "images/leftnav_7.gif"; 
News0 = new Image(); News0.src = "images/leftnav_10a.gif"; News1 = new Image(); News1.src = "images/leftnav_10.gif"; 
PhotoAlbum0 = new Image(); PhotoAlbum0.src = "images/leftnav_13a.gif"; PhotoAlbum1 = new Image(); PhotoAlbum1.src = "images/leftnav_13.gif"; 
Argue0 = new Image(); Argue0.src = "images/leftnav_16a.gif"; Argue1 = new Image(); Argue1.src = "images/leftnav_16.gif"; 
Science0 = new Image(); Science0.src = "images/leftnav_19a.gif"; Science1 = new Image(); Science1.src = "images/leftnav_19.gif"; 
email0 = new Image(); email0.src = "images/leftnav_22a.gif"; email1 = new Image(); email1.src = "images/leftnav_22.gif"; 	 
//patch0 = new Image(); patch0.src = "images/blank_arrow.gif"; patch1 = new Image(); patch1.src = "images/extras_16.gif" 	 
//order0 = new Image(); order0.src = "images/blank_arrow.gif"; order1 = new Image(); order1.src = "images/extras_16.gif" 

//web0 = new Image(); web0.src = "images/blank_arrow.gif"; web1 = new Image(); web1.src = "images/extras_16.gif" 	 
//demo0 = new Image(); demo0.src = "images/blank_arrow.gif"; demo1 = new Image(); demo1.src = "images/extras_16.gif" 

//print0 = new Image(); print0.src = "images/printbar_2.gif"; print1 = new Image(); print1.src = "images/printbar_2over.gif"; 
//email0 = new Image(); email0.src = "images/printbar_4.gif"; email1 = new Image(); email1.src = "images/printbar_4over.gif";


//Layer variables/Browser sniffer
if (NS4 || IE4) {
	if (navigator.appName == "Netscape") {
		layerStyleRef="layer.";
		layerRef="document.layers";
		styleSwitch="";
		visible="show";
		topRef='top';
		leftRef='left';
		heightRef = 'clip.height';
	 }else{
		layerStyleRef="layer.style.";
		layerRef="document.all";
		styleSwitch=".style";
		visible="visible";
		topRef='pixelTop';
		leftRef='pixelLeft';
		heightRef = 'pixelHeight';
	 }
}
 


//Netscape resize fix
function reDo()
	{
	if (innerWidth != origWidth || innerHeight != origHeight) location.reload();
	}
 



//Sliding Layers Callling function
function moveLayer(activelayer)
{ 	
   if (secondlayer != null) {eval(layerRef+'["'+secondlayer+'"]'+styleSwitch+'.visibility="hidden"');}
   secondlayer =null
   onLayer = activelayer;
	if (timerRunning == true)
	{
	  //clearTimeout(TimerOn1)
	}

	if (!openlayer) 
	{	
		Open(activelayer)
	}
	else
	{ 	newmenu = activelayer;
		clearTimeout(TimerOn1);
		Close(displayedmenu);
	}
}

//Close a sliding layer
function Close(displayedmenu)
{	Closelayerlocation  = eval(layerRef+'["'+displayedmenu+'"]'+styleSwitch+'.'+leftRef);
	activepos = displayedmenu
	if (Closelayerlocation >=start_pos)
	{	timerRunning = true
		Closelayerlocation-=animationrate;
		eval(layerRef+'["'+displayedmenu+'"]'+styleSwitch+'.'+leftRef+'='+Closelayerlocation)
		TimerOn1 = setTimeout("Close(activepos)",0)
	}
	else
	{	
		openlayer = false;
		eval(layerRef+'["'+displayedmenu+'"]'+styleSwitch+'.visibility="hidden"');
		if (newmenu != displayedmenu) 
			{ 
			Open(newmenu)
			}
		else
			{
			//timerRunning = false;
			}
	}
}

//Open a sliding layer
function Open(activelayer)
{	eval(layerRef+'["'+activelayer+'"]'+styleSwitch+'.visibility="'+visible+'"');
	layerlocation  = eval(layerRef+'["'+activelayer+'"]'+styleSwitch+'.'+leftRef);
	activepos = activelayer
	
	if (layerlocation <=destination)
	{ 	timerRunning = true;
		layerlocation+=animationrate;
		eval(layerRef+'["'+activelayer+'"]'+styleSwitch+'.'+leftRef+'='+layerlocation)
		TimerOn1 = setTimeout("Open(activepos)",0)
	}
	timerRunning = false;
	displayedmenu = activelayer
	openlayer = true;
}

 
//BUTTON ROLLOVERS for the left nav bar
function change(Name,Image,No) { 
	if (NS4) document.leftNav.document.images[Name].src =eval(Image + No + ".src"); 
	if (IE4) document.images[Name].src =eval(Image + No + ".src"); 
}
 
//Button Rollover of other images
function change2(Name,Image,No) { 
	document.images[Name].src =eval(Image + No + ".src")
}
 
// HIDE MENU - used for non-sliding layer sub menus (like genre sub lists)
function hideLayer(layerName){
		if (layerName != null) {

					if (menuActive == 0) {
					 if (NS4 || IE4) {
					  eval(layerRef+'["'+layerName+'"]'+styleSwitch+'.visibility="hidden"');
					 }
					}
		 }
}

// TIMER FOR BUTTON MOUSE OUT
function btnTimer() {
 timeOn = setTimeout("btnOut()",1000)
}

// BUTTON MOUSE OUT
function btnOut(layerName) {
 if (menuActive == 0) {
  hideLayer(secondlayer)
  }
}

// MENU MOUSE OVER  
function menuOver(itemName,layerID) {
 if (NS4 || IE4) 
 { 
 onLayer = layerID

  if (NS4) 
	{ 
    document[onLayer].document.images[itemName].src = menu2.src
	} else {
     document.all[itemName].src = menu2.src
	}
  }
}

// MENU MOUSE OUT 
function menuOut(itemName) {
 menuActive = 0 
  if (NS4 || IE4) {
  if (NS4) {
    document[onLayer].document.images[itemName].src = menu1.src
  } else {
     document.all[itemName].src = menu1.src
  }
  }
  //timeOn = setTimeout("hideLayer(onLayer)", 400)
 }

// Creates menu object
function menuLink(title, url, menulink, linkloc) {
 this.title = title
 this.url = url
 this.menulink = menulink
 this.linkloc = linkloc 
}

// Builds menu table
function menuMaker(menuArray) {
	var arrowimage = ""
	 n = ""
	 j = eval(menuArray + ".length") - 1;
	 topofLayer = "<div ID='" + eval(menuArray + ".id") + "'>"
	 wraptop = "<table border='0' cellspacing='0' cellpadding='0'><tr><td><img src='images/hot_up_left.gif'></td><td background='images/hot_top.gif'><font size=1>&nbsp;</font></td><td width='12'><img src='images/hot_up_right.gif'></td></tr><tr><td background='images/hot_left.gif'><font size=1>&nbsp;</font></td><td bgcolor='#000000'>"
	 topTable = topofLayer + wraptop+ "<table border='0' cellspacing='0' cellpadding='0' bgcolor='" + menuColor + "'>"
	 endrow = "</td></tr>"
	 btmTable = "</table>"
	 wrapbottom = "</td><td background='images/hot_right.gif'><font size=1>&nbsp;</font></td></tr><tr><td><img src='images/hot_lower_left.gif'></td><td background='images/hot_bottom.gif'><font size=1>&nbsp;</font></td><td><img src='images/hot_lower_right.gif'></td></tr></table>"
	 btmofLayer =  btmTable+wrapbottom+"</div>"
	 
	 n += topTable
	 for( var i = 0; i <=j; i++) {
		 linktext = eval(menuArray + '[' + i + '].title')
		 linkurl = eval(menuArray + '[' + i + '].url')
		 linkloc = eval(menuArray + '[' + i + '].linkloc')
		 imageOver = eval(menuArray + '.imgname') + i 
		 menulink = eval(menuArray + '[' + i + '].menulink')
		 idname = eval(menuArray + ".id") 
		 
		 if (linkloc == null) {
			linkloc = "_top"
		 }
		 
		 if (menulink !=null) 
			{
			arrowimage =" <img src =\"images/leftarrow.gif\">"
			txt_btnTime = "btnTimer(); "
			}
		 else
			{
			arrowimage = ""
			if (idname == "companyMenu") {txt_btnTime = "btnTimer(); "} else {txt_btnTime = ""}
			}
		
		 bgnrow = "<tr><td><img src='http://feedback.interplay.com/nav/spacer.gif' width=10 height=8 alt='' border='0' name='" + eval(menuArray + ".imgname") + i + "'></td><td>";
		 n += bgnrow + "<a href='" + linkurl + "' onMouseOver='menuOver(\"" + imageOver + "\",\"" +  idname + "\"); showLayer(\"" + menulink + "\")' onMouseOut='"+txt_btnTime+"menuOut(\"" + imageOver + "\")' class='menus' target='" + linkloc + "'>" + eval(menuArray + "[" + i + "].title") + "</a>" +arrowimage+ endrow
	 	
	 }
	 n +=  btmofLayer
    return n
}

//Screen shot slide show
function rotate() {
			if (pics.length !=0)
			{
			 if(rotateID) {
			 clearInterval(rotateID)
			 }
			 if (rotateImages =="forward") 
				{
				forward1();
				}

			if (rotateImages =="backward")
				{
				backward1();
				}
			 rotateID = setInterval("rotate()", 2000)
			}
}


//change the direction of the screen shot rotation
function changeRotate(direction)
{   clearInterval(rotateID);
	rotateImages = direction;
	rotate();
}


//forward rotation of the screen shots
function forward1() {
	clearInterval(rotateID)
	 var picLast = pics.length - 1
	 document.picRotate.src = pics[picLast]
 
	 if(picCur >= picLast)
	 {
		var picNew = 0
	 }else{
		var picNew = picCur + 1
	 }
	 document.picRotate.src = pics[picNew]
	 picCur = picNew
	 
	 if (locations[picCur] != "")
	 {
		document.clicklink.src = "images/extras_11.gif"
	 }else{
		document.clicklink.src = "images/extras_1a.gif"
	 }
 
}

//backward rotation of the screen shots
function backward1() {
	clearInterval(rotateID)
	 var picLast = 1
	 document.picRotate.src = pics[picLast]
 
	 if(picCur >= picLast)
	 {
		var picNew = picNew = picCur - 1
	 }else{
		var picNew = pics.length - 1
	 }
	 document.picRotate.src = pics[picNew]
	 picCur = picNew
	 
	 if (locations[picCur] != "")
	 {
		document.clicklink.src = "images/extras_11.gif"
	 }else{
		document.clicklink.src = "images/extras_1a.gif"
	 }
 
}

//Show sub menus- used for non-sliding layer sub menus (like genre sub lists)
function showLayer(layerName){
	if (timeOn != null) 
		{
		clearTimeout(timeOn)
		}
	if ((secondlayer !=null) && (secondlayer !=onLayer))
	//if an existing child layer is not open and the current layer does not equal the mouse overlayer then
	{
		eval(layerRef+'["'+secondlayer+'"]'+styleSwitch+'.visibility="hidden"');
	}


	if ( (layerName !=null) && (layerName !="null"))
	{ 
		eval(layerRef+'["'+layerName+'"]'+styleSwitch+'.visibility="visible"');
		secondlayer = layerName
	}
		
}


//changes the forms action property between the default search.asp, and send.asp
function Email()
   {
	clearedforLaunch = true;
	if (document.topname.FromEmail.value == '') 
		{alert("Don't you want to tell your friend\n who this email came from?");
		clearedforLaunch = false;
		}

	
	if (document.topname.ToEmail.value == '')
		{alert("To whom to you wish to send this page to?");
		clearedforLaunch = false;
		}


	
	if (clearedforLaunch)
	{
	document.topname.action = 'send.asp';
	document.topname.method='post'
	document.topname.submit();
	}
   }


//Open the download window
function downloadwindow(idcode)
{
		self.name = "displaywindow";
		url  = "download.asp?idcode="+idcode
		options = "menubar=no,toolbar=no,resizable=no,scrollbars=Yes,height=375,width=400,alwaysRaised=yes,left="+(screen.width/2 - 160)+",top=40";
		downloadWindow = window.open(url, "download", options);
}


// Creates Photo object
function FrameLink(id, photo, words) {
 this.id    = id
 this.photo = photo
 this.words = words
}

// Builds Photo Frame
function PhotoMaker(PhotoFrame) {
              n='<DIV id='+eval(PhotoFrame+".id")+' class=Frame>'+
		'<TABLE border=0 cellPadding=0 cellSpacing=0><TBODY><TR><TD valign="top"><TABLE border=0 cellPadding=0 cellSpacing=0><TR><TD><IMG src="images/hot_up_left.gif" width="15" height="18"></TD><TD background="images/hot_top.gif"></TD><TD><IMG src="images/hot_up_right.gif" width="14" height="18"></TD></TR>'+
		'<TR><TD background="images/hot_left.gif"></TD><TD bgColor=#000000><IMG src="'+eval(PhotoFrame+".photo")+'"></TD><TD background="images/hot_right.gif"></TD></TR>'+
		'<TR><TD><IMG src="images/hot_lower_left.gif" width="15" height="19"></TD><TD background="images/hot_bottom.gif"></TD><TD><IMG src="images/hot_lower_right.gif" width="14" height="19"></TD></TR></TABLE></TD>'+
  		'<TD valign="top"><TABLE border=0 cellPadding=0 cellSpacing=0><TR><TD><IMG height=60 src="images/topnav_11.gif"	width=23></TD></TR></TABLE></TD>'+
  		'<TD valign="top"><TABLE border=0 cellPadding=0 cellSpacing=0>'+
     		'<TR><TD><IMG src="images/hot_up_left.gif" width="15" height="18"></TD><TD background="images/hot_top.gif"></TD><TD><IMG src="images/hot_up_right.gif" width="14" height="18"></TD></TR>'+
     		'<TR><TD background="images/hot_left.gif"></TD>'+
       		'<TD bgColor=#000000><Font class=PhIntr>'+eval(PhotoFrame+".words")+'</Font></TD>'+
		'<TD background="images/hot_right.gif"></TD></TR>'+
		'<TR><TD><IMG src="images/hot_lower_left.gif" width="15" height="19"></TD><TD background="images/hot_bottom.gif"></TD><TD><IMG src="images/hot_lower_right.gif" width="14" height="19"></TD></TR></TABLE>'+
		'</TD></TR></TBODY></TABLE></DIV>'
    return n
}

// Hide the Photo Frame
function hideFrame(FrameID) {
  if ( (FrameID !=null) && (FrameID !="null"))
  { 
     eval(layerRef+'["'+FrameID+'"]'+styleSwitch+'.visibility="hidden"');
     LastFrame = null;
  }
}

// Show the Photo Frame
function showFrame(FrameID) {
  if ((FrameID !=null) && (FrameID !="null") && (LastFrame != FrameID))
  { 
     eval(layerRef+'["'+FrameID+'"]'+styleSwitch+'.visibility="visible"');
     eval('height='+layerRef+'["'+FrameID+'"]'+styleSwitch+'.height')
     eval('width='+layerRef+'["'+FrameID+'"]'+styleSwitch+'.width')
     width=parseInt(width)
     height=parseInt(height)
//     height=100
     width=300 
     if (event.clientX > (window.document.body.clientWidth - 25 - width))
     {
      newleft=event.clientX + document.body.scrollLeft - 25 - width
     }
     else
     {
      newleft=document.body.scrollLeft + event.clientX + 25
     }
     eval(layerRef+'["'+FrameID+'"]'+styleSwitch+'.pixelLeft=newleft')
     if (event.clientY > (window.document.body.clientHeight - 10 - height))
     {
     newtop=event.clientY + document.body.scrollTop - 10 - height
     }
     else
     {
     newtop=document.body.scrollTop + event.clientY + 10
     }
     eval(layerRef+'["'+FrameID+'"]'+styleSwitch+'.pixelTop=newtop')
     LastFrame = FrameID;
  }
}


//Menu Arrays
IntroduceMenu = new Array(3)
IntroduceMenu.id = "IntroductionMenu"
IntroduceMenu.imgname = "Introduce"
IntroduceMenu[0] = new menuLink("班级介绍", "ClassIntro.htm", null, "")
IntroduceMenu[1] = new menuLink("老师介绍", "TeacherIntro.htm", null, "")
IntroduceMenu[2] = new menuLink("班干部介绍", "HeadIntro.htm", null, "")

NeMenu = new Array(5)
NeMenu.id = "NewsMenu"
NeMenu.imgname = "Ne"
NeMenu[0] = new menuLink("我班辩论赛杀入决赛", "News1.htm", null)
NeMenu[1] = new menuLink("我班希望杯取得优异成绩", "News2.htm", null)
NeMenu[2] = new menuLink("男女羽毛球双双铩羽", "News3.htm", null)
NeMenu[3] = new menuLink("牛文斗当选学生会主席", "News4.htm", null)
NeMenu[4] = new menuLink("我班被评为优秀班集体", "News5.htm", null)

PAMenu = new Array(2) 
PAMenu.id = "PhotoAlbumMenu"
PAMenu.imgname = "PA"
PAMenu[0] = new menuLink("同学酷相", "StuPhotos.htm", null)
PAMenu[1] = new menuLink("春游留影", "SpringOutting.htm", null)

ArMenu = new Array(4)
ArMenu.id = "ArgueMenu"
ArMenu.imgname = "Ar"
ArMenu[0] = new menuLink("辩论首页", "ArgueIndex.htm", null)
ArMenu[1] = new menuLink("辩手介绍", "ArguerIntro.htm", null)
ArMenu[2] = new menuLink("赛　　程", "ArgueTime.htm", null)
ArMenu[3] = new menuLink("辩辞精选", "#", "ArguePaper")

ScMenu = new Array(2)
ScMenu.id = "ScienceMenu"
ScMenu.imgname = "sc"
ScMenu[0] = new menuLink("和平号专辑", "#", "Peace")
ScMenu[1] = new menuLink("科技快讯", "QuickMsg.htm", null)


PeaMenu = new Array(7)
PeaMenu.id = "Peace"
PeaMenu.imgname = "Pea"
PeaMenu[0] = new menuLink("俄各方谈“和平”号身后事", "PeachSays.htm", null)
PeaMenu[1] = new menuLink("“和平”号短讯", "PeachShort.htm", null)
PeaMenu[2] = new menuLink("“和平”号15年在太空干了些什么？", "PeachWork.htm", null)
PeaMenu[3] = new menuLink("“和平”号之“最”", "PeachMost.htm", null)
PeaMenu[4] = new menuLink("“和平”号：辉煌的坠落", "PeachFall.htm", null)
PeaMenu[5] = new menuLink("和平回家", "BackHome.htm", null)
PeaMenu[6] = new menuLink("俄罗斯民众垂泪“和平”号", "PeachMiss.htm", null)

APMenu = new Array(3)
APMenu.id = "ArguePaper"
APMenu.imgname = "AP"
APMenu[0] = new menuLink("现在的中国该不该申奥", "Argue1.htm", null)
APMenu[1] = new menuLink("是严格管制还是顺其自然更有利于成才", "Argue2.htm", null)
APMenu[2] = new menuLink("一屋不扫何（可）以扫天下", "Argue3.htm", null)

document.write(menuMaker("IntroduceMenu"))
document.write(menuMaker("NeMenu"))
document.write(menuMaker("PAMenu"))
document.write(menuMaker("ArMenu"))
document.write(menuMaker("ScMenu"))

document.write(menuMaker("PeaMenu"))
document.write(menuMaker("APMenu"))

//creates the slide menus on load of all pages except product.asp
function init()
{
	eval(layerRef+'["IntroductionMenu"]'+styleSwitch+'.'+leftRef+'='+start_pos)
	eval(layerRef+'["NewsMenu"]'+styleSwitch+'.'+leftRef+'='+start_pos)
	eval(layerRef+'["PhotoAlbum"]'+styleSwitch+'.'+leftRef+'='+start_pos)
	eval(layerRef+'["ArgueMenu"]'+styleSwitch+'.'+leftRef+'='+start_pos)
	eval(layerRef+'["ScienceMenu"]'+styleSwitch+'.'+leftRef+'='+start_pos)
}
