import { getPartners } from '@/services';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { Fragment } from 'react/jsx-runtime';
import { openDialogById } from '@/utils';
import { DeletePartners } from './components';
import { useNavigate } from 'react-router-dom';

export const Partners = () => {
  const navigate = useNavigate();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['get-partners'],
    queryFn: getPartners,
  });

  return (
    <main className='min-h-[calc(100vh-5rem)] bg-zinc-900'>
      <div className='container mx-auto py-6 flex flex-col gap-6'>
        <div className='flex justify-between gap-6 items-center'>
          <div className='w-1/3'>
            <button
              type='button'
              className='btn btn-outline btn-primary text-white'
              onClick={() => navigate('/user/dashboard')}
            >
              Voltar
            </button>
          </div>

          <h1 className='text-white text-center font-semibold text-2xl w-1/3'>Parceiros</h1>

          <div className='w-1/3 flex justify-end'>
            <button type='button' className='btn btn-primary text-white'>
              Adicionar parceiro
            </button>
          </div>
        </div>

        <div className='grid grid-cols-4 gap-6'>
          {!isLoading &&
            data &&
            data.length >= 0 &&
            data.map((part) => (
              <Fragment key={part.id}>
                <div className='flex flex-col w-full bg-white justify-between p-4 rounded-lg'>
                  <p className='truncate'>
                    <span className='font-semibold'>Nome do parceiro:</span> {part.name}
                  </p>

                  <p className='truncate'>
                    <span className='font-semibold'>Descrição:</span> {part.description}
                  </p>

                  <p className='truncate'>
                    <span className='font-semibold'>URL do documento:</span> {part.urlDoc}
                  </p>

                  <p className='truncate'>
                    <span className='font-semibold'>Repositório git:</span> {part.repositoryGit}
                  </p>

                  <p className='truncate'>
                    <span className='font-semibold'>Criado em:</span>{' '}
                    {format(part.createdAt, 'dd/MM/yyyy')}
                  </p>

                  <div className='flex w-full gap-4 mt-2'>
                    <button type='button' className='btn w-[48%]'>
                      Editar
                    </button>

                    <button
                      type='button'
                      className='btn btn-error text-white w-[48%]'
                      onClick={() => openDialogById(`delete-partners-${part.id}`)}
                    >
                      Deletar
                    </button>
                  </div>
                </div>

                <DeletePartners id={part.id} name={part.name} refetch={refetch} />
              </Fragment>
            ))}
        </div>
      </div>
    </main>
  );
};
