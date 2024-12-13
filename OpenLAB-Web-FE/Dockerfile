# Bước 1: Sử dụng image Node.js chính thức để build ứng dụng
FROM node:20 

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép các file cấu hình của dự án
COPY package*.json ./

# Cài đặt các phụ thuộc
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .
# Chạy lệnh build
RUN npm run build
# Bước 2: Sử dụng image nhẹ hơn để chạy ứng dụng
# Thiết lập thư mục làm việc trong container
# Sao chép ứng dụng đã build từ giai đoạn build vào giai đoạn này
# Sao chép thư mục .next và node_modules

# Mở cổng 3000 để phục vụ ứng dụng
EXPOSE 3000

# # Khởi động ứng dụng Next.js
CMD ["npm", "start"]
