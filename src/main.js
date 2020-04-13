let html = document.querySelector('#html')
let style = document.querySelector('#style')

let string = `/* 
**大家好，我是JN
**今天给大家变一个魔术
**首先我们来准备一个div
*/

#div{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}

/*
**接下来我要把div变成一个太极图
**注意了！
**先把div变成一个圆
*/

#div{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,.5);
    border: none;
}

/*
**太极是阴阳组成的
**一黑一白
*/

#div{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/*
**在家两个阴阳鱼眼
**一黑一白
*/

#div::before{
    width: 100px;
    height:100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%)
}
#div::after{
    width: 100px;
    height:100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%)
}

/*
**看！太极图完成了！
*/
`

let n = 0
let string2 = ''
let step = () => {
    setTimeout(() => {
        if (string[n] === '\n') {
            string2 += '<br>'
        } else if (string[n] === ' ') {
            string2 += '&nbsp;'
        } else {
            string2 += string[n]
        }
        html.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0, 99999)
        html.scrollTo(0, 99999)
        if (n < string.length - 1) {
            n++
            step()
        }
    }, 50)
}

step()