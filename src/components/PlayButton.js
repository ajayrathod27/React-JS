import { useContext, useState, memo } from 'react';
import './PlayButton.css';
import ThemeContext from '../context/ThemeContext';

const PlayButton = memo(function PlayButton({message, children, onSmash, onPlay, onPause}){
    const [playing, setPlaying] = useState(false);
    const theme = useContext(ThemeContext)

    function handleClick(){
        // onSmash();

        if(playing) onPause()
        else onPlay();

        setPlaying(!playing);
    }

    return(
        <button className={theme} onClick={handleClick}>{children} : {playing?'⏸️':'⏯️'}</button>
    )

    // return(
    //     <button onClick={()=>console.log('play')}>Play</button>
    // )
});

export default PlayButton;

