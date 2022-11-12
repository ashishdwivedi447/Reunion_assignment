import axios from "axios";
import * as types from "./actionTypes";

export const getData = (payload) => ({
    type: types.GET_DATA_SUCCESS,
    payload
});
export const getdata = () => async (dispatch) => {
    dispatch({ type: types.GET_DATA_REQUEST })
    return await axios.get(`https://ashishreunion.herokuapp.com/rent`)
        .then((res) => {
            // console.log(res.data)
            return dispatch(getData(res.data))
        })
        .catch((err) => {
            console.log(err)
        })

}