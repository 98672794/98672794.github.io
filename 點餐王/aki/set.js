



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




function _客setting頁(客Url){

  url = (location.href).split('/set')[0] + '?' +客Url+ '?' 

  //console.log('url',url) 

  // make user data box
  _data入網_整div('user頁','html','#set_page',url) 

  _data入網_整div('settingBox','append','#set_page','') 

  _data入網_整div('inputPage','append','#settingBox_ div','') // qqq 


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



var dot = "'"
function _data入網_整div(sel,run,box_name,data) {
  if (MOK) console.log("_data入網_整div('類名menu','append','#all類',[類名])")

  let user頁 = '<embed id="user頁" type="text/x-scriptlet" src="'+data+'" width="100%" height="100%">'

    , settingBox = '\
    <div id="settingBox_">\
      <h5 onclick="settingBox_toggle()"><i class="fa fa-wrench" aria-hidden="true"></i></h5>\
      <div id="settingBox_B"></div>\
      <ul id="settingMenu">\
        <li style="background: rgba(205, 31, 0, 0.5);"><a >公司資料</a></li>\
        <li style="background: rgba(0, 251, 255, 0.5);"><a >產品分類</a></li>\
        <li style="background: rgba(255, 0, 242, 0.5);"><a >產品資料</a></li>\
        <li style="background: rgba(205, 174, 0, 0.5);"><a >收款方式</a></li>\
        <li style="background: rgba(0, 73, 15, 0.5);"><a >保存</a></li>\
      </ul>\
    </div>\
    '
    , inputPage = '\
    <div class="content-wrapper">\
      <div class="container-xxl flex-grow-1 container-p-y">\
        <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Forms /</span> Basic Inputs</h4>\
        <div class="row">\
        \
        <div class="col-md-6">\
                  <div class="card mb-4">\
                    <h4 class="card-header">Form Controls</h4>\
                    <div class="card-body">\
                      <div class="mb-3">\
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>\
                        <input\
                          type="email"\
                          class="form-control"\
                          id="exampleFormControlInput1"\
                          placeholder="name@example.com"\
                        />\
                      </div>\
                      <div class="mb-3">\
                        <label for="exampleFormControlReadOnlyInput1" class="form-label">Read only</label>\
                        <input\
                          class="form-control"\
                          type="text"\
                          id="exampleFormControlReadOnlyInput1"\
                          placeholder="Readonly input here..."\
                          readonly\
                        />\
                      </div>\
                      <div class="mb-3">\
                        <label for="exampleFormControlReadOnlyInputPlain1" class="form-label">Read plain</label>\
                        <input\
                          type="text"\
                          readonly\
                          class="form-control-plaintext"\
                          id="exampleFormControlReadOnlyInputPlain1"\
                          value="email@example.com"\
                        />\
                      </div>\
                      <div class="mb-3">\
                        <label for="exampleFormControlSelect1" class="form-label">Example select</label><br/>\
                        <select class="form-select" id="exampleFormControlSelect1" aria-label="Default select example">\
                          <option selected>Open this select menu</option>\
                          <option value="1">One</option>\
                          <option value="2">Two</option>\
                          <option value="3">Three</option>\
                        </select>\
                      </div>\
                      <div class="mb-3">\
                        <label for="exampleDataList" class="form-label">Datalist example</label>\
                        <input\
                          class="form-control"\
                          list="datalistOptions"\
                          id="exampleDataList"\
                          placeholder="Type to search..."\
                        />\
                        <datalist id="datalistOptions">\
                          <option value="San Francisco"></option>\
                          <option value="New York"></option>\
                          <option value="Seattle"></option>\
                          <option value="Los Angeles"></option>\
                          <option value="Chicago"></option>\
                        </datalist>\
                      </div>\
                      <div class="mb-3">\
                        <label for="exampleFormControlSelect2" class="form-label">Example multiple select</label><br>\
                        <select\
                          multiple\
                          class="form-select"\
                          id="exampleFormControlSelect2"\
                          aria-label="Multiple select example"\
                        >\
                          <option selected>Open this select menu</option>\
                          <option value="1">One</option>\
                          <option value="2">Two</option>\
                          <option value="3">Three</option>\
                        </select>\
                      </div>\
                      <div>\
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>\
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>\
                      </div>\
                    </div>\
                  </div>\
                </div>\
                \
                </div></div></div>\
    '

















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

  //console.log('id1=',id1,'\npw1=',pw1)
  $('#pwWorg').text('')

  fetch(GEcss222l).then(r2es => r2es.json()).then(r2es => {

    for(var 數=0;數 < r2es.values.length ; 數++){           // 循環表找客Id

      // ad1pw
      if (id1 === r2es.values[數][0] && pw1 === r2es.values[數][id位]) {  // IdPw岩
        $('#pwWorg').text(id+'歡迎您!!')

        // SaveID to localStorage
        if(SaveID.checked) localStorage.setItem("id",[id,pw])

        // get 客api
        _客setting頁(id)
        

        if (MOK) console.log('id1=',id1,'\npw1=',pw1,'\n有有數',數)
        //數      = r2es.values.length                      // 終止循環
      }

      // ad2pw qqq 
      else $('#pwWorg').text('找不到用戶!!')
    }

  })
}

// 刪除登入記錄
function ForgotID() {
  localStorage.removeItem('id')
  $( "#UserID" ).val('')
  $( "#UserPW" ).val('')
  

}





















// 使用 jQuery 切换宽度 https://stackoverflow.com/a/10781670
function settingBox_toggle(){
  $('#settingBox_').toggleClass('see')
  $('#user頁').toggleClass('see') // 模糊背景
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



