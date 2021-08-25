import Comida from "./Comida";
import Bebida from "./Bebida";
import Sobremesa from "./Sobremesa";

export default function Escolha(){
    return (
        <div class="escolha-o-lanche">
            <p>Primeiro, seu prato</p>
            <Comida />

            <p>Agora, sua bebida</p>
            <Bebida />

            <p>Por fim, sua sobremesa</p>
            <Sobremesa />
    </div>
    );
}