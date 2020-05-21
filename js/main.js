let item="";
let realName = ["陳奕廷", "思捷", "李光耀", "", "", "張文煥", "怡璇", "黃佩儀", "蘇竑愷", "子暄", "", "莊雅淇", "黃郁佳", "", "", "", ""];
let nickName = ["Jeffrey", "思思", "Andy", "F(Felicia)", "Justin", "Terry", "Eriko", "Alice", "Jack/阿愷", "Emily", "Monica", "淇淇", "黃郁佳", "Syuan", "湘シャン", "Vivian Kuo", "毛毛(Angel)"];
let city = ["新北", "日本", "新北", "新北", "新北", "台北", "新北", "新北", "", "", "新北", "新北", "台北", "新北", "新北", "台北", "桃園"];
let area = ["", "", "三重", "薪莊", "林口", "", "三重", "板橋", "", "", "新店", "三重", "松山", "新莊", "新店", "內湖", ""];
let position = ["會計", "", "軟體工程師", "視覺設計", "PM", "美編", "", "行銷企劃", "餐飲、網拍", "行銷", "行銷企劃", "大學生", "美編", "", "", "科技業", "網頁視覺設計/動畫"];
let theme = ["外景介紹", "日本相關", "正向、寓教於樂類皆可", "有主題性的", "在線看房、房屋評估、戶外看房", "遊戲、籃球。基本上都可以，自己熟悉籃球跟遊戲，但出去玩的也可以嘗試（主要是這塊真的滿飽和），趣味短劇、街頭訪問也可以。", "美食、益智、生活類。介紹外國與台灣的文化差異或南北差異、旅遊、問答遊戲", "美食旅遊。想拍攝的主題有2種類型：1.關於美食旅遊類型的影片，雖然這類型影片蠻飽和，但我想把美食介紹的比較詳細之類的 2.下班後生活系列，現在很多上班族因為工作壓力大或是每天要加班到很晚等等，導致放假或是下班就窩在家裡，所以我覺得可以朝下班後你可以有的生活系列去做規劃", "遊玩、搞笑。隨大家意願", "職涯、專案行銷。1.拍攝各產業的工作人士相關的FAQ，以較趣味的方式讓觀看者更清楚工作內容，了解他們的一天；2.行銷的最新知識型影片", "吃喝玩樂、開箱、街訪(主題採訪)，美食開箱跟旅遊Vlog。簡單來說偏向想記錄些什麼的那種影片，也許是個餐廳的用餐心得(隱藏版料理丶老闆訪談等)，或是出去旅遊的tips(網路謠言?的實際體驗)之類的。", "生活化的影片～～因為知識型自己可能無法哈哈", "主題聊天、吃喝玩樂", "", "", "美妝/美食/戶外活動這些都是平常的興趣，但覺得多數人都有在做了～後來因為工作的關係，發現工作的交友圈變窄、生活圈變很無趣，覺得如果朝如何讓大家工作與生活中的平衡切入，因為也是一個新待開發的市場！加上大家都是來自不同產業，也可以拍很多認識工作內容的特輯，很多想轉職或是剛求職的人應該也會有很大的興趣", ""];
let motivation = ["", "", "嘗試各種可能性", "", "學習更多方面", "增加作品", "增進自我能力及經驗", "想運用影片做紀錄也能讓別人有興趣觀看", "覺得好玩有趣", "增加自己的作品集以後轉職用", "之前就有這個想法，加上剛好看到有人號召", "對影片本來就有興趣，平常喜歡拍一些簡單的，剛好看到狄卡有人在揪，想說可以試試看", "", "", "", "超愛看各種KOL的影片，以前旅行的時候也會做個小影片～所以覺得能夠在工作之餘有其他興趣培養也是不錯", ""];
let profit = ["", "", "是", "", "是", "是", "是", "是", "否", "是", "是", "是", "", "", "", "是", ""];

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
    item += "<td>" + motivation[i] + "</td>";
    item += "<td>" + profit[i] + "</td>";
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
	str="<div class='close_container'><span class='close' onclick='overlay_close()'></span></div><div class='ele_container'><img src='" + src + "'></div>";

	document.querySelector('.intro').innerHTML=str;
    document.querySelector('.mask').style.display="flex";
    setTimeout(function(){
        document.querySelector('.intro').style.bottom = '0%';
    }, 100);
}
