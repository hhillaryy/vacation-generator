$(document).ready(function(){
  $("form#destination").submit(function(event) {
    var relax = $("input#relax").val();
    var children = parseInt($("input#children").val());
      if (relax === "relaxation" && children >= 1) {
      $("#output1").show();
      } 

      // else { var mtns = $("input#mtns").val();
      // if (mtns === "beach" && children = 0) {
      //   $("#output3").show();
      //   }
      // }


    event.preventDefault();
    });
});

// $(document).ready(function() {
//   $("form#celebrity").submit(function(event) {
//     var gender = $("input#gender").val();
//     var age = parseInt($("input#age").val());
//       if (gender === "women" && age <= 35) {
//        $("#output5").show();
//      }

//
