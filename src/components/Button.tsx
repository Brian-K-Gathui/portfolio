import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva('border h-12 rounded-full px-6 font-small font-semibold whitespace-nowrap', {
    variants: {
        variant: {
            primary: 'bg-yellow-500 text-white border-yellow-500',
            secondary: 'border-white text-white bg-transparent',
            tertiary: 'border-yellow-500 text-yellow-500 bg-transparent'
        },
        size :{
            sm: 'h-10',
        },
    },
});

export default function Button(
    props: {
        variant: "primary" | "secondary" | "tertiary";
        size?: "sm";
    } & ButtonHTMLAttributes<HTMLButtonElement>
) {
    const { variant, className, size, ...otherProps } = props;

    return (
        <button
            className={classes({
                variant: props.variant,
                className: props.className,
                size: props.size,
            })}
            {...otherProps}
        />
    );
}