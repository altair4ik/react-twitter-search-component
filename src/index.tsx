/**
 * @class ExampleComponent
 */

import * as React from 'react'

import styles from './styles.css'
import SearchInput from "./components/search-input";

export type Props = { text: string }

export default class ExampleComponent extends React.Component<Props> {
  public onSearchChange = async (search: string) => {
    await this.setState({search});
    console.log('search', search);
  };


  render() {
    const {
      text
    } = this.props;

    return (
      <div className={styles.test}>
        Example Component: {text}
        <SearchInput onSearchChange={this.onSearchChange} />
      </div>
    )
  }
}
