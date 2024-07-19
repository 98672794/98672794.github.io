











let token     = _0x0113kl(GT)
  , repoOwner = _0x1731ba(Owner)
  , repoName  = _0x1731ba(repo)
  , G_Url     = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/`





































// GitHub 私人存儲庫文件顯示
async function _SeeGitHubTxt(fileName) {
  // https://chat.openai.com/share/8924f5eb-0a01-4238-959a-2ace05fea61e
  try {
    const response = await fetch(G_Url + fileName, {
      headers: {
        Authorization: `token ${token}`
      }
    });
    const data = await response.json();
    // 解析Base64編碼的內容
    const content = atob(data.content);
    // 返回內容

    //console.log('content=',content) 

    return content;
  } catch (error) {
    //console.log('error=',error)
    $('#pwWorg').text('註冊中..')
  }
}







































// 上傳文到GitHub
async function _upTxtToGitHub(fileName,fileContent) {
    // https://chat.openai.com/share/0013f2d3-9ca1-45c0-b0dc-5b1ad79a24aa
    let apiUrl = G_Url+fileName

    // 檢查文件是否存在
    let existingFileResponse = await fetch(apiUrl, {
        headers: {
    'Authorization': `token ${token}`,
        }
    });
    let existingFileData = await existingFileResponse.json();
  
    if (existingFileData.message === 'Not Found') {
        // 如果文件不存在，則創建新文件
        let createFileResponse = await fetch(apiUrl, {
    method: 'PUT',
    headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        message: nowTime()+'_上傳_'+fileName,
        content: btoa(unescape(encodeURIComponent(fileContent))) // 將文字內容轉換為Base64格式
    })
        });
        console.log(fileName,'已成功創建');
    } else {
        // 如果文件存在，則更新文件內容
        let updateFileResponse = await fetch(apiUrl, {
    method: 'PUT',
    headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        message: nowTime()+'_更新_'+fileName,
        content: btoa(unescape(encodeURIComponent(fileContent))), // 將文字內容轉換為Base64格式
        sha: existingFileData.sha
    })
        });
        console.log(fileName,'已成功更新');
    }
    return fileName
  }
  
  

























  
















// 上傳圖片或影片到GitHub
function _UpJPG(檔名,file) {
  // https://chat.openai.com/share/11ce5c58-330d-4411-b7ad-c8cb8cb5bc53
  // https://chat.openai.com/share/a36aa853-7430-4083-971c-0d0efc37d268
  
    return new Promise((resolve, reject) => {
    if (file) {
      let reader = new FileReader()
      reader.onload = function(event) {
        let content = event.target.result
          , fileName = file.name.split('.')[1]
          , Commits信息 = ''

        // 轉文件名
        fileName = 檔名+'.'+fileName
        Commits信息 = nowTime()+'_上傳_'+fileName
        fileName = `${fileName}?${Date.now()}`; // 添加時間戳

        let uploadUrl = G_Url+fileName
        fetch(uploadUrl)
        .then(response => response.json())
        .then(data => {
          let fileSha = data.sha;
          return fetch(uploadUrl, {
            method: 'PUT',
            headers: {
              Authorization: `token ${token}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              message: Commits信息,
              content: content.split(',')[1], // 移除data URL的前綴部分
              sha: fileSha,
              encoding: 'base64'
            })
          });
        })
        .then(response => response.json())
        .then(data => {
          let 可睇ulr = data.content.download_url; // 使用 download_url 屬性
          console.log('新文件',fileName,'已成功上傳：', 可睇ulr)
          resolve(可睇ulr)
          //console.log('新文22222件',fileName,'已成功上傳：', data.content.html_url) // 冇tk
          //resolve(data.content.html_url)
        })
        .catch(error => {
          _DelGithubFile(fileName)
          resolve(_UpJPG(檔名,file));
        });
      };
      reader.readAsDataURL(file);
    } else {
      reject('未選擇文件');
    }
  })
}








// 生成帶有 token 的圖片 URL
function _00000000MakeTokenURL(圖原URL) {
  return new Promise((resolve, reject) => {
    let imageURLWithToken = 0;
    let 圖token = !true;

    console.log('11111', 圖原URL);

    if (圖原URL.indexOf('github') !== -1) {
      const url = 圖原URL.split('/blob')[1];
      const url2 = `https://raw.githubusercontent.com/${repoOwner}/${repoName}` + url;

      console.log('333333333333', url2);

      // 使用 jQuery 發送 AJAX 請求獲取圖片 URL
      $.ajax({
        url: url2,
        type: 'GET',
        success: function(data, status, xhr) {
          console.log('444444444444', url2);
          // 從響應頭部中獲取最新的 token
          圖token = xhr.getResponseHeader("Authorization").split(" ")[1];
          // 生成帶有 token 的圖片 URL
          imageURLWithToken = url2 + "?token=" + 圖token;
          console.log('imageURLWithToken2222', imageURLWithToken);
          resolve(imageURLWithToken);
        },
        error: function(xhr, textStatus, errorThrown) {
          reject(errorThrown);
        }
      });
    } else {
      imageURLWithToken = 圖原URL;
      console.log('imageURLWithToken2222', imageURLWithToken);
      resolve(imageURLWithToken);
    }
  });
}






// 刪除GitHub私人庫中的文件
async function _DelGithubFile(欲刪檔名) {
  // https://chat.openai.com/share/cbc16fab-b54d-4aff-9e49-483c21d187be
  try {
    // 先取得文件內容以獲取sha值
    let response = await fetch(G_Url+欲刪檔名, {
      method: 'GET',
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });
    let fileInfo = await response.json();

    // 使用取得的sha值來刪除文件
    let deleteResponse = await fetch(G_Url+欲刪檔名, {
      method: 'DELETE',
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
      body: JSON.stringify({
        message: '刪除_'+欲刪檔名, // 提供刪除文件的訊息
        sha: fileInfo.sha // 提供文件的sha值
      })
    });

    if (deleteResponse.ok) {
      console.log('文件_'+欲刪檔名+'刪除成功');
    } else {
      let errorMessage = await deleteResponse.text();
      console.error('文件_'+欲刪檔名+'刪除失敗：', errorMessage);
    }
  } catch (error) {
    console.error('發生錯誤：', error);
  }
}



