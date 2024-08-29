import video1 from "./video.mp4";
import { forwardRef, useImperativeHandle, useRef } from "react";
function Video(props, ref) {
    const videoRef = useRef();
    useImperativeHandle(ref, () => ({
        play() {
          videoRef.current.play();
        },
        pause() {
          videoRef.current.pause();
        },
    }))
  return <video width="200" height="240" ref={videoRef} src={video1}></video>;
}

export default forwardRef(Video);
