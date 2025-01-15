export const getDisplayWidth = () => {
    if (typeof window !== "undefined") {
        return window.innerWidth;
    } else {
        console.warn("This function is intended to run in a browser environment.");
        return 0; // Return a fallback value
    }
};

export const getDisplay = () => {
    if (typeof window !== "undefined") {
        return window.innerWidth;
    } else {
        console.warn("This function is intended to run in a browser environment.");
        return 0; // Return a fallback value
    }
};


export const bg = () => {
    let bg = {
        backgroundImage: 'url("https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/Fudli-Restaurant-Food-Order-System-1400x1582.jpg")',
        height: '35vh',
        width: "100%",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '20px',
        opacity: '100%'
    }
    return bg;
};