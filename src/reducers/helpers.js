export const extractReposData = (data) => {
    let newData = [];
    data.forEach(element => {
        newData.push({
            name: element.name,
            description: element.description,
            url: element.html_url
        })
    });
    return newData;
}
