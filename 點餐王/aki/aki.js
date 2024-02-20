






/*
* aki
* 202401162348
*/



/**
 * 用法:
 * 
 * 開 google ecl 
 * 入客料
 * 檔案 > 分享 > 及到網
 * 共用
 * 
 * 進入Google Cloud Platform的頁面
 * https://console.cloud.google.com/?hl=zh-TW 按下新增項目
 * 
 * 進到API 庫：https://console.cloud.google.com/apis/library?hl=zh-TW
 * 搜尋欄中搜尋“sheet"
 * 
 * 按下 啟用
 * 
 * 直接點擊「建立憑證」
 * 或是開啟網址：https://console.cloud.google.com/apis/credentials/wizard?hl=zh-TW
 * 
 * 選擇「API 金鑰」
 * 
 *  example
 *  https://sheets.googleapis.com/v4/spreadsheets/{表單id}/values/{sheet名稱}?alt=json&key={API金鑰}
 * 
 */










/* ******************************************************************************************************
*********************************************************************************************************
取Google Sheets 資料 

      ::::::::       ::::::::::   :::::::::::       :::::::::           :::    :::::::::::           :::
    :+:    :+:      :+:              :+:           :+:    :+:        :+: :+:      :+:             :+: :+:
   +:+             +:+              +:+           +:+    +:+       +:+   +:+     +:+            +:+   +:+
  :#:             +#++:++#         +#+           +#+    +:+      +#++:++#++:    +#+           +#++:++#++:
 +#+   +#+#      +#+              +#+           +#+    +#+      +#+     +#+    +#+           +#+     +#+
#+#    #+#      #+#              #+#           #+#    #+#      #+#     #+#    #+#           #+#     #+#
########       ##########       ###           #########       ###     ###    ###           ###     ###

*********************************************************************************************************
*********************************************************************************************************/


/*
  V4 版取得Google Sheets 資料的方法
  https://www.letswrite.tw/google-excel-db/#v4-%e7%89%88%e5%8f%96%e5%be%97-google-sheets-%e8%b3%87%e6%96%99%e7%9a%84%e6%96%b9%e6%b3%95

  使用「發佈到網路」的網址(id)會顯示拒絕跨網域請求的錯誤,使用「共用」的網址(id)就成功了
  https://www.letswrite.tw/google-excel-db/#comment-82
*/

/*
aki data = _0x5569ds('{表單id}')  
客id = 查客data(get客data+1)
get客data(_0x1731ba(客id))
*/






function 查客data(){

  // 取現網址get 相關data
  客Ulr = (location.href).split('?')[1] // http://127.0.0.1:5502/?153?低?客台號?#主食 = 153

  if (!客Ulr) 客Ulr = 'aki' // 直連沒?
  客Ulr = escape(_0x5569ds(calculateHash(客Ulr).toString(CryptoJS.enc.Hex)))

  fetch(GEcss222l).then(r2es => r2es.json()).then(r2es => { // 取表 
    for(var 數=0;數 < r2es.values.length ; 數++){           // 循環表找客Key
      if (客Ulr === r2es.values[數][0]) {                   // 客Key在表
          客data2 = r2es.values[數][1]                      // 客Key+1=客api
          客Lv    = r2es.values[數][2]                      // 客Lv1=有購物車
          客表    = (location.href).split('?')[2]           // 台號海低
          客台號  = (location.href).split('?')[3]           // 客台號
          數      = r2es.values.length                      // 終止循環
      }
    }


        
    // 客的data
    if (MOK) {
      //console.log('點餐王的Google Sheets',GEcss222l)
      console.log('********* 查客data() ******** ')
      console.log('user的Key',客Ulr) 
      console.log('user的dataUlr ZipCode',客data2)
      console.log('************* / ************* ')
    }

  get客data(客data2)
  })

}












let 總Data
function get客data(客data){

  let GEcl = 查客[0]+_0x1731ba(客data)+查客[1]+'d'+查客[2]+_0x1731ba(api)
  if (MOK) {
    console.log('***** get客data(客data) ***** ')
    console.log('user的dataUlr',GEcl)
    console.log('************* / ************* ')
  }

  fetch(GEcl).then(res => res.json()).then(res => {
    // 用G資料
    總Data = res

    // page title icon
    $('title').html(總Data.values[docsGoogle開始數][0])  //總Data.values[直][橫]
    $('link[rel="shortcut icon"]').attr('href',總Data.values[docsGoogle開始數][4])

    if(!客表) 客表 = 總Data.values[1][14]   

    // save now url
    新入網Ulr做主頁 = (location.href).split('#')[0]
    // 查看購物網 如購物網不是新入網ulr = del購物車
    /**
     * 可用作每新台 qqq 
     * 不用del
     * 因各網ulr多不同
     * 很難a網轉B網
     * 但刪?後就會轉網del
     * 易發生
    */
    //if (新入網Ulr做主頁 != localStorage.getItem('網Ulr2')) localStorage.clear()

    // 轉css
    _轉css()

    // 用data總數计加左類Menu // 0是不用
    for(var 數=docsGoogle開始數 ; 數 < 總Data.values.length ; 數++){  _data入網(數)  }
  })
}























































/* ******************************************************************************************************
*********************************************************************************************************
加密解密

      :::::::::       :::::::::::       :::::::::        ::::::::       ::::::::       :::::::::       ::::::::::
          :+:            :+:           :+:    :+:      :+:    :+:     :+:    :+:      :+:    :+:      :+:
        +:+             +:+           +:+    +:+      +:+            +:+    +:+      +:+    +:+      +:+
      +#+              +#+           +#++:++#+       +#+            +#+    +:+      +#+    +:+      +#++:++#
    +#+               +#+           +#+             +#+            +#+    +#+      +#+    +#+      +#+
  #+#                #+#           #+#             #+#    #+#     #+#    #+#      #+#    #+#      #+#
#########       ###########       ###              ########       ########       #########       ##########

*********************************************************************************************************
*********************************************************************************************************/
// https://www.cnblogs.com/mq0036/p/4983858.html
// https://codepen.io/98672794/pen/dyrqexv 
// https://www.jshaman.com/#polymorphic
// https://www.toutiao.com/article/7135349649744970281/
// 加密解密 https://blog.csdn.net/s3248149993/article/details/131722545
// 时间锁 https://blog.csdn.net/w2sft/article/details/119026719
// 反调试 https://blog.51cto.com/jsjiami/5983101
// sha256 https://chateverywhere.app?shareable_conversation_id=f4f1e4ac-853f-48a3-b6cc-acf9a2c3172a
// 解 http://www.ttmd5.com/hash.php?type=9









/* ********************************************************************************************************************
***********************************************************************************************************************
生成all網data 

        :::   :::           :::        :::    :::       ::::::::::      :::       :::       ::::::::::       :::::::::
      :+:+: :+:+:        :+: :+:      :+:   :+:        :+:             :+:       :+:       :+:              :+:    :+:
    +:+ +:+:+ +:+      +:+   +:+     +:+  +:+         +:+             +:+       +:+       +:+              +:+    +:+
   +#+  +:+  +#+     +#++:++#++:    +#++:++          +#++:++#        +#+  +:+  +#+       +#++:++#         +#++:++#+
  +#+       +#+     +#+     +#+    +#+  +#+         +#+             +#+ +#+#+ +#+       +#+              +#+    +#+
 #+#       #+#     #+#     #+#    #+#   #+#        #+#              #+#+# #+#+#        #+#              #+#    #+#
###       ###     ###     ###    ###    ###       ##########        ###   ###         ##########       #########

***********************************************************************************************************************
***********************************************************************************************************************/






let whatsapp
let 新入網Ulr做主頁
function _data入網(數) {
  //if (MOK) console.log('_data入網(數)')

  // get分類名
  let 類名 = 總Data.values[數][0]

  // 網whatsapp
  whatsapp = 'https://wa.me/'+總Data.values[docsGoogle開始數][1]+'?text='+總Data.values[docsGoogle開始數][2]
  $('#低導航右 a').attr("href",whatsapp)

  _data入網_加入類名menu(類名,數)
  _data入網_加入產品(類名,數)  

}



















function _data入網_加入類名menu(類名,數) {
  //if (MOK) console.log('_data入網_加入類名menu(類名,數)')

  if (!類名) return  //類名空pass

  // 公司名
  if (數 === docsGoogle開始數)  _data入網_整div('公司名','append','#all類',[類名,新入網Ulr做主頁,網字色1號]) 

  let 客台nb   = ''
    , 公司名   = 總Data.values[docsGoogle開始數][0]
    , 公司logo = 總Data.values[docsGoogle開始數][4]
  
  // lv顯
  if (客Lv > 0) {                                                          // 低導航右轉購物車
    _data入網_整div('低導航右','html','#低導航右',[網all按鍵])
    // 存儲在本地的瀏覽器購物車產品數
    if (localStorage.getItem("購物車內")){  
      $('#已點產品數').text(localStorage.getItem("購物車內"))
      $('#已點產品數').show()  
    }
  }
  else $('.產品鍵').attr('onclick', '')                                    // 沒lv不能買
  
  if (!!客台號) 客台nb                                                     // 顯台號
  = '<h3 style="position: fixed;top: 1%;right: 1%;width:auto;padding:1%;opacity: .8;" class="btn btn-block btn-lg '+網all按鍵+'" data="'+客表+'" >'+decodeURIComponent(客台號)+'</h3>'
  // 亂碼 https://chateverywhere.app?shareable_conversation_id=8b0a0314-e543-4253-8fad-df3b1e568bcd 

  // 公司logo
  _data入網_整div('公司logo','html','#logoBox',[新入網Ulr做主頁,客台nb,網色1號,公司logo,公司名])

  // 類名menu
  if (數 > (docsGoogle開始數+1))  _data入網_整div('類名menu','append','#all類',[類名,網字色1號])
  //不要exl的說明標題 pass
}
















function _data入網_加入產品(類名,數) {
  //if (MOK) console.log('_data入網_加入產品(類名,數)')

  let 加購流程 = 總Data.values[數][1]
    //, 類圖 = 總Data.values[數][2]
    , 品名 = 總Data.values[數][4]
    , 產品價錢 = 總Data.values[數][5]
    , 產品圖 = 總Data.values[數][6]
  if (!產品價錢) 產品價錢 = 0 // 沒寫價 = 0

  //不要exl的說明標題 pass
  if (數 <= (docsGoogle開始數+1)) return  

  // 加入產品書籤
  if (!!類名) _data入網_整div('類書籤','append','#all產品',[類名,加購流程,網字色1號]) // 類名空不顯

  // 品名空不顯
  if (!品名) return

  // 加入每產品
  品名 = 品名.replace(/\s*/g,"") // 刪空
  //if (選版 == '餐廳'){  _data入網_整div('餐廳每產品','append','#all產品',[數,產品圖,品名,產品價錢]) }

  // 加入文章
  if (總Data.values[數][3] === '2'){
    let 圖位 = ''
    if (產品圖) 圖位 = '<img class="" src="'+產品圖+'" alt="'+品名+'">'

    _data入網_整div('文章類','append','#all產品',[數,圖位,品名,產品價錢])
  }
  // 加入每產品
  else {
    if (!產品圖) 產品圖 = NoIMG
    _data入網_整div('餐廳每產品','append','#all產品',[數,產品圖,品名,產品價錢])
  }

}


























































/* ********************************************************************************************************
***********************************************************************************************************
買野流程

      :::::::::      :::    :::    :::   :::         ::::::::::       :::        ::::::::     :::       :::
     :+:    :+:     :+:    :+:    :+:   :+:         :+:              :+:       :+:    :+:    :+:       :+:
    +:+    +:+     +:+    +:+     +:+ +:+          +:+              +:+       +:+    +:+    +:+       +:+
   +#++:++#+      +#+    +:+      +#++:           :#::+::#         +#+       +#+    +:+    +#+  +:+  +#+
  +#+    +#+     +#+    +#+       +#+            +#+              +#+       +#+    +#+    +#+ +#+#+ +#+
 #+#    #+#     #+#    #+#       #+#            #+#              #+#       #+#    #+#     #+#+# #+#+#
#########       ########        ###            ###              ########## ########       ###   ###

***********************************************************************************************************
***********************************************************************************************************/





// _買野_餐廳版
function _買野_餐廳版(id) {
  //if (MOK) console.log('_買野_餐廳版('+id+')')

  let 品名 = String(總Data.values[id][4]).replace(/\s*/g,"") // 刪空
  ,可選項 = 總Data.values[id][7]

  //如有可選項
  if (!!可選項) {_買野_產品選項(品名, id)}  
  else {購物車顯已點產品數(id);查看購物車()}
  // 如果想判断一个值不是undefined、null和空字符串中的一种，则用 !! 就可以 
  // https://blog.csdn.net/m0_38039437/article/details/127791259

}


















// 產品選項
function _買野_產品選項(品名,id) {
  //if (MOK) console.log('_買野_產品選項(品名,id)')

  let 產品圖 = 總Data.values[id][6]
  if (!產品圖) 產品圖 = NoIMG
  _data入網_整div('選項頁','html','#購買流程 .row',[品名,總Data.values[id][5],產品圖]) 

  let 唉 = 7  // 選項1名號
  ,止 = 0  
  do { 
    // 循环取止沒產品選項
    if (!總Data.values[id][唉])  止+=1 // 選項名 3次 undefined out
    else {
      // 有選項名
      let 選項價 = 總Data.values[id][唉+1]
      ,選項名2 = 總Data.values[id][唉+2]
      ,選項價2 = 總Data.values[id][唉+3]
      ,選項價samp = 選項價samp2 = 選項2全 = ''
      ,_label1 = dot+'Sel_'+唉+dot // 用於點完再點=取消
      唉2 = 唉+2

      ,_label2 = dot+'Sel_'+唉2+dot  // 用於點完再點=取消

      //console.log('產品選項=',總Data.values[id][唉],選項名2)

      if (!!選項價) 選項價samp = '<samp >$'+選項價+'</samp>' // 沒價不顯
      if (!!選項價2) 選項價samp2 = '<samp >$'+選項價2+'</samp>'
      // 選項2名 沒不顯
      if (!!選項名2) 選項2全 = '\
        <input type="radio" name="Sel_'+唉+'" >\
        <label for="Sel_'+唉2+'" id="Sel_'+唉2+'" onclick="選項頁Sel_label('+_label2+','+_label1+')">\
          <span class="text">'+選項名2+'</span><span class="Price"'+選項價samp2+'</span>\
        </label>\
        ' 

        _data入網_整div('選項表','append','#購買流程 .row',[唉,_label1,_label2,總Data.values[id][唉],選項價samp,選項2全]) 
    }
    唉+=4
  } while (止<4)

  _data入網_整div('選項頁btn','append','#購買流程 .row',[id,網all按鍵])
  開關購買流程() // 彈出產品選項

}













function 購物車顯已點產品數(料) {

  if (MOK) console.log('購物車已加入('+料+')號產品')

  let 原已點 = localStorage.getItem("購物車內")
    ,新已點 = ~~原已點+1 // ~~ = str轉int

  // 存儲在本地的瀏覽器購物車產品數  
  localStorage.setItem("購物車內",新已點)

  $('#已點產品數').text(新已點)

  if (新已點!=0)  $('#已點產品數').show()

  let 料321 = 料+','+已選項組 // 已點產品id +已選項
  , 料王 = 料321.split(',') // 分割 轉為數組

  // 存儲在本地的瀏覽器
  localStorage.setItem("購買產品"+新已點, 料王) 
  
  // 已選購
  console.log("已購第"+localStorage.getItem('購物車內'),'個產品==',(總Data.values[料][4]).replace(/\s*/g,""))

  // 清空已選項組
  已選項組.length = 0 

  // 存儲 now 購物網 如購物網不是新入網ulr = del購物車 (get客data()用)
  localStorage.setItem("網Ulr2",(location.href).split('#')[0] )

}





















function _買野_火鍋版(動,id) {
  if (MOK) console.log('_買野_火鍋版(動,id))')
  /*
    if (選版 == '火鍋'){ // 火鍋版
      var 真id = '#'+id+'BuyNmb' // 合 已點 真id
      var 原 = $(真id+' span').text() // 取原價
      var 新 = 原
      console.log(真id,'=',原)

      // 加1
      if (動>0){
        $(真id+' button').eq(0).text(' + ') // 購買轉+
        新 = ~~原+1 // ~~ = str轉int
        $(真id+' span').text(新)
        console.log(新)
      }
        // -1
      if (動==0){
        if (原!=0){
          新 = ~~原-1
          $(真id+' span').text(新)
          console.log(新)
        }
      }

      // 0不顯
      if (新==0){ 
        $(真id+' span').hide()
        $(真id+' button').eq(1).hide() // eq(1) = 第2個 but
        $(真id+' button').eq(0).text(' 選購 ') // +轉購買
      }
      else{ 
        $(真id+' span').show()
        $(真id+' button').eq(1).show()  
      }
    }
  */
}































/* *****************************************************************************************
********************************************************************************************
按鈕

      :::::::::      :::    :::   :::::::::::   :::::::::::       ::::::::       ::::    :::
     :+:    :+:     :+:    :+:       :+:           :+:          :+:    :+:      :+:+:   :+:
    +:+    +:+     +:+    +:+       +:+           +:+          +:+    +:+      :+:+:+  +:+
   +#++:++#+      +#+    +:+       +#+           +#+          +#+    +:+      +#+ +:+ +#+
  +#+    +#+     +#+    +#+       +#+           +#+          +#+    +#+      +#+  +#+#+#
 #+#    #+#     #+#    #+#       #+#           #+#          #+#    #+#      #+#   #+#+#
#########       ########        ###           ###           ########       ###    ####

********************************************************************************************
********************************************************************************************/





// 買野btn動作
function 買野(動,id) {
  //if (MOK) console.log('買野(動,id)')

  // 選版
  if (選版 == '餐廳') _買野_餐廳版(id)
  if (選版 == '火鍋') _買野_火鍋版(動,id)

}


















let 已選項組 = []
function 選項頁Sel_label(id1, id2) {

  // id label點轉色
  $('#' + id1).css({ 'background': 網色1號 })
  $('#' + id1 + ' .text').css({ 'color': 網字色1號, 'font-size': 'xx-large' })
  $('#' + id1 + ' .Price').css({ 'color': 左Menu下色 })
  $('#' + id2).css({'background': 'initial'})
  $('#' + id2+' .text').css({'color': 'initial','font-size': 'medium'})

  // 查 已選項組
  if (已選項組.indexOf(id2) !== -1) { 
    // 選 id1時刪id2
    已選項組.splice(已選項組.indexOf(id2), 1)
    console.log('已刪除=',$('#'+id2+' .text').text())
  }

  if (已選項組.indexOf(id1) !== -1) { 
    // 重選 id1時刪id1
    已選項組.splice(已選項組.indexOf(id1), 1)
    console.log('已刪除=',$('#'+id1+' .text').text())

    // id1 label 重點轉冇色
    $('#' + id1).css({'background': 'initial'})
    $('#' + id1+' .text').css({'color': 'initial','font-size': 'medium'})
    $('#' + id1 + ' .Price').css({ 'color': 'initial' })
  }
  // 已選加入
  else{ console.log('已選=',$('#'+id1+' .text').text());  已選項組.push(id1) }

}
































function 選項頁的確認btn組合(data) {
  //if (MOK) console.log('選項頁的確認btn組合(',{data},')')

  購物車顯已點產品數(data)  
  開關購買流程(0)
  加購流程(data) 
}























function 加購流程(id) {
  if (MOK) console.log('加購流程(id)')
  _data入網_整div('加購流程頁','html','#購買流程 .row',[網all按鍵])

  let 加購流程 = ~~總Data.values[id][1]+0 // 轉數字

  /* **********************
  在GExl用1234...做加購流程
  如選購的產品有加流程
  流程號+1檢查網內有沒下一流程的ID
  如有彈出加購流程
  ********************** */
  // if GExl有加流程
  if ( $(加購流程).length === 0 ) return 
  // https://jessie75919.medium.com/儘早-return-函數-讓-if-邏輯條件判斷不再一層又一層

  // if有下個流程
  下個流程 = ~~加購流程+1
  if ( $('hr[id^="_flow_'+下個流程+'_"]').length === 0 ) return 查看購物車()  
  // jQuery判断元素存在与否 https://www.cnblogs.com/asplover/p/14470731.html
  // jq id模糊查询 https://blog.csdn.net/qq_24909089/article/details/100026008

  let 流程ID= $('hr[id^="_flow_'+下個流程+'_"]').attr('id')
  // jQuery获取div的id值 https://blog.csdn.net/vancyf/article/details/77881830
  ,流程ID2 = 流程ID.slice(8)
  // js 截取字符串 https://www.runoob.com/w3cnote/js-extract-string.html
  //console.log('下個流程==',流程ID2)

  // 轉 購買流程 內容
  $('#購買流程 h2').text('請問您需要加購'+流程ID2+'嗎?')
  $('#購買流程 a').eq(0).text('加購'+流程ID2).attr("href",'#'+流程ID2)
  開關購買流程() // 彈出加購流程

}













function 清空購物車() {
  if (MOK) console.log('清空購物車()')

  // 確認清空購物車
  let r=confirm("你是否要清空購物車!!")

	if (r==true){

    // 清購物車前 ,備份已點
    已點的單 = localStorage.getItem('已點訂單')
    localStorage.clear()
    $('#已點產品數').text(0)	
    // 清購物車後 ,重save已點
    localStorage.setItem("已點訂單",已點的單)
  }
  // 确认框 https://www.runoob.com/js/js-popup.html

  開關購買流程(0)

}














function 刪除單個購物車產品(data,sel) {
  if (MOK) console.log('刪除單個購物車產品(data,sel)')
  //sel = ~~sel+0

  // 分割 localStorage 轉為數組
  let 刪除產品的id = localStorage.getItem(data).split(',') 
    , 名 = 總Data.values[刪除產品的id[0]][4]
  
  // 刪除localStorage內產品
  localStorage.removeItem(data)
  console.log('已刪除=',名)
  
  // 刪除localStorage內購物車數
  let 購物數 = ~~localStorage.getItem("購物車內")-1
  localStorage.setItem("購物車內",購物數)
  // 更新購物車數
  $('#已點產品數').text(購物數)

  // 重開顯示最新
  查看購物車()

}






















// 查看購物車
function 查看購物車() { 
  if (MOK) console.log('查看購物車()')

  // 清頁面
  _data入網_整div('清空購物車','html','#購買流程 .row','0')
  // 購物車有產品才顯示
  if (localStorage.length > 1)  $('#清空購物車').css({'display': 'block'})

  // 顯示已點的訂單
  //console.log("localStorage.getItem('已點訂單')",localStorage.getItem('已點訂單'))
  if(!!localStorage.getItem('已點訂單')) {                            // 如有已點的訂單
    let 已點的訂單 = localStorage.getItem('已點訂單').split('!?')          // 已點的訂單轉list
      , totoPrice = 已點的訂單.pop()                                      // 刪除並取最後一個元素

    _data入網_整div('顯示已點的訂單1','append','#購買流程 .row',[網all按鍵])

    for(var 已點的cont=0; 已點的cont<已點的訂單.length;已點的cont=已點的cont+3){   // loop加入已點的內容
                              // 0=品名
      let bb = 已點的cont+1   //   選項
        , cc = 已點的cont+2   //   單價
        , data = '\
        <tr>\
        <td style="float: left;" >'+已點的訂單[已點的cont]+'</td>'
        +'<td>'+已點的訂單[bb]+'</td>'
        +'<td style="float: right;" >'+已點的訂單[cc]+'</td>\
        </tr>'
      _data入網_整div('萬','append','#顯示已點的訂單床',[data])
    }

    _data入網_整div('顯示已點的訂單3','append','#顯示已點的訂單床',[totoPrice])
  }

  let 訂單總金 = 0
    , 有購物
  // all 訂單 內容
  for(var i=0; i<localStorage.length;i++){
    
    // 分割 localStorage 轉為數組 取購產品id
    let 真產品加分類Data = localStorage.getItem(localStorage.key(i)).split(',') 
    // 真產品加分類Data = [已選購產品id,選項1_id,選項2_id...]
    
    if ( localStorage.key(i).indexOf("購買產品") != -1){

      let 已選購產品id =  真產品加分類Data[0]
        , 品名 = 總Data.values[已選購產品id][4]
        , 產品價錢 = 總Data.values[已選購產品id][5]
        , 加all選項 = ''
        , 加選項總金 = 0
        , 本產品總金 = 0

      // 取選項 不要0的id
      for(var jj=1; jj<真產品加分類Data.length;jj++){
        let 真選項 = 真產品加分類Data[jj].split('_') //只取sel_後的
        , 真選項價 = ~~真選項[1]+1
        , 真選項價2 = 總Data.values[已選購產品id][真選項價]
          
        if (!真選項價2) 真選項價2 = 0

        //顯示選項用 多項+後
        if(!!總Data.values[已選購產品id][真選項[1]]){ // 如該選項的GEcl非空
          加all選項 = 加all選項 + 總Data.values[已選購產品id][真選項[1]] + '($' + 真選項價2 + ')' + ','  
        }

        // 如有選項 加選項總金額
        // 保留两位小数 https://chateverywhere.app/
        if (加all選項 != '') 加選項總金 = (parseFloat(加選項總金)+parseFloat(真選項價2)).toFixed(2)
      }

      if (!產品價錢) 產品價錢 = 0 // 沒寫價 = 0

      // 加本產品總金
      本產品總金 = (parseFloat(加選項總金)+parseFloat(產品價錢)).toFixed(2)

      // 加 確定訂單頁 
      品名 = 品名.replace(/\s*/g,"") // 刪空

      
      _data入網_整div('確定訂單頁','append','#購買流程 .row',[品名,產品價錢,localStorage.key(i),加all選項,本產品總金]) 
    
      // 本單加總金 轉結算
      訂單總金 = (parseFloat(訂單總金)+parseFloat(本產品總金)).toFixed(2)

      有購物 = 品名
    }
  }

  // 加 確定訂單 btn
  if (!!有購物) btn = ['確定訂單()',訂單總金]
  else btn = ['',訂單總金]
  _data入網_整div('確定訂單頁btn','append','#購買流程 .row',[btn,網all按鍵])

  // 彈出確定訂單
  開關購買流程() 

  console.log(' +請確定訂單+ ')
  
}






























// 確定訂單.gs

/*
客D傍新s
sid = ?**? //d/?**?/edit

s>擴>app script> pass .gs

部>新>類(網)>執(我)>取(所)>部

客表Z = 部id

https://emtech.cc/post/rol-call/
https://chateverywhere.app
---

.gs
---
const id = "sid"



function doGet(e) {
  let t = {
    name: e.parameter.name,
    time: new Date().toLocaleString(),
    type: e.parameter.type // 添加type参数，以便在switch语句中使用
  };
  let a = SpreadsheetApp.openById(id).getSheets()
    , data = t.name.split('!?') //data轉list
    , totoprice = data.pop()  // 刪除並取最後一個元素

  switch (t.type) {
    case "new":

      let f = a[0].getLastRow() + 2 //頁2 加新行

      // 添加兩行空白
      a[0].appendRow([""])

      // loop加入訂單內容
      for(var cont=0; cont<data.length;cont=cont+3){
                          // 0=品名
        let bb = cont+1   //   選項     
          , cc = cont+2;  //   單價
        a[0].appendRow([data[cont], data[bb], data[cc]])
      }

      // 将时间合并到2个单元格 https://chateverywhere.app/
      let lastRow = a[0].getLastRow();
      a[0].getRange(lastRow + 1, 1).setValue(t.time);
      let totopriceRange = a[0].getRange(lastRow + 1, 1, 1, 2);
      totopriceRange.merge();
      totopriceRange.setHorizontalAlignment("right");

      // 秘3格加入總金
      //let lastRow = a[0].getLastRow();
      a[0].getRange(lastRow+1, 3).setValue(totoprice);

      // 添加兩行空白
      a[0].appendRow([" "])
      a[0].appendRow([""]);
            
      let response = {
        success: true
      };
      return ContentService.createTextOutput(JSON.stringify(response))
        .setMimeType(ContentService.MimeType.JSON);

    default:
      return _hi();
  }
}

function _hi() {
  var url = 'https://98672794.github.io/%E9%BB%9E%E9%A4%90%E7%8E%8B/#%E9%A3%B2%E5%93%81'; // The URL you want to redirect to
  var htmlOutput = HtmlService.createHtmlOutput('<script>window.location.href = "' + url + '";</'+'script>');
  return htmlOutput;
}

---
*/


function 確定訂單() {

  // qqqqqqqqqqqqqqqqqqqqqqq  開台時間 人數


  if (MOK) console.log('確定訂單()')

  let url3 = ["%8B%DC%E8%E4%E3%ADi%5E%A2%D6%D5%DB%D9%E4%A2%95%D6%DE%D6%D3%D1%93%91%D2%DC%9C%9C%CE%C4%D5%E1%E2%A2%A2%A2","4%94%DD%DD%C8"]
    , 客低 = _0x1731ba(url3[0])+_0x1731ba(客表)+_0x1731ba(url3[1]) // 客結數表
    , 訂單list = ''

  // 重BUY
  if(!!localStorage.getItem('已點訂單')) {                                  // 如有已點的訂單
    已點的訂單重BUY用 = localStorage.getItem('已點訂單').split('總金額 $')   // 取總金前料
    訂單list = 已點的訂單重BUY用[0]                                         // 加之前的已點的訂單
  }

  // loop做訂單list
  for(var cont=0; cont<$(".購物車表 td").length;cont=cont+4){
    let j = cont+1
      , k = cont+2
      , m = cont+3
      , 名   = $('.購物車表 td').eq(cont).text()
      , 原價 = $('.購物車表 td').eq(j).text()
      , 選   = $('.購物車表 td').eq(k).text()
      , 總價 = $('.購物車表 td').eq(m).text()

    訂單list = 訂單list 
    + 名 + 原價 + '!?'
    + 選 + '!?'
    + 總價 + '!?'
  }

  // 重BUY
  if(!!localStorage.getItem('已點訂單')) {      

    現總金 = $('#本單加總金').text().split('總金額 $')

    現總金 = (parseFloat(已點的訂單重BUY用[1])+parseFloat(現總金[1])).toFixed(2)

    訂單list = 訂單list + '總金額 $' + 現總金

  }
  // 新buy
  else 訂單list = 訂單list + ($('#本單加總金').text())

  if (MOK) console.log('訂單list)',訂單list)

  if (MOK) console.log('to客表',客低)

  訂單list && (fetch(`${客低}?type=new&name=${encodeURIComponent(訂單list)}`, {mode: 'no-cors'}))

  // 清空購物車
  localStorage.clear()
  $('#已點產品數').text(0)	

  // save已點的訂單 
  localStorage.setItem("已點訂單",訂單list)
  console.log("已點訂單=",localStorage.getItem('已點訂單').split('!?') )

}




















function 結帳() {
  console.log('請選支付方式')

  // loop找支付方式
  let 支付方式開始數 = 9
    , 止=0
  for(var 數=支付方式開始數 ; 止 < 2 ; 數++){
    let 支付方式名 = 總Data.values[2][數]
      , 支付方式料 = 總Data.values[3][數]
    if (!!支付方式名) _data入網_整div('支付方式列表','append','#支付方式列表的床',[支付方式名,支付方式料,網all按鍵])

    if (!支付方式名) 止++ // 冇名1次out
  }

  // 取消支付方式列表onclick 防重
  $('#結帳鍵').text("結帳中...").attr("onclick",'')


  // admin 確認 刪除localStorage內產品 qqq 
  //localStorage.removeItem('已點訂單')
  //console.log('已刪除=','已點訂單')
}


function 打開支付(木,sel) {
  // 現場支付
  let data5= '<h5 class="btn btn-lg '+網all按鍵+'">'+木+'</h5>'
  // qr支付 如data包含"http"
  if(木.indexOf("http") >= 0 ) data5 = '<img style="width: 100%;height: auto;" src="'+木+'">'
  // 返回時 清空頁面
  if (sel===1) _data入網_整div('萬','html','#支付方式列表的床',' ')
  // 顯示支付碼
  else _data入網_整div('打開支付頁','html','#支付方式列表的床',[data5])
}
















// 購買流程btn
function 開關購買流程(sel) {
  //if (MOK) console.log('開關購買流程(sel)')

  if (sel==0){  // 關
    $('#購買流程').hide()
    $('#all類,#all產品,#低導航').css({'filter': 'blur(0px)'})
  }

  else if (sel==1){  // 回復 購買流程頁
    $('#購買流程').hide()
    $('#all類,#all產品,#低導航').css({'filter': 'blur(0px)'})
    _data入網_整div('加購流程頁','html','#購買流程 .row','0')
  }

  else{ // 開
    // 彈出確定訂單
    $('#購買流程').show()
    $("#all類,#all產品,#低導航").css({"filter": "blur(5px)"}) // 模糊背景
    // filter 導致 position 失效 https://shinyu0430.github.io/2021/09/18/filterchildproblem/
  }
}





















/* **********************************************************************************
*************************************************************************************
CSS

      ::::::::       ::::::::       ::::::::
    :+:    :+:     :+:    :+:     :+:    :+:
   +:+            +:+            +:+
  +#+            +#++:++#++     +#++:++#++
 +#+                   +#+            +#+
#+#    #+#     #+#    #+#     #+#    #+#
########       ########       ########

*************************************************************************************
*************************************************************************************/

let 網all按鍵
    //btn-primary 藍
    //btn-success 青
    //btn-info 淺藍
    //btn-warning 黃
    //btn-danger 紅
    //btn-secondary 灰
    //btn-light 黑

  , 網色1號
  , 左Menu下色
  , 網字色1號
  , 網字色2號
  , 產品鍵圖尺寸高
  , 產品鍵圖尺寸高max
  , 產品鍵圖尺寸橫
  , 產品鍵圖尺寸橫max
  = 0

let htmlStyle = document.documentElement.style
// js取到css样式变量 https://blog.csdn.net/qq_39953537/article/details/91047839

function _轉css() {

  // 轉主css
  網all按鍵 = 'btn-' + 總Data.values[1][4]
  網色1號 = 總Data.values[1][5]
  左Menu下色 = 總Data.values[1][6]
  網字色1號 = 總Data.values[1][7]
  網字色2號 = 總Data.values[1][8]
  // 色版 https://codepen.io/ikbbceme-the-sasster/full/eYyJxyN

  產品鍵圖尺寸高 = 總Data.values[1][9]
  產品鍵圖尺寸高max = 總Data.values[1][10]
  產品鍵圖尺寸橫 = 總Data.values[1][11]
  產品鍵圖尺寸橫max = 總Data.values[1][12]

  // 轉色
  htmlStyle.setProperty("--網色1號", 網色1號)
  htmlStyle.setProperty("--左Menu下色", 左Menu下色)
  htmlStyle.setProperty("--網字色1號", 網字色1號)
  htmlStyle.setProperty("--網字色2號", 網字色2號)

  // 內容大小
  htmlStyle.setProperty("--產品鍵圖尺寸高", 產品鍵圖尺寸高)
  htmlStyle.setProperty("--產品鍵圖尺寸高max", 產品鍵圖尺寸高max)
  htmlStyle.setProperty("--產品鍵圖尺寸橫", 產品鍵圖尺寸橫)
  htmlStyle.setProperty("--產品鍵圖尺寸橫max", 產品鍵圖尺寸橫max)

}




























/* **********************************************************************************
*************************************************************************************
admin 

          :::        :::::::::         :::   :::       :::::::::::       ::::    :::
       :+: :+:      :+:    :+:       :+:+: :+:+:          :+:           :+:+:   :+:
     +:+   +:+     +:+    +:+      +:+ +:+:+ +:+         +:+           :+:+:+  +:+
   +#++:++#++:    +#+    +:+      +#+  +:+  +#+         +#+           +#+ +:+ +#+
  +#+     +#+    +#+    +#+      +#+       +#+         +#+           +#+  +#+#+#
 #+#     #+#    #+#    #+#      #+#       #+#         #+#           #+#   #+#+#
###     ###    #########       ###       ###     ###########       ###    ####

*************************************************************************************
*************************************************************************************/


let 選版 = '餐廳'       // 餐廳 // 火鍋

//遍历并输出localStorage里存储的名字和值
// 读取第一条数据的变量名(键值 https://blog.csdn.net/wy_Blog/article/details/77945410
if (MOK) for(var i=0; i<localStorage.length;i++){
  console.log('localStorage里存储的第'+i+'条数据的名字为：'+localStorage.key(i)+',值为：'+localStorage.getItem(localStorage.key(i)));
}

查客data()







