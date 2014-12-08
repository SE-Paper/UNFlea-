if(typeof Object.create!=="function"){Object.create=function(e){function t(){}t.prototype=e;return new t}}(function(e,t,n,r){var i={init:function(t,n){var r=this;r.elem=n;r.$elem=e(n);r.imageSrc=r.$elem.data("zoom-image")?r.$elem.data("zoom-image"):r.$elem.attr("src");r.options=e.extend({},e.fn.elevateZoom.options,t);if(r.options.tint){r.options.lensColour="none",r.options.lensOpacity="1"}if(r.options.zoomType=="inner"){r.options.showLens=false}r.$elem.parent().removeAttr("title").removeAttr("alt");r.zoomImage=r.imageSrc;r.refresh(1);e("#"+r.options.gallery+" a").click(function(t){if(r.options.galleryActiveClass){e("#"+r.options.gallery+" a").removeClass(r.options.galleryActiveClass);e(this).addClass(r.options.galleryActiveClass)}t.preventDefault();if(e(this).data("zoom-image")){r.zoomImagePre=e(this).data("zoom-image")}else{r.zoomImagePre=e(this).data("image")}r.swaptheimage(e(this).data("image"),r.zoomImagePre);return false})},refresh:function(e){var t=this;setTimeout(function(){t.fetch(t.imageSrc)},e||t.options.refresh)},fetch:function(e){var t=this;var n=new Image;n.onload=function(){t.largeWidth=n.width;t.largeHeight=n.height;t.startZoom();t.currentImage=t.imageSrc;t.options.onZoomedImageLoaded(t.$elem)};n.src=e;return},startZoom:function(){var t=this;t.nzWidth=t.$elem.width();t.nzHeight=t.$elem.height();t.isWindowActive=false;t.isLensActive=false;t.isTintActive=false;t.overWindow=false;if(t.options.imageCrossfade){t.zoomWrap=t.$elem.wrap('<div style="height:'+t.nzHeight+"px;width:"+t.nzWidth+'px;" class="zoomWrapper" />');t.$elem.css("position","absolute")}t.zoomLock=1;t.scrollingLock=false;t.changeBgSize=false;t.currentZoomLevel=t.options.zoomLevel;t.nzOffset=t.$elem.offset();t.widthRatio=t.largeWidth/t.currentZoomLevel/t.nzWidth;t.heightRatio=t.largeHeight/t.currentZoomLevel/t.nzHeight;if(t.options.zoomType=="window"){t.zoomWindowStyle="overflow: hidden;"+"background-position: 0px 0px;text-align:center;"+"background-color: "+String(t.options.zoomWindowBgColour)+";width: "+String(t.options.zoomWindowWidth)+"px;"+"height: "+String(t.options.zoomWindowHeight)+"px;float: left;"+"background-size: "+t.largeWidth/t.currentZoomLevel+"px "+t.largeHeight/t.currentZoomLevel+"px;"+"display: none;z-index:100;"+"border: "+String(t.options.borderSize)+"px solid "+t.options.borderColour+";background-repeat: no-repeat;"+"position: absolute;"}if(t.options.zoomType=="inner"){var n=t.$elem.css("border-left-width");t.zoomWindowStyle="overflow: hidden;"+"margin-left: "+String(n)+";"+"margin-top: "+String(n)+";"+"background-position: 0px 0px;"+"width: "+String(t.nzWidth)+"px;"+"height: "+String(t.nzHeight)+"px;float: left;"+"display: none;"+"cursor:"+t.options.cursor+";"+"px solid "+t.options.borderColour+";background-repeat: no-repeat;"+"position: absolute;"}if(t.options.zoomType=="window"){if(t.nzHeight<t.options.zoomWindowWidth/t.widthRatio){lensHeight=t.nzHeight}else{lensHeight=String(t.options.zoomWindowHeight/t.heightRatio)}if(t.largeWidth<t.options.zoomWindowWidth){lensWidth=t.nzWidth}else{lensWidth=t.options.zoomWindowWidth/t.widthRatio}t.lensStyle="background-position: 0px 0px;width: "+String(t.options.zoomWindowWidth/t.widthRatio)+"px;height: "+String(t.options.zoomWindowHeight/t.heightRatio)+"px;float: right;display: none;"+"overflow: hidden;"+"z-index: 999;"+"-webkit-transform: translateZ(0);"+"opacity:"+t.options.lensOpacity+";filter: alpha(opacity = "+t.options.lensOpacity*100+"); zoom:1;"+"width:"+lensWidth+"px;"+"height:"+lensHeight+"px;"+"background-color:"+t.options.lensColour+";"+"cursor:"+t.options.cursor+";"+"border: "+t.options.lensBorderSize+"px"+" solid "+t.options.lensBorderColour+";background-repeat: no-repeat;position: absolute;"}t.tintStyle="display: block;"+"position: absolute;"+"background-color: "+t.options.tintColour+";"+"filter:alpha(opacity=0);"+"opacity: 0;"+"width: "+t.nzWidth+"px;"+"height: "+t.nzHeight+"px;";t.lensRound="";if(t.options.zoomType=="lens"){t.lensStyle="background-position: 0px 0px;"+"float: left;display: none;"+"border: "+String(t.options.borderSize)+"px solid "+t.options.borderColour+";"+"width:"+String(t.options.lensSize)+"px;"+"height:"+String(t.options.lensSize)+"px;"+"background-repeat: no-repeat;position: absolute;"}if(t.options.lensShape=="round"){t.lensRound="border-top-left-radius: "+String(t.options.lensSize/2+t.options.borderSize)+"px;"+"border-top-right-radius: "+String(t.options.lensSize/2+t.options.borderSize)+"px;"+"border-bottom-left-radius: "+String(t.options.lensSize/2+t.options.borderSize)+"px;"+"border-bottom-right-radius: "+String(t.options.lensSize/2+t.options.borderSize)+"px;"}t.zoomContainer=e('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:'+t.nzOffset.left+"px;top:"+t.nzOffset.top+"px;height:"+t.nzHeight+"px;width:"+t.nzWidth+'px;"></div>');e("body").append(t.zoomContainer);if(t.options.containLensZoom&&t.options.zoomType=="lens"){t.zoomContainer.css("overflow","hidden")}if(t.options.zoomType!="inner"){t.zoomLens=e("<div class='zoomLens' style='"+t.lensStyle+t.lensRound+"'>&nbsp;</div>").appendTo(t.zoomContainer).click(function(){t.$elem.trigger("click")});if(t.options.tint){t.tintContainer=e("<div/>").addClass("tintContainer");t.zoomTint=e("<div class='zoomTint' style='"+t.tintStyle+"'></div>");t.zoomLens.wrap(t.tintContainer);t.zoomTintcss=t.zoomLens.after(t.zoomTint);t.zoomTintImage=e('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: '+t.nzWidth+"px; height: "+t.nzHeight+'px;" src="'+t.imageSrc+'">').appendTo(t.zoomLens).click(function(){t.$elem.trigger("click")})}}if(isNaN(t.options.zoomWindowPosition)){t.zoomWindow=e("<div style='z-index:999;left:"+t.windowOffsetLeft+"px;top:"+t.windowOffsetTop+"px;"+t.zoomWindowStyle+"' class='zoomWindow'>&nbsp;</div>").appendTo("body").click(function(){t.$elem.trigger("click")})}else{t.zoomWindow=e("<div style='z-index:999;left:"+t.windowOffsetLeft+"px;top:"+t.windowOffsetTop+"px;"+t.zoomWindowStyle+"' class='zoomWindow'>&nbsp;</div>").appendTo(t.zoomContainer).click(function(){t.$elem.trigger("click")})}t.zoomWindowContainer=e("<div/>").addClass("zoomWindowContainer").css("width",t.options.zoomWindowWidth);t.zoomWindow.wrap(t.zoomWindowContainer);if(t.options.zoomType=="lens"){t.zoomLens.css({backgroundImage:"url('"+t.imageSrc+"')"})}if(t.options.zoomType=="window"){t.zoomWindow.css({backgroundImage:"url('"+t.imageSrc+"')"})}if(t.options.zoomType=="inner"){t.zoomWindow.css({backgroundImage:"url('"+t.imageSrc+"')"})}t.$elem.bind("touchmove",function(e){e.preventDefault();var n=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];t.setPosition(n)});t.zoomContainer.bind("touchmove",function(e){if(t.options.zoomType=="inner"){t.showHideWindow("show")}e.preventDefault();var n=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];t.setPosition(n)});t.zoomContainer.bind("touchend",function(e){t.showHideWindow("hide");if(t.options.showLens){t.showHideLens("hide")}if(t.options.tint&&t.options.zoomType!="inner"){t.showHideTint("hide")}});t.$elem.bind("touchend",function(e){t.showHideWindow("hide");if(t.options.showLens){t.showHideLens("hide")}if(t.options.tint&&t.options.zoomType!="inner"){t.showHideTint("hide")}});if(t.options.showLens){t.zoomLens.bind("touchmove",function(e){e.preventDefault();var n=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];t.setPosition(n)});t.zoomLens.bind("touchend",function(e){t.showHideWindow("hide");if(t.options.showLens){t.showHideLens("hide")}if(t.options.tint&&t.options.zoomType!="inner"){t.showHideTint("hide")}})}t.$elem.bind("mousemove",function(e){if(t.overWindow==false){t.setElements("show")}if(t.lastX!==e.clientX||t.lastY!==e.clientY){t.setPosition(e);t.currentLoc=e}t.lastX=e.clientX;t.lastY=e.clientY});t.zoomContainer.bind("mousemove",function(e){if(t.overWindow==false){t.setElements("show")}if(t.lastX!==e.clientX||t.lastY!==e.clientY){t.setPosition(e);t.currentLoc=e}t.lastX=e.clientX;t.lastY=e.clientY});if(t.options.zoomType!="inner"){t.zoomLens.bind("mousemove",function(e){if(t.lastX!==e.clientX||t.lastY!==e.clientY){t.setPosition(e);t.currentLoc=e}t.lastX=e.clientX;t.lastY=e.clientY})}if(t.options.tint&&t.options.zoomType!="inner"){t.zoomTint.bind("mousemove",function(e){if(t.lastX!==e.clientX||t.lastY!==e.clientY){t.setPosition(e);t.currentLoc=e}t.lastX=e.clientX;t.lastY=e.clientY})}if(t.options.zoomType=="inner"){t.zoomWindow.bind("mousemove",function(e){if(t.lastX!==e.clientX||t.lastY!==e.clientY){t.setPosition(e);t.currentLoc=e}t.lastX=e.clientX;t.lastY=e.clientY})}t.zoomContainer.add(t.$elem).mouseenter(function(){if(t.overWindow==false){t.setElements("show")}}).mouseleave(function(){if(!t.scrollLock){t.setElements("hide")}});if(t.options.zoomType!="inner"){t.zoomWindow.mouseenter(function(){t.overWindow=true;t.setElements("hide")}).mouseleave(function(){t.overWindow=false})}if(t.options.zoomLevel!=1){}if(t.options.minZoomLevel){t.minZoomLevel=t.options.minZoomLevel}else{t.minZoomLevel=t.options.scrollZoomIncrement*2}if(t.options.scrollZoom){t.zoomContainer.add(t.$elem).bind("mousewheel DOMMouseScroll MozMousePixelScroll",function(n){t.scrollLock=true;clearTimeout(e.data(this,"timer"));e.data(this,"timer",setTimeout(function(){t.scrollLock=false},250));var r=n.originalEvent.wheelDelta||n.originalEvent.detail*-1;n.stopImmediatePropagation();n.stopPropagation();n.preventDefault();if(r/120>0){if(t.currentZoomLevel>=t.minZoomLevel){t.changeZoomLevel(t.currentZoomLevel-t.options.scrollZoomIncrement)}}else{if(t.options.maxZoomLevel){if(t.currentZoomLevel<=t.options.maxZoomLevel){t.changeZoomLevel(parseFloat(t.currentZoomLevel)+t.options.scrollZoomIncrement)}}else{t.changeZoomLevel(parseFloat(t.currentZoomLevel)+t.options.scrollZoomIncrement)}}return false})}},setElements:function(e){var t=this;if(!t.options.zoomEnabled){return false}if(e=="show"){if(t.isWindowSet){if(t.options.zoomType=="inner"){t.showHideWindow("show")}if(t.options.zoomType=="window"){t.showHideWindow("show")}if(t.options.showLens){t.showHideLens("show")}if(t.options.tint&&t.options.zoomType!="inner"){t.showHideTint("show")}}}if(e=="hide"){if(t.options.zoomType=="window"){t.showHideWindow("hide")}if(!t.options.tint){t.showHideWindow("hide")}if(t.options.showLens){t.showHideLens("hide")}if(t.options.tint){t.showHideTint("hide")}}},setPosition:function(e){var t=this;if(!t.options.zoomEnabled){return false}t.nzHeight=t.$elem.height();t.nzWidth=t.$elem.width();t.nzOffset=t.$elem.offset();if(t.options.tint&&t.options.zoomType!="inner"){t.zoomTint.css({top:0});t.zoomTint.css({left:0})}if(t.options.responsive&&!t.options.scrollZoom){if(t.options.showLens){if(t.nzHeight<t.options.zoomWindowWidth/t.widthRatio){lensHeight=t.nzHeight}else{lensHeight=String(t.options.zoomWindowHeight/t.heightRatio)}if(t.largeWidth<t.options.zoomWindowWidth){lensWidth=t.nzWidth}else{lensWidth=t.options.zoomWindowWidth/t.widthRatio}t.widthRatio=t.largeWidth/t.nzWidth;t.heightRatio=t.largeHeight/t.nzHeight;if(t.options.zoomType!="lens"){if(t.nzHeight<t.options.zoomWindowWidth/t.widthRatio){lensHeight=t.nzHeight}else{lensHeight=String(t.options.zoomWindowHeight/t.heightRatio)}if(t.options.zoomWindowWidth<t.options.zoomWindowWidth){lensWidth=t.nzWidth}else{lensWidth=t.options.zoomWindowWidth/t.widthRatio}t.zoomLens.css("width",lensWidth);t.zoomLens.css("height",lensHeight);if(t.options.tint){t.zoomTintImage.css("width",t.nzWidth);t.zoomTintImage.css("height",t.nzHeight)}}if(t.options.zoomType=="lens"){t.zoomLens.css({width:String(t.options.lensSize)+"px",height:String(t.options.lensSize)+"px"})}}}t.zoomContainer.css({top:t.nzOffset.top});t.zoomContainer.css({left:t.nzOffset.left});t.mouseLeft=parseInt(e.pageX-t.nzOffset.left);t.mouseTop=parseInt(e.pageY-t.nzOffset.top);if(t.options.zoomType=="window"){t.Etoppos=t.mouseTop<t.zoomLens.height()/2;t.Eboppos=t.mouseTop>t.nzHeight-t.zoomLens.height()/2-t.options.lensBorderSize*2;t.Eloppos=t.mouseLeft<0+t.zoomLens.width()/2;t.Eroppos=t.mouseLeft>t.nzWidth-t.zoomLens.width()/2-t.options.lensBorderSize*2}if(t.options.zoomType=="inner"){t.Etoppos=t.mouseTop<t.nzHeight/2/t.heightRatio;t.Eboppos=t.mouseTop>t.nzHeight-t.nzHeight/2/t.heightRatio;t.Eloppos=t.mouseLeft<0+t.nzWidth/2/t.widthRatio;t.Eroppos=t.mouseLeft>t.nzWidth-t.nzWidth/2/t.widthRatio-t.options.lensBorderSize*2}if(t.mouseLeft<=0||t.mouseTop<0||t.mouseLeft>t.nzWidth||t.mouseTop>t.nzHeight){t.setElements("hide");return}else{if(t.options.showLens){t.lensLeftPos=String(t.mouseLeft-t.zoomLens.width()/2);t.lensTopPos=String(t.mouseTop-t.zoomLens.height()/2)}if(t.Etoppos){t.lensTopPos=0}if(t.Eloppos){t.windowLeftPos=0;t.lensLeftPos=0;t.tintpos=0}if(t.options.zoomType=="window"){if(t.Eboppos){t.lensTopPos=Math.max(t.nzHeight-t.zoomLens.height()-t.options.lensBorderSize*2,0)}if(t.Eroppos){t.lensLeftPos=t.nzWidth-t.zoomLens.width()-t.options.lensBorderSize*2}}if(t.options.zoomType=="inner"){if(t.Eboppos){t.lensTopPos=Math.max(t.nzHeight-t.options.lensBorderSize*2,0)}if(t.Eroppos){t.lensLeftPos=t.nzWidth-t.nzWidth-t.options.lensBorderSize*2}}if(t.options.zoomType=="lens"){t.windowLeftPos=String(((e.pageX-t.nzOffset.left)*t.widthRatio-t.zoomLens.width()/2)*-1);t.windowTopPos=String(((e.pageY-t.nzOffset.top)*t.heightRatio-t.zoomLens.height()/2)*-1);t.zoomLens.css({backgroundPosition:t.windowLeftPos+"px "+t.windowTopPos+"px"});if(t.changeBgSize){if(t.nzHeight>t.nzWidth){if(t.options.zoomType=="lens"){t.zoomLens.css({"background-size":t.largeWidth/t.newvalueheight+"px "+t.largeHeight/t.newvalueheight+"px"})}t.zoomWindow.css({"background-size":t.largeWidth/t.newvalueheight+"px "+t.largeHeight/t.newvalueheight+"px"})}else{if(t.options.zoomType=="lens"){t.zoomLens.css({"background-size":t.largeWidth/t.newvaluewidth+"px "+t.largeHeight/t.newvaluewidth+"px"})}t.zoomWindow.css({"background-size":t.largeWidth/t.newvaluewidth+"px "+t.largeHeight/t.newvaluewidth+"px"})}t.changeBgSize=false}t.setWindowPostition(e)}if(t.options.tint&&t.options.zoomType!="inner"){t.setTintPosition(e)}if(t.options.zoomType=="window"){t.setWindowPostition(e)}if(t.options.zoomType=="inner"){t.setWindowPostition(e)}if(t.options.showLens){if(t.fullwidth&&t.options.zoomType!="lens"){t.lensLeftPos=0}t.zoomLens.css({left:t.lensLeftPos+"px",top:t.lensTopPos+"px"})}}},showHideWindow:function(e){var t=this;if(e=="show"){if(!t.isWindowActive){if(t.options.zoomWindowFadeIn){t.zoomWindow.stop(true,true,false).fadeIn(t.options.zoomWindowFadeIn)}else{t.zoomWindow.show()}t.isWindowActive=true}}if(e=="hide"){if(t.isWindowActive){if(t.options.zoomWindowFadeOut){t.zoomWindow.stop(true,true).fadeOut(t.options.zoomWindowFadeOut)}else{t.zoomWindow.hide()}t.isWindowActive=false}}},showHideLens:function(e){var t=this;if(e=="show"){if(!t.isLensActive){if(t.options.lensFadeIn){t.zoomLens.stop(true,true,false).fadeIn(t.options.lensFadeIn)}else{t.zoomLens.show()}t.isLensActive=true}}if(e=="hide"){if(t.isLensActive){if(t.options.lensFadeOut){t.zoomLens.stop(true,true).fadeOut(t.options.lensFadeOut)}else{t.zoomLens.hide()}t.isLensActive=false}}},showHideTint:function(e){var t=this;if(e=="show"){if(!t.isTintActive){if(t.options.zoomTintFadeIn){t.zoomTint.css({opacity:t.options.tintOpacity}).animate().stop(true,true).fadeIn("slow")}else{t.zoomTint.css({opacity:t.options.tintOpacity}).animate();t.zoomTint.show()}t.isTintActive=true}}if(e=="hide"){if(t.isTintActive){if(t.options.zoomTintFadeOut){t.zoomTint.stop(true,true).fadeOut(t.options.zoomTintFadeOut)}else{t.zoomTint.hide()}t.isTintActive=false}}},setLensPostition:function(e){},setWindowPostition:function(t){var n=this;if(!isNaN(n.options.zoomWindowPosition)){switch(n.options.zoomWindowPosition){case 1:n.windowOffsetTop=n.options.zoomWindowOffety;n.windowOffsetLeft=+n.nzWidth;break;case 2:if(n.options.zoomWindowHeight>n.nzHeight){n.windowOffsetTop=(n.options.zoomWindowHeight/2-n.nzHeight/2)*-1;n.windowOffsetLeft=n.nzWidth}else{}break;case 3:n.windowOffsetTop=n.nzHeight-n.zoomWindow.height()-n.options.borderSize*2;n.windowOffsetLeft=n.nzWidth;break;case 4:n.windowOffsetTop=n.nzHeight;n.windowOffsetLeft=n.nzWidth;break;case 5:n.windowOffsetTop=n.nzHeight;n.windowOffsetLeft=n.nzWidth-n.zoomWindow.width()-n.options.borderSize*2;break;case 6:if(n.options.zoomWindowHeight>n.nzHeight){n.windowOffsetTop=n.nzHeight;n.windowOffsetLeft=(n.options.zoomWindowWidth/2-n.nzWidth/2+n.options.borderSize*2)*-1}else{}break;case 7:n.windowOffsetTop=n.nzHeight;n.windowOffsetLeft=0;break;case 8:n.windowOffsetTop=n.nzHeight;n.windowOffsetLeft=(n.zoomWindow.width()+n.options.borderSize*2)*-1;break;case 9:n.windowOffsetTop=n.nzHeight-n.zoomWindow.height()-n.options.borderSize*2;n.windowOffsetLeft=(n.zoomWindow.width()+n.options.borderSize*2)*-1;break;case 10:if(n.options.zoomWindowHeight>n.nzHeight){n.windowOffsetTop=(n.options.zoomWindowHeight/2-n.nzHeight/2)*-1;n.windowOffsetLeft=(n.zoomWindow.width()+n.options.borderSize*2)*-1}else{}break;case 11:n.windowOffsetTop=n.options.zoomWindowOffety;n.windowOffsetLeft=(n.zoomWindow.width()+n.options.borderSize*2)*-1;break;case 12:n.windowOffsetTop=(n.zoomWindow.height()+n.options.borderSize*2)*-1;n.windowOffsetLeft=(n.zoomWindow.width()+n.options.borderSize*2)*-1;break;case 13:n.windowOffsetTop=(n.zoomWindow.height()+n.options.borderSize*2)*-1;n.windowOffsetLeft=0;break;case 14:if(n.options.zoomWindowHeight>n.nzHeight){n.windowOffsetTop=(n.zoomWindow.height()+n.options.borderSize*2)*-1;n.windowOffsetLeft=(n.options.zoomWindowWidth/2-n.nzWidth/2+n.options.borderSize*2)*-1}else{}break;case 15:n.windowOffsetTop=(n.zoomWindow.height()+n.options.borderSize*2)*-1;n.windowOffsetLeft=n.nzWidth-n.zoomWindow.width()-n.options.borderSize*2;break;case 16:n.windowOffsetTop=(n.zoomWindow.height()+n.options.borderSize*2)*-1;n.windowOffsetLeft=n.nzWidth;break;default:n.windowOffsetTop=n.options.zoomWindowOffety;n.windowOffsetLeft=n.nzWidth}}else{n.externalContainer=e("#"+n.options.zoomWindowPosition);n.externalContainerWidth=n.externalContainer.width();n.externalContainerHeight=n.externalContainer.height();n.externalContainerOffset=n.externalContainer.offset();n.windowOffsetTop=n.externalContainerOffset.top;n.windowOffsetLeft=n.externalContainerOffset.left}n.isWindowSet=true;n.windowOffsetTop=n.windowOffsetTop+n.options.zoomWindowOffety;n.windowOffsetLeft=n.windowOffsetLeft+n.options.zoomWindowOffetx;n.zoomWindow.css({top:n.windowOffsetTop});n.zoomWindow.css({left:n.windowOffsetLeft});if(n.options.zoomType=="inner"){n.zoomWindow.css({top:0});n.zoomWindow.css({left:0})}n.windowLeftPos=String(((t.pageX-n.nzOffset.left)*n.widthRatio-n.zoomWindow.width()/2)*-1);n.windowTopPos=String(((t.pageY-n.nzOffset.top)*n.heightRatio-n.zoomWindow.height()/2)*-1);if(n.Etoppos){n.windowTopPos=0}if(n.Eloppos){n.windowLeftPos=0}if(n.Eboppos){n.windowTopPos=(n.largeHeight/n.currentZoomLevel-n.zoomWindow.height())*-1}if(n.Eroppos){n.windowLeftPos=(n.largeWidth/n.currentZoomLevel-n.zoomWindow.width())*-1}if(n.fullheight){n.windowTopPos=0}if(n.fullwidth){n.windowLeftPos=0}if(n.options.zoomType=="window"||n.options.zoomType=="inner"){if(n.zoomLock==1){if(n.widthRatio<=1){n.windowLeftPos=0}if(n.heightRatio<=1){n.windowTopPos=0}}if(n.largeHeight<n.options.zoomWindowHeight){n.windowTopPos=0}if(n.largeWidth<n.options.zoomWindowWidth){n.windowLeftPos=0}if(n.options.easing){if(!n.xp){n.xp=0}if(!n.yp){n.yp=0}if(!n.loop){n.loop=setInterval(function(){n.xp+=(n.windowLeftPos-n.xp)/n.options.easingAmount;n.yp+=(n.windowTopPos-n.yp)/n.options.easingAmount;if(n.scrollingLock){clearInterval(n.loop);n.xp=n.windowLeftPos;n.yp=n.windowTopPos;n.xp=((t.pageX-n.nzOffset.left)*n.widthRatio-n.zoomWindow.width()/2)*-1;n.yp=((t.pageY-n.nzOffset.top)*n.heightRatio-n.zoomWindow.height()/2)*-1;if(n.changeBgSize){if(n.nzHeight>n.nzWidth){if(n.options.zoomType=="lens"){n.zoomLens.css({"background-size":n.largeWidth/n.newvalueheight+"px "+n.largeHeight/n.newvalueheight+"px"})}n.zoomWindow.css({"background-size":n.largeWidth/n.newvalueheight+"px "+n.largeHeight/n.newvalueheight+"px"})}else{if(n.options.zoomType!="lens"){n.zoomLens.css({"background-size":n.largeWidth/n.newvaluewidth+"px "+n.largeHeight/n.newvalueheight+"px"})}n.zoomWindow.css({"background-size":n.largeWidth/n.newvaluewidth+"px "+n.largeHeight/n.newvaluewidth+"px"})}n.changeBgSize=false}n.zoomWindow.css({backgroundPosition:n.windowLeftPos+"px "+n.windowTopPos+"px"});n.scrollingLock=false;n.loop=false}else{if(n.changeBgSize){if(n.nzHeight>n.nzWidth){if(n.options.zoomType=="lens"){n.zoomLens.css({"background-size":n.largeWidth/n.newvalueheight+"px "+n.largeHeight/n.newvalueheight+"px"})}n.zoomWindow.css({"background-size":n.largeWidth/n.newvalueheight+"px "+n.largeHeight/n.newvalueheight+"px"})}else{if(n.options.zoomType!="lens"){n.zoomLens.css({"background-size":n.largeWidth/n.newvaluewidth+"px "+n.largeHeight/n.newvaluewidth+"px"})}n.zoomWindow.css({"background-size":n.largeWidth/n.newvaluewidth+"px "+n.largeHeight/n.newvaluewidth+"px"})}n.changeBgSize=false}n.zoomWindow.css({backgroundPosition:n.xp+"px "+n.yp+"px"})}},16)}}else{if(n.changeBgSize){if(n.nzHeight>n.nzWidth){if(n.options.zoomType=="lens"){n.zoomLens.css({"background-size":n.largeWidth/n.newvalueheight+"px "+n.largeHeight/n.newvalueheight+"px"})}n.zoomWindow.css({"background-size":n.largeWidth/n.newvalueheight+"px "+n.largeHeight/n.newvalueheight+"px"})}else{if(n.options.zoomType=="lens"){n.zoomLens.css({"background-size":n.largeWidth/n.newvaluewidth+"px "+n.largeHeight/n.newvaluewidth+"px"})}if(n.largeHeight/n.newvaluewidth<n.options.zoomWindowHeight){n.zoomWindow.css({"background-size":n.largeWidth/n.newvaluewidth+"px "+n.largeHeight/n.newvaluewidth+"px"})}else{n.zoomWindow.css({"background-size":n.largeWidth/n.newvalueheight+"px "+n.largeHeight/n.newvalueheight+"px"})}}n.changeBgSize=false}n.zoomWindow.css({backgroundPosition:n.windowLeftPos+"px "+n.windowTopPos+"px"})}}},setTintPosition:function(e){var t=this;t.nzOffset=t.$elem.offset();t.tintpos=String((e.pageX-t.nzOffset.left-t.zoomLens.width()/2)*-1);t.tintposy=String((e.pageY-t.nzOffset.top-t.zoomLens.height()/2)*-1);if(t.Etoppos){t.tintposy=0}if(t.Eloppos){t.tintpos=0}if(t.Eboppos){t.tintposy=(t.nzHeight-t.zoomLens.height()-t.options.lensBorderSize*2)*-1}if(t.Eroppos){t.tintpos=(t.nzWidth-t.zoomLens.width()-t.options.lensBorderSize*2)*-1}if(t.options.tint){if(t.fullheight){t.tintposy=0}if(t.fullwidth){t.tintpos=0}t.zoomTintImage.css({left:t.tintpos+"px"});t.zoomTintImage.css({top:t.tintposy+"px"})}},swaptheimage:function(t,n){var r=this;var i=new Image;if(r.options.loadingIcon){r.spinner=e("<div style=\"background: url('"+r.options.loadingIcon+"') no-repeat center;height:"+r.nzHeight+"px;width:"+r.nzWidth+'px;z-index: 2000;position: absolute; background-position: center center;"></div>');r.$elem.after(r.spinner)}r.options.onImageSwap(r.$elem);i.onload=function(){r.largeWidth=i.width;r.largeHeight=i.height;r.zoomImage=n;r.zoomWindow.css({"background-size":r.largeWidth+"px "+r.largeHeight+"px"});r.zoomWindow.css({"background-size":r.largeWidth+"px "+r.largeHeight+"px"});r.swapAction(t,n);return};i.src=n},swapAction:function(t,n){var r=this;var i=new Image;i.onload=function(){r.nzHeight=i.height;r.nzWidth=i.width;r.options.onImageSwapComplete(r.$elem);r.doneCallback();return};i.src=t;r.currentZoomLevel=r.options.zoomLevel;r.options.maxZoomLevel=false;if(r.options.zoomType=="lens"){r.zoomLens.css({backgroundImage:"url('"+n+"')"})}if(r.options.zoomType=="window"){r.zoomWindow.css({backgroundImage:"url('"+n+"')"})}if(r.options.zoomType=="inner"){r.zoomWindow.css({backgroundImage:"url('"+n+"')"})}r.currentImage=n;if(r.options.imageCrossfade){var s=r.$elem;var o=s.clone();r.$elem.attr("src",t);r.$elem.after(o);o.stop(true).fadeOut(r.options.imageCrossfade,function(){e(this).remove()});r.$elem.width("auto").removeAttr("width");r.$elem.height("auto").removeAttr("height");s.fadeIn(r.options.imageCrossfade);if(r.options.tint&&r.options.zoomType!="inner"){var u=r.zoomTintImage;var a=u.clone();r.zoomTintImage.attr("src",n);r.zoomTintImage.after(a);a.stop(true).fadeOut(r.options.imageCrossfade,function(){e(this).remove()});u.fadeIn(r.options.imageCrossfade);r.zoomTint.css({height:r.$elem.height()});r.zoomTint.css({width:r.$elem.width()})}r.zoomContainer.css("height",r.$elem.height());r.zoomContainer.css("width",r.$elem.width());if(r.options.zoomType=="inner"){if(!r.options.constrainType){r.zoomWrap.parent().css("height",r.$elem.height());r.zoomWrap.parent().css("width",r.$elem.width());r.zoomWindow.css("height",r.$elem.height());r.zoomWindow.css("width",r.$elem.width())}}if(r.options.imageCrossfade){r.zoomWrap.css("height",r.$elem.height());r.zoomWrap.css("width",r.$elem.width())}}else{r.$elem.attr("src",t);if(r.options.tint){r.zoomTintImage.attr("src",n);r.zoomTintImage.attr("height",r.$elem.height());r.zoomTintImage.css({height:r.$elem.height()});r.zoomTint.css({height:r.$elem.height()})}r.zoomContainer.css("height",r.$elem.height());r.zoomContainer.css("width",r.$elem.width());if(r.options.imageCrossfade){r.zoomWrap.css("height",r.$elem.height());r.zoomWrap.css("width",r.$elem.width())}}if(r.options.constrainType){if(r.options.constrainType=="height"){r.zoomContainer.css("height",r.options.constrainSize);r.zoomContainer.css("width","auto");if(r.options.imageCrossfade){r.zoomWrap.css("height",r.options.constrainSize);r.zoomWrap.css("width","auto");r.constwidth=r.zoomWrap.width()}else{r.$elem.css("height",r.options.constrainSize);r.$elem.css("width","auto");r.constwidth=r.$elem.width()}if(r.options.zoomType=="inner"){r.zoomWrap.parent().css("height",r.options.constrainSize);r.zoomWrap.parent().css("width",r.constwidth);r.zoomWindow.css("height",r.options.constrainSize);r.zoomWindow.css("width",r.constwidth)}if(r.options.tint){r.tintContainer.css("height",r.options.constrainSize);r.tintContainer.css("width",r.constwidth);r.zoomTint.css("height",r.options.constrainSize);r.zoomTint.css("width",r.constwidth);r.zoomTintImage.css("height",r.options.constrainSize);r.zoomTintImage.css("width",r.constwidth)}}if(r.options.constrainType=="width"){r.zoomContainer.css("height","auto");r.zoomContainer.css("width",r.options.constrainSize);if(r.options.imageCrossfade){r.zoomWrap.css("height","auto");r.zoomWrap.css("width",r.options.constrainSize);r.constheight=r.zoomWrap.height()}else{r.$elem.css("height","auto");r.$elem.css("width",r.options.constrainSize);r.constheight=r.$elem.height()}if(r.options.zoomType=="inner"){r.zoomWrap.parent().css("height",r.constheight);r.zoomWrap.parent().css("width",r.options.constrainSize);r.zoomWindow.css("height",r.constheight);r.zoomWindow.css("width",r.options.constrainSize)}if(r.options.tint){r.tintContainer.css("height",r.constheight);r.tintContainer.css("width",r.options.constrainSize);r.zoomTint.css("height",r.constheight);r.zoomTint.css("width",r.options.constrainSize);r.zoomTintImage.css("height",r.constheight);r.zoomTintImage.css("width",r.options.constrainSize)}}}},doneCallback:function(){var e=this;if(e.options.loadingIcon){e.spinner.hide()}e.nzOffset=e.$elem.offset();e.nzWidth=e.$elem.width();e.nzHeight=e.$elem.height();e.currentZoomLevel=e.options.zoomLevel;e.widthRatio=e.largeWidth/e.nzWidth;e.heightRatio=e.largeHeight/e.nzHeight;if(e.options.zoomType=="window"){if(e.nzHeight<e.options.zoomWindowWidth/e.widthRatio){lensHeight=e.nzHeight}else{lensHeight=String(e.options.zoomWindowHeight/e.heightRatio)}if(e.options.zoomWindowWidth<e.options.zoomWindowWidth){lensWidth=e.nzWidth}else{lensWidth=e.options.zoomWindowWidth/e.widthRatio}if(e.zoomLens){e.zoomLens.css("width",lensWidth);e.zoomLens.css("height",lensHeight)}}},getCurrentImage:function(){var e=this;return e.zoomImage},getGalleryList:function(){var t=this;t.gallerylist=[];if(t.options.gallery){e("#"+t.options.gallery+" a").each(function(){var n="";if(e(this).data("zoom-image")){n=e(this).data("zoom-image")}else if(e(this).data("image")){n=e(this).data("image")}if(n==t.zoomImage){t.gallerylist.unshift({href:""+n+"",title:e(this).find("img").attr("title")})}else{t.gallerylist.push({href:""+n+"",title:e(this).find("img").attr("title")})}})}else{t.gallerylist.push({href:""+t.zoomImage+"",title:e(this).find("img").attr("title")})}return t.gallerylist},changeZoomLevel:function(e){var t=this;t.scrollingLock=true;t.newvalue=parseFloat(e).toFixed(2);newvalue=parseFloat(e).toFixed(2);maxheightnewvalue=t.largeHeight/(t.options.zoomWindowHeight/t.nzHeight*t.nzHeight);maxwidthtnewvalue=t.largeWidth/(t.options.zoomWindowWidth/t.nzWidth*t.nzWidth);if(t.options.zoomType!="inner"){if(maxheightnewvalue<=newvalue){t.heightRatio=t.largeHeight/maxheightnewvalue/t.nzHeight;t.newvalueheight=maxheightnewvalue;t.fullheight=true}else{t.heightRatio=t.largeHeight/newvalue/t.nzHeight;t.newvalueheight=newvalue;t.fullheight=false}if(maxwidthtnewvalue<=newvalue){t.widthRatio=t.largeWidth/maxwidthtnewvalue/t.nzWidth;t.newvaluewidth=maxwidthtnewvalue;t.fullwidth=true}else{t.widthRatio=t.largeWidth/newvalue/t.nzWidth;t.newvaluewidth=newvalue;t.fullwidth=false}if(t.options.zoomType=="lens"){if(maxheightnewvalue<=newvalue){t.fullwidth=true;t.newvaluewidth=maxheightnewvalue}else{t.widthRatio=t.largeWidth/newvalue/t.nzWidth;t.newvaluewidth=newvalue;t.fullwidth=false}}}if(t.options.zoomType=="inner"){maxheightnewvalue=parseFloat(t.largeHeight/t.nzHeight).toFixed(2);maxwidthtnewvalue=parseFloat(t.largeWidth/t.nzWidth).toFixed(2);if(newvalue>maxheightnewvalue){newvalue=maxheightnewvalue}if(newvalue>maxwidthtnewvalue){newvalue=maxwidthtnewvalue}if(maxheightnewvalue<=newvalue){t.heightRatio=t.largeHeight/newvalue/t.nzHeight;if(newvalue>maxheightnewvalue){t.newvalueheight=maxheightnewvalue}else{t.newvalueheight=newvalue}t.fullheight=true}else{t.heightRatio=t.largeHeight/newvalue/t.nzHeight;if(newvalue>maxheightnewvalue){t.newvalueheight=maxheightnewvalue}else{t.newvalueheight=newvalue}t.fullheight=false}if(maxwidthtnewvalue<=newvalue){t.widthRatio=t.largeWidth/newvalue/t.nzWidth;if(newvalue>maxwidthtnewvalue){t.newvaluewidth=maxwidthtnewvalue}else{t.newvaluewidth=newvalue}t.fullwidth=true}else{t.widthRatio=t.largeWidth/newvalue/t.nzWidth;t.newvaluewidth=newvalue;t.fullwidth=false}}scrcontinue=false;if(t.options.zoomType=="inner"){if(t.nzWidth>=t.nzHeight){if(t.newvaluewidth<=maxwidthtnewvalue){scrcontinue=true}else{scrcontinue=false;t.fullheight=true;t.fullwidth=true}}if(t.nzHeight>t.nzWidth){if(t.newvaluewidth<=maxwidthtnewvalue){scrcontinue=true}else{scrcontinue=false;t.fullheight=true;t.fullwidth=true}}}if(t.options.zoomType!="inner"){scrcontinue=true}if(scrcontinue){t.zoomLock=0;t.changeZoom=true;if(t.options.zoomWindowHeight/t.heightRatio<=t.nzHeight){t.currentZoomLevel=t.newvalueheight;if(t.options.zoomType!="lens"&&t.options.zoomType!="inner"){t.changeBgSize=true;t.zoomLens.css({height:String(t.options.zoomWindowHeight/t.heightRatio)+"px"})}if(t.options.zoomType=="lens"||t.options.zoomType=="inner"){t.changeBgSize=true}}if(t.options.zoomWindowWidth/t.widthRatio<=t.nzWidth){if(t.options.zoomType!="inner"){if(t.newvaluewidth>t.newvalueheight){t.currentZoomLevel=t.newvaluewidth}}if(t.options.zoomType!="lens"&&t.options.zoomType!="inner"){t.changeBgSize=true;t.zoomLens.css({width:String(t.options.zoomWindowWidth/t.widthRatio)+"px"})}if(t.options.zoomType=="lens"||t.options.zoomType=="inner"){t.changeBgSize=true}}if(t.options.zoomType=="inner"){t.changeBgSize=true;if(t.nzWidth>t.nzHeight){t.currentZoomLevel=t.newvaluewidth}if(t.nzHeight>t.nzWidth){t.currentZoomLevel=t.newvaluewidth}}}t.setPosition(t.currentLoc)},closeAll:function(){if(self.zoomWindow){self.zoomWindow.hide()}if(self.zoomLens){self.zoomLens.hide()}if(self.zoomTint){self.zoomTint.hide()}},changeState:function(e){var t=this;if(e=="enable"){t.options.zoomEnabled=true}if(e=="disable"){t.options.zoomEnabled=false}}};e.fn.elevateZoom=function(t){return this.each(function(){var n=Object.create(i);n.init(t,this);e.data(this,"elevateZoom",n)})};e.fn.elevateZoom.options={zoomActivation:"hover",zoomEnabled:true,preloading:1,zoomLevel:1,scrollZoom:false,scrollZoomIncrement:.1,minZoomLevel:false,maxZoomLevel:false,easing:false,easingAmount:12,lensSize:200,zoomWindowWidth:400,zoomWindowHeight:400,zoomWindowOffetx:0,zoomWindowOffety:0,zoomWindowPosition:1,zoomWindowBgColour:"#fff",lensFadeIn:false,lensFadeOut:false,debug:false,zoomWindowFadeIn:false,zoomWindowFadeOut:false,zoomWindowAlwaysShow:false,zoomTintFadeIn:false,zoomTintFadeOut:false,borderSize:4,showLens:true,borderColour:"#888",lensBorderSize:1,lensBorderColour:"#000",lensShape:"square",zoomType:"window",containLensZoom:false,lensColour:"white",lensOpacity:.4,lenszoom:false,tint:false,tintColour:"#333",tintOpacity:.4,gallery:false,galleryActiveClass:"zoomGalleryActive",imageCrossfade:false,constrainType:false,constrainSize:false,loadingIcon:false,cursor:"default",responsive:true,onComplete:e.noop,onZoomedImageLoaded:function(){},onImageSwap:e.noop,onImageSwapComplete:e.noop}})(jQuery,window,document)