import { FC, useState } from 'react'

interface DeviceDescriptionProps {
    onFieldSave: (id: string, text: string) => void
    field: string
    uuid: string
    id: string
}

const DeviceDescriptionForm: FC<DeviceDescriptionProps> = ({ onFieldSave, field, uuid, id }) => {
    const [isEdit, setIsEdit] = useState<boolean>(true)
    const [fieldVal, setFieldVal] = useState<string>(field)
    const [saving, setSaving] = useState<boolean>(false)

    const handleClick = async () => {
        if (isEdit) await onFieldSave(id, fieldVal)
        setIsEdit(!isEdit)
    }

    return (
        <div className='font-teko flex w-full justify-between'>
            <label className='text-card-text-primary mr-16 text-xl font-semibold' htmlFor={uuid}>
                Description:
            </label>
            <div className='flex w-1/2 max-w-[50%]'>
                <input
                    className='h-7 w-full truncate rounded-l-md px-1 text-center text-lg'
                    type='text'
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

export default DeviceDescriptionForm
