import { Textarea } from "@/components/ui/textarea";
import { Input } from "../../components/ui/input";
import { info } from "../../data/info-data";



export default function Contact() {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-[30px]">

                <div className="order-2 xl:order-none">
                    <h1 className="h1 mb-6">Contato</h1>
                    <p className="text-[1.5rem] text-green-500">Entre em contato comigo</p>
                    <form className="flex flex-col gap-[20px]">
                        <div className="flex flex-col gap-[10px]">
                            <label htmlFor="name">Nome</label>
                            <Input type="text" id="name" name="name" placeholder="Digite seu nome" />
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <label htmlFor="email">Email</label>
                            <Input type="email" id="email" name="email" placeholder="Digite seu email" />
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <label htmlFor="message">Mensagem</label>
                            <Textarea id="message" name="message" placeholder="Digite sua mensagem" className="bg-white" />
                        </div>
                        <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-all duration-300">Enviar</button>
                    </form>
                </div>

                <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                    <ul className="flex flex-col gap-4">
                        {
                            info.map((item, index) => (
                                <li key={index} className="flex gap-6 items-center">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-white shadow-2xl rounded-md flex items-center justify-center">
                                        <item.icon />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-green-500">{item.title}</p>
                                        <h3 className=" text-md">{item.description}</h3>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>


            </div>
        </div>
    )
}