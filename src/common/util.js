export const formatPlayCount = item => {
    return (item / 10000) > 9 ? ((item / 10000) > 10000 ? `${(item / 100000000).toFixed(1)}亿` : `${Math.ceil(item / 10000)}万`) : Math.floor(item)
};

export const addZero = s => {
    return s < 10 ? '0' + s : s
};

export const formatTime = s => {
    let minute = Math.floor(s / 60);
    let second = Math.floor(s % 60);
    return `${addZero(minute)}:${addZero(second)}`
};

export const findIndex = (list, music) => {
    return list.findIndex((item) => {
        return item.id === music.id
    })
};

export const debounce = function (func, delay) {
    let timer;
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
};

export const throttle = function (func, delay) {
    let now = Date.now();
    return function (...args) {
        const current = Date.now();
        if (current - now >= delay) {
            func.apply(this, args);
            now = current
        }
    }
};
