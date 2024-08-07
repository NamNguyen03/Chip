# Create a markdown file with the table of metals and their densities

content = """
| Kim loại     | Khối lượng riêng (g/cm³) |
|--------------|--------------------------|
| Nhôm (Al)    | 2.70                     |
| Sắt (Fe)     | 7.87                     |
| Đồng (Cu)    | 8.96                     |
| Chì (Pb)     | 11.34                    |
| Vàng (Au)    | 19.32                    |
| Bạc (Ag)     | 10.49                    |
| Kẽm (Zn)     | 7.14                     |
| Titan (Ti)   | 4.51                     |
| Magiê (Mg)   | 1.74                     |
| Thiếc (Sn)   | 7.31                     |
| Niken (Ni)   | 8.90                     |
| Platina (Pt) | 21.45                    |
"""

# Save to a file
file_path = "/mnt/data/metals_density_table.md"
with open(file_path, "w") as file:
    file.write(content)

file_path
