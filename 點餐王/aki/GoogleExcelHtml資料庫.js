
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





  

fetch('https://sheets.googleapis.com/v4/spreadsheets/1Rr9FSD7oVUDxzoIB7tIsVh3GrDSOHp63bLTGh8oCipg/values/test?alt=json&key=AIzaSyDoWvEleSQeqDFqwXN8z4slV8uhaMNuZAM')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        
        time(res)
      })


      
function time(data) {
  // 只能使用一種方法來取得資料。例如我用了.json()的方法後，不能再用另一種方法來取得資料，因為該資料已經被處理過了。
  // https://ithelp.ithome.com.tw/articles/10252941
  console.log('22')

  // 你也可以使用中括号（[]）来访问对象的值：
  // https://www.runoob.com/json/js-json-objects.html
  console.log(data.values[3][3])
}