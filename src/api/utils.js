export const getURL = () => {
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'development') {
        return "https://quickapp-backend.herokuapp.com"
    }
    return "https://quickapp-backend.herokuapp.com"
};
