





    // AKI

    window.onload=isAutoRun();//將代碼綁定到window.onload事件
    function isAutoRun(){
        const aiModelIsBox = document.querySelector("#aiModelIsBox")
        aiModelIsBox.innerHTML = '<video id="鏡頭video" autoplay muted playsinline>你的設備沒有鏡頭</video><img id="ai取圖img" />'
    }
    

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


















    ////////////////////////////////////////
        // jacky0719 script for change devices
		// https://webrtc.github.io/samples/src/content/devices/input-output/
		// https://simpl.info/getusermedia/sources/
		// https://github.com/samdutton/simpl/blob/gh-pages/getusermedia/sources/js/main.js
		var videoElement = document.querySelector("#鏡頭video")
		var audioSelect = document.querySelector("select#audioSource")
		var videoSelect = document.querySelector("select#videoSource")
		audioSelect.onchange = getStream
		videoSelect.onchange = () => {
			getStream().then(runModelOnStream)
		}

		// funcion to init and find video & audio devices
		async function initMediaDevicesAndApplyModel() {
			await getStream()
			await getDevices().then(gotDevices)
			await runModelOnStream()
		}
		initMediaDevicesAndApplyModel()

		function getDevices() {
			// AFAICT in Safari this only gets default devices until gUM is called :/
			return navigator.mediaDevices.enumerateDevices()
		}

		function gotDevices(deviceInfos) {
			console.log("deviceInfos", deviceInfos)
			window.deviceInfos = deviceInfos // make available to console
			console.log("Available input and output devices:", deviceInfos)
			for (const deviceInfo of deviceInfos) {
				const option = document.createElement("option")
				option.value = deviceInfo.deviceId
				if (deviceInfo.kind === "audioinput") {
					option.text =
						deviceInfo.label ||
						`Microphone ${audioSelect.length + 1}`
					audioSelect.appendChild(option)
				} else if (deviceInfo.kind === "videoinput") {
					option.text =
						deviceInfo.label || `Camera ${videoSelect.length + 1}`
					videoSelect.appendChild(option)
				}
			}
		}

		function getStream() {
			if (window.stream) {
				window.stream.getTracks().forEach((track) => {
					track.stop()
				})
			}
			const audioSource = audioSelect.value
			const videoSource = videoSelect.value
			const constraints = {
				audio: {
					deviceId: audioSource ? { exact: audioSource } : undefined,
				},
				video: {
					deviceId: videoSource ? { exact: videoSource } : undefined,
				},
			}
			return navigator.mediaDevices
				.getUserMedia(constraints)
				.then(gotStream)
				.catch(handleError)
		}

		function gotStream(stream) {
			window.stream = stream // make stream available to console
			audioSelect.selectedIndex = [...audioSelect.options].findIndex(
				(option) => option.text === stream.getAudioTracks()[0].label,
			)
			videoSelect.selectedIndex = [...videoSelect.options].findIndex(
				(option) => option.text === stream.getVideoTracks()[0].label,
			)
			videoElement.srcObject = stream
		}

		function handleError(error) {
			console.error("Error: ", error)
		}