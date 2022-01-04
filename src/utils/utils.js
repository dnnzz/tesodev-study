export const filterUsers = (d,query) => {
    var filtered = [];
    for (let i = 0; i < d.length; i++) {
        for (let j = 0; j < 6; j++) {
            if (d[i][j].includes(query)) {
                filtered.push(d[i]);
            }
        }
    }
    return filtered;
};
