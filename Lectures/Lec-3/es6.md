regex: /([0-9]+)\.([0-9]+)(\/[0-9]+)/,'$1\.$2\.0$3'

Giải thích: Thay thế số tìm theo y/c trước dấu ',' bằng cụm đằng sau dấu ','

Từ 0-9 ít nhất 1 số
.
số 0-9 ít nhất 1 số
/(ký tự đặc biệt, nên phải thể hiện trước bằng dấu \)
số ít nhất 1 số

ES6 là phiên bản cập nhật ECMAScript 2015 hay ES2015 cho ngôn ngữ Javascript

Tính năng q trọng:
* Phạm vi của biến
    + Let trong phạm vi khối - block scope {} => Khi đã dùng trong for như điều kiện thì khi ra ngoài sẽ k dùng đc
    + var trong phạm vi hàm - function scope => Miễn là trong hàm thì vẫn có thể dùng được

* Arrow Function
```javascript
        var sum = (a) => {
        return a + 100;
    }`
```
