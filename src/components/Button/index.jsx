import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-none",
  round: "rounded-lg",
};
const variants = {
  fill: {
    deep_orange_A400: "bg-deep_orange-A400 text-white-A700",
    white_A700: "bg-white-A700",
    green_700: "bg-green-700 text-white-A700",
    purple_500: "bg-purple-500 text-white-A700",
    gray_100: "bg-gray-100 text-black-900",
    orange_A700: "bg-orange-A700 text-white-A700",
    red_900: "bg-red-900 text-white-A700",
    gray_50: "bg-gray-50 text-black-900",
    bluegray_900: "bg-bluegray-900 text-white-A700",
    black_900: "bg-black-900 text-white-A700",
  },
  outline: {
    bluegray_900: "border border-bluegray-900 border-solid text-bluegray-900",
    white_A700: "border border-solid border-white-A700 text-white-A700",
  },
};
const sizes = {
  xs: "p-[5px]",
  sm: "p-2",
  md: "pl-[11px] py-[11px]",
  lg: "p-3",
  xl: "p-[15px]",
  "2xl": "p-[18px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "md",
  variant = "fill",
  color = "black_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "deep_orange_A400",
    "white_A700",
    "green_700",
    "purple_500",
    "gray_100",
    "orange_A700",
    "red_900",
    "gray_50",
    "bluegray_900",
    "black_900",
  ]),
};

export { Button };
