let numberList = [];

// Hàm thêm số vào mảng
function addNumber() {
    const val = document.getElementById('inputValue').value;
    if (val === "") return alert("Vui lòng nhập số!");
    
    numberList.push(Number(val));
    document.getElementById('inputValue').value = "";
    displayArray();
}

function displayArray() {
    document.getElementById('arrayDisplay').innerText = "Mảng hiện tại: [" + numberList.join(", ") + "]";
}

function resetArray() {
    numberList = [];
    displayArray();
    document.querySelectorAll('.result').forEach(el => el.innerText = "");
}

// 1. Tổng các số dương
function sumPositive() {
    const sum = numberList.filter(n => n > 0).reduce((a, b) => a + b, 0);
    document.getElementById('res1-2').innerText = "Tổng số dương: " + sum;
}

// 2. Đếm số dương
function countPositive() {
    const count = numberList.filter(n => n > 0).length;
    document.getElementById('res1-2').innerText = "Số lượng số dương: " + count;
}

// 3. Tìm số nhỏ nhất
function findMin() {
    if (numberList.length === 0) return;
    const min = Math.min(...numberList);
    document.getElementById('res3-4').innerText = "Số nhỏ nhất: " + min;
}

// 4. Tìm số dương nhỏ nhất
function findMinPositive() {
    const positives = numberList.filter(n => n > 0);
    if (positives.length === 0) {
        document.getElementById('res3-4').innerText = "Không có số dương";
    } else {
        const minPos = Math.min(...positives);
        document.getElementById('res3-4').innerText = "Số dương nhỏ nhất: " + minPos;
    }
}

// 5. Tìm số chẵn cuối cùng
function findLastEven() {
    // Chạy ngược mảng để tìm số chẵn đầu tiên gặp được
    for (let i = numberList.length - 1; i >= 0; i--) {
        if (numberList[i] % 2 === 0) {
            document.getElementById('res5').innerText = "Số chẵn cuối: " + numberList[i];
            return;
        }
    }
    document.getElementById('res5').innerText = "-1 (Không có số chẵn)";
}

// 6. Đổi chỗ
function swapElements() {
    const p1 = parseInt(document.getElementById('pos1').value);
    const p2 = parseInt(document.getElementById('pos2').value);

    if (isNaN(p1) || isNaN(p2) || p1 < 0 || p2 < 0 || p1 >= numberList.length || p2 >= numberList.length) {
        return alert("Vị trí không hợp lệ!");
    }

    // Swap ES6
    [numberList[p1], numberList[p2]] = [numberList[p2], numberList[p1]];
    displayArray();
    document.getElementById('res6').innerText = "Đã đổi chỗ vị trí " + p1 + " và " + p2;
}

// 7. Sắp xếp tăng dần
function sortArray() {
    numberList.sort((a, b) => a - b);
    displayArray();
    document.getElementById('res7').innerText = "Đã sắp xếp!";
}

// 8. Tìm số nguyên tố đầu tiên
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function findFirstPrime() {
    const prime = numberList.find(n => isPrime(n));
    document.getElementById('res8').innerText = prime !== undefined ? "Số NT đầu tiên: " + prime : "-1";
}

// 9. Đếm số nguyên trong mảng số thực
function countIntegersInRealArray() {
    const input = document.getElementById('realArrayInput').value;
    if (!input) return alert("Hãy nhập mảng số thực!");
    
    // Chuyển chuỗi thành mảng số
    const arr = input.split(',').map(n => n.trim()).filter(n => n !== "").map(Number);
    const count = arr.filter(n => Number.isInteger(n)).length;
    
    document.getElementById('res9').innerText = "Có " + count + " số nguyên trong mảng mới.";
}

// 10. So sánh số lượng số dương và số lượng số âm
function comparePosNeg() {
    let pos = 0, neg = 0;
    numberList.forEach(n => {
        if (n > 0) pos++;
        else if (n < 0) neg++;
    });

    let result = "";
    if (pos > neg) result = "Dương > Âm";
    else if (pos < neg) result = "Âm > Dương";
    else result = "Dương = Âm";

    document.getElementById('res10').innerText = `Dương: ${pos} | Âm: ${neg} => ${result}`;
}