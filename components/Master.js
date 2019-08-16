import Navegacion from '../components/Navegacion';

const MasterPage = (props) => (
    <div>
        <head>
            <title>Bitcoin App</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="stylesheet" href="https://bootswatch.com/4/yeti/bootstrap.min.css" />
        </head>

        <Navegacion />
        
        <div className="container mt-4">
            {props.children}
        </div>
    </div>
);

export default MasterPage;