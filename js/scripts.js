const w = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";

            let branding = document.getElementById("branding");
            if(branding) {
                branding.classList.add("pt-5");
                document.getElementById("tanaka").classList.add("d-none");
            }
        } else {
            document.getElementById("navbar").style.top = "-100px";

            let branding = document.getElementById("branding");
            if(branding) {
                branding.classList.remove("pt-5");
                document.getElementById("tanaka").classList.remove("d-none");
            }
        }
        prevScrollpos = currentScrollPos;
    }