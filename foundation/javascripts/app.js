/* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
 * <http://cherne.net/brian/resources/jquery.hoverIntent.html>
 * 
 * @param  f  onMouseOver function || An object with configuration options
 * @param  g  onMouseOut function  || Nothing (use configuration options object)
 * @author    Brian Cherne brian(at)cherne(dot)net
 */

/* Foundation v2.1.3 http://foundation.zurb.com */
$(document).ready(function () {

    /* Use this js doc for all application specific JS */

    /* TABS --------------------------------- */
    /* Remove if you don't need :) */

    function activateTab($tab) {
        var $activeTab = $tab.closest('dl').find('a.active'),
        contentLocation = $tab.attr("href") + 'Tab';

        //Make Tab Active
        $activeTab.removeClass('active');
        $tab.addClass('active');

        //Show Tab Content
        $(contentLocation).closest('.tabs-content').find('li').hide();
        $(contentLocation).show();
    }

    $('dl.tabs').each(function () {
        //Get all tabs
        var tabs = $(this).children('dd').children('a');
        tabs.click(function (e) {
            activateTab($(this));
        });
    });

    if (window.location.hash) {
        activateTab($('a[href="' + window.location.hash + '"]'));
    }


    /* PLACEHOLDER FOR FORMS ------------- */
    /* Remove this and jquery.placeholder.min.js if you don't need :) */

    $('input, textarea').placeholder();
    /* ALERT BOXES ------------ */
    $(".alert-box").delegate("a.close", "click", function(event) {
        event.preventDefault();
        $(this).closest(".alert-box").fadeOut(function(event){
            $(this).remove();
        });
    });
    /* DROPDOWN NAV ------------- */

    var currentFoundationDropdown = null;
    $('.nav-bar li a, .nav-bar li a:after').each(function() {
        $(this).data('clicks', 0);
    });
    $('.nav-bar li a, .nav-bar li a:after').live('click', function(e) {
        e.preventDefault();
        if (currentFoundationDropdown !== $(this).index() || currentFoundationDropdown === null) {
            $(this).data('clicks', 0);
            currentFoundationDropdown = $(this).index();
        }
        $(this).data('clicks', ($(this).data('clicks') + 1));
        var f = $(this).siblings('.flyout');
        if (!f.is(':visible') && $(this).parent('.has-flyout').length > 1) {
            $('.nav-bar li .flyout').hide();
            f.show();
        } else if (($(this).data('clicks') > 1) || ($(this).parent('.has-flyout').length < 1)) {
            window.location = $(this).attr('href');
        }
    });
    $('.nav-bar').live('click', function(e) {
        e.stopPropagation();
        if ($(e.target).parents().is('.flyout') || $(e.target).is('.flyout')) {
            e.preventDefault();
        }
    });

    /* DISABLED BUTTONS ------------- */
    /* Gives elements with a class of 'disabled' a return: false; */

    
});
