import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';


function CadastroCategoria() {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    };

    const [categorias, setCategorias] = useState(['Teste']);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value
        })
    }

    function handleChange(infoEvento) {
        setValue(
            infoEvento.target.getAttribute('name'),
            infoEvento.target.value
        );
    }

    return(
        <PageDefault>
            <h1>
                Cadastro da categoria:
            </h1>
            <form onSubmit = {function handleSubmit(infoEvento) {
                infoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais);
            }}>
                <FormField
                    label="Nome"
                    type="text"
                    value={values.nome}
                    name="nome"
                    onChange={handleChange}
                />
                {
                    /* 
                    <div>
                        <label>
                            Nome:
                            <input
                                type="text"
                                value={values.nome}
                                name="nome"
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    */
                }
                <FormField 
                    label="Descrição"
                    //desafio
                    type="????"
                    value={values.descricao}
                    name="descricao"
                    onChange={handleChange}
                />
                {/*
                <div>
                    <label>
                        Descrição:
                        <input
                            type="text"
                            value={values.descricao}
                            name="descricao"
                            onChange={handleChange}
                        />
                    </label>
                </div>
                */}
                
                <FormField
                    label="Cor"
                    type="color"
                    value={values.cor}
                    name="cor"
                    onChange={handleChange}
                />
                {/*
                <div>
                    <label>
                        Cor:
                        <input
                            type="color"
                            value={values.cor}
                            name="cor"
                            onChange={handleChange}
                        />
                    </label>
                </div>
                */}
                
                <button>
                    Cadastrar
                </button>
                
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return(
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>


            <Link to="/cadastro/video">
                Cadastro de Videos
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;