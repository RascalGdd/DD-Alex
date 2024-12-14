// 初始化地图
const map = L.map('map').setView([20.0, 0.0], 2); // 初始视角：世界地图中心

// 添加基础地图层
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap',
    maxZoom: 10
}).addTo(map);

// 定义去过和没去过的城市数据
const cities = [
    { name: "东京", coords: [35.6895, 139.6917], visited: true, photos: ["path/to/tokyo1.jpg", "path/to/tokyo2.jpg"] },
    { name: "巴黎", coords: [48.8566, 2.3522], visited: true, photos: ["path/to/paris1.jpg", "path/to/paris2.jpg"] },
    { name: "纽约", coords: [40.7128, -74.0060], visited: false, photos: [] },
    { name: "悉尼", coords: [-33.8688, 151.2093], visited: false, photos: [] },
    { name: "北京", coords: [39.9042, 116.4074], visited: true, photos: ["path/to/beijing1.jpg"] },
    { name: "伦敦", coords: [51.5074, -0.1278], visited: false, photos: [] },
    { name: "莫斯科", coords: [55.7558, 37.6173], visited: false, photos: [] },
    { name: "开罗", coords: [30.0444, 31.2357], visited: true, photos: ["path/to/cairo1.jpg"] },
    { name: "新德里", coords: [28.6139, 77.2090], visited: false, photos: [] },
    { name: "布宜诺斯艾利斯", coords: [-34.6037, -58.3816], visited: false, photos: [] },

    // 添加新城市
    { name: "斯图加特", coords: [48.7758, 9.1829], visited: true, photos: ["path/to/stuttgart1.jpg"] },
    { name: "苏黎世", coords: [47.3769, 8.5417], visited: false, photos: [] },
    { name: "南京", coords: [32.0603, 118.7969], visited: true, photos: ["path/to/nanjing1.jpg"] },
    { name: "六合（南京）", coords: [32.3463, 118.8482], visited: true, photos: ["path/to/liuhe1.jpg"] },
    { name: "香港", coords: [22.3193, 114.1694], visited: true, photos: ["path/to/hongkong1.jpg"] },
    { name: "长春", coords: [43.8171, 125.3235], visited: true, photos: ["path/to/changchun1.jpg"] },
    { name: "哈尔滨", coords: [45.8038, 126.5350], visited: false, photos: [] },
    { name: "广州", coords: [23.1291, 113.2644], visited: true, photos: ["path/to/guangzhou1.jpg"] },
    { name: "深圳", coords: [22.5431, 114.0579], visited: true, photos: ["path/to/shenzhen1.jpg"] },
    { name: "长沙", coords: [28.2278, 112.9389], visited: false, photos: [] },
    { name: "高邮", coords: [32.7852, 119.4432], visited: true, photos: ["path/to/gaoyou1.jpg"] },

{ name: "西安", coords: [34.3416, 108.9398], visited: true, photos: ["path/to/xian1.jpg"] },
{ name: "四子王旗（内蒙古）", coords: [41.7731, 111.7013], visited: true, photos: ["path/to/siziwangqi1.jpg"] },
{ name: "法兰克福", coords: [50.1109, 8.6821], visited: true, photos: ["path/to/frankfurt1.jpg"] },
{ name: "慕尼黑", coords: [48.1351, 11.5820], visited: true, photos: ["path/to/munich1.jpg"] },
{ name: "摩洛哥", coords: [31.7917, -7.0926], visited: true, photos: ["path/to/morocco1.jpg"] },
{ name: "特罗姆瑟", coords: [69.6496, 18.9560], visited: true, photos: ["path/to/tromso1.jpg"] },
{ name: "巴登巴登", coords: [48.7606, 8.2398], visited: true, photos: ["path/to/badenbaden1.jpg"] },
{ name: "费城", coords: [39.9526, -75.1652], visited: true, photos: ["path/to/philadelphia1.jpg"] },
{ name: "上海", coords: [31.2304, 121.4737], visited: true, photos: ["path/to/shanghai1.jpg"] },
{ name: "苏州", coords: [31.2989, 120.5853], visited: true, photos: ["path/to/suzhou1.jpg"] }
];

// 添加所有城市到地图
cities.forEach(city => {
    // 设置去过和没去过的样式，减小圆的直径
    const marker = L.circleMarker(city.coords, {
        radius: 5, // 减小半径
        color: city.visited ? 'green' : 'gray', // 绿色表示去过，灰色表示未去过
        fillColor: city.visited ? 'lightgreen' : 'lightgray',
        fillOpacity: 0.8
    }).addTo(map);

    if (city.visited) {
        // 去过的城市添加交互
        marker.bindPopup(`
            <b>${city.name}</b><br>
            ${city.photos.map(photo => `<img src="${photo}" class="popup-img" alt="${city.name}" />`).join('')}
        `);
    } else {
        // 没去过的城市显示提示
        marker.bindPopup(`<b>${city.name}</b><br>未去过`);
    }
});
