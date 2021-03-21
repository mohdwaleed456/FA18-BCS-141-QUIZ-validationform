$(function () {
    $("#myForm").submit(formvalidation);
});

function formvalidation(e) {
    if (
        $("#name").val().length >= 5 &&
        $("#password").val().length >= 8 &&
        $("#password").val() == $("#confirm_password").val()
    ) {
        alert("Form Submissiom Succesful!");
    } else {
        if ($("#name").val().length < 5) {
            $("#name").addClass("border");
            $("#nam").show();
        }
        if ($("#password").val().length < 8) {
            $("#password").addClass("border");
            $("#pass").show();
        }
        if ($("#password").val() != $("#confirm_password").val()) {
            $("#confirm_password").addClass("border");
            $("#c_pass").show();
        }

        e.preventDefault();
    }
}
