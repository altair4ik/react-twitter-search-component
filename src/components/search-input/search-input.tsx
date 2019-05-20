import * as React from 'react';
import './search-input.css';
import {FormEvent} from "react";

interface IState {
  term: string
}

interface IProp {
  onSearchChange: (search: string) => void
}


export default class SearchInput extends React.Component<IProp, IState> {

  constructor(props: IProp) {
    super(props);
    this.state = {term: ''}
  }

  public onTermChange = async (e: FormEvent<HTMLInputElement>) => {
    await this.setState({term: e.currentTarget.value});
    await this.props.onSearchChange(this.state.term);
  };

  public render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder='Add hashtag...'
        value={this.state.term}
        onChange={this.onTermChange}
      />
    );
  }
}
