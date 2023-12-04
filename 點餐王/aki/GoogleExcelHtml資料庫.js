
/*
  V4 版取得Google Sheets 資料的方法
  https://www.letswrite.tw/google-excel-db/#v4-%e7%89%88%e5%8f%96%e5%be%97-google-sheets-%e8%b3%87%e6%96%99%e7%9a%84%e6%96%b9%e6%b3%95
  https://sheets.googleapis.com/v4/spreadsheets/{表單id}/values/{sheet名稱}?alt=json&key={API金鑰}




  https://docs.google.com/spreadsheets/d/e/2PACX-1vTjQTq9vb6Hy1s8saRbLGxJEVLFbIQri0u4pxB4CnrNseIbKaQORr0E8ipXpOU4CGoLyjykmRwkaO3Y/pubhtml?gid=0&single=true
  AIzaSyDoWvEleSQeqDFqwXN8z4slV8uhaMNuZAM



  

  https://sheets.googleapis.com/v4/spreadsheets/2PACX-1vTjQTq9vb6Hy1s8saRbLGxJEVLFbIQri0u4pxB4CnrNseIbKaQORr0E8ipXpOU4CGoLyjykmRwkaO3Y/values/test?alt=json&key=AIzaSyDoWvEleSQeqDFqwXN8z4slV8uhaMNuZAM



https://docs.google.com/spreadsheets/d/

1Rr9FSD7oVUDxzoIB7tIsVh3GrDSOHp63bLTGh8oCipg

/edit?usp=drivesdk

https://sheets.googleapis.com/v4/spreadsheets/1Rr9FSD7oVUDxzoIB7tIsVh3GrDSOHp63bLTGh8oCipg/values/test?alt=json&key=AIzaSyDoWvEleSQeqDFqwXN8z4slV8uhaMNuZAM




*/






fetch('https://sheets.googleapis.com/v4/spreadsheets/1Rr9FSD7oVUDxzoIB7tIsVh3GrDSOHp63bLTGh8oCipg/values/test?alt=json&key=AIzaSyDoWvEleSQeqDFqwXN8z4slV8uhaMNuZAM')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        //alert(res)
      })

      