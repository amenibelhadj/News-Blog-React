import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Text,
} from "components";

const HomepagePage = () => {
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
        <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start max-w-[1292px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[50px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between w-full">
                <Img
                  className="h-[255px] md:h-auto object-cover"
                  src="images/img_rectangle5.png"
                  alt="RectangleFive"
                />
                <div className="flex flex-col gap-[45px] items-start justify-start">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row gap-2.5 items-start justify-start w-[16%] md:w-full">
                      <div className="bg-bluegray-900 h-[15px] my-[3px] rounded-[50%] w-[15px]"></div>
                      <Text
                        className="text-bluegray-900 text-lg tracking-[-0.50px]"
                        size="txtInterRegular18"
                      >
                        Hot Topic
                      </Text>
                    </div>
                    <Text
                      className="mt-[23px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px] w-full"
                      size="txtInterBold36"
                    >
                      Miami Dolphins won the match and officially qualified for
                      the final
                    </Text>
                    <div className="flex flex-row items-center justify-start mt-[38px] w-[55%] md:w-full">
                      <Text
                        className="text-black-900 text-lg tracking-[-0.50px]"
                        size="txtInterSemiBold18Black900"
                      >
                        New York, 22 Agust 2022{" "}
                      </Text>
                      <Text
                        className="ml-1 text-lg text-white-A700_87 tracking-[-0.50px]"
                        size="txtInterSemiBold18WhiteA70087"
                      >
                        <span className="text-white-A700 font-inter text-left font-semibold">
                          -{" "}
                        </span>
                        <span className="text-white-A700 font-inter text-left font-normal">
                          10 minutes ago
                        </span>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[13px] items-end justify-start w-[17%] md:w-full">
                    <Text
                      className="text-bluegray-900 text-sm tracking-[-0.50px]"
                      size="txtInterRegular14Bluegray900"
                    >
                      Read More
                    </Text>
                    <Img
                      className="h-px mb-[5px] mt-[11px] w-1/4"
                      src="images/img_arrow1.svg"
                      alt="ArrowOne"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[55px] items-center justify-between w-full">
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[55px] grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between sm:ml-[0] w-full">
                    <Img
                      className="h-[84px] md:h-auto object-cover w-[84px]"
                      src="images/img_rectangle1479.png"
                      alt="Rectangle1479"
                    />
                    <div className="flex flex-col gap-[25px] items-start justify-start">
                      <Text
                        className="text-black-900 text-lg tracking-[-0.50px] w-full"
                        size="txtInterBold18"
                      >
                        How to maximize investment with mutual funds
                      </Text>
                      <div className="flex flex-row gap-[7px] items-center justify-start w-[78%] md:w-full">
                        <Text
                          className="text-black-900 text-xs tracking-[-0.50px]"
                          size="txtInterSemiBold12"
                        >
                          Indonesia, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="text-black-900_87 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12"
                        >
                          - 15 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between sm:ml-[0] w-full">
                    <Img
                      className="h-[84px] md:h-auto object-cover w-[84px]"
                      src="images/img_rectangle1479_84X84.png"
                      alt="Rectangle1479 One"
                    />
                    <div className="flex flex-col gap-[25px] items-start justify-start">
                      <Text
                        className="text-black-900 text-lg tracking-[-0.50px] w-full"
                        size="txtInterBold18"
                      >
                        john kennedy won 3rd oscar trophy at los angles
                      </Text>
                      <div className="flex flex-row items-center justify-start w-4/5 md:w-full">
                        <Text
                          className="text-black-900 text-xs tracking-[-0.50px]"
                          size="txtInterSemiBold12"
                        >
                          Los Angles, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="ml-1 text-black-900_87 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12"
                        >
                          - 22 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex md:flex-1 sm:flex-col flex-row gap-2.5 items-center justify-between w-[31%] md:w-full">
                  <Img
                    className="h-[84px] md:h-auto object-cover w-[84px]"
                    src="images/img_rectangle1479_1.png"
                    alt="Rectangle1479 Two"
                  />
                  <div className="flex flex-col gap-[25px] items-start justify-start">
                    <Text
                      className="text-black-900 text-lg tracking-[-0.50px] w-full"
                      size="txtInterBold18"
                    >
                      Miami Dolphins won the match and officially qualified for
                      the final
                    </Text>
                    <div className="flex flex-row items-center justify-start w-[77%] md:w-full">
                      <Text
                        className="text-black-900 text-xs tracking-[-0.50px]"
                        size="txtInterSemiBold12"
                      >
                        New York, 22 Agust 2022{" "}
                      </Text>
                      <Text
                        className="ml-1 text-black-900_87 text-xs tracking-[-0.50px]"
                        size="txtInterRegular12"
                      >
                        - 10 minutes ago
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1292px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between rounded-lg w-full">
              <Text
                className="mb-0.5 text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]"
                size="txtInterSemiBold36Black900"
              >
                Latest Release
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
            <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start w-[43%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[270px] items-center justify-start w-full"
                  style={{ backgroundImage: "url('images/img_group38.png')" }}
                >
                  <div className="bg-gradient  flex flex-col md:gap-10 gap-[189px] justify-end p-[15px] w-full">
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[88px] md:ml-[0] ml-[423px] mr-[9px] mt-[9px] text-center text-xs tracking-[0.12px]"
                      shape="square"
                      color="deep_orange_A400"
                      size="xs"
                    >
                      Hot Topic
                    </Button>
                    <Text
                      className="ml-2 md:ml-[0] mr-[376px] text-sm text-white-A700 tracking-[-0.50px]"
                      size="txtInterRegular14"
                    >
                      Ukraine, 24 april 2022
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-center justify-start mt-[27px] w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px] w-full"
                    size="txtInterSemiBold24"
                  >
                    Zelensky accuses Russia of worst crimes since WW2{" "}
                  </Text>
                  <Text
                    className="leading-[35.00px] text-black-900_87 text-sm tracking-[-0.50px] w-full"
                    size="txtInterRegular14Black90087"
                  >
                    The Ukrainian leader says Russia must face an international
                    trial as he calls for the country to be thrown off the UN
                    Security Council.
                  </Text>
                </div>
                <Button
                  className="common-pointer cursor-pointer flex items-center justify-center min-w-[177px] mt-[23px]"
                  onClick={() => navigate("/sigleblog")}
                  rightIcon={
                    <Img
                      className="h-6 ml-[5px] mr-[30px] my-2.5"
                      src="images/img_upload.svg"
                      alt="upload"
                    />
                  }
                  shape="round"
                >
                  <div className="leading-[normal] text-left text-lg tracking-[-0.50px]">
                    Read More
                  </div>
                </Button>
              </div>
              <List
                className="flex flex-col gap-[50px] w-[54%]"
                orientation="vertical"
              >
                <div className="flex md:flex-col flex-row gap-[22px] items-center justify-between my-0 w-full">
                  <Img
                    className="h-[229px] md:h-auto object-cover"
                    src="images/img_unsplashj5keq1.png"
                    alt="unsplashj5kEQOne"
                  />
                  <div className="flex flex-col gap-5 items-start justify-start rounded-lg">
                    <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-sm tracking-[-0.50px]"
                        size="txtInterRegular14Black900"
                      >
                        New York, 19 april 2022
                      </Text>
                      <div className="flex flex-col font-poppins gap-2.5 items-center justify-start w-full">
                        <Text
                          className="text-black-900 text-xl tracking-[-0.50px] w-full"
                          size="txtPoppinsSemiBold20"
                        >
                          Jhon Lorni has won 1st place in international match
                        </Text>
                        <Text
                          className="leading-[25.00px] text-black-900_87 text-xs tracking-[-0.50px] w-full"
                          size="txtPoppinsRegular12"
                        >
                          this is his first victory in the international
                          olympics, so his name is quite explosive on the
                          international scene
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px]"
                      onClick={() => navigate("/sigleblog")}
                      rightIcon={
                        <Img
                          className="h-5 ml-[5px] mr-[30px] my-2.5"
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
                <div className="flex md:flex-col flex-row gap-[22px] items-center justify-between my-0 w-full">
                  <Img
                    className="h-[229px] md:h-auto object-cover"
                    src="images/img_unsplashl2p8f.png"
                    alt="unsplashL2p8f"
                  />
                  <div className="flex flex-col gap-5 items-start justify-start rounded-lg">
                    <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-sm tracking-[-0.50px]"
                        size="txtInterRegular14Black900"
                      >
                        Amsterdam, 23 april 2022
                      </Text>
                      <div className="flex flex-col font-poppins gap-2.5 items-center justify-start w-full">
                        <Text
                          className="text-black-900 text-xl tracking-[-0.50px] w-full"
                          size="txtPoppinsSemiBold20"
                        >
                          The extinction of the Arabian turtle made the
                          government...
                        </Text>
                        <Text
                          className="leading-[25.00px] text-black-900_87 text-xs tracking-[-0.50px] w-full"
                          size="txtPoppinsRegular12"
                        >
                          The jalabiya turtle is a very unique species because
                          it is thought to have existed from ancient times, but
                          has begun to become..
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px]"
                      onClick={() => navigate("/sigleblog")}
                      rightIcon={
                        <Img
                          className="h-5 ml-[5px] mr-[30px] my-2.5"
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
          <div className="flex flex-col gap-[50px] items-center justify-start w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center tracking-[-0.50px] w-[39%] sm:w-full"
              size="txtInterSemiBold36Black900"
            >
              <>The Audience&#39;s choice of the Best Films</>
            </Text>
            <div className="flex flex-col md:px-5 relative w-full">
              <div className="flex flex-col items-center justify-start mx-auto w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[700px] items-center justify-start w-full"
                  style={{ backgroundImage: "url('images/img_slider.png')" }}
                >
                  <div className="bg-gradient1  flex flex-row items-center justify-start p-[75px] md:px-10 sm:px-5 w-full">
                    <div className="flex flex-row items-start justify-between mb-[142px] mt-[245px] w-full">
                      <Img
                        className="h-[60px] mb-[103px] w-[60px]"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                      <PagerIndicator
                        className="flex h-[15px] mt-[148px] w-[115px]"
                        count={5}
                        activeCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-white-A700 w-[15px]"
                        activeIndex={1}
                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-white-A700_4f w-[15px]"
                        selectedWrapperCss="inline-block mx-[5.00px]"
                        unselectedWrapperCss="inline-block mx-[5.00px]"
                      />
                      <Button
                        className="border-2 border-solid border-white-A700 flex h-[60px] items-center justify-center mb-[103px] rotate-[180deg] w-[60px]"
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
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[-197px] mx-auto w-[90%] z-[1]"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-col gap-5 items-center justify-start sm:ml-[0] pb-[22px] rounded-[10px] w-full">
                  <Img
                    className="h-[307px] sm:h-auto object-cover rounded-[10px] w-[308px] md:w-full"
                    src="images/img_rectangle17.png"
                    alt="RectangleSeventeen"
                  />
                  <div className="flex flex-col gap-[13px] items-center justify-start w-[65%] md:w-full">
                    <Text
                      className="text-black-900 text-lg tracking-[-0.50px]"
                      size="txtInterSemiBold18Black900"
                    >
                      Avengers Age of Ultron
                    </Text>
                    <Text
                      className="text-black-900_7f text-sm tracking-[-0.50px]"
                      size="txtInterRegular14Black9007f"
                    >
                      Genres : Action Adventure Sci-Fi
                    </Text>
                    <Img
                      className="h-5 w-1/2"
                      src="images/img_group51.svg"
                      alt="GroupFiftyOne"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-5 items-center justify-start sm:ml-[0] pb-[22px] rounded-[10px] w-full">
                  <Img
                    className="h-[307px] sm:h-auto object-cover rounded-[10px] w-[308px] md:w-full"
                    src="images/img_rectangle17_307X308.png"
                    alt="RectangleSeventeen One"
                  />
                  <div className="flex flex-col gap-[13px] items-center justify-start w-[65%] md:w-full">
                    <Text
                      className="text-black-900 text-lg tracking-[-0.50px]"
                      size="txtInterSemiBold18Black900"
                    >
                      Captain Marvel
                    </Text>
                    <Text
                      className="text-black-900_7f text-sm tracking-[-0.50px]"
                      size="txtInterRegular14Black9007f"
                    >
                      Genres : Action Adventure Sci-Fi
                    </Text>
                    <Img
                      className="h-5 w-1/2"
                      src="images/img_group51.svg"
                      alt="GroupFiftyOne One"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-5 items-center justify-start sm:ml-[0] pb-[22px] rounded-[10px] w-full">
                  <Img
                    className="h-[307px] sm:h-auto object-cover rounded-[10px] w-[308px] md:w-full"
                    src="images/img_rectangle17_1.png"
                    alt="RectangleSeventeen Two"
                  />
                  <div className="flex flex-col gap-[13px] items-center justify-start w-[65%] md:w-full">
                    <Text
                      className="text-black-900 text-lg tracking-[-0.50px]"
                      size="txtInterSemiBold18Black900"
                    >
                      Avengers End Game
                    </Text>
                    <Text
                      className="text-black-900_7f text-sm tracking-[-0.50px]"
                      size="txtInterRegular14Black9007f"
                    >
                      Genres : Action Adventure Sci-Fi
                    </Text>
                    <Img
                      className="h-5 w-1/2"
                      src="images/img_group51.svg"
                      alt="GroupFiftyOne Two"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-5 items-center justify-start sm:ml-[0] pb-[22px] rounded-[10px] w-full">
                  <Img
                    className="h-[307px] sm:h-auto object-cover rounded-[10px] w-[308px] md:w-full"
                    src="images/img_rectangle17_2.png"
                    alt="RectangleSeventeen Three"
                  />
                  <div className="flex flex-col gap-[13px] items-center justify-start w-[71%] md:w-full">
                    <Text
                      className="text-black-900 text-lg tracking-[-0.50px]"
                      size="txtInterSemiBold18Black900"
                    >
                      Spiderman Far from Home
                    </Text>
                    <Text
                      className="text-black-900_7f text-sm tracking-[-0.50px]"
                      size="txtInterRegular14Black9007f"
                    >
                      Genres : Action Adventure Sci-Fi
                    </Text>
                    <Img
                      className="h-5 w-[47%]"
                      src="images/img_group51.svg"
                      alt="GroupFiftyOne Three"
                    />
                  </div>
                </div>
              </List>
            </div>
            <Button
              className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[122px] text-center text-sm tracking-[-0.50px]"
              onClick={() => navigate("/allblog")}
              shape="round"
              color="bluegray_900"
              size="lg"
            >
              View All
            </Button>
          </div>
          <div className="bg-black-900 flex flex-col items-center justify-start p-[50px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1291px] mx-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start w-[62%] md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[600px] items-center justify-start w-full"
                    style={{
                      backgroundImage: "url('images/img_background.png')",
                    }}
                  >
                    <div className="bg-gradient2  flex flex-col gap-[55px] items-center justify-end p-[45px] md:px-10 sm:px-5 w-full">
                      <div className="flex flex-col gap-[50px] items-center justify-start mt-[225px] w-[51%] md:w-full">
                        <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                          <div className="flex flex-row gap-2.5 items-start justify-center w-[43%] md:w-full">
                            <div className="bg-bluegray-900 h-[15px] mt-[3px] rounded-[50%] w-[15px]"></div>
                            <Text
                              className="text-sm text-white-A700 tracking-[-0.50px]"
                              size="txtInterRegular14"
                            >
                              Entertainment Topic
                            </Text>
                          </div>
                          <Text
                            className="text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700 tracking-[-0.50px] w-full"
                            size="txtInterSemiBold36"
                          >
                            Best Place for Vacation in Sydney
                          </Text>
                        </div>
                        <Button
                          className="cursor-pointer font-semibold leading-[normal] min-w-[154px] text-center text-lg tracking-[-0.50px]"
                          shape="round"
                          color="white_A700"
                          size="lg"
                          variant="outline"
                        >
                          Read Now
                        </Button>
                      </div>
                      <PagerIndicator
                        className="flex h-[15px] justify-center w-[115px]"
                        count={5}
                        activeCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-white-A700 w-[15px]"
                        activeIndex={1}
                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-white-A700_4f w-[15px]"
                        selectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
                        unselectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
                      />
                    </div>
                  </div>
                </div>
                <List
                  className="flex flex-col gap-[45px] w-[35%]"
                  orientation="vertical"
                >
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-between my-0 w-full">
                    <Img
                      className="h-[84px] md:h-auto object-cover"
                      src="images/img_rectangle1479_84X121.png"
                      alt="Rectangle1479 Three"
                    />
                    <div className="flex flex-col gap-[25px] items-start justify-start">
                      <Text
                        className="text-lg text-white-A700 tracking-[-0.50px] w-full"
                        size="txtInterBold18WhiteA700"
                      >
                        How to maximize investment with mutual funds
                      </Text>
                      <div className="flex flex-row gap-[7px] items-center justify-start w-[78%] md:w-full">
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterSemiBold12WhiteA700"
                        >
                          Indonesia, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="text-white-A700_87 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA70087"
                        >
                          - 15 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-between my-0 w-full">
                    <Img
                      className="h-[84px] md:h-auto object-cover"
                      src="images/img_rectangle1479_2.png"
                      alt="Rectangle1479 Four"
                    />
                    <div className="flex flex-col gap-[25px] items-start justify-start">
                      <Text
                        className="text-lg text-white-A700 tracking-[-0.50px] w-full"
                        size="txtInterBold18WhiteA700"
                      >
                        How to maximize investment with mutual funds
                      </Text>
                      <div className="flex flex-row gap-[7px] items-center justify-start w-[78%] md:w-full">
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterSemiBold12WhiteA700"
                        >
                          Indonesia, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="text-white-A700_87 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA70087"
                        >
                          - 15 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-between my-0 w-full">
                    <Img
                      className="h-[84px] md:h-auto object-cover"
                      src="images/img_rectangle1479_3.png"
                      alt="Rectangle1479 Five"
                    />
                    <div className="flex flex-col gap-[25px] items-start justify-start">
                      <Text
                        className="text-lg text-white-A700 tracking-[-0.50px] w-full"
                        size="txtInterBold18WhiteA700"
                      >
                        How to maximize investment with mutual funds
                      </Text>
                      <div className="flex flex-row gap-[7px] items-center justify-start w-[78%] md:w-full">
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterSemiBold12WhiteA700"
                        >
                          Indonesia, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="text-white-A700_87 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA70087"
                        >
                          - 15 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-between my-0 w-full">
                    <Img
                      className="h-[84px] md:h-auto object-cover"
                      src="images/img_rectangle1479_4.png"
                      alt="Rectangle1479 Six"
                    />
                    <div className="flex flex-col gap-[25px] items-start justify-start">
                      <Text
                        className="text-lg text-white-A700 tracking-[-0.50px] w-full"
                        size="txtInterBold18WhiteA700"
                      >
                        How to maximize investment with mutual funds
                      </Text>
                      <div className="flex flex-row gap-[7px] items-center justify-start w-[78%] md:w-full">
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterSemiBold12WhiteA700"
                        >
                          Indonesia, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="text-white-A700_87 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA70087"
                        >
                          - 15 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-between my-0 w-full">
                    <Img
                      className="h-[84px] md:h-auto object-cover"
                      src="images/img_rectangle1479_5.png"
                      alt="Rectangle1479 Seven"
                    />
                    <div className="flex flex-col gap-[25px] items-start justify-start">
                      <Text
                        className="text-lg text-white-A700 tracking-[-0.50px] w-full"
                        size="txtInterBold18WhiteA700"
                      >
                        How to maximize investment with mutual funds
                      </Text>
                      <div className="flex flex-row gap-[7px] items-center justify-start w-[78%] md:w-full">
                        <Text
                          className="text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterSemiBold12WhiteA700"
                        >
                          Indonesia, 22 Agust 2022{" "}
                        </Text>
                        <Text
                          className="text-white-A700_87 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA70087"
                        >
                          - 15 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[500px] items-center justify-start w-full"
              style={{
                backgroundImage: "url('images/img_background_500X1440.png')",
              }}
            >
              <div className="bg-gradient3  flex flex-col items-center justify-end p-[39px] sm:px-5 w-full">
                <div className="flex flex-col gap-2.5 items-center justify-start max-w-[1287px] mt-[151px] mx-auto md:px-5 w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-row gap-2.5 items-start justify-start w-[14%] md:w-full">
                        <div className="bg-deep_orange-A400 h-[15px] mt-[3px] rounded-[50%] w-[15px]"></div>
                        <Text
                          className="text-sm text-white-A700 tracking-[-0.50px]"
                          size="txtInterRegular14"
                        >
                          Life Topic
                        </Text>
                      </div>
                      <Text
                        className="mt-2 text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[-0.50px] w-full"
                        size="txtInterSemiBold48"
                      >
                        <>St Pete&#39;s most beautiful beach in Florida</>
                      </Text>
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] min-w-[160px] mt-[58px] text-center text-lg tracking-[-0.50px]"
                        shape="round"
                        color="white_A700"
                        size="lg"
                        variant="outline"
                      >
                        Read More
                      </Button>
                    </div>
                    <Img
                      className="h-[60px] md:mt-0 mt-[30px] w-[60px]"
                      src="images/img_arrowright_60X60.svg"
                      alt="arrowright One"
                    />
                  </div>
                  <PagerIndicator
                    className="flex h-[15px] justify-center w-[115px]"
                    count={5}
                    activeCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-white-A700 w-[15px]"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-white-A700_4f w-[15px]"
                    selectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
                    unselectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
                  />
                </div>
              </div>
            </div>
          </div>
          <List
            className="flex flex-col gap-[120px] items-center max-w-[1294px] mx-auto md:px-5 w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col gap-[49px] items-center justify-start w-full">
              <div className="flex flex-col gap-7 items-center justify-start rounded-lg w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between rounded-lg w-full">
                  <Text
                    className="mb-0.5 text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]"
                    size="txtInterSemiBold36Black900"
                  >
                    Entertaiment{" "}
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[122px] mt-[5px] text-center text-sm tracking-[-0.50px]"
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
              <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-between pb-[33px] w-full">
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[22px] items-start justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[246px] items-center justify-start w-full"
                      style={{
                        backgroundImage:
                          "url('images/img_group38_246X418.png')",
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
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px] md:ml-[0] ml-[11px]"
                      onClick={() => navigate("/sigleblog")}
                      rightIcon={
                        <Img
                          className="h-5 ml-[5px] mr-[30px] my-2.5"
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
                        backgroundImage: "url('images/img_group38_1.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[162px] justify-end p-[17px] w-full">
                        <Input
                          name="language Three"
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
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px] md:ml-[0] ml-[11px]"
                      onClick={() => navigate("/sigleblog")}
                      rightIcon={
                        <Img
                          className="h-5 ml-[5px] mr-[30px] my-2.5"
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
                        backgroundImage: "url('images/img_group38_2.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[162px] justify-end p-[17px] w-full">
                        <Input
                          name="language Five"
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
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px] md:ml-[0] ml-[11px]"
                      onClick={() => navigate("/sigleblog")}
                      rightIcon={
                        <Img
                          className="h-5 ml-[5px] mr-[30px] my-2.5"
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
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[49px] items-center justify-start w-full">
              <div className="flex flex-col gap-7 items-center justify-start rounded-lg w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between rounded-lg w-full">
                  <Text
                    className="mb-0.5 text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]"
                    size="txtInterSemiBold36Black900"
                  >
                    Political{" "}
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[122px] mt-[5px] text-center text-sm tracking-[-0.50px]"
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
              <div className="gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-between pb-[33px] w-full">
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[247px] items-center justify-start w-full"
                      style={{
                        backgroundImage:
                          "url('images/img_group38_247X418.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[167px] justify-end p-4 w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[78px] md:ml-[0] ml-[300px] mr-2 mt-2 text-center text-xs tracking-[0.12px]"
                          shape="square"
                          color="red_900"
                          size="xs"
                        >
                          Political
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
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px]"
                      onClick={() => navigate("/sigleblog")}
                      rightIcon={
                        <Img
                          className="h-5 ml-[5px] mr-[30px] my-2.5"
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
                        backgroundImage: "url('images/img_group38_3.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[167px] justify-end p-4 w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[78px] md:ml-[0] ml-[300px] mr-2 mt-2 text-center text-xs tracking-[0.12px]"
                          shape="square"
                          color="red_900"
                          size="xs"
                        >
                          Political
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
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px]"
                      onClick={() => navigate("/sigleblog")}
                      rightIcon={
                        <Img
                          className="h-5 ml-[5px] mr-[30px] my-2.5"
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
                        backgroundImage: "url('images/img_group38_4.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[167px] justify-end p-4 w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[78px] md:ml-[0] ml-[300px] mr-2 mt-2 text-center text-xs tracking-[0.12px]"
                          shape="square"
                          color="red_900"
                          size="xs"
                        >
                          Political
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
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px]"
                      onClick={() => navigate("/sigleblog")}
                      rightIcon={
                        <Img
                          className="h-5 ml-[5px] mr-[30px] my-2.5"
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
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[49px] items-center justify-start w-full">
              <div className="flex flex-col gap-7 items-center justify-start rounded-lg w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between rounded-lg w-full">
                  <Text
                    className="mb-0.5 text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]"
                    size="txtInterSemiBold36Black900"
                  >
                    Sport{" "}
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[122px] mt-[5px] text-center text-sm tracking-[-0.50px]"
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
              <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-between pb-[33px] w-full">
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[22px] items-start justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[246px] items-center justify-start w-full"
                      style={{
                        backgroundImage: "url('images/img_group38_5.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[162px] justify-end p-[17px] w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[64px] md:ml-[0] ml-[312px] mr-1.5 mt-1.5 text-center text-xs tracking-[0.12px]"
                          shape="square"
                          color="green_700"
                          size="xs"
                        >
                          Sport
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
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px] md:ml-[0] ml-[11px]"
                      onClick={() => navigate("/sigleblog")}
                      rightIcon={
                        <Img
                          className="h-5 ml-[5px] mr-[30px] my-2.5"
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
                        backgroundImage: "url('images/img_group38_6.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[162px] justify-end p-[17px] w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[64px] md:ml-[0] ml-[312px] mr-1.5 mt-1.5 text-center text-xs tracking-[0.12px]"
                          shape="square"
                          color="green_700"
                          size="xs"
                        >
                          Sport
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
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px] md:ml-[0] ml-[11px]"
                      onClick={() => navigate("/sigleblog")}
                      rightIcon={
                        <Img
                          className="h-5 ml-[5px] mr-[30px] my-2.5"
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
                        backgroundImage: "url('images/img_group38_7.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[162px] justify-end p-[17px] w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[64px] md:ml-[0] ml-[312px] mr-1.5 mt-1.5 text-center text-xs tracking-[0.12px]"
                          shape="square"
                          color="green_700"
                          size="xs"
                        >
                          Sport
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
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px] md:ml-[0] ml-[11px]"
                      onClick={() => navigate("/sigleblog")}
                      rightIcon={
                        <Img
                          className="h-5 ml-[5px] mr-[30px] my-2.5"
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
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[49px] items-center justify-start w-full">
              <div className="flex flex-col gap-7 items-center justify-start rounded-lg w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between rounded-lg w-full">
                  <Text
                    className="mb-0.5 text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]"
                    size="txtInterSemiBold36Black900"
                  >
                    Health{" "}
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[122px] mt-[5px] text-center text-sm tracking-[-0.50px]"
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
              <div className="gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-between pb-[33px] w-full">
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[247px] items-center justify-start w-full"
                      style={{
                        backgroundImage: "url('images/img_group38_8.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[167px] justify-end p-4 w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[70px] md:ml-[0] ml-[308px] mr-2 mt-2 text-center text-xs tracking-[0.12px]"
                          shape="square"
                          color="purple_500"
                          size="xs"
                        >
                          Health
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
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px]"
                      onClick={() => navigate("/sigleblog")}
                      rightIcon={
                        <Img
                          className="h-5 ml-[5px] mr-[30px] my-2.5"
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
                        backgroundImage: "url('images/img_group38_9.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[167px] justify-end p-4 w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[70px] md:ml-[0] ml-[308px] mr-2 mt-2 text-center text-xs tracking-[0.12px]"
                          shape="square"
                          color="purple_500"
                          size="xs"
                        >
                          Health
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
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px]"
                      onClick={() => navigate("/sigleblog")}
                      rightIcon={
                        <Img
                          className="h-5 ml-[5px] mr-[30px] my-2.5"
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
                        backgroundImage: "url('images/img_group38_10.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[167px] justify-end p-4 w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[70px] md:ml-[0] ml-[308px] mr-2 mt-2 text-center text-xs tracking-[0.12px]"
                          shape="square"
                          color="purple_500"
                          size="xs"
                        >
                          Health
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
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px]"
                      onClick={() => navigate("/sigleblog")}
                      rightIcon={
                        <Img
                          className="h-5 ml-[5px] mr-[30px] my-2.5"
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
              </div>
            </div>
          </List>
          <div className="flex flex-col gap-[49px] items-start justify-start max-w-[1294px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-7 items-center justify-start rounded-lg w-full">
              <div className="flex flex-row md:gap-10 items-start justify-between rounded-lg w-full">
                <Text
                  className="mb-0.5 text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]"
                  size="txtInterSemiBold36Black900"
                >
                  Finance{" "}
                </Text>
                <Button
                  className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[122px] mt-[5px] text-center text-sm tracking-[-0.50px]"
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
              className="sm:flex-col flex-row gap-[19px] grid md:grid-cols-1 grid-cols-2 pb-[33px] w-[67%]"
              orientation="horizontal"
            >
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[247px] items-center justify-start w-full"
                    style={{
                      backgroundImage: "url('images/img_group38_11.png')",
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
                    className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px]"
                    onClick={() => navigate("/sigleblog")}
                    rightIcon={
                      <Img
                        className="h-5 ml-[5px] mr-[30px] my-2.5"
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
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[247px] items-center justify-start w-full"
                    style={{
                      backgroundImage: "url('images/img_group38_12.png')",
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
                    className="common-pointer cursor-pointer flex items-center justify-center min-w-[153px]"
                    onClick={() => navigate("/sigleblog")}
                    rightIcon={
                      <Img
                        className="h-5 ml-[5px] mr-[30px] my-2.5"
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
          <div className="bg-gray-900 flex flex-col items-center justify-start max-w-[1290px] mx-auto p-[37px] md:px-5 rounded-[20px] w-full">
            <div className="flex flex-col gap-[30px] items-center justify-start mb-[5px] rounded-[50px] w-[54%] md:w-full">
              <div className="flex flex-col gap-[38px] items-center justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 tracking-[-0.50px] w-full"
                  size="txtInterSemiBold48"
                >
                  Get the Latest Notifications and Info from Us
                </Text>
                <Text
                  className="leading-[35.00px] text-base text-center text-white-A700_b2 tracking-[-0.50px] w-full"
                  size="txtInterRegular16"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled.
                  </>
                </Text>
              </div>
              <Button
                className="!text-bluegray-900 border border-bluegray-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[196px] rounded-[26px] text-center text-lg tracking-[-0.50px]"
                color="white_A700"
                size="xl"
              >
                Subscribe Now
              </Button>
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

export default HomepagePage;
