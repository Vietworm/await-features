# Callback - Promise - Async - Async/await 

Easily to know that?


## [Stop !!! Had Enough]


+ Experiment: `axios`

### Bluebird

+ [example_1](): Nếu 1 hàm đã là promise thì có thể **then** n lần để có thể sử dụng kết quả trước đó cho việc tính toán về sau.

+ [example_2](): Định nghĩa 1 hàm trả về là promise.

+ [example_3](): Tôi có tài khoản git của 1 nhóm người dùng, hãy trả về cho tôi tên và số repository của người dùng đó, theo thứ tự trong array.

+ [example 4](): Hãy viết 3 hàm Promise và trong từng hàm thực hiện trả về kết quả sau mỗi 3 giây.

+ [example_5](): Viết hàm Promise và sau 3 giây thì trả về lỗi sau đó thông báo cho người dùng.

+ [example_6](): Viết hàm Promise.all một cách đơn giản nhất để lấy tuần tự thông tin tài khoản github của 3 người dùng bất kỳ (sử dụng thư viện [axios]() để gọi kết nối http).


Một điều nữa khá thú vị trong `Promise.all`

Chúng ta có thể lấy về kết quả theo cách sau:

```js
    Promise.all([promise1, promise2]).then(function(result1, result2) {})
```

```js
    Promise.all([promise1, promise2]).then(function(results) {})
```

hoặc đối với ES6

```js
    Promise.all([promise1, promise2]).then(function([result1, result2]) {})
```