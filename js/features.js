let feature_detail = document.querySelectorAll(".feature_detail");

const options = {
    threshold: [0.25, 1.0]
};

let observer = new IntersectionObserver(FadeUp, options);

feature_detail.forEach((value) => {
    observer.observe(value);
});

function FadeUp(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.remove("is_target");
            entry.target.classList.add("fade_up");
        } else {
            entry.target.classList.remove("fade_up");
            entry.target.classList.add("is_target");
        }
    })
};