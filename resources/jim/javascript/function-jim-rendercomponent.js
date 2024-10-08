/*!
 * Copyright 2013 Justinmind. All rights reserved.
 */

(function (window, undefined) {
  var $simulation = jQuery("#simulation");
  $simulation
  .on("click", ".text, .password", function(event){
    var $firer = jQuery(event.target || event.srcElement);
    if(!$firer.is("[type='button'],[type='checkbox'],[type='file'],[type='hidden'],[type='image'],[type='password'],[type='radio'],[type='reset'],[type='submit'],[type='text'],[type='number'],[type='url'],[type='email'],select,textarea,button")) {
      $firer.find("input").focus();
    }
  })
  .bind("loadcomponent", function(event) {
	 var $target = jQuery(event.target || event.srcElement);
     if(typeof(jQuery.fn.jimTree) === "function") {
    	 $target.find(".tree").jimTree();
     }

     $target.find(".menu > .borderLayer > .paddingLayer > .menuWrapper > .menunode > .submenu").each(function() {
         var $submenu = jQuery(this);
         $submenu.appendTo($submenu.parents(".template, .screen"));
     });

     var dataComponents;
     if(typeof(jQuery.fn.dataview) === "function") {
    	 dataComponents = $target.find(".datalist,.datagrid").dataview();
     }
     
     jimDate.init();
     $target.trigger("renderresponsive");
     jimShapes.renderAll(jQuery(".non-processed-shape"));
     if(dataComponents && dataComponents.length>0)
     	jimPin.addScrollListeners(dataComponents);
  })
  .bind("preComponentLoading",function(event, data) {
	  var transitionEffect = data.transitionEffect;
	  var $to = data.target;
	 $("#simulation").trigger("renderresponsive");
	 jimPin.init();
     jimShapes.renderAll(jQuery(".non-processed-shape"));
	 jimPin.pinElements($to.find(".non-processed-pin"), false);
	 jimScenarios.updateAllShapesBackgrounds();
     jimLayout.adjustCanvasClipping();
     
     if (jimUtil.isMobileDevice()) {
	     $(".pdfEmbedDocument").each(function() {
	         var $pdf = jQuery(this);
	         var src = $pdf.attr("src");
	         $pdf.attr("src", "");
	         
	         var lastIndex = src.lastIndexOf('.pdf');
	
			 if (lastIndex !== -1) {
			     var previewSrc = $pdf.attr("pdfPreviewSrc");
			     var html = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'></head><body><div class='imgWrapper'><img src='" + previewSrc + "'></img></div></body></html>";
			     $pdf.attr("srcdoc", html);
			     
			     $pdf.on("load", function() {
			     	 var $imgWrapper = $pdf.contents().find(".imgWrapper");
				   	 $imgWrapper.css('background-color', '#525659');
				   	 $imgWrapper.css("display", "flex");
				   	 $imgWrapper.css("justify-content", "center");
				   	 $imgWrapper.css("align-items", "center");
				   	 
				     var $imgTag = $pdf.contents().find("img");
				     $imgTag.css("max-width", parseInt(($imgTag.prop("naturalWidth") / 5)) + "px");
				     $imgTag.css("width", "100%");
	
				});
			 }
	     });
     }
     
     layoutContent();
  })
  .on("change", "input[type='file']", function(event) {
  	// returns string containing everything from the end of the string 
  	//   that is not a back/forward slash or an empty string on error
  	//   so one can check if return_value===''
  	var input = this;
  	var filename = this.value;
  	if(typeof filename==='string'){
  		var match = filename.match(/[^\\\/]+$/);
  		if(match[0])
  			filename = match[0]; 
	}
    var file = this.files[0];
    if(file){
    	var reader = new FileReader();
    	reader.onloadend = function(e) {
        	var r=e.target.result;
        	if(r)
        		input.setAttribute("readAsURL",r);
        	else
        		input.removeAttribute("readAsURL");
    	}
    	reader.readAsDataURL(file);
	}
    jQuery(this).prev().prev().find("input").val(filename).parent().trigger("change");
  })
  .on("mouseenter", ".dropdown", function(event) {
    var $zoomDiv = jQuery("#zoomDiv");
    if($zoomDiv !== undefined && $zoomDiv.length>0) {
    	var fontSize = parseFloat(jQuery(this).css("font-size"));
    	var matrixRegex = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/;
		var matches =  $zoomDiv.css('transform').match(matrixRegex);
    	fontSize = fontSize * parseFloat(matches[1]);
    	jQuery(this).find(".dropdown-options").css("font-size", fontSize + "px");
    }
  });

  function layoutContent() {
	var $screenAlignBox = jQuery(".screen:last > #alignmentBox"),
    $templateAlignBox = jQuery(".template:last > #alignmentBox"),
    $screen = jQuery(".screen:last"),
    $template = jQuery(".template:last");

    var heightScreen = parseInt($screen.css("min-height")),
    widthScreen = parseInt($screen.css("min-width")),
    heightTemplate = parseInt($template.css("min-height")),
    widthTemplate = parseInt($template.css("min-width"));

	if(heightTemplate > heightScreen) {
	  $screenAlignBox.css("min-height", heightTemplate + "px");
	  $screen.css("min-height", heightTemplate + "px");
	} else {
	  $templateAlignBox.css("min-height", heightScreen + "px");
	  $template.css("min-height", heightScreen + "px");
	}

	if(window.jimDevice.isMobile()) {
	  if(widthTemplate > widthScreen) {
  		$screen.css("min-width", widthTemplate + "px");
  	  } else {
  		$template.css("min-width", widthScreen + "px");
  	  }
	}

	/*both centered*/
    if($screenAlignBox.css("position")=="relative" && $templateAlignBox.css("position") == "relative"){
      if(widthTemplate > widthScreen) {
    	$screenAlignBox.css("min-width", widthTemplate + "px");
      } else {
    	$templateAlignBox.css("min-width", widthScreen + "px");
      }
    }
  }
})(window);
