import { IonIcon } from "@ionic/react"
import "./styles/EmailSender.scss"

const EmailSender = () => {
    return (
        <div className="email-sender-section">

            <div className="mt-6 max-w-6xl max-lg:max-w-3xl mx-auto bg-[#182947] rounded-lg">
                <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 font-[sans-serif]">
                    <div>
                        <h1 className="text-4xl font-bold text-white">Contáctanos</h1>
                        <p className="text-sm text-gray-300 mt-4 leading-relaxed">¿Tienes un proyecto de construcción o ingeniería civil que deseas desarrollar y necesitas asistencia profesional? Entonces, contáctanos.</p>

                        <ul className="mt-12 space-y-8">
                            <li className="flex items-center">
                                <IonIcon className="icon" icon="mail"></IonIcon>
                                <a href="javascript:void(0)" className="text-white text-sm ml-4">
                                    mavracon@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center">
                                <IonIcon className="icon" icon="call"></IonIcon>
                                <a href="javascript:void(0)" className="text-white text-sm ml-4">
                                    +51 927 676 456
                                </a>
                            </li>
                            <li className="flex items-center">
                                <IonIcon className="icon" icon="location"></IonIcon>
                                <a href="javascript:void(0)" className="text-white text-sm ml-4">
                                    Ayacucho, Perú
                                </a>
                            </li>
                        </ul>

                        <ul className="flex mt-12 space-x-4 socials_contacto">
                            <li className=" h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="#">
                                    <IonIcon className="icon" icon="logo-facebook"></IonIcon>
                                </a>
                            </li>
                            <li className=" h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="javascript:void(0)">
                                    <IonIcon className="icon" icon="logo-linkedin"></IonIcon>
                                </a>
                            </li>
                            <li className=" h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="javascript:void(0)">
                                    <IonIcon className="icon" icon="logo-youtube"></IonIcon>
                                </a>
                            </li>
                            <li className=" h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="javascript:void(0)">
                                    <IonIcon className="icon" icon="logo-instagram"></IonIcon>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-lg">
                        <p className="text-sm font-semibold text-gray-800">Estoy interesado en...</p>

                        <div className="space-y-4 max-lg:mt-4 interes_buttons">
                            <button type="button" className="px-4 py-2 rounded-lg bg-[#F42534] text-white text-sm tracking-wider font-medium outline-none border-2 border-[#F42534] mr-4">Consultoría</button>
                            <button type="button" className="px-4 py-2 rounded-lg bg-transparent text-gray-800 text-sm tracking-wider font-medium outline-none border-2 border-gray-300 mr-4">Ejecución de proyectos</button>
                            <button type="button" className="px-4 py-2 rounded-lg bg-transparent text-gray-800 text-sm tracking-wider font-medium outline-none border-2 border-gray-300">Bienes Raíces</button>
                        </div>

                        <form className="mt-8 space-y-4">
                            <input type='text' placeholder='Nombre completo'
                                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#F42534]" />
                            <input type='email' placeholder='Correo electrónico'
                                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#F42534]" />
                            <input type='text' placeholder='Asunto'
                                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#F42534]" />
                            <textarea placeholder='Mensaje' rows={6}
                                className="w-full rounded-lg px-4 text-gray-800 text-sm pt-3 outline-[#F42534]"></textarea>
                            <button type='button'
                                className="text-white bg-[#F42534]  hover:bg-[#a11720] tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' className="mr-2" viewBox="0 0 548.244 548.244">
                                    <path fill-rule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clip-rule="evenodd" data-original="#000000" />
                                </svg>
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailSender