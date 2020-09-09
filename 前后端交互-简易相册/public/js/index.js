// const upload = require("../../middlewares/upload");

let uploadBtnElement = document.querySelector('.uploadBtn');
let uploadFileElement = document.querySelector('#uploadFile');
let taskBodyElement = document.querySelector('.task_body');

uploadBtnElement.onclick = function() {
    uploadFileElement.click()
}

//内容发生改变了 触发事件
uploadFileElement.onchange = function() {
    // console.log(11);
    let files = this.files;
    for (let file of files) {
        // console.log(file);
        uploadFile({
            file
        })
    }

}

function uploadFile(data) {
    let li = document.createElement('li');
    li.innerHTML = `<li>
    <span>${data.file.name}</span>
    <div class="task-progress-status">
        <span class="icon task-progress-status-success"></span>
    </div>
    <div class="progress"></div>
</li>`
    let progressElement = li.querySelector(".progress")
    let tasskProgressStatusElement = li.querySelector(".task-progress-status-success")
    let contentList = document.querySelector(".content-list")
    let task_panel = document.querySelector(".task_panel")

    taskBodyElement.appendChild(li);
    task_panel.style.display = 'block'
    ajax({
        method: 'post',
        url: '/upload',
        data,
        success(data) {
            // console.log('data', data);
            data = JSON.parse(data)
                // console.log(data);
            let img = new Image();
            img.src = data.url;
            contentList.appendChild(img)

            setTimeout(() => {
                // li.remove()
                tasskProgressStatusElement.innerHTML = '上传完成'
                task_panel.style.display = 'none'

            }, 1000)
        },
        onprogress(ev) {
            // console.log(ev);
            progressElement.style.width = (ev.loaded / ev.total) * 100 + '%'

        },
    });


}


window.onload = function() {
    let contentList = document.querySelector(".content-list")

    ajax({
        method: 'get',
        url: '/getPhotos',
        success(data) {
            console.log('data', data);
            data = JSON.parse(data);
            let photos = data.photos
                // console.log(data.photos[0]);
            for (let i = 0; i < photos.length; i++) {
                let img = new Image();
                img.src = photos[i];
                // console.log(photos[i]);
                contentList.appendChild(img)
            }

        },

    });
}