



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
let 客主url 
function _客setting頁(客Url,客api){

  // get客data
  let GEcl = 查客[0]+_0x1731ba(客api)+查客[1]+'d'+查客[2]+_0x1731ba(api)
    , url = (location.href).split('/set')[0] + '?' +客Url+ '?' 

    客主url = url

  //console.log('url',url) 
  if (MOK) console.log('user的dataUlr',GEcl,'\nurl',url)

  // make user data box
  _data入網_整div('user頁','html','#set_page','0') 

  _admin編輯(GEcl,客Url)

  // _流水帳目(流水帳目)

  // _保存(保存)

  // 最後背景加客網
  //$('#user頁').attr('src', url)

}






































function _admin編輯(data,Url) {  
  let settingMenuSelLV = 'settingMenuSel編+settingMenuSel店+settingMenuSel帳'

  // 用G資料
  fetch(data).then(res => res.json()).then(res => {

    // $$$$$$$$ 框架 $$$$$$$$
    let 公司名   = res.values[docsGoogle開始數][0]
      , 網站按鍵色   = res.values[1][4]
    _data入網_整div('settingBox','append','#set_page',[公司名]) 
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
    _data入網_整div(settingMenuSelLV,'append','#settingMenu','0')
     // $$$$$$$$  ///  $$$$$$$$

    // 東主 / 小編 / 店員 可見
    if (ADminLV > 3 )  return 

    // $$$$$$$$ 店舖枱號 $$$$$$$$
    all枱號 = _搵台(res.values,客主url,網站按鍵色)
    _data入網_整div('共用page','append','#settingBox_B',['睇枱用',''])
    _data入網_整div('萬','prepend','#睇枱用List',all枱號)  
     // $$$$$$$$  ///  $$$$$$$$

    // 東主 / 小編 可見
    if (ADminLV > 2 )  return

    // $$$$$$$$ 公司資料page $$$$$$$$
    let 網lv     = res.values[0][0]    // aki set
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
    _data入網_整div('共用page','append','#settingBox_B',['產品分類','<a onclick="新增產品分類()" class="btn btn-' + 網站按鍵色 + '" >新增產品分類</a>'])
    _data入網_整div('共用page','append','#settingBox_B',['產品資料','<a onclick="產品資料分類()" class="btn btn-' + 網站按鍵色 + '" >產品資料分類</a>'])
    _data入網_整div('共用page','append','#settingBox_B',['收款方式','<a onclick="收款方式分類()" class="btn btn-' + 網站按鍵色 + '" >收款方式分類</a>'])
     // $$$$$$$$  ///  $$$$$$$$

    // $$$$$$$$ 產品分類page $$$$$$$$
    let all產品分類 = []
    for(var 數=docsGoogle開始數+2 ; 數 < res.values.length ; 數++){
      let 產品分類名 = res.values[數][0]
        , 加購流程號 = res.values[數][1]
      if (!加購流程號) 加購流程號 = ''

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
      if (!產品圖) 產品圖 = NoIMG

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
    for(var 數=0;數 < r2es.values.length ; 數++)  if (id1 === r2es.values[數][0] && pw1 === r2es.values[數][id位]) { ADminLV = ~~1; 如數 = 數;}
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
      $('#pwWorg').text(id+'歡迎您!!')
      console.log('歡迎您=',id)

      // SaveID to localStorage
      if(SaveID.checked) localStorage.setItem("id",[id,pw])

      // get 客api
      _客setting頁(id,r2es.values[如數][1])

      if (MOK) {
        console.log('id1=',id1,'\npw1=',pw1,'\n有有數',數)
        console.log('如數=',如數)
        console.log('ADminLV=',ADminLV)
      }
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
    , 店p = '#睇枱用page'
    
  $('.枱號*').map(function(){
    // https://stackoverflow.com/a/28218673
    let 鍵 = 客主url+$(this).attr('data')+'?'+$(this).attr('title')+'?'

    if (sel === 1) {$('#settingBox_B').css('background', 'rgba(213, 0, 0, 0.3)');$(公p).css('display', 'flex');$(類p+','+產p+','+收p+','+店p).css('display', 'none')}
    if (sel === 2) {$('#settingBox_B').css('background', 'rgba(170, 0, 255, 0.3)');$(類p).css('display', 'flex');$(公p+','+產p+','+收p+','+店p).css('display', 'none')}
    if (sel === 3) {$('#settingBox_B').css('background', 'rgba(245, 127, 23, 0.3)');$(產p).css('display', 'block');$(類p+','+收p+','+公p+','+店p).css('display', 'none')}
    if (sel === 4) {$('#settingBox_B').css('background', 'rgba(174, 234, 0, 0.3)');$(收p).css('display', 'block');$(類p+','+公p+','+產p+','+店p).css('display', 'none')}

    if (sel === 5) {$('#settingBox_B').css('background', 'rgba(27, 94, 32, 0.3)')}
    
    if (sel === 6) {
      $('#settingBox_B').css('background', 'rgb(128, 222, 234, .3)');$('#睇枱用page h4').text('廚部');$(店p).css('display', 'block');$(類p+','+公p+','+產p+','+收p).css('display', 'none')
      $(this).attr('onclick', '店員睇台('+dot+鍵+dot+','+dot+'廚'+dot+')')  // 廚部睇出菜
    }
    if (sel === 7) {
      $('#settingBox_B').css('background', 'rgb(205, 220, 57,.4)');$('#睇枱用page h4').text('廳面');$(店p).css('display', 'block');$(類p+','+公p+','+產p+','+收p).css('display', 'none')
      $(this).attr('onclick', '店員睇台('+dot+鍵+dot+','+dot+'廳'+dot+')')  // 廳面點餐用
    }
    if (sel === 8) {
      $('#settingBox_B').css('background', 'rgb(98, 0, 234, .3)');$('#睇枱用page h4').text('收銀');$(店p).css('display', 'block');$(類p+','+公p+','+產p+','+收p).css('display', 'none')
      $(this).attr('onclick', '店員睇台('+dot+鍵+dot+','+dot+'收'+dot+')')  // 收銀=開台/結帳/點外買
    }

    if (sel === 9) {$('#settingBox_B').css('background', 'rgb(255, 214, 0, 0.3)');$('#睇枱用page h4').text('帳目');$(店p).css('display', 'block');$(類p+','+公p+','+產p+','+收p).css('display', 'none')}
  })
}



// 當選項改變時觸發事件 
function Change網站按鍵色(){
  let 網站按鍵色31 = $('#網站按鍵色').val();
  console.log(網站按鍵色31);
  $('#test網站按鍵色').attr('class', 'btn btn-'+網站按鍵色31)
  $('#test網站按鍵色').text(網站按鍵色31)
}





function 店員睇台(url員用,sel){
  if(sel === '廚'){
    // 廚部睇出菜
    console.log('廚部睇出菜',url員用)
    $('.睇data哈哈').text('廚部睇出菜'+url員用)
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
    $('.睇data哈哈').text('收銀=開台/結帳/點外買'+url員用)
  }
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



