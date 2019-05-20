import * as React from 'react';
import styled from 'styled-components';
import Hashtag from "../hashtag";

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #c1bfbf;
  padding: 5px;
`;

const HashtagsWrapper = styled.div`
  margin-top: 10px;
  display: flex;
`;

interface IState {
  hashtags: String[];
}

export default class SearchInput extends React.Component<{}, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      hashtags: []
    };
  }

  keypressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const hashtags: String[] = this.state.hashtags;
      hashtags.push(event.currentTarget.value);
      event.currentTarget.value = '';
      this.setState({hashtags});
    }
  };

  public render() {
    const del = (index: number) => {
      const hashtags: String[] = this.state.hashtags;
      hashtags.splice(index, 1);
      this.setState({hashtags});
    };
    const hashtags: String[] = this.state.hashtags;
    const items = hashtags.map((item: string, index: number) => {
      return (
        <Hashtag index={index} del={del} text={item} key={index} />
      );
    });

    return (
      <div>
        <Input
          type="text"
          className="form-control search-input"
          placeholder='Add hashtag...'
          onKeyPress={this.keypressHandler}
        />
        <HashtagsWrapper>
          {items}
        </HashtagsWrapper>
      </div>
    );
  }
}
