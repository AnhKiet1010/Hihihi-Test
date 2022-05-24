export default function CheckboxField(props) {
    const { type, label, register } = props
    return (
        <div className="flex items-center">
            <input
                className="h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mr-2 cursor-pointer"
                type={type}
                id={register.name}
                {...register}
            />
            <label className="inline-block" htmlFor={register.name}>
                {label}
            </label>
        </div>
    )
}
