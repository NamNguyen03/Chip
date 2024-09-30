function convertBaseWithDecimal(number, baseFrom, baseTo) {
    // Tách phần nguyên và phần thập phân (nếu có)
    let parts = number.split('.');
    let integerPart = parseInt(parts[0], baseFrom);
    let decimalPart = parts[1] ? parts[1] : null;

    // Chuyển phần nguyên sang cơ số đích
    let convertedIntegerPart = integerPart.toString(baseTo);

    // Nếu không có phần thập phân, trả về kết quả phần nguyên
    if (!decimalPart) {
        return convertedIntegerPart;
    }

    // Xử lý phần thập phân
    let decimalValue = 0;
    for (let i = 0; i < decimalPart.length; i++) {
        decimalValue += parseInt(decimalPart[i], baseFrom) / Math.pow(baseFrom, i + 1);
    }

    // Chuyển phần thập phân sang cơ số đích
    let convertedDecimalPart = '';
    let precision = 10; // Số lượng chữ số thập phân cần lấy trong cơ số đích
    while (decimalValue !== 0 && precision > 0) {
        decimalValue *= baseTo;
        let digit = Math.floor(decimalValue);
        convertedDecimalPart += digit.toString(baseTo);
        decimalValue -= digit;
        precision--;
    }

    // Kết hợp phần nguyên và phần thập phân lại
    return `${convertedIntegerPart}.${convertedDecimalPart}`;
}

// Ví dụ sử dụng:
let number = '12.34'; // Số muốn chuyển đổi (cơ số gốc)
let baseFrom = 10;  // Cơ số ban đầu (ví dụ: cơ số 10)
let baseTo = 2;    // Cơ số đích (ví dụ: cơ số 2)

let result = convertBaseWithDecimal(number, baseFrom, baseTo);
console.log(`Số ${number} từ cơ số ${baseFrom} sang cơ số ${baseTo} là: ${result}`);
