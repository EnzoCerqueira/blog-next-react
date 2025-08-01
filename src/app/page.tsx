import clsx from "clsx";

export default function HomePage() {
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
        >
            Texto no meu H1
        </h1>
    );
}
