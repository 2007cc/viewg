/**
 * 获取本周、本季度、本月、上月的开始日期、结束日期
 */
var now = new Date();                    //当前日期
var nowDayOfWeek = now.getDay();         //今天本周的第几天
var nowDay = now.getDate();              //当前日
var nowMonth = now.getMonth();           //当前月
var nowYear = now.getYear();             //当前年
nowYear += (nowYear < 2000) ? 1900 : 0;  //

var lastMonthDate = new Date();  //上月日期
lastMonthDate.setDate(1);
lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
var lastYear = lastMonthDate.getYear();
var lastMonth = lastMonthDate.getMonth();

export const DateUtils = {

    /**
     * 格式化日期
     * ：yyyy-MM-dd
     */
    formatDate(date) {
        return this.format(date,'yyy-MM-dd');
    },
    /**
     * 格式化日期时间
     * yyyy-MM-dd hh:mm:ss
     * @param date
     * @returns {*}
     */
    formatDateTime(date) {
        return this.format(date,'yyyy-MM-dd hh:mm:ss');
    },

    /**
     * 格式化
     * @param date
     * @param fmt  格式
     * @returns {*}
     */
    format(date,fmt) {
        var o = {
            "M+": date.getMonth() + 1,                 //月份
            "d+": date.getDate(),                    //日
            "h+": date.getHours(),                   //小时
            "m+": date.getMinutes(),                 //分
            "s+": date.getSeconds(),                 //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds()             //毫秒
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    },

    //获得某月的天数
    getMonthDays(myMonth) {
        var monthStartDate = new Date(nowYear, myMonth, 1);
        var monthEndDate = new Date(nowYear, myMonth + 1, 1);
        var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
        return days;
    },

    //获得本季度的开始月份
    getQuarterStartMonth() {
        var quarterStartMonth = 0;
        if (nowMonth < 3) {
            quarterStartMonth = 0;
        }
        if (2 < nowMonth && nowMonth < 6) {
            quarterStartMonth = 3;
        }
        if (5 < nowMonth && nowMonth < 9) {
            quarterStartMonth = 6;
        }
        if (nowMonth > 8) {
            quarterStartMonth = 9;
        }
        return quarterStartMonth;
    },
    /**
     * 某天开始时间
     * @param $date
     * @returns {number}
     */
    beginOfDay($date) {
        return new Date(new Date($date.toLocaleDateString()).getTime())
    },

    /**
     * 某天结束时间
     * @param $date
     * @returns {number}
     */
    endOfDay($date) {
        return new Date(new Date($date.toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1)
    },
    //获得本周的开始日期
    getWeekStartDate() {
        var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
        return formatDate(weekStartDate);
    },

    //获得本周的结束日期
    getWeekEndDate() {
        var weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek));
        return formatDate(weekEndDate);
    },

    //获得本月的开始日期
    getMonthStartDate() {
        var monthStartDate = new Date(nowYear, nowMonth, 1);
        return formatDate(monthStartDate);
    },

    //获得本月的结束日期
    getMonthEndDate() {
        var monthEndDate = new Date(nowYear, nowMonth, getMonthDays(nowMonth));
        return formatDate(monthEndDate);
    },

    //获得上月开始时间
    getLastMonthStartDate() {
        var lastMonthStartDate = new Date(nowYear, lastMonth, 1);
        return formatDate(lastMonthStartDate);
    },

    //获得上月结束时间
    getLastMonthEndDate() {
        var lastMonthEndDate = new Date(nowYear, lastMonth, getMonthDays(lastMonth));
        return formatDate(lastMonthEndDate);
    },

    //获得本季度的开始日期
    getQuarterStartDate() {

        var quarterStartDate = new Date(nowYear, getQuarterStartMonth(), 1);
        return formatDate(quarterStartDate);
    },

    //或的本季度的结束日期
    getQuarterEndDate() {
        var quarterEndMonth = getQuarterStartMonth() + 2;
        var quarterStartDate = new Date(nowYear, quarterEndMonth, getMonthDays(quarterEndMonth));
        return formatDate(quarterStartDate);
    },
}
