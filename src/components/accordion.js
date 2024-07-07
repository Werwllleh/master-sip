'use client'
import {Collapse} from "antd";
import {CaretRightFilled} from "@ant-design/icons";

const Accordion = ({items}) => {

  let accordionData = [];

  items.map((item, index) => {
    if (item.label !== '') {
      accordionData.push({
        key: index,
        label: item.label,
        children: (
          <div key={index} className="accordion__content">
            {item.text}
          </div>
        ),
      });
    }
  })


  return (
    <Collapse className="accordion" accordion items={accordionData} expandIcon={() => <CaretRightFilled />}/>
  );
};

export default Accordion;
