// select hamburger menu about navbar
let svgHamburger = document.querySelector(".svg-hamburger")
// select navbar
let navbar = document.querySelector(".navbar")
// select btn close in navbar
let btnClose = document.querySelector(".btn-close")
// select accordions
let accordions = document.querySelectorAll(".accordion")

// navbar js
svgHamburger.addEventListener("click", e=>{
    navbar.classList.toggle("show")
})
btnClose.addEventListener("click", e=>{
    navbar.classList.remove("show")
})

// accordion js
accordions.forEach(accordion => {
    Array.from(accordion.children).forEach(wrapper => {
        if (wrapper.classList.contains("show")) {
            wrapper.querySelector("div").style.maxHeight = wrapper.querySelector("div").scrollHeight + 30 + 'px'
        }
        wrapper.querySelector("span").addEventListener("click", e => {
            let span = e.target
            let wrapper = span.parentElement
            let div = span.nextElementSibling
            wrapper.classList.toggle("show")
            if (wrapper.classList.contains("show")) {
                div.style.maxHeight = div.scrollHeight + 30 + 'px'
            } else {
                div.style.maxHeight = null
            }
            Array.from(accordion.children).forEach(w => {
                if (w != wrapper) {
                    w.classList.remove("show")
                    w.querySelector('div').style.maxHeight = null
                }
            })
        })
    })
})