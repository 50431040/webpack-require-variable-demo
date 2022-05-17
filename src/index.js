// function createImg() {
//     const img = document.createElement("img")
//     img.src = require("./images/webpack.png").default
//     document.body.appendChild(img)
// }

// 只会打包webpack文件
// createImg()


// 使用变量的形式创建多个Img
function createManyImg() {
    const names = ["babel.png", "flutter.png"]

    names.forEach((name) => {
        const img = document.createElement("img")
        img.src = require(`./images2/${name}`).default
        img.width = "100"
        document.body.appendChild(img)
    })
}

// 会把images2目录下的所有图片打包
createManyImg()