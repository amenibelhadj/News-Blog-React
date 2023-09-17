import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Input, Line, Text } from "components";

const SearchModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[90%]"
      overlayClassName="bg-black-900_90 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col gap-[50px] items-start justify-start max-w-[1290px] mb-[549px] mt-7 mx-auto p-[41px] md:px-5 rounded-[30px] w-full">
          <div className="flex flex-col gap-14 items-center justify-start md:ml-[0] ml-[19px] w-[96%] md:w-full">
            <div className="flex flex-row md:gap-10 items-end justify-between w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px]"
                size="txtInterSemiBold24"
              >
                Search News
              </Text>
              <Img
                className="h-6 mt-1.5 w-6"
                src="images/img_close.svg"
                alt="close"
              />
            </div>
            <div className="flex flex-col gap-[15px] items-start justify-start w-full">
              <Text
                className="text-black-900 text-lg tracking-[-0.50px]"
                size="txtInterRegular18Black900"
              >
                Search News here...
              </Text>
              <Line className="bg-black-900_7f h-px w-full" />
            </div>
          </div>
          <div className="flex flex-col gap-[27px] items-start justify-start mb-1 md:ml-[0] ml-[19px] rounded-[10px] w-[71%] md:w-full">
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
                name="items"
                placeholder="Entertainment"
                className="leading-[normal] p-0 placeholder:text-black-900 text-left text-lg tracking-[-0.50px] w-full"
                wrapClassName="sm:flex-1 sm:w-full"
                shape="round"
                color="gray_50"
              ></Input>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default SearchModal;
