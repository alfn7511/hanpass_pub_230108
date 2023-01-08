const lang = document.documentElement.lang;
import {maxMsg, minMsg, errorMsg, spentTimeMsg, feeMsg, rateMsg, bankMsg, pickupMsg, methodMsg} from "./remittanceMsg.js"

$(function () {
    getRemittanceCoverage("first");
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

    $("#search_country").on("keyup change", function () {
        var text = $(this).val();
        var temp = $(".country-list > ul > li > div:contains('" + text + "')");
        $(".country-list > ul > li").hide();
        $(temp).parent().show();
    })

    $("#search_text").on("keyup change", function () {
        var text = $(this).val();
        var temp = $(".bank-list > ul > li > div:contains('" + text + "')");
        $(".bank-list > ul > li").hide();
        $(temp).parent().show();
    })

    $(document).on("click",".country", function() {
        let currencyCode = $(this).parents().children().children("span").text();
        let countryCode = $(this).parents().children("input").val();
        $("#toCountry").val(countryCode);
        $("#toCurrency").text(currencyCode);
        $("#toCurrency").toggleClass();
        $("#toCurrency").addClass("currency "+countryCode);
        $("#search_country").val("");
        $(".country-list > ul > li").show();
        $(".remittanceOption-dropdown").children("button").html("<span>"+methodMsg+"</span>");
        initServiceCenter();
        $(".serviceCenter-dropdown").hide();
        $("#country-select-model").modal("hide");
        getRemittanceCoverage("changeCurrency");
    })


    $(document).on("click",".remittanceOption-dropdown .dropdown-item:not(.disabled)", function() {
        let text = $(this).html()
        $(".dropdown .dropdown-item").removeClass('active')
        $(this).parents('.dropdown').children(".dropdown-toggle").html(text)
        $(this).parents('.dropdown').children(".dropdown-toggle").find("input:first").attr("id", "remittanceOption");
        let mtoSvcCenterCode = $(this).find(".mtoSvcCenterCode").val();
        let remittanceOption;

        if ($("#remittanceOption").val() === "BANK_TRANSFER") {
            remittanceOption = bankMsg;
        } else if ($("#remittanceOption").val() === "CASH_PICK_UP") {
            remittanceOption = pickupMsg;
        } else {
            remittanceOption = "";
        }

        initServiceCenter(remittanceOption);
        if (mtoSvcCenterCode === "null") {
            $(".serviceCenter-dropdown").show();
            getMtoCenter();
        } else {
            $(".serviceCenter-dropdown").hide();
            getCost("notHaveMtoSvcCenterKRW");
        }
    })

    $(document).on("click",".serviceCenter", function() {
        let serviceCenterName = $(this).text();
        let serviceCenterCode = $(this).parents().children("input").val();
        let providerCode = $(this).parents().children("input").next("input").val();

        $("#centerCode").prev("span").text(serviceCenterName);
        $("#centerCode").val(serviceCenterCode);
        $("#providerCode").val(providerCode);
        $("#search_text").val("");
        $("#bank-select-model li").show();
        $("#bank-select-model").modal("hide");
        getCost("KRW");
    })


    function getRemittanceCoverage(type) { // first : 첫로딩시 , changeCurrency : Currency변경시
        var country="";
        var currency="";

        if ($("#toCountry").val() != ""){
            country = $("#toCountry").val();
        }
        if ($("#toCurrency").text() != ""){
            currency = $("#toCurrency").text();
        }

        $.ajax({
            url: "/getRemittanceCoverage?country="+country+"&currency="+currency+"&lang="+lang,
            processData: false,
            type: "GET",
            beforeSend: function(xhr)
            {
                xhr.setRequestHeader("Content-Type","application/json");
            },
            success: function (data) {
                if (type === "first") {
                    $("#remittanceOptionList").html("<div class=\"dropdown-header\">"+methodMsg+"</div>");
                    $("#anotherCountry").empty();
                    $("#importantCountry").empty();

                    $(data.countryList).each(function(i){
                        //미얀마 제외
                        if (data.countryList[i].country !== "MM") {
                            $(data.countryList[i].currencyList).each(function(j) {
                                var htmlvalue = "<li><div class=\"country "+data.countryList[i].country+"\">"+data.countryList[i].countryName+"<span>"+data.countryList[i].currencyList[j].currency+"</span></div><input type=\"hidden\" id=\"toCountry\" value="+data.countryList[i].country+"></li>";
                                $("#anotherCountry").append(htmlvalue);
                            });
                        }
                    });

                    $(data.importantCountryList).each(function(i){
                        //미얀마, 몽골 USD 제외
                        if (data.importantCountryList[i].country !== "MM" && !(data.importantCountryList[i].country === "MN" && data.importantCountryList[i].currency === "USD")) {
                            var htmlvalue = "<li><div class=\"country " + data.importantCountryList[i].country + "\">" + data.importantCountryList[i].countryName + "<span>" + data.importantCountryList[i].currency + "</span></div><input type=\"hidden\" id=\"toCountry\" value=" + data.importantCountryList[i].country + "></li>";
                            $("#importantCountry").append(htmlvalue);
                        }
                    });

                    var remittanceOptionList = data.remittanceOptionList;
                    $(remittanceOptionList).each(function(i){
                        $("#remittanceOptionList").append("<a class=\"dropdown-item\" href=\"#\">"+remittanceOptionList[i].remittanceOptionName+"<input type='hidden' value='"+remittanceOptionList[i].remittanceOption+"'><input type='hidden' class='mtoSvcCenterCode' value='"+remittanceOptionList[i].mtoSvcCenterCode+"'></a>");
                    });

                } else if (type === "changeCurrency") {
                    $("#remittanceOptionList").html("<div class=\"dropdown-header\">"+methodMsg+"</div>");
                    var remittanceOptionList = data.remittanceOptionList;
                    $(remittanceOptionList).each(function(i){
                        $("#remittanceOptionList").append("<a class=\"dropdown-item\" href=\"#\">"+remittanceOptionList[i].remittanceOptionName+"<input type='hidden' value='"+remittanceOptionList[i].remittanceOption+"'><input type='hidden' class='mtoSvcCenterCode' value='"+remittanceOptionList[i].mtoSvcCenterCode+"'></a>");
                    });
                }
            },
            error: function (xhr, status, error) {
                alert(errorMsg);
            },
            complete: function () {
                getCost("KRW");
            }
        })
    }

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

    function getMtoCenter() {
        var obj = new Object();

        obj.toCurrencyCode = $("#toCurrency").text();
        obj.toCountryCode = $("#toCountry").val();
        obj.remittanceOption = $("#remittanceOption").val();
        obj.lang = lang;

        $.ajax({
            url: "/getMtoCenter",
            processData: false,
            type: "POST",
            beforeSend: function(xhr)
            {
                xhr.setRequestHeader("Content-Type","application/json");
            },
            data: JSON.stringify(obj),
            success: function (data) {
                $("#serviceCenterList").empty();

                $(data.centerList).each(function(i){
                    var htmlvalue = "<li><div class=\"serviceCenter\"><span>"+data.centerList[i].centerName+"</span></div><input type=\"hidden\" value=\""+data.centerList[i].centerCode+"\"><input type=\"hidden\" value=\""+data.centerList[i].providerCode+"\"></li>";
                    $("#serviceCenterList").append(htmlvalue);
                });
            },
            error: function (xhr, status, error) {
                alert(errorMsg);
            },
            complete: function () {
                getCost("KRW");
            }
        })
    }

})

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

function initServiceCenter(text) {
    $(".serviceCenter-dropdown").children("button").html("\n" +
        "                <span>"+text+"</span>\n" +
        "                <input type=\"hidden\" id=\"centerCode\" value=\"\">\n" +
        "                <input type=\"hidden\" id=\"providerCode\" value=\"\">");
    $(".bank-list").html("<ul class=\"d-flex flex-wrap\" id=\"serviceCenterList\">\n" +
        "            <li><div class=\"serviceCenter\"><span></span></div><input type=\"hidden\" value=\"\"></li>\n" +
        "        </ul>");

    $("#bank-select-model .modal-title").text(text);
}

function numberWithCommas(x) {
    var amount = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return amount;
}
