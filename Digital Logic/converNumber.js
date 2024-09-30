function convertBase(number, baseFrom, baseTo) {
    // Chuyển đổi số từ cơ số baseFrom sang số cơ số 10
    let decimalNumber = parseInt(number, baseFrom);

    // Chuyển số từ cơ số 10 sang cơ số baseTo
    let convertedNumber = decimalNumber.toString(baseTo);

    return convertedNumber;
}

// Ví dụ sử dụng:
let number = '1000001001111'; // Số muốn chuyển đổi
let baseFrom = 2;  // Cơ số ban đầu (ví dụ: cơ số 2)
let baseTo = 16;    // Cơ số đích (ví dụ: cơ số 16)

let result = convertBase(number, baseFrom, baseTo);
result