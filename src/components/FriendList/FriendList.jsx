import css from './friend-list.module.css';
import PropTypes, { bool } from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
    const friendListItems = friends.map(({id, avatar, name, isOnline}) => {
        return <FriendListItem key={id} status={isOnline} avatar={avatar} name={name} />
    })
    return (
        <ul className={css.list}>
            {friendListItems}
        </ul>
)}

export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: bool
    }))
}