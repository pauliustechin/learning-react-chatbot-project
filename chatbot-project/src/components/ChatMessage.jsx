import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';

export function ChatMessage({ message, sender }) {
  if (sender === "robot") {
    return (
      <div className="robot-chat">
        <img src={RobotProfileImage} width="50" />
        <p>{message}</p>
      </div>
    );
  } else {
    return (
      <div className="user-chat">
        <p>{message}</p>
        <img src={UserProfileImage} width="50" />
      </div>
    );
  }
  // return (
  //   <div>
  //     {sender === 'robot' && (
  //       <img src="robot.png" width="50" />
  //     )}
  //     {message}
  //     {sender === 'user' && <img src="user.png" width="50" />}
  //   </div>
  // );
}
