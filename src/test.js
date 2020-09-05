import string from './css.js'

const player = {
    n:1,
    flag:1,
    time:20,
    play:undefined,
    ui:{
         demo: document.querySelector('#demo'),
         demo2: document.querySelector('#demo2'),
         btnPause: document.querySelector('#btnPause'),
         btnPlay: document.querySelector('#btnPlay'),
         btnNormal: document.querySelector('#btnNormal'),
         btnSlow: document.querySelector('#btnSlow'),
         btnFast: document.querySelector('#btnFast')
    },
    init:()=>{
        player.bindEvent()
        player.run()
    },
    bindEvent:()=>{
        player.ui.btnPause.onclick = () => {
            if (player.flag === 1) {

                player.pause()
                player.flag = 0
            }
        }
        player.ui.btnPlay.onclick = () => {
            if (player.flag === 0) {
                player.run()
                player.flag = 1
            }
        }
        player.ui.btnSlow.onclick = player.slow
        player.ui.btnNormal.onclick = player.normal
        player.ui.btnFast.onclick = player.fast
    },
    typer: () => {
        player.n += 1
        if (player.n > string.length) {
            clearInterval(player.typer)
            return
        }
        player.ui.demo.innerHTML = string.substring(0, player.n)
        // innerText可以打出换行空格，innerHTML不可以
        player.ui.demo2.innerText = string.substr(0, player.n)
        player.ui.demo2.scrollTop = player.ui.demo2.scrollHeight
    },
    run: () => {
        player.play = setInterval(player.typer, player.time)
    },
    pause: () => {
        clearInterval(player.play)
        //let fun = add(1+2),就是将add(1+2)执行，把返回值给了fun，（如果有返回值），
        //let fun = add 才是把函数add拷贝给变量fun
        //函数的本质是一系列代码操作，可以有返回值，也可以没有。
        //所以执行函数本质是执行一些列操作，返回值只是操作的一部分罢了。
        //比如这个clearInterval()，返回值只是一个可有可无的非零数字。（操控导向的函数）
        //函数外面包的一层函数类似开关，变量执行时开关打开，执行内部函数。
        //但当内部函数无需参数时，可以舍弃开关，把原来内部的函数执行结果，换成函数即可。
    },
    slow: () => {
        if (player.time !== 100) {
            player.pause()
            player.time = 100
             player.run()
        }
    },
    normal: () => {
        if (player.time !== 20) {
            player.pause()
            player.time = 20
             player.run()
        }
    },
    fast: () => {
        if (player.time !== 5) {
            player.pause()
            player.time = 5
            player.run()
        }
    }
}

player.init()



