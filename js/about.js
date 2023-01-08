


function aboutSelect() {
    var url = $(location).attr('href');

    if (typeof url.split("#")[1] == "undefined" || url.split("#")[1] == null || url.split("#")[1] == "") {
    } else {
        $("#a_"+url.split("#")[1]).click();
        location.assign("#"+url.split("#")[1]);
        $(".navbar-toggler").addClass("collapsed");
        $(".navbar-toggler").attr("aria-expanded",false);
        $("#navbar-allmenu").removeClass("show");
    }
}