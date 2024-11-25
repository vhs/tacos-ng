import { FC, useState } from 'react'

interface TerminalFieldProps {
    onFieldSave: (id: string, text: string) => void
    field: string
    label: string
    uuid: string
    type: string
    id: string
}

const TerminalField: FC<TerminalFieldProps> = ({ onFieldSave, field, label, uuid, type, id }) => {
    const [isEdit, setIsEdit] = useState<boolean>(true)
    const [fieldVal, setFieldVal] = useState<string>(field)
    const [saving, setSaving] = useState<boolean>(false)

    const handleClick = async () => {
        if (isEdit) await onFieldSave(id, fieldVal)
        setIsEdit(!isEdit)
    }

    return (
        <div className='font-teko mt-4 flex w-full justify-between'>
            <label className='text-card-text-primary text-xl font-semibold' htmlFor={uuid}>
                {label}:
            </label>
            <div className='flex w-1/2 max-w-[50%]'>
                <input
                    className='h-7 w-full truncate rounded-l-md px-1 text-center text-lg'
                    type={type}
                    id={uuid}
                    disabled={!isEdit}
                    defaultValue={field}
                    onChange={(e) => setFieldVal(e.target.value)}
                />
                <button
                    className='text-card-text-secondary bg-card-edit h-7 w-10 flex-shrink-0 rounded-r-md px-2 text-center text-lg'
                    onClick={async () => {
                        if (saving) return
                        setSaving(true)
                        await handleClick()
                        setSaving(false)
                    }}
                >
                    {saving ? (
                        <div className='mx-auto h-4 w-4 animate-spin rounded-full border-[3px] border-white border-t-transparent'></div>
                    ) : isEdit ? (
                        'Save'
                    ) : (
                        'Edit'
                    )}
                </button>
            </div>
        </div>
    )
}

export default TerminalField
