// ajax 호출 시 loading image 출력
/*$(document).ajaxStart(function() {
    $(".ajax-loader").show();
});
$(document).ajaxStop(function() {
    $(".ajax-loader").hide();
});*/

$(function () {
	$(".hanpass").on("click", function (event) {
		location.href = "./index";
	});
});

/**
 * form 초기화
 *
 * @return jsonObject
 */
function initForm(searchFormId) {
	try {
		$("#" + searchFormId)[0].reset();
	} catch (e) {
		alert("[ initForm(searchFormId) ] " + e.message);
	}
}

/**
 * convert form, div to json object
 *
 * @return jsonObject
 */
jQuery.fn.serializeObject = function () {
	var obj = null;
	try {
		// form 내의 input 데이터를 json object로 변환 한다.
		if (this[0].tagName && this[0].tagName.toUpperCase() == "FORM") {
			var arr = this.serializeArray();

			if (arr) {
				obj = {};
				jQuery.each(arr, function () {
					if (this.type != "button" && this.name != "") { // intput 중 button과 name이 없는 요소는 제외
						if (this.name != "") {
							obj[this.name] = this.value;
						}
					}
				});
			}
		}

		// 팝업 레이어의  class 속성이 pop-conts인 div 하위 input을 json object로 변환 한다.
		if (this[0].tagName && this[0].tagName.toUpperCase() == "DIV") {
			obj = {};
			$(this).find("input, select").each(function () {
				if (this.type != "button" && this.type != "checkbox" && this.name != "") { // intput 중 button과 name이 없는 요소는 제외

					if (this.type == "radio") {
						obj[this.name] = $("input:radio[name='" + this.name + "']:checked").val();
					} else if (this.type == "checkbox") {

					} else {
						obj[this.name] = this.value;
					}
				}
			});
		}
	} catch (e) {
		alert(e.message);
	}

	return obj;
};

/**
 * table to json
 *
 * @return jsonObject
 */
jQuery.fn.tableToJson = function () {
	var jsonArray = new Array();

	try {

		$(this).find("tbody tr").each(function (index) {

			var jsonObj = new Object();

			$(this).find("input, select").each(function (i) {

				if ($(this).attr("data-key") != undefined
					&& $(this).attr("data-key") != "") { // data-key 속성이 있고

					if ($(this).val() != "" && $(this).val() != undefined) { // value가 있는 경우에만 json 객체에 key 셋팅
						jsonObj[$(this).attr("data-key")] = $(this).val();
					}
				}
			});

			if (Object.keys(jsonObj).length != 0) { // json 객체의 property가 하나라도 존재 하는 경우에만 jsonArray에 추가
				jsonArray.push(jsonObj);
			}
		});

		return jsonArray;
	} catch (e) {
		alert(e.message);
	}

	return obj;
};

/**
 * checkbox to json
 *
 * @return jsonObject
 */
function checkboxToJson(eleName) {
	try {
		var jsonArray = new Array();

		$("input:checkbox[name='" + eleName + "']:checked").each(function () {
			var jsonObj = new Object();
			jsonObj[eleName] = $(this).attr("value");

			jsonArray.push(jsonObj);
		});

		return jsonArray;
	} catch (e) {
		alert(e.message);
	}
}

/**
 * ajax request
 *
 * @param reqMethod : request method (post, get, put)
 * @param reqUrl : request url
 * @param parameter : paramete
 * @param dataType : ajax return data type(xml, json, text)
 * @param callback : callback function to return
 * @return
 */
function requestAjax(reqMethod, reqUrl, parameter, dataType, callback) {
	try {
		$.ajax({
			type: reqMethod
			, async: true
			, url: reqUrl
			, timeout: 30000
			, cache: false
			, data: parameter
			, dataType: dataType
			, error: function (request, status, error) {
				alert("requestAjax : interal error (code : " + request.status + ", msg : " + request.responseText + ", error : " + error + ")");
				return;
			}
			, success: function (data) {
				callback(data)
			}
		});

	} catch (e) {
		alert("requestAjax :: " + e.message);
	}
}

/**
 * request body에 json 데이터를 포함하여 put method로 ajax 요청한다.
 *
 * @param reqUrl : request url
 * @param data : JSON.stringify(data)
 * @param callback : callback function to return
 * @return jsonObject
 */
function requestAjaxPut(reqUrl, data, callback) {
	try {
		$.ajax({
			type: "put"
			, url: reqUrl
			, accept: "application/json"
			, contentType: "application/json; charset-utf-8"
			, data: data
			, dataType: "json"
			, error: function (jqXHR, textStatus, errorThrown) { // jqXHR : xml http request object, textStatus : Jquery status code, errorThrown : exception object 
				callback(jqXHR.responseJSON, jqXHR);
			}
			, success: function (data, textStatus, jqXHR) { // data : server response data, textStatus : Jquery status code, jqXHR : xml http request object
				callback(data, jqXHR);
			}
		});

	} catch (e) {
		alert("requestAjaxPut :: " + e.message);
	}
}

/**
 * request body에 json 데이터를 포함하여 get method로 ajax 요청한다.
 *
 * @param reqUrl : request url
 * @param data : JSON.stringify(data)
 * @param callback : callback function to return @return jsonObject
 */
function requestAjaxGet(reqUrl, data, callback) {
	try {
		$.ajax({
			type: "get"
			, url: reqUrl
			, accept: "application/json"
			, contentType: "application/json; charset-utf-8"
			, data: data
			, dataType: "json"
			, error: function (jqXHR, textStatus, errorThrown) { // jqXHR : xml http request object, textStatus : Jquery status code, errorThrown : exception object 
				callback(jqXHR.responseJSON, jqXHR);
			}
			, success: function (data, textStatus, jqXHR) { // data : server response data, textStatus : Jquery status code, jqXHR : xml http request object
				callback(data, jqXHR);
			}
		});

	} catch (e) {
		alert("requestAjaxGet :: " + e.message);
	}
}

/**
 * request body에 json 데이터를 포함하여 post method로 ajax 요청한다.
 *
 * @param reqUrl : request url
 * @param data : JSON.stringify(data)
 * @param callback : callback function to return
 * @return jsonObject
 */
function requestAjaxPost(reqUrl, data, callback) {
	try {
		$.ajax({
			type: "post"
			, url: reqUrl
			, accept: "application/json"
			, contentType: "application/json; charset-utf-8"
			, data: data
			, dataType: "json"
			, error: function (jqXHR, textStatus, errorThrown) { // jqXHR : xml http request object, textStatus : Jquery status code, errorThrown : exception object 
				callback(jqXHR.responseJSON, jqXHR);
			}
			, success: function (data, textStatus, jqXHR) { // data : server response data, textStatus : Jquery status code, jqXHR : xml http request object
				callback(data, jqXHR);
			}
		});

	} catch (e) {
		alert("requestAjaxPost :: " + e.message);
	}
}

/**
 * 문자열을 통화 형식으로 변환
 * @param str : 통화 형식으로 변환할 문자열
 */
function convertToCurrency(str) {
	try {
		str += "";
		var convertStr = "";

		if (str == "") {
			convertStr = "";
		} else {
			str = str.replace(/,/g, '');
			convertStr = Number(str).toLocaleString().split(".")[0];
		}

		return convertStr;
	} catch (e) {
		alert("convertToCurrency :: " + e.message);
	}
}

/**
 * 문자열 replaceAll
 * @param str : 통화 형식으로 변환할 문자열
 */
String.prototype.replaceAll = function (org, dest) {
	return this.split(org).join(dest);
}

/**
 * 페이지 번호 이동
 * @param pagingAreaId : 페이지 버튼을 출력할 페이징 영역의 id
 * @param selectedPageNum : 선택한 페이지 번호
 */
function movePage(renderingCount, selectedPageNum) {
	try {
		// 현재 페이지 저장
		$("#currentPageNum").val(selectedPageNum);

		// offset과 renderingCount를 계산 하여 서버에 데이터 요청
		var offset = renderingCount * (selectedPageNum - 1);
		searchResultList(offset, renderingCount);

	} catch (e) {
		alert("[ movePage(renderingCount, selectedPageNum) ] " + e.message);
	}
}

/**
 * 페이징 영역에 페이지 버튼 출력
 * @param pagingAreaId : 페이지 버튼을 출력할 페이징 영역의 id
 * @param totalResultCount : 서버에서 조회한 테이터 전체 갯수
 * @param renderingCount : 서버에서 조회한 테이터를 view에 렌더링할 갯수
 * @param currentPageNum : 현재 선택된 페이지 번호
 */
function renderPagingArea(pagingAreaId, totalResultCount, renderingCount, currentPageNum) {
	try {
		// 기존에 출력된 페이징 영역 삭제
		$("#" + pagingAreaId).empty();

		var pageNumberCount = parseInt(totalResultCount / renderingCount); // 페이지버튼 갯수
		var remainCount = totalResultCount % renderingCount;
		var pageNumberDisplayCount = 10;

		if (remainCount > 0) {
			pageNumberCount += 1;
		}

		//alert("[renderPagingArea] currentPageNum : " + currentPageNum + ", renderingCount : " + renderingCount + ", pageNumberCount : " + pageNumberCount);

		// 이전 페이지 버튼 생성
		if (currentPageNum > 1) {
			var prePagebutton = $("<li/>").append(
				$("<a/>").attr("href", "javascript:movePage('" + renderingCount + "', " + (parseInt(currentPageNum) - 1) + ");").append(
					$("<i/>").attr("class", "fa fa-chevron-left")
						.attr("aria-hidden", "true")
				)
			);

			$("#" + pagingAreaId).append(prePagebutton);
		}

		// 페이지 번호 버튼 시작 지점
		var pageNumberOffset = (currentPageNum - pageNumberDisplayCount);

		if (pageNumberOffset < 0) {
			pageNumberOffset = 0;
		}

		// 페이지 번호 버튼 끝 지점
		var pageNumberEnd = pageNumberDisplayCount < pageNumberCount ? pageNumberDisplayCount : pageNumberCount;
		pageNumberEnd += pageNumberOffset;

		// 페이지 번호 버튼 생성
		for (var i = pageNumberOffset; i < pageNumberEnd; i++) {
			var pageNum = i + 1;
			var pageNumButton = $("<li/>");

			if (currentPageNum == pageNum) {
				$(pageNumButton).attr("class", "click");
			}

			$(pageNumButton).append(
				$("<a/>").attr("href", "javascript:movePage('" + renderingCount + "', " + pageNum + ");") // 페이지 버튼 클릭시 페이지 이동
					.text(pageNum)
			);

			$("#" + pagingAreaId).append(pageNumButton);
		}

		// 다음 페이지 버튼 생성
		if (pageNumberCount > currentPageNum) {

			var nextPagebutton = $("<li/>").append(
				$("<a/>").attr("href", "javascript:movePage('" + renderingCount + "', " + (parseInt(currentPageNum) + 1) + ");").append(
					$("<i/>").attr("class", "fa fa-chevron-right")
						.attr("aria-hidden", "true")
				)
			);

			$("#" + pagingAreaId).append(nextPagebutton);
		}

	} catch (e) {
		alert("[ renderPagingArea(pagingAreaId, totalResultCount, renderingCount, currentPageNum) ] " + e.message);
	}
}

//헤더의 설정 버튼 클릭 시 설정 메뉴 레이어 오픈 (퍼블리싱 한 파일의 설정 아이콘 클릭 이벤트가 동작 하지 않아 아래와 같이 커스터 마이징 함.)
function clickSettingBtn() {
	try {
		$(".setting").toggle();
		$(".setting_bg").toggle();
	} catch (e) {
		alert("[clickSettingBtn] " + e.message);
	}
}

// 헤더의 설정 버튼 클릭 시 설정 메뉴 레이어 클로즈
function clickSettingBg() {
	try {
		$(".setting").toggle();
		$(".setting_bg").toggle();
	} catch (e) {
		alert("[clickSettingBg] " + e.message);
	}
}

// 로그아웃 (스프링 시큐리티 로그아웃 커스터 마이징)
function logout(logoutFormId) {
	try {
		$("#" + logoutFormId).submit();
	} catch (e) {
		alert("logout() : " + e.message);
	}
}