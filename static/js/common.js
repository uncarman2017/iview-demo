/**
 * Created by huangye on 2017/12/13.
 */

const mths = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
const weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const weks = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
const cnum = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十', '二十一', '二十二', '二十三', '二十四', '二十五', '二十六', '二十七', '二十八', '二十九', '三十', '三十一']

/**
 * @Description:
 * 对Date的扩展，将 Date 转化为指定格式的String * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)
 * 可以用 1-2 个占位符 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * eg:
 * (newDate()).pattern("yyyy-MM-dd hh:mm:ss.S")==> 2006-07-02 08:09:04.423
 * (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04
 * (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04
 * (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
 * (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
 *
 * @Author: ningkuilong/宁奎龙
 * @Date: 2017/11/29 18:13
 * @Param:  * @param null
 * @Return:
 */
Date.prototype.pattern = function (fmt) {
  var o = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'h+': this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, // 小时
    'H+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S': this.getMilliseconds() // 毫秒
  }
  var week = {
    '0': '/u65e5',
    '1': '/u4e00',
    '2': '/u4e8c',
    '3': '/u4e09',
    '4': '/u56db',
    '5': '/u4e94',
    '6': '/u516d'
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '/u661f/u671f' : '/u5468') : '') + week[this.getDay() + ''])
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

/*
 * 日期格式示例
 * "年月日"         --- 二〇一七年十二月十三日
 * "yyyy年MM月dd日" --- 2017年12月13日
 * "MMM dd,yyyy"    --- DEC 13,2017
 */
// 格式化日期
Date.prototype.format = function (format) {
  var d = this
  var yyyy = d.getFullYear().toString()
  var MM = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1).toString()
  var MMM = mths[parseInt(MM.substr(0, 1)) === 0 ? parseInt(MM.substr(1, 1)) : parseInt(MM)]
  var dd = d.getDate() < 10 ? '0' + d.getDate() : d.getDate().toString()
  var hh = d.getHours() < 10 ? '0' + d.getHours() : d.getHours().toString()
  var mm = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes().toString()
  var ss = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds().toString()
  var dateString = ''
  if (format === '年月日') {
    return cnum[parseInt(yyyy.substr(0, 1))] + cnum[parseInt(yyyy.substr(1, 1))] + cnum[parseInt(yyyy.substr(2, 1))] + cnum[parseInt(yyyy.substr(3, 1))] + '年' + (parseInt(MM.substr(0, 1)) === 0 ? cnum[parseInt(MM.substr(1, 1))] : cnum[parseInt(MM)]) + '月' + (parseInt(dd.substr(0, 1)) === 0 ? cnum[parseInt(dd.substr(1, 1))] : cnum[parseInt(dd)]) + '日'
  }
  return format.replace(/yyyy/g, yyyy).replace(/MM/g, MM).replace(/MMM/g, MMM).replace(/dd/g, dd).replace(/hh/g, hh).replace(/mm/g, mm).replace(/ss/g, ss)
}

// 时间比较
Date.prototype.comptime = function (a, b) {
  var dateA = new Date('1900/1/1 ' + a)
  var dateB = new Date('1900/1/1 ' + b)
  if (isNaN(dateA) || isNaN(dateB)) { return null }
  if (dateA > dateB) { return 1 }
  if (dateA < dateB) { return -1 }
  return 0
}
