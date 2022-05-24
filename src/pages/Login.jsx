import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import CartImage from '../assets/images/cart.png'
import Header from '../components/common/Header'
import CheckboxField from '../components/CustomFields/CheckboxField'
import InputField from '../components/CustomFields/InputField'

function Login() {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div>
            <Header />
            <main className="w-full bg-primary py-14">
                <div className="container mx-auto h-full flex justify-center items-center px-8 lg:px-0">
                    <div className="w-1/2 text-white hidden lg:flex flex-col items-center">
                        <h3 className="text-2xl uppercase font-bold">bán hàng chuyên nghiệp</h3>
                        <p className="mt-4 text-center font-light">
                            Tham gia bán hàng, phân phối hàng sỉ cho các nhà bán lẻ <br></br> chuyên
                            nghiệp và đội ngũ dropship toàn quốc
                        </p>
                        <img src={CartImage} alt="cart" className="mt-8" />
                    </div>
                    <div className="w-full lg:w-1/2 bg-white rounded-md p-6">
                        <form
                            className="flex flex-col items-start gap-4"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <p className="text-xl font-semibold">Đăng nhập</p>
                            <InputField
                                type="text"
                                placeholder="Email/Số điện thoại/Tên đăng nhập"
                                register={register('id')}
                            />
                            <InputField
                                type="password"
                                placeholder="Mật khẩu"
                                register={register('password')}
                            />
                            <div className="w-full flex justify-between items-center text-xsm">
                                <CheckboxField
                                    type="checkbox"
                                    register={register('remember')}
                                    label="Nhớ mật khẩu"
                                />
                                <Link to="/forgot-password" className="text-highlight text-xsm">
                                    Quên mật khẩu?
                                </Link>
                            </div>
                            <button className="w-full text-center rounded-lg bg-primary text-white py-4 text-xsm border border-primary font-semibold">
                                Đăng nhập
                            </button>
                            <button className="w-full text-center rounded-lg bg-white text-gray-secondary py-4 text-xsm border border-gray-secondary font-medium">
                                Đăng ký trở thành người bán hàng
                            </button>
                            <p className="w-full text-xsm text-center mt-6">
                                <Link to="/" className="text-highlight mx-1">
                                    Điều khoản
                                </Link>
                                và
                                <Link to="/" className="text-highlight mx-1">
                                    chính sách
                                </Link>
                                của người bán hàng trên Hihihi
                            </p>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login
