


const newArticle = (title, previous, thumbnail, tags) => {
    return {
        title, 
        previous, 
        thumbnail: `/images/blog/${thumbnail}`, 
        tags: [

        ]
    }
}

const articles = [
    newArticle('Machine Late - Hack The Box', "Resolvendo a máquina Late do Hack the box.", "/machine-late/thumbnail.png"),
];



export default articles; 