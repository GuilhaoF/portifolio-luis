import Layout from "@/components/layout";
import Image from "next/image";
import ManutencaoLogo from '../assets/maintenance.png' ;

export default function Projects(){
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center mx-auto">
        <Image
          src={ManutencaoLogo}
          className="rounded-full w-auto h-2/3"
          alt="Estamos Construindo ainda"
        />
        <h1 className="lg:text-lg sm:text-base md:text-md animate-bounce">Em construçao....!</h1>
      </div>
    </Layout>
  );
}