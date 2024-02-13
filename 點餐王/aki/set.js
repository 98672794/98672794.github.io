



/*
* aki
* 202402111545
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



//let 總Data
function _客setting頁(客Url,客api){

  // get客data
  let GEcl = 查客[0]+_0x1731ba(客api)+查客[1]+'d'+查客[2]+_0x1731ba(api)
    , url = (location.href).split('/set')[0] + '?' +客Url+ '?' 
  
  //console.log('url',url) 
  if (MOK) console.log('user的dataUlr',GEcl,'\nurl',url)

  // make user data box
  _data入網_整div('user頁','html','#set_page',0) 
  _data入網_整div('settingBox','append','#set_page','') 



  // 用G資料
  fetch(GEcl).then(res => res.json()).then(res => {

    // 公司資料page
    let 網lv     = res.values[0][0]    // aki set
      // 公司資料
      , 公司名   = res.values[docsGoogle開始數][0]
      , 公司logo = res.values[docsGoogle開始數][4]
      , 公司ws   = res.values[docsGoogle開始數][1]
      , ws來詢字 = res.values[docsGoogle開始數][2]
      
      // 外觀美化
      , 網站按鍵色   = res.values[1][4]
      , 網主色 = res.values[1][5]
      , 網副色   = res.values[1][6]
      , 字主色 = res.values[1][7]
      , 字副色   = res.values[1][8]

      , 圖高 = res.values[1][9]
      , 圖高mx   = res.values[1][10]
      , 圖橫 = res.values[1][11]
      , 圖橫mx   = res.values[1][12] //13

    _data入網_整div(
      '公司資料page','append','#settingBox_B'
      ,[客Url,網lv,公司名,公司logo,公司ws,ws來詢字,網站按鍵色,網主色,網副色,字主色,字副色,圖高,圖高mx,圖橫,圖橫mx]
    )


    // 產品分類page
    for(var 數=docsGoogle開始數+2 ; 數 < res.values.length ; 數++){
      let 產品分類名 = res.values[數][0]
        , 加購流程號 = res.values[數][1]
      if (!!產品分類名) _data入網_整div('產品分類page','prepend','#產品分類List',[產品分類名,加購流程號])
    }


    // 產品資料page
    let 產品分類名2
    for(var 數=docsGoogle開始數+2 ; 數 < res.values.length ; 數++){

      if (!!res.values[數][0]) 產品分類名2 = res.values[數][0]  // 如有取 產品分類名

      let 產品名 = res.values[數][4]
        , 產品價錢 = res.values[數][5]
        , 產品圖 = res.values[數][6]

      if (!!產品名) _data入網_整div('產品資料page','prepend','#產品資料List',[產品名,產品價錢,產品圖,產品分類名2])
    }




















    // 收款方式page
    let 止=0
    for(var 支付方式開始數=9 ; 止 < 2 ; 支付方式開始數++){ // loop找支付方式
      let 支付方式名 = res.values[2][支付方式開始數]
        , 支付方式料 = res.values[3][支付方式開始數]
      if (!!支付方式名) _data入網_整div('收款方式page','prepend','#收款方式List',[支付方式名,支付方式料])

      if (!支付方式名) 止++ // 冇名1次out
    }



  })

  // 最後背景加客網
  $('#user頁').attr('src', url)



}














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



var dot = "'"
function _data入網_整div(sel,run,box_name,data) {
  if (MOK) console.log("_data入網_整div('類名menu','append','#all類',[類名])")

  let user頁 = '<embed id="user頁" type="text/x-scriptlet" src="" width="100%" height="100%">'

    , settingBox = '\
    <div id="settingBox_">\
      <h5 onclick="settingBox_toggle()"><i class="fa fa-wrench" aria-hidden="true"></i></h5>\
      \
      <div id="settingBox_B">\
      \
        <div id="google_translate_element2" style="margin-top: 20px; height: 25px;overflow: hidden;">\
          <script type="text/javascript">\
            function googleTranslateElementInit() {\
              new google.translate.TranslateElement({pageLanguage: "cn"}, "google_translate_element2");\
            }\
          </script>\
          <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>\
        </div>\
        \
      </div>\
      \
      <ul id="settingMenu">\
        <li onclick="settingMenuBtn(1)" style="background: rgba(213, 0, 0, 0.3);">公司資料</li>\
        <li onclick="settingMenuBtn(2)" style="background: rgba(170, 0, 255, 0.3);">產品分類</li>\
        <li onclick="settingMenuBtn(3)" style="background: rgba(245, 127, 23, 0.3);">產品資料</li>\
        <li onclick="settingMenuBtn(4)" style="background: rgba(174, 234, 0, 0.3);">收款方式</li>\
        <li onclick="settingMenuBtn(5)" style="background: rgba(255, 214, 0, 0.3);">流水帳目</li>\
        <li onclick="" style="background: rgba(27, 94, 32, 0.3);">保存</li>\
      </ul>\
      \
    </div>\
    '
  
    , 公司資料page = '\
          <div id="公司資料page" class="row" >\
            <div class="col-md-6" >\
              <div class="card mb-4">\
                <h4 style="background: rgba(255, 255, 255, .3);" class="card-header">'+data[0]+'</h4>\
                <div class="card-body">\
                  <div class="mb-3">\
                    <label for="網lv" class="form-label">店主等級</label>\
                    <input\
                      class="form-control"\
                      type="text"\
                      id="網lv"\
                      placeholder="'+data[1]+'"\
                      readonly\
                    />\
                  </div>\
                  <div class="mb-3">\
                    <label for="公司名稱" class="form-label">公司名稱</label>\
                    <input\
                      title="公司名稱"\
                      type="公司名稱"\
                      class="form-control"\
                      id="公司名稱"\
                      placeholder="'+data[2]+'"\
                      value="'+data[2]+'"\
                    />\
                  </div>\
                  <div class="mb-3">\
                    <label for="公司logo" class="form-label">公司logo</label>\
                    <img id="公司logo_img" style="height: 75px; width: 75px; margin: auto;" src="'+data[3]+'">\
                    <input title="公司logo" class="form-control" type="file" id="公司logo" /> qqq \
                  </div>\
                  <div class="mb-3">\
                    <label for="公司ws" class="form-label">公司Whatsapp號</label>\
                    <input\
                      title="公司Whatsapp號"\
                      type="text"\
                      class="form-control"\
                      id="公司Whatsapp號"\
                      placeholder="'+data[4]+'"\
                      value="'+data[4]+'"\
                    />\
                  </div>\
                  <div class="mb-3">\
                    <label for="ws來詢字" class="form-label">客戶Whatsapp店主的首句內容</label>\
                    <textarea class="form-control" id="ws來詢字" rows="3" placeholder="'+data[5]+'">'+data[5]+'</textarea>\
                  </div>\
                  <hr>\
                  <div class="mb-3">\
                    店舖枱號 qqq \
                  </div>\
                </div>\
              </div>\
            </div>\
            \
            \
            <div class="col-md-6">\
              <div class="card mb-4">\
                <div class="card-body">\
                  \
                  <div class="mb-3">\
                    <label for="網站按鍵色" class="form-label">網站按鍵色</label>\
                    <select\
                      class="form-select"\
                      id="網站按鍵色"\
                    >\
                      <option value="info">淺藍</option>\
                      <option value="primary">藍</option>\
                      <option value="success">青</option>\
                      <option value="warning">黃</option>\
                      <option value="danger">紅</option>\
                      <option value="secondary">灰</option>\
                      <option value="light">黑</option>\
                    </select>\
                    <a onclick="Change網站按鍵色()" id="test網站按鍵色" class="btn btn-'+data[6]+'" >查看</a>\
                  </div>\
                  <div class="mb-3 row">\
                    <label for="html5-color-input" class="col-md-2 col-form-label">色版</label>\
                    <div class="col-md-10">\
                      <input class="form-control" type="color" value="#666EE8" id="html5-color-input" />\
                    </div>\
                  </div>\
                  <div class="mb-3">\
                    <label for="網主色" class="form-label">網主色</label>\
                    <input\
                      title="網主色"\
                      type="text"\
                      class="form-control"\
                      id="網主色"\
                      placeholder="'+data[7]+'"\
                      value="'+data[7]+'"\
                    />\
                  </div>\
                  <div class="mb-3">\
                    <label for="網副色" class="form-label">網副色</label>\
                    <input\
                      title="網副色"\
                      type="text"\
                      class="form-control"\
                      id="網副色"\
                      placeholder="'+data[8]+'"\
                      value="'+data[8]+'"\
                    />\
                  </div>\
                  <div class="mb-3">\
                    <label for="字主色" class="form-label">字主色</label>\
                    <input\
                      title="字主色"\
                      type="text"\
                      class="form-control"\
                      id="字主色"\
                      placeholder="'+data[9]+'"\
                      value="'+data[9]+'"\
                    />\
                  </div>\
                  <div class="mb-3">\
                    <label for="字副色" class="form-label">字副色</label>\
                    <input\
                      title="字副色"\
                      type="text"\
                      class="form-control"\
                      id="字副色"\
                      placeholder="'+data[10]+'"\
                      value="'+data[10]+'"\
                    />\
                  </div>\
                  <hr>\
                  <div class="mb-3">\
                    <label for="圖片最小高度" class="form-label">圖片最小高度</label>\
                    <input\
                      title="圖片最小高度"\
                      type="text"\
                      class="form-control"\
                      id="圖片最小高度"\
                      placeholder="'+data[11]+'"\
                      value="'+data[11]+'"\
                    />\
                  </div>\
                  <div class="mb-3">\
                    <label for="圖片最大高度" class="form-label">圖片最大高度</label>\
                    <input\
                      title="圖片最大高度"\
                      type="text"\
                      class="form-control"\
                      id="圖片最大高度"\
                      placeholder="'+data[12]+'"\
                      value="'+data[12]+'"\
                    />\
                  </div>\
                  <div class="mb-3">\
                    <label for="圖片最小寬度" class="form-label">圖片最小寬度</label>\
                    <input\
                      title="圖片最小寬度"\
                      type="text"\
                      class="form-control"\
                      id="圖片最小寬度"\
                      placeholder="'+data[13]+'"\
                      value="'+data[13]+'"\
                    />\
                  </div>\
                  <div class="mb-3">\
                    <label for="圖片最大寬度" class="form-label">圖片最大寬度</label>\
                    <input\
                      title="圖片最大寬度"\
                      type="text"\
                      class="form-control"\
                      id="圖片最大寬度"\
                      placeholder="'+data[14]+'"\
                      value="'+data[14]+'"\
                    />\
                  </div>\
                  \
                </div>\
              </div>\
            </div>\
          </div>\
          \
          \
          <div id="收款方式page"  class="row" >\
            <div class="col-md-6" style="margin: auto">\
              <div class="card mb-4">\
              <h4 style="background: rgba(255, 255, 255, .3);" class="card-header">收款方式</h4>\
                <div id="收款方式List" class="card-body">\
                  \
                  <div class="mb-3">\
                    <a onclick="新增收款方式()" class="btn btn-'+data[6]+'" >新增收款方式</a>\
                  </div>\
                  \
                </div>\
              </div>\
            </div>\
          </div>\
          \
          \
          <div id="產品分類page"  class="row" >\
            <div class="col-md-6" style="margin: auto">\
              <div class="card mb-4">\
              <h4 style="background: rgba(255, 255, 255, .3);" class="card-header">產品分類</h4>\
                <div id="產品分類List" class="card-body">\
                  \
                  <div class="mb-3">\
                    <a onclick="新增產品分類()" class="btn btn-'+data[6]+'" >新增產品分類</a>\
                  </div>\
                  \
                </div>\
              </div>\
            </div>\
          </div>\
          \
          \
          <div id="產品資料page"  class="row" >\
            \
            <div class="col-md-12" style="margin: auto">\
              <div class="card mb-4">\
                  <h4 style="background: rgba(255, 255, 255, .3);" class="card-header">產品資料</h4>\
              </div>\
            </div>\
            \
            <div id="產品資料List"></div>\
            \
            <hr style="clear:both; width: 100%;">\
            <div class="col-md-12" style="margin: auto">\
                  <a onclick="新增產品()" class="btn btn-'+data[6]+'" >新增產品</a>\
            </div>\
            \
          </div>\
          \
          \
    '


    
    , 產品分類page = '\
                  <div class="mb-3">\
                    <input\
                      title="產品分類名"\
                      type="text"\
                      class="form-control"\
                      id="產品分類名"\
                      placeholder="'+data[0]+'"\
                      value="'+data[0]+'"\
                    />\
                    <label for="加購順序號" class="form-label">加購順序號</label>\
                    <input\
                      title="加購順序號"\
                      type="text"\
                      class="form-control"\
                      id="加購順序號"\
                      placeholder="'+data[1]+'"\
                      value="'+data[1]+'"\
                    />\
                  </div><hr>\
    '

    , 產品資料page = '\
    <div class="col-md-6" style="margin: auto; float: left; " >\
    <div class="card mb-4">\
                  <div class="mb-3">\
                  <p title="產品分類名2">'+data[3]+'</p>\
                    <input\
                      title="產品名"\
                      type="text"\
                      class="form-control"\
                      id="產品名"\
                      placeholder="'+data[0]+'"\
                      value="'+data[0]+'"\
                    />\
                    <img id="產品圖_img" style="height: 75px; width: 75px; margin: auto;" src="'+data[2]+'"  onerror="this.onerror=null;this.src='+NoIMG+'">\
                    <input title="產品圖" class="form-control" type="file" id="產品圖" />\
                    <label for="產品價錢" class="form-label">產品價錢 / 文章內容</label>\
                    <input\
                      title="產品價錢"\
                      type="text"\
                      class="form-control"\
                      id="產品價錢"\
                      placeholder="'+data[1]+'"\
                      value="'+data[1]+'"\
                    />\
                  </div>\
                  </div></div>\
    '





    , 收款方式page = '\
                  <div class="mb-3">\
                    <input\
                      title="收款方式名"\
                      type="text"\
                      class="form-control"\
                      id="收款方式名"\
                      placeholder="'+data[0]+'"\
                      value="'+data[0]+'"\
                    />\
                    <input\
                      title="收款方式code"\
                      type="text"\
                      class="form-control"\
                      id="收款方式code"\
                      placeholder="'+data[1]+'"\
                      value="'+data[1]+'"\
                    />\
                  </div>\
    '






  $(box_name)[run]([eval(sel)])
}































/* ********************************************************************************************************
***********************************************************************************************************
Login Flow

      :::        ::::::::       ::::::::       :::::::::::       ::::    :::        ::::::::::       :::        ::::::::     :::       :::
     :+:       :+:    :+:     :+:    :+:          :+:           :+:+:   :+:        :+:              :+:       :+:    :+:    :+:       :+:
    +:+       +:+    +:+     +:+                 +:+           :+:+:+  +:+        +:+              +:+       +:+    +:+    +:+       +:+
   +#+       +#+    +:+     :#:                 +#+           +#+ +:+ +#+        :#::+::#         +#+       +#+    +:+    +#+  +:+  +#+
  +#+       +#+    +#+     +#+   +#+#          +#+           +#+  +#+#+#        +#+              +#+       +#+    +#+    +#+ +#+#+ +#+
 #+#       #+#    #+#     #+#    #+#          #+#           #+#   #+#+#        #+#              #+#       #+#    #+#     #+#+# #+#+#
########## ########       ########       ###########       ###    ####        ###              ########## ########       ###   ###

***********************************************************************************************************
***********************************************************************************************************/






function Login() {
  let id =$( "#UserID" ).val()
    , pw =$( "#UserPW" ).val()
    // 取明文 轉sha256
    , id1 = escape(_0x5569ds(calculateHash(id).toString(CryptoJS.enc.Hex)))
    , pw1 = escape(_0x5569ds(calculateHash(pw).toString(CryptoJS.enc.Hex)))

  //console.log('id1=',id1,'\npw1=',pw1)
  $('#pwWorg').text('')

  fetch(GEcss222l).then(r2es => r2es.json()).then(r2es => {

    for(var 數=0;數 < r2es.values.length ; 數++){           // 循環表找客Id

      // ad1pw
      if (id1 === r2es.values[數][0] && pw1 === r2es.values[數][id位]) {  // IdPw岩
        $('#pwWorg').text(id+'歡迎您!!')

        // SaveID to localStorage
        if(SaveID.checked) localStorage.setItem("id",[id,pw])

        // get 客api
        _客setting頁(id,r2es.values[數][1])
        

        if (MOK) console.log('id1=',id1,'\npw1=',pw1,'\n有有數',數)
        //數      = r2es.values.length                      // 終止循環
      }

      // ad2pw qqq 
      else $('#pwWorg').text('找不到用戶!!')
    }

  })
}

// 刪除登入記錄
function ForgotID() {
  localStorage.removeItem('id')
  $( "#UserID" ).val('')
  $( "#UserPW" ).val('')
  

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

// 使用 jQuery 切换宽度 https://stackoverflow.com/a/10781670
function settingBox_toggle(){
  $('#settingBox_').toggleClass('see')
  $('#settingMenu').toggleClass('see')
  $('#user頁').toggleClass('see') // 模糊背景
}





// settingBox btn run 

// settingMenu btn
function settingMenuBtn(sel){
  let 公p = '#公司資料page'
    , 類p = '#產品分類page'
    , 產p = '#產品資料page'
    , 收p = '#收款方式page'

    
  if (sel === 1) {$('#settingBox_B').css('background', 'rgba(213, 0, 0, 0.3)');$(公p).css('display', 'flex');$(類p+','+產p+','+收p).css('display', 'none')}
  if (sel === 2) {$('#settingBox_B').css('background', 'rgba(170, 0, 255, 0.3)');$(類p).css('display', 'flex');$(公p+','+產p+','+收p).css('display', 'none')}
  if (sel === 3) {$('#settingBox_B').css('background', 'rgba(245, 127, 23, 0.3)');$(產p).css('display', 'block');$(類p+','+收p+','+公p).css('display', 'none')}
  if (sel === 4) {$('#settingBox_B').css('background', 'rgba(174, 234, 0, 0.3)');$(收p).css('display', 'block');$(類p+','+公p+','+產p).css('display', 'none')}

  if (sel === 5) {$('#settingBox_B').css('background', 'rgba(255, 214, 0, 0.3)')}
}







  
// 當選項改變時觸發事件 
function Change網站按鍵色(){
  let 網站按鍵色31 = $('#網站按鍵色').val();
  console.log(網站按鍵色31);
  $('#test網站按鍵色').attr('class', 'btn btn-'+網站按鍵色31)
  $('#test網站按鍵色').text(網站按鍵色31)
}







/* *****************************************************************************************
********************************************************************************************
開始

      ::::::::   :::::::::::           :::        :::::::::   :::::::::::
    :+:    :+:      :+:             :+: :+:      :+:    :+:      :+:
   +:+             +:+            +:+   +:+     +:+    +:+      +:+
  +#++:++#++      +#+           +#++:++#++:    +#++:++#:       +#+
        +#+      +#+           +#+     +#+    +#+    +#+      +#+
#+#    #+#      #+#           #+#     #+#    #+#    #+#      #+#
########       ###           ###     ###    ###    ###      ###

********************************************************************************************
********************************************************************************************/




// 自動input id
if (localStorage.getItem('id')){
  $( "#UserID" ).val(localStorage.getItem('id').split(',')[0])
  $( "#UserPW" ).val(localStorage.getItem('id').split(',')[1])
}

// 清除input输入框的历史记录 https://blog.csdn.net/qq_36135335/article/details/82743643
$("#UserID").attr('autocomplete', 'off')
$("#UserPW").attr('autocomplete', 'off')



