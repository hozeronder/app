import axios from "axios";

const getData = async (number) => {

    const { data: userId } = await axios(`https://jsonplaceholder.typicode.com/users/${number}`);

    const { data: posts } = await axios(`https://jsonplaceholder.typicode.com/posts?id=${number}`);

    console.log(userId, posts);
}

export default getData;



