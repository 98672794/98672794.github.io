



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
  _admin編輯(GEcl,客Url)




  // _流水帳目(流水帳目)

  // _保存(保存)

  // 最後背景加客網
  $('#user頁').attr('src', url)

}















let all枱號 = []
function _admin編輯(data,Url) {  
  let settingMenuSelLV = 'settingMenuSel編+settingMenuSel店+settingMenuSel帳'

  // 用G資料
  fetch(data).then(res => res.json()).then(res => {


    // $$$$$$$$ 框架 $$$$$$$$
    let 網站按鍵色   = res.values[1][4]
    _data入網_整div('settingBox','append','#set_page',網站按鍵色) 
    // $$$$$$$$  ///  $$$$$$$$



    // $$$$$$$$ 各lv按鍵 $$$$$$$$
    // 小編
    if (ADminLV === 2) {
      settingMenuSelLV = 'settingMenuSel編'
      $('#settingMenu').toggleClass('a2')
    }
    // 店員
    if (ADminLV === 3) {
      settingMenuSelLV = 'settingMenuSel店'
      $('#settingMenu').toggleClass('a4')
    }
    // 帳房
    if (ADminLV === 4) {
      settingMenuSelLV = 'settingMenuSel帳'
      $('#settingMenu').toggleClass('a3')
    }
    _data入網_整div(settingMenuSelLV,'append','#settingMenu',0)
     // $$$$$$$$  ///  $$$$$$$$



    // $$$$$$$$ 店舖枱號 $$$$$$$$

    // 東主 / 小編 / 店員 可見
    if (ADminLV > 3 )  return 

    let 枱止=0

    // loop找店舖枱號
    for(var 枱號開始數=14 ; 枱止 < 2 ; 枱號開始數++){ 
      let 店舖枱號 = res.values[0][枱號開始數]
        , 枱號帳單 = res.values[1][枱號開始數]
        , 枱號標頭
        , 純枱號   = 店舖枱號
        , 枱號尾
        , 該海低
        , 計=0
        , 枱data

      if (!!店舖枱號 && !!枱號帳單) {
        // 分枱號標頭 https://chateverywhere.app?shareable_conversation_id=a14fde3d-5613-4e1a-a4c4-647bac53b41e
        枱號標頭 = 店舖枱號.replace(/[0-9]/g, '').split('-')[0] // 取純枱號標頭

        if (枱號標頭) 純枱號 = 店舖枱號.split(枱號標頭)[1]  // 如有枱號標頭 = 刪枱號標頭 = 取純枱號

        // make 枱號 list
        枱號尾 = ~~純枱號.split('-')[1]+1
        // loop出每台
        for(var 枱號頭=純枱號.split('-')[0]; 枱號頭 < 枱號尾; 枱號頭++){ 
          let 真枱號 = 枱號標頭+枱號頭
          
          // 再loop出每台的表
          該海低 = 枱號帳單.split(',')[計]
          計++
          //console.log("真枱號=",真枱號,"該海低=",該海低)
          枱data = '<a title="'+該海低+'" class=" btn-circle btn-'+網站按鍵色+'" style="margin: 1%;cursor: pointer;">'+真枱號+'</a>'
          all枱號.push(枱data)
        }

        // 標頭不同分用
        all枱號.push('<hr>')

      }
      if (!店舖枱號) 枱止++ // 冇名2次out
    }
    all枱號 = all枱號.toString().replace(/,/g,"") // https://blog.csdn.net/haibo0668/article/details/80926927    
    //all枱號 = all枱號.replace(/,/g,"")

    _data入網_整div('共用page','append','#settingBox_B',[網站按鍵色,'店員用'])
    _data入網_整div('萬','prepend','#店員用List',all枱號)  // qqqqqqqqqqqqqqqqqqqqqqqqq  新增店員用() 
     // $$$$$$$$  ///  $$$$$$$$



    // $$$$$$$$ 公司資料page $$$$$$$$

    // 東主 / 小編 可見
    if (ADminLV > 2 )  return

    let 網lv     = res.values[0][0]    // aki set
      // 公司資料
      , 公司名   = res.values[docsGoogle開始數][0]
      , 公司logo = res.values[docsGoogle開始數][4]
      , 公司ws   = res.values[docsGoogle開始數][1]
      , ws來詢字 = res.values[docsGoogle開始數][2]
       // $$$$$$$$  ///  $$$$$$$$



      // $$$$$$$$  外觀美化 $$$$$$$$
      , 網主色 = res.values[1][5]
      , 網副色   = res.values[1][6]
      , 字主色 = res.values[1][7]
      , 字副色   = res.values[1][8]
      , 圖高 = res.values[1][9]
      , 圖高mx   = res.values[1][10]
      , 圖橫 = res.values[1][11]
      , 圖橫mx   = res.values[1][12] //13
      // $$$$$$$$  ///  $$$$$$$$

  

    // $$$$$$$$ 各頁用框架 $$$$$$$$
    _data入網_整div( 
      '公司資料page','append','#settingBox_B'
      ,[Url,網lv,公司名,公司logo,公司ws,ws來詢字,網站按鍵色,網主色,網副色,字主色,字副色,圖高,圖高mx,圖橫,圖橫mx,all枱號] 
    )
    _data入網_整div('共用page','append','#settingBox_B',[網站按鍵色,'產品分類'])
    _data入網_整div('共用page','append','#settingBox_B',[網站按鍵色,'產品資料'])
    _data入網_整div('共用page','append','#settingBox_B',[網站按鍵色,'收款方式'])
     // $$$$$$$$  ///  $$$$$$$$



    // $$$$$$$$ 產品分類page $$$$$$$$
    let all產品分類 = []
    for(var 數=docsGoogle開始數+2 ; 數 < res.values.length ; 數++){
      let 產品分類名 = res.values[數][0]
        , 加購流程號 = res.values[數][1]
      if (!!產品分類名) {
        _data入網_整div('產品分類page','prepend','#產品分類List',[產品分類名,加購流程號])
        all產品分類.push(產品分類名)
      }
    }
    // $$$$$$$$  ///  $$$$$$$$



    // $$$$$$$$ 產品資料page $$$$$$$$
    let 產轉類 = ''
    for(var 數=docsGoogle開始數+2 ; 數 < res.values.length ; 數++){
      let 產品名 = res.values[數][4]
      , 產品價錢 = res.values[數][5]
      , 產品圖 = res.values[數][6]
      , 換行 = 單品option = ''
      if (!!res.values[數][0]) {  // 如有取 產品分類名
        all產品分類.unshift(all產品分類.splice(all產品分類.indexOf(res.values[數][0]), 1)[0]) // Monica js list 移到  第一位
        for(var 唉for類=0 ; 唉for類 < all產品分類.length ; 唉for類++){單品option = 單品option + '<option value="'+all產品分類[唉for類]+'">'+all產品分類[唉for類]+'</option>'}
        產轉類 = '產品分類 = <select class="form-select" id="'+產品名+'轉類">'+單品option+'</select>'
        換行 = '<hr style="clear:both; width: 100%;">'
      }
      if (!!產品名) _data入網_整div('產品資料page','prepend','#產品資料List',[產品名,產品價錢,產品圖,換行,產轉類])
    }
    // $$$$$$$$  ///  $$$$$$$$



    // $$$$$$$$ 收款方式page $$$$$$$$
    let 止=0
    for(var 支付方式開始數=9 ; 止 < 2 ; 支付方式開始數++){ // loop找支付方式
      let 支付方式名 = res.values[2][支付方式開始數]
        , 支付方式料 = res.values[3][支付方式開始數]
      if (!!支付方式名) _data入網_整div('收款方式page','prepend','#收款方式List',[支付方式名,支付方式料])
      if (!支付方式名) 止++ // 冇名2次out
    }
    // $$$$$$$$  ///  $$$$$$$$



  })
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

function _data入網_整div(sel,run,box_name,data) {
  if (MOK) console.log("_data入網_整div('類名menu','append','#all類',[類名])")

      // 低主網 
  let user頁 = '<embed id="user頁" type="text/x-scriptlet" src="" width="100%" height="100%">'
      // admin頁框架
    , settingBox = '\
    <div id="settingBox_">\
      <h5 onclick="settingBox_toggle()"><i class="fa fa-wrench" aria-hidden="true"></i></h5>\
      \
      <div id="settingBox_B">\
        <!-- 公司資料page -->\
        <!-- 共用page -->\
        <div id="google_translate_element2" style="margin-top: 20px; height: 25px;overflow: hidden;">\
          <script type="text/javascript">\
            function googleTranslateElementInit() {\
              new google.translate.TranslateElement({pageLanguage: "cn"}, "google_translate_element2");\
            }\
          </script>\
          <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>\
        </div>\
          \
          \
      </div>\
      <ul id="settingMenu"><!-- settingMenuSel編 --></ul>\
    </div>\
  '
      // 各頁用框架
    , 共用page = '\
    <div id="'+data[1]+'page"  class="row" >\
      \
      <div class="col-md-12" style="margin: auto">\
        <div class="card mb-4">\
          <h4 style="background: rgba(255, 255, 255, .5);" class="card-header">'+data[1]+'</h4>\
          <a onclick="新增'+data[1]+'()" class="btn btn-'+data[0]+'" >新增'+data[1]+'</a>\
        </div>\
      </div>\
      \
      <div id="'+data[1]+'List" class="col-md-12" style="margin: auto"></div>\
      \
      <hr style="clear:both; width: 100%;">\
      <div class="col-md-12" style="margin: auto">\
        <a onclick="新增'+data[1]+'()" class="btn btn-'+data[0]+'" >新增'+data[1]+'</a>\
      </div>\
      \
    </div>\
  '
    // 各lv按鍵
    , settingMenuSel編 = '\
    <li onclick="settingMenuBtn(1)" style="background: rgba(213, 0, 0, 0.3);">公司資料</li>\
    <li onclick="settingMenuBtn(2)" style="background: rgba(170, 0, 255, 0.3);">產品分類</li>\
    <li onclick="settingMenuBtn(3)" style="background: rgba(245, 127, 23, 0.3);">產品資料</li>\
    <li onclick="settingMenuBtn(4)" style="background: rgba(174, 234, 0, 0.3);">收款方式</li>\
    <li onclick="" style="background: rgba(27, 94, 32, 0.3);">保存</li>\
  '
    , settingMenuSel店 = '\
    <li onclick="settingMenuBtn(6)" style="background: rgb(128, 222, 234, .3);">廚部</li>\
    <li onclick="settingMenuBtn(7)" style="background: rgb(205, 220, 57,.5);">廳面</li>\
    <li onclick="settingMenuBtn(8)" style="background: rgb(98, 0, 234, .3);">收銀</li>\
  '
    , settingMenuSel帳 = '<li onclick="settingMenuBtn(9)" style="background: rgba(255, 214, 0, 0.3);">流水帳目</li>'    


    // 各page      
    , 公司資料page = '\
    <div id="公司資料page" class="row" >\
      \
      \
      <div class="col-md-6" >\
        <div class="card mb-4" style="background: rgba(0, 0, 0, .5);">\
          \
          <h4 style="background: rgba(255, 255, 255, .3);" class="card-header">'+data[0]+'</h4>\
          \
          <div class="card-body">\
            \
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
            \
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
            \
            <div class="mb-3">\
              <label for="公司logo" class="form-label">公司logo</label>\
              <img id="公司logo_img" style="height: 75px; width: 75px; margin: auto;" src="'+data[3]+'">\
              <input title="公司logo" class="form-control" type="file" id="公司logo" /> qqq \
            </div>\
            \
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
            \
            <div class="mb-3">\
              <label for="ws來詢字" class="form-label">客戶Whatsapp店主的首句內容</label>\
              <textarea class="form-control" id="ws來詢字" rows="3" placeholder="'+data[5]+'">'+data[5]+'</textarea>\
            </div>\
            \
            \
          </div>\
        </div>\
      </div>\
      \
      \
      <div class="col-md-6">\
        <div class="card mb-4" style="background: rgba(0, 0, 0, .5);">\
          <div class="card-body">\
            \
            <div id="店舖枱號編" class="mb-3">\
            <label class="form-label">店舖枱號</label><br>\
              '+data[15]+'\
              <label for="枱號編" class="form-label">增加店舖枱數量</label><br>\
              <input\
                title="枱號編"\
                type="枱號編"\
                class="form-control"\
                id="枱號編"\
                placeholder="a1-99"\
                value=""\
              />\
            </div>\
            \
          </div>\
        </div>\
      </div>\
      \
      \
      <div class="col-md-6">\
        <div class="card mb-4" style="background: rgba(0, 0, 0, .5);">\
          <div class="card-body">\
            \
            <div class="mb-3">\
              <select\
                class="form-select"\
                id="網站按鍵色"\
              >\
                <option value="none" selected disabled hidden>網站按鍵色</option>\
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
            \
            <div class="mb-3 row">\
              <label for="html5-color-input" class="col-md-2 col-form-label">色版</label>\
              <div class="col-md-10">\
                <input class="form-control" type="color" value="#666EE8" id="html5-color-input" />\
              </div>\
            </div>\
            \
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
            \
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
            \
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
            \
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
          </div>\
          </div>\
        </div>\
        \
        \
        <div class="col-md-6">\
          <div class="card mb-4" style="background: rgba(0, 0, 0, .5);">\
            <div class="card-body">\
              \
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
              \
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
              \
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
              \
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
        \
        \
    </div>\
    '
    , 產品分類page = '\
    <div class="col-md-6" style="margin: auto; float: left; " >\
        <div class="card mb-4" style="background: rgba(0, 0, 0, .5);">\
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
            </div>\
        </div>\
    </div>\
    '
    , 產品資料page = '\
      <div class="col-md-6" style="margin: auto; float: left; " >\
        <div class="card mb-4" style="background: rgba(0, 0, 0, .5);">\
          <div class="mb-3">\
            '+data[4]+'\
            <input\
              title="產品 / 文章名"\
              type="text"\
              class="form-control"\
              id="產品名"\
              placeholder="'+data[0]+'"\
              value="'+data[0]+'"\
            />\
            <img id="產品圖_img" style="height: 75px; width: 75px; margin: auto;" src="'+data[2]+'"  onerror="this.onerror=null;this.src='+NoIMG+'">\
            <input title="產品 / 文章圖" class="form-control" type="file" id="產品圖" />\
            <label for="產品價錢" class="form-label">產品價錢 / 文章內容</label>\
            <input\
              title="產品價錢 / 文章內容"\
              type="text"\
              class="form-control"\
              id="產品價錢"\
              placeholder="'+data[1]+'"\
              value="'+data[1]+'"\
            />\
          </div>\
        </div>\
      </div>\
      '+data[3]+'\
    '
    , 收款方式page = '\
    <div class="col-md-6" style="margin: auto; float: left; " >\
      <div class="card mb-4" style="background: rgba(0, 0, 0, .5);">\
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
      </div>\
    </div>\
    '



    , 萬 = data
  // ("_data入網_整div('類名menu','append','#all類',[類名])")
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
    , 如數

  //console.log('id1=',id1,'\npw1=',pw1)
  $('#pwWorg').text('')

  // 循環表找客Id
  fetch(GEcss222l).then(r2es => r2es.json()).then(r2es => {

    // ad1pw 東主
    for(var 數=0;數 < r2es.values.length ; 數++)  if (id1 === r2es.values[數][0] && pw1 === r2es.values[數][id位]) { ADminLV = ~~1; 如數 = 數; }

    // ad2pw 小編
    if(!ADminLV) {
      for(var 數=0;數 < r2es.values.length ; 數++) if (id1 === r2es.values[數][0] && pw1 === r2es.values[數][id位+1]) { ADminLV = ~~2; 如數 = 數; }
    }

    // ad3pw 店員
    if(!ADminLV) {
      for(var 數=0;數 < r2es.values.length ; 數++) if (id1 === r2es.values[數][0] && pw1 === r2es.values[數][id位+2]) { ADminLV = ~~3; 如數 = 數; }
    }

    // ad4pw 帳房
    if(!ADminLV) {
      for(var 數=0;數 < r2es.values.length ; 數++) if (id1 === r2es.values[數][0] && pw1 === r2es.values[數][id位+3]) { ADminLV = ~~4; 如數 = 數; }
    }

    // ad5pw ??
    if(!ADminLV) {
      for(var 數=0;數 < r2es.values.length ; 數++) if (id1 === r2es.values[數][0] && pw1 === r2es.values[數][id位+4]) { ADminLV = ~~-1; 如數 = 數; }
    }

    if(!ADminLV) $('#pwWorg').text('找不到用戶!!')
    else{

      // SaveID to localStorage
      if(SaveID.checked) localStorage.setItem("id",[id,pw])

      // get 客api
      _客setting頁(id,r2es.values[如數][1])

      if (MOK) {
        console.log('id1=',id1,'\npw1=',pw1,'\n有有數',數);
        console.log('如數=',如數);
        console.log('ADminLV=',ADminLV)
      }
      
      $('#pwWorg').text(id+'歡迎您!!')
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
    , 店p = '#店員用page'

    
  if (sel === 1) {$('#settingBox_B').css('background', 'rgba(213, 0, 0, 0.3)');$(公p).css('display', 'flex');$(類p+','+產p+','+收p+','+店p).css('display', 'none')}
  if (sel === 2) {$('#settingBox_B').css('background', 'rgba(170, 0, 255, 0.3)');$(類p).css('display', 'flex');$(公p+','+產p+','+收p+','+店p).css('display', 'none')}
  if (sel === 3) {$('#settingBox_B').css('background', 'rgba(245, 127, 23, 0.3)');$(產p).css('display', 'block');$(類p+','+收p+','+公p+','+店p).css('display', 'none')}
  if (sel === 4) {$('#settingBox_B').css('background', 'rgba(174, 234, 0, 0.3)');$(收p).css('display', 'block');$(類p+','+公p+','+產p+','+店p).css('display', 'none')}

  if (sel === 5) {$('#settingBox_B').css('background', 'rgba(27, 94, 32, 0.3)')}

  
  if (sel === 6) {$('#settingBox_B').css('background', 'rgb(128, 222, 234, .3)');$(店p).css('display', 'block');$(類p+','+公p+','+產p+','+收p).css('display', 'none')}
  if (sel === 7) {$('#settingBox_B').css('background', 'rgb(205, 220, 57,.5)');$(店p).css('display', 'block');$(類p+','+公p+','+產p+','+收p).css('display', 'none')}
  if (sel === 8) {$('#settingBox_B').css('background', 'rgb(98, 0, 234, .3)');$(店p).css('display', 'block');$(類p+','+公p+','+產p+','+收p).css('display', 'none')}
  if (sel === 9) {$('#settingBox_B').css('background', 'rgb(255, 214, 0, 0.3)')}
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



