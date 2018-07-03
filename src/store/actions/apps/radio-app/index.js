export const REQUEST_AC_LIST = 'REQUEST_AC_LIST'

const Status = {
  Pending: 'PENDING',
  Failed: 'FAILED',
  Success: 'SUCCESS'
}

export const requestACList = (search) => {
  return (dispatch) => {
    dispatch({type: REQUEST_AC_LIST, status: Status.Pending})

    fetch('https://jsonplaceholder.typicode.com/comments', {
      headers: {
        'Accept': 'application/json',
        "Content-type": "application/json; charset=UTF-8"
      },
      method: 'POST',
      body: JSON.stringify({
        
      })
    })
    .then
  }
}