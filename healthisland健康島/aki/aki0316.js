
















// 202203161207 mokaki.js會員系統 98672794  


// user login | 讓網頁一開始就執行js https://www.zymseo.com/big5/program_250447
// adminPage if user
window.onload=isAutoRun();將代碼綁定到window.onload事件
function isAutoRun(){
  //你的代碼
  if (location.href.indexOf('51679292') != -1){
    console.log("user login!")
    $("#AkiAdmin").css("display", "flex")
    $(".UpTxt,.AdminIMGSetBox").css("display", "block")
  }
}









  // googleTranslate
    function googleTranslateElementInit_TWToCN() {
      // 限版
      // <div id="google_translate_element_簡"></div>
      // // https://www.w3schools.com/howto/howto_google_translate.asp
      // https://stackoverflow.com/a/60884979/8008799
      // GList https://cloud.google.com/translate/docs/languages
      new google.translate.TranslateElement({pageLanguage: 'zh-TW', includedLanguages: 'zh-CN', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false},
       'google_translate_element_1');
      }

      // OVG ALL
      // function googleTranslateElementInit() {
      //  new google.translate.TranslateElement({pageLanguage: 'zh-TW', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');  
      //}











//qqq myImg1 just
// js 实现点击按钮复制文本 
// https://blog.csdn.net/qq_43506222/article/details/106373663
function copyText() {
  //var txt = $("#例Url_driveGoogle").val
      $("#例Url_driveGoogle").select();
      try {var state = document.execCommand("copy");}
      catch(err){var state = false;}
      if(state){
        alert("複製成功\n");
      }else{
        alert("复制失败");
      }
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

    function _InputSel(imgurl) {
      // if google drive url
      let googleIMG = 'https://drive.google.com/file/d/'  // user 共用 google drive img url
      if (imgurl.indexOf(googleIMG) != -1){
        let turnImgUrl = 'https://drive.google.com/uc?export=download&id=' // can in html img url
        let dsds = imgurl.split("/")  // dsds[5] = google drive img id
        turnImgUrl = turnImgUrl + dsds[5]
        //alert(turnImgUrl)
        return turnImgUrl
      }
      // other img
      else{
        return imgurl
      }
    }
















    //<button onclick to this
    function ChangeIMG(imgNb) { 
      //alert(imgNb.substr(1))
      let imgUrl = document.getElementById(imgNb).value // imgNb input is img url
      if (imgUrl != ''){  // if have data
        let turnImgUrl = document.getElementById(imgNb.substr(1)).src = _InputSel(imgUrl) // imgNb.substr(1) = imgNb[1:] = _myImg123 ~> myImg123  | _InputSel(imgUrl) return imgurl
        
        // turnImgUrl UpTxt
        let turnImgUrlBox = "#" + imgNb.substr(1) + "_"
        $(turnImgUrlBox).val(turnImgUrl)
      }
    }





    //即時监听输入 Change css
    function UserChangeCss() {  
          // 取色碼
          var val1 = $("#ChangeColoe1").val()
          var val2 = $("#ChangeColoe2").val()
          var val3 = $("#ChangeColoe3").val()
          var val4 = $("#ChangeColoe4").val()
    
          var css1 = ".carousel-indicators .active,.img-responsive,#filters ul li a:hover h5,#filters ul li a.active h5,.footer_wrapper,.top-navbar .nav > li > a:hover, .top-navbar .nav > li > a:focus,#header_wrapper,#service"
          var css2 = ".navbar-inverse .navbar-nav > li > a:hover,a:hover,.pinterest a:hover,#filters ul li a:hover h5, #filters ul li a.active h5,.about-us .points:before,.Aki_C2,.fa-cart-arrow-down,.navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus"
          var css3 = "a,#filters ul li a h5,.navbar-inverse .navbar-nav > li > a"
          var css4 = ".contact_info p"
    
          // change css
          $(css1).css("background",val1)
          $(css2).css("color",val2)
          $(css3).css("color",val3)
          $(css4).css("color",val4)
    
        }



  // all 文字 內容取  202203110101OK
  function _GetAllCode(HaHa_getElementsBy) {   
    var cont = ".,."
    var list=$(HaHa_getElementsBy)  // 取文字內容
    var allTxt = "" // 建立字串 用於取all文
    for(var i=0;i<list.length;i++){ // loop + 字
      allTxt = allTxt + list[i].value  + cont
      
      //console.log(list[i].value )
      }
      //console.log(allTxt)
      return allTxt
  }





  
  
    // User網站更新
    function UserSendCodeToMe() {  

      console.log("ooooo")


      console.log($("textarea[0]",document.frames('ifr1').document));

      

      //var data = _GetAllCode("textarea[class='UpTxt']")    // 取所有客修改內容
      //var AllUserTxt = data.split(".,.")                   // 0~57  用.,.分隔取所有客修改內容


      //var att = HtmlCode1+AllUserTxt[10]+HtmlCode2+AllUserTxt[0]+HtmlCode3+AllUserTxt[1]+HtmlCode4+AllUserTxt[2]+HtmlCode5+AllUserTxt[3]+HtmlCode6+AllUserTxt[4]+HtmlCode7+AllUserTxt[5]+HtmlCode8+dot+HtmlCode9+dot+HtmlCode10+AllUserTxt[6]+HtmlCode11+AllUserTxt[7]+HtmlCode12+dot+HtmlCode13+dot+HtmlCode14+AllUserTxt[8]+HtmlCode15+AllUserTxt[9]+HtmlCode16+dot+HtmlCode17+dot+HtmlCode18+AllUserTxt[10]+HtmlCode19+dot+HtmlCode20+dot+HtmlCode21+AllUserTxt[11]+HtmlCode22+AllUserTxt[12]+HtmlCode23+AllUserTxt[13]+HtmlCode24+AllUserTxt[14]+HtmlCode25+AllUserTxt[15]+HtmlCode26+AllUserTxt[16]+HtmlCode27+AllUserTxt[17]+HtmlCode28+dot+HtmlCode29+dot+HtmlCode30+AllUserTxt[18]+HtmlCode31+AllUserTxt[19]+HtmlCode32+AllUserTxt[20]+HtmlCode33+AllUserTxt[21]+HtmlCode34+AllUserTxt[22]+HtmlCode35+AllUserTxt[23]+HtmlCode36+AllUserTxt[24]+HtmlCode37+AllUserTxt[25]
      //console.log("att")
      //console.log(att)


      // 客修改內容 如有空 if ''
  
      
      
      
      
     


    }
  
  



























//////////////////////////////////////////////////
















// Js Base64 字符串 加密、解密 https://developer.mozilla.org/en-US/docs/Glossary/Base64
function utf8_to_b64( str ) {   return window.btoa(unescape(encodeURIComponent( str )));  }
function b64_to_utf8( str ) {   return decodeURIComponent(escape(window.atob( str )));  }
    









































    // all 內容 入文字 202203110101OK
    function _postAllTxt(ElementsBy,入all字) {
      // loop get div https://zhidao.baidu.com/question/2267122359741677188.html
      let oDiv=$(ElementsBy); // all Class UpTxt
      let i=0;
      while(i<oDiv.length)
        {
          // 不同html tat轉
          if (ElementsBy == ".UpTxt"){// .UpTxt = textarea = html
            $(oDiv[i]).html(入all字[i] + "a0123") // post 每一個
          }
          if (ElementsBy == ".UpImg"){// .UpImg = input = val
            $(oDiv[i]).val(入all字[i] + "a01ddd23") // post 每一個
          }
          i++;
        }
      return "ok"
    }















    
  
  
  

  
  
  
    // Admin功能測試 PostTxt
    function _AdminTest_GetAndPostTxt() {  
      let AllChangeCode = _GetAllCode(".UpTxt") // get code not this
      //console.log('%s \n %s \n', _postAllTxt(AllChangeCode.split(".,.")), AllChangeCode)
      let AllTxt = AllChangeCode.split(".,.") // tt[0] // = xxx |切割字串 https://www.wibibi.com/info.php?tid=258
      let OK = _postAllTxt('.UpTxt',AllTxt)
      console.log('%s \n %s \n', OK, AllChangeCode)// all 內容 入文字 https://blog.csdn.net/qq449245884/article/details/105085580
      }
  
  
    // Admin功能測試 UpAndChangeImg
    function _AdminTest_GetAndPostImg() {  
      let AllChangeCode = _GetAllCode(".UpImg") // get code not this
      //console.log('%s \n %s \n', _postAllTxt(AllChangeCode.split(".,.")), AllChangeCode)
      let AllTxt = AllChangeCode.split(".,.") // tt[0] // = xxx |切割字串 https://www.wibibi.com/info.php?tid=258
      let OK = _postAllTxt('.UpImg',AllTxt)
      console.log('%s \n %s \n', OK, AllChangeCode)// all 內容 入文字 https://blog.csdn.net/qq449245884/article/details/105085580
      }
  
  
    // Admin網站更新
    //function AkiUpHtmlCode() {  }


