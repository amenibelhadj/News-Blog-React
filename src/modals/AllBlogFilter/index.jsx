import React from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";

const AllBlogFilterModal = (props) => {
  const navigate = useNavigate();

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[90%]"
      overlayClassName="bg-black-900_90 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col gap-14 items-start justify-start max-w-[1290px] mb-[1090px] mt-7 mx-auto p-[39px] md:px-5 rounded-[30px] w-full">
          <div className="flex flex-row md:gap-10 items-end justify-between md:ml-[0] ml-[27px] w-[96%] md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px]"
              size="txtInterSemiBold24"
            >
              Filter News
            </Text>
            <Img
              className="common-pointer h-6 mt-1.5 w-6"
              src="images/img_close.svg"
              alt="close"
              onClick={() => navigate("/allblog")}
            />
          </div>
          <div className="flex flex-col gap-[27px] items-start justify-start md:ml-[0] ml-[27px] rounded-[10px] w-[71%] md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px]"
              size="txtInterSemiBold24"
            >
              Category News
            </Text>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between rounded-[10px] w-full">
              <Button
                className="cursor-pointer leading-[normal] min-w-[86px] rounded-[10px] text-center text-lg tracking-[-0.50px]"
                shape="round"
                color="bluegray_900"
                size="sm"
              >
                Sport
              </Button>
              <Button
                className="cursor-pointer leading-[normal] min-w-[94px] rounded-[10px] text-center text-lg tracking-[-0.50px]"
                shape="round"
                color="gray_50"
                size="sm"
              >
                Health
              </Button>
              <Button
                className="cursor-pointer leading-[normal] min-w-[102px] rounded-[10px] text-center text-lg tracking-[-0.50px]"
                shape="round"
                color="gray_50"
                size="sm"
              >
                Political
              </Button>
              <Button
                className="cursor-pointer leading-[normal] min-w-[113px] rounded-[10px] text-center text-lg tracking-[-0.50px]"
                shape="round"
                color="gray_50"
                size="sm"
              >
                Business
              </Button>
              <Button
                className="cursor-pointer leading-[normal] min-w-[104px] rounded-[10px] text-center text-lg tracking-[-0.50px]"
                shape="round"
                color="gray_50"
                size="sm"
              >
                Finance
              </Button>
              <Button
                className="cursor-pointer leading-[normal] min-w-[70px] rounded-[10px] text-center text-lg tracking-[-0.50px]"
                shape="round"
                color="gray_50"
                size="sm"
              >
                Life
              </Button>
              <Input
                name="FrameThirteen"
                placeholder="Entertainment"
                className="leading-[normal] p-0 placeholder:text-black-900 text-left text-lg tracking-[-0.50px] w-full"
                wrapClassName="sm:flex-1 sm:w-full"
                shape="round"
                color="gray_50"
              ></Input>
            </div>
          </div>
          <List
            className="flex flex-col gap-[55px] md:ml-[0] ml-[27px] w-[48%]"
            orientation="vertical"
          >
            <div className="flex flex-col gap-[27px] items-start justify-start rounded-[10px] w-[94%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px]"
                size="txtInterSemiBold24"
              >
                News Rating
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between rounded-[10px] w-full">
                <Button
                  className="cursor-pointer leading-[normal] min-w-[118px] rounded-[10px] text-center text-lg tracking-[-0.50px]"
                  shape="round"
                  color="gray_50"
                  size="sm"
                >
                  Hot Topic
                </Button>
                <Button
                  className="cursor-pointer leading-[normal] min-w-[127px] rounded-[10px] text-center text-lg tracking-[-0.50px]"
                  shape="round"
                  color="gray_50"
                  size="sm"
                >
                  Most Seen
                </Button>
                <Button
                  className="cursor-pointer leading-[normal] min-w-[143px] rounded-[10px] text-center text-lg tracking-[-0.50px]"
                  shape="round"
                  color="bluegray_900"
                  size="sm"
                >
                  The Craziest
                </Button>
                <Button
                  className="cursor-pointer leading-[normal] min-w-[87px] rounded-[10px] text-center text-lg tracking-[-0.50px]"
                  shape="round"
                  color="gray_50"
                  size="sm"
                >
                  Fraud
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-[27px] items-start justify-start rounded-[10px] w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px]"
                size="txtInterSemiBold24"
              >
                News post time
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between rounded-[10px] w-full">
                <Button
                  className="cursor-pointer leading-[normal] min-w-[131px] rounded-[10px] text-center text-lg tracking-[-0.50px]"
                  shape="round"
                  color="gray_50"
                  size="sm"
                >
                  Last 1 Hour
                </Button>
                <Button
                  className="cursor-pointer leading-[normal] min-w-[135px] rounded-[10px] text-center text-lg tracking-[-0.50px]"
                  shape="round"
                  color="gray_50"
                  size="sm"
                >
                  Last 3 Hour
                </Button>
                <Button
                  className="cursor-pointer leading-[normal] min-w-[124px] rounded-[10px] text-center text-lg tracking-[-0.50px]"
                  shape="round"
                  color="bluegray_900"
                  size="sm"
                >
                  This Week
                </Button>
                <Button
                  className="cursor-pointer leading-[normal] min-w-[132px] rounded-[10px] text-center text-lg tracking-[-0.50px]"
                  shape="round"
                  color="gray_50"
                  size="sm"
                >
                  This Month
                </Button>
              </div>
            </div>
          </List>
          <Button
            className="cursor-pointer font-semibold leading-[normal] mb-1.5 min-w-[171px] md:ml-[0] ml-[27px] rounded-[10px] text-center text-lg tracking-[-0.50px]"
            shape="round"
            size="xl"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </ModalProvider>
  );
};

export default AllBlogFilterModal;
