import React, { useEffect, useState ,useRef } from "react";
import Icon from "../../Assets/scrollicon.svg";
import Up from "../../Assets/UpArrow.svg";
import Down from "../../Assets/DownArrow.svg";
import rupees from "../../Assets/rupeesIcon.svg";

const array = [
  {
    image: <img src={Icon} alt="..." />,
    icrease: <img src={Up} alt="..." />,
    subtitle: "12% from Last Month",
    title: "Total Sales",
    rupeesIcon: <img src={rupees} alt="..." />,
    price: "37,87,987",
  },
  {
    image: <img src={Icon} alt="..." />,
    icrease: <img src={Down} alt="..." />,
    subtitle: "12% from Last Month",
    title: "Total Sales",
    rupeesIcon: <img src={rupees} alt="..." />,
    price: "37,87,987",
  },
  {
    image: <img src={Icon} alt="..." />,
    icrease: <img src={Up} alt="..." />,
    subtitle: "12% from Last Month",
    title: "Total Sales",
    rupeesIcon: <img src={rupees} alt="..." />,
    price: "37,87,987",
  },
  {
    image: <img src={Icon} alt="..." />,
    icrease: <img src={Down} alt="..." />,
    subtitle: "12% from Last Month",
    title: "Total Sales",
    rupeesIcon: <img src={rupees} alt="..." />,
    price: "37,87,987",
  },
  {
    image: <img src={Icon} alt="..." />,
    icrease: <img src={Up} alt="..." />,
    subtitle: "12% from Last Month",
    title: "Total Sales",
    rupeesIcon: <img src={rupees} alt="..." />,
    price: "37,87,987",
  },
  {
    image: <img src={Icon} alt="..." />,
    icrease: <img src={Down} alt="..." />,
    subtitle: "12% from Last Month",
    title: "Total Sales",
    rupeesIcon: <img src={rupees} alt="..." />,
    price: "37,87,987",
  },
  {
    image: <img src={Icon} alt="..." />,
    icrease: <img src={Up} alt="..." />,
    subtitle: "12% from Last Month",
    title: "Total Sales",
    rupeesIcon: <img src={rupees} alt="..." />,
    price: "37,87,987",
  },
  {
    image: <img src={Icon} alt="..." />,
    icrease: <img src={Down} alt="..." />,
    subtitle: "12% from Last Month",
    title: "Total Sales",
    rupeesIcon: <img src={rupees} alt="..." />,
    price: "37,87,987",
  },
];

interface ScrollContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  onContentSizeChange?: (e: React.UIEvent<HTMLDivElement>) => void;
}

const ScrollBar: React.FC = () => {
  const [data, setData] = useState(array);
  const [scrollViewWidth, setScrollViewWidth] = useState(0);
  const [contentOffset, setContentOffset] = useState({ x: 0, y: 0 });
  const [contentSize, setContentSize] = useState(0);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const calculateIndicatorWidth = () => {
    const visibleWidth = scrollViewWidth;
    const totalWidth = contentSize;
    return (visibleWidth / totalWidth) * visibleWidth;
  };

  const calculateIndicatorPosition = () => {
    const visibleWidth = scrollViewWidth;
    const totalWidth = contentSize;
    const scrollPercentage = (contentOffset.x / (totalWidth - visibleWidth)) * 100;
    return (visibleWidth * scrollPercentage) / 100;
  };

  useEffect(() => {
    const indicatorWidth = calculateIndicatorWidth();
    const indicatorPosition = calculateIndicatorPosition();
    if (indicatorRef.current) {
      indicatorRef.current.style.width = `${indicatorWidth}px`;
      indicatorRef.current.style.transform = `translateX(${indicatorPosition}px)`;
    }
  }, [scrollViewWidth, contentOffset, contentSize]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    setContentOffset({ x: target.scrollLeft, y: target.scrollTop });
  };

  // styles
  const container: React.CSSProperties = {
    overflowX: "scroll",
    display: "flex",
    flexDirection: "row",
    width: "100%",
}
  const itemStyle: React.CSSProperties = {
    minWidth: "200px",
    minHeight: "200px",
    background: " #ffffff",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "16px",
    marginRight: "16px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 20px 20px 0px"
    // boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.10)"
  };

  const titleStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#F8991D",
    marginTop: "8px",
  };

  const subtitleStyle = {
    marginLeft: "3px",
    color: "#474747",
    fontWeight: "500",
    fontSize: "12px",
  };

  const priceStyle = {
    marginLeft: "5px",
    color: "#F8991D",
    fontWeight: "bold",
    fontSize: "24px",
  };
  
  const indicatorStyle: React.CSSProperties = {
    width: "350px ",
    height: "4px",
    background: "#FFFFFF",
    marginTop: "30px",
    borderRadius: "5px",
    position: "relative",
    display: "flex",
    alignItems: "center",
  };

  return (
    <div style={{display: "flex",alignItems: "center", flexDirection: "column"}}>
    <div style={container} 
    onScroll={handleScroll}
    // onContentSizeChange={(e:React.UIEvent<HTMLDivElement>) => {
    //   setContentSize(e.currentTarget.scrollWidth);
    // }}
    //     onLayout={(e:any) => {
    //       setScrollViewWidth(e.target.offsetWidth);
    //     }}
        >
      {data.map((item, index) => (
        <div key={index} style={itemStyle}>
          <div>{item.image}</div>
          <div style={titleStyle}>{item.title}</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "1px",
              alignItems: "center",
            }}
          >
            <span>{item.icrease}</span>
            <span style={subtitleStyle}>{item.subtitle}</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "20px",
              alignItems: "center",
            }}
          >
            <span style={{ position: "relative", top: "2px" }}>
              {item.rupeesIcon}
            </span>
            <span style={priceStyle}>{item.price}</span>
          </div>
        </div>
      ))}
    </div>
    {/* indicator */}
    {/* <div style={{ width: "350px", height: "4px", background: "#FFFFFF", marginTop: "30px", borderRadius: "5px", position: "relative", alignItems: "center", display: "flex" }}>
        <span style={{ width: "50px", height: "10px", background: "#F8991D", borderRadius: "5px", position: "absolute"}} />
      </div> */}
       <div style={indicatorStyle}>
        <span ref={indicatorRef} style={{ width: "50px", height: "10px", background: "#F8991D", borderRadius: "5px", position: "absolute" }} />
      </div>
</div>
  );
};

export default ScrollBar;
