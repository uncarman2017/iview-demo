/**
 *  雇员付款通用方法
 * @type {{payName: getPayName}}
 */
module.exports = {
  payName: getPayName,
  getStatus: getStatus
}

function getPayName (id) {
  if (id === 1) {
    return '补充公积金'
  }
  if (id === 2) {
    return '采暖费'
  }
  if (id === 3) {
    return '长年服务金'
  }
  if (id === 4) {
    return '独生子女费'
  }
  if (id === 5) {
    return '服装费'
  }
  if (id === 6) {
    return '福利补贴'
  }
  if (id === 7) {
    return '工伤保险'
  }
  if (id === 8) {
    return '公积金'
  }
  if (id === 9) {
    return '鼓励金'
  }
  if (id === 10) {
    return '活动费'
  }
  if (id === 11) {
    return '基本公积金'
  }
  if (id === 12) {
    return '交通补贴费'
  }
  if (id === 13) {
    return '取暖费'
  }
  if (id === 14) {
    return '生育保险'
  }
  if (id === 15) {
    return '失业保险'
  }
  if (id === 16) {
    return '体检费'
  }
  if (id === 18) {
    return '养老保险'
  }
  if (id === 20) {
    return '医疗保险'
  }
  if (id === 21) {
    return '医疗补贴费'
  }
  if (id === 23) {
    return '子女托费'
  }
  if (id === 24) {
    return '档案管理费'
  }
  if (id === 25) {
    return '退职金'
  }
  if (id === 26) {
    return '14月工资'
  }
  if (id === 27) {
    return '生育津贴'
  }
  if (id === 28) {
    return '费用报销'
  }
  if (id === 29) {
    return '社保'
  }
  if (id === 30) {
    return '其他'
  }
  if (id === 31) {
    return '退个人工资'
  }
  if (id === 32) {
    return '退公司'
  }
  return ''
}

function getStatus (status) {
  if (status === 1) {
    return '未审核'
  }
  if (status === 2) {
    return '已批退'
  }
  if (status === 3) {
    return '已审核未同步'
  }
  if (status === 4) {
    return '已同步'
  }
  if (status === 5) {
    return '已支付'
  }
  if (status === 6) {
    return '财务退回'
  }
  if (status === 7) {
    return '银行退票'
  }
  if (status === 8) {
    return '已完成'
  }
  return ''
}
