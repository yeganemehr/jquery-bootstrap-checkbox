/// <reference path="./jquery.d.ts"/>

import * as $ from "jquery";
$.fn.bootstrapCheckbox = function(){
	function setClasses(){
		const $this = $(this);
		const $label = $this.parents("label");
		const checked: boolean = $this.prop("checked");
		const isRadio: boolean = $this.attr("type").toLowerCase() === "radio";
		if (checked){
			if (!$label.hasClass("checked")){
				$label.addClass("checked");
			}
			if (isRadio) {
				const $form = $this.parents("form");
				const name = $this.attr("name");
				const $others = $(`input[name="${name}"][type=radio]`, $form).not($this);
				$others.prop("checked", false);
				$others.parents("label").removeClass("checked");
			}
			$label.removeClass("indeterminate");
		}else if (!isRadio) {
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
