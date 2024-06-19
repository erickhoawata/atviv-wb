import 'materialize-css/dist/css/materialize.min.css';
import "../produtos/cadastroProduto.css";
import { useEffect, useState } from 'react';
import M from 'materialize-css';
import { Link, useParams } from 'react-router-dom';


export default function ListaProduto(props){
    let estilo = `collection-item active  purple accent-2 ${props.tema}`

    useEffect(() => { 
        M.AutoInit()
    }, [])

        return (
            <div className="containerProd">
                <h2>Listagem dos Produtos</h2>
                <div className="collection home">
                    <Link to = {'/Produto'} className="collection-item">Shampu Anticaspa</Link>
                    <Link to = {'/Produto'} className="collection-item">Condicionador</Link>
                    <Link to = {'/Produto'} className="collection-item">Creme Pós Barba</Link>
                    <Link to = {'/Produto'} className="collection-item">Espuma para Barbear</Link>
                </div>
            </div>
        )
}
