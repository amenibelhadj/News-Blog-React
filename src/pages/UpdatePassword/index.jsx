import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

const UpdatePasswordPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-bluegray-900 flex flex-row items-center justify-center p-[26px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[94%]">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.50px]"
                size="txtInterSemiBold36"
              >
                Neuzy
              </Text>
              <div className="flex md:flex-col flex-row gap-6 items-center justify-center md:ml-[0] ml-[173px] w-[47%] md:w-full">
                <Text
                  className="text-lg text-white-A700 tracking-[-0.50px]"
                  size="txtInterSemiBold18"
                >
                  Sport
                </Text>
                <Text
                  className="text-lg text-white-A700 tracking-[-0.50px]"
                  size="txtInterSemiBold18"
                >
                  Health
                </Text>
                <Text
                  className="text-lg text-white-A700 tracking-[-0.50px]"
                  size="txtInterSemiBold18"
                >
                  Political
                </Text>
                <Text
                  className="text-lg text-white-A700 tracking-[-0.50px]"
                  size="txtInterSemiBold18"
                >
                  Business
                </Text>
                <Text
                  className="text-lg text-white-A700 tracking-[-0.50px]"
                  size="txtInterSemiBold18"
                >
                  Finance
                </Text>
                <Text
                  className="text-lg text-white-A700 tracking-[-0.50px]"
                  size="txtInterSemiBold18"
                >
                  Life
                </Text>
                <Text
                  className="text-lg text-white-A700 tracking-[-0.50px]"
                  size="txtInterSemiBold18"
                >
                  Entertainment
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between md:ml-[0] ml-[214px] w-[15%] md:w-full">
                <Img
                  className="common-pointer h-6 w-6"
                  src="images/img_search.svg"
                  alt="search"
                  onClick={() => navigate("/search")}
                />
                <Line className="bg-white-A700 h-[26px] w-px" />
                <div className="flex flex-row gap-5 items-center justify-between w-[56%]">
                  <Text
                    className="common-pointer text-sm text-white-A700 tracking-[-0.50px]"
                    size="txtInterRegular14"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Text>
                  <Text
                    className="common-pointer text-sm text-white-A700 tracking-[-0.50px]"
                    size="txtInterRegular14"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col md:gap-10 gap-[130px] items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1291px] mx-auto md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[120px] items-start justify-start">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-0.50px] w-full"
                size="txtInterSemiBold48Black900"
              >
                Enter your new password to update the old password
              </Text>
              <Text
                className="leading-[35.00px] text-black-900_87 text-lg tracking-[-0.50px] w-[88%] sm:w-full"
                size="txtInterRegular18Black90087"
              >
                <>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s, when an unknown
                </>
              </Text>
            </div>
            <div className="bg-white-A700 border border-bluegray-900 border-solid flex md:flex-1 flex-col items-center justify-start p-[51px] md:px-10 sm:px-5 w-[41%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start mb-[3px] rounded-[10px] w-[94%] md:w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]"
                  size="txtInterSemiBold36Black900"
                >
                  Neuzy
                </Text>
                <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                  <div className="flex flex-col font-poppins gap-[23px] items-center justify-start pt-[3px] rounded-[10px] w-full">
                    <div className="flex flex-col gap-3.5 items-start justify-start rounded-[10px] w-full">
                      <Text
                        className="text-black-900 text-sm tracking-[0.07px]"
                        size="txtPoppinsRegular14"
                      >
                        Password
                      </Text>
                      <Input
                        name="Input"
                        placeholder="Enter your Password"
                        className="p-0 placeholder:text-bluegray-400 text-base text-left tracking-[0.08px] w-full"
                        wrapClassName="w-full"
                        type="password"
                        shape="round"
                        color="black_900"
                        size="md"
                        variant="outline"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-3.5 items-start justify-start rounded-[10px] w-full">
                      <Text
                        className="text-black-900 text-sm tracking-[0.07px]"
                        size="txtPoppinsRegular14"
                      >
                        Confirm Password
                      </Text>
                      <Input
                        name="Input One"
                        placeholder="Enter your Password"
                        className="p-0 placeholder:text-bluegray-400 text-base text-left tracking-[0.08px] w-full"
                        wrapClassName="w-full"
                        type="password"
                        shape="round"
                        color="black_900"
                        size="md"
                        variant="outline"
                      ></Input>
                    </div>
                  </div>
                  <Button
                    className="common-pointer cursor-pointer font-medium font-poppins min-w-[400px] sm:min-w-full rounded-[10px] text-base text-center tracking-[0.08px]"
                    onClick={() => navigate("/login")}
                    shape="round"
                    color="bluegray_900"
                    size="2xl"
                  >
                    Submit
                  </Button>
                  <Text
                    className="md:ml-[0] ml-[50px] text-black-900 text-sm tracking-[-0.50px]"
                    size="txtInterRegular14Black900"
                  >
                    <span className="text-black-900 font-inter text-left font-normal">
                      Do you already have an account??{" "}
                    </span>
                    <span className="text-bluegray-900 font-inter text-left font-normal">
                      Login Now
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <footer className="flex items-center justify-center md:px-5 w-full">
            <div className="bg-black-900 flex flex-col items-center justify-center p-[60px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-[53px] items-center justify-center w-[98%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex flex-col gap-[22px] items-start justify-start">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.50px]"
                      size="txtInterSemiBold24WhiteA700"
                    >
                      Neuzy
                    </Text>
                    <Text
                      className="leading-[35.00px] text-sm text-white-A700 tracking-[-0.50px] w-full"
                      size="txtInterRegular14"
                    >
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit.
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-row items-start justify-between pt-2.5 w-[57%] md:w-full">
                    <div className="flex flex-col gap-[25px] items-start justify-start w-[10%]">
                      <Text
                        className="text-sm text-white-A700 tracking-[-0.50px]"
                        size="txtInterBold14"
                      >
                        World
                      </Text>
                      <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA700"
                        >
                          Politcts
                        </Text>
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA700"
                        >
                          Health
                        </Text>
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA700"
                        >
                          Business
                        </Text>
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA700"
                        >
                          Tech
                        </Text>
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA700"
                        >
                          Entertaiment
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[25px] items-start justify-start w-[8%]">
                      <Text
                        className="text-sm text-white-A700 tracking-[-0.50px]"
                        size="txtInterBold14"
                      >
                        Tech
                      </Text>
                      <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA700"
                        >
                          Siance
                        </Text>
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA700"
                        >
                          Magazine
                        </Text>
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA700"
                        >
                          Start up
                        </Text>
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA700"
                        >
                          Crypto
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[26px] items-start justify-start w-[5%]">
                      <Text
                        className="text-sm text-white-A700 tracking-[-0.50px]"
                        size="txtInterBold14"
                      >
                        Life
                      </Text>
                      <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA700"
                        >
                          Food
                        </Text>
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA700"
                        >
                          Style
                        </Text>
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA700"
                        >
                          Sport
                        </Text>
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA700"
                        >
                          Movie
                        </Text>
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA700"
                        >
                          Music
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 items-start justify-start w-[9%]">
                      <Text
                        className="text-sm text-white-A700 tracking-[-0.50px]"
                        size="txtInterBold14"
                      >
                        Magezine
                      </Text>
                      <div className="flex flex-col gap-[18px] items-start justify-start">
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA700"
                        >
                          Fasion
                        </Text>
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA700"
                        >
                          Blogger
                        </Text>
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA700"
                        >
                          People
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[25px] items-start justify-start w-[14%]">
                      <Text
                        className="text-sm text-white-A700 tracking-[-0.50px]"
                        size="txtInterBold14"
                      >
                        Other
                      </Text>
                      <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA700"
                        >
                          About
                        </Text>
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA700"
                        >
                          Contact us
                        </Text>
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA700"
                        >
                          Terms & Conditions
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                  <Line className="bg-white-A700 h-px w-full" />
                  <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                    <Text
                      className="mt-1 text-sm text-white-A700 tracking-[-0.50px]"
                      size="txtInterRegular14"
                    >
                      Copyright © Neuzy | All Rights Reserved
                    </Text>
                    <Img
                      className="h-6"
                      src="images/img_group20875.svg"
                      alt="Group20875"
                    />
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default UpdatePasswordPage;
