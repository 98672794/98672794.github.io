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
    <hr id="_flow_'+data[1]+'_'+data[0]+'" style="clear:both; width: 100%;height: 2%;opacity: 0;">\
    <!-- '+data[0]+'書籤 -->\
    <div id="'+data[0]+'" style="width: 100%;margin: auto;"><h5>'+data[0]+'</h5><br></div>\
  '
  , 餐廳每產品 = '\
    <button class="產品鍵" onclick="買野(1,'+dot+data[0]+dot+')" style="background: url('+dot+data[1]+dot+');\
    background-size: cover;background-position: center;background-repeat: no-repeat;">\
      <h5>'+data[2]+'</h5>\
      <p class="Price">$ '+data[3]+'</p>\
    </button>\
  '

  // qqqqqqqqqqqqq 
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
    <a onclick="選項頁的確認btn組合('+dot+data[0]+dot+')" class="btn btn-block btn-lg '+data[1]+'">確認</a>\
    <a onclick="開關購買流程(1)" class="no了 btn btn-secondary btn-block btn-lg">取消</a>\
  '
  , 加購流程頁 = '\
    <h2 class="m-0 font-weight-bold">嗎?</h2>\
    <a href="#" onclick="開關購買流程(0)" class="btn btn-block btn-lg '+data[0]+'">加購</a>\
    <a onclick="查看購物車()" class="no了 btn btn-secondary btn-block btn-lg">no了</a>\
  '
  // 確定訂單頁
  , 顯示已點的訂單1 = '\
    <div class="card shadow mb-4">\
      <div class="card-body">\
        <div class="table-responsive">\
          <table class=" " width="100%" border="0">\
            <tbody id="顯示已點的訂單床">\
              <tr>\
                <td colspan="2" id="支付方式列表的床"></td>\
              </tr>\
              <tr>\
                <td ><b>'+data[1]+'</b> 位<br>入座時間<b>'+data[2]+'</b></td>\
                <td id="結帳鍵" style="float: r1ight;" class="btn btn-block btn-lg '+data[0]+'" onclick="結帳();">結帳</td>\
              </tr>\
            </tbody>\
          </table>\
        </div>\
      </div>\
    </div>\
  '
  , 顯示已點的訂單3 = '\
    <tr>\
    <td class="導大btn" colspan="2" style="text-align:right; font-weight: 500;font-size: 140%;" >'+data[0]+'</td>\
    </tr>\
  '
  , 支付方式列表 = '\
    <a style="float: left;margin: 1%;width: auto;" onclick="打開支付('+dot+data[1]+dot+',)" class="btn  btn-lg '+data[2]+'">'+data[0]+'</a>\
  '
  
  , 打開支付頁 = '\
    '+data[0]+'\
    <a onclick="打開支付('+dot+''+dot+',1);結帳()" class="no了 btn btn-secondary btn-block btn-lg">返回</a>\
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
    <p id="本單加總金">總金額 $ <span >'+data[1]+'</span></p>\
    <a onclick="'+data[0]+'" class="btn btn-block btn-lg '+data[2]+'">確定訂單</a>\
    <a onclick="開關購買流程(0)" class="no了 btn btn-secondary btn-block btn-lg">一陣先</a>\
  '









  // $$$$$$$$$$$$$$$$$$$$$$$$$$ set $$$$$$$$$$$$$$$$$$$$$$$$$$ \\
  // $$$$$$$$$$$$$$$$$$$$$$$$$$ set $$$$$$$$$$$$$$$$$$$$$$$$$$ \\
  // $$$$$$$$$$$$$$$$$$$$$$$$$$ set $$$$$$$$$$$$$$$$$$$$$$$$$$ \\
  // $$$$$$$$$$$$$$$$$$$$$$$$$$ set $$$$$$$$$$$$$$$$$$$$$$$$$$ \\
  // $$$$$$$$$$$$$$$$$$$$$$$$$$ set $$$$$$$$$$$$$$$$$$$$$$$$$$ \\


  
  // 低主網 
  let user頁 = '<embed id="user頁" type="text/x-scriptlet" src="" width="100%" height="100%" style="position: fixed; top: 0; bottom: 0; left: 0; right: 0;">'
  // admin頁框架
    , settingBox = '\
    <div id="settingBox_">\
      <h5 onclick="settingBox_toggle()"><i class="fa fa-wrench" aria-hidden="true"></i></h5>\
      \
      <div id="settingBox_B">\
      <!-- <h1 style="style="text-align: center; font-size: min(max(16px, 2vw), 38px);" >'+data[0]+'<br>歡迎您<h1> -->\
        <!-- 公司資料page -->\
        <!-- 共用page -->\
        \
        \
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
        </div><br>\
        <div id="睇單box" class="card mb-4">'+data[2]+'</div>\
      </div>\
      \
    </div>\
  '
  // 各lv按鍵
    , settingMenuSel編 = '\
    <li onclick="settingMenuBtn(1)" style="background: rgba(213, 0, 0, 0.3);">關於</li>\
    <li onclick="settingMenuBtn(2,'+dot+data[0]+dot+')" style="background: rgba(170, 0, 255, 0.3);">分類</li>\
    <li onclick="settingMenuBtn(3,'+dot+data[0]+dot+')" style="background: rgba(245, 127, 23, 0.3);">內容</li>\
    <li onclick="settingMenuBtn(4,'+dot+data[0]+dot+')" style="background: rgba(174, 234, 0, 0.3);">收款</li>\
  '
    , settingMenuSel店 = '\
    <li onclick="settingMenuBtn(5)" style="background: rgb(27, 94, 32, .3);">水吧</li>\
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
              <label for="網lv" class="form-label">會員等級</label>\
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
                class="form-control 不翻"\
                id="公司名稱"\
                placeholder="'+data[2]+'"\
                value="'+data[2]+'"\
              />\
            </div>\
            \
            <div class="mb-3">\
              <label for="公司logo" class="form-label">公司logo</label>\
              <div id="公司logo_img" style="height: 150px; width: 150px; margin: auto;background: url('+dot+data[18]+dot+');\
              background-size: cover;background-position: center;background-repeat: no-repeat;"></div>\
              <input title="公司logo" class="form-control" type="file" id="公司logo" accept="image/*"/>\
              <input\
                title="公司logo"\
                type="text"\
                class="form-control 不翻"\
                id="公司logoB"\
                placeholder="'+data[3]+'"\
                value="'+data[3]+'"\
              />\
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
            <label class="form-label">店舖枱號</label>\
            <a onclick="新增D野('+dot+'增台'+dot+','+dot+data[6]+dot+')" class="btn btn-' + data[6] + '" style="float: right;">新增枱組</a>\
            <br>\
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
              <label id="色版標" class=" col-form-label" >色版</label>\
              <div id="colorPalette">//色版</div>\
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
        <a onclick="SaveData2('+dot+data[17]+dot+')" class="btn btn-'+data[6]+' 睇鍵" style="background: rgba(213, 0, 0, 0.3);margin: auto;width: 98%;">保存</a>\
        <br style="height: 100px;" >\
    </div>\
    '
    , 產品分類page = '\
    <div class="col-md-6" style="margin: auto; float: left;" id="產品分類_'+data[1]+'_BOX">\
        <div class="card mb-4" style="background: rgba(0, 0, 0, .5);">\
            <div class="mb-3">\
            <a onclick="DelInput('+dot+'產品分類'+dot+','+dot+data[1]+dot+')" class="btn btn-danger btn-circle btn-sm" style="float:right; "><i class="fa fa-trash" aria-hidden="true" title="刪除'+產品標頭+'分類"></i></a>\
            <label class="form-label" >'+產品標頭+'分類名</label>\
                <input\
                    title="產品分類名"\
                    type="text"\
                    class="產品分類 form-control"\
                    id="產品分類名_'+data[1]+'"\
                    placeholder="'+data[0]+'"\
                    value="'+data[0]+'"\
                />\
                <br>\
                <div>\
                  <select class="form-select 產品分類">'+data[3]+'</select>\
                </div>\
                \<br><label class="form-label">加購順序編號</label>\
                <input\
                    title="加購順序編號"\
                    type="text"\
                    class="產品分類 form-control"\
                    id="產品分類項_'+data[1]+'"\
                    placeholder="'+data[2]+'"\
                    value="'+data[2]+'"\
                />\
            </div>\
        </div>\
    </div>\
    '



    , 產品資料page = '<!-- 換行 -->\
      <div class="col-md-6" style="margin: auto; float: left; " id="產品資料_'+data[6]+'_BOX">\
        <div class="card mb-4" style="background: rgba(0, 0, 0, .5);">\
          <div class="mb-3">\
          \
          <a onclick="DelInput('+dot+'產品資料'+dot+','+dot+data[6]+dot+')" class="btn btn-danger btn-circle btn-sm" style="float:right; "><i class="fa fa-trash" aria-hidden="true" title="刪除這產品"></i></a>\
          \
            '+data[4]+'<!--產品分類-->\
            <!--加購順序編號轉去產品分類del_data[5]-->\
            <br><br><label class="form-label">'+產品標頭+'名</label>\
            <input\
              title="產品 / 文章名"\
              type="text"\
              class="產品資料'+data[6]+' form-control"\
              placeholder="'+data[0]+'"\
              value="'+data[0]+'"\
            />\
            <div style="height: 300px; width: 300px; margin: auto;background: url('+dot+data[8]+dot+');\
              background-size: cover;background-position: center;background-repeat: no-repeat;"></div>\
            <input title="產品 / 文章圖" class="產品資料'+data[6]+' form-control" type="file" id="產料'+data[6]+'_up圖" />\
            <input\
              title="產品 / 文章圖"\
              type="text"\
              class="form-control "\
              id="產料'+data[6]+'_up圖B"\
              placeholder="'+data[2]+'"\
              value="'+data[2]+'"\
            />\
          <label for="產品價錢" class="form-label">'+錢位+'</label>\
          <textarea class="產品資料'+data[6]+' form-control" title="產品價錢 / 文章內容" id="ws來詢字" rows="1" placeholder="'+data[1]+'">'+data[1]+'</textarea>\
          \
          增加產品選項<a onclick="新增D野('+dot+'產品選項'+data[6]+dot+')" class="btn btn-warning btn-circle btn-sm" style="float:right; "><i class="fa fa-plus" aria-hidden="true" title="增加產品選項"></i></a>\
          <div class="產品選項'+data[6]+'box">'+data[7]+'</div>\
          \
          <input class="產品資料'+data[6]+' END4v65c4v654646" value="END4v65c4v654646"/>\
          \
          </div>\
        </div>\
      </div>\
    '






    , 收款方式page = '\
    <div class="col-md-6" style="margin: auto; float: left;" id="收款方式_'+data[2]+'_BOX">\
      <div class="card mb-4" style="background: rgba(0, 0, 0, .5);">\
        <div class="mb-3 收款方式">\
          <a onclick="DelInput('+dot+'收款方式'+dot+','+dot+data[2]+dot+')" class="btn btn-danger btn-circle btn-sm" style="float:right; "><i class="fa fa-trash" aria-hidden="true" title="刪除收款方式"></i></a>\
          <input\
              title="收款方式名"\
              type="text"\
              class="form-control 收款方式名"\
              id="收款方式名_'+data[2]+'"\
              placeholder="'+data[0]+'"\
              value="'+data[0]+'"\
          />\
          '+data[3]+'<!--收項圖-->\
          <input title="收款方式code圖" class="form-control 收款方式項" type="file" id="收款方式項_'+data[2]+'code圖" accept="image/*"/>\
          <input\
              title="收款方式code"\
              type="text"\
              class="form-control"\
              id="收款方式項_'+data[2]+'code圖B"\
              placeholder="'+data[1]+'"\
              value="'+data[1]+'"\
          />\
        </div>\
      </div>\
    </div>\
    '

  , 收睇台單1 = '\
    <div class="card shadow mb-4">\
      <div class="card-body">\
        <div class="table-responsive">\
          <table class=" " width="100%" border="0">\
            <tbody id="顯示已點的訂單床">\
              <tr>\
                <td colspan="2" id="支付方式列表的床"></td>\
              </tr>\
              <tr>\
                <td ><b>'+data[0]+'</b> 位<br>入座時間<b>'+data[1]+'</b></td>\
                <td id="結帳鍵" style="float: r1ight;" class="btn btn-block btn-lg btn-warning" onclick="確認已結帳('+dot+data[2]+dot+','+dot+data[3]+dot+','+dot+data[4]+dot+');">結帳!!</td>\
              </tr>\
            </tbody>\
          </table>\
        </div>\
      </div>\
    </div>\
    '
  , 收睇台單2 = '<tr>\
    <td class="導大btn" colspan="2" style="text-align:right; font-weight: 500;font-size: 140%;" >'+data[0]+'</td>\
    </tr>'

  , 增台鍵 = '\
    <input title="枱號標題" type="text" class="枱的料" style="width: 32%;" placeholder="枱號標題" value="" />\
    <input title="起始枱號" type="number" class="枱的料" style="width: 32%;" placeholder="起始枱號" value="" />\
    <input title="結束枱號" type="number" class="枱的料" style="width: 32%;" placeholder="結束枱號" value="" />\
    '

    , 流水頁selBtn = '\
    <input title="由日期" type="date" class="form-control" style="margin: 1%;width: 98%;" id="流水由日期" value="" />\
    <input title="到日期" type="date" class="form-control" style="margin: 1%;width: 98%;" id="流水到日期" value="" />\
    <input title="關鍵字" type="text" class="form-control" style="margin: 1%;width: 98%;" id="流水關鍵字" value="" placeholder="&#128269" />\
    <hr>\
    <div id="帳房流水睇" style="margin: 1%;width: 98%;"></div>\
    '

    , 萬 = data
  // 執行儲存為字串的 JavaScript 程式碼 https://stackoverflow.com/a/939343
  // append = [run] https://chateverywhere.app/
  $(box_name)[run]([eval(sel)])
  // $("div").append('strong')
  // <script src="3.7.0.js
}

















let 色版 = ["#FFFFFF","#FFEBEE","#FFCDD2","#EF9A9A","#E57373","#EF5350","#F44336","#E53935","#D32F2F","#C62828","#B71C1C","#FF8A80","#FF5252","#FF1744","#D50000","#FCE4EC","#F8BBD0","#F48FB1","#F06292","#EC407A","#E91E63","#D81B60","#C2185B","#AD1457","#880E4F","#FF80AB","#FF4081","#F50057","#C51162","#F3E5F5","#E1BEE7","#CE93D8","#BA68C8","#AB47BC","#9C27B0","#8E24AA","#7B1FA2","#6A1B9A","#4A148C","#EA80FC","#E040FB","#D500F9","#AA00FF","#EDE7F6","#D1C4E9","#B39DDB","#9575CD","#7E57C2","#673AB7","#5E35B1","#512DA8","#4527A0","#311B92","#B388FF","#7C4DFF","#651FFF","#6200EA","#E8EAF6","#C5CAE9","#9FA8DA","#7986CB","#5C6BC0","#3F51B5","#3949AB","#303F9F","#283593","#1A237E","#8C9EFF","#536DFE","#3D5AFE","#304FFE","#E3F2FD","#BBDEFB","#90CAF9","#64B5F6","#42A5F5","#2196F3","#1E88E5","#1976D2","#1565C0","#0D47A1","#82B1FF","#448AFF","#2979FF","#2962FF","#E1F5FE","#B3E5FC","#81D4FA","#4FC3F7","#29B6F6","#03A9F4","#039BE5","#0288D1","#0277BD","#01579B","#80D8FF","#40C4FF","#00B0FF","#0091EA","#E0F2F1","#B2DFDB","#80CBC4","#4DB6AC","#26A69A","#009688","#00897B","#00796B","#00695C","#004D40","#A7FFEB","#64FFDA","#1DE9B6","#00BFA5","#E0F7FA","#B2EBF2","#80DEEA","#4DD0E1","#26C6DA","#00BCD4","#00ACC1","#0097A7","#00838F","#006064","#84FFFF","#18FFFF","#00E5FF","#00B8D4","#E8F5E9","#C8E6C9","#A5D6A7","#81C784","#66BB6A","#4CAF50","#43A047","#388E3C","#2E7D32","#1B5E20","#B9F6CA","#69F0AE","#00E676","#00C853","#F1F8E9","#DCEDC8","#C5E1A5","#AED581","#9CCC65","#8BC34A","#7CB342","#689F38","#558B2F","#33691E","#CCFF90","#B2FF59","#76FF03","#64DD17","#F9FBE7","#F0F4C3","#E6EE9C","#DCE775","#D4E157","#CDDC39","#C0CA33","#AFB42B","#9E9D24","#827717","#F4FF81","#EEFF41","#C6FF00","#AEEA00","#FFFDE7","#FFF9C4","#FFF59D","#FFF176","#FFEE58","#FFEB3B","#FDD835","#FBC02D","#F9A825","#F57F17","#FFFF8D","#FFFF00","#FFEA00","#FFD600","#FFF8E1","#FFECB3","#FFE082","#FFD54F","#FFCA28","#FFC107","#FFB300","#FFA000","#FF8F00","#FF6F00","#FFE57F","#FFD740","#FFC400","#FFAB00","#FFF3E0","#FFE0B2","#FFCC80","#FFB74D","#FFA726","#FF9800","#FB8C00","#F57C00","#EF6C00","#E65100","#FFD180","#FFAB40","#FF9100","#FF6D00","#FBE9E7","#FFCCBC","#FFAB91","#FF8A65","#FF7043","#FF5722","#F4511E","#E64A19","#D84315","#BF360C","#FF9E80","#FF6E40","#FF3D00","#DD2C00","#FAFAFA","#F5F5F5","#EEEEEE","#E0E0E0","#BDBDBD","#9E9E9E","#757575","#616161","#424242","#212121","#ECEFF1","#CFD8DC","#B0BEC5","#90A4AE","#78909C","#607D8B","#546E7A","#455A64","#37474F","#263238","#EFEBE9","#D7CCC8","#BCAAA4","#A1887F","#8D6E63","#795548","#6D4C41","#5D4037","#4E342E","#3E2723","#000000"]
