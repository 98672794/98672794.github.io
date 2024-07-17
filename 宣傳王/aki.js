












// 按鈕
function 發送whatsapp() {
  myWS = '85298672794'
  隔 = '%2C%20'

  UserName = $( ".contact-form #name" ).val()
  UserEmail = $( ".contact-form #email" ).val()
  UserPhone = $( ".contact-form #phone" ).val()
  UserSubject = $( ".contact-form #subject" ).val()
  UserMessage = $( ".contact-form #message" ).val()

  // 打開新分頁
  window.open("https://wa.me/"+myWS+"/?text="+UserName+隔+UserEmail+隔+UserPhone+隔+UserSubject+隔+UserMessage+隔);
}










function start() {

  // 加網插件
  _網插件('頭','append','header',[0])
  _網插件('導航','html','#導航',[0])

  // 地圖
  地圖src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.803860847904!2d114.1554774!3d22.2854185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404007cd2015555%3A0x7280ae48167f4269!2z6aaZ5riv5Lit55Kw5bmy6Ku-6YGT5LitNjTomZ_pppnmuK_kuK3oj6_lu6DllYbmnIPoga_lkIjlpKflu4gyMeaokw!5e0!3m2!1szh-TW!2sus!4v1721181490060!5m2!1szh-TW!2sus"
  $('#MyMap').attr('src', 地圖src)

  // 地區搜尋
  地區選擇.forEach(function(element) {
    _網插件('搜尋選擇','append','#region-select',[element])
  });

  // 行業選擇
  行業選擇.forEach(function(element) {
    _網插件('搜尋選擇','append','#industry-select',[element])
  });

  // 商戶選擇
  商戶選擇.forEach(function(element) {
    _網插件('搜尋選擇','append','#merchant-select',[element])
  });

}


start()













