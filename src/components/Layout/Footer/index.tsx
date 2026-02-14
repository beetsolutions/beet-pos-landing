import React, { FC } from "react";
import Link from "next/link";
import {companyData, headerData} from "../Header/Navigation/menuData";
import { Icon } from "@iconify/react";
import LogoDark from "../Header/Logo";

const Footer: FC = () => {
  return (
    <footer className="pt-16 bg-primary">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:gap-20 md:gap-6 sm:gap-12 gap-6  pb-16">
          <div className="col-span-1">
            <LogoDark />
            <h4 className="text-xs font-medium text-white dark:text-white/50 mt-5 sm:gap-12 gap-6">36 Pipers Row</h4>
            <h4 className="text-xs font-medium text-white dark:text-white/50">WV1 3JY</h4>
            <h4 className="text-xs font-medium text-white dark:text-white/50">Wolverhampton</h4>
            <h4 className="text-xs font-medium text-white dark:text-white/50 mb-16">United Kingdom</h4>
            <div className="flex gap-6 items-center">
              <Link href="#" className="group bg-white hover:bg-primary rounded-full shadow-xl p-3">
                <Icon
                  icon="fa6-brands:facebook-f"
                  width="16"
                  height="16"
                  className=" group-hover:text-white text-black"
                />
              </Link>
              <Link href="#" className="group bg-white hover:bg-primary rounded-full shadow-xl p-3">
                <Icon
                  icon="fa6-brands:instagram"
                  width="16"
                  height="16"
                  className=" group-hover:text-white text-black"
                />
              </Link>
              <Link href="#" className="group bg-white hover:bg-primary rounded-full shadow-xl p-3">
                <Icon
                  icon="fa6-brands:x-twitter"
                  width="16"
                  height="16"
                  className=" group-hover:text-white text-black"
                />
              </Link>
            </div>
          </div>
          <div className="">
            <h4 className="text-white dark:text-white mb-9 font-semibold text-xl">Business Types</h4>
            <ul>
              <li className="pb-5">
                <Link
                  href="/business-types/convenience"
                  className="text-white/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Convenience
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="/business-types/grocery"
                  className="text-white/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Grocery
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="#"
                  className="text-white/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Liquor
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="#"
                  className="text-white/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Smoke Shops
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="#"
                  className="text-white/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Fast Food
                </Link>
              </li>
              <li className="pb-5">
                <Link
                    href="#"
                    className="text-white/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Full Service
                </Link>
              </li>
              <li className="pb-5">
                <Link
                    href="#"
                    className="text-white/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Café and Bakeries
                </Link>
              </li>
              <li className="pb-5">
                <Link
                    href="#"
                    className="text-white/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Bars
                </Link>
              </li>
              <li className="pb-5">
                <Link
                    href="#"
                    className="text-white/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Nightclubs
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-white dark:text-white mb-9 font-semibold text-xl">Products</h4>
            <ul>
              <li className="pb-5">
                <Link
                  href="#"
                  className="text-white/70 dark:text-white/70 dark:hover:text-primary hover:text-primary text-base"
                >
                  Retail POS
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="#"
                  className="text-white/70 dark:text-white/70 dark:hover:text-primary hover:text-primary text-base"
                >
                  Restaurant POS
                </Link>
              </li>
              <li className="pb-5">
                <Link
                    href="#"
                    className="text-white/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Multi Location Management
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="#"
                  className="text-white/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Inventory Management
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="#"
                  className="text-white/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Employee Management
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="#"
                  className="text-white/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Table Management
                </Link>
              </li>
              <li className="pb-5">
                <Link
                    href="#"
                    className="text-white/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Waitlist Management
                </Link>
              </li>
              <li className="pb-5">
                <Link
                    href="#"
                    className="text-white/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Order Management
                </Link>
              </li>
              <li className="pb-5">
                <Link
                    href="#"
                    className="text-white/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Kitchen Display System
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-white dark:text-white mb-9 font-semibold text-xl">Company</h4>
            <ul>
              {companyData.map((item, index) => (
                <li key={index} className="pb-4">
                  <Link
                    href={item.href}
                    className="text-white/70 dark:text-white/70 dark:hover:text-primary hover:text-primary text-base"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-grey/15 dark:border-white/15 py-10 flex justify-between items-center">
            <p className="sm:col-span-3 sm:pr-6 text-sm text-white/70 dark:text-white/70">
              Copyright © 2026 - BEET POS LTD.
            </p>
            <div className="">
              <Link href="#" className="text-sm text-white/70 dark:text-white/70 px-5 border-r border-grey/15 dark:border-white/15 hover:text-primary dark:hover:text-primary">Privacy policy</Link>
              <Link href="#" className="text-sm text-white/70 dark:text-white/70 px-5 hover:text-primary dark:hover:text-primary">Terms & conditions</Link>
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
