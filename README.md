# manny_utils 是一些常用工具集
## mannyDateUtils
  是一些对日期的操作，有Date和String的相互转换，两个日期的比较，日期计算

### formatDateToString(date, patternStr, flag){}
格式化日期，返回三种格式的日期，否则返回原日期
     * @param date Date对象
     * @param str yyyy-mm-dd yyyy/mm/dd yyyy年mm月dd日
     * @param flag 是否含时分秒
     * @returns {*}

### formatStringToDate(dateStr){}
String转换为Date，目前支持两种格式的string：yyyy-mm-dd,yyyy/mm/dd

### getCountDay(currentDay,n){}
获取当前日期的前/后n天的日期，返回Date类型
     * @param currentDay 可以是Date类型和String类型，String类型格式有要求：yyyy-mm-dd或者yyyy/mm/dd
     * @param n 正数为后，负数为前，0不变
     * @returns {Date}

### compareDate(dateStr1,dateStr2){}
比较两个日期，仅比较到日期，不含时分秒。支持string格式 yyyy-mm-dd和date类型参数
     * @param dateStr1
     * @param dateStr2
     * @returns {number} 0:两个日期相等;1:dateStr1>dateStr2; -1:dateStr1<dateStr2
     
### formatNumber(num, length){}
格式化数字: 数字num用length长度返回，默认长度是2。如num=2，length=7，则返回结果是0000002
     * @param num 需要格式化的数字
     * @param length 格式化后数字的长度
     * @returns {*} 字符串