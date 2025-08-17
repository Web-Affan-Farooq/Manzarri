import gsap from "gsap";
import { ReactRef, useGSAP } from "@gsap/react";
import { RefObject } from "react";

interface AnimationConfig {
    ref:RefObject<HTMLElement>;
    animation:(target:HTMLElement, tl:gsap.core.Timeline) => void;
}

const useTimeline = (configs:AnimationConfig[]) => {
    return useGSAP(() => {
        const tl = gsap.timeline();
        configs.forEach((config) => {
            if(config.ref.current) {
                config.animation(config.ref.current, tl)
            }
        })
        // // 1. ____ Background changing animation ...
        // tl.from(elementRef.current, {
        //     background: "#000000",
        //     duration: 3,
        //     ease: "back",
        // });
        // // 2. ____ Extending line animation on header component ...
        // tl.to(elementRef.current, {
        //     width: "100%",
        //     duration: 1,
        // });
    }, []);
}

export default useTimeline