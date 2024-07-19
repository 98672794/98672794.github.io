



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


NoIMG = '../' + NoIMG




//let 總Data
let 客主url
function _取客api(客Url,客api){
  //console.log('_取客api',_0x1731ba(客api))

  // get客data
  客主url = (location.href).split('/s')[0] + '/?' +客Url+ '?' 
  客主urlS背用 = (location.href).split('/s')[0] + '/?' + escape(_0x5569ds(randomString()+ '?'+客Url))

  // make user data box
  _data入網_整div('user頁','html','#set_page',' ') 

  _客setting頁入內容(_0x1731ba(客api),客Url)

  // _保存(保存) qqq

  // 最後背景加客網
  $('#user頁').attr('src', 客主urlS背用)

}













async function _UpAllIMG(id,圖名,api){

  // 上傳 IMG
  let fileInput = document.getElementById(id)
    , IMGUlr

  if(!!fileInput.files[0]){
    // 如有檔up 
    IMGUlr = await _UpJPG(api+'/'+圖名, fileInput.files[0])
  } else {
    // 如冇檔 有B Ulr
    if(!!$( "#"+id+"B").val()){ 
      IMGUlr = $( "#"+id+"B" ).val() 
    } 
    // 都冇 用out Ulr
    else IMGUlr = $("#"+id+"B").attr('placeholder') 
  }

  return IMGUlr
}











function 增加台台(鍵色) {  
  let 加ALL枱料 = []
    , all真台 = []
  
  // 取 ALL 加枱入list
  $('.枱的料').map(async function() {
    加ALL枱料.push($(this).val())
  }).get().join()

  // all真台號入list
  for(var cont=0 ; cont < 加ALL枱料.length ; cont=cont+3){
    let 枱標 = 加ALL枱料[cont]
      , 始枱 = 加ALL枱料[cont+1]
      , 結枱 = 加ALL枱料[cont+2]
      , 台 = 枱標 + 始枱

    all真台.push(台)
    // 增加始結枱之內的台號
    if (~~始枱 < ~~結枱){
      for(var contB=~~始枱+1 ; contB < ~~結枱+1 ; contB++){
        台 = 枱標 + contB
        all真台.push(台)
      }
    }
  }

  // 增加台到setting頁
  _data入網_整div('萬','append','#店舖枱號編',_搵台(all真台,鍵色))

}








function _搵台(data,鍵色) { 

  let all枱號 = []
    , 枱號標頭0
    // 不含重複元素的陣列 https://chat.openai.com/share/d2583be4-724f-4892-a983-86edc44c533b
    , dataB = [...new Set(data)]

  // loop找店舖枱號
  for(var 數=0 ; 數 < dataB.length ; 數++){ 
    let 店舖枱號 = dataB[數]
      , 枱號標頭
      , 枱data

    if (!!店舖枱號) {
      // 分枱號標頭 https://chateverywhere.app?shareable_conversation_id=a14fde3d-5613-4e1a-a4c4-647bac53b41e
      枱號標頭 = 店舖枱號.replace(/[0-9]/g, '').split('-')[0] // 取純枱號標頭

      // 標頭不同分用
      if(枱號標頭 !== 枱號標頭0) all枱號.push('<hr>\
      <a onclick="DelInput('+dot+枱號標頭+dot+'&#44'+dot+'刪枱'+dot+')" class="刪枱 '+枱號標頭+' btn btn-danger btn-circle btn-sm" style="float:right; "><i class="fa fa-trash" aria-hidden="true" title="刪除'+枱號標頭+'枱組"></i></a>') // 刪枱鍵
      
      枱號標頭0 = 枱號標頭
      
      枱data = '<a data="'+店舖枱號+'" title="'+店舖枱號+'" class="枱號 '+枱號標頭+' btn-circle btn-'+鍵色+'" style="margin: 1%;cursor: pointer;">'+店舖枱號+'</a>'
      all枱號.push(枱data)
    }
  }
  all枱號 = all枱號.toString().replace(/,/g,"") // https://blog.csdn.net/haibo0668/article/details/80926927

  return all枱號
}






















let 產轉類 = '產品分類 = <select class="產品資料0000_新增  form-select 不翻" ><option value="未有產品資料">未有產品資料</option></select><br>'
  , 顯po用0Demo = '<option value="0" >🧑‍🍳廚房水吧出品列表顯中都顯示🍸</option>'
  , 顯po用1Demo = '<option value="1" >🧑‍🍳於廚房出品列表中顯示🧑‍🍳</option>'
  , 顯po用2Demo = '<option value="2" >🍸於水吧出品列表中顯示🍸</option>'
  , 顯po用3Demo = '<option value="3" >⛔不顯示在出品列表⛔</option>'
  , 公司ws
  , 水出品表
  , 廚出品表
async function _客setting頁入內容(data,Url) { 
  
  let settingMenuSelLV = 'settingMenuSel編+settingMenuSel店+settingMenuSel帳'
    , 客庫  =_取明文(Url,'位').split('/')[0]
    , 分頁G料 = data.split(線)
  //console.log('分頁G料=',分頁G料) 

  // 分頁G料 0 不用
  分頁G料.splice(0, 1)

  // $$$$$$$$ 框架 $$$$$$$$
  let 公司頁料 = 分頁G料[0].split(格)
    , 公司名   = 公司頁料[0]
    , 網站按鍵色   = 公司頁料[4]
  //console.log('公司頁料=',公司頁料) 
  _data入網_整div('settingBox','append','#set_page',[公司名]) 
  // $$$$$$$$  ///  $$$$$$$$


  // $$$$$$$$ 各lv按鍵 $$$$$$$$

  // qqq make ac +lV 員名 員密
  // 小編
  if (ADminLV === 3) {
    settingMenuSelLV = 'settingMenuSel編'
    $('#settingMenu').toggleClass('a2') // 不同lv按鈕css
  }
  // 店員
  if (ADminLV === 4) {
    settingMenuSelLV = 'settingMenuSel店'
    $('#settingMenu').toggleClass('a4')
  }
  // 帳房
  if (ADminLV === 5) {
    settingMenuSelLV = 'settingMenuSel帳'
    $('#settingMenu').toggleClass('a3')
  }
  _data入網_整div(settingMenuSelLV,'append','#settingMenu',[客庫])
  // $$$$$$$$  ///  $$$$$$$$

    
  // 東主 / 小編 / 店員 可見
  if (ADminLV > 4 )  return 


  // $$$$$$$$ 店舖枱號 $$$$$$$$
  let 枱號頁料 = 分頁G料[3].split(格)

  枱號頁料.length--
  //console.log('枱號頁料',枱號頁料)
  all枱號 = _搵台(枱號頁料,網站按鍵色)
  _data入網_整div('共用page','append','#settingBox_B',['睇枱用','',''])
  _data入網_整div('萬','prepend','#睇枱用List',all枱號)
   // $$$$$$$$  ///  $$$$$$$$

  // 東主 / 小編 可見
  if (ADminLV > 3 )  return
  
  // $$$$$$$$ 公司資料page $$$$$$$$
  公司ws   = 公司頁料[2]
  let 公司logo = 公司頁料[1]
    , 公司logo睇 = await _imgToB64(公司logo) //18
    , ws來詢字 = 公司頁料[3]

    // $$$$$$$$  外觀美化 $$$$$$$$
    , 網主色  = 公司頁料[5]
    , 網副色  = 公司頁料[6]
    , 字主色  = 公司頁料[7]
    , 字副色  = 公司頁料[8]
    , 圖橫    = 公司頁料[9]
    , 圖橫mx  = 公司頁料[10] // 15


    // 網站按鍵色
    , 按鍵色 = ' '
    , 按鍵色List  = ['info','primary','success','warning','danger','secondary','light']

  按鍵色List.unshift(按鍵色List.splice(按鍵色List.indexOf(網站按鍵色), 1)[0])
  for(var 唉for鍵色=0 ; 唉for鍵色 < 按鍵色List.length ; 唉for鍵色++){
    按鍵色 = 按鍵色 + '<option value="'+按鍵色List[唉for鍵色]+'">'+按鍵色List[唉for鍵色]+'</option>'
  }
  按鍵色 = '<select class="form-select" id="網站按鍵色">'+按鍵色+'</select>'

  // $$$$$$$$  修網標  $$$$$$$$
  if (網lv === '0') {網lv = '基本網站';產品標頭 = '文章';錢位     = '文章內容'}
  if (網lv === '1') {網lv = '購物網站';產品標頭 = '產品';錢位     = '產品價錢'}
    // $$$$$$$$  ///  $$$$$$$$


    // $$$$$$$$ 各頁用框架 $$$$$$$$
    _data入網_整div( 
      '公司資料page','append','#settingBox_B'
      ,[Url,網lv,公司名,公司logo,公司ws,ws來詢字,網站按鍵色,網主色,網副色,字主色,字副色,'圖高','圖高mx',圖橫,圖橫mx,all枱號,按鍵色,客庫,公司logo睇] 
    )
    _data入網_整div('共用page','append','#settingBox_B',['產品分類','<a onclick="新增D野('+dot+'產類'+dot+')" href="#產品分類page" class="btn btn-' + 網站按鍵色 + '" >新增'+產品標頭+'分類 </a>'
    ,'<a onclick="SaveData2('+dot+客庫+dot+')" class="btn btn-'+網站按鍵色+' 睇鍵" style="background: rgba(170, 0, 255, 0.3)">保存</a>']
    )
    _data入網_整div('共用page','append','#settingBox_B',['產品資料','<a onclick="新增D野('+dot+'產料'+dot+')" href="#產品資料page" class="btn btn-' + 網站按鍵色 + '" >新增產品資料 </a>'
    ,'<a onclick="SaveData2('+dot+客庫+dot+')"  class="btn btn-'+網站按鍵色+' 睇鍵" style="background: rgba(245, 127, 23, 0.3)">保存</a>']
    )
    _data入網_整div('共用page','append','#settingBox_B',['收款方式','<a onclick="新增D野('+dot+'收式'+dot+')" href="#收款方式page" class="btn btn-' + 網站按鍵色 + '" >新增收款方式 </a>'
    ,'<a onclick="SaveData2('+dot+客庫+dot+')"  class="btn btn-'+網站按鍵色+' 睇鍵" style="background: rgba(174, 234, 0, 0.3)">保存</a>']
    )

    // 色版
    色版box = ''
    for(var 數=0 ; 數 < 色版.length ; 數++){
      色格 = '<label for="網站按鍵色" class="color-box" style="background-color: '+色版[數]+'" data-color="'+色版[數]+'" title="'+色版[數]+'"></label>'
      色版box = 色版box + 色格
    }
    $( "#colorPalette" ).html(色版box)
    _setupColorPalette()
    // $$$$$$$$  ///  $$$$$$$$






    // _AddAC qqqqqqqqqqqqqqqqqqqq 



    // $$$$$$$$ 產品分類page $$$$$$$$
    let 產類頁料 = 分頁G料[1].split(格)
    , all產品分類  = []
    , 顯po用selected =  'selected'

    //console.log('產類頁料',產類頁料)

    for(var 數=0 ; 數 < 產類頁料.length ; 數=數+3){ 
      let 產品分類名 = 產類頁料[數]
        , 加購順序編號 = 產類頁料[數+2]
        // 出品列表中顯示
        , 顯水不顯廚 = 產類頁料[數+1] // 0=顯廚,1=顯水,3=不顯
        
        , 出品顯 = ''
        , 顯0 = 顯po用0Demo
        , 顯1 = 顯po用1Demo
        , 顯2 = 顯po用2Demo
        , 顯3 = 顯po用3Demo

      if (顯水不顯廚 === '0') 顯0 = 顯0.split('" >')[0] + '"' + 顯po用selected + '>' + 顯0.split('" >')[1]
      if (顯水不顯廚 === '1') 顯1 = 顯1.split('" >')[0] + '"' + 顯po用selected + '>' + 顯1.split('" >')[1]
      if (顯水不顯廚 === '2') 顯1 = 顯2.split('" >')[0] + '"' + 顯po用selected + '>' + 顯2.split('" >')[1]
      if (顯水不顯廚 === '3') 顯3 = 顯3.split('" >')[0] + '"' + 顯po用selected + '>' + 顯3.split('" >')[1]

      出品顯 = 顯0 + 顯1 + 顯2 + 顯3

      //console.log('出品顯==',出品顯)


      if(!/^[0-9]$/.test(加購順序編號)) 加購順序編號 = '' // 限數 
      if (!!產品分類名) {
        _data入網_整div('產品分類page','prepend','#產品分類List',[產品分類名,~~數+1,加購順序編號,出品顯])
        all產品分類.push(產品分類名)

        // 加產品分類box
        _data入網_整div('萬','prepend','#產品資料List','<hr style="clear:both; width: 100%; opacity: 0;"><div id="'+產品分類名+'"><h4>'+產品分類名+'</h4><br></div>')
      }
    }
    // $$$$$$$$  ///  $$$$$$$$


    // $$$$$$$$ 產品資料page $$$$$$$$ 
    let 產品頁料 = 分頁G料[4].split(格)
    //console.log('產品頁料!',產品頁料)
    
    // 分每產品 END4v65c4v654646前=一組
    產品頁料B = _分割列表(產品頁料, 'END4v65c4v654646')
    for(var 數B=0 ; 數B < 產品頁料B.length ; 數B++){
      // 單組產品入
      產品頁料C = 產品頁料B[數B]

        let 產選 = 單品option = ''

          , 產品類     = 產品頁料C[0]
          , 產品名     = 產品頁料C[1]
          , 產品圖     = 產品頁料C[2]
          , 產品圖睇 = await _imgToB64(產品圖)//8
          , 產品價錢   = 產品頁料C[3]

        // 取單品選項 // 由0,刪4元素 = 留選
        產品頁料C.splice(0, 4)

        選項組數 = 產品頁料C.length
        for(var 數C=0 ; 數C < 選項組數 ; 數C=數C+2){

          if(產品頁料C[數C] !== '') {
            產選 = 產選 + 
            '<input title="產品選項" type="text" class="產品資料 '+數B+'_'+數C+'的選項 form-control" placeholder="'+產品頁料C[數C]+'" value="'+產品頁料C[數C]+'" />\
            <input title="產品選項的收費" type="text" class="產品資料 '+數B+'_'+數C+'的選項的收費 form-control" style="width: 50%;" placeholder="'+產品頁料C[數C+1]+'" value="'+產品頁料C[數C+1]+'" />\
            '
          }
      
        }

        if (!產品圖) 產品圖 = NoIMG

        all產品分類.unshift(all產品分類.splice(all產品分類.indexOf(產品類), 1)[0]) // Monica js list 移到  第一位

        for(var 唉for類=0 ; 唉for類 < all產品分類.length ; 唉for類++){單品option = 單品option + '<option value="'+all產品分類[唉for類]+'">'+all產品分類[唉for類]+'</option>'}
        
        產轉類 = '產品分類 = <select class="產品資料'+數B+'_'+數C+' form-select 不翻" >'+單品option+'</select>'

        if (!!產品名) _data入網_整div('產品資料page','append','#'+產品類,[產品名,產品價錢,產品圖,'data[3]已del',產轉類,'加購流程號已del',數B+'_'+數C,產選,產品圖睇])
    }
    // $$$$$$$$  ///  $$$$$$$$


    // $$$$$$$$ 收款方式page $$$$$$$$
    let 支式頁料 = 分頁G料[2].split(格)
    //console.log('支式頁料',支式頁料)
    for(var 數=0 ; 數 < 支式頁料.length ; 數+=2){ // loop找支付方式
      let 支付方式名 = 支式頁料[數]
        , 支付方式料 = 支式頁料[數+1]
        , 收款方式code圖 = ''
      if (!!支付方式料 && 支付方式料.indexOf('http') !== -1) {
        支付方式料B = await _imgToB64(支付方式料)
        收款方式code圖 =
        '<div style="height: auto;min-height: 300px;min-width: auto;max-width: 300px;width: auto;\
        margin: auto;background: url('+dot+支付方式料B+dot+');background-size: cover;\
        background-position: center;background-repeat: no-repeat;"></div>'
      }
      
      if (!!支付方式名) _data入網_整div('收款方式page','prepend','#收款方式List',[支付方式名,支付方式料,數,收款方式code圖])
    }
    // $$$$$$$$  ///  $$$$$$$$

    水出品表 = 分頁G料[5].split(格)
    廚出品表 = 分頁G料[6].split(格)

  translate.execute();  //进行翻译
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



async function Login() {
  
  // 开启html页面变化的监控，对变化部分会进行自动翻译 https://gitee.com/mail_osc/translate
  translate.listener.start(); 
  translate.ignore.class.push('不翻'); //不翻

  let id  =$( "#UserID" ).val()
    , pw  =$( "#UserPW" ).val()
    // 取明文 轉sha256
    , id1 = _取明文(id,'pw')
    , pw1 = _取明文(pw,'pw')
    , d位 = _取明文(id,'位')

    //, id1   = escape(_0x5569ds(calculateHash(id).toString(CryptoJS.enc.Hex)))
    //, pw1   = escape(_0x5569ds(calculateHash(pw).toString(CryptoJS.enc.Hex)))
    //, d位 = calculateHash(id).toString(CryptoJS.enc.Hex)+'/'+_0x1731ba(客data5)
    , SeeAc = await _SeeGitHubTxt(d位)


  $('#pwWorg').text(loingIcon)
  //console.log('id1=',id1,'\npw1=',pw1,'\nd位=',d位,'\nSeeAc=',SeeAc)

  // 沒有帳號
  if(!SeeAc) $('#pwWorg').text('找不到用戶!!')

  // 取表找id+pw if!! 用pw split[0] 找前出現數 = lv
  if (SeeAc.indexOf(id1+pw1) !== -1) {
    // JS判断字符串中，某个字符出现的次数 https://blog.51cto.com/1251769215/1788566
    ADminLV = ((SeeAc).split(pw1)[0].split(id1).length-1)
    $('#pwWorg').text(客角[ADminLV]+' '+id+'歡迎您!!')
    console.log('歡迎您=',id,客角[ADminLV]) 

    // 網站等級 // 基本網站 = 0 | 購物 = 1
    網lv = (SeeAc).split('%u7DB6%uF88B%uF622%uF863')[1][0]
    console.log('會員等級=',網lv) 

    // SaveID to localStorage
    if (SaveID.checked) localStorage.setItem("id",[id,pw])

    //if (MOK) console.log('id1=',id1,'\npw1=',pw1,'\nd位=',d位,'\nADminLV',ADminLV)

    Get客Data = await _SeeGitHubTxt(d位.split('/')[0]+'/d')

    _取客api(id,Get客Data)
  }
  // 密碼錯
  else $('#pwWorg').text('資料錯誤!!')
}








// user 網內 make ac
async function CreateAccount(sel) { 

  // 點第一次出box
  if(sel === 0){
    $( "#UserID"  ).val('')
    $( "#UserPW"  ).val('')

    // 加檢pw
    $('#pwWorg').html('<input type="password" class="form-control form-control-user" id="UserPW2" placeholder="Repeat Password" autocomplete>')
    // 轉 add ac
    $('#LoginBtn').attr('onclick', 'CreateAccount(1)').attr('class', 'btn btn-success btn-user btn-block').text('Create Account Now!!')
    $('.text-center').eq(1).css('display', 'none')
    // 返回
    $('#ForgotPassword').attr('href', './').text('BACK')

    //
  }

  if(sel === 1){
    id  = $( "#UserID"  ).val()
    pw  = $( "#UserPW"  ).val()
    pwB = $( "#UserPW2" ).val()
    // 取明文 轉sha256
    id1   = _取明文(id,'pw')
    pw1   = _取明文(pw,'pw')
    pwB1  = _取明文(pwB,'pw')
    d位   = _取明文(id,'位')

    // 密碼不同2次
    re = 'Password does not match'
    if(pw1 !== pwB1) $('#pwWorg').text(re)

    // 如帳戶不存在 開ac 
    
    else $('#pwWorg').html(loingIcon); re = await _makeAC(1,[id,id1],pw1,d位)

    // user睇
    re = id+re
    console.log(re) 
    $('#pwWorg').text(re)

    // 等一秒f5
    setInterval(function() {history.go(0)}, 1000) 
  }
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








// 當選項改變時觸發事件 
function Change網站按鍵色(){
  let 網站按鍵色31 = $('#網站按鍵色').val();
  console.log(網站按鍵色31);
  $('#test網站按鍵色').attr('class', 'btn btn-'+網站按鍵色31)
  $('#test網站按鍵色').text(網站按鍵色31)
}










// 刪除選項 
function DelInput(選,號){

  if (號 === '刪枱'){
  $('.'+選).map(async function() {
    //if( $(this).attr('data').indexOf(選) !== -1) 
    $(this).remove()
  }).get().join()

  } else {
    $( "#"+選+"名_"+號 +
      "," + "#"+選+"項_"+號
      ).val('')

    // 產品資料
    $('.'+選+號).val('')
    $('.'+選+號+'_新增').val('')

    $( "#"+選+"_"+號 +"_BOX" ).css('display', 'none')

    // 產品資料 產品選項 end
    $('.END4v65c4v654646').val('END4v65c4v654646')
  }
}
























// settingBox btn run 
// settingMenu btn
function settingMenuBtn(sel,客庫){

  // 清空前data
  $('#收睇台,#QRCode').text(' ')
  $('.查看所有枱').remove()
  $('#睇單box').html('  ')

  let 公p = '#公司資料page'
    , 類p = '#產品分類page'
    , 產p = '#產品資料page'
    , 收p = '#收款方式page'
    , 店p = '#睇枱用page'

    , 帳p = '#流水帳目page'
    , 鍵
    , 加流水Btn用 = 0

    if (sel === 1) {
      $('#settingBox_B').css('background', 'rgba(213, 0, 0, 0.3)');
      $(公p+",.刪枱").css('display', 'flex');
      $(類p+','+產p+','+收p+','+店p).css('display', 'none')
    }
    if (sel === 2) {
      $('#settingBox_B').css('background', 'rgba(170, 0, 255, 0.3)');$(類p).css('display', 'flex');$(公p+','+產p+','+收p+','+店p+','+帳p).css('display', 'none')
      $('#睇單box').html('<a onclick="SaveData2('+dot+客庫+dot+')" class="btn btn-'+網站按鍵色+' 睇鍵" style="background: rgba(170, 0, 255, 0.3);color: #fff;">保存</a>')
    }
    if (sel === 3) {
      $('#settingBox_B').css('background', 'rgba(245, 127, 23, 0.3)');$(產p).css('display', 'block');$(類p+','+收p+','+公p+','+店p+','+帳p).css('display', 'none')
      $('#睇單box').html('<a onclick="SaveData2('+dot+客庫+dot+')" class="btn btn-'+網站按鍵色+' 睇鍵" style="background: rgba(245, 127, 23, 0.3);color: #fff;">保存</a>')
    }
    if (sel === 4) {
      $('#settingBox_B').css('background', 'rgba(174, 234, 0, 0.3)');$(收p).css('display', 'block');$(類p+','+公p+','+產p+','+店p+','+帳p).css('display', 'none')
      $('#睇單box').html('<a onclick="SaveData2('+dot+客庫+dot+')" class="btn btn-'+網站按鍵色+' 睇鍵" style="background: rgba(174, 234, 0, 0.3);color: #fff;">保存</a>')
    }

  $('.枱號*').map(function(){
    // https://stackoverflow.com/a/28218673
    let 簡鍵 = 客主url+$(this).attr('data')+'?'    
      , 鍵尾 = 簡鍵.split('/')[3]
      , p鍵 = 客主url.split('?')[0]+'?'+escape(_0x5569ds(randomString(12)+鍵尾))
    鍵 = p鍵
    if (簡單版)鍵 = 簡鍵 // a.js

    if (sel === 5) {
      $('#settingBox_B').css('background', 'rgb(27, 94, 32, .3)');
      $('#睇枱用page h4').text('水吧');$(店p).css('display', 'block');
      $(類p+','+公p+','+產p+','+收p+','+".刪枱").css('display', 'none')
      $(this).attr('onclick', '店員睇台(0,'+dot+$(this).attr('title')+dot+','+dot+'水吧'+dot+')')

      if (加流水Btn用 !== 0) return
      $('#睇枱用List').append('<a onclick="店員睇台('+'0,0,'+dot+'水吧'+dot+')" title="查看所有出品" class="查看所有枱 btn btn-success" style="margin: 1%;cursor: pointer;">所有</a>')
      加流水Btn用++
      // 水吧睇出飲
    }

    if (sel === 6) {
      $('#settingBox_B').css('background', 'rgb(128, 222, 234, .3)');
      $('#睇枱用page h4').text('廚部');$(店p).css('display', 'block');
      $(類p+','+公p+','+產p+','+收p+','+".刪枱").css('display', 'none')
      $(this).attr('onclick', '店員睇台(0,'+dot+$(this).attr('title')+dot+','+dot+'廚'+dot+')')
      
      if (加流水Btn用 !== 0) return
      $('#睇枱用List').append('<a onclick="店員睇台('+'0,0,'+dot+'廚'+dot+')" title="查看所有出品" class="查看所有枱 btn btn-success" style="margin: 1%;cursor: pointer;">所有</a>')
      加流水Btn用++
      // 廚部睇出菜
    }
    if (sel === 7) {
      $('#settingBox_B').css('background', 'rgb(205, 220, 57,.4)');
      $('#睇枱用page h4').text('廳面');$(店p).css('display', 'block');
      $(類p+','+公p+','+產p+','+收p+','+".刪枱").css('display', 'none')
      $(this).attr('onclick', '店員睇台('+dot+鍵+dot+','+dot+$(this).attr('title')+dot+','+dot+'廳'+dot+')')  // 廳面點餐用
    }
    if (sel === 8) {
      $('#settingBox_B').css('background', 'rgb(98, 0, 234, .3)');
      $('#睇枱用page h4').text('收銀');$(店p).css('display', 'block');
      $(類p+','+公p+','+產p+','+收p+','+".刪枱").css('display', 'none')
      $(this).attr('onclick', '店員睇台('+dot+鍵+dot+','+dot+$(this).attr('title')+dot+','+dot+'收'+dot+')')  // 收銀=開台/結帳/點外買
    }

    //  流水帳目 
    if (sel === 9) {
      $('#settingBox_B').css('background', 'rgb(255, 214, 0, 0.3)');
      $('#睇枱用page h4').text('帳目');$(店p).css('display', 'block');
      $(類p+','+公p+','+產p+','+收p+",.刪枱").css('display', 'none');
      $(this).attr('onclick', '流水睇('+dot+$(this).attr('title')+dot+')') // 流水睇

      if (加流水Btn用 !== 0) return
      $('#睇枱用List').append('<a onclick="流水睇()" title="查看所有枱" class="查看所有枱 btn btn-success" style="margin: 1%;cursor: pointer;">所有</a>')
      _data入網_整div('流水頁selBtn','prepend','#睇單box',' ')
      加流水Btn用++
      

    }
  })

  


}






















// 色版 https://chat.openai.com/share/f5229ad4-76e0-4861-9580-710db9aefc1e
function _setupColorPalette() {
  const colorBoxes = document.querySelectorAll('.color-box');

  colorBoxes.forEach(colorBox => {
      colorBox.addEventListener('click', () => {
          const colorCode = colorBox.getAttribute('data-color');
          copyToClipboard(colorCode);
          console.log('已複製色碼：' + colorCode);
          $( "#色版標" ).html('已複製色碼：' + colorCode)
      });
  });
}
function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}
















async function 店員睇台(url員用,台,sel){

  // 清頁面
  $('#QRCode').html(' ')
  $('#睇單box').html(' 未入座 ')

  // 取all訂單
  let 客低 = _0x1731ba(unTxtZip(await _SeeGitHubTxt(_取明文(客主url.split('?')[1],'位').split('/')[0]+'/f')))
    , 每張單 = 客低.split('!平安?').reverse()
    , all未結帳單 = []
  
    // 出品表用 \\
    , 未出品 = []
    , 真未出list = []
  // 取未結帳
  for(var 數=0;數<每張單.length;數++) if (每張單[數].indexOf('未結帳') !== -1) all未結帳單.push(每張單[數])
  //console.log('all未結帳單=',all未結帳單)

  // 取產料
  for(var 數=0;數<all未結帳單.length;數++){ 
    未出品.push(
      all未結帳單[數].split('!好?')[0].replace("🐳","").replace("🦛","") + '!?' + // 台 單號
      all未結帳單[數].split('!好?')[1] + '!?' +  // 人數
      all未結帳單[數].split('!好?')[2] + '!?' +  // 時間
      all未結帳單[數].split('!好?')[3] + '!?'    // 產料
    )
  }
  //console.log('未出品=',未出品)

   // make 每出品 表 
  for(var 數=0;數<未出品.length;數++){
    let 單單 = 未出品[數].split('!?') // 每一單
      , 時間 = 單單[2]
      , 單號 = 單單[0].split('-')[1]
      , 台號 = 單單[0].split('-')[0]
      , 人數 = 單單[1]
      , 產料BB = ''

    for(var 數B=3;數B<單單.length;數B=數B+3){
      let 產料 = 單單[數B]
        , 產項 = 單單[數B+1]
      
      if (產料.indexOf('總金額') !== -1) 產料 = ''
      if (!產項) 產項 = ''
      產料BB = 時間 + 格 + 單號 + 格 + 台號 + 格 + 人數 + 格 + 產料 + 格 + 產項 + 格
      真未出list.push(產料BB)
      //console.log('時間=',時間,'單號=',單號,'台號=',台號,'人數=',人數,'產料=',產料,'產項=',產項)
    }
  }

  if(sel === '水吧'){
    // 水吧睇出飲
    // 刪空
    let 水出品表B = 水出品表.filter(el => el)
      , 水吧睇出飲 = []
      , 水出box = ''
      , 指定台 = []
    //console.log('真未出list',真未出list)
    //console.log('水出品表',水出品表B)
    // 水未出list
    for(var 數入真=0 ; 數入真 < 真未出list.length ; 數入真++) if(水出品表B.includes(真未出list[數入真].split(格)[4].split('$')[0])) 水吧睇出飲.push(真未出list[數入真])

    // 指定台
    if(台){
      for(var 數指定台=0 ; 數指定台 < 水吧睇出飲.length ; 數指定台++) if (水吧睇出飲[數指定台].indexOf(台) !== -1) 指定台.push(水吧睇出飲[數指定台])
      水吧睇出飲 = 指定台
      $('#收睇台').html('')
    }
    console.log('水吧睇出飲',水吧睇出飲)
    // make 水出box
    for(var 數水box=0 ; 數水box < 水吧睇出飲.length ; 數水box++){
      水出box = '\
      <table class="帳房流水睇css 出品css" >\
        <thead align="left" valign="middle">\
          <tr><td>點餐時間:</td><td title="點餐時間">'+水吧睇出飲[數水box].split(格)[0]+'</td></tr>\
          <tr><td>單號:</td><td title="單號" >'+水吧睇出飲[數水box].split(格)[1]+'</td></tr>\
          <tr><td>台號:</td><td title="台號" >'+水吧睇出飲[數水box].split(格)[2]+'</td></tr>\
          <tr><td>人數:</td><td title="人數" >'+水吧睇出飲[數水box].split(格)[3]+'</td></tr>\
          <tr><td>內容:</td><td title="內容" >'+水吧睇出飲[數水box].split(格)[4]+'</td></tr>\
          <tr><td>選項:</td><td title="選項" >'+水吧睇出飲[數水box].split(格)[5]+'</td></tr>\
        </thead>\
      </table>'
      _data入網_整div('萬','append','#收睇台',水出box)
    }
  }


  
  if(sel === '廚'){
    // 廚部睇出菜
    // 刪空
    let 廚出品表B = 廚出品表.filter(el => el)
      , 廚部睇出菜 = []
      , 廚出box = ''
      , 指定台 = []
    //console.log('真未出list',真未出list)
    //console.log('廚出品表',廚出品表B)
    // 水未出list
    for(var 數入真=0 ; 數入真 < 真未出list.length ; 數入真++) if(廚出品表B.includes(真未出list[數入真].split(格)[4].split('$')[0])) 廚部睇出菜.push(真未出list[數入真])

    // 指定台
    if(台){
      for(var 數指定台=0 ; 數指定台 < 廚部睇出菜.length ; 數指定台++) if (廚部睇出菜[數指定台].indexOf(台) !== -1) 指定台.push(廚部睇出菜[數指定台])
      廚部睇出菜 = 指定台
      $('#收睇台').html('')
    }
    //console.log('廚部睇出菜',廚部睇出菜)
    // make 廚出box
    for(var 數水box=0 ; 數水box < 廚部睇出菜.length ; 數水box++){
      廚出box = '\
      <table class="帳房流水睇css 出品css" >\
        <thead align="left" valign="middle">\
          <tr><td>點餐時間:</td><td title="點餐時間" >'+廚部睇出菜[數水box].split(格)[0]+'</td></tr>\
          <tr><td>單號:</td><td title="單號" >'+廚部睇出菜[數水box].split(格)[1]+'</td></tr>\
          <tr><td>台號:</td><td title="台號" >'+廚部睇出菜[數水box].split(格)[2]+'</td></tr>\
          <tr><td>人數:</td><td title="人數" >'+廚部睇出菜[數水box].split(格)[3]+'</td></tr>\
          <tr><td>內容:</td><td title="內容" >'+廚部睇出菜[數水box].split(格)[4]+'</td></tr>\
          <tr><td>選項:</td><td title="選項" >'+廚部睇出菜[數水box].split(格)[5]+'</td></tr>\
        </thead>\
      </table>'
      _data入網_整div('萬','append','#收睇台',廚出box)
    }
  }









































  if(sel === '廳'){
    // 背景轉客網
    $('#user頁').attr('src', url員用)
    console.log('台url廳面用',url員用)
    // 關set頁
    settingBox_toggle()
  }

  if(sel === '收'){
    // 收銀=開台/結帳/點外買
    console.log('收銀=開台/結帳/點外買',url員用)

    // 背景轉客網
    $('#user頁').attr('src', url員用)

    // 台號
    $('#收睇台').html(台)

    // 新開台單QR https://juejin.cn/post/7208010597173755959
    QR = new QRCode(document.getElementById("QRCode"), {
      text: url員用,
      width: 200,height: 200,
      colorDark: "#000000",colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    })

    // 此台未結帳尾單
    let 此台尾單車用 = 每張單.find(element => element.includes('🐳'+台+'🦛'))

    if (此台尾單車用 && 此台尾單車用.indexOf(帳單未結帳) !== -1) {
      let 尾單料 = _顯示已提交未結帳的訂單(此台尾單車用)
      _data入網_整div('收睇台單1','html','#睇單box',[尾單料[0],尾單料[1],此台尾單車用,台,url員用])
      _data入網_整div('萬','append','#顯示已點的訂單床',[尾單料[2]])
      _data入網_整div('收睇台單2','append','#顯示已點的訂單床',[尾單料[3]])
    }
  }
}







async function 確認已結帳(單料,台,url員用) {

  let 收銀密碼 = prompt('請填寫收銀員密碼')
    , 客Ulr已結帳 = 客主url.split('?')[1]
  if(收銀密碼 !== '1') return /// qqq 

  // 改數薄
  let 客低 = _0x1731ba(unTxtZip(await _SeeGitHubTxt(_取明文(客Ulr已結帳,'位').split('/')[0]+'/f')))
    , 客低cut = 客低.split(單料)
    , 單料cut = 單料.split(帳單未結帳)
    , 新單料 = 單料cut[0] + nowTime() + '已結帳!!'
    , 客2低 = 客低cut[0] + 新單料 + 客低cut[1]

  console.log('客低!!',客低.split('!平安?'))
  console.log('客2低!!',客2低.split('!平安?'))

  // up數薄
  await _upTxtToGitHub(_取明文(客Ulr已結帳,'位').split('/')[0] +'/f',TxtZip(escape(_0x5569ds(客2低))))
  console.log(台,'結帳成功!!')

  店員睇台(url員用,台,'收')

}









async function 流水睇(台) {

  // 取數薄
  let 客低 = _0x1731ba(unTxtZip(await _SeeGitHubTxt(_取明文(客主url.split('?')[1],'位').split('/')[0]+'/f')))
    , 每張單 = 客低.split('!平安?').reverse()
    , all料 = ''
    , 指定台單 = []
    , 關鍵字單 = []
    , 日期單 = []
    , 由日期 = $( "#流水由日期" ).val()
    , 到日期 = $( "#流水到日期" ).val()
  console.log('每張單...',每張單)

  // 睇指定台
  if(台){
    for(var 數=0;數<每張單.length;數++) if (每張單[數].indexOf('🐳'+台+'🦛') !== -1) 指定台單.push(每張單[數])
    每張單 = 指定台單
  }

  // 睇日期單
  if(由日期 !== '' || 到日期 !== ''){
    if(由日期 === '') 由日期 = '1800-01-01'
    if(到日期 === '') 到日期 = nowTime().split('_')[0]
    // js 判断当前日期时间是否处于某个日期范围 https://www.cnblogs.com/sirdong/p/11542153.html
    for(var 數=0;數<每張單.length;數++){
      let 單時間 = 每張單[數].split('!好?')[2].split('_')[0]
      if (單時間 >= 由日期 && 單時間 <= 到日期) 日期單.push(每張單[數])
    }
    每張單 = 日期單
  }
  
  // 睇關鍵字單
  if($( "#流水關鍵字" ).val() !== ''){
    for(var 數=0;數<每張單.length;數++) if (每張單[數].indexOf($( "#流水關鍵字" ).val()) !== -1) 關鍵字單.push(每張單[數])
    每張單 = 關鍵字單
  }

  // cut數薄
  for(var 數=0;數<每張單.length;數++){
    let 台號日期單號 = 每張單[數].split('!好?')
      , 單號 = 台號日期單號[0].split('-')[1]
      , 台號 = 台號日期單號[0].split('-')[0].replace("🐳","").replace("🦛","")
      , 入座人數 = 台號日期單號[1]
      , 入座時間 = 台號日期單號[2]
      , 單內容細項 = 台號日期單號[3].split('!?') 
      , 結帳時間 = 台號日期單號[4]
    //console.log('單內容細項...',單內容細項)

    // 收據頂
    all料 = all料 + '\
    <table class="帳房流水睇css" >\
     <thead align="center" valign="middle">\
      <tr>\
        <td colspan="6" title="店名" ><h1>'+客主url.split('?')[1]+'</h1></td>\
      </tr>\
      <tr><td colspan="6" title="店址" >店址</td></tr>\
      <tr><td colspan="6" title="電話" >'+公司ws+'</td></tr>\
      <tr>\
        <td colspan="3" title="台號" style="width: 50%;">台號:<h2>'+台號+'</h2></td>\
        <td colspan="3" title="人數" >人數:<h2>'+入座人數+'</h2></td>\
      </tr>\
      <tr>\
        <td colspan="3" title="單號" >單號:'+單號+'</td>\
        <td colspan="3" title="店員">店員:</td>\
      </tr>\
      <tr>\
        <td colspan="6" title="入座時間">時間:'+入座時間+'</td>\
      </tr>\
      <tr><td colspan="6">   - - - - - - - -   </td></tr>'

    // cut單內容
    for(var 數B=0;數B<單內容細項.length;數B=數B+3){
      let 品名 = '<td colspan="4" style="font-weight: 600;font-size: 110%;" align="left" >' + 單內容細項[數B] + '</td>'
        , 單金 = '<td colspan="2" style="font-weight: 600;font-size: 110%;" align="right" >' + 單內容細項[數B+2] + '</td>'
        , 選項 = '<td colspan="6" align="left">* ' + 單內容細項[數B+1] + ' *</td>'
        
      if ((單內容細項[數B]).indexOf('總金額') !== -1) 品名 = '</td><td colspan="6" align="right" style="font-weight: 900;font-size: 140%;">' + 單內容細項[數B] + '</td>'

      if (!單內容細項[數B+1]) 選項 = ''

      if (單內容細項[數B+1] && (單內容細項[數B+1]).indexOf('- 加單') !== -1) 選項 = '<td colspan="6" align="center">店員:' + 單內容細項[數B+1] + '</td>'

      if(!單內容細項[數B+2]) 單金 = '<td colspan="2"></td>'

      all料 = all料 + '<tr>' + 品名+單金 + '</tr>' + '<tr>' + 選項 + '</tr>'
      
    }

    // 收據尾
    all料 =  all料 + '\
      <tr>\
        <td colspan="6" title="結帳時間">結帳:'+結帳時間+'</td>\
      </tr>\
      <tr><td colspan="6">   - - - - - - - -   </td></tr>\
   </thead>\
  </table>'
  }
  //console.log('all料...',all料)

  if(台 && 指定台單.length<1) all料 = 台+'未有帳目!!'
  // 睇all
  _data入網_整div('萬','html','#帳房流水睇',all料)

}














let 新增D野數 = 0
  , 增台用 = 0
function 新增D野(sel,鍵色){
  新增D野數++

  // 重構產轉類
  產轉類bTxTList = 產轉類.split('產品資料')
  產轉類bTxTListB = 產轉類bTxTList[1].split('form-select')
  產轉類bTxTListC = 產轉類bTxTList[0] + '產品資料' + 新增D野數 + '_新增 form-select' + 產轉類bTxTListB[1]
  if (sel == '產料') _data入網_整div('產品資料page','prepend','#產品資料List',['請填寫產品名','0.00',NoIMG,'',產轉類bTxTListC,1,新增D野數,''])

  if (sel.indexOf('產品選項') !== -1) {
    _data入網_整div('萬','prepend','.'+sel+'box',
      '產品選項組 (多飯+$5 / 少飯$0) : <input title="產品選項" type="text" class="產品資料 '+sel+'的選項 form-control" placeholder="產品選項A" value="" />\
      <input title="產品選項的收費" type="text" class="產品資料 '+sel+'的選項的收費 form-control" style="width: 50%;" placeholder="產品選項A的收費" value="" />\
      <input title="產品選項" type="text" class="產品資料 '+sel+'B的選項 form-control" placeholder="產品選項B" value="" />\
      <input title="產品選項的收費" type="text" class="產品資料 '+sel+'B的選項的收費 form-control" style="width: 50%;" placeholder="產品選項B的收費" value="" />\
      <br>'
    )
  }

  if (sel == '產類') _data入網_整div('產品分類page','prepend','#產品分類List',['請填寫分類名','新增分類'+新增D野數,'',顯po用0Demo+顯po用1Demo+顯po用2Demo+顯po用3Demo

])

  if (sel == '收式') _data入網_整div('收款方式page','prepend','#收款方式List',['請填寫支付方式名稱','請填寫支付方式的文字描述、收款碼網址或帳戶號碼等...','新增支付方式_'+nowTime()+'_'+新增D野數,''])

  if (sel == '增台') {
    if (增台用 === 0) $('#店舖枱號編').prepend('<a onclick="增加台台('+dot+鍵色+dot+')" class="btn btn-'+鍵色+'" style="margin: 1%;width: 98%;" >增加</a>')
    增台用++
    _data入網_整div('增台鍵','prepend','#店舖枱號編',' ') 
  }

}



























async function SaveData2(UsAPI){

  let 收款式 = 類名 = 枱號 = 公司logo = 公司logoUlr = AllData = 產料 = 水品 = 廚品 = ''
    , 對重 = []

  console.log('更新中...')
  $( ".睇鍵" ).html(loingIcon+'更新中...').attr("onclick",'')

  // $$$$$$$$$$ 公司料 $$$$$$$$$$ \\
  // 上傳公司logo
  公司logoUlr = await _UpAllIMG('公司logo','公司logo',UsAPI)

  let 公司料 = 
    $( "#公司名稱" ).val()       + 格 +
    公司logoUlr                  + 格 +
    $( "#公司Whatsapp號" ).val() + 格 +
    $( "#ws來詢字" ).val()       + 格 +
    $( "#網站按鍵色" ).val()     + 格 +
    $( "#網主色" ).val()         + 格 +
    $( "#網副色" ).val()         + 格 +
    $( "#字主色" ).val()         + 格 +
    $( "#字副色" ).val()         + 格 +
    $( "#圖片最小寬度" ).val()   + 格 +
    $( "#圖片最大寬度" ).val()   + 格 
  //console.log('公司料!',公司料)


  // $$$$$$$$$$ 枱號 $$$$$$$$$$ \\
  $('#店舖枱號編 .枱號').map(function() { // 加台 由 admin
    枱號 = 枱號 + $(this).attr('data') + 格
  }).get().join()
  //console.log('枱號!',枱號)


  // $$$$$$$$$$ 產品分類 $$$$$$$$$$ \\
  // 取產品分類
  對重.length = 0 // 清空list
  $('.產品分類').map(function() {  // 取all .產品分類 的 val
    對重.push($(this).val())
  }).get().join()
  // 西損
  對重B = []
  for(var 數=0 ; 數 < 對重.length ; 數=數+3){
    // 有名及沒重
    // https://chat.openai.com/share/f71c60e5-f890-4631-9c54-cf28fb8aca53
    if(對重[數] !== '' && !對重B.includes(對重[數])) 對重B.push(對重[數],對重[數+1],對重[數+2])
  }

  // 入data
  for(var 數=0 ; 數 < 對重B.length ; 數++){
    類名 = 類名 + 對重B[數] + 格
  }
  //console.log('類名!',類名)


  // $$$$$$$$$$ 收款方式 $$$$$$$$$$ \\
  // 取收款方式名
  let 真收名 = []  , 去重 = []  , 項id = [] , 真項id = []  
  對重.length = 0
  $('.收款方式 .收款方式名').map(async function() {
    對重.push($(this).val()) 
  }).get().join()

  // 利用indexOf()方法去重 https://www.itheima.com/news/20211124/150322.html
  for(var cont=0 ; cont < 對重.length ; cont++){
    if (真收名.indexOf(對重[cont]) === -1 && 對重[cont] !== '') 真收名.push(對重[cont]) // 入 真收名 如 真收名內沒 // 不空入
    else 去重.push(cont) // 真收名內有 save不要的號 用indexOf法 入收款方式code
  }

  // 取收款方式項真id
  $('.收款方式 .收款方式項').map(async function() {
    項id.push($(this).attr('id')) 
  }).get().join()

  for(var cont=0 ; cont < 項id.length ; cont++){
    if (去重.indexOf(cont) === -1) 真項id.push(項id[cont]) // 入 真項id 如真項id內沒
  }

  // 取 真項id.var
  for(var cont=0 ; cont < 真收名.length ; cont++){ 
    收款的圖 = await _UpAllIMG(真項id[cont],'收款圖_'+cont,UsAPI)
    收款式 = 收款式 + 真收名[cont] + 格 + 收款的圖 + 格
  }
  //console.log('收款式!',收款式)


  // $$$$$$$$$$ 產品資料 $$$$$$$$$$ \\
  let 搵品名 = 0
    , 單產品list = []
    , 先取產料轉list備用 =[]

  // 先取產料轉list備用
  $('[class^="產品資料"]').each(function() {
    //console.log('搵品名!',搵品名,'$(this).val()',$(this).val())
    //2=產圖取id 其他取vrl
    if (搵品名 === 2) 單產品list.push($(this).attr('id')) 
    else 單產品list.push($(this).val())

    搵品名++
    // END=下組產品  
    if ($(this).attr('class').indexOf('END4v65c4v654646') !== -1) { 
      if(!!單產品list[1]) 先取產料轉list備用.push(...單產品list) // 產組有名入
      單產品list = [] // 清單品
      搵品名 = 0 
    }
  }).get().join()
  //console.log('先取產料轉list備用!',先取產料轉list備用)

  // 取得產料整理寫data
  for(var cont=0 ; cont < 先取產料轉list備用.length ; cont++){
    if (先取產料轉list備用[cont].indexOf('_up圖') !== -1) {
      產料入 = await _UpAllIMG(先取產料轉list備用[cont],先取產料轉list備用[cont]+'_產品圖',UsAPI)
    }  else 產料入 = 先取產料轉list備用[cont] //非圖直入
    產料 = 產料 + 產料入 + 格
  }
  //console.log('產料!',產料)


  // $$$$$$$$$$ 出品顯 $$$$$$$$$$ \\
  let 出品顯分 = 類名.split(格)
    , 水顯 = []
    , 廚顯 = []
  // 取 產品分類 選顯出品
  for(var 數出用=0 ; 數出用 < 出品顯分.length ; 數出用=數出用+3){ 
    let 產名入出 = 出品顯分[數出用]
      , 入邊 = 出品顯分[數出用+1]
    // 0 全入 / 1 廚入 / 2 水入
    if (入邊 === '0') {水顯.push(產名入出);廚顯.push(產名入出)}
    if (入邊 === '1') {廚顯.push(產名入出)}
    if (入邊 === '2') {水顯.push(產名入出)}
  }
  //console.log('水品!',水品)
  //console.log('廚品!',廚品)
  let 產類轉料名 = [] 
    , 產名表 = 產料.split('///-///')
    , 真廚顯 = []
    , 真水顯 = []
  // 取產類 料名
  for(var 數真顯用=0 ; 數真顯用 < 產名表.length ; 數真顯用++){ 
    if(數真顯用 === 0 ) 產類轉料名.push(產名表[數真顯用],產名表[數真顯用+1])
    if(產名表[數真顯用] === "END4v65c4v654646" ) 產類轉料名.push(產名表[數真顯用+1],產名表[數真顯用+2])
  }
  //console.log('產類轉料名!',產類轉料名)
  // 產類在 水顯 = 入料名
  for(var 數入真=0 ; 數入真 < 產類轉料名.length ; 數入真++) if(水顯.includes(產類轉料名[數入真])) 真水顯.push(產類轉料名[數入真+1])
  // 產類在 廚顯 = 入料名
  for(var 數入真=0 ; 數入真 < 產類轉料名.length ; 數入真++) if(廚顯.includes(產類轉料名[數入真])) 真廚顯.push(產類轉料名[數入真+1])
  //console.log('真水顯!',真水顯)
  //console.log('真廚顯!',真廚顯)
  for(var cont=0 ; cont < 真水顯.length ; cont++)  水品 = 水品 + 真水顯[cont] + 格
  for(var cont=0 ; cont < 真廚顯.length ; cont++)  廚品 = 廚品 + 真廚顯[cont] + 格

  // $$$$$$$$$$ Save AllData $$$$$$$$$$ \\
  AllData = nowTime() + 線
          + 公司料    + 線
          + 類名      + 線
          + 收款式    + 線
          + 枱號      + 線
          + 產料      + 線
          + 水品      + 線
          + 廚品      + 線
          + nowTime()
  
  //console.log('AllData!',AllData)
  await _upTxtToGitHub(UsAPI+'/d',escape(_0x5569ds(AllData)))


  // $$$$$$$$$$ 前台信息 $$$$$$$$$$ \\
  console.log('AllData!',AllData)
  console.log('更新完成!請重新登入!')
  $( ".睇鍵" ).text('更新完成! 請重新登入!')
  // JavaScript实现F5效果，清空缓存并刷新页面 https://cloud.tencent.com/developer/article/2317807
  window.location.reload(false)
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














