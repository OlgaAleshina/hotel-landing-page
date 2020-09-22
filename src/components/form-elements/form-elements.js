import "node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js";
import "node_modules/air-datepicker/dist/js/datepicker.min.js";

//options.selectionText = "взрослые";

$(document).ready(function() {
  $("#guests-dropdown__selection").click(function() {
    $("#guests-dropdown__menu").toggle();
  });
});

$(document).ready(function() {
  $("#guests-dropdown").iqDropdown(["option1", "option2"]);
});

$("#my-datepicker").datepicker({
  navTitles: {
    days: "<h3>Check in date:</h3> MM, yyyy"
  }
});

//datepicker.date = new Date();
/*$(document).ready(() => {
    $('.iqdropdown').iqDropdown({ [options] });
  });*/

/*$(document).ready(() => {
  $("p").click(function() {
    $(this).hide();
  });
});
*/

$("#example-show-hide-callbacks").datepicker({
  language: "en",
  onShow: function(dp, animationCompleted) {
    if (!animationCompleted) {
      log("start showing");
    } else {
      log("finished showing");
    }
  },
  onHide: function(dp, animationCompleted) {
    if (!animationCompleted) {
      log("start hiding");
    } else {
      log("finished hiding");
    }
  }
});
