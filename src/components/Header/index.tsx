'use client'

import clsx from "clsx";

export function Header() {
    console.log('Header');
    return (
        <h1
            className={clsx(
                "text-6xl",
                "font-bold",
                "text-blue-500",
                "hover:text-blue-200",
                "hover:bg-blue-500",
                "transition",
                "duration-500"
            )}
            onClick={() => alert(123)}
        >
            Texto no meu H1
        </h1>
    );
}
