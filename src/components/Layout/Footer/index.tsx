import React, { FC } from "react";
import Link from "next/link";
import {companyData, headerData, productData} from "../Header/Navigation/menuData";
import { Icon } from "@iconify/react";
import LogoDark from "../Header/Logo";
import Trustpilot from "@/components/Trustpilot";

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
            <div className="mt-8">
              <Trustpilot
                templateId="5419b6a8b0d04a076446a9ad"
                height="24px"
                width="100%"
                theme="dark"
              />
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
                  href="/business-types/liquor"
                  className="text-white/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Liquor
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="/business-types/smoke-shops"
                  className="text-white/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Smoke Shops
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="/business-types/fast-food"
                  className="text-white/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Fast Food
                </Link>
              </li>
              <li className="pb-5">
                <Link
                    href="/business-types/full-service"
                    className="text-white/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Full Service
                </Link>
              </li>
              <li className="pb-5">
                <Link
                    href="/business-types/cafe-and-bakeries"
                    className="text-white/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Café and Bakeries
                </Link>
              </li>
              <li className="pb-5">
                <Link
                    href="/business-types/bars"
                    className="text-white/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Bars
                </Link>
              </li>
              <li className="pb-5">
                <Link
                    href="/business-types/nightclubs"
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
              {productData.map((item, index) => (
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
        <div className="border-t border-grey/15 dark:border-white/15 py-10 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 sm:gap-0">
            <p className="text-sm text-white/70 dark:text-white/70 text-center sm:text-left">
              Copyright © 2026 - BEET POS LTD.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-2">
              <Link href="#" className="text-sm text-white/70 dark:text-white/70 px-3 sm:px-5 border-r border-grey/15 dark:border-white/15 hover:text-primary dark:hover:text-primary">Privacy policy</Link>
              <Link href="#" className="text-sm text-white/70 dark:text-white/70 px-3 sm:px-5 hover:text-primary dark:hover:text-primary">Terms & conditions</Link>
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
