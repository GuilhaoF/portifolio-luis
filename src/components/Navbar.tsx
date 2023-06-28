import { CaretRight, XCircle } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { NavigationComponent } from "./Navigation";

export function NavbarComponent() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = isOpenMenu ? "hidden" : "auto";
  }, [isOpenMenu]);

  return (
    <div>
      <div
        className={`flex items-center justify-center fixed z-[1] bg-ocean-blue-900 h-full w-full ${isOpenMenu ? "translate-x-0" : "translate-x-full"
          } transition duration-150`}
      >
        <div className="absolute top-10 right-16">
          <XCircle
            className="text-gray-100 h-12 w-12 cursor-pointer transition-all hover:text-orange-300"
            size={28}
            weight="bold"
            onClick={() => setIsOpenMenu(false)}
          />
        </div>

        <div className="text-4xl " onClick={() => setIsOpenMenu(false)}>
          <NavigationComponent
            direction="col"
            gap="8"
            color="gray-100"
            borderColor="border-ocean-blue-900"
          />
        </div>

        {/* Navbar */}
        <header className=" py-4 px-6 bg-gray-300 drop-shadow-md md:px-20">
          <nav className="flex items-center justify-between py-2 px-4">
            <h3>Luis Felipe</h3>

            {/* Icone Mobile */}
            <div className="md:hidden">
              <CaretRight
                size={28}
                weight="bold"
                className="h-8 w-8 text-ocean-blue-700 cursor-pointer transition-all hover:text-orange-300"
                onClick={() => setIsOpenMenu(true)}
              />
            </div>

            {/* Navbar Desktop */}
            <div className="hidden md:block">
              <NavigationComponent
                direction='row'
                gap='8'
                color="ocean-blue-700"
                borderColor="border-gray-300"
              />
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}
