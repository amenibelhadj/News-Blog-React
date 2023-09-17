import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Input, Line, List, Text } from "components";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col gap-[50px] items-center justify-start w-full">
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
                      className="text-sm text-white-A700 tracking-[-0.50px]"
                      size="txtInterRegular14"
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
          <div className="flex flex-col md:gap-10 gap-[120px] items-start justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-24 items-center justify-start md:px-5 w-[95%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[78px] justify-start w-[55%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[75px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-0.50px] w-[86%] sm:w-full"
                  size="txtInterSemiBold48Black900"
                >
                  Welcome back, there is the latest news today !!
                </Text>
                <div className="h-[394px] md:h-[641px] relative w-full">
                  <div className="absolute flex md:flex-col flex-row gap-5 h-full inset-[0] items-start justify-center m-auto pb-[23px] sm:pl-5 pl-[23px] w-[97%]">
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[304px] w-[33%] md:w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[181px] items-center justify-start w-full"
                          style={{
                            backgroundImage: "url('images/img_group38_13.png')",
                          }}
                        >
                          <div className="bg-gradient  flex flex-col md:gap-10 gap-[108px] justify-start p-[13px] w-full">
                            <Input
                              name="language"
                              placeholder="Entertaiment "
                              className="font-bold leading-[normal] md:h-auto p-0 placeholder:text-white-A700 sm:h-auto text-[10px] text-left tracking-[-0.50px] w-full"
                              wrapClassName="md:ml-[0] ml-[177px] mr-0.5 mt-0.5 w-[36%]"
                            ></Input>
                            <Text
                              className="mb-1 text-[10px] text-white-A700 tracking-[-0.50px]"
                              size="txtInterSemiBold10"
                            >
                              Ukraine, 24 april 2022
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                          <Text
                            className="text-black-900 text-sm tracking-[-0.50px] w-full"
                            size="txtInterSemiBold14"
                          >
                            Zelensky accuses Russia of worst crimes since WW2{" "}
                          </Text>
                          <Text
                            className="leading-[25.00px] text-[10px] text-black-900_87 tracking-[-0.50px] w-full"
                            size="txtPoppinsRegular10Black90087"
                          >
                            The Ukrainian leader says Russia must face an
                            international trial as he calls for the country to
                            be thrown off the UN Security Council. Lorem ipsom
                            dolor
                          </Text>
                        </div>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[138px]"
                          rightIcon={
                            <Img
                              className="h-[15px] ml-[5px] mr-[30px] my-2.5"
                              src="images/img_upload.svg"
                              alt="upload"
                            />
                          }
                          shape="round"
                        >
                          <div className="leading-[normal] text-left text-xs tracking-[-0.50px]">
                            Read More
                          </div>
                        </Button>
                      </div>
                    </div>
                    <List
                      className="sm:flex-col flex-row md:gap-10 gap-[348px] grid grid-cols-2 w-[33%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[181px] items-center justify-start w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_background_181X308.png')",
                            }}
                          >
                            <div className="bg-gradient  flex flex-col md:gap-10 gap-[108px] justify-start p-[13px] w-full">
                              <Input
                                name="language Two"
                                placeholder="Entertaiment "
                                className="font-bold leading-[normal] md:h-auto p-0 placeholder:text-white-A700 sm:h-auto text-[10px] text-left tracking-[-0.50px] w-full"
                                wrapClassName="md:ml-[0] ml-[177px] mr-0.5 mt-0.5 w-[36%]"
                              ></Input>
                              <Text
                                className="mb-1 mr-[171px] text-[10px] text-white-A700 tracking-[-0.50px]"
                                size="txtInterSemiBold10"
                              >
                                Ukraine, 24 april 2022
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                            <Text
                              className="text-black-900 text-sm tracking-[-0.50px] w-full"
                              size="txtInterSemiBold14"
                            >
                              Zelensky accuses Russia of worst crimes since WW2{" "}
                            </Text>
                            <Text
                              className="leading-[25.00px] text-[10px] text-black-900_87 tracking-[-0.50px] w-full"
                              size="txtPoppinsRegular10Black90087"
                            >
                              The Ukrainian leader says Russia must face an
                              international trial as he calls for the country to
                              be thrown off the UN Security Council. Lorem ipsom
                              dolor
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[138px]"
                            rightIcon={
                              <Img
                                className="h-[15px] ml-[5px] mr-[30px] my-2.5"
                                src="images/img_upload_white_A700.png"
                                alt="upload"
                              />
                            }
                            shape="round"
                          >
                            <div className="leading-[normal] text-left text-xs tracking-[-0.50px]">
                              Read More
                            </div>
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[181px] items-center justify-start w-full"
                          style={{
                            backgroundImage: "url('images/img_group38_13.png')",
                          }}
                        >
                          <div className="bg-gradient  flex flex-col md:gap-10 gap-[108px] justify-start p-[13px] w-full">
                            <Input
                              name="language Three"
                              placeholder="Entertaiment "
                              className="font-bold leading-[normal] md:h-auto p-0 placeholder:text-white-A700 sm:h-auto text-[10px] text-left tracking-[-0.50px] w-full"
                              wrapClassName="md:ml-[0] ml-[177px] mr-0.5 mt-0.5 w-[36%]"
                            ></Input>
                            <Text
                              className="mb-1 text-[10px] text-white-A700 tracking-[-0.50px]"
                              size="txtInterSemiBold10"
                            >
                              Ukraine, 24 april 2022
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                          <Text
                            className="text-black-900 text-sm tracking-[-0.50px] w-full"
                            size="txtInterSemiBold14"
                          >
                            Zelensky accuses Russia of worst crimes since WW2{" "}
                          </Text>
                          <Text
                            className="leading-[25.00px] text-[10px] text-black-900_87 tracking-[-0.50px] w-full"
                            size="txtPoppinsRegular10Black90087"
                          >
                            The Ukrainian leader says Russia must face an
                            international trial as he calls for the country to
                            be thrown off the UN Security Council. Lorem ipsom
                            dolor
                          </Text>
                        </div>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[138px]"
                          rightIcon={
                            <Img
                              className="h-[15px] ml-[5px] mr-[30px] my-2.5"
                              src="images/img_upload.svg"
                              alt="upload"
                            />
                          }
                          shape="round"
                        >
                          <div className="leading-[normal] text-left text-xs tracking-[-0.50px]">
                            Read More
                          </div>
                        </Button>
                      </div>
                    </List>
                  </div>
                  <Button
                    className="absolute border-2 border-solid border-white-A700 flex h-[60px] inset-y-[0] items-center justify-center my-auto right-[0] rotate-[180deg] w-[60px]"
                    shape="circle"
                    color="white_A700"
                    size="xl"
                  >
                    <Img
                      className="h-[27px]"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 border border-bluegray-900 border-solid flex flex-col items-center justify-start md:mt-0 my-1 p-[45px] md:px-10 sm:px-5 w-[39%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start mb-1 w-[92%] md:w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]"
                    size="txtInterSemiBold36Black900"
                  >
                    Neuzy
                  </Text>
                  <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                    <div className="flex flex-col font-poppins items-center justify-start pt-[3px] w-full">
                      <div className="flex flex-col gap-3.5 items-start justify-start rounded-[10px] w-full">
                        <Text
                          className="text-black-900 text-sm tracking-[0.07px]"
                          size="txtPoppinsRegular14"
                        >
                          Email
                        </Text>
                        <Input
                          name="Input"
                          placeholder="Enter your email"
                          className="p-0 placeholder:text-bluegray-400 text-base text-left tracking-[0.08px] w-full"
                          wrapClassName="w-full"
                          type="email"
                          shape="round"
                          color="black_900"
                          size="md"
                          variant="outline"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-3.5 items-start justify-start mt-[23px] rounded-[10px] w-full">
                        <Text
                          className="text-black-900 text-sm tracking-[0.07px]"
                          size="txtPoppinsRegular14"
                        >
                          Password
                        </Text>
                        <Input
                          name="Input One"
                          placeholder="Enter your password"
                          className="p-0 placeholder:text-bluegray-400 text-base text-left tracking-[0.08px] w-full"
                          wrapClassName="w-full"
                          type="password"
                          shape="round"
                          color="black_900"
                          size="md"
                          variant="outline"
                        ></Input>
                      </div>
                      <div className="flex flex-row items-end justify-between mt-5 w-full">
                        <CheckBox
                          className="font-medium text-base text-left tracking-[0.08px]"
                          inputClassName="h-6 mr-[5px] w-6"
                          name="H4"
                          id="H4"
                          label="Remember me?"
                        ></CheckBox>
                        <Text
                          className="common-pointer mt-1.5 text-base text-black-900 tracking-[0.08px]"
                          size="txtPoppinsMedium16"
                          onClick={() => navigate("/forgotpassword")}
                        >
                          Forgot password
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer font-medium font-poppins min-w-[400px] sm:min-w-full rounded-[10px] text-base text-center tracking-[0.08px]"
                      onClick={() => navigate("/")}
                      shape="round"
                      color="bluegray_900"
                      size="2xl"
                    >
                      Login
                    </Button>
                    <Text
                      className="common-pointer text-black-900 text-sm tracking-[-0.50px]"
                      size="txtInterRegular14Black900"
                      onClick={() => navigate("/register")}
                    >
                      <span className="text-black-900 font-inter text-left font-normal">
                        <>Don&#39;t have an account? </>
                      </span>
                      <span className="text-bluegray-900 font-inter text-left font-normal">
                        Register here
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
      </div>
    </>
  );
};

export default LoginPage;
