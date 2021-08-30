import SobremesaEscolha from "./Especificos/SobremesaEscolha";

let objetosSobremesa= [
    {
        image: "imagens/pudim.jpeg",
        nomesobremesa: "Pudim",
        descricao: "Delicioso",
        valor: "5,99"
    },
    {
        image: "imagens/pudim.jpeg",
        nomesobremesa: "Panetone",
        descricao: "Delicioso",
        valor: "5,93"
    },
    {
        image: "imagens/pudim.jpeg",
        nomesobremesa: "Passas",
        descricao: "Delicioso",
        valor: "5,70"
    },
    {
        image: "imagens/pudim.jpeg",
        nomesobremesa: "Bolo de pote",
        descricao: "Delicioso",
        valor: "7,70"
    },
    {
        image: "imagens/pudim.jpeg",
        nomesobremesa: "Toddynho",
        descricao: "Delicioso",
        valor: "4,40"
    },
    {
        image: "imagens/pudim.jpeg",
        nomesobremesa: "Brownie",
        descricao: "Delicioso",
        valor: "4,20"
    },
    {
        image: "imagens/pudim.jpeg",
        nomesobremesa: "Brigadeiro",
        descricao: "Delicioso",
        valor: "2,99"
    },
    {
        image: "imagens/pudim.jpeg",
        nomesobremesa: "Bolo",
        descricao: "Delicioso",
        valor: "1,50"
    },
];
export default function Sobremesa(props){
    const{
        setCategoriaSobremesa,
        categoriaSobremesa,
        verificaQuantidade,
        normalizaLeiaute
    } = props
    
    return (
        <div class="sobremesa comum">
            {
                objetosSobremesa.map((objeto, index) => <SobremesaEscolha normalizaLeiaute={normalizaLeiaute} image = {objeto.image} nomesobremesa = {objeto.nomesobremesa} descricao = {objeto.descricao} valor = {objeto.valor} setCategoria={setCategoriaSobremesa} categoria={categoriaSobremesa} verificaQuantidade={verificaQuantidade}/>)
            }
        </div>
    );
}