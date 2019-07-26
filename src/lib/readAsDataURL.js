export default function(file) {
  const reader = new FileReader()

  return new Promise((resolve, reject) => {
    if (!file) return reject('invalid url')

    // 图片读取成功回调函数
    reader.onload = e => {
      const base64Url = e.target.result

      resolve(base64Url)
    }

    reader.readAsDataURL(file)
  })
}
