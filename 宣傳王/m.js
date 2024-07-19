


function _網插件(sel,run,box_name,data) {

  let 頭 = '\
    <p id="translate"></p>\
    \
  '
  , 導航 = '\
    <ul>\
      <li><a href="./">首頁</a></li>\
      <li><a href="./MYad.html">我的廣告</a></li>\
      <li><a href="./about.html">關於我們</a></li>\
      <li><a href="./contact.html">聯絡我們</a></li>\
    </ul>\
    \
  '

  , 搜尋選擇 = '<option value="'+data[0]+'">'+data[0]+'</option>'

  , 分享 = `\
          <div class="share-content">\
            <div class="share-bar">\
                <a href="javascript:void(0);" class="whatsapp" onclick="shareOnSocialMedia('whatsapp')"><i class="fab fa-whatsapp"></i></a>\
                <a href="javascript:void(0);" class="facebook" onclick="shareOnSocialMedia('facebook')"><i class="fab fa-facebook-f"></i></a>\
                <a href="javascript:void(0);" class="twitter" onclick="shareOnSocialMedia('twitter')"><i class="fab fa-twitter"></i></a>\
                <a href="javascript:void(0);" class="line" onclick="shareOnSocialMedia('line')"><i class="fab fa-line"></i></a>\
                <a href="javascript:void(0);" class="telegram" onclick="shareOnSocialMedia('telegram')"><i class="fab fa-telegram-plane"></i></a>\
                <a href="javascript:void(0);" class="weixin" onclick="shareOnSocialMedia('weixin')"><i class="fab fa-weixin"></i></a>\
                <a href="javascript:void(0);" class="xiaohongshu" onclick="shareOnSocialMedia('xiaohongshu')"><i class="fab fa-xiaohongshu"></i></a>\
                <a href="javascript:void(0);" class="instagram" onclick="shareOnSocialMedia('instagram')"><i class="fab fa-instagram"></i></a>\
            </div>\
            <br><br>\
            <button onclick="hideShareOptions()">取消</button>\
          </div>\
        `



  // 將插件加入到選取的元素中
  // _網插件('導航','html','#導航',[公司名,新入網Ulr做主頁,網字色1號])
  $(box_name)[run]([eval(sel)])

}