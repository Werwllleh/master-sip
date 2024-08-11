import React, {useEffect} from 'react';
import {Checkbox, Flex, Radio} from 'antd';

const QuizList = ({data}) => {

  useEffect(() => {
    console.log(data)
  }, [data]);

  return (
    <div className="quiz__list">
      {data.selection === 'single' ? (
        <Radio.Group buttonStyle="solid">
          {data.items.map(item => {
            return <Radio.Button value={item.value}>{item.value}</Radio.Button>
          })}
        </Radio.Group>
      ) : (
        <>
          {data.items.map(item => {

            const onChange = (e) => {
              console.log(`checked = ${e.target.checked}`);
            };

            return <Checkbox onChange={onChange}>{item.value}</Checkbox>
          })}
        </>
      )}
    </div>
  );
};

export default QuizList;
