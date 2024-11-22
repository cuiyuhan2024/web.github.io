const screenData = {
  screenWidth: 0,
  screenHeight: 0,
  colorDepth: 0,
  availWidth: 0,
  availHeight: 0,
  windowWidth: 0,
  windowHeight: 0,
  updateScreenInfo: function() {
    this.screenWidth = screen.width;  // 获取屏幕的实际宽度
    this.screenHeight = screen.height;  // 获取屏幕的实际高度
    this.colorDepth = screen.colorDepth;  // 获取屏幕色盘深度
    this.availWidth = screen.availWidth;  // 获取显示区域的宽度
    this.availHeight = screen.availHeight;  // 获取显示区域的高度
    this.windowWidth = window.innerWidth;  // 获取当前浏览器窗口的宽度
    this.windowHeight = window.innerHeight;  // 获取当前浏览器窗口的高度
  },
  formatScreenInfo: function() {
    // 格式化屏幕信息为一个字符串，增加窗口大小信息
    return `屏幕实际宽度: ${this.screenWidth}px, 屏幕实际高度: ${this.screenHeight}px, ` +
           `显示区域宽度: ${this.availWidth}px, 显示区域高度: ${this.availHeight}px, ` +
           `浏览器窗口宽度: ${this.windowWidth}px, 浏览器窗口高度: ${this.windowHeight}px`;
  }
};

// 更新屏幕信息并显示
function updateScreenInfo() {
  screenData.updateScreenInfo(); // 更新屏幕信息
  document.getElementById('screen-info').textContent = screenData.formatScreenInfo(); // 更新屏幕信息显示
}

// 初次加载时更新一次屏幕信息
updateScreenInfo();

// 监听窗口大小改变事件，实时更新屏幕信息
//window.addEventListener('resize', updateScreenInfo);

// 每秒更新屏幕信息，确保即使没有触发 resize 事件也能定期更新
setInterval(updateScreenInfo, 1000);
