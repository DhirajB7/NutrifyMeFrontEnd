import Axios from "axios";
import { getValueFromCookie } from "./CookieOperations";
import { BaseURL } from "./Properties";

async function DeleteMeal(data) {
  console.log(data);

  const token = getValueFromCookie("Authorization").trim();

  await Axios.delete(BaseURL + "/meal/" + data, {
    headers: { Authorization: token },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
      alert("ERROR OCCURED WHILE DELETING DATA");
    });
}

export default DeleteMeal;
