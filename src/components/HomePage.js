import ResourceList from "./ResourceList"
import {ReactComponent as IconMindlamp} from "../icons/mindlamp.svg";
import {ReactComponent as IconDots} from "../icons/dots.svg";


function Home() {
    return <>
        <div id="resource-header">
            <IconMindlamp />
            <span>Resources</span>
            <IconDots  style={{height: 24}} />
        </div>
        <ResourceList/>
    </>
}

export default Home