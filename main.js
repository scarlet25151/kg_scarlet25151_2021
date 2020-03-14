const getIfMapping = function (str1, str2) {
    let map = new Map();
    for (let i = 0; i < str1.length; i++) {
        if (map.has(str1[i])) {
            if (map.get(str1[i]) !== str2[i]) {
                return false;
            }
        } else {
            map.set(str1[i], str2[i]);
        }
    }
    return true;
};

let arg = process.argv.splice(2);

if (arg.length !== 2) {
    console.warn("Argument Error");
} else {
    let str1 = arg[0], str2 = arg[1];

    if (str1.length !== str2.length) {
        console.log(false);
    } else {
        console.log(getIfMapping(str1, str2));
    }
}