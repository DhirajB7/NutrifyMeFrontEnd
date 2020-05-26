import React, { Component } from "react";
import PreLoader from "../Template/PreLoader";
import { getValueFromCookie } from "../API/CookieOperations";
import UserOperationOptions from "../Template/UserOperationOptions";
import AdminOperationOptions from "../Template/AdminOperationOptions";
import PageNotFound from "../Template/PageNotFound";
import ContactAdmin from "../Template/ContactAdmin";
import PageTemplate from "../Template/PageTemplate";

class Welcome extends Component {
  state = {
    isDataReady: false,
    test: "",
  };

  test = () => {
    console.log("I AM TEST");
    this.setState({
      test: "Hello",
    });
    console.log(this.state.test);
  };

  dataReady = () => {
    if (document.cookie.length > 10) {
      return true;
    } else {
      window.location.reload(); //important else page will be stuck in preloader
      return false;
    }
  };

  render() {
    if (localStorage.length > 0) {
      if (localStorage.getItem("status") === "true") {
        if (this.dataReady()) {
          const isUser = getValueFromCookie("isUserLoggedIn") === "true";

          const isAdmin = getValueFromCookie("isAdminLoggedIn") === "true";

          if (isUser) {
            return (
              <React.Fragment>
                <PageTemplate isUser="user" />
                <UserOperationOptions toOpen={this.props.open} />
              </React.Fragment>
            );
          } else if (isAdmin) {
            return (
              <React.Fragment>
                <PageTemplate isUser="admin" />
                <AdminOperationOptions toOpen={this.props.open} />
              </React.Fragment>
            );
          } else {
            return <PageNotFound />;
          }
        } else {
          return <PreLoader />;
        }
      } else {
        return (
          <React.Fragment>
            <PageTemplate />
            <ContactAdmin />
          </React.Fragment>
        );
      }
    } else {
      return <PageNotFound />;
    }
  }
}

export default Welcome;
