import Layout from "@/components/layout";
import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ContactIcon, MailIcon } from "lucide-react";
import Link from "next/link";


export default function Contact() {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-2">
          <Card className="">
            <CardHeader>
              <CardTitle>Contatos</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex space-x-2">
                  <ContactIcon size={24} />
                  <span>(99)9 9216-9563</span>
                </li>
                <li className="flex space-x-2">
                  <MailIcon size={24} />
                  <span>luisphelipe@gmail.com</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="flex-wrap">
            <CardHeader>
              <CardTitle>Redes Sociais</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge className=" border border-blue-500" variant={"outline"}>
                Facebook
              </Badge>
              <Badge className=" border  border-rose-300" variant={"outline"}>
                Instagram
              </Badge>
              <Badge className=" border border-blue-500" variant={"outline"}>
                 <Link href="https://www.linkedin.com/in/luis-felipe-silv/">
                 Linkedin
                 </Link>
              </Badge>
              <Badge className=" border border-green-500" variant={"outline"}>
               Whatsapp Pessoal
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
