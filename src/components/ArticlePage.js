import { useParams } from 'react-router-dom';

function Article() {
    const { articleName } = useParams();
    return <h1>{articleName} Page</h1>;
}

export default Article