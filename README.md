# Máy tính sự đẹp trai

Một ứng dụng [Node.js](https://nodejs.org/en/) có thể kiểm tra xem bạn có đẹp trai không

## Cách dùng

1. Cài đặt các thư viện

```sh
npm install
```

2. Chạy ứng dụng

```sh
node index.js
```

3. Nhập địa chỉ IP và cổng hiện trên dấu nhắc lệnh vào trình duyệt (Khuyến khích dùng [Chrome](https://www.google.com/intl/vi_vn/chrome/) bản mới nhất

## Lưu ý

A. Chỉ nhập "http://localhost:<số cổng hiện trên dấu nhắc lệnh (mặc định là 3000)>" (không có dấu ngoặc kép) vào trình duyệt nếu sử dụng máy tính/điện thoại đang chạy ứng dụng, nếu nhập bằng thiết bị khác thì sẽ không vào được

B. Nhập "http://<địa chỉ IP xuất hiện trên dấu nhắc lệnh (không phải localhost)>:<số cổng hiện trên dấu nhắc lệnh>" (không có đấu ngoặc kép) vào trình duyệt nếu muốn kết nối bằng thiết bị khác (máy chạy ứng dụng và máy muốn kết nối bắt buộc phải kết nối chung mạng Wi-Fi)

C. Ứng dụng chỉ có thể chạy trên phiên bản [Node.js](https://nodejs.org/en/) >= 14, các bản [Node.js](https://nodejs.org/en/) =< 13 thì không được hỗ trợ

## Bí mật

1: Khi bấm vào nút "Kiểm tra độ đẹp trai" trên trang thì nó sẽ luôn hiện "Bạn không đẹp trai!" sau 10 giây.

2: Để trang luôn hiện "Bạn rất đẹp trai!" khi bấm nút, thì bạn phải tắt Wi-Fi đi (không được tải lại trang) rồi bấm nút

3: Khi bạn bật Wi-Fi lên rồi sau đó bấm nút lần nữa thì trang sẽ hiển thị "Bạn không đẹp trai!" như ban đầu