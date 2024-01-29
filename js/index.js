// ? js pure
// window.addEventListener("scroll",function (){
//     console.log("helo");
// })
// بتجلي بعد الاليمنت عن بداية الموفع
// scroll bar
let sectionOffset = $('#who').offset().top

// ! jq
$(window).on('scroll',function (){
    // عشان اعرف نزل كام
    // ? js pure
    // console.log(window.scrollY)
    // jq
    let windowScroll = $(window).scrollTop()
    if(windowScroll>sectionOffset){
        $('.navbar').css('backgroundColor','black')
    }else{
        $('.navbar').css('backgroundColor','transparent')
    }
})
// $(".sitting").on("click",function(){
//     let width = $(".color").outerWidth()
//     let right = $("#saidBar").css("right")
//     console.log(right)
//     if(right == "0px"){
//         $("#saidBar").animate({right:`-${width}px`},1500)
//     }else{
//         $("#saidBar").animate({ right: 0 }, 1500)
//     }
// })
// let width = $(".color").outerWidth()
// $(".sidebar").css({ right: `-${width}px` })
