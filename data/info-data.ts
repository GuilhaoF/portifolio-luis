import { IconType } from "react-icons";
import { FaAddressBook, FaEnvelope, FaPhoneAlt } from "react-icons/fa";


interface InfoItem {
  icon: IconType;
  title: string;
  description: string;
}

export const info : InfoItem[] = [
  {
    icon: FaPhoneAlt,
    title: "Telefone :",
    description: "(99) 99216-9563",
  },
  {
    icon: FaEnvelope ,
    title: "Email :",
    description: "luisphelipe1000@gmail.com",
  },
  {
    icon: FaAddressBook,
    title: "Endereço :",
    description: "Rua Santo Antônio, 927 - Joao Viana, MA",
  }
];
