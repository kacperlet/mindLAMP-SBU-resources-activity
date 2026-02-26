
import { useNavigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import resources from './resources';

function ResourcePage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const resource = resources[id];

    return <>
        <div id="resource-header">
            <img alt="" src="../icons/left-arrow.svg" style={{height: 42, cursor: 'pointer'}} onClick={() => navigate('/')}></img>
            <span>{resource.display}</span>
            <img alt="" src="../icons/dots.svg" style={{height: 24}}></img>
        </div>
        <div id="resource-list">
            <h1 className="resource-text" style={{color: resource.color, fontSize: 16}}>{resource.title}</h1>
            <div className="resource-text resource-text-box">
                <ReactMarkdown
                  components={{
                    strong: ({node, ...props}) => <strong {...props} />,
                    em: ({node, ...props}) => <span style={{ textDecoration: 'underline' }} {...props} />,
                    ul: ({node, ...props}) => <ul style={{paddingLeft: 24, listStyleType: 'disc'}} {...props} />,
                    li: ({node, ...props}) => <li style={{marginBottom: 4}} {...props} />,
                  }}
                >
                  {resource.description}
                </ReactMarkdown>
            </div>
            <a id="learn-more-box" href={resource.learnMore} target="_blank" rel="noopener noreferrer">
                <span style={{textDecoration: 'none'}}>Learn More Here</span>
                <img alt="" className="right-arrow" src="icons/arrow.svg" />
            </a>
        </div>
    </>;
}

export default ResourcePage;