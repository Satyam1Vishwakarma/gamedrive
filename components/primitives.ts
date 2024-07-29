import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl leading-9",
      lg: "text-4xl lg:text-6xl",
      gamereq: "max-[376px]:text-[1.0rem] max-[385px]:text-[1.0rem] max-[400px]:text-[1.1rem] max-[437px]:text-[1.2rem] max-[452px]:text-[1.3rem]  max-[461px]:text-[1.3rem] max-[487px]:text-[1.4rem] max-[640px]:text-2xl sm:text-2xl md:text-2xl lg:text-2xl font-bold",
      gamereqsub: "max-[376px]:text-[0.8rem] max-[385px]:text-[0.8rem] max-[400px]:text-[0.9rem] max-[437px]:text-[1.0rem] max-[452px]:text-[1.1rem]  max-[461px]:text-[1.1rem] max-[487px]:text-[1.2rem] max-[640px]:text-1xl sm:text-1xl md:text-1xl lg:text-1xl font-light",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});
