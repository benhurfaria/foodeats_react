import ComidaEscolha from "./Especificos/ComidaEscolha";

let objetosComida = [
    {
        imagem: "imagens/bigtasty.jpeg",
        nomecomida: "Big Tasty",
        descricao: "Um pouco de cebola e hamburguer",
        valor: "19,80"
    },
    {
        imagem: "imagens/bigtasty.jpeg",
        nomecomida: "Big Mac",
        descricao: "Um pouco de cebola e hamburguer",
        valor: "10,80"
    },
    {
        imagem: "imagens/bigtasty.jpeg",
        nomecomida: "Big Cheddar",
        descricao: "Um pouco de cebola e hamburguer",
        valor: "9,80"
    },
    {
        imagem: "imagens/bigtasty.jpeg",
        nomecomida: "Big bigão",
        descricao: "Um pouco de cebola e hamburguer",
        valor: "15,30"
    },
    {
        imagem: "imagens/bigtasty.jpeg",
        nomecomida: "Big podrão",
        descricao: "Um pouco de cebola e hamburguer",
        valor: "13,99"
    },
    {
        imagem: "imagens/bigtasty.jpeg",
        nomecomida: "Big infarto",
        descricao: "Um pouco de cebola e hamburguer",
        valor: "15,10"
    },
    {
        imagem: "imagens/bigtasty.jpeg",
        nomecomida: "Big morte",
        descricao: "Um pouco de cebola e hamburguer",
        valor: "4,80"
    },
    {
        imagem: "imagens/bigtasty.jpeg",
        nomecomida: "Big Opa",
        descricao: "Um pouco de cebola e hamburguer",
        valor: "9,00"
    },
    {
        imagem: "imagens/bigtasty.jpeg",
        nomecomida: "Big MC",
        descricao: "Um pouco de cebola e hamburguer",
        valor: "11,70"
    }
];

export default function Comida(props){
    const{
        categoriaComida,
        setCategoriaComida,
        verificaQuantidade,
        normalizaLeiaute
    } = props
    return (
        <div class="comida comum">
            {
                objetosComida.map((objeto) => <ComidaEscolha normalizaLeiaute={normalizaLeiaute} imagem = {objeto.imagem} nomecomida = {objeto.nomecomida} descricao = {objeto.descricao} valor = {objeto.valor} categoria={categoriaComida} setCategoria={setCategoriaComida} verificaQuantidade={verificaQuantidade}/>)
            }
        </div>
    );
}