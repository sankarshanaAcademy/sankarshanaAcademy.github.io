let o = {
    threshold: 1.0,
};

const intersection = new IntersectionObserver((objs, o) => {
    objs.forEach((e) => {
   
        if(e.isIntersecting){
            e.target.style.animationPlayState = 'running';
        }
    })
})

elements = document.querySelectorAll('.motion');
elements.forEach((e) => intersection.observe(e));