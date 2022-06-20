document.addEventListener("DOMContentLoaded", main);
let likeList = []
let dislikeList = []

let currentImage = {}

function updateImage() {
    return new Promise((resolve, reject) => {
        fetch('https://api.thecatapi.com/v1/images/search').then(res => res.json())
            .then(data => {
                let d = data[0]
                let img = d.url
                currentImage = d
                let div = document.getElementsByClassName("imageHolder")[0]
                div.style.backgroundImage = "url('" + img + "')";
                div.style.backgroundRepeat = "no-repeat"
                div.style.backgroundAttachment = "fixed"
                div.style.backgroundPosition = "center"
                resolve(d, img, div)

            }).catch((e) => {
                reject(e)
            })
    })
}

function likeButtonPressed() {
    likeList.push(currentImage)
    updateImage().then((r) => {
        console.log("img updated")
    })
}

function dislikeButtonPressed() {
    dislikeList.push(currentImage)
    updateImage().then((r) => {
        console.log("img updated")
    })
}

function generateLikeList(type, body) {
    let list = likeList
    if (type == "dislike") {
        list = dislikeList
    }
    for (let i in list) {
        likelistbody.innerHTML = likelistbody.innerHTML + "<img style='max-width:400px' src='" + list[i].url + "' /><br/>"
    }
}

function main(event) {

    // Like BUtton
    let likeButton = document.getElementById("likebtn")
    likeButton.addEventListener("click", () => {
        likeButtonPressed()
    })

    //dislike

    let dislikeButton = document.getElementById("dislikebtn")
    dislikeButton.addEventListener("click", () => {
        dislikeButtonPressed()
    })

    // like list onlick 
    let likelistonclick = document.getElementById("likelistbtn")
    let likelistbody = document.getElementById("likelistbody")
    likelistonclick.addEventListener("click", () => {
        generateLikeList("like", likelistbody)
    })

    // like list onlick 
    // let dislikelistonclick = document.getElementById("dilikelistbtn")
    // let dislikelistbody = document.getElementById("dislikelistbody")
    // dislikelistonclick.addEventListener("click", () => {
    //     generateLikeList("dislike", dislikelistbody)
    // })



    let clik = ''
    updateImage().then((d) => {
            console.log("img updated")
            console.log(d)
        }).catch((e) => {
            console.log("img err")
            console.log(e)
        })
        // fetch('https://api.thecatapi.com/v1/images/search').then(res => res.json())
        //     .then(data => {
        //         let d = data[0]
        //         let img = d.url
        //         let div = document.getElementsByClassName("imageHolder")[0]
        //         div.style.backgroundImage = "url('" + img + "')";
        //         div.style.backgroundRepeat = "no-repeat"
        //         div.style.backgroundAttachment = "fixed"
        //         div.style.backgroundPosition = "center"

    //         console.log(data)
    //     }).catch((e) => {

    //     })

    // let catlink = data.json()
    // console.log(catlink)
}