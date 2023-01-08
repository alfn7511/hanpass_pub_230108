function sendEmail() {
    try {
        var emailObject = new Object();
        emailObject.senderName = $("input[id=contact-name]").val();
        emailObject.email = $("input[id=contact-email]").val();
        emailObject.subject = $("input[id=contact-title]").val();
        emailObject.contents = $("textarea[id=contact-content]").val();

        // 등록 요청
        var data = JSON.stringify(emailObject);

        $.ajax({
            type: "post"
            , url: "/mail/sendMailToHtml"
            , accept: "application/json"
            , contentType: "application/json; charset-utf-8"
            , data: data
            , dataType: "json"
            , error: function (jqXHR, textStatus, errorThrown) { // jqXHR : xml http request object, textStatus : Jquery status code, errorThrown : exception object
                alert("문의 등록에 실패하였습니다.");
            }
            , success: function (data, textStatus, jqXHR) { // data : server response data, textStatus : Jquery status code, jqXHR : xml http request object
                alert("문의 등록이 완료되었습니다.");
                location.reload();
            }
        });

    } catch (e) {
        alert("[sendEmail()] " + e.message);
    }
}

function reset() {

    $("input[id=contact-name]").val("");
    $("input[id=contact-email]").val("");
    $("input[id=contact-title]").val("");
    $("textarea[id=contact-content]").val("");
}
