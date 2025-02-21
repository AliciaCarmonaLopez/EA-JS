// Función para obtener un usuario de una API
function getUser(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => {
        if (!response.ok) throw new Error("Error al obtener el usuario");
        return response.json();
      });
}
// Función para obtener los posts de un usuario
function getPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => {
        if (!response.ok) throw new Error("Error al obtener los posts");
        return response.json();
      });
}
function getComments(postId) {
      return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(response => {
        if (!response.ok) throw new Error("Error al obtener comentarios del post");
        return response.json();
      });
}  
function getPosts() {
    return fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        if (!response.ok) throw new Error("Error al obtener el usuario");
        return response.json();
      });
}

getUser(2).then(user => console.log(user));
getPosts(2).then(posts => getComments(posts[0].id))
           .then(comments => console.log(comments));
getPosts()
    .then(posts => posts.filter(post => post.userId == 7))
    .then(filteredPosts => filteredPosts.map(post => post.title.length))
    .then(mappedPosts => mappedPosts.sort((a,b) => a - b))
    .then(posts => console.log(posts));

 
       