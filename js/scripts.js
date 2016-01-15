$(document).ready(function(){
  $("form#destination").submit(function(event) {
    var relax = $("input#relax").val();
    var children = $("input#children").val();
      if (relax === "relaxation" && children === "yes") {
      $("#output1").show();
      }


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
// else {
//     var language = $("input#language").val();
//       if(language === "no" && children === "no"){
//       $("output3").show()
//       }
//   }
