$(document).ready(function () {
    $('#surname').val(); // to get val
    $('#surname').val('agg'); // to set

// For Dropdown menu 
// two methods to set value
$('#skills').val('CSS'); 
$('#skills option[value=none').prop("selected", true);
// to check
$('#skills option[value=none').prop("selected");

//check box manipulation
$('#eligibility').prop("checked");
$('#eligibility').prop("checked", true);

// radio button
$('#gen1').prop("checked"); // check 
$('#gen2').prop("checked", true); // select

// button manipulation
$("#btn").on("click", function () {
    $("#btn2").prop(
        "disabled",
        true
    ); // disables second btn when first btn is pressed
});
$("#btn2").prop(
    "disabled"
); // tells if btn is disabled or not
});
