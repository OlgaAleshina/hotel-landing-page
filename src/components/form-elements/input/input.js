import "node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js";
import "node_modules/air-datepicker/dist/js/datepicker.min.js";

//options.selectionText = "взрослые";

$(document).ready(function() {
  $("#guests-number").click(function() {
    $("#guests-number-menu").show();
  });
});

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
