// JavaScript 添加事件处理器（onclick、onchange、onmousedown、onmouseout、onmouseover、onmouseup）

document.addEventListener("DOMContentLoaded", function() {
  // 选择所有员工卡片
  const employeeCards = document.querySelectorAll(".employee-card");

  // 添加点击事件（onclick）
  employeeCards.forEach(function(card) {
    card.onclick = function() {
      const textContent = this.textContent.trim();
      alert(`你点击了： ${textContent}`);
    };
  });

  // 添加鼠标按下事件（onmousedown）
  employeeCards.forEach(function(card) {
    card.onmousedown = function() {
      this.style.backgroundColor = "#d1c4e9"; // 按下时改变背景色
    };
  });

  // 添加鼠标移出事件（onmouseout）
  employeeCards.forEach(function(card) {
    card.onmouseout = function() {
      this.style.backgroundColor = ""; // 鼠标移出时恢复原样
    };
  });

  // 添加鼠标悬停事件（onmouseover）
  employeeCards.forEach(function(card) {
    card.onmouseover = function() {
      this.style.backgroundColor = "#b2ebf2"; // 鼠标悬停时改变背景色
    };
  });

  // 添加鼠标松开事件（onmouseup）
  employeeCards.forEach(function(card) {
    card.onmouseup = function() {
      this.style.backgroundColor = "#ffe0b2"; // 松开鼠标时改变背景色
    };
  });
});