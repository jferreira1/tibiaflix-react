/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#FFFF00',
  };

  const [categorias, setCategorias] = useState(['Teste']);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(infoEvento) {
    setValue(
      infoEvento.target.getAttribute('name'),
      infoEvento.target.value,
    );
  }

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro da categoria:
      </h1>
      <form onSubmit={function handleSubmit(infoEvento) {
        infoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >
        <FormField
          label="Nome"
          type="text"
          value={values.nome}
          name="nome"
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
                    // desafio
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>

      </form>

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/cadastro/video">
        Cadastro de Videos
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
