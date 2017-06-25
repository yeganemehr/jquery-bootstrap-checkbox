/// <reference path="./jquery.d.ts"/>

import * as $ from "jquery";
$.fn.bootstrapCheckbox = function(){
	function setClasses(){
		const $label = $(this).parents("label");
		const checked: boolean = $(this).prop("checked");
		if (checked){
			if (!$label.hasClass("checked")){
				$label.addClass("checked");
			}
			$label.removeClass("indeterminate");
		}else{
			$label.removeClass("checked");
			const indeterminate: boolean = $(this).prop("checked");
			if (indeterminate){
				$label.addClass("indeterminate");
			}
		}
	}
	const $checkboxs = $(this);
	$checkboxs.each(setClasses);
	$checkboxs.on("change", setClasses);
	$checkboxs.on("focus", function(){
		$(this).parents("label").addClass("focus");
	});
	$checkboxs.on("blur", function(){
		$(this).parents("label").removeClass("focus");
	});

};
