



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
let 客主url , 客api0
function _客setting頁(客Url,客api){

  
  // get客data
  客api0 = 客api
  let GEcl = 查客[0]+_0x1731ba(客api)+查客[1]+'d'+查客[2]+_0x1731ba(api)
    , url = (location.href).split('/s')[0] + '?' +客Url+ '?' 

  客主url = url

  //console.log('url',url) 
  if (MOK) console.log('user的dataUlr',GEcl,'\nurl',url)

  // make user data box
  _data入網_整div('user頁','html','#set_page',' ') 

  _admin編輯(GEcl,客Url)

  // _流水帳目(流水帳目)

  // _保存(保存)

  // 最後背景加客網
  $('#user頁').attr('src', url)

}





































let gsApi
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
    gsApi        = res.values[0][1]
    let 網lv     = res.values[0][0]    // aki set
      , 公司logo = res.values[docsGoogle開始數][4]
      , 公司ws   = res.values[docsGoogle開始數][1]
      , ws來詢字 = res.values[docsGoogle開始數][2]
    
    
       // $$$$$$$$  ///  $$$$$$$$



       // qqqqqq 網站按鍵色
      // $$$$$$$$  外觀美化 $$$$$$$$
      , 網主色  = res.values[1][5]
      , 網副色  = res.values[1][6]
      , 字主色  = res.values[1][7]
      , 字副色  = res.values[1][8]
      , 圖高    = res.values[1][9]
      , 圖高mx  = res.values[1][10]
      , 圖橫    = res.values[1][11]
      , 圖橫mx  = res.values[1][12] //13

      , 按鍵色 = ' '
      , 按鍵色List  = ['info','primary','success','warning','danger','secondary','light']

      按鍵色List.unshift(按鍵色List.splice(按鍵色List.indexOf(網站按鍵色), 1)[0])
      for(var 唉for鍵色=0 ; 唉for鍵色 < 按鍵色List.length ; 唉for鍵色++){
        按鍵色 = 按鍵色 + '<option value="'+按鍵色List[唉for鍵色]+'">'+按鍵色List[唉for鍵色]+'</option>'
      }
      按鍵色 = '<select class="form-select" id="網站按鍵色">'+按鍵色+'</select>'


      // $$$$$$$$  ///  $$$$$$$$

    // $$$$$$$$ 各頁用框架 $$$$$$$$
    _data入網_整div( 
      '公司資料page','append','#settingBox_B'
      ,[Url,網lv,公司名,公司logo,公司ws,ws來詢字,網站按鍵色,網主色,網副色,字主色,字副色,圖高,圖高mx,圖橫,圖橫mx,all枱號,按鍵色] 
    )
    _data入網_整div('共用page','append','#settingBox_B',['產品分類','<a onclick="新增產品分類()" class="btn btn-' + 網站按鍵色 + '" >新增產品分類qqq </a>'])
    _data入網_整div('共用page','append','#settingBox_B',['產品資料','<a onclick="新增產品資料()" class="btn btn-' + 網站按鍵色 + '" >新增產品資料qqq </a>'])
    _data入網_整div('共用page','append','#settingBox_B',['收款方式','<a onclick="新增收款方式()" class="btn btn-' + 網站按鍵色 + '" >新增收款方式qqq </a>'])
     // $$$$$$$$  ///  $$$$$$$$

    // $$$$$$$$ 產品分類page $$$$$$$$
    let all產品分類  = []
    for(var 數=docsGoogle開始數+2 ; 數 < res.values.length ; 數++){
      let 產品分類名 = res.values[數][0]
        
      

      if (!!產品分類名) {
        _data入網_整div('產品分類page','prepend','#產品分類List',[產品分類名,~~數+1])
        all產品分類.push(產品分類名)
      }
    }
    // $$$$$$$$  ///  $$$$$$$$

    // $$$$$$$$ 產品資料page $$$$$$$$
    let 產轉類 = ''
    for(var 數=docsGoogle開始數+2 ; 數 < res.values.length ; 數++){
      let 產品名 = res.values[數][4]
      , 產品價錢 = res.values[數][5]
      , 產品圖   = res.values[數][6]
      , 加購流程號 = res.values[數][1]
      , 換行     = 單品option = ''
      if (!產品圖) 產品圖 = NoIMG

      if (!!res.values[數][0]) {  // 如有取 產品分類名

        all產品分類.unshift(all產品分類.splice(all產品分類.indexOf(res.values[數][0]), 1)[0]) // Monica js list 移到  第一位
        for(var 唉for類=0 ; 唉for類 < all產品分類.length ; 唉for類++){單品option = 單品option + '<option value="'+all產品分類[唉for類]+'">'+all產品分類[唉for類]+'</option>'}
        產轉類 = '產品分類 = <select class="form-select" id="'+產品名+'轉類">'+單品option+'</select>'
        
        
        換行 = '<hr style="clear:both; width: 100%;">'
      }
      if (!加購流程號) 加購流程號 = ''
      if (!!產品名) _data入網_整div('產品資料page','prepend','#產品資料List',[產品名,產品價錢,產品圖,換行,產轉類,加購流程號])
    }
    // $$$$$$$$  ///  $$$$$$$$

    // $$$$$$$$ 收款方式page $$$$$$$$
    let 止=0
    for(var 支付方式開始數=9 ; 止 < 2 ; 支付方式開始數++){ // loop找支付方式
      let 支付方式名 = res.values[2][支付方式開始數]
        , 支付方式料 = res.values[3][支付方式開始數]
      if (!!支付方式名) _data入網_整div('收款方式page','prepend','#收款方式List',[支付方式名,支付方式料,支付方式開始數])
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


// 當選項改變時觸發事件 
function Change網站按鍵色(){
  let 網站按鍵色31 = $('#網站按鍵色').val();
  console.log(網站按鍵色31);
  $('#test網站按鍵色').attr('class', 'btn btn-'+網站按鍵色31)
  $('#test網站按鍵色').text(網站按鍵色31)
}


// 刪除選項 
function DelInput(選,號){
  $( "#"+選+"名_"+號 +","+ "#"+選+"項_"+號 ).val('')
  $( "#"+選+"_"+號 +"_BOX" ).css('display', 'none')
}





// settingBox btn run 

// settingMenu btn
function settingMenuBtn(sel){

  // 清空前data
  $('#收睇台,#QRCode').text(' ')

  let 公p = '#公司資料page'
    , 類p = '#產品分類page'
    , 產p = '#產品資料page'
    , 收p = '#收款方式page'
    , 店p = '#睇枱用page'
    
  $('.枱號*').map(function(){
    // https://stackoverflow.com/a/28218673
    let 鍵 = 客主url+$(this).attr('data')+'?'+$(this).attr('title')+'?'

    if (sel === 1) {
      $('#settingBox_B').css('background', 'rgba(213, 0, 0, 0.3)');$(公p).css('display', 'flex');$(類p+','+產p+','+收p+','+店p).css('display', 'none')
      $('#保存鍵').attr('onclick', 'SaveData('+dot+'公'+dot+')')  // 公司資料 Save
      $('#保存鍵').css('background', 'rgba(213, 0, 0, 0.3)')
    }
    if (sel === 2) {
      $('#settingBox_B').css('background', 'rgba(170, 0, 255, 0.3)');$(類p).css('display', 'flex');$(公p+','+產p+','+收p+','+店p).css('display', 'none')
      $('#保存鍵').attr('onclick', 'SaveData('+dot+'類'+dot+')')  // 產品類 Save
      $('#保存鍵').css('background', 'rgba(170, 0, 255, 0.3)')
    }
    if (sel === 3) {
      $('#settingBox_B').css('background', 'rgba(245, 127, 23, 0.3)');$(產p).css('display', 'block');$(類p+','+收p+','+公p+','+店p).css('display', 'none')
      $('#保存鍵').attr('onclick', 'SaveData('+dot+'產'+dot+')')  // 產品料 Save
      $('#保存鍵').css('background', 'rgba(245, 127, 23, 0.3)')
    }
    if (sel === 4) {
      $('#settingBox_B').css('background', 'rgba(174, 234, 0, 0.3)');$(收p).css('display', 'block');$(類p+','+公p+','+產p+','+店p).css('display', 'none')
      $('#保存鍵').attr('onclick', 'SaveData('+dot+'收'+dot+')')  // 收款式 Save
      $('#保存鍵').css('background', 'rgba(174, 234, 0, 0.3)')
    }

    //if (sel === 5) {$('#settingBox_B').css('background', 'rgba(27, 94, 32, 0.3)')}
    
    if (sel === 6) {
      $('#settingBox_B').css('background', 'rgb(128, 222, 234, .3)');$('#睇枱用page h4').text('廚部');$(店p).css('display', 'block');$(類p+','+公p+','+產p+','+收p).css('display', 'none')
      $(this).attr('onclick', '店員睇台('+dot+鍵+dot+','+dot+$(this).attr('title')+dot+','+dot+'廚'+dot+')')  // 廚部睇出菜
      $('#保存鍵').attr('onclick', ' ') 
    }
    if (sel === 7) {
      $('#settingBox_B').css('background', 'rgb(205, 220, 57,.4)');$('#睇枱用page h4').text('廳面');$(店p).css('display', 'block');$(類p+','+公p+','+產p+','+收p).css('display', 'none')
      $(this).attr('onclick', '店員睇台('+dot+鍵+dot+','+dot+$(this).attr('title')+dot+','+dot+'廳'+dot+')')  // 廳面點餐用
      $('#保存鍵').attr('onclick', ' ') 
    }
    if (sel === 8) {
      $('#settingBox_B').css('background', 'rgb(98, 0, 234, .3)');$('#睇枱用page h4').text('收銀');$(店p).css('display', 'block');$(類p+','+公p+','+產p+','+收p).css('display', 'none')
      $(this).attr('onclick', '店員睇台('+dot+鍵+dot+','+dot+$(this).attr('title')+dot+','+dot+'收'+dot+')')  // 收銀=開台/結帳/點外買
      $('#保存鍵').attr('onclick', ' ') 
      // qqq 開台時間 人數
    }

    if (sel === 9) {
      $('#settingBox_B').css('background', 'rgb(255, 214, 0, 0.3)');$('#睇枱用page h4').text('帳目');$(店p).css('display', 'block');$(類p+','+公p+','+產p+','+收p).css('display', 'none')
      $('#保存鍵').attr('onclick', ' ') 
    }
  })
}







function 店員睇台(url員用,台,sel){
  $('#QRCode').html(' ')
  
  if(sel === '廚'){
    // 廚部睇出菜
    console.log('廚部睇出菜',url員用)
    $('#收睇台').text('廚部睇出菜'+url員用)
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
    $('#收睇台').html(台)
    // https://juejin.cn/post/7208010597173755959
    QR = new QRCode(document.getElementById("QRCode"), {
      text: url員用,
      width: 200,height: 200,
      colorDark: "#000000",colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    })
  }
}




// 客修.gs
/*
客data2 = //d/客data2/edit
D>擴>app script> pass 客修.gs
*/

function SaveData(set){

  let 修表 = _0x1731ba(url3[0])+gsApi+_0x1731ba(url3[1]) // 客修表
    , 格 = '///-///'
    , allData

    , 產品類 = '產品類'
    , 產品料 = '產品料'
    , 收款式 = '收款式'

  if(set === '公') {
    let 公司料 =$( "#公司名稱" ).val()       + 格 +
              $( "#公司logo" ).val()       + 格 +
              $( "#公司Whatsapp號" ).val() + 格 +
              $( "#ws來詢字" ).val()       + 格 +
              $( "#網站按鍵色" ).val()     + 格 +
              $( "#網主色" ).val()         + 格 +
              $( "#網副色" ).val()         + 格 +
              $( "#字主色" ).val()         + 格 +
              $( "#字副色" ).val()         + 格 +
              $( "#圖片最小高度" ).val()   + 格 +
              $( "#圖片最大高度" ).val()   + 格 +
              $( "#圖片最小寬度" ).val()   + 格 +
              $( "#圖片最大寬度" ).val()

    , 公位 ='A4'+ 格 +'E4'+ 格 +'B4'+ 格 +'C4'+ 格 +
            'E2'+ 格 +'F2'+ 格 +'G2'+ 格 +'H2'+ 格 +'I2'+ 格 + // 色 
            'J2'+ 格 +'K2'+ 格 +'L2'+ 格 +'M2' // size

    Data = 公位 + '/?qwe123?/' + 公司料
  }




  if(set === '產') Data = 產品料

  if(set === '類') {  
    let 類名 = ''
      , ids = 
      $('.產品分類').map(function() {
        類名 = 類名 + $(this).val() + 格
        return this.id.split('_')[1]
      }).get().join()
    ids = ids.replace(/,/g, 格)

    Data = ids + '/?qwe123?/' + 類名
    console.log('Data()',Data)
  }


  if(set === '收') {  
    let 收名 = 收式 = ''
      , ids = 
      $('.收款方式').map(function() {
        收名 = 收名 + $(this).val() + 格
        收式 = 收式 + $('#收款方式項_'+this.id.split('_')[1]).val() + 格
        return this.id.split('_')[1]
      }).get().join()
    ids = ids.replace(/,/g, 格)

    // 先入收名
    Data = ids + '/?qwe123?/' + 收名
    allData = Data +格+ _0x1731ba(客api0) +格+ '收0'
    console.log('allData()',allData)
    _修G(修表,allData)

    // 再入收式
    Data = ids + '/?qwe123?/' + 收式
  }


  allData = Data +格+ _0x1731ba(客api0) +格+ set
  console.log('allData()',allData)
  _修G(修表,allData)

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













