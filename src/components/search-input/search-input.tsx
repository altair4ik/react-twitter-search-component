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

interface IProps {
  apiUrl: string;
}

export default class SearchInput extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      hashtags: []
    };
  }

  public searchTweets = async (searchStr: string, apiUrl: string) => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json; charset=utf-8');
    const res = await fetch(apiUrl, {
      method: 'post',
      headers: myHeaders,
      body: JSON.stringify({data: searchStr}),
    });

    if (!res.ok) {
      throw new Error(`Could not fetch, receives ${res.status}`);
    }

    const body = await res.json();
    return body;
  };

  keypressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const hashtags: String[] = this.state.hashtags;
      hashtags.push(event.currentTarget.value);
      event.currentTarget.value = '';
      this.setState({hashtags});

      this.searchTweets(hashtags.join(' '), this.props.apiUrl).then(result => {
          console.log("result: ", JSON.parse(result.data));
        },
        error => {
          console.log("error: ", error);
        });
    }
  };

  public render() {
    const del = (index: number) => {
      const hashtags: String[] = this.state.hashtags;
      hashtags.splice(index, 1);
      if (hashtags.length > 0) {
        this.searchTweets(hashtags.join(' '), this.props.apiUrl).then(result => {
            console.log("result: ", JSON.parse(result.data));
          },
          error => {
            console.log("error: ", error);
          });
      }
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
