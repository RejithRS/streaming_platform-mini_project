import {PlayArrow,Add,ThumbUpOutlined,ThumbDownOutlined} from "@material-ui/icons"
import { useState } from "react";
import "./listitem.scss"

export default function Listitem({index}) {
  const [isHovered,setIsHovered]=useState(false);
  const trailer= "/video/1.mp4";
  return (
    <div className='listitem' 
    style={{left: isHovered && index * 225 -50 + index * 2.5 }}
    onMouseEnter={()=>setIsHovered(true)} 
    onMouseLeave={()=>setIsHovered(false)}>
        <img src="/images/thallumala.jpg" alt="" />
        {isHovered && (
          <>
          <video src={trailer} autoPlay={true} loop/>

       
        
        <div className="itemInfo">
          <div className="Icons">
            <PlayArrow className="icon"/>
            <Add className="icon"/>
            <ThumbUpOutlined className="icon"/>
            <ThumbDownOutlined className="icon"/>

          </div>
          <div className="itemInfoTop">
            <span>1 hour 14mins</span>
            <span className="limit">+16</span>
            <span>1999</span>
          </div>
          <div className="desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto laboriosam reiciendis inventore commodi ex
          </div>
          <div className="genre">Action</div>
        </div>
        </>
         )}
        </div>
  );
}
