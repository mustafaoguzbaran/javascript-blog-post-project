const posts = [
    {title: "Post One", body: "This is post one"},
    {title: "Post Two", body: "This is post two"},
    {title: "Post Three", body: "This is post three"}
];
function listPosts() {
    posts.forEach(function(post){
        console.log(post.title + ": " + post.body)
    });
};
function createPost(post, callback) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
                console.log("Post Created", post)
                callback();
            } else {
                reject("Error: Something went wrong");
            }
        }, 2000);
       
    });
}
createPost({title: "Post Four", body: "This is post four"}, listPosts)