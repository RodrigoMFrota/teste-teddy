import { closeDialogById } from '@/utils';
import type * as T from './types';
import { useMutation } from '@tanstack/react-query';
import { postExternalCompanies } from '@/services';
import { useForm } from 'react-hook-form';

export const CreateExternalCompanies = ({ refetch }: T.Props) => {
  const { register, handleSubmit, reset } = useForm<T.FormValues>({
    defaultValues: {
      companyName: '',
      collaboratorsCount: '',
      isActive: false,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ['create-external-companies'],
    mutationFn: postExternalCompanies,
    onSuccess: () => {
      refetch();
      reset();
      closeDialogById('create-external-companies');
    },
  });

  const onSubmit = (data: T.FormValues) => {
    if (!data.companyName || !data.collaboratorsCount) {
      alert('Dados inválidos.');
      return;
    }

    mutate({
      collaboratorsCount: Number(data.collaboratorsCount),
      companyName: data.companyName,
      isActive: data.isActive,
    });
  };

  return (
    <dialog id='create-external-companies' className='modal'>
      <div className='modal-box'>
        <h3 className='font-bold text-lg pb-4'>Criar nova empresa</h3>
        <form
          id='form-create-external-companies'
          className='h-full flex flex-col justify-between gap-6'
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type='text'
            placeholder='Nome da empresa:'
            className='input input-bordered w-full'
            {...register('companyName')}
          />

          <input
            type='number'
            placeholder='Qtd. de colaboradores:'
            className='input input-bordered w-full'
            {...register('collaboratorsCount')}
          />

          <div className='flex items-center gap-2'>
            <label className='cursor-pointer label'>
              <span className='label-text'>Está ativo?</span>
            </label>

            <input type='checkbox' className='checkbox' {...register('isActive')} />
          </div>
        </form>

        <div className='modal-action'>
          <button
            disabled={isPending}
            type='button'
            className='btn'
            onClick={() => closeDialogById('create-external-companies')}
          >
            Cancelar
          </button>

          <button
            form='form-create-external-companies'
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
          onClick={() => closeDialogById('create-external-companies')}
        >
          ✕
        </button>
      </div>
    </dialog>
  );
};
