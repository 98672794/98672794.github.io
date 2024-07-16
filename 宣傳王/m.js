


function _網插件(sel,run,box_name,data) {

  let 頭 = '\
    <p id="translate"></p>\
    \
  '
  let 導航 = '\
    <ul>\
      <li><a href="/">首頁</a></li>\
      <li><a href="/MYad.html">我的廣告</a></li>\
      <li><a href="/about.html">關於我們</a></li>\
      <li><a href="/contact.html">聯絡我們</a></li>\
    </ul>\
    \
  '


  // 將插件加入到選取的元素中
  // _網插件('導航','html','#導航',[公司名,新入網Ulr做主頁,網字色1號])
  $(box_name)[run]([eval(sel)])

}