export const postApi = {
  fetchById: async (id) => {
    try {
      if (!id) {
        throw new Error("Id is broken");
      }

      return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((post) => post);
    } catch (ex) {
      console.log(ex);
    }
  },
  fetchFreshPosts: async (limit = 3) => {
    try {
      return await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_sort=id&_order=desc`)
        .then((response) => response.json())
        .then((posts) => posts);
    } catch (ex) {
      console.log(ex);
    }
  },
  fetchPosts: async () => {
    try {
      return await fetch(`https://jsonplaceholder.typicode.com/posts?_sort=id&_order=desc&_limit=3`)
        .then((response) => response.json())
        .then((posts) => posts);
    } catch (ex) {
      console.log(ex);
    }
  },
};
