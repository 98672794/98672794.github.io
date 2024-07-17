




// 選擇用
let 地區選擇 = ['中西區','東區','南區','灣仔區','九龍城區','觀塘區','深水埗區','黃大仙區','油尖旺區','離島區',//0-9
  '葵青區','北區','西貢區','沙田區','大埔區','荃灣區','屯門區','元朗區','全香港','澳門',//10-19
  '深圳','珠海','日本','美國'],

    行業選擇 = ['資訊科技','金融服務','保險業','醫療保健','製藥業','教育','法律服務','廣告與市場推廣','公共關係','出版業','零售業',//0-9
      '餐飲業','酒店與旅遊業','物流與運輸','建築與建造','房地產','環保服務','工程','製造業','電訊業','媒體與娛樂',//10-19
      '文化藝術','設計','美容護理','時裝設計','體育與健身','社會服務','非牟利組織','宗教服務','農業','漁業',//20-29
      '畜牧業','林業','能源','礦業','化工業','塑膠工業','玻璃工業','陶瓷工業','金屬工業','電子工業',//30-39
      '汽車工業','航空航天','造船業','紡織業','食品加工','飲料製造','煙草業','印刷業','包裝業','家具製造',//40-49
      '玩具製造','運動用品','珠寶首飾','鐘錶業','皮革製品','紙製品','辦公設備','家用電器','醫療設備','光學儀器',//50-59
      '機械製造','工具製造','通訊設備','自動化設備','船舶設備','紡織機械','縫紉設備','印刷設備','環保設備','塑膠設備',//60-69
      '金屬加工','模具製造','塑膠製品','橡膠製品','化纖工業','塗料工業','藥品製造','醫藥研發','生物技術','寵物服務',//70-79
      '教育培訓','翻譯服務','物業管理','金融科技','電子商務','物聯網','區塊鏈技術','人工智能','虛擬現實','遊戲開發',//80-89
      '數碼營銷','大數據','雲計算','智慧城市','智能家居','綠色建築','新能源','再生資源','垃圾處理','水處理',//90-99
      '空氣淨化','資源回收','節能技術'],

    商戶選擇 = ['公司1','公司2','公司3'],

    關鍵字   = ['美食','日本','婚姻','旅遊','美容','體育','健身','服務'//0-7
    ]










// 模擬從資料庫讀取廣告資料
const allAds = [

  //{ id: 'ad0', imageSrc: 'https://via.placeholder.com/300', region: 'tuen-mun', industry: 'restaurants', merchant: 'company1', keywords: ['food', 'italian'] },


  { id: 'ad1', imageSrc: 'https://en.pimg.jp/109/762/098/1/109762098.jpg', region: 地區選擇[16], industry: 行業選擇[5], merchant: 商戶選擇[0], keywords: [關鍵字[0], 關鍵字[1]] },
  { id: 'ad2', imageSrc: 'https://p8.itc.cn/q_70/images03/20230904/6b9e1ed6da8a434983fdd664d27e0d0a.jpeg', region: 地區選擇[17], industry: 行業選擇[7], merchant: 商戶選擇[1], keywords: [關鍵字[2], 關鍵字[3]] },
  { id: 'ad3', imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9kvfXJkEvrw3jYzdzNhXmo0mJsVcplUiQumdTsJkdvlyYzfPOwh1QPxQ87pcJW3eKgwc&usqp=CAU', region: 地區選擇[15], industry: 行業選擇[23], merchant: 商戶選擇[2], keywords: [關鍵字[4], 關鍵字[5]] },
  { id: 'ad4', imageSrc: 'https://en.pimg.jp/109/614/514/1/109614514.jpg', region: 地區選擇[3], industry: 行業選擇[34], merchant: 商戶選擇[0], keywords: [關鍵字[6], 關鍵字[7]] },
  { id: 'ad5', imageSrc: 'https://en.pimg.jp/109/069/336/1/109069336.jpg', region: 地區選擇[18], industry: 行業選擇[56], merchant: 商戶選擇[1], keywords: [關鍵字[0], 關鍵字[1]] },
  { id: 'ad6', imageSrc: 'https://en.pimg.jp/107/675/655/1/107675655.jpg', region: 地區選擇[6], industry: 行業選擇[59], merchant: 商戶選擇[2], keywords: [關鍵字[2], 關鍵字[3]] },
  { id: 'ad7', imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ28FpBypPMe0JeOKHpUYLTsLYBP_jwf0-LBFsicfE5g--uLOXWE0c0kjsUP4K_PFc6H9w&usqp=CAU', region: 地區選擇[19], industry: 行業選擇[75], merchant: 商戶選擇[0], keywords: [關鍵字[4], 關鍵字[5]] },
  { id: 'ad8', imageSrc: 'https://en.pimg.jp/109/762/103/1/109762103.jpg', region: 地區選擇[20], industry: 行業選擇[85], merchant: 商戶選擇[1], keywords: [關鍵字[6], 關鍵字[7]] },
  { id: 'ad9', imageSrc: 'https://en.pimg.jp/109/762/105/1/109762105.jpg', region: 地區選擇[21], industry: 行業選擇[95], merchant: 商戶選擇[2], keywords: [關鍵字[0], 關鍵字[1]] },
  { id: 'ad10', imageSrc: 'https://en.pimg.jp/109/762/100/1/109762100.jpg', region: 地區選擇[23], industry: 行業選擇[102], merchant: 商戶選擇[0], keywords: [關鍵字[2], 關鍵字[3]] },
];