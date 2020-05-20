Window.onload = function () {
    var member = 17;
    var item;
    var realName = ["陳奕廷", "思捷", "李光耀", "", "", "張文煥", "怡璇", "黃佩儀", "", "子暄", "", "莊雅淇", "黃郁佳", "", "", "", ""];
    var nickName = ["Jeffrey", "思思", "Andy", "F(Felicia)", "Justin", "Terry", "Eriko", "Alice", "Jack", "Emily", "Monica", "淇淇", "黃郁佳", "Syuan", "湘シャン", "Vivian Kuo", "毛毛(Angel)"];
    var city = ["新北", "日本", "新北", "新北", "新北", "台北", "新北", "新北", "", "", "新北", "新北", "台北", "新北", "新北", "台北", "桃園"];
    var area = ["", "", "三重", "薪莊", "林口", "", "三重", "板橋", "", "", "新店", "三重", "松山", "新莊", "新店", "內湖", ""];
    var position = ["會計", "", "軟體工程師", "視覺設計", "PM", "美編", "", "行銷企劃", "餐飲、網拍", "行銷", "行銷企劃", "JD", "美編", "", "", "", "網頁視覺設計/動畫"];
    var theme = ["外景介紹", "日本相關", "正向、寓教於樂類型皆可", "有主題性的", "在線看房、房屋評估", "遊戲、籃球", "美食、益智、生活類", "美食旅遊", "遊玩、搞笑", "職涯、專案行銷", "吃喝玩樂、開箱、街訪(主題採訪)", "", "主題聊天、吃喝玩樂", "", "", "", ""];

    for (var i = 0; i < member; ++i) {
        item += "<tr>";
        item += "<td>" + i + "</td>";
        item += "<td>" + "圖片" + "</td>";
        item += "<td>" + realName[i] + "</td>";
        item += "<td>" + nickName[i] + "</td>";
        item += "<td>" + city[i] + "</td>";
        item += "<td>" + area[i] + "</td>";
        item += "<td>" + position[i] + "</td>";
        item += "<td>" + theme[i] + "</td>";
        item += "</tr>";
    }
    document.querySelector('tbody').innerHTML = item;
    console.log("yes");
}
