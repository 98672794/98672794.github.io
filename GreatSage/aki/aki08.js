



//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////// BaseData ////////////////////
////////// all html demo just change this ////////
//////////////////////////////////////////////////

AkiWs = 'https://wa.me/85298672794?text='

題 = "NKOL - 202208062338"
示 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdti7rZ1sn-fCY3rOS2s-6lcR20mR_oKl9QA&usqp=CAU"

權 = '<iframe align="center" width="100%" height="100%" src="../aki/copyright.html" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>'




// User Data
UserLoginKey = "eb62f6b9306db575c2d596b1279627a4" // md5(0123)
TrueUserUrl = './NKOL.html'


 /////// Change nav /////
a分頁max數 = 10 // 10 >= 11
cont總分頁數 = 0 // nav,page數




//////////////////////////////
//////////////////////////////
//////////// select //////////
//////////////////////////////
//////////////////////////////

/**
 * 
 * @param {控制用按鈕} 標題 
 * @param {*} 內容 
 */

    // display Admin Box 
    function  _Btn_displayAdminBox (htmlTit) {  // 打開會員編輯功能
      $(htmlTit).css("display", "block")
      return true
    }




    // do whet function // 一鍵打開關閉all功能 _Btn_AkiSel
    function  _一鍵打開關閉all功能 () {        return false    }





























  
//////////////////////////////
//////////////////////////////
/////////// UserLogin 套裝///////////2222222222222222222222222222222222222222222222222222222222222222222222222222
//////////////////////////////
//////////////////////////////










  
//////////////////////////////
//////////////////////////////
/////////// onload ///////////
//////////////////////////////
//////////////////////////////

/*


讓網頁一開始就執行js



*/


// 讓網頁一開始就執行js https://www.zymseo.com/big5/program_250447
window.onload=isAutoRun();//將代碼綁定到window.onload事件
function isAutoRun(){ //   <body onload="isAutoRun()" 

    // js 轉tit https://stackoverflow.com/questions/413439/how-to-dynamically-change-a-web-pages-title?answertab=trending#tab-top
    document.title = 題

    // js 轉favicon https://stackoverflow.com/questions/260857/changing-website-favicon-dynamically
    var link = document.querySelector("link[rel~='icon']")
    link.href = 示
  
    const CopyrightBox = document.querySelector(".footer")
    CopyrightBox.innerHTML = 權


  // 用現url做user login //User流程1 
  if (location.href.indexOf(UserLoginKey) != -1){

    _AdminSay("isAutoRun()=user login!","會員登入編輯模式")
    $('#UserLoginAki0830').css("display", "none")


    // display Admin Box 
    console.log("///打開會員編輯功能///",_Btn_displayAdminBox(".SmsBoxBtn,.SmsBox ul,.SmsBox0830"))


    // all target=new page,save change data time
    $("a").attr("target","_blank") // 修改a https://blog.csdn.net/bfboys/article/details/52810081

    //////////// Save ////////////
    // js f5/關閉視窗提示 txt ing 
    // 編輯時 頁面離開或f5或者瀏覽器關閉的時候給予提示 防止用戶誤操作 離開當前頁面未保存數據可能丟失 
    // https://www.geeksforgeeks.org/how-to-detect-browser-or-tab-closing-in-javascript/
    //#########btn############ 
    window.addEventListener('beforeunload', function (e) {  e.preventDefault(); e.returnValue = ''; });

  }
  else{
    //$('.SmsBox0830').css("display", "none")
    _AdminSay("WorkIn user!","匿名瀏覽")
  }// url沒user 



  // 按網址自動更換頁面 0908EOK
  if (location.href.indexOf('?@@?') != -1){
    
    var UrlToCode = location.href.split('?@@?')
    , kk = UrlToCode[1] // 逗後純code
    console.log("按網址自動更換頁面\\",kk)
    document.getElementById("AkiUpHtmlCode").value = kk
    AkiUpHtmlCode()
  }

  


  // 自動按 <textarea id="AkiUpHtmlCode" val 更新網頁內容
  if(_一鍵打開關閉all功能() == true) {
    console.log("///按 AkiUpHtmlCode 更新網頁內容///",AkiUpHtmlCode())
  }
}







// 05240418 User input Login 
// https://stackoverflow.com/a/4365272 

  // User input Login 
  function UserInputLogin() {  // user input loginKey change md5
    // get user name
    let val = $("#UserLoginKey").val() //<input id="UserLoginKey" placeholder="YourKey"  type="text"/>

    , md5HaHa = md5(val)
    //console.log("md5HaHa",md5HaHa)

   // md5  <script src="https://cdn.bootcss.com/blueimp-md5/2.12.0/js/md5.min.js"> // 通过JS使用MD5加密 
    if (md5HaHa == UserLoginKey) {
      // UserLogin
      window.location.href = location.href+'?' + md5HaHa; // 原頁轉跳 https://www.runoob.com/w3cnote/js-redirect-to-another-webpage.html
    }
  }
// OK202205242145



















//////////////////////////////
//////////////////////////////
/////////// jquery 实现顶部导航下滑消失，上滑显示动画 - 掘金 ///////////
//////////////////////////////
//////////////////////////////
 // https://juejin.cn/post/6844903978518446087
var scrollTopLast = 0;
window.onscroll=function(e){
     var scrollTop = e.target.scrollingElement.scrollTop;
     if(scrollTop > scrollTopLast){
         console.log("滑轮向下滚动");
         $(".topbar").css("transition", "0.5s")
         $(".topbar").css("opacity", "0")
     }else{
         console.log("滑轮向上滚动");
         $(".topbar").css("transition", "0.5s")
         $(".topbar").css("opacity", "1")
     }
     console.log(e.target.scrollingElement.scrollTop);
     scrollTopLast = scrollTop;
 }

//作者：布谷咕咕
//链接：https://juejin.cn/post/6844903978518446087
//来源：稀土掘金
//著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


























////////////// akiOVG ////////////////

//////////////////////////////
//////////////////////////////
/////////// Change ///////////
//////////////////////////////
//////////////////////////////



//onclick Change css
function UserChangeCss() { 
  // 取色碼
  var val1 = $("#ChangeColoe1").val()
  , val2 = $("#ChangeColoe2").val()
  , val3 = $("#ChangeColoe3").val()
  , val4 = $("#ChangeColoe4").val()
  , val5 = $("#ChangeColoe5").val()
  , val6 = $("#ChangeColoe6").val()
  
  , 導航背景 = '#sidebar'
  , 網頁標題 = '#sidebar h1'
  , 導航文字 = '#_Data3b span'
  , 內文背景 = "#content"
  , 內文標題 = "h2"
  , 內文文字 = ".detail-box p"
  
  // change css
  $(導航背景).css("background",val1)
  $(網頁標題).css("color",val2)
  $(導航文字).css("color",val3)
  $(內文背景).css("background",val4)
  $(內文標題).css("color",val5)
  $(內文文字).css("color",val6)
}



  // googleTranslate 0815
    // jacky0719 Dont run this script, it will cause whole html slow down for 20 secs, this script is outdated
    // OVG ALL
    // https://www.w3schools.com/howto/howto_google_translate.asp
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({pageLanguage: 'en,zh-TW'}, 'google_translate_element');  
    }    
  
  





































































































































//////////////////////////////
//////////////////////////////
/////////// Change ///////////
//////////////////////////////
//////////////////////////////



      /////// ChangeLogoOK202208092207 ///////  //User流程1a // _Change之一

      function ChangeLogo(ImgVar_Id) { // <button onclick="ChangeLogo('Data012')">
        // <input id="Data012" value="AmyIMG/slide2.jpg" type="text"/>
        // <button onclick="ChangeLogo('Data012')">
        // <img id="_Data0" src="images/logo/logo_icon.png">

        // get
          let LogoUrl = document.getElementById(ImgVar_Id).value  // 取圖url val
          let Logotxt = document.getElementById("Data2").value  // 取logo字 val
        
        //sel1
          var HaveData = _inputDataHave(LogoUrl)

          let turnImgUrl = _InputSel(LogoUrl)                        // 圖網轉

            //sel2 是logo
            if (ImgVar_Id == 'Data012'){   // Data012 是logo = _Data0,ImgDsp_1,ImgDsp_2
              
              _AdminSay("ChangeLogo(ImgVar_Id)=change logo&title!","編輯模式//查看更新:圖標標語**未保存**")
              // change html 
                // html 轉tit 
                document.title = Logotxt
                // html 轉favicon
                var link = document.querySelector("link[rel~='icon']")
                link.href = turnImgUrl


              /****************** 要轉的位 *********************/
              var Logo1 = document.querySelector("#_Data0")
              var Logo2 = document.querySelector("#_Data1")
              var Logo3 = document.querySelector("#_Data2")

              /* for 0715交互数据管理系统响应式网页模板*/
              Logo1.innerHTML = '<a title="'+Logotxt+'" href="'+TrueUserUrl+'><img class="logo_icon img-responsive" src="'+turnImgUrl+'" alt="'+Logotxt+'" /></a>'
              Logo2.innerHTML = '<div class="user_img" ><img title="'+Logotxt+'" class="img-responsive" src="'+turnImgUrl+'" alt="'+Logotxt+'" /></div><div class="user_info"><h1>'+Logotxt+'<!-- 文字 --></h1></div>'
              Logo3.innerHTML = '<a title="'+Logotxt+'" href="'+TrueUserUrl+'"><img  class="img-responsive" src="'+turnImgUrl+'" alt="'+Logotxt+'" /></a>'
              
            }

          console.log(HaveData+"///"+turnImgUrl)
      }























//////////////////////////////
//////////////////////////////
/////////// 導航 ///////////
//////////////////////////////
//////////////////////////////


  /////// nav 轉每個加 20220830OK /////////User流程2
  function  ChangeNav1() {  // 增加導航數btn

    //限制分頁數  https://jsfiddle.net/opL1gb7d/  //////限制分頁數
    if(cont總分頁數 >= a分頁max數) return;

    for(var i=0;i<cont總分頁數;i++){
    }

    if ($('#Data3分頁數'+cont總分頁數).length > 0) {
      console.log("已有分頁數不make照++"+cont總分頁數)
    }
    else{
      console.log("沒有分頁數"+cont總分頁數)
    
      
    document.getElementById("Data3分頁數").value = cont總分頁數 // <li style="display: none;">\<input id="Data3分頁數" 

      console.log("//最大分頁數",(a分頁max數- 1)) // 客睇
      console.log("//現總分頁數",cont總分頁數)

      let nav導航標題格 = _html模板(cont總分頁數,'nav導航標題格')

        document.getElementById("_Data3").insertAdjacentHTML("beforeEnd", nav導航標題格);   // 後入 https://jsfiddle.net/opL1gb7d/

      let tt1 = "ChangeNav1()=Make"+cont總分頁數+"Nav"
      let tt2 = "編輯模式//已增加"+cont總分頁數+"個導航**未保存**"
      _AdminSay(tt1,tt2) // 管理員說話
    }
      cont總分頁數++
    
     

  }



























      

    //// 存在分頁 202208301107 //// 
  //// 修改導航名,增加分頁 202208162243OK ////  //User流程3

  /* 做錯了 User流程4 轉用板引入id */

  function  ChangeNav2(Data3分頁數nb) {   // 

    // get
    let IDTxt = "Data3分頁數"+ Data3分頁數nb // 分頁/導航名 // '<textarea id="Data3分頁數'
    , 導航名 = document.getElementById(IDTxt).value 
    , _img = "Data3分頁各圖"+ Data3分頁數nb // 分頁/導航圖 // <input id="Data3分頁各圖'
    , 導航的圖 = document.getElementById(_img).value 

    // make 客睇航btn
    , NewNav = '<li id="客睇航btn'+Data3分頁數nb+'">\
                  <a onclick="_SelNavSee('+Data3分頁數nb+')">\
                  <i class="'+導航的圖+'"></i> <span>'+導航名+'</span>\
                  </a></li>'

    // 合成html模板= turnSelPageFlow == 1 = _about_section
    , page = _html模板(Data3分頁數nb,導航的圖,導航名,'page')


      // 判断 id 或元素是否存在 https://www.runoob.com/w3cnote/jquery-check-id-is-exists.html
      if ($('#Nav'+Data3分頁數nb).length > 0) {
        console.log("///已存在",'#Nav'+Data3分頁數nb+"\修改後更新網站看新內容///")
        let 客睇航btn轉 = document.querySelector("#客睇航btn"+Data3分頁數nb)
        客睇航btn轉.innerHTML = NewNav
      } 
      else{   // 不存在
        console.log("///不存在",'#Nav'+Data3分頁數nb+"後入///")
        document.getElementById("_Data3b").insertAdjacentHTML("beforeEnd", NewNav);   // 後入

        //  增加分頁   // _SelNavSee = class.none id.block
        
        document.getElementById("_Data4").insertAdjacentHTML("beforeEnd", page);   // 後入

        
        let tt1 = "ChangeNav2(Data3分頁數nb)=Make"+Data3分頁數nb+"Page"
        , tt2 = "編輯模式//已增加"+Data3分頁數nb+"號分頁**未保存**"
        _AdminSay(tt1,tt2) // 管理員說話
      }
  }








  //// 加分頁風格 202208241919 ////  //User流程4
  function  ChangeNav3PageFlow(cont) {   // 加入版板到 Nav0TruePage // <select id="SelPageFlow2" onchange="ChangeNav3PageFlow(2)">
    //console.log("///修改導航",cont)
    
    //xxxxxxxxx let SelPageFlow = "SelPageFlow"+cont // id SelPageFlow

    // get
    let turnSelPageFlow = document.getElementById("SelPageFlow"+cont).value, // 風格 // 1分頁數=1風格
      // 字串合成html id
      客睇頁 = "Nav"+cont+"TruePage", // id name // <div id="Nav0TruePage">
      turnId = document.querySelector("#"+客睇頁),



      // TruePage內容
      TruePage_Data4 = document.getElementById("Nav"+cont+"TruePage_Data4").value,  // 內容圖
      TruePage_Data5 = document.getElementById("Nav"+cont+"TruePage_Data5").value,  // 標題
      TruePage_Data6 = document.getElementById("Nav"+cont+"TruePage_Data6").value,  // 內容 3
      TruePage_Data7 = document.getElementById("Nav"+cont+"TruePage_Data7").value,  // 按鈕圖
      TruePage_Data8 = document.getElementById("Nav"+cont+"TruePage_Data8").value,  // 按鈕文字 // HTML DIY
      TruePage_Data9 = document.getElementById("Nav"+cont+"TruePage_Data9").value,  // 按鈕網址


      // 合成html模板= turnSelPageFlow == 1 / 2  = _about_section
      // 3 = html  diy
      _about_section = _html模板(客睇頁,TruePage_Data4,TruePage_Data5,TruePage_Data6,TruePage_Data7,TruePage_Data8,TruePage_Data9,turnSelPageFlow)

    // 加入版板到NavTruePage
    turnId.innerHTML = _about_section+''

    //}

    // 管理員說話
    let tt1 = "ChangeNav3PageFlow()=Make"+cont+"Page風格="+turnSelPageFlow,
        tt2 = "編輯模式//Make"+cont+"Page風格="+turnSelPageFlow+"**未保存**"
    _AdminSay(tt1,tt2)
    

    return turnSelPageFlow
  }


  

















  //// 點左導航,右顯隱page = class.none id.block ////
      function _SelNavSee(sel) { 

        console.log("_SelNavSee")
        //pageId
        let pageId = '#Nav'+sel
        let ChangePage = document.querySelector(pageId)
        $(".NavSelDisplay").css("display", "none")
        $('#Nav'+sel).css("display", "block")

        console.log("_SelNavS22ee")
        }








      //// 刪除分頁 202208301538OK ////
  function _DelNav() {  
    if(cont總分頁數 > 0 ){
      cont總分頁數 = cont總分頁數-1

      let cont總分頁數BB = cont總分頁數-1

      console.log("///_DelNav最後一分頁刪除",cont總分頁數)
      _DelDiv('#增加導航btn'+cont總分頁數) // 删除 修改導航內容btn
      _DelDiv('#Nav'+cont總分頁數)
      _DelDiv('#客睇航btn'+cont總分頁數)
      document.getElementById("Data3分頁數").value = cont總分頁數BB // <li style="display: none;">\<input id="Data3分頁數" 
    }
  }

  //删除指定元素  防重id  https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_remove
  function _DelDiv(IdVal) {  
    var element = document.querySelector(IdVal)
    element.remove();
    }




/*
  function _NoneDiv(IdVal) { 
    let element = document.querySelector(IdVal)
    $(element).css("display", "none")
    }
  */
  


      // if have 圖url
  function _inputDataHave(val) { 
        if (val != ''){var HaveData = '///9678OK'}
        else{ var HaveData = '///沒圖'}
        return HaveData
      }






      
// user input the img url, we change to be turn html api code
    //https://www.linkedin.com/posts/williamhgates_how-to-help-refugees-aid-relief-and-donations-activity-6907410866245914624-eaMd
    //73 sugar发布了一篇小红书笔记，快来看吧！ 😆 Wi2eKd52y4RDgNa 😆 http://xhslink.com/sA5Zcg，复制本条信息，打开【小红书】App查看精彩内容！
    //7.66 GVL:/   https://v.douyin.com/NjQAh2A/ 复制此链接，打开Dou音搜索，直接观看视频！
    //https://twitter.com/teslaownersSV/status/1501675466511433732?t=BQrsMYStbEcaZ2g__Caqig&s=19
    //https://m.facebook.com/story.php?story_fbid=1416333865493440&id=100013505203886&sfnsn=mo
    //https://youtu.be/WprE6NvGlGA
    //https://linevoom.line.me/post/_dQaZLNM1vIpHI7r3oyLmSAcAh6qSp1OKLaz92l4/1164666160509083989
    //點按此連結即可在 WhatsApp 瀏覽我們的商品：https://wa.me/p/5826448410763231/85298672794
    //https://photos.app.goo.gl/CAAj5auk4rEEvbu88
    //https://www.instagram.com/p/Ca1wc3ovlS5/?utm_medium=copy_link

    function _InputSel(imgurl) {  // 圖網轉

      // if google drive url
      let googleIMG = 'https://drive.google.com/file/d/'  // user 共用 google drive img url
      if (imgurl.indexOf(googleIMG) != -1){
        let turnImgUrl = 'https://drive.google.com/uc?export=download&id=' // can in html img url
        let dsds = imgurl.split("/")  // dsds[5] = google drive img id
        turnImgUrl = turnImgUrl + dsds[5]
        //alert(turnImgUrl)
        return turnImgUrl //google drive img url
      }

      // other img
      else{
        return imgurl
      }
    }

    








      

































//////////////////////////////
//////////////////////////////
/////////// html模板 /////////
//////////////////////////////
//////////////////////////////


function _html模板() {

  // 如果使用太多參數（超過聲明的參數）調用函數 arguments
  // https://www.w3schools.com/js/js_function_parameters.asp
  // for (let i = 0; i < arguments.length; i++) {    console.log('arguments[' + i + ']: ' + arguments[i]);    }
  // console.log('arguments[da2]: ' + arguments[arguments.length - 1]); 


  let page = '\
          <div class="row NavSelDisplay" id="Nav'+arguments[0]+'">\
            <div class="col-md-12">\
            \
            <div class="SmsBox0830">\
              \
                \
                <hr style="background: rgb(9, 9, 9);">\
              <ul>\
              <li title="'+arguments[2]+'內容">內容<br/>\
              圖<input title="'+arguments[2]+'內容圖,限圖片網址" id="Nav'+arguments[0]+'TruePage_Data4" class="UpTxt" value="https://i.ppfocus.com/2020/7/101496f.jpg" type="text"/>\
                  <!-- 圖片網址 --><i class="fa fa-image  btn"  ></i> \
                  <br/>\
                  標題<textarea id="Nav'+arguments[0]+'TruePage_Data5" class="UpTxt" >'+arguments[2]+'標題</textarea>\
                  內文<textarea id="Nav'+arguments[0]+'TruePage_Data6" class="UpTxt" >'+arguments[2]+'內文</textarea>\
                  <hr style="background: rgb(9, 9, 9);">\
              </li>\
              <li title="'+arguments[2]+'按鈕內容">按鈕<br/>\
              圖<input id="Nav'+arguments[0]+'TruePage_Data7" class="UpTxt" title="'+arguments[2]+'按鈕圖" value="fa fa-eye-slash" type="text"/>\
                <a href="./_icons.html" target="_blank"><i class="fa  fa-mortar-board recycle btn" ><!-- 教學 --></i></a> ** fa fa-eye-slash" style="color: rgb(199, 230, 26);<br/>\
                按鈕文字<textarea id="Nav'+arguments[0]+'TruePage_Data8" class="UpTxt">'+arguments[2]+'按鈕文字</textarea>\
                按鈕網址<textarea id="Nav'+arguments[0]+'TruePage_Data9" class="UpTxt">'+arguments[2]+'按鈕網址</textarea>\
              </li>\
              </ul>\
        \
        \
        \
                \
                風格:<br/><i class="fa  fa-mortar-board recycle btn" ><!-- 教學 --></i>\
                <select id="SelPageFlow'+arguments[0]+'" class="UpTxt" onchange="ChangeNav3PageFlow('+arguments[0]+')" >\
                    <option value="0">選擇風格</option><option value="1">1</option>\
                    <option value="2">2</option>\
                    <option value="99">HTML DIY</option>\
                </select></div>\
                </div>\
                \
                \
                \
                <div id="Nav'+arguments[0]+'TruePage"><!-- _html模板放這 -->\<h3>未有內容</h3></div>\
            </div>\
          </div>\
          </div><br/>'

  , _about_section1 = '  \
      <!-- about section1 -->\
      \
      <section class="about_section layout_padding">\
      \
              \
        <div class="container">\
          <div class="row">\
          <!-- 左 -->\
          <div class="col-lg-6">\
            <div class="img-box">\
              <img src="'+arguments[1]+'" alt="" style="width: 100%; " />\
            </div>\
          </div>\
          <!-- /左 -->\
            <!-- 右 -->\
            <div class="col-lg-6">\
              <div class="detail-box">\
                <div class="heading_container">\
                  <h2>\
                    '+arguments[2]+'\
                    <hr>\
                  </h2>\
                </div>\
                <p>'+arguments[3]+'</p>\
                <a href="'+arguments[6]+'" target="_blank">\
                  <span><i class="'+arguments[4]+'"></i>\
                  '+arguments[5]+'\
                  </span>\
                </a>\
              </div>\
            </div>\
            <!-- /右 -->\
          </div>\
        </div>\
      </section>\
    \
      <!-- end about section -->\
'


  , _about_section2 = '  \
      <!-- about section2 -->\
      \
        <section class="about_section layout_padding">\
          <div class="container">\
            <div class="row">\
              <!-- 右 -->\
              <div class="col-lg-6">\
                <div class="detail-box">\
                  <div class="heading_container">\
                    <h2>\
                      '+arguments[2]+'\
                      <hr>\
                    </h2>\
                  </div>\
                  <p>'+arguments[3]+'</p>\
                  <a href="'+arguments[6]+'" target="_blank">\
                  <span><i class="'+arguments[4]+'"></i>\
                    '+arguments[5]+'\
                    </span>\
                  </a>\
                </div>\
              </div>\
              <!-- /右 -->\
              <!-- 左 -->\
              <div class="col-lg-6">\
                <div class="img-box">\
                  <img src="'+arguments[1]+'" alt="" style="width: 100%; " />\
                </div>\
              </div>\
              <!-- /左 -->\
            </div>\
          </div>\
        </section>\
      \
        <!-- end about section -->\
  '
  , _nav導航標題格 = ' <div id="增加導航btn'+arguments[0]+'" class="SmsBox0830" >\
  <input id="Data3分頁各圖'+arguments[0]+'"  class="UpTxt" title="導航的圖" value="fa fa-eye-slash" type="text"/>\
  <!-- 圖片網址 --><a href="./_icons.html" target="_blank">\
  <i class="fa  fa-mortar-board recycle btn" ><!-- 教學 --></i></a>\
  <textarea id="Data3分頁數'+arguments[0]+'" class="UpTxt" title="導航名">Nav'+arguments[0]+'</textarea>\
  <!-- add Nav Nb 內修 btn -->\
  <button class="btn" onclick="ChangeNav2('+arguments[0]+')"><!-- 睇圖 --><i class="fa fa-eye"></i></button>\
  </div>'

  , _diyBox = arguments[5] // HTML DIY





  // list get https://flexiple.com/javascript/get-last-array-element-javascript/
  let _lastSet = arguments[arguments.length - 1];
    if (_lastSet == 'page') {return page}
    if (_lastSet <2) {return _about_section1}
    if (_lastSet == 2) {return _about_section2}
    if (_lastSet == 'nav導航標題格') {return _nav導航標題格}
    if (_lastSet == 99) {return _diyBox}

      
  }

















 

  
//////////////////////////////
//////////////////////////////
///////// User Btn ///////////
//////////////////////////////
//////////////////////////////

    // User網站更新0831
    /*f 只需 要的t i 加 .UpTxt{*/
    function UserSendCodeToMe() {  // <button onclick="UserSendCodeToMe()">更新網站 
      ChangeLogo('Data012') // 點轉換logo

      // Get user change all
      // 客修改內容 如有空 if '' 不會空,預txt
      var AllChangeCode = _GetAllCode("UpTxt")
      console.log('///Get All UpTxt Data ed///')
      console.log(AllChangeCode)

      , ZipCodeOK = _lzStringZipTxt(AllChangeCode,'zip')

      console.log('///_lzStringZipTxt_ZIP1///',ZipCodeOK )

      //20220901轉二進位
      , 二進位Code = toBinary(ZipCodeOK) 
      , NewUrl =TrueUserUrl + '?@@?' + 二進位Code +'?@@?' // 新版網頁網址

      console.log('///二進位Url///',NewUrl )
      //console.log('///解二進位11///',fromBinary(二進位Code) )
      //console.log('///lz-string111///',_lzStringZipTxt(fromBinary(二進位Code),'unzip') )

      // makeCode
      makeCode (NewUrl)

      console.log('///打開新版網頁///')
      window.open(NewUrl, '_blank')

      // make updata aki ws
      , wsToAki = AkiWs + NewUrl //NewUrl

      document.getElementById("_VIP更新0831").href=wsToAki; // CHANGE href
    }







    // qrcode
    // https://github.com/davidshimjs/qrcodejs/blob/master/index.html
    function makeCode (Data) {		
      var qrcode = new QRCode(document.getElementById("qrcode"), {
        width : 320,
        height : 320,
        colorDark : "#000",
        colorLight : "#fff",
        correctLevel: QRCode.CorrectLevel.L 
        // 由低到高 .L M Q H https://www.cnblogs.com/whkl-m/p/10797776.html
      });
      
      //qr 排
      $("#qrcode > img").css({"margin":"5% auto 5% auto"});
      
      qrcode.makeCode(Data)
    }
    






//qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq

// myImg1 just 202203240309OK
// js 实现点击按钮复制文本 
// https://blog.csdn.net/qq_43506222/article/details/106373663
function copyText() {
  //var txt = $("#例Url_driveGoogle").val
      $(".fw_icon").select();
      try {var state = document.execCommand("copy");}
      catch(err){var state = false;}
      if(state){
        alert("複製成功\n");
      }else{
        alert("复制失败");
      }
  }  










// 202208260024  get all code
function _GetAllCode(HaHa_getElementsBy) {     // UpTxt

  var cont = ".,."
  ,   allTxt = "" // 建立字串 用於取all文

  // get all class // https://jsfiddle.net/Keammoort/cd5cwvs5/
  ,   list = document.getElementsByClassName(HaHa_getElementsBy)

  for(var i=0;i<list.length;i++){          //  loop + 字
      var tttt = list[i].value         //  textarea input
    allTxt = allTxt + tttt + cont
    }
    console.log(allTxt)
    return allTxt
}





  // Admin網站更新

  function AkiUpHtmlCode() { 

    // get Data code
    var ListCodeVal09021 = $("#AkiUpHtmlCode").val() // <input id="AkiUpHtmlCode"><button onclick="AkiUpHtmlCode()">

    console.log("///數位///",ListCodeVal09021.length)
    if (ListCodeVal09021.length <2) {return true}  // 沒value不動作 // https://www.codegrepper.com/code-examples/javascript/javascript+check+if+input+value+is+not+empty

    console.log("AkiUpHtmlCode val",ListCodeVal09021)
    // Un zip Data code
    
    //var AllTxt = b64_to_utf8( ListCodeVal09021 )     // UpZIP b64

    // var AllTxt = fromBinary( ListCodeVal09021 )   0902 // 1. 引用lz-string


    // 解二進位
    var 解二進位 = fromBinary(ListCodeVal09021)

    var AllTxt = _lzStringZipTxt(解二進位,'unzip')

    console.log("///AllTxt///",AllTxt)

    // post Data code
    var AllTxtB = AllTxt.split(".,.")   // 切割字串 https://www.wibibi.com/info.php?tid=258


    // 20220830OK   先加分頁 入AllTxtB[2]; ChangeNav1
    for(let i=0;i<=AllTxtB[2];i++){     
      ChangeNav1() // 點加導航數
      console.log("///Add Nav Nb///",'點加導航數',(i+1))
    }

   _postAllTxt('.UpTxt',AllTxtB) // 插入導航字 // 插入所有資料1



    for(let i=0;i<=AllTxtB[2];i++){ChangeNav2(i)}// 點加分頁 // cont總分頁數=1

    _postAllTxt('.UpTxt',AllTxtB) // 插入所有資料2

    // 選擇風格 202208282355OK
    for(let i=0;i<AllTxtB[2];i++){ // cont總分頁數=1
      document.getElementById("SelPageFlow"+i).value
      ChangeNav3PageFlow(i);    
    }// sel已插入 loop ChangeNav3PageFlow auto get val

    
    // Change Css
    UserChangeCss()


    ChangeLogo('Data012')


    // 管理員說話
    let tt1 = "AkiUpHtmlCode()=自動按code轉頁面內容",
        tt2 = "已進入店舖"+AllTxtB[1]+""
    _AdminSay(tt1,tt2)
    

    
    // 用現url做user login //User流程1 
  if (location.href.indexOf(UserLoginKey) != -1){
    // display Admin Box 
    console.log("///打開會員編輯功能///",_Btn_displayAdminBox(".SmsBoxBtn,.SmsBox ul,.SmsBox0830"))
  }
  else{
    $('.SmsBox0830').css("display", "none")
    _AdminSay("WorkIn user!","匿名瀏覽")
  }// url沒user


  }




























  



  
//////////////////////////////
//////////////////////////////
//////////// Save ////////////
//////////////////////////////
//////////////////////////////
/* 20220901轉二進位
// Js Base64 字符串 加密、解密 https://developer.mozilla.org/en-US/docs/Glossary/Base64
function utf8_to_b64( str ) {   return window.btoa(unescape(encodeURIComponent( str )));  }
function b64_to_utf8( str ) {   return decodeURIComponent(escape(window.atob( str )));  }
*/









//編碼 UTF8 ⇢ 二進制  
//https://stackoverflow.com/questions/30106476/using-javascripts-atob-to-decode-base64-doesnt-properly-decode-utf-8-strings/30106551#30106551
// convert a Unicode string to a string in which
// each 16-bit unit occupies only one byte

//編碼 UTF8 ⇢ 二進制 
function toBinary(string) {
  const codeUnits = new Uint16Array(string.length);
  for (let i = 0; i < codeUnits.length; i++) {
    codeUnits[i] = string.charCodeAt(i);
  }

  //let encode二進制d = toBinary('data') // "EycgAOAAIABsAGEAIABtAG8AZABlAA=="
  //console.log('encode二進制d',encode二進制d)

  return btoa(String.fromCharCode(...new Uint8Array(codeUnits.buffer)));
}
// 用 a string that contains characters occupying > 1 byte

/////////////////////////////////
// 解碼二進位 ⇢ UTF-8
function fromBinary(encode二進制d) {
  const binary = atob(encode二進制d);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }

  // 解 our previous Base64-encode二進制d string
  //let decoded解碼二進位 = fromBinary(encode二進制d) // "✓ à la mode"
  //console.log('decoded解碼二進位',decoded解碼二進位)

  return String.fromCharCode(...new Uint16Array(bytes.buffer));
}












   // 1. 引用lz-string；
   // 2. 使用compress壓縮資料；
   // 3. 使用decompress解壓縮資料

   function _lzStringZipTxt(txt,sel) {

        // qqqqqqqqq222qqqqqqqqqqqqqqqqqqqqqqq

        //console.log("原文長: " + txt.length);
        //console.log("壓後長: " + NowZipTxt.length);
        //console.log("壓文: " + NowZipTxt);
        //console.log("解文: " + TrueTxt);

        if (sel == "zip") {
            var NowZipTxt = LZString.compress(txt)
            return NowZipTxt; // 壓縮文
        }
        else if (sel == "unzip") {
          var TrueTxt = LZString.decompress(txt)
            return TrueTxt; // 解壓縮原文
        }
   }












   function _MakeShortURL(url,sel) {
    // https://www.tutorialspoint.com/writing-a-custom-url-shortener-function-in-javascript#

      //const url = 'https://www.qtutorialspoint.com/writing-a-custom-url-shortener-function-in-javascript#';
      const obj = {};
      const urlShortener = (longURL = '') => {
        let shortURL = TrueUserUrl + "/" + longURL.replace(/[^a-z]/g,'').slice(-8);
        if(!obj[shortURL]){
            obj[shortURL] = longURL;
        };
        return shortURL;
        }
        const urlRedirector = (shortURL = '') => {
        return obj[shortURL];
      };
      const short = urlShortener(url);
      const original = urlRedirector(short);
      console.log('短網',short);
      console.log('短網解',original);

      if (sel == "short") {
        return short; // 短網
      }
      else if (sel == "original") {
          return original; // 原網
      }
    
  }






//////////////////////////////
//////////////////////////////
//////////// Post ////////////
//////////////////////////////
//////////////////////////////

    // all 內容 入文字 202203110101OK
    function _postAllTxt(ElementsBy,入all字) {
      //console.log('_postAllTxt')
      // loop get div htt ps://zhidao.baidu.com/question/2267122359741677188.html
      let oDiv=$(ElementsBy); // all Class UpTxt
      let i=0;
      while(i<oDiv.length)
        {
          $(oDiv[i]).val(入all字[i])  // textarea input
          i++;
        }
      return "ok"
    }





























//////////////////////////////
//////////////////////////////
/////////// ??? /////////
//////////////////////////////
//////////////////////////////

    //<button onclick to this
    function ________________ChangeIMG(imgNb) { // <button onclick="ChangeIMG('_myImg1')">
      //alert(imgNb.substr(1))
      let imgUrl = document.getElementById(imgNb).value // imgNb input is img url
      if (imgUrl != ''){  // if have data
        let turnImgUrl = document.getElementById(imgNb.substr(1)).src = _InputSel(imgUrl) 
        // imgNb.substr(1) = imgNb[1:] = _myImg123 ~> myImg123  | _InputSel(imgUrl) return imgurl
        
        // turnImgUrl UpTxt
        //let turnImgUrlBox = "#" + imgNb.substr(1) + "_"
        //$(turnImgUrlBox).val(turnImgUrl)
        let turnImgUrlBox = "#" + imgNb
        $(turnImgUrlBox).val(turnImgUrl)
      }
    }

    




















































































//////////////////////////////
//////////////////////////////
/////////// hi admin😊 //////
//////////////////////////////
//////////////////////////////


      
/////// 程式碼模式 202208232217 ///////  //admin睇 要清楚現做緊乜,概




  function _AdminSay(標題,內容){  //html  <button onclick="_Admi0nSay()">  //js _Admin0Say()
    //console.log("///_AdminSay",標題,內容)
    console.log("//hi admin😊/////\
    ",標題," ////\
    ",內容," ////\
    ///////////////")
  }









