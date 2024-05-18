import Layout from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {ContactIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import {
  GoogleMap,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import { useMemo } from "react";
import { env } from "process";


export default function Contact() {
  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(
    () => ({ lat:-4.869266, lng: -43.333961 }),
    []
  );
  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: false,
      clickableIcons: true,
      scrollwheel: true,
      draggable: true,
      zoomControl: true,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-1 md:gap-8 lg:grid-cols-2">
          {/* Card Contato */}
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

          {/* Card Redes Sociais */}
          <Card>
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

          <div className=" col-span-2 gap-4 md:gap-8">
            <Card className="w-full ">
              <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                  <CardTitle>Localizaçao</CardTitle>
                  <CardDescription>
                   Veja no mapa minha localizaçao
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <GoogleMap
                  options={mapOptions}
                  zoom={14}
                  center={mapCenter}
                  mapTypeId={google.maps.MapTypeId.ROADMAP}
                  mapContainerStyle={{ height: "50vh" }}
                  onLoad={() => console.log("Map Component Loaded...")}
                >
                   <MarkerF position={mapCenter} onLoad={() => console.log('Marker Loaded')} />
                </GoogleMap>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </Layout>
  );
}
