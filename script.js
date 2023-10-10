$(document).ready(function(){
//Scripts can be written in different files and then used in our programs as well.
//This cleans up the html file to make it easier to read.
randomRects();

function randomRects()
{
    for(var i = 0; i< 10; i++)
    {
        var div = document.createElement("div");
        var width = parseInt(Math.random() * 350);
        div.setAttribute("style", "width:" + width +"px");
        div.setAttribute("class", "rect");
        $("#container").append(div);
    }
}

//create click event
    //only if the width of the div is <200px
    //for button
    //changes width of each div
    //to 200px
//.width function
    //.width(num)
        //num = number of pixels


    $("#width-fix").on("click",function(){

        $(".rect").each(function(){
            if($(this).width()<200){
                $(this).width("200");
            }
        });

    });

    // $("#width-fix").on("click",function(){});

    // $("div").click(function(){
    //     if($(this).width() < "200px"){
    //         $(this).width("200px");
    //     }
    // });


});