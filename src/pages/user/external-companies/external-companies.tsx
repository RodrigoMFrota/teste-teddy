import { getExternalCompanies } from '@/services';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import {
  CreateExternalCompanies,
  DeleteExternalCompanies,
  EditExternalCompanies,
} from './components';
import { Fragment, useState, useEffect } from 'react';
import { openDialogById } from '@/utils';
import { useNavigate, useLocation } from 'react-router-dom';

export const ExternalCompanies = () => {
  const itemsPerPage = 12;
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const pageParam = Number.parseInt(queryParams.get('page') ?? '1') || 1;
  const [currentPage, setCurrentPage] = useState(pageParam);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['get-external-companies'],
    queryFn: getExternalCompanies,
  });

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    navigate(`?page=${newPage}`);
  };

  const shareCurrentPage = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copiado com sucesso.');
  };

  const paginatedData = data
    ? data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : [];

  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;

  useEffect(() => {
    setCurrentPage(pageParam);
  }, [pageParam]);

  return (
    <main className='min-h-[calc(100vh-5rem)] bg-zinc-900'>
      <div className='container mx-auto'>
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
              <button
                type='button'
                onClick={() => openDialogById('create-external-companies')}
                className='btn btn-success text-white'
              >
                Adicionar empresa
              </button>
            </div>
          </div>

          <div className='grid grid-cols-4 gap-6'>
            {!isLoading &&
              paginatedData &&
              paginatedData.length >= 0 &&
              paginatedData.map((comp) => (
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
                      <button
                        type='button'
                        className='btn w-[48%]'
                        onClick={() => openDialogById(`edit-external-companies-${comp.id}`)}
                      >
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

                  <EditExternalCompanies
                    id={comp.id}
                    companyName={comp.companyName}
                    isActive={comp.isActive}
                    collaboratorsCount={comp.collaboratorsCount}
                    refetch={refetch}
                  />

                  <DeleteExternalCompanies
                    id={comp.id}
                    companyName={comp.companyName}
                    refetch={refetch}
                  />
                </Fragment>
              ))}
          </div>

          <div className='flex justify-between items-center gap-4 py-6'>
            <button
              type='button'
              className='btn btn-primary text-white'
              onClick={() => shareCurrentPage()}
            >
              Compartilhar
            </button>

            <div className='flex justify-center items-center gap-4'>
              <button
                type='button'
                className='btn btn-primary text-white'
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Anterior
              </button>

              <span className='text-white'>
                Página {currentPage} de {totalPages}
              </span>

              <button
                type='button'
                className='btn btn-primary text-white'
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Próxima
              </button>
            </div>
          </div>
        </div>
      </div>

      <CreateExternalCompanies refetch={refetch} />
    </main>
  );
};
