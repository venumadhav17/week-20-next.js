import axios from "axios";

export default async function BlogPage({ params }: any) {
  //console.log(params); // <Promise pending></Promise>
  //const postId = (await params).postId;
  /* const postId = params.postId; // If Blog post doesn't render anything.

  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = response.data; */

  const postId = (await params).postId; // [2,1,2]

  return <div>Blog Page {JSON.stringify(postId)}</div>;
}
