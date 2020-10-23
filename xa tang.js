let trucdoc = 0
let trucngang = 0
let diem = 0
//hàm lên trên
function moveUp() {
    trucdoc = trucdoc - 19
    trucngang = trucngang
    //nổ
    if (trucdoc == 19) {
        if (trucngang == 19) {
            console.log('bum')
            document.getElementById("tank").style["background-image"] = "url('hinh-anh-mau-den-full-hd.jpg')"
            document.getElementById("can1").style["background-image"] = "url('hinh-anh-mau-den-full-hd.jpg')"
            document.getElementById("gameover").innerHTML = "Gameover"
            
            let play = confirm("Bạn được: "+diem+" điểm"+" Chơi lại không?")

            if (play = true) {

                location.reload();


            }
        }
    }
    if (trucdoc == 19) {
        if (trucngang == 95) {
            console.log('bum')
            document.getElementById("tank").style["background-image"] = "url('hinh-anh-mau-den-full-hd.jpg')"
            document.getElementById("can2").style["background-image"] = "url('hinh-anh-mau-den-full-hd.jpg')"
            document.getElementById("gameover").innerHTML = "Gameover"
            let play = confirm("Bạn được: "+diem+" điểm"+" Chơi lại không?")

            if (play = true) {

                location.reload();


            }

        }
    }
    // ko đi ra ngoài
    if (trucdoc == -19) {
        trucdoc = 0
    }
    console.log(String(trucdoc))
    document.getElementById("tank").style.top = String(trucdoc + "px")
    document.getElementById("diem").innerText = diem
}
//hàm đi xuống
function moveDown() {
    trucdoc = trucdoc + 19
    trucngang = trucngang
    diem = diem + 1

    //nổ
    if (trucdoc == 19) {
        if (trucngang == 19) {
            console.log('bum')
            document.getElementById("tank").style["background-image"] = "url('hinh-anh-mau-den-full-hd.jpg')"
            document.getElementById("can1").style["background-image"] = "url('hinh-anh-mau-den-full-hd.jpg')"
            document.getElementById("gameover").innerHTML = "Gameover"
            let play = confirm("Bạn được: "+diem+" điểm"+" Chơi lại không?")

            if (play = true) {

                location.reload();


            }
        }
    }
    if (trucdoc == 19) {
        if (trucngang == 95) {
            console.log('bum')
            document.getElementById("tank").style["background-image"] = "url('hinh-anh-mau-den-full-hd.jpg')"
            document.getElementById("can1").style["background-image"] = "url('hinh-anh-mau-den-full-hd.jpg')"
            document.getElementById("gameover").innerHTML = "Gameover"
            let play = confirm("Bạn được: "+diem+" điểm"+" Chơi lại không?")
            if (play = true) {

                location.reload();


            }
        }
    }
    if (trucdoc == 190) {
        trucdoc = 171
    }
    console.log(String(trucdoc))
    document.getElementById("tank").style.top = String(trucdoc + "px")
    document.getElementById("diem").innerText = diem
}
//hàm sang trái
function moveLeft() {
    trucngang = trucngang - 19
    trucdoc = trucdoc
    diem = diem + 1
    //nổ
    if (trucdoc == 19) {
        if (trucngang == 19) {
            console.log('bum')
            document.getElementById("tank").style["background-image"] = "url('hinh-anh-mau-den-full-hd.jpg')"
            document.getElementById("can1").style["background-image"] = "url('hinh-anh-mau-den-full-hd.jpg')"
            document.getElementById("gameover").innerHTML = "Gameover"
            let play = confirm("Bạn được: "+diem+" điểm" +"Chơi lại không?")
            if (play = true) {

                location.reload();


            }
        }
    }
    if (trucdoc == 19) {
        if (trucngang == 95) {
            console.log('bum')
            document.getElementById("tank").style["background-image"] = "url('hinh-anh-mau-den-full-hd.jpg')"
            document.getElementById("can1").style["background-image"] = "url('hinh-anh-mau-den-full-hd.jpg')"
            document.getElementById("gameover").innerHTML = "Gameover"
            let play = confirm("Bạn được: "+diem+" điểm" +" Chơi lại không?")
            if (play = true) {

                location.reload();


            }
        }
    }
    if (trucngang == -19) {
        trucngang = 0
    }
    console.log(String(trucngang))
    document.getElementById("tank").style.left = String(trucngang + "px")
    document.getElementById("diem").innerText = diem
}
//hàm sang phải
function moveRight() {

    trucngang = trucngang + 19
    trucdoc = trucdoc

    //nổ
    if (trucdoc == 19) {
        if (trucngang == 19) {
            console.log('bum')
            document.getElementById("tank").style["background-image"] = "url('hinh-anh-mau-den-full-hd.jpg')"
            document.getElementById("can1").style["background-image"] = "url('hinh-anh-mau-den-full-hd.jpg')"
            document.getElementById("gameover").innerHTML = "Gameover"
            let play = confirm("Bạn được: "+diem+" điểm" +" Chơi lại không?")
            if (play = true) {

                location.reload();


            }
        }
    }
    if (trucdoc == 19) {
        if (trucngang == 95) {
            console.log('bum')
            document.getElementById("tank").style["background-image"] = "url('hinh-anh-mau-den-full-hd.jpg')"
            document.getElementById("can1").style["background-image"] = "url('hinh-anh-mau-den-full-hd.jpg')"
            document.getElementById("gameover").innerHTML = "Gameover"
            let play = confirm("Bạn được: "+diem+" điểm"+" Chơi lại không?")
            if (play = true) {

                location.reload();


            }

        }
    }
    if (trucngang == 190) {
        trucngang = 171
    }
    diem = diem + 1
    console.log(String(trucngang))
    document.getElementById("tank").style.left = String(trucngang + "px")
    document.getElementById("diem").innerText = diem
}
// hàm follow bằng bàn phím
function control(event) {
    switch (event.keyCode) {
        case 38:
            moveUp()
            break;
        case 40:
            moveDown()
            break;
        case 37:
            moveLeft()
            break;
        case 39:
            moveRight()
            break;
    }
}




