import { getExternalCompanies } from '@/services';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { DeleteExternalCompanies } from './components';
import { Fragment } from 'react/jsx-runtime';
import { openDialogById } from '@/utils';
import { useNavigate } from 'react-router-dom';

export const ExternalCompanies = () => {
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['get-external-companies'],
    queryFn: getExternalCompanies,
  });

  return (
    <main className='min-h-[calc(100vh-5rem)] bg-zinc-900'>
      <div className='container mx-auto py-6'>
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

            <h1 className='text-white text-center font-semibold text-2xl w-1/3'>
              Empresas externas
            </h1>

            <div className='w-1/3 flex justify-end'>
              <button type='button' className='btn btn-primary text-white'>
                Adicionar empresa
              </button>
            </div>
          </div>

          <div className='grid grid-cols-4 gap-6'>
            {!isLoading &&
              data &&
              data.length >= 0 &&
              data.map((comp) => (
                <Fragment key={comp.id}>
                  <div className='flex flex-col w-full bg-white justify-between p-4 rounded-lg'>
                    <p className='truncate'>
                      <span className='font-semibold'>Nome da empresa:</span> {comp.companyName}
                    </p>

                    <p className='truncate'>
                      <span className='font-semibold'>Qtd. colaboradores:</span>{' '}
                      {comp.collaboratorsCount}
                    </p>

                    <p className='truncate'>
                      <span className='font-semibold'>Criado em:</span>{' '}
                      {format(comp.createdAt, 'dd/MM/yyyy')}
                    </p>

                    <p className='truncate'>
                      <span className='font-semibold'>Está ativo:</span>{' '}
                      <span className={comp.isActive ? 'text-green-600' : 'text-red-600'}>
                        {comp.isActive ? 'Sim' : 'Não'}
                      </span>
                    </p>

                    <div className='flex w-full gap-4 mt-2'>
                      <button type='button' className='btn w-[48%]'>
                        Editar
                      </button>

                      <button
                        type='button'
                        className='btn btn-error text-white w-[48%]'
                        onClick={() => openDialogById(`delete-external-company-${comp.id}`)}
                      >
                        Deletar
                      </button>
                    </div>
                  </div>

                  <DeleteExternalCompanies
                    id={comp.id}
                    companyName={comp.companyName}
                    refetch={refetch}
                  />
                </Fragment>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};
