import ResourceList from "./ResourceList"
import {ReactComponent as IconMindlamp} from "../icons/mindlamp.svg";
import {ReactComponent as IconDots} from "../icons/dots.svg";
import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate()
    return <>
        <div id="resource-header">
            <IconMindlamp />
            <span>Resources</span>
            <IconDots  style={{height: 24}} />
        </div>
        <ResourceList/>
        <div onClick={() => {navigate('/feedback')}}  id="suggestions-box">
            <span>Something Else? Make A Suggestion!</span>
            <img alt="" className="right-arrow" src="icons/arrow.svg" />
        </div>
    </>
}

export default Home