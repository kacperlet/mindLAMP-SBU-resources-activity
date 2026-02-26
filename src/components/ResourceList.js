import ResourceCard from "./ResourceCard"

function ResourceList() {

    const resources = [
        {color: "#4378DB", text: "Traffic Signals", icon_path: "icons/traffic.svg"},
        {color: "#F0A714", text: "Focus", icon_path: "icons/focus.svg"},
        {color: "#28A164", text: "Intersections", icon_path: "icons/intersections.svg"},
        {color: "#F35555", text: "Following Distance", icon_path: "icons/following_distance.svg"},
        {color: "#F38E55", text: "Parking", icon_path: "icons/parking.svg"},
        {color: "#4378DB", text: "Pre-Driving Checklist", icon_path: "icons/pre_driving.svg"},
    ]

    return <div id="resource-list">
        {
            resources.map(resource => (
                <ResourceCard
                    key={resource.text}
                    text={resource.text}
                    color={resource.color}
                    icon_path={resource.icon_path}
                />
            ))
        }
        <div id="suggestions-box">
            <span>Something Else? Make A Suggestion!</span>
            <img alt="" className="right-arrow" src="icons/arrow.svg" />
        </div>
    </div>
}

export default ResourceList