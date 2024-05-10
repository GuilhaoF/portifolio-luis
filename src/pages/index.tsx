import Layout from "@/components/layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';
import Hero from "@/assets/Hero.jpg";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center over max-w-xl  mx-auto min-h-screen">
        <Card className="flex items-center justify-center flex-col space-y-10">
          <CardHeader>
            <CardTitle className="font-bold text-xl sm:text-2xl md:text-3xl">Luis Felipe G</CardTitle>
            <CardDescription className="text-sm sm:text-base md:text-lg">
              Desenvolvedor Front-End e Mobile
            </CardDescription>
          </CardHeader>
            <Image
              src={Hero}
              alt="avatar"
              className="object-cover w-56 lg:w-1/2 h-1/2 mx-2 rounded-full border-4 border-green-600" 
            />
          <CardContent className="animate-pulse">
            <p>
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here,
              content here, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for orem ipsum will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
