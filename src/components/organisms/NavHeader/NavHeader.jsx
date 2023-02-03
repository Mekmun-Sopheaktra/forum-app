import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navigation from 'components/molecules/Navigation/Navigation';
import Heading from 'components/atoms/Heading/Heading';
import Avatar from 'components/atoms/Avatar/Avatar';
import logo from '../../../assets/icons/careerkh_hr_text.png'

const StyledWrapper = styled.nav`
  width: 100%;
  height: 60px;
  background-color: white;
  padding: 0 75px;
  border-bottom: 1px solid ${({ theme }) => theme.gray100};
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > * {
    width: 30%;
  }

  @media (max-width: 700px) {
    height: 80px;
    margin-top: 5px;
    padding: 0 50px;
    align-items: flex-start;
  }

  @media (max-width: 450px) {
    padding: 0 20px;
  }
`;

const StyledLogo = styled.span`

  text-decoration: none;
  color: black;

`;

const Logo = styled.img`
  width: 140px;
`

const StyledHeading = styled(Heading)`
  margin-left: 7px;
`;

const StyledUserProfile = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
  transition: all 0.1s ease-in-out;

  &:hover {
    text-decoration: underline;
    filter: brightness(90%);
  }
`;

const NavHeader = () => {
  const { username, avatarSrc } = useSelector(state => state.firebase.profile);

  return (
    
    <StyledWrapper>
      
      <StyledLogo as={Link} to="/" >
        <Logo src={logo}  />
      </StyledLogo>
      
      <Navigation />
      <StyledUserProfile as={Link} to={`/user/${username}`}>
        <Avatar src={avatarSrc} />
        <StyledHeading>{username}</StyledHeading>
      </StyledUserProfile>
    </StyledWrapper>
  );
};

export default NavHeader;
