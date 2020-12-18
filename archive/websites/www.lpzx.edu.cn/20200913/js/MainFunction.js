//设置登录窗口
function openPwd() {
    $('#w').window({
        title: '修改密码',
        width: 300,
        modal: true,
        shadow: true,
        closed: true,
        height: 230,
        resizable: false
    });
}
//关闭登录窗口
function closePwd() {
    $('#w').window('close');
}

//用户退出
function LoginOut() {

   

    var win = $.messager.progress({
        title: '您已经成功退出系统。',
        msg: '返回中......'
    });
    setTimeout(function () {
        location.href = '/index.htm';
    }, 3000);
}


function test() {
    return 123;
}

//获得传入数据
//使用方法如下：document.getElementById("user").value = getQueryStr("user"); 

var LocString = String(window.document.location.href);
function getQueryStr(str) {
    var rs = new RegExp("(^|)" + str + "=([^&]*)(&|$)", "gi").exec(LocString), tmp;
    if (tmp = rs) {
        return tmp[2];
    }
    // parameter cannot be found 
    return "";
}


//*****************************************************************
//身份号证验证
//*****************************************************************
var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];    // 加权因子 
var ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];            // 身份证验证位值.10代表X   
function IdCardValidate(idCard) {
    idCard = trim(idCard.replace(/ /g, ""));               //去掉字符串头尾空格                         
    if (idCard.length == 15) {
        return isValidityBrithBy15IdCard(idCard);       //进行15位身份证的验证      
    }
    else if (idCard.length == 18) {
        var a_idCard = idCard.split("");                // 得到身份证数组    
        if (isValidityBrithBy18IdCard(idCard) && isTrueValidateCodeBy18IdCard(a_idCard)) {   //进行18位身份证的基本验证和第18位的验证     
            return true;
        }
        else {
            return false;
        }
    }
    else
    { return false; }
}
/**   * 判断身份证号码为18位时最后的验证位是否正确   * @param a_idCard 身份证号码数组   * @return   */
function isTrueValidateCodeBy18IdCard(a_idCard) {
    var sum = 0;                             // 声明加权求和变量     
    if (a_idCard[17].toLowerCase() == 'x') {
        a_idCard[17] = 10;                    // 将最后位为x的验证码替换为10方便后续操作    
    }
    for (var i = 0; i < 17; i++) {
        sum += Wi[i] * a_idCard[i];            // 加权求和      
    }
    valCodePosition = sum % 11;                // 得到验证码所位置    
    if (a_idCard[17] == ValideCode[valCodePosition]) {
        return true;
    }
    else
    { return false; }
}
/**    * 验证18位数身份证号码中的生日是否是有效生日    * @param idCard 18位书身份证字符串    * @return    */
function isValidityBrithBy18IdCard(idCard18) {
    var year = idCard18.substring(6, 10);
    var month = idCard18.substring(10, 12);
    var day = idCard18.substring(12, 14);
    var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));       // 这里用getFullYear()获取年份，避免千年虫问题      
    if (temp_date.getFullYear() != parseFloat(year) || temp_date.getMonth() != parseFloat(month) - 1 || temp_date.getDate() != parseFloat(day)) {
        return false;
    }
    else {
        return true;
    }
}
/**     * 验证15位数身份证号码中的生日是否是有效生日     * @param idCard15 15位书身份证字符串     * @return     */
function isValidityBrithBy15IdCard(idCard15) {
    var year = idCard15.substring(6, 8);
    var month = idCard15.substring(8, 10);
    var day = idCard15.substring(10, 12);
    var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));         // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法     
    if (temp_date.getYear() != parseFloat(year) || temp_date.getMonth() != parseFloat(month) - 1 || temp_date.getDate() != parseFloat(day)) {
        return false;
    }
    else {
        return true;
    }
}
//去掉字符串头尾空格  
function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
/**   * 通过身份证判断是男是女   * @param idCard 15/18位身份证号码    * @return 'female'-女、'male'-男   */
function maleOrFemalByIdCard(idCard) {
    idCard = trim(idCard.replace(/ /g, ""));        // 对身份证号码做处理。包括字符间有空格。 
    if (idCard.length == 15) {
        if (idCard.substring(14, 15) % 2 == 0) {
            return '女';
        }
        else {
            return '男';
        }
    }
    else if (idCard.length == 18) {
        if (idCard.substring(14, 17) % 2 == 0) {
            return '女';
        }
        else {
            return '男';
        }
    }
    else {
        return null;
    }
}
//获取年龄
function getAge(idCard) {

    if (!IdCardValidate(idCard)) {
        return 0;
    }
    var myDate = new Date();
    var month = myDate.getMonth() + 1;
    //  alert(month);
    var day = myDate.getDate();
    // alert(day); 
    var age;
    if (idCard.length == 18) {
        age = myDate.getFullYear() - idCard.substring(6, 10) - 1;
        if (idCard.substring(10, 12) < month || idCard.substring(10, 12) == month && idCard.substring(12, 14) <= day) {
            age++;
        }
        return age;
        //年龄 age 
    }
    else {
        var year = idCard.substring(6, 8);
        var imonth = idCard.substring(8, 10);
        var iday = idCard.substring(10, 12);
        var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
        age = myDate.getFullYear() - temp_date.getFullYear() - 1;
        if (imonth < month || imonth == month && iday <= day) {
            age++;
        }
        return age;
        //  alter(temp_date.toDateString());
    }

}