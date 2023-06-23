import { ReactNode } from "react";

export interface ButtonType {
    onClick: () => void,
    className?: string,
    children: ReactNode
}