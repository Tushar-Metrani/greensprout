import { useEffect } from "react";
import { useNavigate } from "react-router";
import { scroller } from "react-scroll";

const useScrollToSection = (section,pathname) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (section) {
            const element = document.getElementById(section);
            if (element) {
                scroller.scrollTo(section, {
                    duration: 800,
                    delay: 0,
                    smooth: 'easeOutCubic',
                    offset: -100,
                });
            }
        }

        navigate(pathname, { replace: true });
    }, [section])
};

export default useScrollToSection;