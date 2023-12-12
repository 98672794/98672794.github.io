






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











































/*
  V4 版取得Google Sheets 資料的方法
  https://www.letswrite.tw/google-excel-db/#v4-%e7%89%88%e5%8f%96%e5%be%97-google-sheets-%e8%b3%87%e6%96%99%e7%9a%84%e6%96%b9%e6%b3%95

  使用「發佈到網路」的網址(id)會顯示拒絕跨網域請求的錯誤,使用「共用」的網址(id)就成功了
  https://www.letswrite.tw/google-excel-db/#comment-82

  example
  https://sheets.googleapis.com/v4/spreadsheets/{表單id}/values/{sheet名稱}?alt=json&key={API金鑰}



  https://docs.google.com/spreadsheets/d/1Rr9FSD7oVUDxzoIB7tIsVh3GrDSOHp63bLTGh8oCipg/edit?usp=sharing
  AIzaSyDoWvEleSQeqDFqwXN8z4slV8uhaMNuZAM


  https://sheets.googleapis.com/v4/spreadsheets/1Rr9FSD7oVUDxzoIB7tIsVh3GrDSOHp63bLTGh8oCipg/values/test?alt=json&key=AIzaSyDoWvEleSQeqDFqwXN8z4slV8uhaMNuZAM

  */

// 取Google Sheets 資料
fetch('https://sheets.googleapis.com/v4/spreadsheets/1Rr9FSD7oVUDxzoIB7tIsVh3GrDSOHp63bLTGh8oCipg/values/test?alt=json&key=AIzaSyDoWvEleSQeqDFqwXN8z4slV8uhaMNuZAM')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        
        用G資料(res)
      })































































function 用G資料(data) {
  // 只能使用一種方法來取得資料。例如我用了.json()的方法後，不能再用另一種方法來取得資料，因為該資料已經被處理過了。
  // https://ithelp.ithome.com.tw/articles/10252941

  // 你也可以使用中括号（[]）来访问对象的值：
  // https://www.runoob.com/json/js-json-objects.html
  //console.log(data.values[3][3])
  //data.values[直][橫]

  // data總數
  //console.log(data.values.length)

  // 用data總數计加左類Menu // 0是不用
  for(var count=0 ; count < data.values.length ; count++){
    // for加box
    // https://www.mmxiaowu.com/article/58481d53d4352863efb55443
    _整all類List(count,data)
  }
}

























































// 生成all類List
function _整all類List(數,料) {

  // get分類名
  let 類名 = 料.values[數][0]

  // 加入分類 ////////////////////////////
  if (類名.length > 0) {  //類名空不顯
    
    if (數 === 1){  // 公司名
      var 類List = '\
      <a id="公司名" class="sidebar-brand d-flex align-items-center justify-content-center" href="./">\
        '+類名+'\
      </a>\
      <hr class="sidebar-divider my-0"></hr>\
      '

    }


    // 類名menu
    if (數 > 2){ //不要exl的說明標題
      var 類List = '\
        <!-- '+類名+' -->\
        <li class="nav-item " title="'+類名+'" >\
          <a class="nav-link " href="#'+類名+'" >\
              <span style="font-size: 150%;">'+類名+'</span></a>\
        </li>\
        <hr class="sidebar-divider">\
      '
    }
  }

  $('#all類').append(類List)
  //加入分類END ////////////////////////////






  //加入產品 ////////////////////////////
  if (數 > 2) {  //不要exl的說明標題
    // 加入產品書籤
    if (類名.length > 0){ //類名空不顯
      var 類書籤 = '\
        <hr id="'+類名+'" style="clear:both";>\
        <!-- '+類名+'書籤 -->\
        <div class="d-sm-flex align-items-center justify-content-between mb-4">\
          <h1 class="h3 mb-0 text-gray-800">'+類名+'</h1>\
        </div>\
        '
      $('#all產品').append(類書籤)
    }

    // 加入每產品
    let 品名 = 料.values[數][1].replace(/\s*/g,"") // 刪空
    let NoIMG = "'aki/NoIMG.jpg'" // monica : How to display a default image if the img tag fails to load an image in JavaScript?
    let dot = "'" // 用於html的 ' 
    var 每產品 = '\
      <div id="'+品名+'BuyNmb" class="col-xl-3 col-md-6 mb-4" style="float: left;" >\
        <span class="btn btn-warning btn-danger 己點" style="display: none;">0</span>\
        <div class="card border-left-primary shadow h-100 py-2">\
          <div class="card-body">\
            <div class="row no-gutters align-items-center">\
              <div class="col mr-2">\
                <div class=" font-weight-bold text-primary text-uppercase mb-1">'+品名+'</div>\
                <div class="h5 mb-0 font-weight-bold text-gray-800">$ '+ 料.values[數][2]+'</div>\
                <button type="button" class="btn btn-outline-primary" onclick="買野(1,'+ dot +品名+ dot +')">  +  </button>\
                <button type="button" class="btn btn-outline-secondary" onclick="買野(0,'+ dot +品名 + dot +')" style="display: none;">  -  </button>\
              </div>\
              <div class="col-auto" >\
                <img src="'+ 料.values[數][3]+'" alt="'+品名+'" style="height: 100px;width: auto;" onerror="this.onerror=null;this.src='+NoIMG+'">\
              </div>\
            </div>\
          </div>\
        </div>\
      </div>\
    '
    $('#all產品').append(每產品)
    // +icon pages-account-settings-connections.html
    // ui-badges.html


    // +1 https://codepen.io/98672794/pen/QWYYWGO









  }
  //加入產品END ////////////////////////////

}























































// 買野btn動作
function 買野(動,id) {
  
  var 真id = '#'+id+'BuyNmb' // 合 已點 真id
  var 原 = $(真id+' span').text() // 取原價
  var 新 = 原
  console.log(真id,'=',原)

  // 加1
  if (動>0){
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
    $(真id+' button').eq(1).hide()
  }
  else{ 
    $(真id+' span').show()
    $(真id+' button').eq(1).show()  
  }

}













