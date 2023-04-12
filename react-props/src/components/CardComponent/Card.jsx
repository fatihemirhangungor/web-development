import Avatar from "./components/Avatar";
import Detail from "./components/Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar src={props.src} />
      </div>
      <div className="bottom">
        <Detail 
            detailInfo = {props.tel}
        />
        <Detail 
            detailInfo = {props.email}
        />
      </div>
    </div>
  );
}

export default Card;
