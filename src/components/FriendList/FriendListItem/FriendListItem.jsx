import PropTypes, { bool } from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ status, avatar, name }) => {
  const fullClassName = status ? `${css.status} ${css.active}` : css.status;
  return (
    <li className={css.item}>
      <span className={fullClassName}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: bool,
};
