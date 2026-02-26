import ResourceList from "./ResourceList"

function Home() {
    return <>
        <div id="resource-header">
            <img alt="" src="icons/mindlamp.svg"></img>
            <span>Resources</span>
            <img alt="" src="icons/dots.svg" style={{height: 24}}></img>
        </div>
        <ResourceList/>
    </>
}

export default Home