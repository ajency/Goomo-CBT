$(document).ready(function() {
	$('.sideMenu').click(function(){
		$('.m-side-bar').addClass('active');
		$('.site-overlay').addClass('active');
		$('body').addClass('blocked');
	});

	$('.market-manager-img.mobile-btn').click(function(){
		$('.right-sidebar').addClass('active');
		$('.site-overlay').addClass('active');
		// $('body').addClass('blocked');
	});
	$('.back-btn').click(function(){
		$('.right-sidebar').removeClass('active');
		$('.site-overlay').removeClass('active');
		// $('body').addClass('blocked');
	});

	$(document).mouseup(function(e) {
	  var Click_todo;
	  Click_todo = jQuery('.m-side-bar');
	  if (!Click_todo.is(e.target) && Click_todo.has(e.target).length === 0) {
	    jQuery('.m-side-bar,.site-overlay').removeClass('active');
	    jQuery('body').removeClass('blocked');
	  }
	});

	var registered = $('#listings-table').DataTable({
		"ordering": false
	});
	var location = $('#location-table').DataTable({
		"columnDefs": [{
                "targets": 'no-sort',
                "orderable": false
            }
        ]
	});

    registered.columns().iterator('column', function(ctx, idx) {
        $(registered.column(idx).header()).append('<span class="sort-icon"/>');
    });
    location.columns().iterator('column', function(ctx, idx) {
        $(location.column(idx).header()).append('<span class="sort-icon"/>');
    });


	var regions = $('#region-table').DataTable({
		"columnDefs": [{
                "targets": 'no-sort',
                "orderable": false
            }
        ]
	});

    regions.columns().iterator('column', function(ctx, idx) {
        $(regions.column(idx).header()).append('<span class="sort-icon"/>');
    });

    setTimeout(function(){
    	regions.columns.adjust().draw();
    }, 1000);

    registered.draw();

    $('#propNameSearch').on('keyup', function() {
		registered.columns(0).search(this.value).draw();
	});


	var internal = $('#internal-table').DataTable({
		"columnDefs": [{
                "targets": 'no-sort',
                "orderable": false
            }
        ]
	});

    internal.columns().iterator('column', function(ctx, idx) {
        $(internal.column(idx).header()).append('<span class="sort-icon"/>');
    });



	if($('.multi-dd').length){
		$('.multi-dd').multiselect({
	        buttonContainer: '<span></span>',
	        buttonClass: '',
	        maxHeight: 200,
	        templates: {
	            button: '<span class="multiselect dropdown-toggle" data-toggle="dropdown"><i class="fa fa-filter"></i></span>'
	        },
	    });
	}

	if($('.prop-theme').length){
		$('.prop-theme').multiselect({
			includeSelectAllOption: true,
	        maxHeight: 250,
	        numberDisplayed: 2
	    });
	}

	if($('.location-select').length){
		$('.country-select').multiselect({
			includeSelectAllOption: true,
	        maxHeight: 250,
	        numberDisplayed: 4,
	        nonSelectedText: 'Select a Country'
	    });
		$('.city-select').multiselect({
			includeSelectAllOption: true,
	        maxHeight: 250,
	        numberDisplayed: 4,
	        nonSelectedText: 'Select a City'
	    });
		$('.state-select').multiselect({
			includeSelectAllOption: true,
	        maxHeight: 250,
	        numberDisplayed: 4,
	        nonSelectedText: 'Select a State'
	    });
		$('.location-select').multiselect({
			includeSelectAllOption: true,
	        maxHeight: 250,
	        numberDisplayed: 4,
	        nonSelectedText: 'Select a Location'
	    });
	}



	var inactive = $('#inactive-table').DataTable({
		"ordering": false
		// "scrollX": true
	});

    inactive.columns().iterator('column', function(ctx, idx) {
        $(inactive.column(idx).header()).append('<span class="sort-icon"/>');
    });


    setTimeout(function(){
    	inactive.columns.adjust().draw();
    }, 1000);

	$('#catNameSearch').on('keyup', function() {
		inactive.columns(0).search(this.value).draw();
	});



    var tax = $('#tax-table').DataTable();

    tax.columns().iterator('column', function(ctx, idx) {
        $(tax.column(idx).header()).append('<span class="sort-icon"/>');
    });

    $('.listing-table,.region-table').closest('.row').addClass('main-table');

	$('.internal-table').closest('.row').addClass('overflow-table');

	if ($(window).width() < 769){
		$('#statsCollapse').removeClass('in');
	}
	if ($(window).width() < 769){
		$('.form-toggle:not(.m-side-bar .form-toggle)').click(function(){
			event.preventDefault();
			$('.fly-out').addClass('active');
		});
		$('.back-icon').click(function(){
			$('.fly-out').removeClass('active');
		});
	}
	else{
		$('.open-sidebar').click(function(){
			event.preventDefault();
			console.log('test');
			$('.animate-row').addClass('body-slide');
		});
		$('.article-back').click(function(){
			event.preventDefault();
			$('.animate-row').removeClass('body-slide');
		});

		$(document).mouseup(function(e) {
		  var Click_todo;
		  Click_todo = $('.page-sidebar');
		  if (!Click_todo.is(e.target) && Click_todo.has(e.target).length === 0) {
		    $('.animate-row').removeClass('body-slide');
		  }
		});

		$('.user-col-table [data-toggle="popover"]').on('shown.bs.popover', function () {
			 $('.open-sidebar').click(function(){
				event.preventDefault();
				console.log('test');
				$('.animate-row').addClass('body-slide');
			});
		})
	}

	$('body').on('click', '.make-edits-btn', function(){
		$('.default-status').addClass('disabled');
		$('.edit-action-box').addClass('hidden');
		$('.editing-status').removeClass('hidden');
		$('.panel-group, .actions-wrapper').removeClass('disabled');
	});

	$('.notification [data-toggle="popover"]').popover({
		html : true,
	    content: function() {
	       return $('.popoverContent').html();
	    }
	})

	if($('.overview-text').length){
		$('.overview-text').readmore({
		  speed: 75,
		  collapsedHeight: 40,
		  lessLink: '<a href="#">Less</a>'
		});
	}


	$('body').on("change", "input[type=radio][name=categoryType]", function() {
	    if (this.value == 'parent_cat') {
	        $('.select-parent-cat, .select-branch-cat').addClass('hidden')
	        $('.parent_cat_icon').removeClass('hidden')
	    } else if (this.value == 'branch_cat') {
	        $('.select-parent-cat').removeClass('hidden')
	        $('.select-branch-cat, .parent_cat_icon').addClass('hidden')
	    } else if (this.value == 'node_cat') {
	        $('.select-parent-cat, .select-branch-cat').removeClass('hidden')
	        $('.parent_cat_icon').addClass('hidden')
	    }
	});


	$('.user-col-table [data-toggle="popover"]').popover({
		html : true,
	    content: function() {
	       return $(this).siblings('.content-pop').html();
	    }
	})

	$('body').on("click", ".limited", function(event) {
		event.preventDefault();
		$(this).parent('.limited-tag').addClass('hidden');
		$(this).closest('.flex-list').find('.flex-tag-row').removeClass('hidden');
	});

	$('body').on("click", ".restricted", function(event) {
		event.preventDefault();
		$(this).parent('.limited-tag').addClass('hidden');
		$(this).closest('.flex-list').find('.simple-tag').removeClass('hidden');
	});

	$('body').on("change", "input[type=checkbox][name=bankdeets]", function() {
	    if ($(this).is(':checked')) {
	        $('.contract-accept').attr('disabled', false)
	    } else  {
	       $('.contract-accept').attr('disabled', true)
	    }
	});


	$('.contact-info').on('click', '.add-another', function(e) {
	  var contact_group, contact_group_clone, input;
	  e.preventDefault();
	  contact_group = $(this).closest('.business-contact').find('.contact-group');
	  contact_group_clone = contact_group.clone();
	  contact_group_clone.removeClass('contact-group hidden');
	  input = contact_group_clone.find('.fnb-input');
	  contact_group_clone.insertBefore(contact_group);

	});


	$('body').on('click', '.removeRow', function() {
	  return $(this).closest('.contact-container').remove();
	});

	$(document).on('change', '.business-contact .toggle__check', function() {
	  if ($(this).is(':checked')) {
	    $(this).closest('.toggle').siblings('.toggle-state').text('Visible on the property');
	  } else {
	    $(this).closest('.toggle').siblings('.toggle-state').text('Not visible on the property');
	  }
	});

	$(document).on('change', '.toggle-work .toggle__check', function() {
	  if ($(this).is(':checked')) {
	    $(this).closest('.toggle').siblings('.toggle-state').text('Active');
	    $(this).closest('.toggle').siblings('.toggle-state').addClass('active-state');
	  } else {
	    $(this).closest('.toggle').siblings('.toggle-state').text('Inactive');
	    $(this).closest('.toggle').siblings('.toggle-state').removeClass('active-state');
	  }
	});

	$(document).on('change', '.toggle-smoking .toggle__check', function() {
	  if ($(this).is(':checked')) {
	    $(this).closest('.toggle').siblings('.toggle-state').text('Yes');
	    $(this).closest('.toggle').siblings('.toggle-state').addClass('active-state');
	  } else {
	    $(this).closest('.toggle').siblings('.toggle-state').text('No');
	    $(this).closest('.toggle').siblings('.toggle-state').removeClass('active-state');
	  }
	});

	$(document).on('click', '.desc-btn', function() {
		$(this).addClass('hidden');
		$('.desc-warning').removeClass('hidden');
	});
	$(document).on('click', '.desc-warning button', function() {
		$('.desc-btn').removeClass('hidden');
		$('.desc-warning').addClass('hidden');
	});

	$(document).on('click', '.add-policy-btn', function() {
		// $(this).addClass('hidden');
		$('.add-policy-wrap').removeClass('hidden');
	});
	$(document).on('click', '.cancel-wrap', function() {
		// $(this).addClass('hidden');
		$('.add-policy-wrap').addClass('hidden');
	});

	$('.from-date,.to-date').daterangepicker({
		singleDatePicker: true,
		showDropdowns: true,
		locale: {
      		format: 'DD/MM/YYYY'
    	}
	});

	$(".incr-btn").on("click", function (e) {
	    var $button = $(this);
	    var oldValue = $button.parent().find('.quantity').val();
	    $button.parent().find('.incr-btn[data-action="decrease"]').removeClass('inactive');
	    if ($button.data('action') == "increase") {
	        var newVal = parseFloat(oldValue) + 1;
	    } else {
	        // Don't allow decrementing below 1
	        if (oldValue > 1) {
	            var newVal = parseFloat(oldValue) - 1;
	        } else {
	            newVal = 1;
	            $button.addClass('inactive');
	        }
	    }
	    $button.parent().find('.quantity').val(newVal);
	    e.preventDefault();
	});

	$('body').on("change", "input[type=radio][name=policy_type]", function() {
	    if (this.value == '14') {
	        $('.set-policy').addClass('hidden')
	        $('.create-own-policy').removeClass('hidden')
	    } else {
	        $('.set-policy').removeClass('hidden')
	        $('.create-own-policy').addClass('hidden')
	    }
	});

	$('body').on("change", "input[type=radio][name=policy]", function() {
	    if (this.value == 'rateplan') {
	        $('.rateplan-wrap').removeClass('hidden')
	    } else {
	        $('.rateplan-wrap').addClass('hidden')
	    }
	});


	  // var SideComments = require('side-comments');
	  // window.sideComments = new SideComments('#commentable-area', currentUser, existingComments);
	  // window.sideComments.on('commentPosted', function( comment ) {
	  //   comment.id = parseInt(Math.random() * (100000 - 1) + 1);
	  //   sideComments.insertComment(comment);
	  // });
	  // window.sideComments.on('commentDeleted', function( comment ) {
	  //   sideComments.removeComment(comment.sectionId, comment.id);
	  // });

	// $('.tooltipster').tooltipster({
	// 	theme: 'tooltipster-borderless',
	// 	contentCloning: true,
	// 	side: 'bottom',
	// 	interactive: true
	// });

});

$(document).ready(function () {
    popoverOptions = {
        content: function () {
            // Get the content from the hidden sibling.
            return $(this).siblings('.my-popover-content').html();
            return $('.my-popover-content').html();
        },
        trigger: 'click',
        animation: false,
        html: true,
        placement: 'bottom'
    };
    $('.action-panel').popover(popoverOptions);

    $('body').on("change", "input[type=radio][name=offerType]", function() {
            $('.offer_types').addClass('hidden')
        if (this.value == '11') {
            $('.basic_offer').removeClass('hidden')
        } else if (this.value == '13') {
            $('.early_bird').removeClass('hidden')
        } else if (this.value == '16') {
            $('.group_booking').removeClass('hidden')
        } else if (this.value == '14') {
            $('.long_stay').removeClass('hidden')
        } else if (this.value == '12') {
            $('.last_minute').removeClass('hidden')
        } else if (this.value == '17') {
            $('.weekday_weekend').removeClass('hidden')
        } else if (this.value == '15') {
            $('.free_nights').removeClass('hidden')
        }
    });






// Floating label


	$(document).on('focus', '.float-input', function() {
	  $(this).siblings('.float-label').addClass('filled focused');
	});

	$(document).on('blur', '.float-input', function() {
	  $(this).siblings('.float-label').removeClass('focused');

	  if (this.value === '') {
	    $(this).siblings('.float-label').removeClass('filled')
	  }
	});

	$('.floatInput').on('focus', function() {
	  $(this).parent().closest('.form-group').find('.float-label').addClass('filled focused');
	});

	$('.floatInput').on('blur', function() {
	  $(this).parent().closest('.form-group').find('.float-label').removeClass('focused');

	  if (this.value === '') {
	    $(this).parent().closest('.form-group').find('.float-label').removeClass('filled')
	  }
	});

	$('.forget-link').click(function(){
		event.preventDefault();
		$('.forget-password').addClass('active');
	});

	$('.back-login').click(function(){
		$('.forget-password').removeClass('active');
	});


	// value checking floating label

	function checkForInput(element) {
	  // element is passed to the function ^

	  const $label = $(element).siblings('label');

	  if ($(element).val().length > 0) {
	    $label.addClass('filled lab-color');
	  } else {
	    $label.removeClass('filled lab-color');
	  }
	}

	// The lines below are executed on page load
	$('.float-input').each(function() {
	  checkForInput(this);
	});






    
});

$("#error-manual").hide();
$(".btn").click(function () {
	var id = $(this).attr("id");
  if(id == "auto"){
  $(this).attr("autofocus",true).siblings().attr("autofocus",false);
  	$("#error-manual").hide();
  	$("#error-auto").show();
  }else{
  $(this).attr("autofocus",true).siblings().attr("autofocus",false);
  	$("#error-auto").hide();
  	$("#error-manual").show();
  }
});

$('.active').change(function() {
   $(".rates-table").removeClass("hidden");


});
$('.inactive').change(function() {
	 $(".rates-table").addClass("hidden");
});

$('.send-mail').click(function(){

	$('.alert:not(.save-later-alert)').removeClass('hidden');

});

$('.save-later-btn').click(function(){

	$('.save-later-alert').removeClass('hidden');

});

$('.approveMail').click(function(){

	$('.approve-alert').removeClass('hidden');

});

$('.rejectMail').click(function(){

	$('.reject-alert').removeClass('hidden');

});



$('.page-sidebar').on('click', '.add-blackout', function(e) {
  var contact_group, contact_group_clone, input;
  e.preventDefault();
  blackout_group = $(this).closest('.plan-section').find('.blackoutRowClone');
  blackout_group_clone = blackout_group.clone();
  blackout_group_clone.removeClass('blackoutRowClone hidden');
  // input = blackout_group_clone.find('.fnb-input');
  blackout_group_clone.insertBefore(blackout_group);

});




$(function () {
  $('[data-toggle="tooltip"]').tooltip()

  $('.detail-collapse').click(function(){
  	$(this).find('.fa').toggleClass('active');
  	$(this).parent().closest('.separator').toggleClass('collapse-active');
  });


$(document).on('click', '.summer-click', function(){
	$('.summer').removeClass('hidden');
	$('.amar').addClass('hidden');
})

$(document).on('click', '.amar-click', function(){
	$('.amar').removeClass('hidden');
	$('.summer').addClass('hidden');
})


$(document).on('click', '.clearSearch', function(){
	$('.recentSearch').remove();
});


$('.search-results .shortlist-me').attr('data-original-title','Add to Shortlist');
$('.search-results .shortlist-me.active').attr('data-original-title','Remove from Shortlist');
// $('.shortlist-me:not(.shortlist-added)').attr('data-original-title','Add to Shortlist');

$('.shortlist-me:not(.no-click)').click(function(){
	$(this).toggleClass('active');
	$('.notify-block').addClass('bounceIn');
	setTimeout(function(){
    	$('.notify-block').removeClass('bounceIn');
    }, 500);
	
	if($(this).hasClass('active')){
		$(this).attr('data-original-title','Remove from Shortlist');
		// $('[data-toggle="tooltip"]').tooltip();
	}
	else{
		$(this).attr('data-original-title','Add to Shortlist');
	}
});


if($('.sticky-book').length){
		var stickyTop = $('#sticky-book').offset().top;
		var getwidth = $('.col-width').innerWidth();
		var finalwidth = getwidth - 30;
	$(window).on( 'scroll', function(){
        if ($(window).scrollTop() >= stickyTop) {
            $('.sticky-book').addClass('active')
            $('.sticky-book').css('width',finalwidth);
        } else {
            $('.sticky-book').removeClass('active')
            $('.sticky-book').css('width','100%');
        }
    });
}

	$('.get-tab-val').on('shown.bs.tab', function (e) {
	  	var getlink = $(this).attr('data-link');
	  	$('.search-flight').attr('href',getlink);
	})


	function autoflex(){
		$('.flexdatalist').flexdatalist({
		     minLength: 0,
		     noResultsText : '<span>No record found. Please complete the name and add as a guest</span>'
		});

		$('.main-name').on('change:flexdatalist', function () {
	        value = $(this).val();
	        // console.log(value);
	        // $('#languages option').each(function(){
	        // 	idval = $(this).val();
	        // });
	        var name = ['Amar Singh','Amit Adav','Ajaj Rajguru','Valenie Lourenco','Anuj Khurana'];
	        $('.guest-check').css('visibility','hidden');
	        if( $(this).val().length != 0 ) {
	        	if($.inArray( value, name ) >= 0){
	        		$(this).closest('.traveller__row').find('.guest-check').css('visibility','hidden');
	        		console.log(this);
	        	}
	        	else{
	        		$(this).closest('.traveller__row').find('.guest-check').css('visibility','visible');
	        	}
	        	// console.log();
	        }
	        // $(this).val('');

	    });
	}


	var target = "comment-collapse_";
	var i = 1;

	$('body').on('click', '.add-traveller', function(e) {
	  var highlight_group, highlight_group_clone;
	  e.preventDefault();
	  highlight_group = $(this).parent().closest('.traveller');
	  highlight_group_clone = highlight_group.clone();
	  highlight_group.find('.add-traveller').remove();
	  highlight_group.find('.traveller__row').addClass('disable');
	  highlight_group.find('.traveller-action').removeClass('hidden');
	  highlight_group_clone.find('.main-name').remove();
	  highlight_group_clone.find('.guest-check').css('visibility','hidden');
	  var myapp = '<input type="text" class="fnb-input flex-1 main-name flexdatalist" value="" id="" list="languages" name="language">';
	  highlight_group_clone.find('.traveller__row').find('.append-row').append(myapp);
	  highlight_group_clone.find('.dataList').attr('id','data'+target+i);
	  highlight_group_clone.find('.main-name').attr('list','data'+target+i);
	  highlight_group_clone.find('.main-name').attr('name','data'+target+i);
	  highlight_group_clone.find('.main-name').flexdatalist('reset');
	  highlight_group_clone.find('.main-name').flexdatalist({
		     minLength: 0,
		     noResultsText : '<span>No record found. Please complete the name and add as a guest</span>'
		});
	  	highlight_group_clone.find('.from-date').daterangepicker({
			singleDatePicker: true,
			showDropdowns: true,
			locale: {
	      		format: 'DD/MM/YYYY'
	    	}
		});
	  highlight_group_clone.find('.main-name').on('change:flexdatalist', function () {
	        value = $(this).val();
	        // console.log(value);
	        // $('#languages option').each(function(){
	        // 	idval = $(this).val();
	        // });
	        var name = ['Amar Singh','Amit Adav','Ajaj Rajguru','Valenie Lourenco','Anuj Khurana'];
	        $('.guest-check').css('visibility','hidden');
	        if( $(this).val().length != 0 ) {
	        	if($.inArray( value, name ) >= 0){
	        		$(this).closest('.traveller__row').find('.guest-check').css('visibility','hidden');
	        		console.log(this);
	        	}
	        	else{
	        		$(this).closest('.traveller__row').find('.guest-check').css('visibility','visible');
	        	}
	        	// console.log();
	        }
	        // $(this).val('');

	    });
	  // highlight_group_clone.removeClass('hidden');
	  highlight_group_clone.find('.guest-check').attr('data-target','#'+target+i);
	  highlight_group_clone.find('.guest-details').attr('id',target+i);
	  highlight_group_clone.insertAfter(highlight_group);
	  i++;
	 
	});

	$('body').on('click', '.remove-traveller', function(e) {
	  e.preventDefault();
	  $(this).parent().closest('.traveller').remove();
	});

	$('body').on('click', '.edit-traveller', function(e) {
	  e.preventDefault();
	  $(this).parent().closest('.traveller').find('.traveller__row').removeClass('disable');
	});


	autoflex();



$(document).on('click', '.redirect-show', function() {
	$("html, body").animate({
    	scrollTop: 0
    }, 600);
	setTimeout(function(){
		$('#redirect-modal').modal('show');
	}, 1600);
});

	// $(document).ready(function() {
	// 	$( "#info-modal" ).modal('show');
	//     var dialogShown = $.cookie('dialogShown');

	//     if (!dialogShown) {
	//         $(window).on('load', function(){
	//             $( "#info-modal" ).modal('show');
	//             $.cookie('dialogShown', 1);
	//         });
	//     }
	//     else {
	//         $( "#info-modal" ).modal('hide');
	//     }
	// });



$( "#info-modal" ).modal('show');

		// Cookie setting for popup


	        // if($('#info-modal').length > 0){
	        // 	console.log($.cookie("isshow-return"));
	        	
	        	
	        // 	if($.cookie("isshow-return")!=1)
	        // 		$.cookie("isshow-return", 0, { expires: 365 });	
	        // 	 else 
	        // 		$.cookie("isshow-return", 1, { expires: 365 });	
	        	
	        // 	if($.cookie("isshow")!=1){
	        // 		$( "#info-modal" ).modal('show');
	        // 		$.cookie("isshow", 1, { expires: 365 });
	        // 	}
	        // }
	        // // alert($('#info-return-modal').length )
	        // if($('#info-return-modal').length > 0)
	        // {
	        // 	console.log($.cookie("isshow"));
	        	
	        // 	if($.cookie("isshow")!=1)
	        // 		$.cookie("isshow", 0, { expires: 365 });
	        // 	else 
	        // 		$.cookie("isshow", 1, { expires: 365 });	


if ($(window).width() < 768){
	var torow = $('.one-way .to-row').detach();
	$('.one-way').find('.from-row').after(torow);

	var toroww = $('.return-way .to-row').detach();
	$('.return-way').find('.from-row').after(toroww);

	var returnn = $('.return-row').detach();
	$('.return-way').find('.depart-row').after(returnn);
}
			
$('.floating-filter').click(function(){
	$('.filter-card').addClass('active');
});



});



	// var source = ["Apples", "Oranges", "Bananas"];

	// $(function () {
	//     $("#auto").autocomplete({
	//         source: function (request, response) {
	//         	console.log(source);
	//             response($.ui.autocomplete.filter(source, request.term));

	//         },
	//         change: function (event, ui) {
	//             $("#add").toggle(!ui.item);
	//         }
	//     });
	    
	//     $("#add").on("click", function () {
	//         source.push($("#auto").val());
	//         $(this).hide();
	//     });
	// });





