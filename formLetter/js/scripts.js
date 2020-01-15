$(document).ready(function() {
    $("#formBox").submit(function(event) {

        var nameInput = $("input#name").val();

        $(".name").text(nameInput);

        $("#letterText").show();


        event.preventDefault();
    })
});