export default (store) => (next) => (action) =>{
    const { callAPI, type, ...rest } = action
    if(!callAPI) return next(action)

    next({
        type: type + START,
        ...rest
    })

    fetch(callAPI)
        .then((res) => res.json())
        .then((response) => next({ type: type + SUCCESS, response, ...rest, }))
        .catch((error) => next({ type: type + FAIL, error, ...rest, }))
}