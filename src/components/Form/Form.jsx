import React from 'react';
import Titulo from '../Titulo';
import FormInput from './FormInput';

const Form = () => {
  const [email, setEmail] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setEmail('');
    alert(
      'Você entrou na lista de Espera! \n Te avisaremos por email quando a turma estiver aberta.',
    );
  }

  return (
    <div
      className="flex flex-col items-center justify-center  w-full h-[400px] gap-4 
    "
    >
      <Titulo content="Entre na Lista de Espera" className="text-center" />
      <p className="text-center max-w-[600px] text-white">
        Entre para lista de espera da Formação Dev FullStack da Italents e se torne um profissional
        perseguido pelas empresas.
      </p>
      <form
        className="flex  flex-col items-center justify-center w-full h-full  gap-8"
        onSubmit={handleSubmit}
      >
        <FormInput id="email" label="Email" setValue={setEmail} value={email} />

        <button type="submit" className="bg-teal-300 block p-2 w-[600px] rounded-sm">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Form;
