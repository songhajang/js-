$('.tab-button').eq(1).on('click',function(){
    $('.tab-button').removeClass('orange')
    $('.tab-button').eq(0).addClass('orange')
    console.log(1)
})