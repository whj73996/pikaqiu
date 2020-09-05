const string =`
.skin{
    background-color: #FEE433;
    min-height: 50vh;
    min-width: 100vw;
}


.nose{
    border:8px solid #000;
    border-right-color:transparent ;
    border-bottom-color:transparent ;
    border-left-color:transparent ;
    width:0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: 140px;
    margin-left: -8px;
}
.nose:hover{
    animation: wave 160ms infinite;
}
@keyframes wave{
    0%{
        transform: rotate(0);
    }

    25%{
        transform: rotate(15deg);
}
    50%{
        transform: rotate(0deg);
}
    75%{
        transform: rotate(-15deg);
}
    100%{
        transform: rotate(0);
    }
}
.nose .yuan{
    /* border: 1px solid red; */
    background-color: #000;
    position: absolute;
    width: 16px;
    height: 4px;
    top: -12.1px;
    margin-left: -8px;
    border-radius:10px 10px 0 0/ 5px 5px 0 0;
}

.eye{
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background-color: #2e2e2e;
    border-radius: 50%;
    border: 2px #000 solid;
}
.eye::before{
    display: block;
    content: '';
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    left: 6px;
    top: 2px;
    border: 2px #000 solid;
}
.eye.left{
    transform: translateX(-150px);
}
.eye.right{
    transform: translateX(150px);
}

.mouth{
    width: 200px;
    height: 200px;
    position:absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
}

.up .lip{
    border-bottom: 5px solid black;
    border-left: 5px solid black;
    height: 25px;
    width: 100px;
    border-radius:0px 0 0px 40px / 0px 0 0px 25px;
    border-top-color: #FEE433;
    border-right-color: #FEE433;
    position: absolute;
    left: 50%;
    background-color:#FEE433 ;
    z-index: 1;
}

.up .lip.left{
    transform: rotate(-20deg);
    margin-left: -99px;
}
.up .lip.right{
    transform: rotate(20deg)  rotateY(180deg);
}

.mouth .down{
    /* border: 1px red solid; */
    height: 140px;
    position: absolute;
    top:8px;
    width: 100%;
    overflow: hidden;
}
.mouth .down .yuan1{
    border: 5px #000 solid;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px /250px;
    background-color: #990513;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: -890px;
    border-radius: 75px /110px;
    background-color: #FC4A62;
}

.face{
    position: absolute;
    left: 50%;
    border: 3px black solid;
    width: 80px;
    height: 80px;
    top: 200px;
    margin-left: -44px;
    z-index: 3;
    border-radius: 50%;
    background-color: #FC0D1C;
}
.face.left{
    transform: translate(-180px,20px);
}
.face.right{
    transform: translate(200px,20px);
}
`
export default string;