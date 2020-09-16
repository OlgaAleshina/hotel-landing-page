import "node_modules/air-datepicker/dist/js/datepicker.min.js";

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
