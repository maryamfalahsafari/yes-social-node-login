$(document).ready(function(){

   
//  Preloader Timeout

    $("#firePreloader").click(function(){
        $(".preloader").show();
        $(".autoBilling-enabled").hide();
        
        setTimeout(function(){
            $(".preloader").hide();
            $(".autoBilling-enabled").show();
        }, 3000);
    });



//    personalDetailPage
    $('#personalDetailsAddCreditCardButton').on('click', function(){
        $('.manage-credit-card .no-credit-card').hide();
        $('.manage-credit-card .existing-credit-card').show();
        $(this).hide();
        //$('.manage-credit-card-buttons .update').show();
    });

//    Buttons behaviour on addOnsPagePrepaid page
    $('#addOnsPrepaidPayButton').on('click', function(){
        $('.inner-die.enter-details').hide();
        $('.inner-die.confirmation').show();

        $('.top-step-menu .first .stick').addClass('blue-stick');
        $('.top-step-menu .second').removeClass('passive');
        $('.top-step-menu .second').addClass('active');
    });

    $('#addOnsPrepaidConfirmButton').on('click', function(){
        $('.inner-die.confirmation').hide();
        $('.inner-die.complete').show();

        $('.top-step-menu .second .stick').addClass('blue-stick');
        $('.top-step-menu .third').removeClass('passive');
        $('.top-step-menu .third').addClass('active');
    });

    //    Buttons behaviour on billPayment page
    $('#billPaymentPayButton').on('click', function(){
        $('.inner-die.enter-details').hide();
        $('.inner-die.confirmation').show();

        $('.top-step-menu .first .stick').addClass('blue-stick');
        $('.top-step-menu .second').removeClass('passive');
        $('.top-step-menu .second').addClass('active');
    });

    $('#billPaymentConfirmButton').on('click', function(){
        $('.inner-die.confirmation').hide();
        $('.inner-die.complete').show();

        $('.top-step-menu .second .stick').addClass('blue-stick');
        $('.top-step-menu .third').removeClass('passive');
        $('.top-step-menu .third').addClass('active');
    });

    //    Buttons behaviour on oneTimeAddOnPage page
    $('#oneTimeAddOnPayButton').on('click', function(){
        $('.inner-die.enter-details').hide();
        $('.inner-die.confirmation').show();

        $('.top-step-menu .first .stick').addClass('blue-stick');
        $('.top-step-menu .second').removeClass('passive');
        $('.top-step-menu .second').addClass('active');
    });

    $('#oneTimeAddOnConfirmButton').on('click', function(){
        $('.inner-die.confirmation').hide();
        $('.inner-die.complete').show();

        $('.top-step-menu .second .stick').addClass('blue-stick');
        $('.top-step-menu .third').removeClass('passive');
        $('.top-step-menu .third').addClass('active');
    });


// Tooltip
    if ($('[data-toggle="tooltip"]').length > 0) {
        $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
        $(".progress-bar").each(function(){
            each_bar_width = $(this).attr('aria-valuenow');
            $(this).width(each_bar_width + '%');
        });
    }


//    For Select placeholders
    $("select").change(function () {
        $(this).removeClass("place-holder");
    });

//    Equal Height plugin
    if($('.equal-height').length > 0) {
        $('.equal-height').responsiveEqualHeightGrid();
    }

    if ($('#yesCredits .datepicker').length > 0) {
        $('#yesCredits .datepicker').datepicker({
            format: "dd/mm/yyyy"
        });
    }

//    Left Menu
    $('.left-menu-wrapper li').on('click', function(e){
        e.stopPropagation();
        $('.left-menu-wrapper li').removeClass('active');
        $(this).addClass('active');

        if ($(this).parent('ul').hasClass('inner-ul')) {
            if ($('.expandable ul').is(':hidden')) {
                $('.expandable ul').show();
            }
        } else {
            if ($(this).hasClass('expandable')) {
                if ($('.expandable ul').is(':hidden')) {
                    $('.expandable ul').show();
                } else {
                    $('.expandable ul').hide();
                }
            } else {
                if ($('.expandable ul').is(':visible')) {
                    $('.expandable ul').hide();
                }
            }
        }
    });

//    Left Menu for Mobile view
    $('.mobile-view .current-menu-item').on('click', function(){
        $('.mobile-view .menu-wrapper').slideToggle(200);
    });

    $('.mobile-view .menu-wrapper li a').on('click', function(e){
        e.stopPropagation();
        var menuItemText = $(this).text();
        $('.mobile-view .menu-wrapper').hide();
        $('.mobile-view .current-menu-item').text(menuItemText);
    });

//    Account Edit
    function editAccount() {
        $('.account-edit .second-die').show();
        $('.account-edit .buttons-wrapper').show();
    }

    $('.account-edit button.edit').on('click', editAccount);

    $('.account-edit button.reset').on('click', function(){
        $('.account-edit .second-die input').val('');
    });

//    Close Modal window
    $('#successEditModal').on('show.bs.modal', function(){
        var myModal = $(this);
        clearTimeout(myModal.data('hideInterval'));
        myModal.data('hideInterval', setTimeout(function(){
            myModal.modal('hide');
        }, 1500));
    });

//    Account Top Menu
    $('.account-top-menu .current-account-item.principal').on('click', function(e){
        $('.account-top-menu .account-list-wrapper.principal').slideToggle(200, function(){
            if ($('.account-top-menu .account-list-wrapper.principal').is(':visible')) {
                $('.account-top-menu .current-account-item.principal').removeClass('accounts-invisible');
                $('.account-top-menu .current-account-item.principal').addClass('accounts-visible');
            } else {
                $('.account-top-menu .current-account-item.principal').removeClass('accounts-visible');
                $('.account-top-menu .current-account-item.principal').addClass('accounts-invisible');
            }
        });
        e.stopPropagation();
    });

    $('.account-top-menu .current-account-item.additional').on('click', function(e){
        $('.account-top-menu .account-list-wrapper.additional').slideToggle(200, function(){
            if ($('.account-top-menu .account-list-wrapper.additional').is(':visible')) {
                $('.account-top-menu .current-account-item.additional').removeClass('accounts-invisible');
                $('.account-top-menu .current-account-item.additional').addClass('accounts-visible');
            } else {
                $('.account-top-menu .current-account-item.additional').removeClass('accounts-visible');
                $('.account-top-menu .current-account-item.additional').addClass('accounts-invisible');
            }
        });
        e.stopPropagation();
    });

    $('.account-top-menu .account-list-wrapper li').on('click', function(e){
        var menuItemText = $(this).text();
        var identificator = $(this).closest('ul').attr('id');
        $('.account-top-menu .account-list-wrapper.' + identificator).hide();
        $('.account-top-menu .current-account-item.' + identificator +' > span').text(menuItemText);

        $('.account-top-menu .current-account-item.' + identificator).removeClass('accounts-visible');
        $('.account-top-menu .current-account-item.' + identificator).addClass('accounts-invisible');
        e.stopPropagation();
    });

    $(document).on('click', function(){
        $('.account-top-menu .account-list-wrapper').hide();
        if ($('.account-top-menu .current-account-item').length > 0) {
            $('.account-top-menu .current-account-item').removeClass('accounts-visible');
            $('.account-top-menu .current-account-item').addClass('accounts-invisible');
        }
    });

    // Bill payment
    $('#bill-payment-saved-card').on('click', function(){
        if ($('#bill-payment-saved-card').is(':checked')) {
            $('.payment-type-content').hide();
            $('.bill-payment-credit-card-wrapper').show();
        }
    });

    //    Usage Details
//    $('#usage-type-one').on('click', function() {
//        if ($('#usage-type-one').is(':checked')) {
//            $('.details .voice-usage').show();
//        }
//    });
//
//    $('#usage-type-two').on('click', function() {
//        if ($('#usage-type-two').is(':checked')) {
//            $('.details .voice-usage').hide();
//        }
//    });


//  Forgot/Reset Password
//    $('.fpw-button button.continue').on('click', function(){
//        $('.fpw-button').hide();
//        $('.fpw-id').hide();
//        $('.fpw').hide();
//        $('.fpw-sentmsg').show();
//    });

    $('.rpw-button button.save').on('click', function(){
        $('.rpw-button').hide();
        $('.rpw-id').hide();
        $('.rpw').hide();
        $('.rpw-sentmsg').show();
    });

//    Bill Payment
    $('.bill-payment #other-amount').on('click', function() {
        if ($('#other-amount').is(':checked')) {
            $('.bill-payment .enter-amount').show();
        }
    });

    $('.bill-payment #full-amount').on('click', function() {
        if ($('#full-amount').is(':checked')) {
            $('.bill-payment .enter-amount').hide();
        }
    });

    //Pay bill postpaid

    $('.pay-bill-postpaid #other-amount').on('click', function() {
        if ($('#other-amount').is(':checked')) {
            $('.pay-bill-postpaid .enter-amount').show();
        }
    });

    $('.pay-bill-postpaid #full-amount').on('click', function() {
        if ($('#full-amount').is(':checked')) {
            $('.pay-bill-postpaid .enter-amount').hide();
        }
    });

    $('.bill-payment .payment-type-wrapper #creditCard').on('click', function() {
        if ($('#creditCard').is(':checked')) {
            $('.payment-type-content').hide();
            $('.bill-payment .payment-type-content.credit-card').show();

        }
    });

    $('.bill-payment .payment-type-wrapper #maybank2u').on('click', function() {
        if ($('#maybank2u').is(':checked')) {
            $('.bill-payment .payment-type-content').hide();
        }
    });


//    Increase Credit Limit
    $('#instant').on('click', function() {
        if ($('#instant').is(':checked')) {
            $('.increase-credit-limit .payment-type-wrapper').show();
            $('.increase-credit-limit-buttons .buttons .increase').hide();
            $('.increase-credit-limit-buttons .buttons .pay').show();
            $('.increase-credit-limit .credit-card').hide();
        }
    });

    $('#back-end').on('click', function() {
        if ($('#back-end').is(':checked')) {
            $('.increase-credit-limit .payment-type-wrapper').hide();
            $('.increase-credit-limit .saved-credit-card-wrapper').hide();
            $('.increase-credit-limit .total-payment-wrapper').hide();
            $('.increase-credit-limit-buttons .cards > *').hide();
            $('.increase-credit-limit .radio-wrapper.terms').addClass('last');

            $('.increase-credit-limit-buttons .buttons .pay').hide();
            $('.increase-credit-limit-buttons .buttons .increase').show();
            $('.increase-credit-limit .credit-card').hide();

            $('.payment-type-wrapper input').each(function(){
                $(this).prop('checked', false);
            });
        }
    });

    $('#saved-card').on('click', function() {
        if ($('#saved-card').is(':checked')) {
            $('.increase-credit-limit .saved-credit-card-wrapper').show();
            $('.increase-credit-limit .total-payment-wrapper').show();
            $('.increase-credit-limit-buttons .cards > *').show();
            $('.increase-credit-limit .radio-wrapper.terms').removeClass('last');
            $('.increase-credit-limit .credit-card').hide();
        }
    });

    $('#card').on('click', function() {
        if ($('#card').is(':checked')) {
            $('.increase-credit-limit .saved-credit-card-wrapper').hide();
            $('.increase-credit-limit .total-payment-wrapper').hide();
            $('.increase-credit-limit-buttons .cards > *').hide();
            $('.increase-credit-limit .radio-wrapper.terms').addClass('last');
            $('.increase-credit-limit .credit-card').show();
        }
    });

    $('#maybank').on('click', function() {
        if ($('#maybank').is(':checked')) {
            $('.increase-credit-limit .saved-credit-card-wrapper').hide();
            $('.increase-credit-limit .total-payment-wrapper').hide();
            $('.increase-credit-limit-buttons .cards > *').hide();
            $('.increase-credit-limit .radio-wrapper.terms').addClass('last');
            $('.increase-credit-limit .credit-card').hide();
            
        }
    });

//    Reload Yes Credits (Prepaid)
    $('#reload-saved-card').on('click', function() {
        if ($('#reload-saved-card').is(':checked')) {
            $('.reload-yes-credits .saved-credit-card-wrapper').show();
            $('.reload-yes-credits .cards-wrapper').show();
            $('.reload-yes-credits .total-payment').removeClass('last');
            $('.reload-yes-credits .credit-card').hide();
            $('.terms-condition-wrapper').show();
        }
    });

    $('#reload-card').on('click', function() {
        if ($('#reload-card').is(':checked')) {
            $('.reload-yes-credits .saved-credit-card-wrapper').hide();
            $('.reload-yes-credits .cards').hide();
            $('.reload-yes-credits .total-payment').addClass('last');
            $('.reload-yes-credits .credit-card').show();
            $('.terms-condition-wrapper').show();
        }
    });

    $('#reload-maybank').on('click', function() {
        if ($('#reload-maybank').is(':checked')) {
            $('.reload-yes-credits .saved-credit-card-wrapper').hide();
            $('.cards').hide();
            $('.reload-yes-credits .total-payment').addClass('last');
            $('.reload-yes-credits .credit-card').hide();
            $('.terms-condition-wrapper').show();
        }
    });

//    Manage Account
    $('.manage-account-buttons .update').on('click', function(){
        $('.manage-account .billing-information form').addClass('highlighted');
        $(this).hide();
        $('.manage-account-buttons .save').show();
        $('.manage-account-buttons .cancel').show();
        $('.manage-account .non-editable').hide();
        $('.manage-account .editable').show();
        $('.manage-account .input-group input').each(
            function(){
                $(this).attr("readonly", false);
            }
        );
    });

//    $('.zoom-voice #zoom-voice-search').on('click' ,function(){
//        $(this).removeClass('first');
//        $('.zoom-voice .available-numbers').show();
//    });

//    Personal Details
//    $('.manage-personal-details-buttons .update').on('click', function(){
//        $('.manage-account .manage-personal-details form').addClass('highlighted');
//        $(this).hide();
    //     $('.manage-personal-details-buttons .save').show();
    //     $('.manage-personal-details-buttons .cancel').show();
    //     $('.manage-personal-details .non-editable').hide();
    //     $('.manage-personal-details .editable').show();
    //     $('.manage-account .manage-personal-details .input-group input').each(
    //         function(){
    //             $(this).attr("readonly", false);
    //         }
    //     );
    // });

//    $('.manage-delivery-addresses-buttons .update').on('click', function(){
//        $('.manage-account .manage-delivery-addresses form').addClass('highlighted');
//        $(this).hide();
//        $('.manage-delivery-addresses-buttons .save').show();
//        $('.manage-delivery-addresses .non-editable').hide();
//        $('.manage-delivery-addresses .editable').show();
//        $('.manage-account .manage-delivery-addresses .input-group input').each(
//            function(){
//                $(this).attr("readonly", false);
//            }
//        );
//    });
//
//    $('.manage-delivery-addresses-buttons .add-address').on('click', function(){
//        $(this).hide();
//        $('.manage-delivery-addresses form .add-address').show();
//        $('#country1-ed').removeClass('last');
//        $('#country1').removeClass('last');
//    });
//
//    $('.manage-delivery-addresses-buttons .delete').on('click', function(){
//        $('.manage-delivery-addresses-buttons .add-address').show();
//        $('.manage-delivery-addresses form .add-address').hide();
//        $('#country1-ed').addClass('last');
//        $('#country1').addClass('last');
//
//    });
//
//    $('.manage-delivery-addresses-buttons .save').on('click', function(){
//    });

    $('.manage-credit-card-buttons .update').on('click', function(){
        $('.manage-account .manage-credit-card form').addClass('highlighted');
        $(this).hide();
        $('.manage-credit-card-buttons .save').show();
        $('.manage-credit-card-buttons .cancel').show();
        $('.manage-credit-card .non-editable').hide();
        $('.manage-credit-card .editable').show();
        $('.manage-account .manage-credit-card .input-group input').each(
            function(){
                $(this).attr("readonly", false);
            }
        );
    });

    $('#cardDeleting .confirm-delete-card').on('click', function(){
        $('.manage-credit-card-buttons .add-card').show();
        $('.manage-credit-card-buttons .update').hide();
        $('.manage-credit-card-buttons .delete').hide();
        $('.manage-credit-card-buttons .save').hide();
        $('.manage-credit-card-buttons .cancel').hide();
        $('.manage-credit-card .no-credit-card').show();
        $('.manage-credit-card .input-group').hide();
        $('.manage-credit-card .non-editable').hide();
        $('.manage-credit-card .editable').hide();
    });

    $('.manage-credit-card-buttons .add-card').on('click', function(){
        $('.manage-account .manage-credit-card form').addClass('highlighted');
        $(this).hide();
        $('.manage-credit-card-buttons .update').hide();
        $('.manage-credit-card-buttons .delete').hide();
        $('.manage-credit-card-buttons .save').show();
        $('.manage-credit-card-buttons .cancel').show();
        $('.manage-credit-card .no-credit-card').hide();
        $('.manage-credit-card .input-group').show();
        $('.manage-credit-card .non-editable').hide();
        $('.manage-credit-card .editable').show();
        $('.manage-account .manage-credit-card .input-group input').each(
            function(){
                $(this).attr("readonly", false);
            }
        );
    });





//    Menu for .die-with-tabs div
    $('.die-with-tabs ul.tabs li').on('click', function(){
        $('.die-with-tabs ul.tabs li').removeClass('active');
        $(this).addClass('active');
        var identificator = $(this).attr('id');
        $('.die-with-tabs .inner-die').hide();
        $('.die-with-tabs .inner-die.' + identificator).show();
    });

    
//    One-Time Add-On
    $('#booster .select').on('click', function(e){
        e.stopPropagation();
        $('#booster .booster-plan').slideToggle();
    });

    $('#booster .booster-plan li').on('click', function(){
        var boosterHtml = $(this).html();
        $('#booster .select').addClass('dark-text-color');
        $('#booster .select').html(boosterHtml);
        $('#booster .booster-plan').hide();

        if ($('.one-time .one-time-form').is(':hidden')) {
            $('.one-time .one-time-form').show();
            $('.one-time .buttons-wrapper').show();
            $('#booster .select').removeClass('last');
        }
    });

//  Reload Yes Credits
    $('#reload-yes-credit .select').on('click', function(e){
        e.stopPropagation();
        $('#reload-yes-credit .reload-plan').slideToggle();
    });

    $('#reload-yes-credit .reload-plan li').on('click', function(){
        var reloadHtml = $(this).html();
        $('#reload-yes-credit .select').addClass('dark-text-color');
        $('#reload-yes-credit .select').html(reloadHtml);
        $('#reload-yes-credit .reload-plan').hide();

    });

    $(document).on('click', function(){
        $('#booster .booster-plan').hide();
        $('#reload-yes-credit .reload-plan').hide();
    });

    $('.one-time-form #pay-later').on('click', function(){
        $('.one-time-form .payment-type-wrapper.two').hide();
        $('.one-time .one-time-saved-credit-card-wrapper').hide();
        $('.one-time .payment-type-wrapper.two input').each(function(){
            $(this).prop('checked', false);
        });
        $('.one-time-form .pay-later').show();
        $('.one-time .buttons-wrapper .cancel').hide();
        $('.one-time .buttons-wrapper .pay').hide();
        $('.one-time .buttons-wrapper .submit').show();
        $('.one-time .credit-card').hide();
        $('.terms-condition-wrapper').hide();
    });

    $('.one-time-form #pay-now').on('click', function(){
        $('.one-time-form .pay-later').hide();
        $('.one-time-form .payment-type-wrapper.two').show();
        $('.one-time .buttons-wrapper .submit').hide();
        $('.one-time .buttons-wrapper .pay').hide();
        $('.one-time .buttons-wrapper .cancel').show();
        $('.terms-condition-wrapper').hide();
    });

//   ------- cards
    $('#one-time-saved-card').on('click', function() {
        if ($('#one-time-saved-card').is(':checked')) {
            $('.one-time .one-time-saved-credit-card-wrapper').show();
            $('.one-time .total-payment-wrapper').show();
            $('.one-time .buttons-wrapper .pay').show();
            $('.one-time .credit-card').hide();
            $('.terms-condition-wrapper').show();
            //$('.increase-credit-limit-buttons .cards > *').show();
            //$('.one-time .radio-wrapper.terms').removeClass('last');
        }
    });

    $('#one-time-card').on('click', function() {
        if ($('#one-time-card').is(':checked')) {
            $('.one-time .one-time-saved-credit-card-wrapper').hide();
            $('.one-time .total-payment-wrapper').show();
            $('.one-time .buttons-wrapper .pay').show();
            $('.one-time .credit-card').show();
            $('.terms-condition-wrapper').show();
            //$('.increase-credit-limit-buttons .cards > *').hide();
            //$('.one-time .radio-wrapper.terms').addClass('last');
        }
    });

    $('#one-time-maybank').on('click', function() {
        if ($('#one-time-maybank').is(':checked')) {
            $('.one-time .one-time-saved-credit-card-wrapper').hide();
            $('.one-time .total-payment-wrapper').show();
            $('.one-time .buttons-wrapper .pay').show();
            $('.one-time .credit-card').hide();
            $('.terms-condition-wrapper').show();
            //$('.increase-credit-limit-buttons .cards > *').hide();
            //$('.one-time .radio-wrapper.terms').addClass('last');
        }
    });

    // for new Add Ons Prepaid page
    $('.one-time #yes-credits').on('click', function() {
        if ($('.one-time #yes-credits').is(':checked')) {
            $('.one-time .payment-type-content').hide();
            $('.one-time .yes-credits').show();
            $('.one-time .total-payment-wrapper').show();
            $('.account-content .details .one-time .buttons-wrapper .pay').show();
            $('.pay-now-buttons.add-ons-prepaid .mastercard-wrapper').hide();
            $('.pay-now-buttons.add-ons-prepaid .maybankcard-wrapper').hide();
            $('.auto-renewal-reload-wrapper').show();
        }
    });

    $('.one-time #add-on-prepaid-credit-card').on('click', function() {
        if ($('.one-time #add-on-prepaid-credit-card').is(':checked')) {
            $('.one-time .payment-type-content').hide();
            $('.one-time .credit-card').show();
            $('.one-time .total-payment-wrapper').show();
            $('.account-content .details .one-time .buttons-wrapper .pay').show();
            $('.pay-now-buttons.add-ons-prepaid .mastercard-wrapper').show();
            $('.pay-now-buttons.add-ons-prepaid .maybankcard-wrapper').hide();
            $('.auto-renewal-reload-wrapper').show();
        }
    });

    $('.one-time #add-on-prepaid-maybank').on('click', function() {
        if ($('.one-time #add-on-prepaid-maybank').is(':checked')) {
            $('.one-time .payment-type-content').hide();
            $('.one-time .maybank2u').show();
            $('.one-time .total-payment-wrapper').show();
            $('.account-content .details .one-time .buttons-wrapper .pay').show();
            $('.pay-now-buttons.add-ons-prepaid .mastercard-wrapper').hide();
            $('.pay-now-buttons.add-ons-prepaid .maybankcard-wrapper').show();
            $('.auto-renewal-reload-wrapper').show();
        }
    });

    $('.one-time #add-ons-prepaid-saved-card').on('click', function(){
        if ($('.one-time #add-ons-prepaid-saved-card').is(':checked')) {
            $('.one-time .payment-type-content').hide();
            $('.one-time .add-ons-prepaid-saved-credit-card-wrapper').show();
            $('.one-time .total-payment-wrapper').show();
            $('.account-content .details .one-time .buttons-wrapper .pay').show();
            $('.pay-now-buttons.add-ons-prepaid .mastercard-wrapper').show();
            $('.pay-now-buttons.add-ons-prepaid .maybankcard-wrapper').hide();
            $('.auto-renewal-reload-wrapper').show();
        }
    });

//    Prepaid Account Overview

	$('.subscriptions .inner-die .expandable').on('click', function(){
        if($(this).hasClass('down')) {
            $(this).removeClass("down").addClass("up");

            if ($(this).attr('id') == 'subscription-one') {
                $('.subscriptions .auto-reload-hidden-part').show();
            }

            if ($(this).attr('id') == 'subscription-two') {
                $('.subscriptions .auto-renewal-hidden-part').show();
            }
        } else {
            $(this).removeClass("up").addClass("down");

            if ($(this).attr('id') == 'subscription-one') {
                $('.subscriptions .auto-reload-hidden-part').hide();
            }

            if ($(this).attr('id') == 'subscription-two') {
                $('.subscriptions .auto-renewal-hidden-part').hide();
            }
        }

    });



	// Enable Auto Renewal
	$('#enabledAutoRenewal .confirm').on('click', function(){
	    $('.account-subscription-details #subscription-two .activated').show();
	    $('.account-subscription-details #subscription-two').removeClass('up');
	    $('.account-subscription-details #subscription-two').addClass('down');
	    $('.account-subscription-details .auto-renewal-hidden-part').hide();
	    $('.account-subscription-details .auto-renewal-hidden-part .input-group.terms ').hide();
	    $('.account-subscription-details .auto-renewal-hidden-part .button-wrapper .submit').hide();
	    $('.account-subscription-details .auto-renewal-hidden-part .button-wrapper .update').show();
	    $('.account-subscription-details .auto-renewal-hidden-part .button-wrapper .unsubscribed').show();
	});
	// Disable Auto Renewal
	$('#disableAutoRenewal .confirm').on('click', function(){
	    $('.account-subscription-details #subscription-two .activated').hide();
	    $('.account-subscription-details #subscription-two').removeClass('up');
	    $('.account-subscription-details #subscription-two').addClass('down');
	    $('.account-subscription-details .auto-renewal-hidden-part').hide();
	    $('.account-subscription-details .auto-renewal-hidden-part .input-group.terms ').show();
	    $('.account-subscription-details .auto-renewal-hidden-part .button-wrapper .submit').show();
	    $('.account-subscription-details .auto-renewal-hidden-part .button-wrapper .update').hide();
	    $('.account-subscription-details .auto-renewal-hidden-part .button-wrapper .unsubscribed').hide();
	});


////

//    $('.add-ons .inner-die .expandable').on('click', function(){
//        if($(this).hasClass('down')) {
//            $(this).removeClass("down").addClass("up");
//
//            if ($(this).attr('id') == 'add-ons-one') {
//                $('.add-ons .add-ons-hidden-part').show();
//            }
//
//            if ($(this).attr('id') == 'add-ons-two') {
//                $('.add-ons .valuepack-hidden-part').show();
//            }
//        } else {
//            $(this).removeClass("up").addClass("down");
//
//            if ($(this).attr('id') == 'add-ons-one') {
//                $('.add-ons .add-ons-hidden-part').hide();
//            }
//
//            if ($(this).attr('id') == 'add-ons-two') {
//                $('.add-ons .valuepack-hidden-part').hide();
//            }
//        }
//
//    });

//    $('.prepaid #yes-credits').on('change', function(e){
//        if(e.target.checked){
//            $('#yesCredits').modal({backdrop: 'static', keyboard: false});
//            //$('.bill-summary .update-autoreload').show();
//        }
//    });
//
//    $('.prepaid #value-pack').on('change', function(e){
//        if(e.target.checked){
//            $('#valuePack').modal({backdrop: 'static', keyboard: false});
//            //$('.bill-summary .update-autorenewal').show();
//        }
//    });

});

//Prepaid Add Ons

$('.add-on-selection .selection input').on('change', function(e){
    if(e.target.checked){
        var parent = $(this).closest('tr');
        var dataPackValue = parent.find('.data-pack label').html();
        var dataQuotaValue = parent.find('.data-quota').html();
        var paymentValue = parent.find('.payment-rate').html();

        $('.tabs #selection').removeClass('active');
        $('.tabs #payment').addClass('active');
        $('.die-with-tabs .inner-die.selection').hide();
        $('.die-with-tabs .inner-die.payment').show();

        $('.payment .purchase-add-on .data-pack').html(dataPackValue);
        $('.payment .purchase-add-on .data-quota').html(dataQuotaValue);
        $('.payment .purchase-add-on .payment-rate').html(paymentValue);

        $('.add-on-selection .buttons-wrapper .buy-blue').hide();
        $('.add-on-selection .buttons-wrapper .pay-grey').show();
    }
});

$('.add-on-selection .payment .payment-type-wrapper input').on('change', function(e){
    if (e.target.checked) {
        $('.add-on-selection .payment .payment-type-content').each(function(){
            $(this).hide();
        });

        $('.add-on-selection .buttons-wrapper .cards > *').hide();

        var identificator = $(this).attr('id');
        $('.add-on-selection .payment .' + identificator).show();

        if (identificator == "maybank2u") {
            $('.add-on-selection .buttons-wrapper .cards > *').show();
        }

        $('.add-on-selection .buttons-wrapper .pay-grey').hide();
        $('.add-on-selection .buttons-wrapper .pay-blue').show();
        if (identificator == "yes-credits")

        // Change the variable according to server data about funds
        var insuffientFunds = true;
        if (insuffientFunds === true) {
            $('.add-on-selection .buttons-wrapper .pay-blue').hide();
            $('.add-on-selection .buttons-wrapper .pay-grey').show();
        }
    }
});

//$('.manage-delivery-addresses .delivery-buttons-inline .update').on('click', function(){
//    var parentElement = $(this).closest('.address');
//    parentElement.find('form').addClass('highlighted');
//    $(this).hide();
//    parentElement.find('.save').show();
//    parentElement.find('.non-editable').hide();
//    parentElement.find('.editable').show();
//    parentElement.find(' .input-group input').each(
//        function(){
//            $(this).attr("readonly", false);
//        }
//    );
//    return false;
//});

$('#personalDetailsAddAddressButton').on('click', function(){
    if($('.manage-delivery-addresses form .address.first').is(':hidden')) {
        $('.manage-delivery-addresses form .address.first').show();
        $('#country1').addClass('last');
    } else {
        $('.manage-delivery-addresses form .add-address').show();
        //$('#country1-ed').removeClass('last');
        $('#country1').removeClass('last');
    }

    $('.no-delivery-address').hide();
    if($('.address:visible').length == 2) {
        $('#personalDetailsAddAddressButton').hide();
    }
});

//$('.manage-delivery-addresses .delivery-buttons-inline .delete').on('click', function(){
//    var parentElement = $(this).closest('.address');
//    parentElement.hide();
//    $('#country1-ed').addClass('last');
//    $('#country1').addClass('last');
//
//    if($('.address:visible').length == 1) {
//        $('#personalDetailsAddAddressButton').show();
//    }
//
//    if($('.address:visible').length == 0) {
//        $('.no-delivery-address').show();
//    }
//    return false;
//});

//$('.delivery-buttons-inline .save').on('click', function(){
//    $('#addressSaving').modal();
//    return false;
//});

// --- start (Express reload)

$('.valuepacks-yes-credits .validate-yes-id-password').on('click', function(){
    $('.valuepacks-yes-credits .credit-balance').show();

    return false;
});

$('.express-reload .yes-id-verifying-wrapper .verify-button').on('click', function(){
    $('.express-reload .yes-id-verifying-wrapper .verified-label').show();
    $('.express-reload .express-reload-content').show();
});

$('.express-reload #yes-id').on('click', function(){
    $('.express-reload .yes-id-verifying-wrapper .verified-label').hide();
});

$('#reload-amount .select').on('click', function(e){
    e.stopPropagation();
    $('#reload-amount .reload-amount-plan').slideToggle();
});

$('#reload-amount .reload-amount-plan li').on('click', function(){
    var boosterHtml = $(this).html();
    $('#reload-amount .select').addClass('dark-text-color');
    $('#reload-amount .select').html(boosterHtml);
    $('#reload-amount .reload-amount-plan').hide();

    if ($('.reload .one-time-form').is(':hidden')) {
        $('.reload .one-time-form').show();
        $('#reload-amount .select').removeClass('last');
    }
});

$('#valuepack-amount .select').on('click', function(e){
    e.stopPropagation();
    $('#valuepack-amount .reload-amount-plan').slideToggle();
});

$('#valuepack-amount .reload-amount-plan li').on('click', function(){
    var boosterHtml = $(this).html();
    $('#valuepack-amount .select').addClass('dark-text-color');
    $('#valuepack-amount .select').html(boosterHtml);
    $('#valuepack-amount .reload-amount-plan').hide();

    if ($('.valuepacks .one-time-form').is(':hidden')) {
        $('.valuepacks .one-time-form').show();
        $('#valuepack-amount .select').removeClass('last');
    }
});

$('#superbooster-type .select').on('click', function(e){
    e.stopPropagation();
    $('#superbooster-type .reload-amount-plan').slideToggle();
});

$('#superbooster-type .reload-amount-plan li').on('click', function(){
    var boosterHtml = $(this).html();
    $('#superbooster-type .select').addClass('dark-text-color');
    $('#superbooster-type .select').html(boosterHtml);
    $('#superbooster-type .reload-amount-plan').hide();

    if ($('.superboosters .one-time-form').is(':hidden')) {
        $('.superboosters .one-time-form').show();
        $('#superbooster-type .select').removeClass('last');
    }
});

// Reload

$('#express-reload-card').on('click', function() {
    if ($('#express-reload-card').is(':checked')) {
        $('.reload .payment-type-wrapper').removeClass('last');
        $('.reload .express-reload-maybank').hide();
        $('.reload .express-reload-card').show();
        $('.reload .payment-type-content').show();
        $('.reload .buttons-wrapper').show();
        $('.auto-renewal-reload-wrapper').show();
    }
});

$('#express-reload-maybank').on('click', function() {
    if ($('#express-reload-maybank').is(':checked')) {
        $('.reload .payment-type-wrapper').removeClass('last');
        $('.reload .express-reload-card').hide();
        $('.reload .express-reload-maybank').show();
        $('.reload .buttons-wrapper').show();
        $('.auto-renewal-reload-wrapper').show();
    }
});

// Valuepacks

$('#valuepacks-card').on('click', function() {
    if ($('#valuepacks-card').is(':checked')) {
        $('.valuepacks .payment-type-wrapper').removeClass('last');
        $('.valuepacks .express-reload-maybank').hide();
        $('.valuepacks .valuepacks-yes-credits').hide();
        $('.valuepacks .express-reload-card').show();
        $('.valuepacks .payment-type-content').show();
        $('.valuepacks .buttons-wrapper').show();
        $('.auto-renewal-reload-wrapper').show();
    }
});

$('#valuepacks-maybank').on('click', function() {
    if ($('#valuepacks-maybank').is(':checked')) {
        $('.valuepacks .payment-type-wrapper').removeClass('last');
        $('.valuepacks .express-reload-card').hide();
        $('.valuepacks .valuepacks-yes-credits').hide();
        $('.valuepacks .express-reload-maybank').show();
        $('.valuepacks .buttons-wrapper').show();
        $('.auto-renewal-reload-wrapper').show();
    }
});

$('#valuepacks-yes-credits').on('click', function() {
    if ($('#valuepacks-yes-credits').is(':checked')) {
        $('.valuepacks .payment-type-wrapper').removeClass('last');
        $('.valuepacks .express-reload-card').hide();
        $('.valuepacks .express-reload-maybank').hide();
        $('.valuepacks .valuepacks-yes-credits').show();
        $('.valuepacks .buttons-wrapper').show();
        $('.auto-renewal-reload-wrapper').show();
    }
});
//----------

//Superbooster

$('#express-reload-card-superbooster').on('click', function() {
    if ($('#express-reload-card-superbooster').is(':checked')) {
        $('.superboosters .payment-type-wrapper').removeClass('last');
        $('.superboosters .express-reload-maybank-superbooster').hide();
        $('.superboosters .express-reload-card-superbooster').show();
        $('.superboosters .payment-type-content').show();
        $('.superboosters .buttons-wrapper').show();
    }
});

$('#express-reload-maybank-superbooster').on('click', function() {
    if ($('#express-reload-maybank-superbooster').is(':checked')) {
        $('.superboosters .payment-type-wrapper').removeClass('last');
        $('.superboosters .express-reload-card-superbooster').hide();
        $('.superboosters .express-reload-maybank-superbooster').show();
        $('.superboosters .buttons-wrapper').show();
    }
});

//-----------

//----------- Pay Bill Postpaid
$('#express-reload-card-pay').on('click', function() {
    if ($('#express-reload-card-pay').is(':checked')) {
        $('.pay-bill-postpaid .payment-type-wrapper').removeClass('last');
        $('.pay-bill-postpaid .express-reload-maybank').hide();
        $('.pay-bill-postpaid .express-reload-card').show();
        $('.pay-bill-postpaid .payment-type-content').show();
        $('.pay-bill-postpaid .buttons-wrapper').show();
    }
});

$('#express-reload-maybank-pay').on('click', function() {
    if ($('#express-reload-maybank-pay').is(':checked')) {
        $('.pay-bill-postpaid .payment-type-wrapper').removeClass('last');
        $('.pay-bill-postpaid .express-reload-card').hide();
        $('.pay-bill-postpaid .express-reload-maybank').show();
        $('.pay-bill-postpaid .buttons-wrapper').show();
    }
});
//----------

$('.express-reload .reload .reload-submit').on('click', function(){
    $(this).hide();
    $('.express-reload .reload .confirm').show();
    $('.express-reload .reload .cancel').show();
    $('.express-reload .reload .reload-form').hide();
    $('.express-reload .reload .confirmation').show();
    $('.express-reload .top-step-menu.reload .second').removeClass('passive').addClass('active');
    $('.express-reload .top-step-menu.reload .first .stick').addClass('blue-stick');
});

$('.express-reload .reload .confirm').on('click', function(){
    $(this).hide();
    $('.express-reload .reload .cancel').hide();
    $('.express-reload .reload .confirmation').hide();
    $('.express-reload .reload .complete').show();
    $('.express-reload .top-step-menu.reload .third').removeClass('passive').addClass('active');
    $('.express-reload .top-step-menu.reload .second .stick').addClass('blue-stick');
});

$('.express-reload .valuepacks .reload-submit').on('click', function(){
    $(this).hide();
    $('.express-reload .valuepacks .confirm').show();
    $('.express-reload .valuepacks .cancel').show();
    $('.express-reload .valuepacks .reload-form').hide();
    $('.express-reload .valuepacks .confirmation').show();
    $('.express-reload .top-step-menu.valuepacks .second').removeClass('passive').addClass('active');
    $('.express-reload .top-step-menu.valuepacks .first .stick').addClass('blue-stick');
});

$('.express-reload .valuepacks .confirm').on('click', function(){
    $(this).hide();
    $('.express-reload .valuepacks .cancel').hide();
    $('.express-reload .valuepacks .confirmation').hide();
    $('.express-reload .valuepacks .complete').show();
    $('.express-reload .top-step-menu.valuepacks .third').removeClass('passive').addClass('active');
    $('.express-reload .top-step-menu.valuepacks .second .stick').addClass('blue-stick');
});

$('.express-reload .reload-cards .reload-submit').on('click', function(){
    $(this).hide();
    $('.express-reload .reload-cards .complete').show();
    $('.express-reload .reload-cards .activation-code').hide();
    $('.express-reload .reload-cards .complete').show();
    $('.express-reload .top-step-menu.reload-cards .third').removeClass('passive').addClass('active');
    $('.express-reload .top-step-menu.reload-cards .first .stick').addClass('blue-stick');
});


//--------- Postpaid
$('.express-reload .pay-bill-postpaid .reload-submit').on('click', function(){
    var payAmount = $('#pay-amount').val();
    if(payAmount === "") {
        $('#payAmount').modal();
    } else {
        $(this).hide();
        $('.express-reload .pay-bill-postpaid .confirm').show();
        $('.express-reload .pay-bill-postpaid .cancel').show();
        $('.express-reload .pay-bill-postpaid .reload-form').hide();
        $('.express-reload .pay-bill-postpaid .confirmation').show();
        $('.express-reload .top-step-menu.pay-bill-postpaid .second').removeClass('passive').addClass('active');
        $('.express-reload .top-step-menu.pay-bill-postpaid .first .stick').addClass('blue-stick');
    }
});

$('.express-reload .pay-bill-postpaid .confirm').on('click', function(){
    $(this).hide();
    $('.express-reload .pay-bill-postpaid .cancel').hide();
    $('.express-reload .pay-bill-postpaid .confirmation').hide();
    $('.express-reload .pay-bill-postpaid .complete').show();
    $('.express-reload .top-step-menu.pay-bill-postpaid .third').removeClass('passive').addClass('active');
    $('.express-reload .top-step-menu.pay-bill-postpaid .second .stick').addClass('blue-stick');
});

$('.express-reload .superboosters .reload-submit').on('click', function(){
    $(this).hide();
    $('.express-reload .superboosters .confirm').show();
    $('.express-reload .superboosters .cancel').show();
    $('.express-reload .superboosters .reload-form').hide();
    $('.express-reload .superboosters .confirmation').show();
    $('.express-reload .top-step-menu.superboosters .second').removeClass('passive').addClass('active');
    $('.express-reload .top-step-menu.superboosters .first .stick').addClass('blue-stick');
});

$('.express-reload .superboosters .confirm').on('click', function(){
    $(this).hide();
    $('.express-reload .superboosters .cancel').hide();
    $('.express-reload .superboosters .confirmation').hide();
    $('.express-reload .superboosters .complete').show();
    $('.express-reload .top-step-menu.superboosters .third').removeClass('passive').addClass('active');
    $('.express-reload .top-step-menu.superboosters .second .stick').addClass('blue-stick');
});
//---------

$('#reload').on('click', function(){
    $('.express-reload .top-step-menu.reload').show();
    $('.express-reload .top-step-menu.valuepacks').hide();
    $('.express-reload .top-step-menu.reload-cards').hide();
});

$('#valuepacks').on('click', function(){
    $('.express-reload .top-step-menu.reload').hide();
    $('.express-reload .top-step-menu.valuepacks').show();
    $('.express-reload .top-step-menu.reload-cards').hide();
});

$('#reload-cards').on('click', function(){
    $('.express-reload .top-step-menu.reload').hide();
    $('.express-reload .top-step-menu.valuepacks').hide();
    $('.express-reload .top-step-menu.reload-cards').show();
});

$('#pay-bill-postpaid').on('click', function(){
    $('.express-reload .top-step-menu.superboosters').hide();
    $('.express-reload .top-step-menu.pay-bill-postpaid').show();
});

$('#superboosters').on('click', function(){
    $('.express-reload .top-step-menu.pay-bill-postpaid').hide();
    $('.express-reload .top-step-menu.superboosters').show();
});

// --- end


// ---- Account Overview
//$('.bill-summary #auto-billing').on('change', function(e){
  //  if(e.target.checked){
    //    $('#creditCardsDetails').modal({backdrop: 'static', keyboard: false});
    //}
//});

//$('.bill-summary #auto-billing').on('change', function(e){
//    if(!e.target.checked){
//        $('#disableAutoBilling').modal({backdrop: 'static', keyboard: false});
//    }
//});

//$('.bill-summary #yes-credits').on('change', function(e){
//    if(!e.target.checked){
//        $('#disableAutoReload').modal({backdrop: 'static', keyboard: false});
//        //$('.bill-summary .update-autoreload').hide();
//    }
//});

//$('.bill-summary #value-pack').on('change', function(e){
//    if(!e.target.checked){
 //       $('#disableAutoRenewal').modal({backdrop: 'static', keyboard: false});
 //       //$('.bill-summary .update-autorenewal').hide();
//    }
//});

// ----- International Roaming

$('.international-roaming .buy-data-plans .select-country select').on('change', function(){
    $('.international-roaming .after-select-country').show();
    $('.international-roaming .buy-data-plans .select-country').removeClass('last');
});

/*$('.international-roaming .buy-data-plans #number-of-days').on('click', function(){
    $('.international-roaming .payment-details').show();
    $('.international-roaming #number-of-days').removeClass('last');
});*/

/*$('.international-roaming .purchase.buttons-wrapper button.buy').on('click', function(){
    $('.international-roaming .purchase.buttons-wrapper').hide();
    $('.international-roaming .select-country').hide();
    $('.international-roaming .after-select-country').hide();
    $('.international-roaming .payment-details').show();
    $('.international-roaming .confirmation-wrapper').show();
});*/

$('#buyRoamingPlan .confirm').on('click', function(){
    $('.international-roaming .confirmation-wrapper .buttons-wrapper').hide();
    $('.international-roaming .successful-msg').show();
});

/*// For demo purposes only
$('.international-roaming .payment-details .insufficient-wrapper').on('click', function(){
    $(this).hide();
    $('.international-roaming .payment-details .sufficient-wrapper').show();  
    $('.international-roaming .purchase.buttons-wrapper').show();
});

$('.international-roaming .payment-details .sufficient-wrapper .note').on('click', function(){
    $('.international-roaming .payment-details .sufficient-wrapper').hide();
    $('.international-roaming .payment-details .insufficient-wrapper').show();  
    $('.international-roaming .purchase.buttons-wrapper').hide();
});
*/
//Added Nov9 //
$('.reload-cards #only-activate').on('click', function(){
    $('.activation-code').show();
    $('.activation-code-and-convert').hide();
    $('.reload-cards .buttons-wrapper').show();
});

$('.reload-cards #activate-and-convert').on('click', function(){
    $('.activation-code').hide();
    $('.activation-code-and-convert').show();
    $('.reload-cards .buttons-wrapper').hide();
    $('.activation-code-and-convert .select-addons').hide();
});

$('.validate-reloadcard-activation-code').on('click', function(){
    $('.reload-cards .buttons-wrapper').show();
    $('.activation-code-and-convert .select-addons').show();
});



// --- end