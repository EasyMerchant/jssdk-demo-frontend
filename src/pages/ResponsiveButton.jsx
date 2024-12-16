import { useState } from "react";

const ResponsiveButton = ({paymentsRef}) => {
    // List of devices with their respective width and icons
    const devices = [
        { type: "computer", width: "100%", icon: "/computer.svg", alt: "Computer" },
        { type: "tablet", width: "768px", icon: "/tablet.svg", alt: "Tablet" },
        { type: "cell_phone", width: "375px", icon: "/cell-phone.svg", alt: "Cell Phone" },
    ];

    const [active, setActive] = useState("computer");

    // Handles device click and adjusts container width
    const handleResponsiveClick = (type, width) => {
        setActive(type);
        if (paymentsRef.current) {
            paymentsRef.current.style.width = width;
        }
    };

    return (
        <div className="relative w-full h-full flex justify-center">
            {/* Fixed buttons for responsiveness */}
            <div className="fixed top-0 my-3 flex justify-center z-10">
                <div className="flex justify-center space-x-4 py-2 px-3 rounded-xl">
                    {devices.map(({ type, width, icon, alt }) => (
                        <button
                            key={type}
                            onClick={() => handleResponsiveClick(type, width)}
                            className={`${
                                active === type ? "bg-gray-200" : "bg-white"
                            } w-11 h-11 p-2 text-blue-600 rounded-lg shadow-sm focus:outline-none`}
                        >
                            <img src={icon} alt={alt} />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResponsiveButton;
