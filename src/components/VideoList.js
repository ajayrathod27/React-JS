import Video from "./Video";
import Border from "./Border";
import PlayButton from "./PlayButton";
import Counter from "./Counter";
// import { useContext } from 'react';
import useVideos from "../hooks/Videos";
import { useCallback, useMemo } from "react";
// import axios from "axios";
// import VideosContext from '../context/VideosContext';

function VideoList({ editVideo }) {
  // const url = "https://api.mockaroo.com/api/0790aad0?count=1000&key=cc6e65b0";

  const videos = useVideos();
  // async function handleClick(){
  //   const res = await axios.get(url);
  //   console.log('Get Videos', res)
  // }

  const play = useCallback(() => console.log("Playing"), []);
  const pause = useCallback(() => console.log("Pause"), []);
  const memoButton = useMemo(() => (
    <PlayButton onPlay={play} onPause={pause}>
      Play
    </PlayButton>
  ),[pause,play]);

  return (
    <>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
          // deleteVideo={deleteVideo}
          editVideo={editVideo}
          // dispatch={dispatch}
        >
          {memoButton}
        </Video>
      ))}

      <div style={{ clear: "both" }}>
        <Counter></Counter>

        {/* <PlayButton message="hii" onSmash={()=>alert("play...")}>Pause</PlayButton>
            <PlayButton message="hey" onSmash={()=>console.log("Playyy")}>Play</PlayButton> */}
      </div>

      <Border>
        {/* <Video verified={false} title="React JS Tutorial" 
            views="100K" 
            time="1 year ago" 
            channel="Coder Dost"
            ></Video> */}
      </Border>

      {/* <Video {...obj}></Video> */}

      {/* <button onClick={handleClick}>Get Videos</button> */}
    </>
  );
}

export default VideoList;
