import React, { Component } from "react";
import UserHomeUserMealsLabel from "./UserHomeUserMealsLabel";
import PreLoader from "./PreLoader";

export default class UserHomeUserMeals extends Component {
  state = {
    isDataNotReady: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.dataCheck();
    }, 700);
  }

  dataCheck = () => {
    if (localStorage.getItem("thisUser").length > 2) {
      this.setState({
        isDataNotReady: false,
      });
    } else {
      this.setState({
        isDataNotReady: true,
      });
    }
  };

  render() {
    if (this.state.isDataNotReady) {
      return <PreLoader />;
    }

    if (localStorage.getItem("thisUser").includes("},")) {
      return (
        <div className="ui six cards">
          {localStorage
            .getItem("thisUser")
            .split("},")
            [localStorage.getItem("thisUser").split("},").length - 2].split(
              "="
            )[1]
            .split(",")
            .map((element) => {
              return (
                <UserHomeUserMealsLabel
                  key={element.split(":")[0].replace("[", "")}
                  foodName={element.split(":")[0].replace("[", "")}
                  cal={element.split(":")[1].replace("]", "")}
                />
              );
            })}
        </div>
      );
    } else {
      return <h3 className="noMealMessage">ADD MEAL & MEAL APPEARS HERE</h3>;
    }
  }
}
