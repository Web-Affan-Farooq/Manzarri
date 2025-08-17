import { SVGProps } from "react";
export default interface TypeIcons extends SVGProps<SVGSVGElement> {
    className?:string;
    size?: {
        width:number;
        height:number;
    };
}