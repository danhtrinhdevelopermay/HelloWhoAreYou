# Hướng dẫn Build APK cho dự án Animated App with Rive and Flutter

## ✅ Đã cấu hình sẵn

File GitHub Actions workflow đã được tạo tại `.github/workflows/build-apk.yml` để tự động build APK khi bạn push code lên GitHub.

## 📋 Các bước thực hiện

### Bước 1: Tạo GitHub Repository

1. Đăng nhập vào https://github.com
2. Click nút **"New repository"** hoặc **"+"** ở góc phải trên
3. Đặt tên repository (ví dụ: `flutter-rive-animated-app`)
4. Chọn **Public** hoặc **Private**
5. **KHÔNG** check "Add a README file" (vì project đã có README)
6. Click **"Create repository"**

### Bước 2: Push code lên GitHub

Mở terminal trong thư mục `Build-an-Animated-App-with-Rive-and-Flutter-main` và chạy:

```bash
# Di chuyển vào thư mục project
cd Build-an-Animated-App-with-Rive-and-Flutter-main

# Khởi tạo Git repository
git init

# Thêm remote repository (thay YOUR_USERNAME và YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Add tất cả files
git add .

# Commit
git commit -m "Initial commit - Animated App with Rive"

# Đổi tên branch thành main (nếu cần)
git branch -M main

# Push lên GitHub
git push -u origin main
```

### Bước 3: Xem quá trình Build

1. Vào repository trên GitHub
2. Click tab **"Actions"**
3. Bạn sẽ thấy workflow "Build Flutter APK" đang chạy
4. Click vào workflow để xem chi tiết quá trình build

### Bước 4: Tải APK

Sau khi build thành công (có dấu ✅ màu xanh):

**Cách 1: Từ Artifacts**
1. Trong trang workflow vừa chạy
2. Scroll xuống phần **"Artifacts"**
3. Click vào **"app-release"** để tải APK

**Cách 2: Từ Releases (nếu đã push vào main)**
1. Vào tab **"Releases"** của repository
2. Tải file APK từ release mới nhất

## 🔧 Workflow tự động chạy khi:

- ✅ Push code lên nhánh `main` hoặc `master`
- ✅ Tạo Pull Request
- ✅ Chạy thủ công từ tab Actions (click "Run workflow")

## 📱 Cài đặt APK trên điện thoại

1. Tải file `app-release.apk` từ GitHub
2. Chuyển file vào điện thoại Android
3. Mở file APK
4. Cho phép "Install from unknown sources" nếu được hỏi
5. Click Install

## ⚙️ Tùy chỉnh (nếu cần)

### Thay đổi phiên bản Flutter

Sửa file `.github/workflows/build-apk.yml`:

```yaml
flutter-version: '3.24.0'  # Đổi thành version bạn muốn
```

### Build APK cho nhiều kiến trúc

Thay đổi dòng build trong workflow:

```yaml
run: flutter build apk --split-per-abi
```

## 🐛 Xử lý lỗi thường gặp

### Lỗi "Gradle build failed"
- Kiểm tra file `android/build.gradle`
- Đảm bảo Android SDK version đúng

### Lỗi "Flutter dependencies"
- Kiểm tra file `pubspec.yaml`
- Đảm bảo tất cả dependencies tương thích

### Workflow không chạy
- Kiểm tra file `.github/workflows/build-apk.yml` đã được push
- Vào Settings > Actions > đảm bảo Actions được enable

## 📝 Lưu ý quan trọng

⚠️ **APK này dùng debug signing key** - chỉ để test
⚠️ **Để release lên Google Play Store**, cần cấu hình release signing

## 📚 Thông tin dự án

- **Tên:** Animated App with Rive and Flutter
- **Mô tả:** Ứng dụng Flutter với animation đẹp mắt sử dụng Rive
- **Tính năng:**
  - Background animation với shapes và blur
  - Button animation đẹp mắt
  - Loading animation
  - Success/Error animations với confetti
  - Bottom navigation với animated icons

## 🎥 Video hướng dẫn gốc

[Watch on YouTube](https://youtu.be/Td3xEWwRAQA)

---

**Chúc bạn build thành công! 🚀**

Nếu cần hỗ trợ, check logs trong tab Actions trên GitHub.
