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

const sortByYear = (a,b) =>{
    let yearA=a[3].slice(6);
    let yearB=b[3].slice(6);
    return yearA-yearB;
}

export const sortUsers = (d,payload) =>{
    switch(payload){
        case "name_asc":
            return d.sort();
        case "name_desc":
            return d.sort().reverse();
        case "year_asc":
            return d.sort(sortByYear)
        case "year_desc":
            return d.sort(sortByYear).reverse()
        default:
            break;
    }
}
