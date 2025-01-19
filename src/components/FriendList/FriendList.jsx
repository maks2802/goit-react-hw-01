import FriendListItem from "../FriendListItem/FriendListItem";
import styles2 from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles2.list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={styles2.item} key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
