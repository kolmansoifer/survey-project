$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const name = $("input#userName").val();
    const age = $("#age").val();
    const adventure = $("input:radio[name=Date]:checked").val();

    console.log(name);

    $(".results").text("Your name is " + name + ", your age is " + age + ", and your favorite pasttime is " + adventure + ".");
    $(".results").show();
    event.preventDefault();
  });
});