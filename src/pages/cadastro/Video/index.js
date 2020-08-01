import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoriasTitulos = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasDoServidor) => {
        setCategorias(categoriasDoServidor);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Vídeos
      </h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            console.log('Cadastrado com sucesso');
            history.push('/');
          });
        history.push('/');
      }}
      >
        <FormField
          label="Titulo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
          type="text"
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
          type="text"
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          type="text"
          suggestions={categoriasTitulos}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastro de Categorias
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
