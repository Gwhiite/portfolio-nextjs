"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const availableLocales = ["en", "pt-br"];

  return (
    <Popover>
      <PopoverTrigger className="flex items-center gap-x-1 border border-[#ba110c]/50 p-2 rounded-lg">
        {pathname === "/pt-br" ? (
          <Image
            priority
            src={"/brazil.svg"}
            alt="brazil flag"
            width={30}
            height={30}
          />
        ) : (
          <Image
            priority
            src={"/usa.svg"}
            alt="usa flag"
            width={30}
            height={30}
          />
        )}{" "}
        <Image
          alt="arrow"
          width={10}
          height={10}
          src={"/down-arrow.svg"}
        ></Image>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-y-2">
        {availableLocales.map((locale) => (
          <Link key={locale} href={`/${locale}`} locale={false}>
            {locale === "pt-br" ? (
              <div className="flex items-center gap-x-2">
                <Image
                  priority
                  src={"/brazil.svg"}
                  alt="brazil flag"
                  width={30}
                  height={30}
                />
                <span className="tracking-wider">PT-BR</span>
              </div>
            ) : (
              <div className="flex items-center gap-x-2">
                <Image
                  priority
                  src={"/usa.svg"}
                  alt="usa flag"
                  width={30}
                  height={30}
                />
                <span className="tracking-wider">EN</span>
              </div>
            )}
          </Link>
        ))}
      </PopoverContent>
    </Popover>
  );
}
