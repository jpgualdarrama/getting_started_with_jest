function filterByTerm(arr, searchTerm) {
    if (!searchTerm) throw Error("searchTerm cannot be empty");
    if (!arr.length) throw Error("arr cannot be empty");
    const regex = new RegExp(searchTerm, "i");
    return arr.filter((elem) => {
        return elem.url.match(regex);
    });
}

module.exports = filterByTerm;
