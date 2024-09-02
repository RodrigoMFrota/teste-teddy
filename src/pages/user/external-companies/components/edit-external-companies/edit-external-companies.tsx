import { closeDialogById } from '@/utils';
import type * as T from './types';
import { useMutation } from '@tanstack/react-query';
import { putExternalCompanies } from '@/services';
import { useForm } from 'react-hook-form';

export const EditExternalCompanies = ({
  refetch,
  id,
  companyName,
  isActive,
  collaboratorsCount,
}: T.Props) => {
  const { register, handleSubmit, reset } = useForm<T.FormValues>({
    defaultValues: {
      companyName,
      collaboratorsCount: String(collaboratorsCount),
      isActive,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ['edit-external-companies'],
    mutationFn: putExternalCompanies,
    onSuccess: () => {
      refetch();
      reset();
      closeDialogById(`edit-external-companies-${id}`);
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
      id,
    });
  };

  return (
    <dialog id={`edit-external-companies-${id}`} className='modal'>
      <div className='modal-box'>
        <h3 className='font-bold text-lg pb-4'>Editar empresa</h3>
        <form
          id={`form-edit-external-companies-${id}`}
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
            onClick={() => closeDialogById(`edit-external-companies-${id}`)}
          >
            Cancelar
          </button>

          <button
            form={`form-edit-external-companies-${id}`}
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
          onClick={() => closeDialogById(`edit-external-companies-${id}`)}
        >
          ✕
        </button>
      </div>
    </dialog>
  );
};
