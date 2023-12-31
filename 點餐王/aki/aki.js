








/**
 * 用法:
 * 
 * 開 google ecl 
 * 入客料
 * 共用
 * 
 * 進入Google Cloud Platform的頁面
 * https://console.cloud.google.com/?hl=zh-TW 按下新增項目
 * 
 * 進到API 庫：https://console.cloud.google.com/apis/library?hl=zh-TW
 * 搜尋欄中搜尋“sheet”
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
















/* **********************************************************************
*************************************************************************
**************************************************** 取Google Sheets 資料 
*************************************************************************
*************************************************************************/


/*
  V4 版取得Google Sheets 資料的方法
  https://www.letswrite.tw/google-excel-db/#v4-%e7%89%88%e5%8f%96%e5%be%97-google-sheets-%e8%b3%87%e6%96%99%e7%9a%84%e6%96%b9%e6%b3%95

  使用「發佈到網路」的網址(id)會顯示拒絕跨網域請求的錯誤,使用「共用」的網址(id)就成功了
  https://www.letswrite.tw/google-excel-db/#comment-82

  example
  https://sheets.googleapis.com/v4/spreadsheets/{表單id}/values/{sheet名稱}?alt=json&key={API金鑰}

  */
let GEcl = 'https://sheets.googleapis.com/v4/spreadsheets/1Rr9FSD7oVUDxzoIB7tIsVh3GrDSOHp63bLTGh8oCipg/values/test?alt=json&key=AIzaSyDoWvEleSQeqDFqwXN8z4slV8uhaMNuZAM'
var 總Data
fetch(GEcl).then(res => res.json()).then(res => {
  // 用G資料
  總Data = res

  // page title icon
  $('title').html(總Data.values[1][0])  //總Data.values[直][橫]
  $('link[rel="shortcut icon"]').attr('href',總Data.values[1][4])

  // 用data總數计加左類Menu // 0是不用
  for(var 數=0 ; 數 < 總Data.values.length ; 數++){  _data入網(數)  }
})




































/* **********************************************************************
*************************************************************************
*********************************************************** 生成all網data 
*************************************************************************
*************************************************************************/







function _data入網(數) {
  if (MOK) console.log('_data入網(數)')

  // get分類名
  let 類名 = 總Data.values[數][0]

  _data入網_加入類名menu(類名,數)
  _data入網_加入產品(類名,數)  

}



















function _data入網_加入類名menu(類名,數) {
  if (MOK) console.log('_data入網_加入類名menu(類名,數)')

  if (類名.length < 1) return  //類名空pass

  // 公司名
  if (數 === 1){  _data入網_整div('公司名','append','#all類',[類名]) }

  // 類名menu
  if (數 > 2){   _data入網_整div('類名menu','append','#all類',[類名]) }
  //不要exl的說明標題 pass
  

}
















function _data入網_加入產品(類名,數) {
  if (MOK) console.log('_data入網_加入產品(類名,數)')

  let 加購流程 = 總Data.values[數][1],
  類圖 = 總Data.values[數][2],
  品名 = String(總Data.values[數][4]).replace(/\s*/g,""), // 刪空
  產品價錢 = 總Data.values[數][5],
  產品圖 = 總Data.values[數][6]

  //不要exl的說明標題 pass
  if (數 <= 2) return  

  // 加入產品書籤
  if (類名.length > 0){ _data入網_整div('類書籤','append','#all產品',[類名,加購流程])  } //類名空不顯
  
  // 加入每產品
  if (選版 == '餐廳'){   _data入網_整div('餐廳每產品','append','#all產品',[數,產品圖,品名,產品價錢])   }


}

























var NoIMG = "'aki/NoIMG.jpg'" // monica : How to display a default image if the img tag fails to load an image in JavaScript?
var dot = "'"
function _data入網_整div(sel,run,box_name,data) {
  if (MOK) console.log('_data入網_整div(sel,run,box_name,data)')
  //console.log('_data入網_整div=',sel,run,box_name,data)

  let 公司名 = '\
    <a id="公司名" class="sidebar-brand d-flex align-items-center justify-content-center" href="./">\
    '+data[0]+'\
    </a>\
    <hr class="sidebar-divider" style="background: rgba(0,0,0,.5);">\
  '

  , 類名menu = '\
    <!-- '+data[0]+' -->\
    <li class="nav-item " title="'+data[0]+'" >\
      <a class="類名 nav-link " href="#'+data[0]+'" >\
        <span style="font-size: 150%;">'+data[0]+'</span>\
        </a>\
    </li>\
    <hr class="sidebar-divider" style="background: rgba(0,0,0,.5);">\
  '// <img src="'+類圖+'" alt="'+類名+'" onerror="this.onerror=null;this.src='+NoIMG+'">\

  , 類書籤 = '\
    <hr id="'+data[0]+'" style="clear:both; width: 100%;background: #4E73DF;">\
    <!-- '+data[0]+'書籤 -->\
    <h1 class="h3 mb-0 text-gray-800">'+data[0]+'</h1>\
    <hr id="_flow_'+data[1]+'_'+data[0]+'" style="clear:both; width: 100%;opacity: 0;">\
  '

  , 餐廳每產品 = '\
    <button class="產品鍵" onclick="買野(1,'+data[0]+')">\
    <img src="'+data[1]+'" alt="'+data[2]+'" onerror="this.onerror=null;this.src='+NoIMG+'">\
      <h5>'+data[2]+'</h5>\
      <p>$ '+data[3]+'</p>\
    </button>\
  '

  , 選項頁 = '\
    <!-- 產品資料 -->\
    <div class="card shadow mb-4">\
        <!-- Card Header - Dropdown -->\
        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">\
            <h4 class="m-0 font-weight-bold text-primary">'+data[0]+'</h4><samp >$ '+data[1]+'</samp>\
        </div>\
        <!-- Card Body -->\
        <div class="card-body">\
          <img src="'+data[2]+'" style="height: auto;width: 100%;max-width: 300px;display: block;margin: auto;" alt="'+data[0]+'" onerror="this.onerror=null;this.src='+NoIMG+'">\
        </div>\
    </div>\
  '

  , 選項表 = '\
    <!-- 選項 -->\
    <div class="card shadow mb-4">\
      <div class="card-body">\
        <input type="radio" name="Sel_'+data[0]+'_" >\
          <label for="Sel_'+data[0]+'_" id="Sel_'+data[0]+'_label" onclick="label點轉色('+data[1]+','+data[1]+','+data[2]+')">\
            <span class="text">'+data[3]+'</span>'+data[4]+'\
          </label>'+data[5]+'\
      </div>\
    </div>\
  '

  , 選項頁btn = '\
    <a onclick="開關購買流程(0);加購流程('+data[0]+')" class="btn btn-primary btn-block btn-lg">確認</a>\
    <a onclick="開關購買流程(0);加購流程('+data[0]+')" class="btn btn-block btn-lg">取消</a>\
  '

  , 加購流程頁 = '\
    <h2 class="m-0 font-weight-bold text-primary">嗎?</h2>\
    <a href="#" onclick="開關購買流程(0)" class="btn btn-primary btn-block btn-lg">加購</a>\
    <a onclick="確定訂單()" class="btn btn-block btn-lg">no了</a>\
'

  // 執行儲存為字串的 JavaScript 程式碼 https://stackoverflow.com/a/939343
  // append = [run] https://chateverywhere.app/
  $(box_name)[run]([eval(sel)])

}




































/* **********************************************************************
*************************************************************************
************************************************************** 買野btn動作 
*************************************************************************
*************************************************************************/





// _買野_餐廳版
function _買野_餐廳版(id) {
  if (MOK) console.log('_買野_餐廳版(id)')

  let 品名 = String(總Data.values[id][4]).replace(/\s*/g,"") // 刪空
  ,產品價錢 = 總Data.values[id][5]
  ,可選項 = 總Data.values[id][7]

  console.log('*** 品名=',品名,'$$=',產品價錢,' ***')

  //如有可選項
  if (!!可選項) {_買野_產品選項(品名, id)}
  else {確定訂單()}
  // 如果想判断一个值不是undefined、null和空字符串中的一种，则用 !! 就可以 
  // https://blog.csdn.net/m0_38039437/article/details/127791259

}


















// 產品選項
function _買野_產品選項(品名,id) {
  if (MOK) console.log('_買野_產品選項(品名,id)')

  console.log('可選項=')

  _data入網_整div('選項頁','html','#購買流程 .row',[品名,總Data.values[id][5],總Data.values[id][6]]) 

  
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
      ,_label1 = dot+'Sel_'+唉+'_label'+dot // 用於點完再點=取消
      ,_label2 = dot+'Sel_'+唉+'_2label'+dot  // 用於點完再點=取消

      console.log(總Data.values[id][唉],選項名2)

      if (!!選項價) 選項價samp = '<samp >$'+選項價+'</samp>' // 沒價不顯
      if (!!選項價2) 選項價samp2 = '<samp >$'+選項價2+'</samp>'
      if (!!選項名2) 選項2全 = '\
        <input type="radio" name="Sel_'+唉+'_" >\
        <label for="Sel_'+唉+'_2" id="Sel_'+唉+'_2label" onclick="label點轉色('+_label2+','+_label2+','+_label1+')">\
          <span class="text">'+選項名2+'</span>'+選項價samp2+'</span>\
        </label>\
        ' // 選項2名 沒不顯

        _data入網_整div('選項表','append','#購買流程 .row',[唉,_label1,_label2,總Data.values[id][唉],選項價samp,選項2全]) 
    }
    唉+=4
  } while (止<4)

  let str = '' + id // Monica JavaScript 中的數字轉換為字串
  _data入網_整div('選項頁btn','append','#購買流程 .row',str)
  開關購買流程() // 彈出產品選項

}


















function _買野_火鍋版(動,id) {
  if (MOK) console.log('_買野_火鍋版(動,id))')
  /*
    if (選版 == '火鍋'){ // 火鍋版
      // qqqqqqqqqqq 火鍋未完成 qqqqqqqqqqq
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































/* **********************************************************************
*************************************************************************
********************************************************************* btn 
*************************************************************************
*************************************************************************/




// 買野btn動作
function 買野(動,id) {
  if (MOK) console.log('買野(動,id)')

  // 選版
  if (選版 == '餐廳') _買野_餐廳版(id)
  if (選版 == '火鍋') _買野_火鍋版(動,id)

  // 購物車顯已點產品數
  let 原已點 = $('#已點產品數').text() // 取原價
  ,新已點 = 原已點
  新已點 = ~~新已點+1 // ~~ = str轉int
  $('#已點產品數').text(新已點)
  //console.log('已點產品數=',總新)
  if (新已點==0){   $('#已點產品數').hide()  }
  else{   $('#已點產品數').show()  }

}










function 加購流程(id) {
  if (MOK) console.log('加購流程(id)')

  _data入網_整div('加購流程頁','html','#購買流程 .row','0')

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
  if ( $('hr[id^="_flow_'+下個流程+'_"]').length === 0 ) return
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










// 確定訂單
function 確定訂單() {
  if (MOK) console.log('確定訂單()')

  // 轉 確定訂單 內容
  $('#購買流程 h2').text('確定訂單')
  $('#購買流程 a').eq(0).text('立即下單')
  $('#購買流程 a').eq(1).text('一陣先').attr("onclick",'開關購買流程(0)')
  開關購買流程() // 彈出確定訂單
}
















// 購買流程btn
function 開關購買流程(sel) {
  if (MOK) console.log('開關購買流程(sel)')

  if (sel==0){  // 關
    $('#購買流程').hide()
    $('#all類,#all產品,#低導航').css({'filter': 'blur(0px)'})
  }
  else{ // 開
    // 彈出確定訂單
    $('#購買流程').show()
    $("#all類,#all產品,#低導航").css({"filter": "blur(5px)"}) // 模糊背景
    // filter 導致 position 失效 https://shinyu0430.github.io/2021/09/18/filterchildproblem/
  }
}
  






















// label點轉色
let lastClickedLabel = null;
function label點轉色(labelId, id1, id2) {
  // https://chateverywhere.app/ 50%
  if (MOK) console.log('label點轉色(labelId, id1, id2)')

  let id1OK = '#' + id1;
  let id2OK = '#' + id2;

  if (lastClickedLabel === labelId) {
    // 取消選中
    console.log('取消選中');
    $(id1OK).css({ 'background': 'initial' });
    $(id1OK + ' .text').css({ 'color': 'initial', 'font-size': 'medium' });

    lastClickedLabel = null;
  } else {
    // 選中
    console.log('選中');
    if (lastClickedLabel) {
      // 取消上一個選中的標籤
      $(lastClickedLabel).css({ 'background': 'initial' });
      $(lastClickedLabel + ' .text').css({ 'color': 'initial', 'font-size': 'medium' });
    }

    $(id1OK).css({ 'background': '#05f' });
    $(id1OK + ' .text').css({ 'color': '#fff', 'font-size': 'xx-large' });

    $(id2OK).css({'background': 'initial'})
    $(id2OK+' .text').css({'color': 'initial','font-size': 'medium'})

    lastClickedLabel = labelId;
  }
}
























/* **********************************************************************
*************************************************************************
****************************************************************** 選模版 
*************************************************************************
*************************************************************************/

let MOK = !true // admin
,選版 = '餐廳' 
// 餐廳
// 火鍋