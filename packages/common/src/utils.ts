import * as dayjs from 'dayjs';

// 提取mongodb的_id的时间信息
/**
 *
 * @param id mongodb的_id
 * @returns {Date} 时间
 * @example
 * getMongoIdTime('5c4b4b4b0000000000000000') // 2019-01-28T08:00:11.000Z
 * getMongoIdTime('5c4b4b4b0000000000000000').getTime() // 1548612011000
 * getMongoIdTime('5c4b4b4b0000000000000000').toISOString() // 2019-01-28T08:00:11.000Z
 * getMongoIdTime('5c4b4b4b0000000000000000').toJSON() // 2019-01-28T08:00:11.000Z
 * getMongoIdTime('5c4b4b4b0000000000000000').toString() // 2019-01-28T08:00:11.000Z
 * getMongoIdTime('5c4b4b4b0000000000000000').toLocaleString() // 2019/1/28 下午4:00:11
 * getMongoIdTime('5c4b4b4b0000000000000000').toLocaleDateString() // 2019/1/28
 * getMongoIdTime('5c4b4b4b0000000000000000').toLocaleTimeString() // 下午4:00:11
 * getMongoIdTime('5c4b4b4b0000000000000000').toDateString() // Wed Jan 28 2019
 * getMongoIdTime('5c4b4b4b0000000000000000').toTimeString() // 08:00:11 GMT+0800 (中国标准时间)
 */
export function getMongoIdTime(id: string) {
  return new Date(parseInt(id.substring(0, 8), 16) * 1000);
}

// 时间格式化函数
/**
 * @param {Date} time 时间
 * @param {string} format 格式化字符串
 * @return {string} 格式化后的时间
 * @example
 * formatTime(new Date(), 'YYYY-MM-DD HH:mm:ss') // 2019-01-01 12:00:00
 * formatTime(new Date(), 'YYYY-MM-DD') // 2019-01-01
 * formatTime(new Date(), 'HH:mm:ss') // 12:00:00
 */
export function formatTime(time: Date, format = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(time).format(format);
}
