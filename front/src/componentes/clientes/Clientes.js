import 'materialize-css/dist/css/materialize.min.css'
import '../clientes/cadastroCliente.css'
import M from 'materialize-css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Cliente(){
    useEffect(() => { 
        M.AutoInit()
    }, [])

    return(
        <div className='containerlistagem'>
        <h2 className='title'> Atualização de Dados </h2>
            <div className="row center">
                <div className="col s12">
                    <ul className="tabs-swipe-demo tabs tabsConsumo">
                        <li className="tab col s2"><a href="#test-swipe-1">Dados Pessoais</a></li>
                        <li className="tab col s2"><a href="#test-swipe-2">Produtos</a></li>
                        <li className="tab col s2"><a href="#test-swipe-3">Serviços</a></li>                   
                    </ul>
                </div>
                <div id="test-swipe-1" className="col s12"> 
                <div className="row home">
                                <div className="input-field col s12">
                                    <input disabled id="Nome" type="text"  className="validate"/>
                                    <label className="active" htmlFor="Nome">Nome</label>
                                </div>

                                <div className="input-field col s12 ">
                                    <input disabled id="Nome_Social" type="text"  className="validate"/>
                                    <label className="active" htmlFor="Nome_Social">Nome Social</label>
                                </div>

                                <div className="input-field col s12">
                                    <input disabled id="Gênero" type="text"  className="validate"/>
                                    <label className="active" htmlFor="Gênero">Gênero</label>
                                </div>

                                <div className="input-field col s12">
                                    <input disabled id="CPF" type="text" className="validate"/>
                                    <label className="active" htmlFor="CPF">CPF</label>
                                </div>

                                <div className="input-field col s12">
                                    <input disabled id="RG" type="text" className="validate"/>
                                    <label className="active" htmlFor="RG">RG</label>
                                </div>

                                <div className="input-field col s12">
                                    <input disabled id="Telefone" type="text" className="validate"/>
                                    <label className="active" htmlFor="Telefone">Telefone</label>
                                </div>
                            </div>
                </div>


                <div id="test-swipe-2" className="col s12"> 
                    <table className='responsive-table centered home'>
                        <thead>
                        <tr>
                            <th>Id do Pedido</th>
                            <th>Id do Produto</th>
                            <th>Nome do Produto</th>
                            <th>Valor do Produto</th>
                        </tr>
                        </thead>
                        <tbody>                      
                        <tr>
                            
                        </tr>                          
                        
                        </tbody>
                    </table>

                </div>

                <div id="test-swipe-3" className="col s12"> 
                <table className='responsive-table centered home'>
                    <thead>
                    <tr>
                        <th>Id do Pedido</th>
                        <th>Id do Serviço</th>
                        <th>Nome do Serviço</th>
                        <th>Valor do Serviço</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                    <tr>
                        
                    </tr>                          
                    
                    </tbody>
                </table>

                </div>

                <div className="row">
                        <div className="col s12 center">
                            <Link to={`/AtualizaCliente`}>
                            <button className="btn waves-effect  purple accent-2 button botaoAtualiza" type="submit" name="action">Atualizar
                            </button>
                            </Link>
                            <button className="btn waves-effect  purple accent-2 button" type="submit" name="action">Remover Cliente
                            </button>
                        </div>
                    </div>     
            </div>
    </div>
    )
}