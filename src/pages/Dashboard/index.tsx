import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/52188377?s=460&u=c83510ffcb9007ea4064880c78654da51d12a744&v=4"
            alt="Gustavo Vieira Martins"
          />
          <div>
            <strong>gustavo-gvm/CurriculoWeb</strong>
            <p>
              [ReactJs] Meu currículo web onde descrevo melhor meus trabalhos e
              projetos pessoais e agrupo informações sobre mim.
            </p>
          </div>
          <FiChevronRight size={35} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/52188377?s=460&u=c83510ffcb9007ea4064880c78654da51d12a744&v=4"
            alt="Gustavo Vieira Martins"
          />
          <div>
            <strong>gustavo-gvm/CurriculoWeb</strong>
            <p>
              [ReactJs] Meu currículo web onde descrevo melhor meus trabalhos e
              projetos pessoais e agrupo informações sobre mim.
            </p>
          </div>
          <FiChevronRight size={35} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/52188377?s=460&u=c83510ffcb9007ea4064880c78654da51d12a744&v=4"
            alt="Gustavo Vieira Martins"
          />
          <div>
            <strong>gustavo-gvm/CurriculoWeb</strong>
            <p>
              [ReactJs] Meu currículo web onde descrevo melhor meus trabalhos e
              projetos pessoais e agrupo informações sobre mim.
            </p>
          </div>
          <FiChevronRight size={35} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
