import { useState } from 'react'
import { ShowPasswordIcon } from '../../../icons'

export default function InputField(props) {
    const { type, placeholder, register } = props
    const [currentType, setCurrentType] = useState(type)

    const onClickShowPassword = () => {
        currentType === 'password' ? setCurrentType('text') : setCurrentType('password')
    }
    return (
        <div className={`w-full flex relative`}>
            <input
                {...register}
                type={currentType}
                placeholder={placeholder}
                className="w-full rounded-md bg-gray-primary text-xs py-4 pr-10 pl-3"
            />
            {type === 'password' && register.name === 'password' && (
                <ShowPasswordIcon
                    onClick={onClickShowPassword}
                    alt="show-password"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                />
            )}
        </div>
    )
}
