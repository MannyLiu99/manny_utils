class MannyUtils {
    constructor(){

    }

    /**
     * 格式化数字: 数字num用length长度返回，默认长度是2。如num=2，length=7，则返回结果是0000002
     * @param num 需要格式化的数字
     * @param length 格式化后数字的长度
     * @returns {*} 字符串
     */
    formatNumber(num, length) {
        if(this.isEmpty(length)){
            length = 2 //默认长度为2
        }
        if(Object.is(parseInt(length),NaN)){
            throw new Error('第二个参数必须是数字')
        }else{
            // 数字
            if(length <= 0){
                throw new Error('第二个参数必须是大于0的整数')
            }else {
                if(num.toString().length == length){
                    return num
                }

                let maxNum = Math.pow(10,length);
                if(num < maxNum-1){
                    num = '0'.repeat(length-1) + num;
                }
            }
        }
        return num;
    }
    /**
     * 判断是否为空
     * @param obj
     * @returns {boolean}
     */
    isEmpty(obj){
        if (obj === null || obj === undefined || obj === '') {
            return true;
        }
        return false;
    }
}