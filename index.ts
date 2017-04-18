/// <reference path="./index.d.ts"/>

import * as $ from "jquery";
$.fn.bootstrapCheckbox = function(){
	function setClasses(){
		let $label = $(this).parents('label');
		let checked:boolean = $(this).prop('checked');
		if(checked){
			if(!$label.hasClass('checked')){
				$label.addClass('checked');
			}
			$label.removeClass('indeterminate');
		}else{
			$label.removeClass('checked');
			let indeterminate:boolean = $(this).prop('checked');
			if(indeterminate){
				$label.addClass('indeterminate');
			}
		}
	}
	let $checkboxs = $(this);
	$checkboxs.each(setClasses);
	$checkboxs.on('change', setClasses);
	$checkboxs.on('focus', function(){
		$(this).parents('label').addClass('focus');
	});
	$checkboxs.on('blur', function(){
		$(this).parents('label').removeClass('focus');
	});
	
}