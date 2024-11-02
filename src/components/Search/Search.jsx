import {
    CreditCard,
    Settings,
    User,
} from "lucide-react"
import { IoGitNetworkOutline } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";

const Search = () => {
    const dropdownData = [
        {
            name: "Data Provider",
            icon: <IoGitNetworkOutline className="text-[#0A78CD]" />,
            down: <IoChevronDown />
        },
        {
            name: "World Region",
            icon: <IoGitNetworkOutline className="text-[#0A78CD]" />,
            down: <IoChevronDown />
        },
        {
            name: "World Sub Region",
            icon: <IoGitNetworkOutline className="text-[#0A78CD]" />,
            down: <IoChevronDown />
        },
        {
            name: "Enter Company",
            icon: <IoGitNetworkOutline className="text-[#0A78CD]" />,
            down: <IoChevronDown />
        },
        {
            name: "Enter City",
            icon: <IoGitNetworkOutline className="text-[#0A78CD]" />,
            down: <IoChevronDown />
        },
    ]
    return (
        <div className='px-5 pt-4 pb-2 text-[#25245F] flex items-center justify-between'>
            <h1 className='text-lg text-nowrap font-semibold'>Data Stewardship</h1>
            <div className="flex items-center justify-center gap-4">
                {
                    dropdownData.map((data) => (
                        <DropdownMenu key={data.name} className="focus-visible:ring-transparent focus:outline-none">
                            <DropdownMenuTrigger asChild>
                                <Button className="bg-[#F9FAFB] hover:bg-[#fbfdfe] p-4 flex items-center text-[#66668F] font-normal justify-center gap-5 rounded-full">
                                    <div className="flex items-center justify-center gap-2 text-xs">
                                        {data.icon}
                                        {data.name}
                                    </div>
                                    {data.down}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuGroup>
                                    <DropdownMenuItem className="focus:ring-0 focus:outline-none">
                                        <User />
                                        <span>Profile</span>
                                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <CreditCard />
                                        <span>Billing</span>
                                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Settings />
                                        <span>Settings</span>
                                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ))
                }
                <button className="bg-[#0A78CD] box-shadow py-3 px-5 text-white text-xs font-semibold rounded-full">Search</button>
                <button className="text-[#0A78CD] border border-[#0A78CD] text-nowrap text-xs py-3 px-5 font-semibold rounded-full">Save Changes</button>
            </div>
        </div>
    )
}

export default Search