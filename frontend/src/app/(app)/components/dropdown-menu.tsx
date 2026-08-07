'use client'
// Tailwind Styling Imports
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function DropdownMenu(
    {items} : {items: string[]}
){

    return (
        <div>
            <Menu as="div" className="relative inline-block">
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:shadow-none dark:ring-white/5 dark:hover:bg-white/20">
                    Options
                    <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                </MenuButton>

                <MenuItems
                    anchor={{
                        to: "bottom start",
                        gap: "8px",
                        padding: "16px"
                    }}
                    transition
                    className="z-10 w-56 origin-top-right rounded-md bg-white shadow-lg outline outline-1 outline-black/5 transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
                >
                    <div className="py-1">
                        {items.map((item: string, index: number) => (
                            <MenuItem key={index}>
                                <button
                                    type="button"
                                    className="block w-full px-4 py-2 text-left"
                                >
                                    {item}
                                </button>
                            </MenuItem>
                        ))}

                    </div>
                </MenuItems>
            </Menu>
        </div>
    );
}