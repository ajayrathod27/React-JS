import {useEffect, useState } from "react";
import "./AddVideo.css";
import useVideoDispatch from "../hooks/VideoDispatch";
// import VideoDispatchContext from "../context/VideoDispatchContext";

const initialState = {
    time: "1 month ago",
    channel: "6 pack programmar",
    verified: true,
    title:'',
    views:''
  }

function AddVideo({editableVideo}) {
  const [video, setVideo] = useState(initialState);
  // const dispatch = useContext(VideoDispatchContext);
  const dispatch = useVideoDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if(editableVideo){
      dispatch({type:'UPDATE', payload:video})
    }else{
      dispatch({type:'ADD', payload:video})
    }
    setVideo(initialState);  
  }

  function handleChange(e) {
    // console.log(e.target.name, e.target.value);
    setVideo({ ...video, [e.target.name]: e.value });
  }

  useEffect(()=>{
    if(editableVideo){
      setVideo(editableVideo)
    }
  },[editableVideo])

  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="Title"
        value={video.title}
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="Views"
        value={video.views}
      />

      <button onClick={handleSubmit}
      >
        {editableVideo?'Edit':'Add'} Video
      </button>
    </form>
  );
}

export default AddVideo;
