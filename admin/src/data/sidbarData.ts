import { BsPeopleFill } from "react-icons/bs";
import { FiFolder } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { IconType } from "react-icons/lib";
interface SubItems{
    name: string;
    link: string;
    icon: IconType;
    margin?: boolean | undefined;
}
export interface MenusSidebar {
    id:number
    subToggle:boolean
    subItems?:SubItems[]
    name: string;
    link: string;
    icon: IconType;
    margin?: boolean | undefined;
  }
export const menuAdmin = [
  { id:1, subToggle:false, name: "پنل کاربری", link: "/admin", icon: MdOutlineDashboard },
  { id:2, subToggle:false, name: "محصولات", link: "/action", icon: FiFolder, margin: true ,
   
  subItems:[
    { name: "محصولات", link: "/action", icon: FiFolder, margin: true },
    { name: "افزودن", link: "/action", icon: FiFolder, margin: true },
    { name: "دسته", link: "/action", icon: FiFolder, margin: true },
]
  
},
  { id:3, subToggle:false, name: "سفارشات", link: "/comady", icon: FiFolder,
  subItems:[
    { name: "سفارشات", link: "/action", icon: FiFolder, margin: true },
    { name: "پیگیری", link: "/action", icon: FiFolder, margin: true },
    { name: "همه", link: "/action", icon: FiFolder, margin: true },
] 


},
  { id:4, subToggle:false, name: "دسته بندی", link: "/action", icon: FiFolder },
  { id:5, subToggle:false, name: "کاربران", link: "/action", icon: FiFolder },
  { id:6, subToggle:false, name: "فایل ", link: "/mylist", icon: FiFolder },
  { id:7, subToggle:false, name: "تنظیمات", link: "/admin/users", icon: BsPeopleFill },
];

