window.addEventListener("scroll",function(){
    let header= document.querySelector('#header')
    header.classList.toggle('rolar',this.window.scrollY>0)
})