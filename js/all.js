$(function(){
    $(".loader").fadeOut(1000,function(){
        $(".loading").slideUp(500,function(){
            $("body").css("overflow","auto")
        })
    })
    
})
let boxColors = $(".boxColor");

boxColors.eq(0).css("backgroundColor","#218FE6")
boxColors.eq(1).css("backgroundColor","#F44336")
boxColors.eq(2).css("backgroundColor","#E91E63")
boxColors.eq(3).css("backgroundColor","#9C27B0")
boxColors.eq(5).css("backgroundColor","#3F51B5")
boxColors.eq(6).css("backgroundColor","#2196F3")
boxColors.eq(7).css("backgroundColor","#03A9F4")
boxColors.eq(8).css("backgroundColor","#00BCD4")
boxColors.eq(9).css("backgroundColor","#009688")
boxColors.eq(10).css("backgroundColor","#8BC34A")
boxColors.eq(11).css("backgroundColor","#CDDC39")
boxColors.eq(12).css("backgroundColor","#FFC107")
boxColors.eq(13).css("backgroundColor","#FF9800")
boxColors.eq(14).css("backgroundColor","#FF5722")
boxColors.eq(15).css("backgroundColor","#795548")
boxColors.eq(16).css("backgroundColor","#607D8B")
boxColors.on("click",function(e){
    let curentColor = $(e.target).css("backgroundColor");
    $(":root").css("--main-color", curentColor)
    $("#icon").css("backgroundColor", curentColor)
    $("#goToTop").css("color", curentColor)
    $(".why-class").css("color", curentColor)
    $(".nav-link a").css("color", curentColor)
    $(".con").css("backgroundColor", curentColor)
})
$("#icon").on("click",function(){
    $(".saidBox").animate({width:"toggle",paddingInline:"toggle"},1000)
}) 

$("#goToTop").on("click",function(){
    $('body,html').animate({ scrollTop: 0 }, 1500)
})
