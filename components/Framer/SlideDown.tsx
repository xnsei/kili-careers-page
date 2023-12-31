import React from "react";
import {motion} from "framer-motion";

export default function SlideDown({children, width="full"}: {
    children: JSX.Element,
    width?: "full" | "100%",
}) {
    return (
        <div style={{position: "relative", width, overflow: "hidden"}}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: -75},
                    visible: {opacity: 1, y: 0},
                }}
                initial="hidden"
                animate="visible"
                transition={{duration: 0.5, delay: 0.75}}
            >
                {children}
            </motion.div>
        </div>
    );
};