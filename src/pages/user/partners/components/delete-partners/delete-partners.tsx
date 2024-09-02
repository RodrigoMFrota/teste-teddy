import { closeDialogById } from '@/utils';
import type * as T from './types';
import { useMutation } from '@tanstack/react-query';
import { deletePartners } from '@/services';

export const DeletePartners = ({ id, name, refetch }: T.Props) => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['delete-partners'],
    mutationFn: () => deletePartners(id),
    onSuccess: () => {
      refetch();
      closeDialogById(`delete-partners-${id}`);
    },
  });

  return (
    <dialog id={`delete-partners-${id}`} className='modal'>
      <div className='modal-box'>
        <h3 className='font-bold text-lg'>Deletar parceiro</h3>

        <p className='py-4'>
          Você deseja deletar o parceiro <span className='font-semibold'>{name}</span>?
        </p>

        <div className='modal-action'>
          <button
            disabled={isPending}
            type='button'
            className='btn'
            onClick={() => closeDialogById(`delete-partners-${id}`)}
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
          onClick={() => closeDialogById(`delete-partners-${id}`)}
        >
          ✕
        </button>
      </div>
    </dialog>
  );
};
