import { NavLink } from "react-router-dom";
import friendsImg from "../assets/img/img.webp";
import React from "react";

const TableRow = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>
        <NavLink to={"/profile/" + props.id}>
          {props.name} {props.lastname}
        </NavLink>
      </td>
      <td> {props.email} </td>
    </tr>
  );
};

export class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Row: [] };
  }

   componentDidMount() {

    this.props.function().then((users) => {
            console.log(users);
            let usersCount = users.length;
            let userRow = [];

            for (let i = 0; i < usersCount; i++) {
              userRow.push(
                <TableRow
                  key={i}
                  index={i}
                  id={users[i].id}
                  name={users[i].name}
                  lastname={users[i].lastname}
                  email={users[i].email}
                />
              );
            }
            this.setState({Row: userRow})
    });


   }

  render() {
    return (
      <div className="container-fluid">
        <div className="row mb-5">
          <div className="col-12">
            <h3>Список друзей</h3>
            <p>Дополнительная информация</p>
            <img src={friendsImg} alt="" width="100%" />
          </div>
        </div>
        <div className="row">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Имя и фамилия</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {this.state.Row}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
