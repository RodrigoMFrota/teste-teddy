import { closeDialogById } from '@/utils';
import type * as T from './types';
import { useMutation } from '@tanstack/react-query';
import { deleteExternalCompanies } from '@/services';

export const DeleteExternalCompanies = ({ id, companyName, refetch }: T.Props) => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['delete-external-companies'],
    mutationFn: () => deleteExternalCompanies(id),
    onSuccess: () => {
      refetch();
      closeDialogById(`delete-external-company-${id}`);
    },
  });

  return (
    <dialog id={`delete-external-company-${id}`} className='modal'>
      <div className='modal-box'>
        <h3 className='font-bold text-lg'>Deletar empresa externa</h3>

        <p className='py-4'>
          Você deseja deletar a empresa <span className='font-semibold'>{companyName}</span>?
        </p>

        <div className='modal-action'>
          <button
            disabled={isPending}
            type='button'
            className='btn'
            onClick={() => closeDialogById(`delete-external-company-${id}`)}
          >
            Cancelar
          </button>

          <button
            type='button'
            disabled={isPending}
            className='btn btn-error text-white'
            onClick={() => mutate()}
          >
            {isPending && <span className='loading loading-spinner' />}
            Deletar
          </button>
        </div>

        <button
          disabled={isPending}
          type='button'
          className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
          onClick={() => closeDialogById(`delete-external-company-${id}`)}
        >
          ✕
        </button>
      </div>
    </dialog>
  );
};
