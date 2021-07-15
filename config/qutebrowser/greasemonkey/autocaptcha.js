// ==UserScript==
// @name         4chan X Auto Captcha
// @include      http://boards.4chan.org/*
// @include      https://boards.4chan.org/*
// @include      http://boards.4channel.org/*
// @include      https://boards.4channel.org/*
// @run-at       document-start
// ==/UserScript==

function getCaptcha() {
    if (!document.getElementById('t-fg').style.backgroundImage) {
        console.log('getting captcha')
        document.querySelector('.captcha-container button').click()
    }
}

let observer = new MutationObserver(() => {
    let textArea = document.getElementById('t-resp')

    if (textArea) {
        document.getElementById('t-load').tabIndex = -1
        textArea.addEventListener('focus', getCaptcha, { once: true })
    }
})

observer.observe(document, {
    childList: true,
    subtree: true
})
