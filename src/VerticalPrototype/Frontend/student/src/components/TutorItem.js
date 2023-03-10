import Card from "../ui/Card";
import classes from "./TutorItem.module.css";

function TutorItem(props) {
  return (
    <div>
      <li className={classes.item}>
        <Card>
          <div className={classes.image}>
            <img src={props.image} alt={props.name} />
          </div>
          <div className={classes.content}>
            <h3>{props.name}</h3>
            <p>Subjects:- {props.subjects}</p>
            <p>Ratings:- {props.ratings}</p>
            <p>Price:- {props.price}</p>
          </div>
          <div className={classes.actions}>
            <button>View Profile</button>
          </div>
        </Card>
      </li>
    </div>
  );
}

export default TutorItem;
