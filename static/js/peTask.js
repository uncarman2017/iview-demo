/**
 *  体检任务单
 * @type {{getTaskStatus: getTaskStatus}}
 */
module.exports = {
  getTaskStatus: getTaskStatus
}
function getTaskStatus (status) {
  if (status === 1) {
    return '待发放'
  }
  if (status === 2) {
    return '已同步至中盈'
  }
  if (status === 3) {
    return '未预约'
  }
  if (status === 4) {
    return '已预约'
  }
  if (status === 5) {
    return '预约失败'
  }
  if (status === 6) {
    return '已到检'
  }
  if (status === 7) {
    return '已出报告'
  }
  if (status === 8) {
    return '已过期'
  }
  if (status === 9) {
    return '已退订'
  }
  if (status === 10) {
    return '过期作废'
  }
  if (status === 11) {
    return '终止'
  }
  return ''
}
