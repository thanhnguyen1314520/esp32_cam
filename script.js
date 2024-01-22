document.addEventListener('DOMContentLoaded', function () {
    // Thay đổi địa chỉ IP và cổng tương ứng của ESP32-CAM
    var videoUrl = 'ws://192.168.43.219:81';
    
    var canvas = document.getElementById('videoCanvas');
    var player = new JSMpeg.Player(videoUrl, { canvas: canvas });

    // Bạn có thể thêm các chức năng điều khiển khác tại đây
});
