let item="";
let realName = ["陳奕廷", "思捷", "李光耀", "", "", "張文煥", "怡璇", "黃佩儀", "", "子暄", "", "莊雅淇", "黃郁佳", "", "", "", ""];
let nickName = ["Jeffrey", "思思", "Andy", "F(Felicia)", "Justin", "Terry", "Eriko", "Alice", "Jack", "Emily", "Monica", "淇淇", "黃郁佳", "Syuan", "湘シャン", "Vivian Kuo", "毛毛(Angel)"];
let city = ["新北", "日本", "新北", "新北", "新北", "台北", "新北", "新北", "", "", "新北", "新北", "台北", "新北", "新北", "台北", "桃園"];
let area = ["", "", "三重", "薪莊", "林口", "", "三重", "板橋", "", "", "新店", "三重", "松山", "新莊", "新店", "內湖", ""];
let position = ["會計", "", "軟體工程師", "視覺設計", "PM", "美編", "", "行銷企劃", "餐飲、網拍", "行銷", "行銷企劃", "大學生", "美編", "", "", "", "網頁視覺設計/動畫"];
let theme = ["外景介紹", "日本相關", "正向、寓教於樂類型皆可", "有主題性的", "在線看房、房屋評估", "遊戲、籃球", "美食、益智、生活類", "美食旅遊", "遊玩、搞笑", "職涯、專案行銷", "吃喝玩樂、開箱、街訪(主題採訪)", "", "主題聊天、吃喝玩樂", "", "", "", ""];

for (let i = 0; i < realName.length; ++i) {
    num = i + 1;
    item += "<tr>";
    item += "<td>" +num + "</td>";
    item += "<td>" + "<img class='avatar' src='./img/avatar/" + num + ".jpg' onclick='dialogBoxMsg(this.src)'>" + "</td>";
    item += "<td>" + realName[i] + "</td>";
    item += "<td>" + nickName[i] + "</td>";
    item += "<td>" + city[i] + "</td>";
    item += "<td>" + area[i] + "</td>";
    item += "<td>" + position[i] + "</td>";
    item += "<td>" + theme[i] + "</td>";
    item += "</tr>";
}

document.querySelector('tbody').innerHTML = item;


function overlay_close() {
    document.querySelector('.intro').style.bottom = '100%';
    setTimeout(function(){
        document.querySelector('.mask').style.display="none";
    }, 500);
    
}

function dialogBoxMsg(src) {
	str="<div class='close_container'><span class='close' onclick='overlay_close()'></span></div><div class='ele_container'><img src='" + src + "'></div></div>";

	document.querySelector('.intro').innerHTML=str;
    document.querySelector('.mask').style.display="flex";
    setTimeout(function(){
        document.querySelector('.intro').style.bottom = '0%';
    }, 100);
}
