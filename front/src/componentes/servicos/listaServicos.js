import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import '../servicos/cadastroServicos.css'
import { useEffect } from 'react';
import M from 'materialize-css'
import { Link } from "react-router-dom";


export default function ListaServicos(props){
    let estilo = `collection-item active purple accent-2 ${props.tema}`

    useEffect(() => { 
        M.AutoInit()
    }, [])

        return (
            <div className="containerServ">
                <h2>Listagem dos Serviços</h2>
                <div className="collection home">
                    <Link to = {'/Servico'} className="collection-item">Corte de Cabelo Masculino</Link>
                    <Link to = {'/Servico'} className="collection-item">Corte de Cabelo Feminino</Link>
                    <Link to = {'/Servico'} className="collection-item">Progressiva</Link>
                    <Link to = {'/Servico'} className="collection-item">Barba Completa</Link>
                </div>
            </div>
        )
}