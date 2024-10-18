import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

function App() {
  return (
    <div className="h-screen flex">
      <div className="w-1/2 overflow-auto p-4">
        <h1 className="text-center font-bold text-3xl">Posts</h1>
        <Posts />
      </div>
      <div className="w-1/2 p-4">
        <h1 className="font-bold text-3xl text-center">CreatePost</h1>
        <PostForm />
      </div>
    </div>
  );
}

export default App;
