export const toRGB = (x) => {
    let sep = x.indexOf(",") > -1 ? "," : " ";
    return x.substr(4).split(")")[0].split(sep).map(Number);
}