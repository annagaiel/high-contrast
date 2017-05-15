$(document).ready(function() {
  $("input[name=gender]:radio").change(function() {
    var $this = $(this);
    if ($this.is(":checked")) {
      $this.next().children(":first").removeClass("pos-1");
      $this.next().children(":first").addClass("pos-2");
    }
    $('input[type="radio"]:not(:checked)').each(function() {
      $(this).next().children(":first").removeClass("pos-2");
      $(this).next().children(":first").addClass("pos-1");
    });
  });
});
