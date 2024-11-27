import { FC } from 'react'

interface DeleteConfirmationProps {
    onConfirm: () => void
    onCancel: () => void
}

const DeleteConfirmation: FC<DeleteConfirmationProps> = ({ onConfirm, onCancel }) => {
    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50'>
            <div className='w-full rounded-lg bg-white p-6 shadow-lg'>
                <h4 className='mb-4 text-lg font-bold'>Confirm Delete</h4>
                <p className='mb-4'>Are you sure you want to delete this item? This action is irreversible.</p>
                <div className='flex justify-end space-x-4'>
                    <button className='rounded bg-gray-300 px-4 py-2 hover:bg-gray-400' onClick={onCancel}>
                        Cancel
                    </button>
                    <button className='rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600' onClick={onConfirm}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteConfirmation
