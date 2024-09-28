
## 1. Giới thiệu về mạch kết hợp
Combinational Circuits là loại mạch logic mà đầu ra chỉ phụ thuộc vào trạng thái hiện tại của đầu vào, không có bất kỳ bộ nhớ hay trạng thái lưu trữ nào từ quá khứ.

- **Đặc điểm chính**:
  - Đầu ra được xác định ngay lập tức khi đầu vào thay đổi.
  - Không có trạng thái quá khứ, không yêu cầu tín hiệu đồng hồ (clock).

- **Ứng dụng**: 
  - Mạch kết hợp thường được sử dụng trong các hệ thống logic xử lý tín hiệu tức thời như trong các bộ cộng, bộ mã hóa, bộ giải mã, và các mạch chuyển mạch tín hiệu.
  
- **Ví dụ về Combinational Circuits**:
  - Các cổng logic cơ bản như AND, OR, NOT.
  - Các mạch phức tạp như bộ cộng, bộ trừ, bộ chọn (multiplexer), và bộ giải mã (decoder).

## 2. Adder, Subtractor, Decoder, Encoder, Mux & DeMux
Các thành phần này là những khối quan trọng trong mạch kết hợp, mỗi khối thực hiện một chức năng cụ thể.

- **Adder (Bộ cộng)**:
  - **Half Adder**: Cộng hai bit và cho ra hai đầu ra, gồm tổng (sum) và nhớ (carry).
  - **Full Adder**: Cộng ba bit (hai bit dữ liệu và một bit nhớ từ phép cộng trước đó).
  - **Ứng dụng**: Được sử dụng trong các hệ thống tính toán số học, vi xử lý, và các bộ tính toán trong CPU.

- **Subtractor (Bộ trừ)**:
  - **Half Subtractor**: Trừ hai bit và cho ra hiệu (difference) và mượn (borrow).
  - **Full Subtractor**: Trừ ba bit (hai bit dữ liệu và một bit mượn từ phép trừ trước đó).
  - **Ứng dụng**: Sử dụng trong các hệ thống xử lý số học và máy tính.

- **Decoder (Bộ giải mã)**:
  - Chuyển đổi một mã nhị phân thành nhiều tín hiệu đầu ra khác nhau.
  - **Ví dụ**: Một bộ giải mã 2-4 có 2 đầu vào và 4 đầu ra. Tùy vào tổ hợp của hai bit đầu vào, một trong bốn đầu ra sẽ được kích hoạt.
  - **Ứng dụng**: Dùng trong việc giải mã địa chỉ bộ nhớ hoặc điều khiển các thiết bị trong hệ thống nhúng.

- **Encoder (Bộ mã hóa)**:
  - Chuyển đổi nhiều tín hiệu đầu vào thành một mã nhị phân.
  - **Ví dụ**: Một bộ mã hóa 4-2 sẽ có 4 đầu vào và mã hóa chúng thành một tổ hợp 2 bit.
  - **Ứng dụng**: Dùng trong các hệ thống truyền thông và xử lý tín hiệu số.

- **Multiplexer (Bộ chọn - Mux)**:
  - Cho phép chọn một trong nhiều tín hiệu đầu vào để đưa ra đầu ra dựa trên các bit điều khiển.
  - **Ví dụ**: Một Mux 4-1 sẽ có 4 đầu vào và 1 đầu ra, tín hiệu điều khiển xác định đầu vào nào sẽ được chọn.
  - **Ứng dụng**: Dùng trong các hệ thống truyền thông, xử lý tín hiệu số, và mạch điều khiển.

- **Demultiplexer (Bộ phân tín hiệu - DeMux)**:
  - Ngược lại với Multiplexer, DeMux nhận một tín hiệu đầu vào và phân phối nó đến một trong nhiều đầu ra dựa trên các bit điều khiển.
  - **Ví dụ**: Một DeMux 1-4 sẽ có 1 đầu vào và 4 đầu ra, tín hiệu điều khiển xác định tín hiệu đầu vào sẽ được phân tới đầu ra nào.
  - **Ứng dụng**: Dùng trong các hệ thống truyền dữ liệu, phân phối tín hiệu, và hệ thống điều khiển.
