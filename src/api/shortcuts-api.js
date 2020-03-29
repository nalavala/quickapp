import axios from 'axios';


/**
 * Get all shortcuts
 */

const urlPrefix = "http://localhost:1234";

const createTag = (tagValue) => {

    //return await axios.post(urlPrefix + "/tags", {value: tagValue});
    return axios.post(urlPrefix + "/tags", {value: tagValue})
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });

};

const getShortcutsByTag = (id) => {

    return axios.post(urlPrefix + "/tags/getShortcutsByTag", {tag: id})
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
};


const deleteShortcut = (id) => {
    return axios.delete(urlPrefix + `/shortcuts/${id}`)
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            console.log(error);
        });
};

const updateShortcut = (id, name, url, tags) => {

    return axios.post(urlPrefix + "/shortcuts", {name: name, url: url, tags: tags, id: id})
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
};

const addShortcut = (name, url, tags) => {

    return axios.post(urlPrefix + "/shortcuts", {name: name, url: url, tags: tags})
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });

};


const removeShortcuts = (ids) => {

    return axios.post(urlPrefix + "/shortcuts/delete", {ids})
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });

};

const makeShortcutFavourite = (shortcut) => {

    return axios.put(urlPrefix + "/shortcuts/", {...shortcut})
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });

};

const fetchMyFavourites = () => {

    return axios.get(urlPrefix + "/shortcuts/favourites")
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });

};


const api = {
    createTagApi: createTag,
    getShortcutsByTagApi: getShortcutsByTag,
    deleteShortcutApi: deleteShortcut,
    updateShortcutApi: updateShortcut,
    addShortcutApi: addShortcut,
    removeShortcutsApi: removeShortcuts,
    makeShortcutFavouriteApi :makeShortcutFavourite,
    fetchMyFavouritesApi : fetchMyFavourites
};
export default api;


