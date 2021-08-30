import React from 'react';
import Comida from "./Comida";
import Bebida from "./Bebida";
import Sobremesa from "./Sobremesa";

export default function Escolha(props){
    const{
        setCategoriaSobremesa,
        categoriaSobremesa,
        categoriaComida,
        setCategoriaComida,
        categoriaBebida,
        setCategoriaBebida,
        verificaQuantidade,
        normalizaLeiaute
    } = props 

    return (
        <div class="escolha-o-lanche">
            <p>Primeiro, seu prato</p>
            <Comida normalizaLeiaute={normalizaLeiaute} categoriaComida={categoriaComida} setCategoriaComida={setCategoriaComida} verificaQuantidade={verificaQuantidade}/>

            <p>Agora, sua bebida</p>
            <Bebida normalizaLeiaute={normalizaLeiaute} categoriaBebida={categoriaBebida} setCategoriaBebida={setCategoriaBebida} verificaQuantidade={verificaQuantidade}/>

            <p>Por fim, sua sobremesa</p>
            <Sobremesa normalizaLeiaute={normalizaLeiaute} setCategoriaSobremesa={setCategoriaSobremesa} categoriaSobremesa={categoriaSobremesa} verificaQuantidade={verificaQuantidade}/>
    </div>
    );
}