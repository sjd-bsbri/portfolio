import {
    HomeRounded,
    FaceRounded,
    TextSnippetRounded,
    MessageRounded,
    ConnectWithoutContactRounded,
    GradingRounded,
  } from "@mui/icons-material";
  
  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };
  
  export const tabsData = () => {
    const tabs = [
      { label: "صفحه اصلی", icon: <HomeRounded />, ...tabProps(0) },
      { label: "درباره من", icon: <FaceRounded />, ...tabProps(1) },
      { label: "بایوگرافی من", icon: <TextSnippetRounded />, ...tabProps(2) },
      { label: "نمونه کارهای من", icon: <GradingRounded />, ...tabProps(3) },
      { label: " نظرات دوستان من" , icon: <MessageRounded />, ...tabProps(4) },
      {
        label: "ارتباط با من",
        icon: <ConnectWithoutContactRounded />,
        ...tabProps(5),
      },
    ];
  
    return tabs;
  };
  