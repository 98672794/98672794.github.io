








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
  // get分類名
  let 類名 = 總Data.values[數][0]

  _data入網_加入類名menu(類名,數)
  _data入網_加入產品(類名,數)  

}



















function _data入網_加入類名menu(類名,數) {

  if (類名.length < 1) return  //類名空pass

  // 公司名
  if (數 === 1){  _data入網_整div('公司名','append','#all類',[類名]) }

  // 類名menu
  if (數 > 2){   _data入網_整div('類名menu','append','#all類',[類名])   }
  //不要exl的說明標題 pass
  

}
















var NoIMG = "'aki/NoIMG.jpg'" // monica : How to display a default image if the img tag fails to load an image in JavaScript?
function _data入網_加入產品(類名,數) {

  let 加購流程 = 總Data.values[數][1],
  類圖 = 總Data.values[數][2],
  品名 = String(總Data.values[數][4]).replace(/\s*/g,""), // 刪空
  產品價錢 = 總Data.values[數][5],
  產品圖 = 總Data.values[數][6]

  if (數 <= 2) return  //不要exl的說明標題 pass

  // 加入產品書籤
  if (類名.length > 0){ _data入網_整div('類書籤','append','#all產品',[類名,加購流程])  } //類名空不顯
  
  // 加入每產品
  if (選版 == '餐廳'){   _data入網_整div('餐廳每產品','append','#all產品',[數,產品圖,品名,產品價錢])   }


}


























function _data入網_整div(sel,run,box_name,data) {

  let 公司名 = '\
    <a id="公司名" class="sidebar-brand d-flex align-items-center justify-content-center" href="./">\
    '+data[0]+'\
    </a>\
    <hr class="sidebar-divider" style="background: rgba(0,0,0,.5);">\
  '

  let 類名menu = '\
    <!-- '+data[0]+' -->\
    <li class="nav-item " title="'+data[0]+'" >\
      <a class="類名 nav-link " href="#'+data[0]+'" >\
        <span style="font-size: 150%;">'+data[0]+'</span>\
        </a>\
    </li>\
    <hr class="sidebar-divider" style="background: rgba(0,0,0,.5);">\
  '// <img src="'+類圖+'" alt="'+類名+'" onerror="this.onerror=null;this.src='+NoIMG+'">\

  let 類書籤 = '\
    <hr id="'+data[0]+'" style="clear:both; width: 100%;background: #4E73DF;">\
    <!-- '+data[0]+'書籤 -->\
    <h1 class="h3 mb-0 text-gray-800">'+data[0]+'</h1>\
    <hr id="_flow_'+data[1]+'_'+data[0]+'" style="clear:both; width: 100%;opacity: 0;">\
  '

  let 餐廳每產品 = '\
    <button class="產品鍵" onclick="買野(1,'+data[0]+')">\
    <img src="'+data[1]+'" alt="'+data[2]+'" onerror="this.onerror=null;this.src='+NoIMG+'">\
      <h5>'+data[2]+'</h5>\
      <p>$ '+data[3]+'</p>\
    </button>\
  '

  let 選項頁 = '\
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
  // 執行儲存為字串的 JavaScript 程式碼 https://stackoverflow.com/a/939343
  // append = [run] https://chateverywhere.app/
  $(box_name)[run](eval(sel))

}

























/* **********************************************************************
*************************************************************************
***************************************************************** buttons 
*************************************************************************
*************************************************************************/







// 買野btn動作
// QQQQ 已選購LIST[].append
function 買野(動,id) {

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

























// _買野_餐廳版
function _買野_餐廳版(id) {

  let 品名 = String(總Data.values[id][4]).replace(/\s*/g,"") // 刪空
  ,加購流程 = ~~總Data.values[id][1]+0 // 轉數字
  ,產品價錢 = 總Data.values[id][5]
  ,可選項 = 總Data.values[id][7]
  console.log('品名=',品名,'價錢=',產品價錢)

  //如有可選項
  if (!!可選項) _買野_產品選項(品名,id) 
  // 如果想判断一个值不是undefined、null和空字符串中的一种，则用 !! 就可以 
  https://blog.csdn.net/m0_38039437/article/details/127791259

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



























// 產品選項
function _買野_產品選項(品名,id) {

  console.log('可選項',總Data.values[id][7])

  _data入網_整div('選項頁','html','#購買流程 .row',[品名,總Data.values[id][5],總Data.values[id][6]]) 

  // 循环取止沒產品選項
  var 唉 = // 選項名號
  沒 = 7,
  
  //選價 = 唉+1
  止 = 0
  
  do {

    if (!總Data.values[id][唉])  止+=1 // 3次 undefined out
    else {
      let 選項價 = 總Data.values[id][唉+1],
      選項價samp = ''
      if (!!選項價) 選項價samp = '<samp >$'+選項價+'</samp>'

      let 選項表 = '\
      <!-- 選項 -->\
      <div class="card shadow mb-4">\
        <div class="card-body">\
          <input type="radio" name="gender" id="Sel_'+唉+'_">\
            <label for="male">\
              <span class="text">'+總Data.values[id][唉]+'</span>'+選項價samp+'\
            </label>\
          <input type="radio" name="gender" id="female">\
            <label for="female">\
              <span class="text">\女</span>\
            </label>\
        </div>\
      </div>\
      '
      $('#購買流程 .row').append(選項表)
    }
    唉+=2  
  } while (止<4)

  沒=唉-8
  /*
  var 選項表 = '\
  <!-- 選項 -->\
    <div class="card shadow mb-4">\
        <div class="card-body">\
            <input type="radio" name="gender" id="male">\
            <label for="male">\
                <span class="text">\男</span>\
            </label>\
            <input type="radio" name="gender" id="female">\
            <label for="female">\
                <span class="text">\女</span>\
            </label>\
        </div>\
  </div>\
  '
  $('#購買流程 .row').append(選項表)
  */


  var 選項頁 = '\
  <a href="#" onclick="開關購買流程(0)" class="btn btn-primary btn-block btn-lg">確認</a>\
  <a onclick="開關購買流程(0)" class="btn btn-block btn-lg">取消</a>\
  '
  $('#購買流程 .row').append(選項頁)



  開關購買流程() // 彈出產品選項


  
  /*
  console.log('產品選項END')

  var 選項頁 = '\
  <h2 class="m-0 font-weight-bold text-primary">嗎?</h2>\
  <a href="#" onclick="開關購買流程(0)" class="btn btn-primary btn-block btn-lg">加購</a>\
  <a onclick="確定訂單()" class="btn btn-block btn-lg">no了</a>\
  '
  $('#購買流程 .row').html(選項頁)
  */

}






















function _買野_火鍋版(動,id) {
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
      // qqqqqqqqqqq 火鍋未完成 qqqqqqqqqqq
    }
  */
}





























// 確定訂單
function 確定訂單() {
  // 轉 確定訂單 內容
  $('#購買流程 h2').text('確定訂單')
  開關購買流程() // 彈出確定訂單
}





















































// 購買流程btn
function 開關購買流程(sel) {
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
  










































/* **********************************************************************
*************************************************************************
****************************************************************** 選模版 
*************************************************************************
*************************************************************************/

let 選版 = '餐廳' 
// 餐廳
// 火鍋