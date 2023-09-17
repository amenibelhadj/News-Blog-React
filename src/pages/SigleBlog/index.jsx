import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

const SigleBlogPage = () => {
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
          <div className="flex flex-col items-center justify-start md:px-5 w-[45%] md:w-full">
            <div className="flex flex-row gap-2.5 items-end justify-center w-[17%] md:w-full">
              <div className="bg-bluegray-900 h-[15px] mt-1.5 rounded-[50%] w-[15px]"></div>
              <Text
                className="text-black-900 text-lg tracking-[-0.50px]"
                size="txtInterRegular18Black900"
              >
                Hot Topic
              </Text>
            </div>
            <Text
              className="mt-[23px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center tracking-[-0.50px] w-full"
              size="txtInterBold36"
            >
              Miami Dolphins won the match and officially qualified for the
              final
            </Text>
            <div className="flex flex-row items-center justify-center mt-[38px] w-[56%] md:w-full">
              <Text
                className="text-black-900 text-lg tracking-[-0.50px]"
                size="txtInterSemiBold18Black900"
              >
                New York, 22 Agust 2022{" "}
              </Text>
              <Text
                className="ml-1 text-black-900_87 text-lg tracking-[-0.50px]"
                size="txtInterSemiBold18Black90087"
              >
                <span className="text-black-900 font-inter text-left font-semibold">
                  -{" "}
                </span>
                <span className="text-black-900 font-inter text-left font-normal">
                  10 minutes ago
                </span>
              </Text>
            </div>
          </div>
          <Img
            className="h-[497px] sm:h-auto mt-[50px] object-cover w-full"
            src="images/img_rectangle5_497X1440.png"
            alt="RectangleFive"
          />
          <div className="flex flex-col gap-[50px] items-center justify-start mt-[60px] md:px-5 w-3/5 md:w-full">
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]"
                  size="txtInterSemiBold36Black900"
                >
                  About Team
                </Text>
                <Text
                  className="leading-[35.00px] mt-[30px] text-base text-black-900 tracking-[-0.50px] w-full"
                  size="txtInterRegular16Black900"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                  </>
                </Text>
                <Text
                  className="leading-[35.00px] mt-5 text-base text-black-900 tracking-[-0.50px] w-full"
                  size="txtInterRegular16Black900"
                >
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </Text>
              </div>
              <Img
                className="h-[400px] md:h-auto object-cover w-full"
                src="images/img_unsplashxhzbz.png"
                alt="unsplashxHZBz"
              />
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]"
                size="txtInterSemiBold36Black900"
              >
                Officially Qualified for the Final
              </Text>
              <Text
                className="leading-[35.00px] mt-[30px] text-base text-black-900 tracking-[-0.50px] w-full"
                size="txtInterRegular16Black900"
              >
                <>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </>
              </Text>
              <Text
                className="leading-[35.00px] mt-5 text-base text-black-900 tracking-[-0.50px] w-full"
                size="txtInterRegular16Black900"
              >
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
              <Text
                className="leading-[35.00px] mt-5 text-base text-black-900 tracking-[-0.50px] w-full"
                size="txtInterRegular16Black900"
              >
                <>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of
                  Good and Evil) by Cicero, written in 45 BC. This book is a
                  treatise on the theory of ethics, very popular during the
                  Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum
                  dolor sit amet..&quot;, comes from a line in section 1.10.32.
                </>
              </Text>
            </div>
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px] w-full"
                  size="txtInterSemiBold36Black900"
                >
                  Typing skills and strategy are the keys to victory this time
                </Text>
                <Text
                  className="leading-[35.00px] mt-10 text-base text-black-900 tracking-[-0.50px] w-full"
                  size="txtInterRegular16Black900"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                  </>
                </Text>
                <Text
                  className="leading-[35.00px] mt-5 text-base text-black-900 tracking-[-0.50px] w-full"
                  size="txtInterRegular16Black900"
                >
                  <>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et
                    Malorum&quot; (The Extremes of Good and Evil) by Cicero,
                    written in 45 BC. This book is a treatise on the theory of
                    ethics, very popular during the Renaissance. The first line
                    of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;,
                    comes from a line in section 1.10.32.
                  </>
                </Text>
              </div>
              <Img
                className="h-[400px] md:h-auto object-cover w-full"
                src="images/img_unsplash26mjgn.png"
                alt="unsplash26MJGn"
              />
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]"
                size="txtInterSemiBold36Black900"
              >
                Best regards from Miami Dolphins
              </Text>
              <Text
                className="leading-[35.00px] mt-[30px] text-base text-black-900 tracking-[-0.50px] w-full"
                size="txtInterRegular16Black900"
              >
                <>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </>
              </Text>
              <Text
                className="leading-[35.00px] mt-5 text-base text-black-900 tracking-[-0.50px] w-full"
                size="txtInterRegular16Black900"
              >
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
            </div>
            <Line className="bg-black-900_4c h-px w-full" />
          </div>
          <div className="flex flex-col gap-[50px] items-center justify-start mt-[49px] md:px-5 w-[28%] md:w-full">
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <div className="flex flex-row gap-2.5 items-start justify-center w-1/2 md:w-full">
                <Img
                  className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                  src="images/img_unsplashtwuphb.png"
                  alt="unsplashTwuPHb"
                />
                <div className="flex flex-col gap-[7px] items-start justify-start mt-[3px]">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px]"
                    size="txtInterSemiBold24"
                  >
                    Jhone RIck
                  </Text>
                  <Text
                    className="text-black-900_7f text-xs tracking-[-0.50px]"
                    size="txtInterRegular12Black9007f"
                  >
                    About Author
                  </Text>
                </div>
              </div>
              <Text
                className="leading-[35.00px] text-black-900 text-center text-sm tracking-[-0.50px] w-full"
                size="txtInterRegular14Black900"
              >
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s.
              </Text>
            </div>
            <div className="flex flex-col gap-[25px] items-center justify-start w-[45%] md:w-full">
              <Text
                className="text-black-900 text-lg tracking-[-0.50px]"
                size="txtInterSemiBold18Black900"
              >
                Connect with Author
              </Text>
              <Img
                className="h-6 w-[65%]"
                src="images/img_group20875_black_900.svg"
                alt="Group20875"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1294px] mt-[120px] mx-auto pb-[34px] md:px-5 w-full">
            <div className="flex flex-col gap-[49px] items-center justify-start w-full">
              <div className="flex flex-col gap-7 items-center justify-start rounded-lg w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between rounded-lg w-full">
                  <Text
                    className="mb-0.5 text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]"
                    size="txtInterSemiBold36Black900"
                  >
                    Related News
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
                          className="font-bold leading-[normal] md:h-auto p-0 placeholder:text-white-A700 sm:h-auto text-left text-xs tracking-[0.12px] w-full"
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
                      className="cursor-pointer flex items-center justify-center min-w-[151px] ml-3 md:ml-[0]"
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
                          className="cursor-pointer font-bold leading-[normal] min-w-[78px] md:ml-[0] ml-[282px] mr-[21px] mt-1.5 text-center text-xs tracking-[0.12px]"
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
                      className="cursor-pointer flex items-center justify-center min-w-[151px] ml-3 md:ml-[0]"
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
                      className="cursor-pointer flex items-center justify-center min-w-[151px]"
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
          <footer className="flex items-center justify-center mt-[120px] md:px-5 w-full">
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
                      alt="Group20875 One"
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

export default SigleBlogPage;
