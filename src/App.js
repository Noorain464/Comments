import './App.css';
import Comments from './CommentSection/Comments';

function App() {
  const currentUserId = "1"; 
  return (
    <Comments currentUserId={currentUserId}/>
  );
}

export default App;
