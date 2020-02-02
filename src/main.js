const $div1 = $('<div>1</div>')
$div.appendTo(document.body)

// div2.appendChild()
// div2 到底是 DOM 对象 还是 jQuery 对象
// DOM 对象只能使用 DOM API querySelector appendChild
// jQuery 对象只能使用 jQuery 的 API find each
// elDiv1 or div1
// $div2

//默认$div大部分时候对应了多个div是个数组，需要遍历它
