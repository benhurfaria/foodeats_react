import ReactDOM, { createPortal } from "react-dom";
import React from "react";
import Escolha from "./Components/Escolha";
let num = 0;
let numSobremesa = 0;
let numComida = 0;
let numBebida = 0;
let beber = false;
let comer = false;
let sobre = false;

function App(){

    const [categoriaSobremesa, setCategoriaSobremesa] = React.useState(0);
    const [categoriaComida, setCategoriaComida] = React.useState(0);
    const [categoriaBebida, setCategoriaBebida] = React.useState(0);
    const [concluir, setConcluir] = React.useState("");
    const [fechar, setFechar] = React.useState("Selecione os 3 itens para fechar o pedido");
    
    
    
    function verificaQuantidadeCategorias(category){
        if(category === "Sobremesa"){
            numSobremesa++;
            if(!sobre){
                sobre=true;
                num++;
            }
        }

        if(category === "Bebida" && !beber){
            numBebida++;
            if(!beber){
                num++;
                beber=true;
            }
        }

        if(category === "Comer" && !comer){
            numComida++;
            if(!comer){
                num++;
                comer =true;
            }
        }

        console.log(num);
        if(num === 3){
            setConcluir("concluir-compra");
            setFechar("Fechar pedido");
        }
        
        
    }

    function normalizaLeiaute(category){
        if(category==="Sobremesa") numSobremesa--;
        if(category === "Bebida") numBebida--;
        if(category === "Comer") numComida--;

        if(numBebida===0 || numComida===0 || numSobremesa ===0){
            num--;
            if(category === "Sobremesa") sobre = false;
            if(category === "Comer") comer = false;
            if(category === "Bebida") beber = false;

            setConcluir("");
            setFechar("Selecione os 3 itens para fechar o pedido");
        }
        
        
    }

    return (
        <div>
            <div class="topo">
                <h1>FoodCamp</h1>
                <h2>Sua comida em 6 minutos</h2>
            </div>

            <div class="baixo">
                <div class={`concluir-selecao ${concluir}`}>
                    <a><p class={``}>{fechar}</p></a>
                </div>
            </div>

            <Escolha setCategoriaSobremesa={setCategoriaSobremesa} categoriaSobremesa={categoriaSobremesa} categoriaComida={categoriaComida} setCategoriaComida={setCategoriaComida} categoriaBebida={categoriaBebida} setCategoriaBebida={setCategoriaBebida} verificaQuantidade={verificaQuantidadeCategorias} normalizaLeiaute={normalizaLeiaute}/>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));