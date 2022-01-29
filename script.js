document.getElementById("currentDay")
document.getElementById("currentDay").textContent = moment().format("MMM Do YY");

$(".9").val(localStorage.getItem("hour-9"));
$(".10").val(localStorage.getItem("hour-10"));
$(".11").val(localStorage.getItem("hour-11"));
$(".12").val(localStorage.getItem("hour-12"));
$(".13").val(localStorage.getItem("hour-13"));
$(".14").val(localStorage.getItem("hour-14"));
$(".15").val(localStorage.getItem("hour-15"));
$(".16").val(localStorage.getItem("hour-16"));
$(".17").val(localStorage.getItem("hour-17"));


function timeTracker() {
    var timeNow = moment().hour();

    // console.log(timeNow);

    //timeblock loops
    $(".blockTime").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour-")[1]);
        console.log(blockTime, timeNow);
        // To check the time and add the classes for background indicators
        if (blockTime < timeNow) {

            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })
}

// local storage functions
//instead of writing down every hour and item,got sibling and parent
$(".saveBtn").click(function () {
    var textItem = $(this).siblings(".textItem").val();
    var hour = $(this).parent().attr("id")
    console.log(textItem, hour);
    localStorage.setItem(hour, textItem);
})


timeTracker();