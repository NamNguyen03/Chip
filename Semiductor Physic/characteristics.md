# Thông tin chi tiết về các loại linh kiện điện tử

## BJT (Bipolar Junction Transistor)

### Cấu hình và chiều dòng điện

#### NPN Transistor
- **Input**: Dòng base (IB) vào base.
- **Output**: Dòng collector (IC) từ collector ra emitter.
- **Chiều dòng điện**: Dòng điện đi từ collector xuống emitter (IC) và dòng điện nhỏ hơn đi từ base xuống emitter (IB).

#### PNP Transistor
- **Input**: Dòng base (IB) vào base.
- **Output**: Dòng collector (IC) từ emitter ra collector.
- **Chiều dòng điện**: Dòng điện đi từ emitter lên collector (IC) và dòng điện nhỏ hơn đi từ base lên emitter (IB).

### Các loại cấu hình BJT

#### Cấu hình Emitter chung (Common Emitter, CE)
- **Đặc điểm**:
  - Độ khuếch đại điện áp cao.
  - **Đảo pha 180 độ**.
  - Độ khuếch đại dòng điện cao.
- **Ứng dụng**:
  - Khuếch đại tín hiệu âm thanh.
  - Khuếch đại tần số thấp và trung bình.
  - Khuếch đại tín hiệu thông dụng.

#### Cấu hình Base chung (Common Base, CB)
- **Đặc điểm**:
  - Độ khuếch đại điện áp cao.
  - **Không đảo pha**.
  - Trở kháng đầu vào thấp, trở kháng đầu ra cao.
- **Ứng dụng**:
  - Khuếch đại tín hiệu tần số cao.
  - Các mạch khuyếch đại RF.
  - Ứng dụng trong các mạch khuếch đại điện áp.

#### Cấu hình Collector chung (Common Collector, CC) hoặc Bộ theo điện áp (Emitter Follower)
- **Đặc điểm**:
  - Độ khuếch đại điện áp xấp xỉ 1.
  - **Không đảo pha**.
  - Trở kháng đầu vào cao, trở kháng đầu ra thấp.
  - Độ khuếch đại dòng điện cao.
- **Ứng dụng**:
  - Bộ đệm tín hiệu để cách ly các giai đoạn mạch.
  - Các mạch khuếch đại công suất.
  - Các mạch điều khiển tải.

## FET (Field-Effect Transistor)

### JFET (Junction Field-Effect Transistor)

#### N-Channel JFET
- **Input**: Điện áp cổng-source (VGS).
- **Output**: Dòng drain (ID) từ drain xuống source.
- **Chiều dòng điện**: Dòng điện đi từ drain xuống source (ID).

#### P-Channel JFET
- **Input**: Điện áp cổng-source (VGS).
- **Output**: Dòng drain (ID) từ source lên drain.
- **Chiều dòng điện**: Dòng điện đi từ source lên drain (ID).

### MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor)

#### N-Channel MOSFET
- **Input**: Điện áp cổng-source (VGS).
- **Output**: Dòng drain (ID) từ drain xuống source.
- **Chiều dòng điện**: Dòng điện đi từ drain xuống source (ID).

#### P-Channel MOSFET
- **Input**: Điện áp cổng-source (VGS).
- **Output**: Dòng drain (ID) từ source lên drain.
- **Chiều dòng điện**: Dòng điện đi từ source lên drain (ID).

## OP-AMP (Operational Amplifier)
- **Input**: Điện áp đầu vào vào hai chân (Inverting Input và Non-inverting Input).
- **Output**: Điện áp đầu ra từ chân Output.
- **Chiều dòng điện**: Dòng điện từ nguồn cấp (positive supply) đi vào OP-AMP và dòng điện ra tại chân Output.
- **Đảo pha**: Tùy thuộc vào cách kết nối mạch, OP-AMP có thể đảo pha hoặc không đảo pha:
  - **Inverting Configuration**: Đảo pha 180 độ.
  - **Non-inverting Configuration**: Không đảo pha.

## CMOS (Complementary Metal-Oxide-Semiconductor)

### N-Channel MOSFET
- **Input**: Điện áp đầu vào vào Gate của MOSFETs.
- **Output**: Điện áp đầu ra từ drain của MOSFETs.
- **Chiều dòng điện**: Dòng drain xuống source.

### P-Channel MOSFET
- **Input**: Điện áp đầu vào vào Gate của MOSFETs.
- **Output**: Điện áp đầu ra từ drain của MOSFETs.
- **Chiều dòng điện**: Dòng source lên drain.
