// 你出生的那天是同一年的第几天
// 如果输入不合法就重复输入直到合法位置，当输入合法的时候调到下一个函数
function validate() {
    let year = parseInt(prompt('请输入你的出生年份'));
    let month = parseInt(prompt('请输入你的出生月份'));
    let day = parseInt(prompt('请输入你的出生日期'));
    let Cyear = new Date().getFullYear();
    if (year < Cyear && month < 12 && month > 0 && day < 31 && day > 0) {
        return calculator(year,month,day);
    } else {
        alert('输入错误');
        return validate();
    }

    function calculator(year, month, day) {
        let count = 0;
        let Pmonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //循环把你这个月份的前几个月累加出来
        for (let i = month - 2; i >= 0; i--) {
            count += Pmonth[i]; //最后输出统计天数count
            if ((year % 100 !== 0 && year % 4 === 0) || (year % 100 === 0 && year % 400 === 0)) {
                if (month > 2) {  // 如果是闰年,并且月份大于2
                    count += 1;
                }
            }

        }
        let result = count + day;
        document.write("是该年的第" + result + "天");
    }
}
validate();



{
    // 敏感字 草
// let defaultStr = prompt('输入搜索内容')
    let defaultStr = '我草草的吃了饭，便和朋友小草，去地里除草了';


//循环遍历所有出现的下标
    function sensitive() {
        for (let i = 0; i < defaultStr.length; i++) {
            if (defaultStr[i] === '草') {
                console.log('敏感字在' + i + '位置出现')
            }
        }
        return -1
    }
    sensitive(defaultStr);

    let first = defaultStr.indexOf('草');
    console.log("敏感字'草'首次出现的位置是:" + first);
}


{ //统计JS出现的次数，在哪里
    let str = 'JavaScript 是属于网络的脚本语言！JavaScript 被数百万计的网页用来改进设计、验证表单、检测浏览器、创建cookies，以及更多的应用。JavaScript 是因特网上最流行的脚本语言。JavaScript很容易使用！你一定会喜欢它的！'
    let vali = 'JavaScript';
    let  j=0
    for(let i =0;i<=str.length;i++){
        if(str[i]=='J') {
            let cut = str.slice(0,11);
            document.write(cut+'第'+'j'+'次出现是在第'+i+'的位置');
            // console.log(cut+'第'+j+'次出现是在第'+i+'的位置');
            j++;
        }

    }
    document.write(cut+'这段话共计出现了'+i+'次');
}


{
    let url = 'http://baidu/com/index.html';
    function getFileFormat(url){
        //获取 '.' 在url中出现的位置
        let pos = url.lastIndexOf('.');
        return url.substr(pos);
    }
    let formatName = getFileFormat(url)
    console.log(formatName)
}

// 封装camelCase方法
{
    function camelCase(str) {
        let toStr = str.split('-'),word=toStr[0];  // border , left , color
        // console.log(toStr)
        for (let i=1,len=toStr.length;i<len;i++){ // 遍历只能遍历数组
            word += toStr[i].charAt(0).toUpperCase()+toStr[i].substr(1);
        }
        return word
    }
    let camelFormat = camelCase('border-left-color');
    console.log(camelFormat);
}

// JS中 Date对象
{
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let weeks = ['日', '一', '二', '三', '四', '五', '六'];
    let day = today.getDate();
    let temp = new Date(year+1, month+3, day);
    let output = temp.getFullYear() + '-' + (temp.getMonth() + 1) + '-' + temp.getDate() +
        '-星期' + weeks[temp.getDay()];
    console.log('明年今天是'+output)
}