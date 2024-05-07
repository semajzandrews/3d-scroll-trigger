gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", function() {
    const slides = gsap.utils.toArray(".slide");
    const activeSlideImages = gsap.utils.toArray(".active-slide img");

    function getInitialTranslateZ(slide){
        const style = window.getComputedStyle(slide);
        const matrix = style.transform.match(/matrix3d\((.+)\)/);
        if (matrix){
            const values = matrix[1].split(", ");
            return parseFloat(values[14] || 0);
        }
        return 0;
    }

    function mapRange(value, inMin, inMax, outMin, outMax){
        return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }

    slides.forEach(slide, index) => {
        const initialZ = getInitialTranslateZ(slide);
    }
})