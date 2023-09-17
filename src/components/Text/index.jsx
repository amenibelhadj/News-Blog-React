import React from "react";

const sizeClasses = {
  txtInterSemiBold24WhiteA700: "font-inter font-semibold",
  txtInterRegular14Black900: "font-inter font-normal",
  txtInterSemiBold18WhiteA70087: "font-inter font-semibold",
  txtInterSemiBold48: "font-inter font-semibold",
  txtInterRegular12WhiteA700: "font-inter font-normal",
  txtInterRegular18Black90087: "font-inter font-normal",
  txtInterRegular14Bluegray900: "font-inter font-normal",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterRegular14Black90087: "font-inter font-normal",
  txtInterSemiBold36Black900: "font-inter font-semibold",
  txtPoppinsRegular28: "font-normal font-poppins",
  txtPoppinsBold14: "font-bold font-poppins",
  txtPoppinsRegular10: "font-normal font-poppins",
  txtInterSemiBold14Black90090: "font-inter font-semibold",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtInterSemiBold10: "font-inter font-semibold",
  txtPoppinsRegular10Black90087: "font-normal font-poppins",
  txtInterRegular16Black900: "font-inter font-normal",
  txtInterRegular14Black9007f: "font-inter font-normal",
  txtInterSemiBold48Black900: "font-inter font-semibold",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtInterSemiBold14Bluegray900: "font-inter font-semibold",
  txtInterBold18: "font-bold font-inter",
  txtInterRegular12Black9007f: "font-inter font-normal",
  txtInterSemiBold18Black900: "font-inter font-semibold",
  txtInterRegular10: "font-inter font-normal",
  txtInterSemiBold36: "font-inter font-semibold",
  txtInterBold36: "font-bold font-inter",
  txtInterBold14: "font-bold font-inter",
  txtInterSemiBold14: "font-inter font-semibold",
  txtInterSemiBold12: "font-inter font-semibold",
  txtInterSemiBold18Black90087: "font-inter font-semibold",
  txtInterSemiBold18: "font-inter font-semibold",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular15: "font-normal font-poppins",
  txtPoppinsRegular17: "font-normal font-poppins",
  txtInterRegular12WhiteA70087: "font-inter font-normal",
  txtInterRegular18Black900: "font-inter font-normal",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtInterBold18WhiteA700: "font-bold font-inter",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular18Black9007f: "font-inter font-normal",
  txtInterSemiBold10Black900: "font-inter font-semibold",
  txtInterRegular14: "font-inter font-normal",
  txtInterSemiBold12WhiteA700: "font-inter font-semibold",
  txtInterRegular16: "font-inter font-normal",
  txtInterRegular18: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
