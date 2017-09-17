// JavaScript Document

var stageW;

var pageScrollY;

var mobileSizeS;

var transSpeed;

var footer;

$(function(){
	
	initPage();
	
});

function initPage(){
	mobileSizeS = 751;
	
	transSpeed = 300;
	
	//initDisableDoubleTab();
	
	initDropdownSelector();
	
	initToggle();
	
	initBodyScroll();
	
	initPromoBnr();
	
	initPdctDetails();
	
	initYOSLandTab();
	
	initRetainNum();
	
	initPageResize();

	initPopup();
	
};

//-------body scroll------//

function initBodyScroll(){
    $(window).scroll(function() {
        pageScrollY = $(window).scrollTop();
        setYOSLandSmartFilter();
    });

	//---
	
	pageScrollY = 0;
	setYOSLandSmartFilter();
};

//---

function enableBodyScroll(){
	$("body").removeClass("overflow-hidden");
};

function disableBodyScroll(){
	$("body").addClass("overflow-hidden");
};

//----------page resize-------------//

function initPageResize(){
	pageResize();
	
	$( window ).resize(function() {
		pageResize();
	});
};

function pageResize(){
	stageW = $( window ).width();
	
	resizeDropDown();
	
	resizeProductPanel();
	
	resizeYOSLandTab();
	
	setYOSLandSmartFilter();
};

//--------dropdown selector------------//
function initDropdownSelector(){
	
	if( $('.customDropdown').length > 0 ) {
		$('.customDropdown').each( function() {
			var d = $(this);
			if( d.parent().attr('class') != 'customDropdownHolder' ) {
				d.wrap('<div class="customDropdownHolder" />')
					.before('<div class="texter">' + d.find('option:selected').text() + '</div>')
					.change(function() {
						$(this).parent().find('.texter').html( $(this).find('option:selected').text() );
					});
				//d.parent().width(d.width()-72).wrap('<div class="customDropdownBorder" />');
			}
		});
	}

};

function resizeDropDown(){
	if( $('.customDropdown').length > 0 ) {
		$('.customDropdown').each( function() {
			var d = $(this);
			
			//d.parent().width(d.parent().parent().parent().width()-72);
			
		})
	}
};

/*--------toggle-------------------*/

var currToggleVal;

function initToggle(){
	
	if($(".toggle-hdr").length > 0){
		
		currToggleVal = 0;
		
		var theHdr = $(".toggle-hdr");
		var theTab = $(".toggle-hdr").find(".toggle-tab");
		
		theTab.click(function(){
			
			currToggleVal = theTab.index(this);
			
			var currHdr = theHdr.eq(currToggleVal);
			
			if(currHdr.hasClass("current")){
				hideToggleCtnt();
			}else{
				showToggleCtnt(currToggleVal);
			};
			
		});
		
		hideToggleCtnt();
		
	};

};

function showToggleCtnt(n){
	
	currToggleVal = n;
	
	hideToggleCtnt();
	
	var theHdr = $(".toggle-hdr");
	var theTab = $(".toggle-hdr .toggle-tab");
	var theCtnt = $(".toggle-hdr .toggle-ctnt");
	
	theHdr.eq(currToggleVal).addClass("current");
	theCtnt.eq(currToggleVal).slideDown(transSpeed);
	
};

function hideToggleCtnt(){
	
	var theHdr = $(".toggle-hdr");
	var theTab = $(".toggle-hdr .toggle-tab");
	var theCtnt = $(".toggle-hdr .toggle-ctnt");
	
	theHdr.removeClass("current");
	theCtnt.slideUp(transSpeed);
};

//-------disable double Tab-----------//
function initDisableDoubleTab(){
		
	$('a').on('touchend', function(e) {
		var el = $(this);
		var link = el.attr('href');
		var theTarget = el.attr('target');
		 
		if(theTarget == "_blank" || theTarget == "_self" || theTarget == "_top" || theTarget == "_parent"){
			window.open(link, theTarget);
		}else{
			window.location = link;
		};
	});

};

/*------promo banner----*/

var currPromoBnr;
var totalPromoBnr;

function initPromoBnr(){
	
	if($(".promo-bnr-sect").length > 0){
		
		var theBnr = $(".promo-bnr-sect").find(".promo-bnr-panel");
		var bnrNaviHdr = $(".promo-bnr-sect").find(".promo-bnr-navi-hdr");
		
		currPromoBnr = 0;
		totalPromoBnr = theBnr.length;
		
		if(totalPromoBnr > 1){
			
			bnrNaviHdr.empty();
			
			var tempStr = "";
			
			theBnr.each(function(){
				
				tempStr += '<div class="but-dot"></div>';
			});
			
			bnrNaviHdr.html(tempStr);
			
			var theDot = bnrNaviHdr.find(".but-dot");
			
			theDot.click(function(){
				
				currPromoBnr = theDot.index(this);
				
				showPromoBnr();
			});
			
			showPromoBnr();
			
		}else{
			bnrNaviHdr.hide();
		};
	};
	
};

function showPromoBnr(){
	
	var theBnr = $(".promo-bnr-sect").find(".promo-bnr-panel");
	var bnrNaviHdr = $(".promo-bnr-sect").find(".promo-bnr-navi-hdr");
	var theDot = bnrNaviHdr.find(".but-dot");
	
	hidePromoBnr();
	
	theBnr.eq(currPromoBnr).fadeIn(transSpeed);
	theDot.eq(currPromoBnr).addClass("current");
};

function hidePromoBnr(){
	
	var theBnr = $(".promo-bnr-sect").find(".promo-bnr-panel");
	var bnrNaviHdr = $(".promo-bnr-sect").find(".promo-bnr-navi-hdr");
	var theDot = bnrNaviHdr.find(".but-dot");
	
	theBnr.hide();
	theDot.removeClass("current");
};

/*-------product panel------------*/
function resizeProductPanel(){
	
	if($(".product-panel-hdr").length > 0){
		
		var thePanel = $(".product-panel-hdr").find(".product-panel");
		
		var tempNameH = 0;
		var tempBundleH = 0;
		
		thePanel.each(function(){
			
			var panelName = $(this).find(".product-name");
			var panelBundle = $(this).find(".product-bundle");
			
			panelName.removeAttr("style");
			panelBundle.removeAttr("style");
			
			if($(this).hasClass("hlight")){
				
			}else{
				
				if(panelName.height() > tempNameH){
					tempNameH = panelName.height();
				};
				
				if(panelBundle.height() > tempBundleH){
					tempBundleH = panelBundle.height();
				};
			};
			
		});
		
		//---
		if(stageW > mobileSizeS){
			
			thePanel.each(function(){
			
				if($(this).hasClass("hlight")){
					
				}else{
					
					$(this).find(".product-name").css("height", tempNameH);
					$(this).find(".product-bundle").css("height", tempBundleH);
					
				};	
			});
			
		};
		//---
	};
};

/*-------product details------------*/
function initPdctDetails(){
	
	initPdctPhotoViewer();
	
	initPdctDetailsColor();
	
	initPdctDetailsStorage();
	
	initPdctDetailsPlan();
	
	initPdctSpecs();
	
};

//---product viewer---
function initPdctPhotoViewer(){
	
	if($(".product-photo-panel").length > 0){
		
		var thePanel = $(".product-photo-panel");
		
		thePanel.each(function(){
			
			var thePhoto = $(this).find(".product-photo");
			var theNaviHdr = $(this).find(".product-photo-navi-hdr");
			
			if(thePhoto.length > 1){
				
				theNaviHdr.empty();
				
				var tempStr = "";
				
				thePhoto.each(function(){
					
					tempStr += '<div class="but-dot"></div>';
				});
				
				theNaviHdr.html(tempStr);
				
				var theDot = theNaviHdr.find(".but-dot");
				
				theDot.click(function(){
					
					var tempIndex = theDot.index(this);
					
					showCurrProductPhoto(tempIndex);
				});
				
			}else{
				theNaviHdr.hide();
			};
		});
	};
};

function showCurrProductPhoto(n){
	
	hideCurrProductPhoto();
	
	var tempHdr = $(".product-photo-panel").eq(currPdctColor);
	var tempPhoto = tempHdr.find(".product-photo").eq(n)
	var theDot = tempHdr.find(".but-dot").eq(n)
	
	tempPhoto.fadeIn(transSpeed);
	theDot.addClass("current")
};

function hideCurrProductPhoto(){
	var tempHdr = $(".product-photo-panel").eq(currPdctColor);
	var tempPhoto = tempHdr.find(".product-photo");
	var theDot = tempHdr.find(".but-dot");
	
	tempPhoto.hide();
	theDot.removeClass("current");
};

//---product color---
var currPdctColor;

function initPdctDetailsColor(){
	
	if($(".color-opt-panel").length > 0){
		
		currPdctColor = 0;
		
		var theColor = $(".color-opt-panel").find(".color-opt");
		
		theColor.click(function(){
			
			currPdctColor = theColor.index(this);
			
			showPdctColor();
		});
		
		showPdctColor();
	};
	
};

function showPdctColor(){
	
	var theColor = $(".color-opt-panel").find(".color-opt");
	var theName = theColor.eq(currPdctColor).data("colorName");
	
	var thePdctListHdr = $(".product-photo-panel");
	
	hidePdctColor();
	
	theColor.eq(currPdctColor).addClass("selected");
	$(".sub-opt-desc").find(".val").html(theName);
	
	thePdctListHdr.eq(currPdctColor).show();
	
	showCurrProductPhoto(0); //---
};

function hidePdctColor(){

	var theColor = $(".color-opt-panel").find(".color-opt");
	var thePdctListHdr = $(".product-photo-panel");
	
	theColor.removeClass("selected");
	thePdctListHdr.hide();
};

//---product storage---
var currPdctStorage;

function initPdctDetailsStorage(){
	
	if($(".storage-opt-panel").length > 0){
		
		currPdctStorage = 0;
		
		var theTab = $(".storage-opt-panel").find(".storage-opt");
		
		theTab.click(function(){
			
			currPdctStorage = theTab.index(this);
			
			showPdctStorage();
		});
		
		showPdctStorage();
	};
	
};

function showPdctStorage(){
	
	var theTab = $(".storage-opt-panel").find(".storage-opt");
	
	hidePdctStorage();
	
	theTab.eq(currPdctStorage).addClass("selected");
};

function hidePdctStorage(){
	
	var theTab = $(".storage-opt-panel").find(".storage-opt");
	
	theTab.removeClass("selected");
};

//---product plans---
var currPdctPlan;

function initPdctDetailsPlan(){
	
	if($(".product-plan-panel").length > 0){
		
		var mainTab = $(".product-plan-panel").find(".plan-panel-tab"); 
		var mainList = $(".product-plan-panel").find(".plan-panel-list-hdr");
		var mainListPnl = mainList.find(".plan-dtls-panel"); 
		
		currPdctPlan = 0;
		//---
		mainTab.click(function(){
			
			if($(this).hasClass("active")){
				hidePdctPlanList();
			}else{
				showPdctPlanList();
			};
			
		});
		
		//---
		mainListPnl.click(function(){
			
			currPdctPlan = mainListPnl.index(this);
			
			selectPdctPlan();
		});
		
		selectPdctPlan();
		//---
	};
	
};

function showPdctPlanList(){
	
	var mainTab = $(".product-plan-panel").find(".plan-panel-tab");
	var mainList = $(".product-plan-panel").find(".plan-panel-list-hdr"); 
	
	mainTab.addClass("active");
	mainList.slideDown(transSpeed);
	
};

function hidePdctPlanList(){
	
	var mainTab = $(".product-plan-panel").find(".plan-panel-tab");
	var mainList = $(".product-plan-panel").find(".plan-panel-list-hdr");
	
	mainTab.removeClass("active");
	mainList.slideUp(transSpeed);
};

function selectPdctPlan(){
	
	hidePdctPlanList();
	
	var mainTab = $(".product-plan-panel").find(".plan-panel-tab");
	var mainTabPnl = mainTab.find(".plan-dtls-panel");
	
	var mainList = $(".product-plan-panel").find(".plan-panel-list-hdr");
	var mainListPnl = mainList.find(".plan-dtls-panel").eq(currPdctPlan);
	
	mainTabPnl.empty();
	
	var tempStr = mainListPnl.html();
	var tempVal = mainListPnl.data("planVal");
	
	mainTabPnl.html(tempStr);
	mainTabPnl.data("planVal",tempVal);
};

//---product specs---
var currPdctSpecs;

function initPdctSpecs(){
	
	if($(".yos-pdct-spec-sect .panel-tab").length > 0){
		
		currPdctSpecs  = 0;
			
		var theTab = $(".yos-pdct-spec-sect .panel-tab");
		
		theTab.click(function(){
			
			currPdctSpecs = theTab.index(this);
			
			showPdctSpecs();
		});
		
		showPdctSpecs();
	};
};

function showPdctSpecs(){
	
	var theTab = $(".yos-pdct-spec-sect .panel-tab");
	var theCtnt = $(".yos-pdct-spec-sect .panel-ctnt-hdr");
	
	hidePdctSpecs();
	
	theTab.eq(currPdctSpecs).addClass("current");
	theCtnt.eq(currPdctSpecs).show();
};

function hidePdctSpecs(){

	var theTab = $(".yos-pdct-spec-sect .panel-tab");
	var theCtnt = $(".yos-pdct-spec-sect .panel-ctnt-hdr");
	
	theTab.removeClass("current");
	theCtnt.hide();
};

/*-----YOS - landing tab-------*/

var currYOSTab;

var currYOSTabSlider;
var totalYOSTabSlider;

function initYOSLandTab(){
	
	if($(".yos-pdct-tab-hdr").length > 0){
		
		//--set the size
		var theTab = $(".yos-pdct-tab-hdr").find(".panel-tab");
		
		currYOSTab = 0;
		totalYOSTabSlider = theTab.length;
		
		//resizeYOSLandTab();
		
		//---view content--
		var thePdctTab = $(".yos-pdct-tab-hdr").find(".tab-pdct");
		
		thePdctTab.click(function(){
			
			currYOSTab = thePdctTab.index(this);
			
			showYOSLandCtnt();
		});
		
		//-----tab slider---
		var arrLeft = $(".panel-tab-overflow-hdr .arr-left");
		var arrRight = $(".panel-tab-overflow-hdr .arr-right");
		
		arrLeft.click(function(){
			viewPrevYOSTab();
		});
		
		arrRight.click(function(){
			viewNextYOSTab();
		});
		
		//---
		
		showYOSLandCtnt();
		//---
	};
	
};

function resizeYOSLandTab(){
	
	if($(".yos-pdct-tab-hdr").length > 0){
		var theTab = $(".yos-pdct-tab-hdr").find(".panel-tab");
		var theTabW;
			
		theTab.removeAttr("style");
		$(".yos-pdct-tab-list").removeAttr("style");
		
		if(stageW > mobileSizeS){
			
			theTabW = 100/theTab.length;
			theTab.css("width", theTabW+"%");
		}else{
			
			theTabW = 120;
			theTab.css("width", theTabW);
			
			currYOSTabSlider = 0;
			
			$(".yos-pdct-tab-list").css("width", (theTabW*theTab.length));
			$(".yos-pdct-tab-list").css("left", 0);
		};	
		
	
	};
};
//---
function viewPrevYOSTab(){
	
	currYOSTabSlider --;
	
	if(currYOSTabSlider < 0){
		
		currYOSTabSlider = 0;
	}else{
		
	};
	
	showYOSTabSlider();
};

function viewNextYOSTab(){
	
	currYOSTabSlider ++;
	
	if(currYOSTabSlider > totalYOSTabSlider - 1){
		
		currYOSTabSlider = totalYOSTabSlider - 1;
	}else{
		
	};
	
	showYOSTabSlider();
};

function showYOSTabSlider(){
	
	var theLeft = -(currYOSTabSlider*120);
	var overflowHdrW = $(".yos-pdct-tab-hdr").width();
	var listW = $(".yos-pdct-tab-list").width();
	
	if(theLeft <= (overflowHdrW - listW)){
		theLeft = (overflowHdrW - listW)
	};
	
	$(".yos-pdct-tab-list").animate({left: theLeft}, transSpeed);
		
};

//---
function showYOSLandCtnt(){
	
	var thePdctTab = $(".yos-pdct-tab-hdr").find(".tab-pdct");
	var thePdctCtnt = $(".yos-pdct-ctnt-hdr");
	
	hideYOSLandCtnt();
	
	thePdctTab.eq(currYOSTab).addClass("current");
	thePdctCtnt.eq(currYOSTab).show();
};

function hideYOSLandCtnt(){
	
	var thePdctTab = $(".yos-pdct-tab-hdr").find(".tab-pdct");
	var thePdctCtnt = $(".yos-pdct-ctnt-hdr");
	
	thePdctTab.removeClass("current");
	thePdctCtnt.hide();
	
};

/*----YOS filter tab----*/
function setYOSLandSmartFilter(){
	
	var smartTab = $(".yos-smart-tab");
	var smartFilter = $(".yos-smart-filter");
	
	if(smartTab.length > 0){
		
		var theInnerHdr = $(".yos-landing .inner-ctnt-hdr");
		
		var bnrH = $(".content-sect-yos .promo-bnr-sect").height();
				
		if($('.header-sect').hasClass("mobile")){
			
			if(pageScrollY > bnrH + 110){
			
				smartTab.addClass("fixed");
				smartFilter.addClass("fixed");
				theInnerHdr.addClass("fixed");	
			}else{
				
				smartTab.removeClass("fixed");
				smartFilter.removeClass("fixed");
				theInnerHdr.removeClass("fixed");
			};
			
		}else{
		
			if(pageScrollY > bnrH + 135){
			
				smartTab.addClass("fixed");
				smartFilter.addClass("fixed");
				theInnerHdr.addClass("fixed");	
			}else{
				
				smartTab.removeClass("fixed");
				smartFilter.removeClass("fixed");
				theInnerHdr.removeClass("fixed");
			};
			
			
		};

		
	};
	
};

/*--------YOS retain num sect---------------*/
function initRetainNum(){
	
	if($(".selection-tab-hdr").length > 0){
		
		var theTab = $(".selection-tab-hdr.panel-tab-hdr").find(".panel-tab");
		
		theTab.click(function(){
			
			var theIndex = theTab.index(this);
			
			showNumSelection(theIndex);
		});
		
		showNumSelection(0);
	};
	
};

function showNumSelection(n){
	
	var theTab = $(".selection-tab-hdr.panel-tab-hdr").find(".panel-tab");
	var thePanel = $(".selection-hdr-num.panel-ctnt-hdr");
	
	hideNumSelection();
	
	theTab.eq(n).addClass("current");
	thePanel.eq(n).show();
};

function hideNumSelection(){
	
	var theTab = $(".selection-tab-hdr.panel-tab-hdr").find(".panel-tab");
	var thePanel = $(".selection-hdr-num.panel-ctnt-hdr");
	
	theTab.removeClass("current");
	thePanel.hide();
};


/*--------popup--------------------*/
function initPopup(){
	
	$(".popup-table").click(function(){
		
		closePopupOuter();
	});
	
	//closePopup();
	
};

function closePopup(){
	
	enableBodyScroll();
	
	//---
	$(".popup-screen").hide();
};

function closePopupOuter(){
	
	if($(".popup-content-holder:hover").length != 0){
		
	}else{
		closePopup();
		
	}
};

function showPopupOffSite(){
	
	$(".popup-notification-site-out").show();
};

function showPopupStoredItem(){
	
	$(".popup-notification-store").show();
};

function showPopupOutOfStock1(){
	
	$(".popup-notification-x-item").show();
};

function showPopupOutOfStock2(){
	
	$(".popup-notification-x-item-2").show();
};

function showPopupTrackOrder(){
	
	$(".popup-track").show();
};

/*---loader---*/
function hideLoader(){
	
	$(".icon-load").hide();
	
};