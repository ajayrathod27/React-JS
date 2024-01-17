import { useContext, memo } from "react";
import ThemeContext from "../context/ThemeContext";
// import VideoDispatchContext from "../context/VideoDispatchContext";
import useVideoDispatch from "../hooks/VideoDispatch";

const Video = memo(function Video({title,id, channel="6 Pack Programmar", views, time, verified, children, editVideo}){
    // let verified = true;
    const theme = useContext(ThemeContext)
    const dispatch = useVideoDispatch();

    let channelJSX;
    if(verified) {
        channelJSX = <div className="channel">{channel} ✅</div> 
    }else{
        channelJSX = <div className="channel">{channel} </div> 
    }
    
    // render first time - mounting 
    // useEffect(() =>{
    //     const idx = setInterval(()=>{
    //         console.log('Video playing', id); 
    //     },3000)

    //     return ()=>{
    //         clearInterval(idx)
    //     }
    // },[id])

    return (
    <>
    <div className={`container ${theme}`}>
    <button className="close" onClick={()=>dispatch({type:'DELETE', payload:id})}>X</button>
    <button className="edit" onClick={()=>editVideo(id)}>Edit</button>
    <div className="pic">
    <img src={`http://picsum.photos/id/${id}/160/90`} alt="" />
    </div>
    <div className="title">{title}</div>
    {channelJSX}
    {/* <div className="channel">{channel} ✅</div> */}
    <div className="views">{views} views <span>.</span> {time}</div>

    <div>
        {children}
    </div>

    </div>
    </>
    );
});

export default Video;