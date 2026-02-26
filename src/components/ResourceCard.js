function ResourceCard(props) {
    const { text, icon_path, color } = props

    console.log(text)
    return <div className='resource-card'>
            <div>
                <div className='resource-icon' style={{background: color}}>
                    <img alt="" src={icon_path}></img>
                </div>
                <span style={{color: color}}>{text}</span>
            </div>
            <img alt="" className="right-arrow" src="icons/arrow.svg" />
        </div>
}

export default ResourceCard