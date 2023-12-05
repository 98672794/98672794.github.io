





















/*
  V4 版取得Google Sheets 資料的方法
  https://www.letswrite.tw/google-excel-db/#v4-%e7%89%88%e5%8f%96%e5%be%97-google-sheets-%e8%b3%87%e6%96%99%e7%9a%84%e6%96%b9%e6%b3%95

  使用「發佈到網路」的網址(id)會顯示拒絕跨網域請求的錯誤,使用「共用」的網址(id)就成功了
  https://www.letswrite.tw/google-excel-db/#comment-82

  example
  https://sheets.googleapis.com/v4/spreadsheets/{表單id}/values/{sheet名稱}?alt=json&key={API金鑰}



  https://docs.google.com/spreadsheets/d/1Rr9FSD7oVUDxzoIB7tIsVh3GrDSOHp63bLTGh8oCipg/edit?usp=sharing
  AIzaSyDoWvEleSQeqDFqwXN8z4slV8uhaMNuZAM


  https://sheets.googleapis.com/v4/spreadsheets/1Rr9FSD7oVUDxzoIB7tIsVh3GrDSOHp63bLTGh8oCipg/values/test?alt=json&key=AIzaSyDoWvEleSQeqDFqwXN8z4slV8uhaMNuZAM

  */

// 取Google Sheets 資料
fetch('https://sheets.googleapis.com/v4/spreadsheets/1Rr9FSD7oVUDxzoIB7tIsVh3GrDSOHp63bLTGh8oCipg/values/test?alt=json&key=AIzaSyDoWvEleSQeqDFqwXN8z4slV8uhaMNuZAM')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        
        用G資料(res)
      })



















      



function 用G資料(data) {
  // 只能使用一種方法來取得資料。例如我用了.json()的方法後，不能再用另一種方法來取得資料，因為該資料已經被處理過了。
  // https://ithelp.ithome.com.tw/articles/10252941

  // 你也可以使用中括号（[]）来访问对象的值：
  // https://www.runoob.com/json/js-json-objects.html
  //console.log(data.values[3][3])

  // data總數
  //console.log(data.values.length)



  // 用data總數计加左類Menu // 0是不用
  for(var count=0 ; count < data.values.length ; count++){

    // for加box
    // https://www.mmxiaowu.com/article/58481d53d4352863efb55443
    $('#all類').append(_整all類List(count,data))

  }




}












// JS循环遍历数组去掉其中的重复值
// https://blog.csdn.net/weixin_42400729/article/details/106712156
function _unique1(arr){
  var hash=[];
  for (var i = 0; i < arr.length; i++) {
    if(hash.indexOf(arr[i])==-1){
      hash.push(arr[i]);
    }
  }
  return hash;
}









// 生成all類List
function _整all類List(數,料) {


  let 類名 = 料.values[數][0]






  // logo
  if (數 === 1){
    var 類List = '\
      <a href="./" class="app-brand-link">\
        <span class="app-brand-text demo menu-text fw-bolder ms-2">'+類名+'</span>\
      </a>\
    '
  }
  



  // 類名menu
  if (數 > 2){


    var 類List = '\
      <!-- '+類名+' -->\
      <li class="menu-item" title="'+類名+'">\
        <a href="#'+類名+'" class="menu-link">\
            <div data-i18n="Basic" >'+類名+'</div>\
        </a>\
      </li>\
    '
  }


  
  

  return 類List
}