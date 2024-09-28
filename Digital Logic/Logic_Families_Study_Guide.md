
# Hướng dẫn ôn tập về Logic Families

## 1. Giới thiệu về các họ mạch logic
Logic Families đại diện cho các công nghệ khác nhau dùng để chế tạo các mạch logic kỹ thuật số. Mỗi họ mạch logic có các đặc điểm riêng về mức điện áp, tiêu thụ công suất, tốc độ và khả năng tương thích.

- **TTL (Transistor-Transistor Logic)**: 
  - Được phát triển sớm và là một trong những họ mạch logic phổ biến nhất.
  - Sử dụng transistor lưỡng cực để thực hiện các phép toán logic.
  - Đặc điểm: Tốc độ vừa phải (không nhanh bằng ECL), tiêu thụ công suất tương đối lớn.
  - Điện áp nguồn phổ biến: 5V.

- **CMOS (Complementary Metal-Oxide-Semiconductor)**:
  - Là một họ mạch logic sử dụng bóng bán dẫn MOSFET.
  - Đặc điểm: Tiêu thụ công suất thấp khi hoạt động, rất phù hợp cho các thiết bị sử dụng pin.
  - Điện áp nguồn: Thường từ 3V đến 15V.
  - Tốc độ: Thường chậm hơn TTL nhưng các phiên bản CMOS mới hơn đã cải thiện độ trễ.

- **ECL (Emitter-Coupled Logic)**:
  - Nổi bật với tốc độ cao nhất, nhưng đi kèm với mức tiêu thụ năng lượng cao hơn.
  - Được sử dụng trong các ứng dụng yêu cầu tốc độ cực nhanh như radar và viễn thông.

## 2. Công suất, Tốc độ và Tương thích
- **Công suất**: Mỗi loại mạch logic tiêu thụ năng lượng ở các mức khác nhau, trong đó CMOS tiêu thụ ít nhất. TTL tiêu thụ nhiều hơn và ECL có mức tiêu thụ năng lượng cao nhất.
  - **Ví dụ**: Đối với các ứng dụng yêu cầu tiết kiệm pin, CMOS thường được ưu tiên do tính năng tiết kiệm điện.

- **Tốc độ**: Tốc độ xử lý của mạch logic được xác định bởi độ trễ lan truyền (propagation delay), là thời gian tín hiệu mất để truyền qua cổng logic.
  - **TTL** có tốc độ vừa phải, trong khi **ECL** là nhanh nhất nhờ không sử dụng các trạng thái bão hòa của transistor.
  - **CMOS** truyền tín hiệu chậm hơn do điện dung lớn hơn, nhưng các phiên bản CMOS tiên tiến đã cải thiện đáng kể tốc độ.

- **Tương thích**: Các họ mạch logic có thể không tương thích trực tiếp về mức điện áp đầu vào/đầu ra. Ví dụ, **TTL** và **CMOS** cần mạch giao diện để hoạt động cùng nhau.
  - **Ví dụ**: TTL xuất tín hiệu logic "1" ở 5V, trong khi CMOS có thể sử dụng 3.3V hoặc 5V tùy phiên bản.

## 3. Cách hoạt động của các cổng logic
- **Cổng logic** là các thành phần cơ bản trong mạch logic số, thực hiện các phép toán logic như AND, OR, NOT, NAND, NOR, XOR và XNOR.

  - **Cổng AND**: Cho ra tín hiệu "1" chỉ khi cả hai đầu vào đều là "1". Nếu bất kỳ đầu vào nào là "0", kết quả sẽ là "0".
  - **Cổng OR**: Cho ra tín hiệu "1" nếu ít nhất một trong các đầu vào là "1". Kết quả chỉ là "0" khi tất cả các đầu vào là "0".
  - **Cổng NOT (Inverter)**: Đảo ngược giá trị đầu vào, biến "1" thành "0" và ngược lại.

- **Ứng dụng**: Các cổng NAND và NOR rất quan trọng vì chúng là các cổng "phổ quát", có thể được sử dụng để tạo ra bất kỳ cổng logic nào khác.

## 4. Các thông số của IC logic
Để chọn và sử dụng IC logic hiệu quả, cần phải hiểu rõ các thông số quan trọng:

- **Propagation Delay (Độ trễ lan truyền)**: Thời gian tín hiệu mất để truyền từ đầu vào đến đầu ra của một cổng logic. Độ trễ càng thấp, mạch càng hoạt động nhanh.
  - **Ví dụ**: Độ trễ của TTL thường vào khoảng 10 ns, trong khi CMOS cũ có độ trễ gần 100 ns.

- **Fan-out**: Số lượng cổng đầu vào mà một đầu ra của cổng logic có thể điều khiển mà không làm suy giảm chất lượng tín hiệu.
  - **Ví dụ**: Một cổng TTL thường có fan-out là 10, tức là nó có thể điều khiển 10 cổng đầu vào khác.

- **Power Dissipation (Tản nhiệt)**: Năng lượng tiêu thụ bởi IC, thường được tản ra dưới dạng nhiệt.

- **Noise Margin (Biên độ nhiễu)**: Khả năng chịu đựng nhiễu của mạch. CMOS có biên độ nhiễu cao hơn TTL, do đó ít bị ảnh hưởng bởi tín hiệu nhiễu.

## 5. IC logic chuyên dụng
Các IC này được thiết kế cho các nhiệm vụ cụ thể thay vì chỉ thực hiện các phép toán logic cơ bản.

- **Multiplexer (Bộ chọn)**: Chọn một tín hiệu đầu vào từ nhiều tín hiệu và chuyển nó đến đầu ra.
  - **Ứng dụng**: Sử dụng trong hệ thống truyền dữ liệu ghép kênh.

- **Demultiplexer (Bộ phân tín hiệu)**: Ngược lại với multiplexer, phân chia một tín hiệu đầu vào thành nhiều tín hiệu đầu ra.

- **Shift Register (Thanh ghi dịch)**: Lưu trữ và dịch chuyển dữ liệu, thường được dùng trong truyền thông nối tiếp hoặc điều khiển đèn LED.

- **Counter (Bộ đếm)**: Đếm các sự kiện hoặc chu kỳ trong mạch số.

- **Flip-Flop**: Một phần tử nhớ cơ bản, lưu trữ một bit thông tin.

---

Tài liệu này cung cấp giải thích chi tiết về các họ mạch logic, công suất, tốc độ, tương thích, các thông số IC và các IC chuyên dụng, giúp bạn ôn tập hiệu quả cho kỳ thi.
