import * as React from 'react';
import styled from 'styled-components';
import VerifyIcon from '../../assets/img/ic-verify.png';
import LogoIcon from '../../assets/img/logo.png';

const TweetBlock = styled.div`
  margin-top: 5px;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  padding: 15px;
`;

const Header = styled.div`
  display: flex;
  position: relative;
`;

const Logo = styled.span`
  position: absolute;
  right: 0;

  &::before {
            content: url(${LogoIcon});
        }
`;

const Verify = styled.span`
  &::before {
            content: url(${VerifyIcon});
        }
`;

const Body = styled.div`
  margin-top: 10px;
  display: flex;
`;

const Avatar = styled.img`
  border-radius: 30px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
`;

const Name = styled.span`
  font-weight: 600;
`;

const UserName = styled.span`
  color: #949494;
`;

interface IProp {
  data: any,
}

export default class Tweet extends React.Component<IProp, {}> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    const tweet = this.props.data;
    return (
      <TweetBlock>
        <Header>
          <Avatar src={tweet.user.profile_image_url} alt="profile img"/>
          <UserInfo>
            <Name>{tweet.user.name}{tweet.user.verified ? <Verify/> : null}</Name>
            <UserName>@{tweet.user.screen_name}</UserName>
          </UserInfo>
          <Logo />
        </Header>
        <Body>
          <span>{tweet.full_text}</span>
        </Body>
      </TweetBlock>
    );
  }
}
