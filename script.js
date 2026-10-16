// 挑战进度自动计算：这个页面每天打开，"已坚持天数"都会自己 +1
// 好处：数据写在代码里，页面自己算，永远不用手动更新天数

const START_DATE = new Date(2026, 9, 13); // 挑战开始日：2026-10-13（月份从 0 数，9 = 十月）
const GOAL = 100;                         // 目标项目数
const DONE = 4;                           // 已完成项目数（每做完一个就 +1）

// 计算从开始日到今天过了几天（+1 是因为第一天算 1 天而不是 0 天）
const days = Math.floor((Date.now() - START_DATE.getTime()) / 86400000) + 1;

// 把结果填进 index.html 里对应 id 的元素
document.getElementById("days").textContent = days;
document.getElementById("remaining").textContent = GOAL - DONE;
