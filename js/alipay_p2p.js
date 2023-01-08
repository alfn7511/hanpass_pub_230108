const lang = document.documentElement.lang;
import {maxMsg, minMsg, errorMsg, spentTimeMsg, feeMsg, rateMsg, bankMsg, pickupMsg, methodMsg} from "./remittanceMsg.js"

$(function () {
    getCost("KRW");
    var timeout = null
    $("#deposit").on("keyup", function () {
        clearTimeout(timeout)
        timeout = setTimeout(function() {
            $("#deposit").val(numberWithCommas($("#deposit").val().replaceAll(",","").replaceAll(".","")));
            let mtoSvcCenterCode = $(".dropdown-toggle .mtoSvcCenterCode").val();
            if (mtoSvcCenterCode === "null") {
                getCost("KRW");
            } else {
                getCost("notHaveMtoSvcCenterKRW");
            }
        }, 1000)
    });

    $("#recipient").on("keyup", function () {
        clearTimeout(timeout)
        timeout = setTimeout(function() {
            $("#recipient").val(numberWithCommas($("#recipient").val().replaceAll(",","").replaceAll(".","")))
            let mtoSvcCenterCode = $(".dropdown-toggle .mtoSvcCenterCode").val();
            if (mtoSvcCenterCode === "null") {
                getCost("");
            } else {
                getCost("notHaveMtoSvcCenter");
            }
        }, 1000)
    });



    function getCost(type) { // KRW : KRW(입금액) 변경시,
        // notHaveMtoSvcCenterKRW : KRW(입금액) 변경시-> mtoSvcCenter(bank or pickup ....)가없을때 ,
        // notHaveMtoSvcCenter: 받는금액 변경시(bank or pickup ....)가없을때 ,
        // else : 받는금액 변경시
        var obj = new Object();
        if (type === "KRW") {
            obj.inputAmount = $("#deposit").val().replaceAll(",","");
            obj.inputCurrencyCode = $("#inputCurrency").text();
            obj.toCurrencyCode = $("#toCurrency").text();
            obj.toCountryCode = $("#toCountry").val();
            obj.remittanceOption = $("#remittanceOption").val();
            obj.mtoServiceCenterCode = $("#centerCode").val();
            obj.mtoProviderCode = $("#providerCode").val();
            obj.lang = lang;
        } else if (type === "notHaveMtoSvcCenterKRW") {
            obj.inputAmount = $("#deposit").val().replaceAll(",","");
            obj.inputCurrencyCode = $("#inputCurrency").text();
            obj.toCurrencyCode = $("#toCurrency").text();
            obj.toCountryCode = $("#toCountry").val();
            obj.mtoServiceCenterCode = $(".dropdown-toggle .mtoSvcCenterCode").val();
            obj.lang = lang;
        } else if (type === "notHaveMtoSvcCenter") {
            obj.inputAmount = $("#recipient").val().replaceAll(",","");
            obj.inputCurrencyCode = $("#toCurrency").text();
            obj.toCurrencyCode = $("#inputCurrency").text();
            obj.toCountryCode = $("#toCountry").val();
            obj.mtoServiceCenterCode = $(".dropdown-toggle .mtoSvcCenterCode").val();
            obj.lang = lang;
        } else {
            obj.inputAmount = $("#recipient").val().replaceAll(",","");
            obj.inputCurrencyCode = $("#toCurrency").text();
            obj.toCurrencyCode = $("#inputCurrency").text();
            obj.toCountryCode = $("#toCountry").val();
            obj.remittanceOption = $("#remittanceOption").val();
            obj.mtoServiceCenterCode = $("#centerCode").val();
            obj.mtoProviderCode = $("#providerCode").val();
            obj.lang = lang;
        }

        if (obj.inputAmount !== "") {
            $.ajax({
                url: "/getCost",
                processData: false,
                type: "POST",
                beforeSend: function(xhr)
                {
                    xhr.setRequestHeader("Content-Type","application/json");
                },
                data: JSON.stringify(obj),
                success: function (data) {
                    $("#depositMin").val(data.minAmountLimit);
                    $("#depositMax").val(data.maxAmountLimit);
                    $("#recipientMin").val(data.termMinAmount);
                    $("#recipientMax").val(data.termMaxAmount);
                    if (type === "KRW" || type === "notHaveMtoSvcCenterKRW") {
                        $("#recipient").val(numberWithCommas(data.toAmount));
                        $("#reverseExchangeRate").html("<img src=\"/images/ico-cal-multi-24x24-3x.png\" alt=\"\" id =\"reverseExchangeRate\">"+rateMsg+" : "+data.reverseExchangeRate+" "+data.inputCurrencyCode +" = 1 "+data.toCurrencyCode);
                    } else {
                        $("#deposit").val(numberWithCommas(data.depositAmount));
                        $("#reverseExchangeRate").html("<img src=\"/images/ico-cal-multi-24x24-3x.png\" alt=\"\" id =\"reverseExchangeRate\">"+rateMsg+" : "+data.reverseExchangeRate+" "+data.toCurrencyCode +" = 1 "+data.inputCurrencyCode);
                    }
                    $("#transferFee").html("<img src=\"/images/ico-cal-plus-24x24-3x.png\" alt=\"\">"+feeMsg+" : "+ numberWithCommas(data.transferFee) +" KRW <img src=\"/images/img-coupon-41x33-3x.png\" class=\"img-coupon\" alt=\"\">");

                    if (data.requiredTimeCode !== null) {
                        $("#requiredTimeCode").html("<img src=\"/images/ico-cal-time-24x24-3x.png\" alt=\"\">"+spentTimeMsg+" : "+data.requiredTimeCode);
                    } else {
                        $("#requiredTimeCode").empty();
                    }

                },
                error: function (xhr, status, error) {
                    $("#recipient").val("")
                    $("#recipientMin").val("")
                    $("#recipientMax").val("")
                    $("#recipientTooltip").text("");
                    $(".serviceCenter-dropdown").hide();
                    alert(errorMsg);
                },
                complete: function () {
                    setTooltip();
                }
            })
        }
    }


});

function setTooltip() {
    if (Number($("#depositMin").val()) > Number($("#deposit").val().replaceAll(",",""))) {
        $("#depositTooltip").text(minMsg+" " + $("#depositMin").val());
        $("#depositTooltip").show();
    } else if (Number($("#depositMax").val()) < Number($("#deposit").val().replaceAll(",",""))) {
        $("#depositTooltip").text(maxMsg+" " + $("#depositMax").val());
        $("#depositTooltip").show();
    } else {
        $("#depositTooltip").text("");
        $("#depositTooltip").hide();
    }

    if (Number($("#recipientMin").val()) > Number($("#recipient").val().replaceAll(",",""))) {
        $("#recipientTooltip").text(minMsg+" " + $("#recipientMin").val());
        $("#recipientTooltip").show();
    } else if (Number($("#recipientMax").val()) < Number($("#recipient").val().replaceAll(",",""))) {
        $("#recipientTooltip").text(maxMsg+" " + $("#recipientMax").val());
        $("#recipientTooltip").show();
    } else {
        $("#recipientTooltip").text("");
        $("#recipientTooltip").hide();
    }
}

function numberWithCommas(x) {
    var amount = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return amount;
}
