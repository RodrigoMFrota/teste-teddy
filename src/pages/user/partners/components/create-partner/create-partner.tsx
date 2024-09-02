import { closeDialogById } from '@/utils';
import type * as T from './types';
import { useMutation } from '@tanstack/react-query';
import { postPartners } from '@/services';
import { useForm } from 'react-hook-form';

export const CreatePartner = ({ refetch }: T.Props) => {
  const { register, handleSubmit, reset } = useForm<T.FormValues>({
    defaultValues: {
      name: '',
      createdAt: '',
      description: '',
      urlDoc: '',
      repositoryGit: '',
    },
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ['create-partner'],
    mutationFn: postPartners,
    onSuccess: () => {
      refetch();
      reset();
      closeDialogById('create-partner');
    },
  });

  const onSubmit = (data: T.FormValues) => {
    if (!data.name || !data.description) {
      alert('Dados inválidos.');
      return;
    }

    mutate({
      name: data.name,
      description: data.description,
      createdAt: '',
      urlDoc: data.urlDoc,
      repositoryGit: data.repositoryGit,
      project: [],
      clients: [],
    });
  };

  return (
    <dialog id='create-partner' className='modal'>
      <div className='modal-box'>
        <h3 className='font-bold text-lg pb-4'>Criar novo parceiro</h3>
        <form
          id='form-create-partner'
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
            placeholder='Url do documento:'
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
            onClick={() => closeDialogById('create-partner')}
          >
            Cancelar
          </button>

          <button
            form='form-create-partner'
            type='submit'
            disabled={isPending}
            className='btn btn-success text-white'
          >
            {isPending && <span className='loading loading-spinner' />}
            Criar
          </button>
        </div>

        <button
          disabled={isPending}
          type='button'
          className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
          onClick={() => closeDialogById('create-partner')}
        >
          ✕
        </button>
      </div>
    </dialog>
  );
};
