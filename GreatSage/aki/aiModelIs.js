

    // AKI
    var 人手keyword = false
    function 当输入框获取焦点时(X){
        // 当输入框获取焦点时 https://www.runoob.com/try/try.php?filename=tryjsref_onfocus
        人手keyword = X
        //alert("人手keyword2=="+人手keyword)
    }

    /////////////////////////////////////////////






    

    // https://zhuanlan.zhihu.com/p/268131046
    const video = document.querySelector('#鏡頭video') //鏡頭 <video
    const image = document.querySelector('#ai取圖img')  //ai取圖 <img
    const status = document.querySelector("#結果字p")  //結果字 <p

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    let model

    main()

    async function main () {
        status.innerText = "Model loading..."
        model = await mobilenet.load()
        status.innerText = "Model is loaded!"

        const stream = await navigator.mediaDevices.getUserMedia({ video: true })
        video.srcObject = stream
        await video.play()
        
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight

        //alert("人手keyword=1="+人手keyword)

        refresh()
    }

    async function refresh(){
        ctx.drawImage(video, 0,0)
        image.src = canvas.toDataURL('image/png')
        
        await model.load()
        const predictions = await model.classify(image)
        
        const className = predictions[0].className
        const percentage = Math.floor(100 * predictions[0].probability)
        




        //status.innerHTML = percentage + '%' + ' ' + className

        // for 0715交互数据管理系统响应式网页模板
        status.innerHTML = '<span class="skill" style="width:100%;">'+className+'<span class="info_valume">'+
        percentage+'%</span></span><div class="progress skill-bar"><div class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" aria-valuenow="'+
        percentage+'"aria-valuemin="0" aria-valuemax="100" style="width:'+percentage+'%;"></div></div>'



        if (人手keyword===false){$( '#結果input字v' ).val( className )}
        setTimeout(refresh, 100)




    }




