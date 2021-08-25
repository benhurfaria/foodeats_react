import BebidaEscolha from "./Especificos/BebidaEscolha";
let objetosBebida = [
    {
        image: "imagens/cocacola.jpeg",
        nomebebida: "Coca gelada",
        descricao: "Coca 350ml",
        valor: "4,99"
    },
    {
        image: "imagens/cocacola.jpeg",
        nomebebida: "Coca ks",
        descricao: "Coca 350ml",
        valor: "4,94"
    },
    {
        image: "imagens/cocacola.jpeg",
        nomebebida: "Coca cuela",
        descricao: "Coca 350ml",
        valor: "5,00"
    },
    {
        image: "imagens/cocacola.jpeg",
        nomebebida: "Coca zero",
        descricao: "Coca 350ml",
        valor: "3,00"
    },
    {
        image: "imagens/cocacola.jpeg",
        nomebebida: "Coca gelada",
        descricao: "Coca 350ml",
        valor: "5,00"
    },
    {
        image: "imagens/cocacola.jpeg",
        nomebebida: "Coca gelada",
        descricao: "Coca 350ml",
        valor: "3,84"
    },
    {
        image: "imagens/cocacola.jpeg",
        nomebebida: "Coca gelada",
        descricao: "Coca 350ml",
        valor: "5,15"
    },
    {
        image: "imagens/cocacola.jpeg",
        nomebebida: "Coca gelada",
        descricao: "Coca 350ml",
        valor: "2,39"
    },
    {
        image: "imagens/cocacola.jpeg",
        nomebebida: "Coca gelada",
        descricao: "Coca 350ml",
        valor: "9,90"
    },
    {
        image: "imagens/cocacola.jpeg",
        nomebebida: "Coca gelada",
        descricao: "Coca 350ml",
        valor: "4,71"
    },
    {
        image: "imagens/cocacola.jpeg",
        nomebebida: "Coca gelada",
        descricao: "Coca 350ml",
        valor: "3,75"
    },

];
export default function Bebida(){
    return (
        <div class="bebida comum">
            {
                objetosBebida.map((objeto) => <BebidaEscolha image = {objeto.image} nomebebida = {objeto.nomecomida} descricao = {objeto.descricao} valor = {objeto.valor}/>)
            }

        </div>
    );
}