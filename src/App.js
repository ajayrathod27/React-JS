// import Video from './components/Video'
import "./App.css";
import "./components/Video.css";
import videoDB from "./data/data";
// import Border from './components/Border';
// import PlayButton from './components/PlayButton';
// import Counter from './components/Counter';
import { useCallback, useReducer, useState, lazy, Suspense } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
// import DropDown from "./components/DropDown";
// import Filtered from "./components/Filtered";
import ThemeContext from "./context/ThemeContext";
import VideosContext from "./context/VideosContext";
import VideoDispatchContext from "./context/VideoDispatchContext";
const Dummy = lazy(() => import('./components/Dummy.js'));

function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  const [mode, setMode] = useState("darkMode");
  const [show, setShow] = useState(false);

  // const url = "https://api.mockaroo.com/api/0790aad0?count=1000&key=cc6e65b0"

  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;
      default:
        return videos;
    }
  }
  const [videos, dispatch] = useReducer(videoReducer, videoDB);
  // const [videos, setVideos] = useState(videoDB);

  // function addVideos(video) {
  //   dispatch({type:'ADD', payload:video})
  // action :{type:'ADD', payload:video}
  // setVideos([
  //     ...videos,
  //     {...video, id: videos.length+1}
  //   ]);
  // }

  // function deleteVideo(id) {
  //   dispatch({type:'DELETE', payload:id})

  // setVideos(videos.filter(video=>video.id!==id))
  // }

  // const themeContext = useContext(ThemeContext);

  const editVideo = useCallback(function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  },[videos])


  // function updateVideo(video){

  //   dispatch({type:'UPDATE', payload:video})

  // const index = videos.findIndex(v=>v.id===video.id)
  // const newVideos = [...videos]
  // newVideos.splice(index, 1, video)
  // setVideos(newVideos)
  // }

  return (
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
        <div className={`App ${mode}`} onClick={() => console.log("App")}>
           {/* <Counter></Counter> */}
          <button
            onClick={() =>
              setMode(mode === "darkMode" ? "lightMode" : "darkMode")
            }
          >
            Mode
          </button>
          {/* <DropDown></DropDown> */}
          {/* <Filtered items={videos}></Filtered> */}

          <AddVideo
            // dispatch={dispatch}
            editableVideo={editableVideo}
          ></AddVideo>

          <VideoList
            // dispatch={dispatch}
            editVideo={editVideo}
            // videos={videos}
          ></VideoList>
          <button onClick={()=>setShow(true)}>Show</button>
          {show?
          <Suspense fallback={<>Loading...</>}>
          <Dummy/>
          </Suspense>
          :null}
        </div>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
