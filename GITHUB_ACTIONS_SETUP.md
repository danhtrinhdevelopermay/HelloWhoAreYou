# Hướng dẫn Build APK với GitHub Actions

## Tổng quan
File workflow `.github/workflows/build-apk.yml` đã được cấu hình để tự động build APK cho dự án Flutter này khi bạn push code lên GitHub.

## Cách sử dụng

### 1. Đẩy code lên GitHub Repository

```bash
# Khởi tạo git repository (nếu chưa có)
git init

# Thêm remote repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Thêm tất cả files
git add .

# Commit
git commit -m "Add Flutter project with GitHub Actions"

# Push lên GitHub
git push -u origin main
```

### 2. GitHub Actions sẽ tự động chạy

Workflow sẽ tự động chạy khi:
- ✅ Push code lên nhánh `main` hoặc `master`
- ✅ Tạo Pull Request vào nhánh `main` hoặc `master`
- ✅ Chạy thủ công từ tab "Actions" trên GitHub

### 3. Tải APK đã build

Sau khi workflow chạy thành công:

1. Vào repository trên GitHub
2. Click vào tab **Actions**
3. Chọn workflow run vừa hoàn thành
4. Scroll xuống phần **Artifacts**
5. Tải file `app-release.apk`

### 4. Release tự động (Optional)

Nếu bạn push vào nhánh `main`, workflow sẽ tự động:
- Tạo một Release mới với tag `v[số thứ tự]`
- Đính kèm file APK vào Release

Bạn có thể tải APK từ trang **Releases** của repository.

## Cấu trúc Workflow

### Các bước thực hiện:

1. **Checkout code**: Lấy source code từ repository
2. **Setup Java 17**: Cài đặt Java (cần thiết cho Android build)
3. **Setup Flutter 3.24.0**: Cài đặt Flutter SDK
4. **Get dependencies**: Chạy `flutter pub get`
5. **Analyze code**: Kiểm tra code quality (không bắt buộc)
6. **Run tests**: Chạy unit tests (không bắt buộc)
7. **Build APK**: Build file APK release
8. **Upload artifact**: Lưu APK để download
9. **Create Release**: Tạo GitHub Release với APK (chỉ khi push vào main)

## Tùy chỉnh

### Thay đổi phiên bản Flutter

Sửa trong file `.github/workflows/build-apk.yml`:

```yaml
- name: Setup Flutter
  uses: subosito/flutter-action@v2
  with:
    flutter-version: '3.24.0'  # Đổi thành phiên bản bạn muốn
    channel: 'stable'
```

### Build APK Split (nhiều file APK theo architecture)

Thay đổi dòng build:

```yaml
- name: Build APK
  run: flutter build apk --split-per-abi
```

Điều này sẽ tạo ra:
- `app-armeabi-v7a-release.apk` (cho thiết bị 32-bit)
- `app-arm64-v8a-release.apk` (cho thiết bị 64-bit)
- `app-x86_64-release.apk` (cho emulator)

### Tắt tính năng tự động Release

Xóa hoặc comment phần:

```yaml
- name: Create Release (Optional)
  if: github.event_name == 'push' && github.ref == 'refs/heads/main'
  uses: softprops/action-gh-release@v1
  ...
```

## Lưu ý quan trọng

⚠️ **Code signing**: APK được build bằng debug key. Để release lên Google Play Store, bạn cần:
1. Tạo keystore file
2. Thêm secrets vào GitHub repository
3. Cấu hình signing trong workflow

⚠️ **Flutter version**: Đảm bảo phiên bản Flutter trong workflow khớp với phiên bản trong `pubspec.yaml`

⚠️ **Dependencies**: Nếu dự án có native dependencies đặc biệt, có thể cần thêm setup steps

## Troubleshooting

### Lỗi "Gradle build failed"
- Kiểm tra file `android/build.gradle` và `android/app/build.gradle`
- Đảm bảo Gradle version tương thích với Flutter version

### Lỗi "Flutter SDK not found"
- Kiểm tra `flutter-version` trong workflow
- Thử dùng `channel: 'stable'` thay vì version cụ thể

### Workflow không chạy
- Đảm bảo file `.github/workflows/build-apk.yml` đã được push lên GitHub
- Kiểm tra tab "Actions" có được enable cho repository

## Liên hệ hỗ trợ

Nếu gặp vấn đề, kiểm tra:
- Logs trong tab Actions trên GitHub
- Flutter documentation: https://docs.flutter.dev
- GitHub Actions documentation: https://docs.github.com/actions
