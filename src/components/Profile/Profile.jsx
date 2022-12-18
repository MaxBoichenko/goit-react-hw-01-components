import PropTypes from 'prop-types';

import {
  Container,
  Description,
  Avatar,
  Text,
  CardList,
  CardItem,
  CardInfo,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Text>{username}</Text>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Description>

      <CardList>
        <CardItem>
          <CardInfo>Followers</CardInfo>
          <CardInfo>{followers}</CardInfo>
        </CardItem>
        <CardItem>
          <CardInfo>Views</CardInfo>
          <CardInfo>{views}</CardInfo>
        </CardItem>
        <CardItem>
          <CardInfo>Likes</CardInfo>
          <CardInfo>{likes}</CardInfo>
        </CardItem>
      </CardList>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,

  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
