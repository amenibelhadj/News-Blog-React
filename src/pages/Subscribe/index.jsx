import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

const SubscribePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter gap-[50px] items-center justify-start mx-auto w-full">
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
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-10 items-center justify-start max-w-[944px] mx-auto md:px-5 w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center tracking-[-0.50px] w-3/4 sm:w-full"
              size="txtInterSemiBold36Black900"
            >
              Subscribe now for the latest and exclusive information alerts
            </Text>
            <Text
              className="leading-[35.00px] text-black-900_7f text-center text-lg tracking-[-0.50px] w-full"
              size="txtInterRegular18Black9007f"
            >
              <>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#39;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </>
            </Text>
          </div>
          <div className="flex flex-col font-poppins gap-[50px] items-center justify-start max-w-[1140px] mt-[50px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex flex-row gap-[30px] items-center justify-center sm:pr-5 pr-[39px] rounded-[22px] w-1/5 md:w-full">
              <Button
                className="cursor-pointer leading-[normal] min-w-[111px] text-[10px] text-center tracking-[0.83px]"
                shape="round"
                color="bluegray_900"
                size="xl"
              >
                MONTHLY
              </Button>
              <Text
                className="text-[10px] text-black-900 tracking-[0.83px]"
                size="txtPoppinsRegular10"
              >
                YEARLY
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[60px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <div className="border border-bluegray-900 border-solid flex flex-1 flex-col items-start justify-end p-9 sm:px-5 w-full">
                <Text
                  className="ml-1 md:ml-[0] mt-[11px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                  size="txtPoppinsRegular28"
                >
                  Starter
                </Text>
                <div className="flex flex-row items-end justify-start ml-1 md:ml-[0] mt-7 w-[52%] md:w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]"
                    size="txtInterSemiBold36Black900"
                  >
                    $20
                  </Text>
                  <Text
                    className="ml-[5px] mt-[17px] text-[17px] text-black-900_87"
                    size="txtPoppinsRegular17"
                  >
                    /month
                  </Text>
                </div>
                <Line className="bg-gray-200 h-px ml-1 md:ml-[0] mt-4 w-[98%]" />
                <div className="flex flex-col font-poppins items-start justify-start ml-1 md:ml-[0] mt-6">
                  <Text
                    className="text-[15px] text-black-900_a2"
                    size="txtPoppinsRegular15"
                  >
                    Access All News
                  </Text>
                  <Text
                    className="mt-6 text-[15px] text-black-900_a2"
                    size="txtPoppinsRegular15"
                  >
                    Latest News Notification
                  </Text>
                  <Text
                    className="mt-[25px] text-[15px] text-black-900_a2"
                    size="txtPoppinsRegular15"
                  >
                    Send News Articles
                  </Text>
                  <Text
                    className="mt-[25px] text-[15px] text-black-900_a2"
                    size="txtPoppinsRegular15"
                  >
                    Latest Movie Recommendation
                  </Text>
                  <Text
                    className="mt-[27px] text-[15px] text-black-900_a2"
                    size="txtPoppinsRegular15"
                  >
                    Updated News
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-inter leading-[normal] min-w-[260px] ml-1 md:ml-[0] mt-6 text-center text-lg tracking-[-0.50px]"
                  shape="square"
                  color="bluegray_900"
                  size="xl"
                  variant="outline"
                >
                  Subscribe
                </Button>
              </div>
              <div className="border border-bluegray-900 border-solid flex flex-1 flex-col gap-[50px] items-center justify-end p-9 sm:px-5 w-full">
                <Text
                  className="mt-[7px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                  size="txtPoppinsRegular28"
                >
                  MOST POPULAR
                </Text>
                <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                    size="txtPoppinsRegular28"
                  >
                    Pro
                  </Text>
                  <div className="flex flex-row gap-2 items-end justify-start mt-7 w-[62%] md:w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]"
                      size="txtInterSemiBold36Black900"
                    >
                      $100
                    </Text>
                    <Text
                      className="mt-[17px] text-[17px] text-black-900_87"
                      size="txtPoppinsRegular17"
                    >
                      /month
                    </Text>
                  </div>
                  <Line className="bg-gray-200 h-px mt-4 w-full" />
                  <div className="flex flex-col font-poppins items-start justify-start mt-6">
                    <Text
                      className="text-[15px] text-black-900_a2"
                      size="txtPoppinsRegular15"
                    >
                      Access All News
                    </Text>
                    <Text
                      className="mt-6 text-[15px] text-black-900_a2"
                      size="txtPoppinsRegular15"
                    >
                      Latest News Notification
                    </Text>
                    <Text
                      className="mt-[25px] text-[15px] text-black-900_a2"
                      size="txtPoppinsRegular15"
                    >
                      Send News Articles
                    </Text>
                    <Text
                      className="mt-[25px] text-[15px] text-black-900_a2"
                      size="txtPoppinsRegular15"
                    >
                      Latest Movie Recommendation
                    </Text>
                    <Text
                      className="mt-[27px] text-[15px] text-black-900_a2"
                      size="txtPoppinsRegular15"
                    >
                      Updated News
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-inter leading-[normal] min-w-[260px] mt-6 text-center text-lg tracking-[-0.50px]"
                    shape="square"
                    color="bluegray_900"
                    size="xl"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
              <div className="border border-bluegray-900 border-solid flex flex-1 flex-col items-start justify-end p-9 sm:px-5 w-full">
                <Text
                  className="ml-1 md:ml-[0] mt-[13px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                  size="txtPoppinsRegular28"
                >
                  Enterprise
                </Text>
                <div className="flex flex-row items-end justify-start ml-1 md:ml-[0] mt-[22px] w-[61%] md:w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]"
                    size="txtInterSemiBold36Black900"
                  >
                    $200
                  </Text>
                  <Text
                    className="ml-[3px] mt-[17px] text-[17px] text-black-900_87"
                    size="txtPoppinsRegular17"
                  >
                    /month
                  </Text>
                </div>
                <Line className="bg-gray-200 h-px ml-1 md:ml-[0] mt-4 w-[98%]" />
                <div className="flex flex-col font-poppins items-start justify-start ml-1 md:ml-[0] mt-6">
                  <Text
                    className="text-[15px] text-black-900_a2"
                    size="txtPoppinsRegular15"
                  >
                    Access All News
                  </Text>
                  <Text
                    className="mt-6 text-[15px] text-black-900_a2"
                    size="txtPoppinsRegular15"
                  >
                    Latest News Notification
                  </Text>
                  <Text
                    className="mt-[25px] text-[15px] text-black-900_a2"
                    size="txtPoppinsRegular15"
                  >
                    Send News Articles
                  </Text>
                  <Text
                    className="mt-[25px] text-[15px] text-black-900_a2"
                    size="txtPoppinsRegular15"
                  >
                    Latest Movie Recommendation
                  </Text>
                  <Text
                    className="mt-[27px] text-[15px] text-black-900_a2"
                    size="txtPoppinsRegular15"
                  >
                    Updated News
                  </Text>
                </div>
                <Text
                  className="border border-bluegray-900 border-solid ml-1 md:ml-[0] mt-6 sm:px-5 px-[35px] py-[15px] text-bluegray-900 text-lg tracking-[-0.50px]"
                  size="txtInterRegular18"
                >
                  Contact
                </Text>
              </div>
            </List>
          </div>
          <div className="flex flex-col font-inter items-center justify-start max-w-[1294px] mt-[120px] mx-auto pb-[34px] md:px-5 w-full">
            <div className="flex flex-col gap-[49px] items-center justify-start w-full">
              <div className="flex flex-col gap-7 items-center justify-start rounded-lg w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between rounded-lg w-full">
                  <Text
                    className="mb-0.5 text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]"
                    size="txtInterSemiBold36Black900"
                  >
                    Hot Topic News{" "}
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[122px] sm:mt-0 mt-[5px] text-center text-sm tracking-[-0.50px]"
                    onClick={() => navigate("/allblog")}
                    shape="round"
                    color="bluegray_900"
                    size="lg"
                  >
                    View All
                  </Button>
                </div>
                <Line className="bg-black-900_7f h-px w-full" />
              </div>
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[22px] items-start justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[246px] items-center justify-start w-full"
                      style={{
                        backgroundImage: "url('images/img_group38_13.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[162px] justify-end p-[17px] w-full">
                        <Input
                          name="language One"
                          placeholder="Entertaiment "
                          className="font-bold leading-[normal] p-0 placeholder:text-white-A700 text-left text-xs tracking-[0.12px] w-full"
                          wrapClassName="md:ml-[0] ml-[267px] mr-1.5 mt-1.5 w-[29%]"
                        ></Input>
                        <Text
                          className="mr-[267px] text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA700"
                        >
                          Ukraine, 24 april 2022
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-lg tracking-[-0.50px] w-full"
                        size="txtInterSemiBold18Black900"
                      >
                        Zelensky accuses Russia of worst crimes since WW2{" "}
                      </Text>
                      <Text
                        className="leading-[25.00px] text-black-900_87 text-xs tracking-[-0.50px] w-full"
                        size="txtPoppinsRegular12"
                      >
                        The Ukrainian leader says Russia must face an
                        international trial as he calls for the country to be
                        thrown off the UN Security Council.
                      </Text>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[151px] ml-3 md:ml-[0]"
                      onClick={() => navigate("/sigleblog")}
                      rightIcon={
                        <Img
                          className="h-[18px] ml-[5px] mr-[30px] my-2.5"
                          src="images/img_upload.svg"
                          alt="upload"
                        />
                      }
                      shape="round"
                    >
                      <div className="leading-[normal] text-left text-sm tracking-[-0.50px]">
                        Read More
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[247px] items-center justify-start w-full"
                      style={{
                        backgroundImage: "url('images/img_group38_14.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[167px] justify-end p-4 w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[78px] md:ml-[0] ml-[300px] mr-2 mt-2 text-center text-xs tracking-[0.12px]"
                          shape="square"
                          color="orange_A700"
                          size="xs"
                        >
                          Finance
                        </Button>
                        <Text
                          className="mr-[269px] text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA700"
                        >
                          Ukraine, 24 april 2022
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-lg tracking-[-0.50px] w-full"
                        size="txtInterSemiBold18Black900"
                      >
                        Zelensky accuses Russia of worst crimes since WW2{" "}
                      </Text>
                      <Text
                        className="leading-[25.00px] text-black-900_87 text-xs tracking-[-0.50px] w-full"
                        size="txtPoppinsRegular12"
                      >
                        The Ukrainian leader says Russia must face an
                        international trial as he calls for the country to be
                        thrown off the UN Security Council.
                      </Text>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[151px]"
                      onClick={() => navigate("/sigleblog")}
                      rightIcon={
                        <Img
                          className="h-[18px] ml-[5px] mr-[30px] my-2.5"
                          src="images/img_upload.svg"
                          alt="upload"
                        />
                      }
                      shape="round"
                    >
                      <div className="leading-[normal] text-left text-sm tracking-[-0.50px]">
                        Read More
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[22px] items-start justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[246px] items-center justify-start w-full"
                      style={{
                        backgroundImage: "url('images/img_group38_15.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[162px] justify-end p-[17px] w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[78px] md:ml-[0] ml-[298px] mr-1.5 mt-1.5 text-center text-xs tracking-[0.12px]"
                          shape="square"
                          color="red_900"
                          size="xs"
                        >
                          Political
                        </Button>
                        <Text
                          className="mr-[267px] text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA700"
                        >
                          Ukraine, 24 april 2022
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-lg tracking-[-0.50px] w-full"
                        size="txtInterSemiBold18Black900"
                      >
                        Zelensky accuses Russia of worst crimes since WW2{" "}
                      </Text>
                      <Text
                        className="leading-[25.00px] text-black-900_87 text-xs tracking-[-0.50px] w-full"
                        size="txtPoppinsRegular12"
                      >
                        The Ukrainian leader says Russia must face an
                        international trial as he calls for the country to be
                        thrown off the UN Security Council.
                      </Text>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[151px]"
                      onClick={() => navigate("/sigleblog")}
                      rightIcon={
                        <Img
                          className="h-[18px] ml-[5px] mr-[30px] my-2.5"
                          src="images/img_upload.svg"
                          alt="upload"
                        />
                      }
                      shape="round"
                    >
                      <div className="leading-[normal] text-left text-sm tracking-[-0.50px]">
                        Read More
                      </div>
                    </Button>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <footer className="flex font-inter items-center justify-center mt-[120px] md:px-5 w-full">
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
                    <div className="flex flex-col gap-[25px] items-start justify-start w-[5%]">
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
                    <div className="flex flex-col gap-[23px] items-start justify-start w-[9%]">
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
                    <div className="flex flex-col gap-[26px] items-start justify-start w-[14%]">
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

export default SubscribePage;
