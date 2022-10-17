import "./watch.scss"
import { ArrowBack } from "@material-ui/icons"

export default function Watch() {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBack/>
            Home

        </div>
        <video className="video" autoPlay progress controls src="/video/1.mp4"/>
       
    </div>
  )
}
