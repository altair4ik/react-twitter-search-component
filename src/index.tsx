/**
 * @class ExampleComponent
 */

import * as React from 'react'
import styled from 'styled-components';

import styles from './styles.css'
import SearchInput from "./components/search-input";

export type Props = { apiUrl: string }

const Wrapper = styled.div`
  margin-top: 50px;
  margin-left: 50px;
`;

export default class ExampleComponent extends React.Component<Props> {
  render() {
    // const {
    //   text
    // } = this.props;

    return (
      <Wrapper className={styles.test}>
        <SearchInput apiUrl={this.props.apiUrl}/>
      </Wrapper>
    )
  }
}
