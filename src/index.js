import ReactDOM from "react-dom";
import Topo from "./Components/Topo";
import Baixo from "./Components/Baixo";
import Escolha from "./Components/Escolha";

function App(){
    return (
        <div>
            <Topo />
            <Baixo />
            <Escolha />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));