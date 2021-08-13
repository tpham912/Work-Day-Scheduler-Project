//time and date on top of page
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(currentDay);

//creat save-button dynamically
//save text & time to local storage
$(document).ready(function () { 
    $(".saveBtn").on("click", function(){
        var eachHour = $(this).parent().attr("id");
        //console.log($(this).parent().attr("class"));
        var textBox = $(this).siblings(".description").val();
        console.log("textBox: " + textBox);
        console.log("eachHour: " + eachHour);
        localStorage.setItem(eachHour, textBox);
    });

    function hourTracker() {
        var currentTime = new Date();
        var currentHour = currentTime.getHours();
        $(".time-block").each(function () {
            var timeBlock = $(this);
            var timeBlockId = timeBlock.attr("id");
            var splitArr = timeBlockId.split("-");
            console.log(splitArr);
            var timeBlockHour = splitArr[1];
            console.log(timeBlockHour);

        });
    }
    hourTracker();
})

//function for current time

//use for loop for each time block




