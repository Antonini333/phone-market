export const capitalizeWords = (str) => {
    const words = str.match(/[A-Za-z][a-z]*/g);
    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
};

export const replaceEmptyString = (str) => {
    if (!str || str === "-") {
        return "Not specified";
      }
      return str
}