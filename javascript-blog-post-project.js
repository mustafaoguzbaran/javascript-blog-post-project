const posts = [
    {title: "Post One", body: "This is post one"},
    {title: "Post Two", body: "This is post two"},
    {title: "Post Three", body: "This is post three"}
];
function listPosts(data) {
    data.forEach(function(post){
        console.log(post.title + ": " + post.body)
    });
};
function createPost(post) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
                console.log("Post Created", post)
                console.log(posts.forEach(function(post){
                    console.log(post.title + ": " + post.body)}))
            } else {
                reject("Error: Something went wrong");
            }
        }, 2000);
    });
}
createPost({title: "Post Four", body: "This is post four"}, listPosts(posts))