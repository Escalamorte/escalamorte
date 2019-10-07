$(document).ready(function(){
    $('.header').height($(window).height());
});
// language=JQuery-CSS
$(".navbar a").click(function(){
    $("body,html").animate({
        scrollTop:$("#" + $(this).data('value')).offset().top
    },5000)
});
function display(num) {
    document.form.screen.value = document.form.screen.value + num;
    equal();
}
function clearAll() {
    document.form.screen.value = "";
    document.form.result.value = "";
}

function equal() {
    let exp = document.form.screen.value;
    if(exp){
        document.form.result.value = eval(exp);
    }

    let value = document.form.screen.value;
    let length = value.length - 1;

    console.log("Length is " + length);
    console.log("charAt is " + value.charAt(length));
}
function backspace() {
    let exp = document.form.screen.value;
    document.form.screen.value = exp.substring(0, exp.length-1);
    equal();
}