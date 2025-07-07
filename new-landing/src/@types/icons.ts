import { SVGProps } from "react";
interface TypeIcons extends SVGProps<SVGSVGElement> {
    className?:string;
    size?: {
        width:number;
        height:number;
    };
}
export default TypeIcons;