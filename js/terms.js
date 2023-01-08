

function termSelect() {
    var url = $(location).attr('href');

    if (typeof url.split("#")[1] == "undefined" || url.split("#")[1] == null || url.split("#")[1] == "") {
        window.scrollTo(0,0)
    } else {
        $("#a_"+url.split("#")[1]).click();
        window.scrollTo(0,0)
    }
}