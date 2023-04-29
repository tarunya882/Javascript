//Debouncing and Throttling are 2ways for event handling in js
//que: create debounce polyphill impl

const debounce = (cb,d) => {
    let timer;
    return function (...args) {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            cb(...args);
        },d);
    };
};

const myThrottle = (cb,d) => {
    let last = 0;
    return (...args) => {
        let now = new Date().getTime();
        if(now - last <d ) return;
        last = now;
        return cb(...args);
    };
};