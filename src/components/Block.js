import React from "react";
import '../components/components.css';
import TPlist from "./lists";

const Block = () => {
    return (
        <div className="bloch">
            <div className="title-bloch">Meus projetos:</div>
            <div className="main-cointainer">
                <div className="main">
                    <h4>PARA COMEÇAR</h4>
                    <h4>FAZENDO</h4>
                    <h4>FINALIZADO</h4>
                </div>
                <TPlist />
            </div>
        </div>
    )
};

export default Block;