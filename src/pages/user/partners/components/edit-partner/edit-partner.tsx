import { closeDialogById } from '@/utils';
import type * as T from './types';
import { useMutation } from '@tanstack/react-query';
import { putPartners } from '@/services';
import { useForm } from 'react-hook-form';

export const EditPartner = ({ refetch, id, description, name, repositoryGit, urlDoc }: T.Props) => {
  const { register, handleSubmit, reset } = useForm<T.FormValues>({
    defaultValues: {
      description,
      name,
      repositoryGit,
      urlDoc,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ['edit-partner'],
    mutationFn: putPartners,
    onSuccess: () => {
      refetch();
      reset();
      closeDialogById(`edit-partner-${id}`);
    },
  });

  const onSubmit = (data: T.FormValues) => {
    if (!data.name || !data.description || !data.repositoryGit || !data.urlDoc) {
      alert('Dados inválidos.');
      return;
    }

    mutate({
      name: data.name,
      description: data.description,
      id,
      createdAt: '',
      urlDoc: data.urlDoc,
      repositoryGit: data.repositoryGit,
    });
  };

  return (
    <dialog id={`edit-partner-${id}`} className='modal'>
      <div className='modal-box'>
        <h3 className='font-bold text-lg pb-4'>Editar empresa</h3>
        <form
          id={`form-edit-partner-${id}`}
          className='h-full flex flex-col justify-between gap-6'
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type='text'
            placeholder='Nome do parceiro:'
            className='input input-bordered w-full'
            {...register('name')}
          />

          <input
            type='text'
            placeholder='Descrição do parceiro:'
            className='input input-bordered w-full'
            {...register('description')}
          />

          <input
            type='text'
            placeholder='URL do documento:'
            className='input input-bordered w-full'
            {...register('urlDoc')}
          />

          <input
            type='text'
            placeholder='Repositório git:'
            className='input input-bordered w-full'
            {...register('repositoryGit')}
          />
        </form>

        <div className='modal-action'>
          <button
            disabled={isPending}
            type='button'
            className='btn'
            onClick={() => closeDialogById(`edit-partner-${id}`)}
          >
            Cancelar
          </button>

          <button
            form={`form-edit-partner-${id}`}
            type='submit'
            disabled={isPending}
            className='btn btn-success text-white'
          >
            {isPending && <span className='loading loading-spinner' />}
            Editar
          </button>
        </div>

        <button
          disabled={isPending}
          type='button'
          className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
          onClick={() => closeDialogById(`edit-partner-${id}`)}
        >
          ✕
        </button>
      </div>
    </dialog>
  );
};
