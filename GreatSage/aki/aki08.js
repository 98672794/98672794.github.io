



//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////// BaseData ////////////////////
////////// all html demo just change this ////////
//////////////////////////////////////////////////

題 = "NKOL - 202208062338"
示 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdti7rZ1sn-fCY3rOS2s-6lcR20mR_oKl9QA&usqp=CAU"

權 = '<iframe align="center" width="100%" height="100%" src="../aki/copyright.html" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>'




// User Data
死撚莫 = "0123"









































  
//////////////////////////////
//////////////////////////////
/////////// onload ///////////
//////////////////////////////
//////////////////////////////




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


  // Admin手機網站更新時關 *********************
  //  自動按code轉頁面內容,可用做payPage
  //  change Github page code, pass to AkiUpHtmlCode
  ////////AkiUpHtmlCode() // web base data display // <input id="AkiUpHtmlCode" value="code">
  // Admin手機網站更新時關 *********************

  //try {AkiUpHtmlCode()}
  //var AllTxt = AkiUpHtmlCode()
  //console.log("AllTxt")
  //console.log(AllTxt)

  // user login display
  // display adminPage if user //////////////////////

  // 用現url做user login 
  if (location.href.indexOf(死撚莫) != -1){
    console.log("user login!")

    // display Admin Box 
    $(".SmsBoxBtn,.SmsBox ul").css("display", "block")
    $(".SmsBox div").css("opacity", ".8")

    //$(".SmsBox:hover").css("background", "#9c2839a4") //not work
    

    // all target=new page,save change data time
    $("a").attr("target","_blank") // 修改a https://blog.csdn.net/bfboys/article/details/52810081

    //////////// Save ////////////
    // js f5/關閉視窗提示 txt ing 
    // 編輯時 頁面離開或f5或者瀏覽器關閉的時候給予提示 防止用戶誤操作 離開當前頁面未保存數據可能丟失 
    // https://www.geeksforgeeks.org/how-to-detect-browser-or-tab-closing-in-javascript/
    //########qqqqqqq######## window.addEventListener('beforeunload', function (e) {  e.preventDefault(); e.returnValue = ''; });

  }
  else{
    console.log("WorkIn user!")
  }// url沒user 

  // aki admin display
  if (location.href.indexOf('aki') != -1){
    $(".AkiUpHtmlCode").css("display", "block")
  }

  // Admin手機網站更新 // 自動按 <input id="AkiUpHtmlCode"> 碼更新 qqq
  // ChangeLogo // ChangeNav 
  //QQAkiUpHtmlCodeQQ??

  AkiUpHtmlCode()

}






 // jquery 实现顶部导航下滑消失，上滑显示动画 - 掘金
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



  // googleTranslate 0815
    // jacky0719 Dont run this script, it will cause whole html slow down for 20 secs, this script is outdated
    // OVG ALL
    // https://www.w3schools.com/howto/howto_google_translate.asp
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({pageLanguage: 'en,zh-TW'}, 'google_translate_element');  
    }    
  
  







      /////// ChangeLogoOK202208092207 ///////  //User流程1

      function ChangeLogo(ImgVar_Id) { 

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
              Logo1.innerHTML = '<a title="'+Logotxt+'" href="NKOL.html"><img class="logo_icon img-responsive" src="'+turnImgUrl+'" alt="'+Logotxt+'" /></a>'
              Logo2.innerHTML = '<div class="user_img" ><img title="'+Logotxt+'" class="img-responsive" src="'+turnImgUrl+'" alt="'+Logotxt+'" /></div><div class="user_info"><h1>'+Logotxt+'<!-- 文字 --></h1></div>'
              Logo3.innerHTML = '<a title="'+Logotxt+'" href="NKOL.html"><img  class="img-responsive" src="'+turnImgUrl+'" alt="'+Logotxt+'" /></a>'
              
              // qqqqqqqqqqqq href="#"

              //console.log("///is Data012")
            }
            //else{console.log("///not Data012")}

          console.log(HaveData+"///"+turnImgUrl)


      }























//////////////////////////////
//////////////////////////////
/////////// 導航 ///////////
//////////////////////////////
//////////////////////////////


      
      /////// Change nav 202208151513 ///////  //User流程2

  function  ChangeNav1() {  // 增加導航數btn
    console.log("///增加導航")

    // get
    let 分頁數 = document.getElementById("Data3分頁數").value  // 取分頁數 val //<input id="Data3分頁數" value='5' type="text"/>
    
    if(分頁數 >= 3)    return;//限制分頁數  https://jsfiddle.net/opL1gb7d/
    for(var i=0;i<分頁數;i++){          //  分頁數loop  //用於auto ,
      /****************** 要轉的位 *********************/
      /* for 0715交互数据管理系统响应式网页模板*/
      
      // 用js make 修改導航btn,後入
          //nav導航標題格OUT = '<div id="增加導航btn'+i+'"><textarea id="Data3分頁數'+i+'"><li id="NavLi'+i+'"><a href="#Nav'+i+'"><i class="fa fa-eye-slash"></i> <span>#Nav'+i+'</span></a><a class="SmsBoxClose recycle btn SmsBox" onclick="_DelNav('+i+')"><i class="fa fa-trash"><!-- 回收站 --></i></a></li></textarea><!-- add Nav Nb 內修 --><button class="btn" onclick="ChangeNav2('+i+')"><!-- 睇圖 --><i class="fa fa-eye"></i></button></div>'
      
      nav導航標題格1 = '<div id="增加導航btn'
      nav導航標題格2 = '"><input id="Data3分頁各圖'
      nav導航標題格3a = '"  title="導航的圖" value="fa fa-eye-slash" type="text"/><!-- 圖片網址 -->'
      nav導航標題格3b = '<a href="https://fontawesome.com/v4/icons/" target="_blank"><i class="fa  fa-mortar-board recycle btn" ><!-- 教學 --></i></a>'
      nav導航標題格3c = '<textarea id="Data3分頁數'
      nav導航標題格4 = '"  title="導航名">Nav'
      nav導航標題格5 = '</textarea><!-- add Nav Nb 內修 btn --><button class="btn" onclick="ChangeNav2('
      nav導航標題格6 = ')"><!-- 睇圖 --><i class="fa fa-eye"></i></button></div>'
      // nav導航標題格1 ~6 =
      // <div id="增加導航btn0"><input id="Data3分頁各圖0"  title="導航的圖" value="fa fa-eye-slash" type="text"><!-- 圖片網址 -->
      // <a href="https://fontawesome.com/v4/icons/" target="_blank"><i class="fa  fa-mortar-board recycle btn"><!-- 教學 --></i></a>
      // <textarea id="Data3分頁數0" title="導航名">Nav0</textarea><!-- add Nav Nb 內修 btn --><button class="btn" onclick="ChangeNav2(0)"><!-- 睇圖 -->
      // <i class="fa fa-eye"></i></button></div>

      
      nav導航標題格 =  nav導航標題格1+i+
                      nav導航標題格2+i+
                      nav導航標題格3a+nav導航標題格3b+nav導航標題格3c+i+
                      nav導航標題格4+i+
                      nav導航標題格5+i+
                      nav導航標題格6
      
      document.getElementById("_Data3").insertAdjacentHTML("beforeEnd", nav導航標題格);   // 後入 https://jsfiddle.net/opL1gb7d/
    }
    
    _NoneDiv('#NavBtnBox') // 不顯示 增加導航數btn

      }






      

  //// 修改導航名,增加分頁 202208162243OK ////  //User流程3
  function  ChangeNav2(Data3分頁數nb) {   // 
        console.log("///修改導航",Data3分頁數nb)
      
        // get
        let IDTxt = "Data3分頁數"+ Data3分頁數nb // 分頁/導航名 // '<textarea id="Data3分頁數'

        let 導航名 = document.getElementById(IDTxt).value 

        let _img = "Data3分頁各圖"+ Data3分頁數nb // 分頁/導航圖 // <input id="Data3分頁各圖'

        let 導航的圖 = document.getElementById(_img).value 


        // make 客睇航btn
        //??222 let NewNav = '<li><a href="#Nav'+Data3分頁數nb+'"><i class="fa fa-eye-'+導航的圖+'"></i> <span>'+導航名+'</span></a></li>'
        let NewNav = '<li id="客睇航btn'+Data3分頁數nb+'"><a onclick="_SelNavSee('+Data3分頁數nb+')"><i class="'+導航的圖+'"></i> <span>'+導航名+'</span></a></li>'
        // <li><a href="#Nav0"><i class="fa fa-eye-####"></i> <span>####</span></a></li>
       // <li><a href="#Nav0"><i class="fa fa-eye-slash"></i> <span>#Nav0</span></a></li>
        document.getElementById("_Data3b").insertAdjacentHTML("beforeEnd", NewNav);   // 後入


       //  增加分頁   // _SelNavSee = class.none id.block

      /*
        P0819巨 =
          <div class="row NavSelDisplay" id="Nav
          0
          "><div class="col-md-12"><div class="page_title"><h2><i class="
          fa fa-eye-slash
          "></i>  
          Nav0
          </h2></div>
          Nav0
          <div class="SmsBoxB2tn"><hr style="background: rgb(199, 230, 26);">
          排版:<i class="fa  fa-mortar-board recycle btn" ><!-- 教學 --></i>
          <select id="SelPageFlow
          0
          "><option value="1">1</option><option value="2">2</option>
          <option value="4">4</option></select><button class="btn" onclick="ChangeNav3PageFlow(
          0
          )"><i class="fa fa-plus"></i></button><a title="分頁刪除" onclick="_DelNav(
          0
          )" class="SmsBoxClose recycle btn "><i class="fa fa-trash" ><!-- 分頁刪除 --></i></a>
          </div></div><br/></div>

      */

      let P0819巨1 ='<div class="row NavSelDisplay" id="Nav'
       //+Data3分頁數nb+
      let P0819巨2 ='"><div class="col-md-12"><div class="page_title"><h2><i class="'
       //+導航的圖+
      let P0819巨3 ='"></i>  '
       //導航名
      let P0819巨4a ='</h2></div>'
        //導航名
      let P0819巨4a2 ='<div class="SmsBoxB2tn"><hr style="background: rgb(199, 230, 26);">'
      let P0819巨4b ='排版:<i class="fa  fa-mortar-board recycle btn" ><!-- 教學 --></i>'
      let P0819巨4c ='<select id="SelPageFlow'
        //+Data3分頁數nb
      let P0819巨5a ='"><option value="1">1</option><option value="2">2</option>'
      let P0819巨5b ='<option value="4">4</option></select><button class="btn" onclick="ChangeNav3PageFlow('
        //Data3分頁數nb
      let P0819巨6 =')"><i class="fa fa-plus"></i></button><a title="分頁刪除" onclick="_DelNav('
        //Data3分頁數nb
      let P0819巨7a =')" class="SmsBoxClose recycle btn "><i class="fa fa-trash" ><!-- 分頁刪除 --></i></a>'
      let P0819巨7b ='</div>'
      let P0819巨8 = '</div><br/></div>' 

      let page = P0819巨1+Data3分頁數nb+P0819巨2+導航的圖+P0819巨3+導航名+P0819巨4a+導航名+P0819巨4a2+
                  P0819巨4b+P0819巨4c+Data3分頁數nb+P0819巨5a+P0819巨5b+Data3分頁數nb+ P0819巨6+
                  Data3分頁數nb+P0819巨7a+P0819巨7b+P0819巨8

      document.getElementById("_Data4").insertAdjacentHTML("beforeEnd", page);   // 後入
       _NoneDiv('#增加導航btn'+Data3分頁數nb) // 不顯示 修改導航內容btn
      }









        


  //// 修改導航後,增加分頁 202208172317 ////  //User流程4
  function  ChangeNav3PageFlow(cont) {   // 
        console.log("///修改導航",cont)
      }




  //// 點左導航,右顯隱page = class.none id.block ////
      function _SelNavSee(sel) { 
        //pageId
        let pageId = '#Nav'+sel
        let ChangePage = document.querySelector(pageId)
        $(".NavSelDisplay").css("display", "none")
        $('#Nav'+sel).css("display", "block")
        }







      //// 刪除分頁 ////
  function _DelNav(sel) {  
    console.log("///_DelNav",sel)
    _DelDiv('#增加導航btn'+sel) // 删除 修改導航內容btn
    _NoneDiv('#Nav'+sel)// // 不顯示 真導航方便 删除 修改導航內容btn 人操作
    _NoneDiv('#客睇航btn'+sel)
    }

    




  //删除指定元素  防重id  https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_remove
  function _DelDiv(IdVal) {  
    var element = document.querySelector(IdVal)
    element.remove();
    }



  function _NoneDiv(IdVal) { 
    let element = document.querySelector(IdVal)
    $(element).css("display", "none")
    }
  
  


      // if have 圖url
  function _inputDataHave(val) { 
        if (val != ''){var HaveData = '///轉已data'}
        else{ var HaveData = '///已not data'}
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

    












