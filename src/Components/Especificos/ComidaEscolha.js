export default function ComidaEscolha(props){
    return (
        <div class="escolhido-comida" onclick="selecionarItem(this)">
            <img src={props.imagem} class="fmtImagem" />
            <h1 class="fmtH1">{props.nomecomida}</h1>
            <h2 class="fmtH2">{props.descricao}</h2>
            <h3 class="fmtH3">R$ </h3>
            <h4 class="fmtH4">{props.valor}</h4>
            <ion-icon name="checkmark-circle-sharp" class="escondido"></ion-icon>
        </div>
    );
}
