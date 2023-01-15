import PropTypes, { bool } from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';
import css from './Friend-list.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            status={isOnline}
            avatar={avatar}
            name={name}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status: bool.isRequired
    })
  ),
};
