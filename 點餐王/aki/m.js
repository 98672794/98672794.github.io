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

// monica : How to display a default image if the img tag fails to load an image in JavaScript?
function _data入網_整div(sel,run,box_name,data) {
  if (MOK) console.log("_data入網_整div("+sel+","+run+","+box_name+","+data+")")



  // $$$$$$$$$$$$$$$$$$$$$$$$$$ index $$$$$$$$$$$$$$$$$$$$$$$$$$ \\
  // $$$$$$$$$$$$$$$$$$$$$$$$$$ index $$$$$$$$$$$$$$$$$$$$$$$$$$ \\
  // $$$$$$$$$$$$$$$$$$$$$$$$$$ index $$$$$$$$$$$$$$$$$$$$$$$$$$ \\
  // $$$$$$$$$$$$$$$$$$$$$$$$$$ index $$$$$$$$$$$$$$$$$$$$$$$$$$ \\
  // $$$$$$$$$$$$$$$$$$$$$$$$$$ index $$$$$$$$$$$$$$$$$$$$$$$$$$ \\




  // 網頁data
  let 公司名 = '\
    <a id="公司名" style="color: '+data[2]+'" class="sidebar-brand d-flex align-items-center justify-content-center" href="'+data[1]+'">\
    '+data[0]+'\
    </a>\
    <hr>\
  '
  , 公司logo = '\
    <a href="'+data[0]+'">\
      <li class="nav-item" style="background: '+data[2]+';" >\
        <img class="nav-link " style="height: 75px; width: 75px; margin: auto;" src="'+data[3]+'" alt="'+data[4]+'">\
      </li>\
    </a>\
    <!-- 客台號 -->'+data[1]+'\
  '
  , 低導航右 = '\
    <a class="nav-link dropdown-toggle" onclick="查看購物車()" id="userDropdown" role="button"\
      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
      <span class=" fa fa-shopping-cart" style="font-size:36px;"></span>\
      <!-- 已點產品數 -->\
      <span id="已點產品數" class="badge  badge-counter '+data[0]+'" style="font-size:24px;border-radius: 50%;">\
      </span>\
    </a>\
  '
  , 類名menu = '\
    <!-- '+data[0]+' -->\
    <li class="nav-item"  title="'+data[0]+'" >\
      <a style="color: '+data[1]+'" class="類名 nav-link " href="#'+data[0]+'" >\
        <span style="font-size: 150%;">'+data[0]+'</span>\
      </a>\
      <hr>\
    </li>\
  '// <img src="'+類圖+'" alt="'+類名+'">\

  , 類書籤 = '\
    <hr id="'+data[0]+'" style="clear:both; width: 100%;" class="主hr">\
    <!-- '+data[0]+'書籤 -->\
    <h1 style="color: '+data[2]+'" class="">'+data[0]+'</h1>\
    <hr id="_flow_'+data[1]+'_'+data[0]+'" style="clear:both; width: 100%;opacity: 0;">\
  '
  , 餐廳每產品 = '\
    <button class="產品鍵" onclick="買野(1,'+data[0]+')">\
    <img src="'+data[1]+'" alt="'+data[2]+'">\
      <h5>'+data[2]+'</h5>\
      <p class="Price">$ '+data[3]+'</p>\
    </button>\
  '
  , 文章類 = '\
    <div class="文章box" style="clear:both;">\
        <h5>'+data[2]+'</h5>\
      <div class="card-body">\
        <div class="text-center">\
        '+data[1]+'\
        </div>\
        <p>'+data[3]+'</p>\
      </div>\
    </div>\
  '

  // 加購流程頁
  , 選項頁 = '\
    <!-- 產品資料 -->\
    <div class="card shadow mb-4">\
        <!-- Card Header - Dropdown -->\
        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">\
            <h4 class="導大btn m-0 font-weight-bold ">'+data[0]+'</h4><samp >$ '+data[1]+'</samp>\
        </div>\
        <!-- Card Body -->\
        <div class="card-body">\
          <img src="'+data[2]+'" style="height: auto;width: 100%;max-width: 300px;display: block;margin: auto;" alt="'+data[0]+'">\
        </div>\
    </div>\
  '
  , 選項表 = '\
    <!-- 選項 -->\
    <div class="card shadow mb-4">\
      <div class="card-body">\
        <input type="radio" name="Sel_'+data[0]+'" >\
          <label for="Sel_'+data[0]+'" id="Sel_'+data[0]+'" onclick="選項頁Sel_label('+data[1]+','+data[2]+')">\
            <span class="text">'+data[3]+'</span><span class="Price"'+data[4]+'</span>\
          </label>'+data[5]+'\
      </div>\
    </div>\
  '
  
  , 選項頁btn = '\
    <a onclick="選項頁的確認btn組合('+data[0]+')" class="btn btn-block btn-lg '+data[1]+'">確認</a>\
    <a onclick="開關購買流程(1)" class="no了 btn btn-block btn-lg">取消</a>\
  '
  , 加購流程頁 = '\
    <h2 class="m-0 font-weight-bold">嗎?</h2>\
    <a href="#" onclick="開關購買流程(0)" class="btn btn-block btn-lg '+data[0]+'">加購</a>\
    <a onclick="查看購物車()" class="no了 btn btn-block btn-lg">no了</a>\
  '

  // 確定訂單頁
  , 顯示已點的訂單1 = '\
    <div class="card shadow mb-4">\
      <div class="card-body">\
        <div class="table-responsive">\
          <table class=" " width="100%" cellspacing="0" >\
            <tbody id="顯示已點的訂單床">\
              <tr>\
                <td colspan="3" id="支付方式列表的床">\
                </td>\
              </tr>\
              <tr>\
              <hr>\
                <td><h5>已點訂單</h5></td><td></td><td id="結帳鍵" style="float: right;" class="btn btn-block btn-lg '+data[0]+'" onclick="結帳();">結帳</td>\
              </tr>\
            </tbody>\
          </table>\
        </div>\
      </div>\
    </div>\
  '
  
  , 顯示已點的訂單3 = '\
    <tr>\
    <td></td><td></td><td class="導大btn" style="float: right; font-weight: 500;font-size: 140%;" >'+data[0]+'</td>\
    </tr>\
  '




  , 支付方式列表 = '\
    <a style="float: left;margin: 1%;width: 31.3%;" onclick="打開支付('+dot+data[1]+dot+',)" class="btn  btn-lg '+data[2]+'">'+data[0]+'</a>\
  '
  
  , 打開支付頁 = '\
    '+data[0]+'\
    <a onclick="打開支付('+dot+''+dot+',1);結帳()" class="no了 btn btn-block btn-lg">返回</a>\
  '




  , 清空購物車 = '<a id="清空購物車" onclick="清空購物車()" class="btn btn-danger btn-block btn-lg">刪除所有</a><br>'
  , 確定訂單頁 = '\
    <div class="card shadow mb-4">\
      <div class="card-body">\
        <div class="table-responsive">\
          <table class=" " width="100%" cellspacing="0" >\
            <tbody>\
              <tr>\
                  <td style="float: left;" class="btn btn-danger" onclick="刪除單個購物車產品('+dot+data[2]+dot+',1)">刪除</td>\
              </tr>\
              <tr class="購物車表">\
                  <td style="float: left; font-weight: 900;font-size: 140%;">'+data[0]+'</td>\
                  <td style="float: right; ">$ '+data[1]+'</td>\
              </tr>\
              <tr class="購物車表">\
                  <td style="float: left;" >'+data[3]+'</td>\
                  <td class="導大btn" style="float: right; font-weight: 500;font-size: 140%;" >$ '+data[4]+'</td>\
              </tr>\
            </tbody>\
          </table>\
        </div>\
      </div>\
    </div>\
  '
  , 確定訂單頁btn = '\
    <p id="本單加總金">總金額 $ <span >'+data[0][1]+'</span></p>\
    <a onclick="開關購買流程(0);'+data[0][0]+'" class="btn btn-block btn-lg '+data[1]+'">確定訂單</a>\
    <a onclick="開關購買流程(0)" class="no了 btn btn-block btn-lg">一陣先</a>\
  '













  // $$$$$$$$$$$$$$$$$$$$$$$$$$ set $$$$$$$$$$$$$$$$$$$$$$$$$$ \\
  // $$$$$$$$$$$$$$$$$$$$$$$$$$ set $$$$$$$$$$$$$$$$$$$$$$$$$$ \\
  // $$$$$$$$$$$$$$$$$$$$$$$$$$ set $$$$$$$$$$$$$$$$$$$$$$$$$$ \\
  // $$$$$$$$$$$$$$$$$$$$$$$$$$ set $$$$$$$$$$$$$$$$$$$$$$$$$$ \\
  // $$$$$$$$$$$$$$$$$$$$$$$$$$ set $$$$$$$$$$$$$$$$$$$$$$$$$$ \\


  
  // 低主網 
  let user頁 = '<embed id="user頁" type="text/x-scriptlet" src="" width="100%" height="100%">'
  // admin頁框架
    , settingBox = '\
    <div id="settingBox_">\
      <h5 onclick="settingBox_toggle()"><i class="fa fa-wrench" aria-hidden="true"></i></h5>\
      \
      <div id="settingBox_B">\
      <!-- <h1 style="style="text-align: center; font-size: min(max(16px, 2vw), 38px);" >'+data[0]+'<br>歡迎您<h1> -->\
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
    <div id="'+data[0]+'page"  class="row" >\
      \
      <div class="col-md-12" style="margin: auto">\
        <div class="card mb-4">\
          <h4 style="background: rgba(255, 255, 255, .5);" class="card-header">'+data[0]+'</h4>\
          '+data[1]+'\
          \
        </div>\
      </div>\
      \
      <div id="'+data[0]+'List" class="col-md-12" style="margin: auto"></div>\
      \
      <br style="clear:both; width: 100%;">\
      <div class="col-md-12" style="margin: auto">\
        <div class="mb-6" style="margin: auto;display: flex;">\
          <h2 id="收睇台" style="margin: auto"></h2>\
          <div id="QRCode" style="margin: auto"></div>\
          '+data[1]+'\
        </div>\
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
    <li id="保存鍵" style="background: rgba(27, 94, 32, 0.3);">保存</li>\
  '
    , settingMenuSel店 = '\
    <li onclick="settingMenuBtn(6)" style="background: rgb(128, 222, 234, .3);">廚部</li>\
    <li onclick="settingMenuBtn(7)" style="background: rgb(205, 220, 57,.4);">廳面</li>\
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
            '+data[16]+'<!--按鍵色-->\
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
            <label class="form-label" >產品分類名</label>\
                <input\
                    title="產品分類名"\
                    type="text"\
                    class="form-control"\
                    placeholder="'+data[0]+'"\
                    value="'+data[0]+'"\
                />\
                <label class="form-label">加購順序編號</label>\
                <input\
                    title="加購順序編號"\
                    type="text"\
                    class="form-control"\
                    id="加購順'+data[1]+'序號"\
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
            <img style="height: 75px; width: 75px; margin: auto;" src="'+data[2]+'">\
            <input title="產品 / 文章圖" class="form-control" type="file" id="'+data[0]+'up圖" />\
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
              class="收款方式 form-control"\
              id="收款方式名_'+data[2]+'"\
              placeholder="'+data[0]+'"\
              value="'+data[0]+'"\
          />\
          <input\
              title="收款方式code"\
              type="text"\
              class="form-control"\
              id="收款方式code_'+data[2]+'"\
              placeholder="'+data[1]+'"\
              value="'+data[1]+'"\
          />\
        </div>\
      </div>\
    </div>\
    '
    , 萬 = data


  // 執行儲存為字串的 JavaScript 程式碼 https://stackoverflow.com/a/939343
  // append = [run] https://chateverywhere.app/
  $(box_name)[run]([eval(sel)])
  // $("div").append('strong')
  // <script src="3.7.0.js
}








function _搵台(data,客主url,鍵色) {  

  let all枱號 = []
    ,  枱止=0
  // loop找店舖枱號
  for(var 枱號開始數=14 ; 枱止 < 2 ; 枱號開始數++){ 
    let 店舖枱號 = data[0][枱號開始數]
      , 枱號帳單 = data[1][枱號開始數]
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
        枱data = '<a data="'+該海低+'" title="'+真枱號+'" class="枱號 btn-circle btn-'+鍵色+'" style="margin: 1%;cursor: pointer;">'+真枱號+'</a>'
        all枱號.push(枱data)
      }
      
      // 標頭不同分用
      all枱號.push('<hr>')
    }
    if (!店舖枱號) 枱止++ // 冇名2次out
  }
  all枱號 = all枱號.toString().replace(/,/g,"") // https://blog.csdn.net/haibo0668/article/details/80926927    

  return all枱號


}


