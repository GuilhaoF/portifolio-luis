import Layout from "@/components/layout";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/projects-data";

export default function Projects() {
  return (
    <Layout>
      <div className="grid  grid-cols-1 my-5 mx-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {projects.map((item) => (
          <Card key={item.id} className="shadow-md">
           <div className="relative h-60 w-full">
              <div className="absolute inset-0">
                <Image
                  src={item.imageUrl}
                  alt="Imagem tela do projeto"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>

            <CardContent>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </Layout>
  );
}
