import axios from 'axios'

export const getPost = () => {
    return (dispatch) => {
        axios.get('https://randomuser.me/api/?results=28')
            .then(({ data }) => {
                // console.log(data.results);
                dispatch(setPost(data.results))
            })
            .catch(err => {
                console.log(err.response);
            })

    }
}

export const setPost = (payload) => {
    return {
        type: "SET_POST", payload
    }
}