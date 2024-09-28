
# Hướng dẫn ôn tập về Mạch tuần tự

## 1. Giới thiệu về mạch tuần tự
Sequential Circuits là loại mạch điện tử mà đầu ra phụ thuộc không chỉ vào tín hiệu đầu vào hiện tại mà còn vào trạng thái trước đó (bộ nhớ). Điều này có nghĩa là chúng có thể lưu trữ thông tin và hoạt động dựa trên thời gian.

- **Sự khác biệt với Combinational Circuits**:
  - Trong **Combinational Circuits**, đầu ra chỉ phụ thuộc vào đầu vào hiện tại.
  - Trong **Sequential Circuits**, đầu ra phụ thuộc vào cả đầu vào hiện tại và trạng thái trước đó.
  
- **Ứng dụng**:
  - Được sử dụng trong các hệ thống đồng bộ như đồng hồ, bộ nhớ, và các hệ thống điều khiển tuần tự.
  - Dùng trong các mạch logic điều khiển, mạch xử lý tín hiệu số, và bộ điều khiển CPU.

## 2. Các loại mạch tuần tự
- **Synchronous Sequential Circuits**:
  - Là mạch hoạt động đồng bộ với tín hiệu xung nhịp, các thay đổi trạng thái xảy ra đồng bộ với các cạnh của tín hiệu xung.
  - **Ví dụ**: Mạch đồng hồ, mạch đếm.
  
- **Asynchronous Sequential Circuits**:
  - Hoạt động mà không cần tín hiệu xung nhịp, các thay đổi trạng thái xảy ra ngay khi có sự thay đổi trong tín hiệu đầu vào.
  - **Ví dụ**: Mạch khóa điện tử không có đồng hồ, bộ điều khiển đèn giao thông.

## 3. Flip-Flops
- **Flip-Flop** là bộ nhớ một bit trong các mạch tuần tự, có thể lưu trữ trạng thái "0" hoặc "1". Chúng thay đổi trạng thái theo tín hiệu xung nhịp và đầu vào.

- **Các loại Flip-Flop phổ biến**:
  - **SR Flip-Flop**: Có hai đầu vào S (Set) và R (Reset). Đầu vào S thiết lập trạng thái "1", còn R thiết lập trạng thái "0".
  - **D Flip-Flop**: Dữ liệu ở đầu vào D được lưu trữ khi tín hiệu clock thay đổi.
  - **JK Flip-Flop**: Làm việc tương tự như SR Flip-Flop nhưng không gặp vấn đề với trạng thái không xác định.
  - **T Flip-Flop**: Đổi trạng thái đầu ra mỗi khi có tín hiệu clock, thường dùng trong mạch đếm.

- **Ứng dụng**: Dùng trong các bộ nhớ, mạch đồng hồ, mạch đếm.

## 4. Register & Counters
- **Registers (Thanh ghi)**:
  - Là nhóm các Flip-Flop kết nối với nhau để lưu trữ nhiều bit dữ liệu, dùng trong các hệ thống xử lý.
  
- **Counters (Bộ đếm)**:
  - Là nhóm các Flip-Flop kết nối để đếm số lượng xung clock hoặc sự kiện.
  - **Synchronous Counter**: Thay đổi trạng thái cùng lúc với tín hiệu clock.
  - **Asynchronous Counter**: Thay đổi trạng thái tuần tự theo tín hiệu clock.
  
- **Ứng dụng**: Được dùng trong các mạch đếm, đồng hồ số, hệ thống điều khiển.

## 5. Latches
- **Latch** là dạng bộ nhớ một bit giống Flip-Flop nhưng không cần tín hiệu clock để thay đổi trạng thái, hoạt động ngay khi tín hiệu đầu vào thay đổi.

- **Các loại Latch**:
  - **SR Latch**: Có hai đầu vào S (Set) và R (Reset), hoạt động dựa trên đầu vào mà không cần tín hiệu clock.
  - **D Latch**: Lưu trữ dữ liệu ở đầu vào D khi tín hiệu enable kích hoạt.

- **Ứng dụng**: Dùng trong các mạch lưu trữ đơn giản và hệ thống điều khiển.

