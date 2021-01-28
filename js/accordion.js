/* jshint esversion:6 */
/* $(document).ready(function () {
	// accordion
	function loadAccordion() {
		if (!$.fn.accordion) {
			console.error("Warning! Accordion plugin not present!");
			$("#articlePage").find(".lp-accordion").remove();
			return;
		}

		$("#articlePage").find(".lpFAQs").accordion({
			active: false,
			collapsible: true,
			heightStyle: "content",
			header: ".lpFAQs__headline"
		});
	};
	loadAccordion();
}); */

$(document).ready(function(){
	$('#accordion > .lpFAQs__wrapper > .lpFAQs__paragraph').hide();

	$('#accordion > .lpFAQs__wrapper').click(function() {
	  if ($(this).hasClass("active")) {
		$(this).removeClass("active").find(".lpFAQs__paragraph").slideUp();
	  } else {
		$("#accordion > .lpFAQs__wrapper > .lpFAQs__paragraph").slideUp();
		$("#accordion > .lpFAQs__wrapper.active").removeClass("active");
		$(this).addClass("active").find(".lpFAQs__paragraph").slideDown();
	  }
	  return false;
	});
});


