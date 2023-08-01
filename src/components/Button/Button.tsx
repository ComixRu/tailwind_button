import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { LoadingSpinner } from "../Icons/LoadingSpinner";

interface ButtonProps {
    children: ReactNode;
    color?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    loading?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    variant?: 'filled' | 'outlined';
    icon?: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        color = 'primary',
        size = 'md',
        loading = false,
        disabled = false,
        onClick,
        variant = 'filled',
        icon,
    } = props;

    const colors = {
        primary: 'bg-blue-500 hover:bg-blue-600 focus:bg-blue-600',
        secondary: 'bg-gray-500 hover:bg-gray-600 focus:bg-gray-600',
    };

    const sizes = {
        sm: 'py-2 px-4 text-sm',
        md: 'py-3 px-6 text-base',
        lg: 'py-4 px-8 text-lg',
    };

    const variants = {
        filled: `text-white ${colors[color]}`,
        outlined: `text-${color}-500 border border-${color}-500 hover:bg-${color}-500 hover:text-white focus:text-white`,
    };

    const sizeClass = sizes[size] || sizes.md;
    const variantClass = variants[variant] || variants.filled;

    const buttonClasses = clsx(
        'flex items-center justify-center rounded-full font-semibold focus:outline-none',
        sizeClass,
        loading && 'cursor-wait',
        disabled && 'opacity-50 pointer-events-none',
        variantClass
    );

    const getIconSize = () => {
        if (sizeClass === sizes.sm) return 'h-4 w-4';
        if (sizeClass === sizes.md) return 'h-6 w-6';
        if (sizeClass === sizes.lg) return 'h-8 w-8';
        return 'h-6 w-6';
    };

    const handleClick = () => {
        if (!disabled && !loading && onClick) {
            onClick();
        }
    };

    return (
        <button
            className={buttonClasses}
            onClick={handleClick}
            disabled={disabled || loading}
            aria-disabled={disabled || loading}
            aria-busy={loading}
            role="button"
        >
            {loading ? <LoadingSpinner className="mr-2" /> : null}
            {icon && !loading && <span className={`mr-2 ${getIconSize()}`} aria-hidden="true">{icon}</span>}
            {children}
        </button>
    );
};
