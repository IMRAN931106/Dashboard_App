import React from 'react'

const horizontalData = [
    "Channels",
    "State",
    "Customer",
    "Product",
    "BDM",
    "BDM Manager",
    "Category",
    "Brand",
]

const HorizontalScroll:React.FC = () => {
    const [scrollData, setScrollData] = React.useState(horizontalData);
  return (
    <div style={{display:"flex", overflowX:"auto",marginTop: "24px",width: "100%" ,justifyContent:"flex-start",marginLeft: "60px"}}>
        {scrollData.map((data,index) => (
            <div key={index} style={{margin:"0px 16px", fontSize:"16px", fontWeight:400,color:"#474747", cursor:"pointer"}}>{data}</div>
        ))}
    </div>
  )
}

export default HorizontalScroll