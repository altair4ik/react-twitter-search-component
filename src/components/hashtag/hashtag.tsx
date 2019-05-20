import * as React from 'react';
import styled from 'styled-components';

const HashtagBlock = styled.div`
  background-color: #e8e8e8;
  border-radius: 15px;
  padding: 7px 6px 7px 10px;
  font-size: 14px;
  margin-left: 5px;
  
  &:first-child {
    margin-left: 0;
  }
`;

const Cross = styled.button`
  background-color: #b3b3b3;
  border-radius: 30px;
  color: #e8e8e8;
  border: none;
  margin-left: 5px;
`;

interface IProp {
  text: string,
  del: (i: number) => void,
  index: number,
}

export default class Hashtag extends React.Component<IProp, {}> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    const text = this.props.text;
    const del = () => {
      this.props.del(this.props.index);
    };
    return (
      <HashtagBlock>
        <span>{text}</span>
        <Cross onClick={del}>X</Cross>
      </HashtagBlock>
    );
  }
}
