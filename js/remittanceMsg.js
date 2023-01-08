const lang = document.documentElement.lang;
const url = window.location.href;
var maxMsg ,minMsg ,errorMsg ,spentTimeMsg ,feeMsg ,rateMsg ,bankMsg ,pickupMsg ,methodMsg;

if (lang === "th") {
    maxMsg = "สูงสุด";
    minMsg = "ขั้นต่ำ";
    errorMsg = "การดูเรทไม่สำเร็จ";
    spentTimeMsg = "ใช้เวลาในการโอน";
    feeMsg = "ค่าธรรมเนียมการโอน";
    rateMsg = "เรทโอนเงิน";
    bankMsg = "กรุณาเลือกธนาคาร";
    pickupMsg = "โปรดเลือกสถานที่รับ";
    methodMsg = "โปรดเลือกวิธีการรับเงิน";
} else if (lang === "vn") {
    maxMsg = "Lớn nhất";
    minMsg = "Nhỏ nhất";
    errorMsg = "Tra cứu tỷ giá thất bại";
    spentTimeMsg = "Thời gian xử lý dự kiến";
    feeMsg = "Phí dịch vụ";
    rateMsg = "Tỷ giá chuyển tiền";
    bankMsg = "Hãy chọn ngân hàng";
    pickupMsg = "Hãy chọn vị trí của người nhận";
    methodMsg = "Chọn phương thức nhận tiền";
} else if (lang === "cn") {
    maxMsg = "最多可汇金额";
    minMsg = "最低起汇金额";
    errorMsg = "汇率查询失败";
    spentTimeMsg = "预计所需时间";
    feeMsg = "汇款手续费";
    rateMsg = "汇款汇率";
    bankMsg = "请选择银行";
    pickupMsg = "请选择取钱地点";
    methodMsg = "请选择收款方式";
} else if (lang === "en") {
    maxMsg = "Maximum";
    minMsg = "Minimum";
    errorMsg = "Failed to check exchange rate";
    spentTimeMsg = "Estimated time";
    feeMsg = "Transaction fee";
    rateMsg = "Exchange rate";
    bankMsg = "Please select bank";
    pickupMsg = "Please select pick up location";
    methodMsg = "Please select remittance option";
} else {
    if (url.indexOf("/alipay/p2p") !== -1) {
        maxMsg = "最多可汇金额";
        minMsg = "最低起汇金额";
        errorMsg = "汇率查询失败";
        spentTimeMsg = "预计所需时间";
        feeMsg = "汇款手续费";
        rateMsg = "汇款汇率";
        bankMsg = "请选择银行";
        pickupMsg = "请选择取钱地点";
        methodMsg = "请选择收款方式";
    } else {
        maxMsg = "최대";
        minMsg = "최소";
        errorMsg = "환율 조회에 실패하였습니다.";
        spentTimeMsg = "예상 소요 시간";
        feeMsg = "송금 수수료";
        rateMsg = "송금 환율";
        bankMsg = "은행을 선택해 주세요";
        pickupMsg = "픽업 장소를 선택해 주세요";
        methodMsg = "받는 방법을 선택해 주세요";
    }
}

export {maxMsg, minMsg, errorMsg, spentTimeMsg, feeMsg, rateMsg, bankMsg, pickupMsg, methodMsg};

