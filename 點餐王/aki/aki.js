






/*
* aki
202404092236 轉GITHUB
* 202401162348 GOOGEec 
*/



let 支式料
  , 客台號
  , all客台號='1,2,3...'
  , 用餐人數
  , 客Ulr
  , 網lv
  , 解客Ulr
async function 查客data(){



  // 沒戶名轉 admin
  if ((location.href).indexOf('?') === -1) window.location.href = location.href+'s'

  // 取現網址get 相關data
  客Ulr = _0x1731ba(location.href.split('?')[1]).split('?')[1] 
  // http://127.0.0.1:5502/?153?低?客台號?#主食 = 153
  客台號 = _0x1731ba(location.href.split('?')[1]).split('?')[2]
  客台號 = decodeURIComponent(客台號) // 轉亂碼
  if(客台號 === 'undefined') 客台號 = ''
  //let 
  網lv = (await _SeeGitHubTxt(_取明文(客Ulr,'位'))).split('%u7DB6%uF88B%uF622%uF863')[1][0]
  let 客Data0 = _0x1731ba(await _SeeGitHubTxt(_取明文(客Ulr,'位').split('/')[0]+'/d')).split(線)

  // data入網用
  支式料  = 客Data0[3].split(格)
  all客台號  = 客Data0[4].split(格)

  //台冇未結帳單 = 新台
  //取客結數表  
  // 取最後一個包含 客台號 的元素 
  let 此台尾單車用 = _0x1731ba(unTxtZip(await _SeeGitHubTxt(_取明文(客Ulr,'位').split('/')[0]+'/f'))).split('!平安?').reverse().find(element => element.includes('🐳'+客台號+'🦛'))

  if (!此台尾單車用 || 此台尾單車用.indexOf(帳單未結帳) === -1) if(客台號){
      用餐人數 = prompt('請填寫用餐人數')
      while (用餐人數 === '' || isNaN(用餐人數)) { // 限數字 和不能空
        用餐人數 = prompt("請填寫用餐人數")
      }
    }

  _用客data(客Data0)
}









let 新入網Ulr做主頁
async function _用客data(客data){
  客data.splice(0, 1)
  let 公司頁料 = 客data[0].split(格)
    , 產類頁料 = 客data[1].split(格)
    , 產品頁料 = 客data[4].split(格)
    , whatsapp
  // page title icon
  $('title').html(公司頁料[0])  //總Data.values[直][橫]
  $('link[rel="shortcut icon"]').attr('href',await _imgToB64(公司頁料[1]))

  // 網whatsapp
  whatsapp = 'https://wa.me/'+公司頁料[2]+'?text='+公司頁料[3]
  $('#低導航右 a').attr("href",whatsapp)

  // save now url
  新入網Ulr做主頁 = (location.href).split('#')[0]

  // 查看購物網 如購物網不是新入網ulr = del購物車
  if (新入網Ulr做主頁 != localStorage.getItem('網Ulr2')) localStorage.clear()

  // 轉css
  _轉css(公司頁料)

  _data入網_加入類名menu(公司頁料[0],公司頁料[1],產類頁料)

  _data入網_加入產品(產品頁料) 
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






















function _data入網_加入類名menu(公司名,公司logo,產類頁料) {
  let 客台nb   = ''

  // 公司名
  _data入網_整div('公司名','append','#all類',[公司名,新入網Ulr做主頁,網字色1號])
  
  // lv顯
  if (~~網lv > 0) {                                                        // 低導航右轉購物車
    $('#低導航右 a').attr("href", '#')
    _data入網_整div('低導航右','html','#低導航右',[網all按鍵])
    // 存儲在本地的瀏覽器購物車產品數
    if (localStorage.getItem("購物車內")){  
      $('#已點產品數').text(localStorage.getItem("購物車內"))
      $('#已點產品數').show()  
    }
  }
  else $('.產品鍵').attr('onclick', '')                                    // 沒lv不能買
  
  if (!!客台號) {
    // 顯台號
    客台nb = '<h3 style="position: fixed;top: 1%;right: 1%;width:auto;padding:1%;opacity: .8;" class="btn btn-block btn-lg '+網all按鍵+'" data="'+'客表'+'" >'+客台號+'</h3>'
  // 亂碼 https://chateverywhere.app?shareable_conversation_id=8b0a0314-e543-4253-8fad-df3b1e568bcd 
}
  // 公司logo
  _data入網_整div('公司logo','html','#logoBox',[新入網Ulr做主頁,客台nb,網色1號,公司logo,公司名])

  // 類名menu 
  for(var i=0;i<產類頁料.length;i=i+3){
    _data入網_整div('類名menu','append','#all類',[產類頁料[i],網字色1號])
    // 加入產品書籤
    _data入網_整div('類書籤','append','#all產品',[產類頁料[i],產類頁料[i+2],網字色1號])
  }
}
















async function _data入網_加入產品(產品頁料) {

  //console.log('產品頁料',產品頁料)

  // 分每產品 END4v65c4v654646前=一組
  產品頁料B = _分割列表(產品頁料, 'END4v65c4v654646')

  //console.log('產品頁料B',產品頁料B)

  for(var 數B=0 ; 數B < 產品頁料B.length ; 數B++){
    // 單組產品入
    產品頁料C = 產品頁料B[數B]

    let 產品類     = 產品頁料C[0]
      , 產品名     = 產品頁料C[1]
      , 產品圖睇 = await _imgToB64(產品頁料C[2])
      , 產品價錢   = 產品頁料C[3]



    // qqqqqqqq 
    // 加入文章
    if (網lv === '0'){
      let 圖位 = ''
      if (產品圖睇) 圖位 = '<img class="" src="'+產品圖睇+'" alt="'+產品名+'">'

      _data入網_整div('文章類','append','#'+產品類,[數B,圖位,產品名,產品價錢])
    }



    // 加入每產品
    else {
      if (!產品圖睇) 產品圖睇 = NoIMG

      // 點餐用data
      產料點用 = []
      for(var 數c=0 ; 數c < 產品頁料C.length ; 數c++){
        if(數c === 2 ) d = 產品圖睇
        else d = 產品頁料C[數c]
        產料點用.push(d)
      }

      _data入網_整div('餐廳每產品','append','#'+產品類,[產料點用,產品圖睇,產品名,產品價錢])
    }
  }
}



































































/* ********************************************************************************************************
***********************************************************************************************************
買野流程

      :::::::::      :::    :::    :::   :::         ::::::::::       :::        ::::::::     :::       :::
     :+:    :+:     :+:    :+:    :+:   :+:         :+:              :+:       :+:    :+:    :+:       :+:
    +:+    +:+     +:+    +:+     +:+ +:+          +:+              +:+       +:+    +:+    +:+       +:+
   +#++:++#+      +#+    +:+      +#++:           :#::+::#         +#+       +#+    +:+    +#+  +:+  +#+
  +#+    +#+     +#+    +#+       +#+            +#+              +#+       +#+    +#+    +#+ +#+#+ +#+
 #+#    #+#     #+#    #+#       #+#            #+#              #+#       #+#    #+#     #+#+# #+#+#
#########       ########        ###            ###              ########## ########       ###   ###

***********************************************************************************************************
***********************************************************************************************************/





// _買野_餐廳版
function _買野_餐廳版(料list) {
  //console.log('_買野_餐廳版',料list)
  //如有可選項
  if (料list.length > 5) _買野_產品選項( 料list)
  else {購物車顯已點產品數(料list);開關購買流程(0);加購流程(料list);}
  // 如果想判断一个值不是undefined、null和空字符串中的一种，则用 !! 就可以 
  // https://blog.csdn.net/m0_38039437/article/details/127791259

}


















// 產品選項
function _買野_產品選項(料list) {
  //if (MOK) console.log('_買野_產品選項料list',料list)

  let 品名 = 料list[1]
    , 產品圖 = 料list[2]+','+料list[3]
    , 產品價錢 = 料list[4]

  _data入網_整div('選項頁','html','#購買流程 .row',[品名,產品價錢,產品圖]) 

  // 循环取產品選項
  for(var cont選項用=5; cont選項用<料list.length;cont選項用=cont選項用+4){
    let 選項名 = 料list[cont選項用]
      , 選項價 = 料list[cont選項用+1]

      , 選項名2 = 料list[cont選項用+2]
      , 選項價2 = 料list[cont選項用+3]

      , 選項價samp = 選項價samp2 = 選項2全 = ''

      , _label1 = dot+'Sel_'+cont選項用+dot // 用於點完再點=取消
      , cont選項用2 = cont選項用+2
      , _label2 = dot+'Sel_'+cont選項用2+dot  // 用於點完再點=取消
    //console.log('選項名=',選項名,選項價,'\n選項名2=',選項名2,選項價2)
    if (!!選項價) 選項價samp = '<samp>$'+選項價+'</samp>' // 沒價不顯
    if (!!選項價2) 選項價samp2 = '<samp>$'+選項價2+'</samp>'

    // 選項2名 沒不顯
    if (!!選項名2) 選項2全 = '\
    <input type="radio" name="Sel_'+cont選項用+'" >\
    <label for="Sel_'+cont選項用2+'" id="Sel_'+cont選項用2+'" onclick="選項頁Sel_label('+_label2+','+_label1+')">\
      <span class="text">'+選項名2+'</span><span class="Price"'+選項價samp2+'</span>\
    </label>\
    ' 

    _data入網_整div('選項表','append','#購買流程 .row',[cont選項用,_label1,_label2,選項名,選項價samp,選項2全]) 
  }

  _data入網_整div('選項頁btn','append','#購買流程 .row',[料list,網all按鍵])
  開關購買流程() // 彈出產品選項

}










function 購物車顯已點產品數(料list) {

  let 產品名 = 料list[1]
    , 產品價錢 = 料list[4]
    , 新已點 =1
  for(var i=0; i<localStorage.length;i++){
    if ( localStorage.key(i).indexOf("購買產品") != -1){
      新已點=新已點+1
    }
  }

  // 存儲在本地的瀏覽器購物車產品數  
  localStorage.setItem("購物車內",新已點)

  $('#已點產品數').text(新已點)

  if (新已點!=0)  $('#已點產品數').show()

  let 料321 = 產品名+','+產品價錢+','+已選項組 // 已點產品id +已選項
  , 料王 = 料321.split(',') // 分割 轉為數組

  // 存儲在本地的瀏覽器
  localStorage.setItem("購買產品"+新已點, 料王)
  console.log("新已點"+localStorage.getItem('購買產品'+新已點))
  //console.log('料王=',料王)

  // 已選購
  console.log("第"+localStorage.getItem('購物車內'),'個產品(',產品名,')已加入購物車!!')

  // 清空已選項組
  已選項組.length = 已選項組for轉色.length = 0 

  // 存儲 now 購物網 如購物網不是新入網ulr = del購物車 (_用客data()用)
  localStorage.setItem("網Ulr2",(location.href).split('#')[0] )

}





















function _買野_火鍋版(動,id) {
  if (MOK) console.log('_買野_火鍋版(動,id))')
  /*
    if (選版 == '火鍋'){ // 火鍋版
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





// 買野btn動作
function 買野(動,產料) {
  //if (MOK) console.log('買野(動,id)',id)

  料list = (產料).split(',')

  // 選版
  if (選版 == '餐廳') _買野_餐廳版(料list)

  // 未用
  if (選版 == '火鍋') _買野_火鍋版(動,料list)

}


















let 已選項組for轉色 = []
  , 已選項組 = []
function 選項頁Sel_label(id1, id2) {

  let 項1 = $('#'+id1+' .text').text()+','+$('#'+id1+' .Price').text()
    , 項2 = $('#'+id2+' .text').text()+','+$('#'+id2+' .Price').text()

  // id label點轉色
  $('#' + id1).css({ 'background': 網色1號 })
  $('#' + id1 + ' .text').css({ 'color': 網字色1號, 'font-size': 'xx-large' })
  $('#' + id1 + ' .Price').css({ 'color': 左Menu下色 })
  $('#' + id2).css({'background': 'initial'})
  $('#' + id2+' .text').css({'color': 'initial','font-size': 'medium'})

  // 查 已選項組
  if (已選項組for轉色.indexOf(id2) !== -1) { 
    // 選 id1時刪id2
    已選項組for轉色.splice(已選項組for轉色.indexOf(id2), 1)
    console.log('已刪除=',$('#'+id2+' .text').text())
    // 如何优雅的从Array中删除一个元素 https://cloud.tencent.com/developer/article/1375894
    已選項組.splice( 已選項組.indexOf(項2), 1 ) // 購物用删
    //console.log(' +已選項組+已刪除id2 ',已選項組)
  }

  if (已選項組for轉色.indexOf(id1) !== -1) { 
    // 重選 id1時刪id1
    已選項組for轉色.splice(已選項組for轉色.indexOf(id1), 1)
    console.log('已刪除=',$('#'+id1+' .text').text())
    已選項組.splice( 已選項組.indexOf(項1), 1 ) // 購物用删
    //console.log(' +已選項組+ 已刪除id1',已選項組)

    // id1 label 重點轉冇色
    $('#' + id1).css({'background': 'initial'})
    $('#' + id1+' .text').css({'color': 'initial','font-size': 'medium'})
    $('#' + id1 + ' .Price').css({ 'color': 'initial' })
  }
  // 已選加入
  else{ 
    console.log('已選=',$('#'+id1+' .text').text());
    已選項組for轉色.push(id1)
    // 加入購物用
    已選項組.push(項1) 
    //console.log(' +已選項組+ ',已選項組)
  }
  
}
































function 選項頁的確認btn組合(料list) {
  //console.log('料list',料list)

  料list = 料list.split(',')
  購物車顯已點產品數(料list)  
  開關購買流程(0)
  加購流程(料list)
}























function 加購流程(料list) {
  //console.log('料list==',料list)

  _data入網_整div('加購流程頁','html','#購買流程 .row',[網all按鍵])

  // 取網頁上產類id cut淨加購號
  let 現產類id = $('hr[id^="_flow_"][id$="_'+料list[0]+'"]').attr('id')
  現產類id = 現產類id.split('_flow_')[1].split('_'+料list[0])

  let 加購流程 = ~~現產類id[0]// 轉數字

  // if 有加流程
  if ( $(加購流程).length === 0 ) return 
  // https://jessie75919.medium.com/儘早-return-函數-讓-if-邏輯條件判斷不再一層又一層

  // if有下個流程
  下個流程 = ~~加購流程+1

  if ( $('hr[id^="_flow_'+下個流程+'_"]').length === 0 ) return 查看購物車()  
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



















function 清空購物車() {
  if (MOK) console.log('清空購物車()')

  // 確認清空購物車
	if (confirm("你是否要清空購物車!!")==true){
    // 清購物車前 ,備份網Ulr
    確定訂單備份網Ulr = localStorage.getItem('網Ulr2')

    localStorage.clear()
    $('#已點產品數').text(0)

    // 清購物車後 ,重save網Ulr
    localStorage.setItem("網Ulr2",確定訂單備份網Ulr)

  }
  // 确认框 https://www.runoob.com/js/js-popup.html

  開關購買流程(0)
}


























function 刪除單個購物車產品(data,sel) {
  if (MOK) console.log('刪除產品的id',localStorage.getItem(data).split(',') )

  console.log('刪除產品的id')
  //sel = ~~sel+0

  // 分割 localStorage 轉為數組
  let 刪除產品的id = localStorage.getItem(data).split(',') 
    , 名 = [刪除產品的id[0]]
  
  // 刪除localStorage內產品
  localStorage.removeItem(data)
  console.log('已刪除=',名)
  
  // 刪除localStorage內購物車數
  let 購物數 = ~~localStorage.getItem("購物車內")-1
  localStorage.setItem("購物車內",購物數)
  // 更新購物車數
  $('#已點產品數').text(購物數)

  // 重開顯示最新
  查看購物車()

}








































// 查看購物車
async function 查看購物車() { 

  // 清頁面
  _data入網_整div('清空購物車','html','#購買流程 .row','0')

  // 購物車有產品才顯示
  if (localStorage.getItem("購物車內") > 1)  $('#清空購物車').css({'display': 'block'})

  // 如台未結 = 顯示已提交的訂單
  let 此台尾單車用 = _0x1731ba(unTxtZip(await _SeeGitHubTxt(_取明文(客Ulr,'位').split('/')[0]+'/f'))).split('!平安?').reverse().find(element => element.includes('🐳'+客台號+'🦛'))

  if (此台尾單車用 && 此台尾單車用.indexOf(帳單未結帳) !== -1) {
    let 尾單料 = _顯示已提交未結帳的訂單(此台尾單車用)
    _data入網_整div('顯示已點的訂單1','append','#購買流程 .row',[網all按鍵,尾單料[0],尾單料[1]])
    _data入網_整div('萬','append','#顯示已點的訂單床',[尾單料[2]])
    _data入網_整div('顯示已點的訂單3','append','#顯示已點的訂單床',[尾單料[3]])
  }

  let 訂單總金 = 0
    , 有購物
  // 未提交 all 訂單 內容 // 購物車內??
  for(var i=0; i<localStorage.length;i++){
    
    // 分割 localStorage 轉為數組 取購產品id
    let 真產品加分類Data = localStorage.getItem(localStorage.key(i)).split(',') 

    if ( localStorage.key(i).indexOf("購買產品") != -1){

      //let 已選購產品id =  真產品加分類Data[0]
      let 品名 = 真產品加分類Data[0]
        , 產品價錢 = 真產品加分類Data[1]
        , 加all選項 = ''
        , 加選項總金 = 0
        , 本產品總金 = 0

      if(!!真產品加分類Data[2]){
        // 取選項 不要0的id
        for(var jj=2; jj<真產品加分類Data.length;jj=jj+2){
          let 真選項 = 真產品加分類Data[jj]
            // 保留減號及純數字 https://chateverywhere.app?shareable_conversation_id=61296846-4501-4024-aedc-7c98cdceaf90
            , 真選項價 = 真產品加分類Data[jj+1].replace(/[^\d-]/g, "")
          if (!真選項價) 真選項價 = 0

          //顯示選項用 多項+後
          加all選項 = 加all選項 + 真選項 + '($' + 真選項價 + ')' + ','  

          // 如有選項 加選項總金額
          // 保留两位小数 https://chateverywhere.app/
          if (加all選項 != '') 加選項總金 = (parseFloat(加選項總金)+parseFloat(真選項價)).toFixed(2)
        }
      }

      if (!產品價錢) 產品價錢 = 0 // 沒寫價 = 0

      // 加本產品總金
      本產品總金 = (parseFloat(加選項總金)+parseFloat(產品價錢)).toFixed(2)

      // 加 確定訂單頁 
      品名 = 品名.replace(/\s*/g,"") // 刪空

      _data入網_整div('確定訂單頁','append','#購買流程 .row',[品名,產品價錢,localStorage.key(i),加all選項,本產品總金]) 
    
      // 本單加總金 轉結算
      訂單總金 = (parseFloat(訂單總金)+parseFloat(本產品總金)).toFixed(2)

      有購物 = 品名
    }
  }

  // 加 確定訂單 btn
  if (!!有購物) btn = '確定訂單()'
  else btn = ''
  _data入網_整div('確定訂單頁btn','append','#購買流程 .row',[btn,訂單總金,網all按鍵])

  // 彈出確定訂單
  開關購買流程() 

  console.log(' +請確定訂單+ ')
}






























async function 確定訂單() {

  //取客結數表
  let 客低 = _0x1731ba(unTxtZip(await _SeeGitHubTxt(_取明文(客Ulr,'位').split('/')[0]+'/f')))
    , all流水 = 客低.split('!平安?')
    // 取最後一個包含 客台號 的元素 
    , 此台尾單 = all流水.reverse().find(element => element.includes('🐳'+客台號+'🦛'))
    // https://chat.openai.com/share/904598cd-a67b-437a-b0b2-bf7beada9732

    , 客低舊 = 客低 + '!平安?'
    , 訂單list = ''
    , 訂單總編號 = '1'
    , 訂單up

  // 沒台號不賣 
  if(客台號 === '' || all客台號.indexOf(客台號) == -1) {
    console.log('台號錯!!')
    alert('出錯了!請找店員協助')
    return
  }

  // 取訂單總編號+1 / 冇 = 1(全店第一單) 
  if(客低.split('!好?')[1]) 訂單總編號 = ~~(all流水.at(0).split('!好?')[0].split('-')[1])+1
  // 客台號-訂單總編號
  // .at(-1) JS 五种方法访问数组最后一个元素 https://blog.csdn.net/weixin_43487782/article/details/118226475

  // 生成現在訂單 
  for(var cont=0; cont<$(".購物車表 td").length;cont=cont+4){
    let j = cont+1
      , k = cont+2
      , m = cont+3
      , 名   = $('.購物車表 td').eq(cont).text()
      , 原價 = $('.購物車表 td').eq(j).text()
      , 選   = $('.購物車表 td').eq(k).text()
      , 總價 = $('.購物車表 td').eq(m).text()

    訂單list = 訂單list +
    名 + 原價 + '!?'+ 
    選 + '!?' + 
    總價 + '!?'
  }

  // 加單 $$$$$$$$$$$$$$ 
  if(此台尾單 && 此台尾單.indexOf(帳單未結帳) !== -1) {
    console.log(' *** 加單 *** ') 

    // 取 此台尾單 前後
    let 客低cut = 客低.split(此台尾單)
    // 取總金前料
      , 已點的訂單重BUY用 = 此台尾單.split('總金額 $')
      , 已點的總金數 = 已點的訂單重BUY用[1].split('!好?')[0]
      , 現總金 = $('#本單加總金').text().split('總金額 $')
      , 總金數全 = (parseFloat(已點的總金數)+parseFloat(現總金[1])).toFixed(2)

    // make 合單
    訂單up = 客低cut[0] + 
    已點的訂單重BUY用[0] + 
    '!?- 加單' + nowTime() + ' -!?!?' + // 對位用
    訂單list + 
    '總金額 $' + 總金數全 + '!好?' +
    帳單未結帳 + 客低cut[1]
  }

  // 新單 $$$$$$$$$$$$$$ 
  else {
    console.log(' *** 新單 *** ') 

    // 取總金前料
    訂單list = 訂單list + ($('#本單加總金').text())

    if(客低 === 'lbch�g') 客低舊 = '' // 修make新單的bug

    // make 新單
    訂單up = 客低舊 + 
    '🐳'+客台號+'🦛' + '-' + 訂單總編號 + '!好?' +
    用餐人數 + '!好?' +
    nowTime() + '!好?' +
    訂單list + '!好?' +
    帳單未結帳
  }

  // up單
  await _upTxtToGitHub(_取明文(客Ulr,'位').split('/')[0] +'/f',TxtZip(escape(_0x5569ds(訂單up))))

  // 清購物車前 ,備份網Ulr
  確定訂單備份網Ulr = localStorage.getItem('網Ulr2')

  // 清空購物車
  localStorage.clear()
  $('#已點產品數').text(0)	

  // 清購物車後 ,重save已點
  localStorage.setItem("網Ulr2",確定訂單備份網Ulr)

  開關購買流程(0)
}




































async function 結帳() {
  console.log('請選支付方式')

  // loop找支付方式
  for(var 數=0;數<支式料.length;數=數+2){
    支付方式名 = 支式料[數]
    支付方式料 = 支式料[數+1]

    // 圖轉b64
    if (!!支付方式料 && 支付方式料.indexOf('http') !== -1) 支付方式料 = await _imgToB64(支付方式料)
    // 有名入
    if (!!支付方式名) _data入網_整div('支付方式列表','append','#支付方式列表的床',[支付方式名,支付方式料,網all按鍵])
  }

  // 取消支付方式列表onclick 防重
  $('#結帳鍵').text("結帳中...").attr("onclick",'')

}


function 打開支付(支式,sel) {

  // 文字支付
  let data5= '<h5 class="btn-lg '+網all按鍵+'">'+支式+'</h5>'

  // qr支付 如data包含"http" || "data:image"
  if(支式.indexOf("data:image") >= 0 || 支式.indexOf("http") >= 0 ) data5 = '<a class="btn-lg '+網all按鍵+'" href="'+支式+'" download>保存支付碼</a>\
  <div style="width: 100%;aspect-ratio: 1 / 1;background: url('+dot+支式+dot+');background-size: cover;background-position: center;background-repeat: no-repeat;"></div>'

  // 返回時 清空頁面
  if (sel===1) _data入網_整div('萬','html','#支付方式列表的床',' ')
  // 顯示支付碼
  else _data入網_整div('打開支付頁','html','#支付方式列表的床',[data5])
}
















// 購買流程btn
function 開關購買流程(sel) {
  //if (MOK) console.log('開關購買流程(sel)')

  if (sel==0){  // 關
    $('#購買流程').hide()
    $('#all類,#all產品,#低導航').css({'filter': 'blur(0px)'})
  }

  else if (sel==1){  // 回復 購買流程頁
    $('#購買流程').hide()
    $('#all類,#all產品,#低導航').css({'filter': 'blur(0px)'})
    _data入網_整div('加購流程頁','html','#購買流程 .row','0')
  }

  else{ // 開
    // 彈出確定訂單
    $('#購買流程').show()
    $("#all類,#all產品,#低導航").css({"filter": "blur(1px)"}) // 模糊背景
    // filter 導致 position 失效 https://shinyu0430.github.io/2021/09/18/filterchildproblem/
  }
}










































/* **********************************************************************************
*************************************************************************************
admin 

          :::        :::::::::         :::   :::       :::::::::::       ::::    :::
       :+: :+:      :+:    :+:       :+:+: :+:+:          :+:           :+:+:   :+:
     +:+   +:+     +:+    +:+      +:+ +:+:+ +:+         +:+           :+:+:+  +:+
   +#++:++#++:    +#+    +:+      +#+  +:+  +#+         +#+           +#+ +:+ +#+
  +#+     +#+    +#+    +#+      +#+       +#+         +#+           +#+  +#+#+#
 #+#     #+#    #+#    #+#      #+#       #+#         #+#           #+#   #+#+#
###     ###    #########       ###       ###     ###########       ###    ####

*************************************************************************************
*************************************************************************************/


let 選版 = '餐廳'       // 餐廳 // 火鍋

//遍历并输出localStorage里存储的名字和值
// 读取第一条数据的变量名(键值 https://blog.csdn.net/wy_Blog/article/details/77945410
//if (MOK) for(var i=0; i<localStorage.length;i++){  console.log('localStorage里存储的第'+i+'条数据的名字为：'+localStorage.key(i)+',值为：'+localStorage.getItem(localStorage.key(i)));}

查客data()







