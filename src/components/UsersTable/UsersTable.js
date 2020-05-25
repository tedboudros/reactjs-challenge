import React from "react";
import { connect } from "react-redux";
import UserRow from "./components/UserRow/UserRow";
import { fetchAllUsers } from "../../store/actions/users.actions";

class UsersTable extends React.PureComponent {
  componentDidMount() {
    const { fetchAllUsers } = this.props;
    fetchAllUsers();
  }

  render() {
    const { data } = this.props;
    const { users } = data;

    return (
      <div className="usersTable">
        <UserRow header />
        {users.map(user => (
          <UserRow key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);
