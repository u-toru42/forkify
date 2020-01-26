export default class Likes {
    constructor() {
        this.likes = [];
    }

    addLike(id, title, author, img) {
        const like = { id, title, author, img };
        this.likes.push(like);

        // Persist data in localStrage
        this.persistData();

        return like;
    }

    deleteLike(id) {
        const index = this.likes.findIndex(el => el.id === id);
        this.likes.splice(index, 1);

        // Persist data in localStrage
        this.persistData();
    }

    isLiked(id) {
        return this.likes.findIndex(el => el.id === id) !== -1;
    }

    getNumLikes() {
        return this.likes.length;
    }

    persistData() {
        // localStorage -> sessionStorage
        // localStorage.setItem('likes', JSON.stringify(this.likes));
        sessionStorage.setItem('likes', JSON.stringify(this.likes));
    }

    readStorage() {
        // localStorage -> sessionStorage
        // const storage = JSON.parse(localStorage.getItem('likes'));
        const storage = JSON.parse(sessionStorage.getItem('likes'));
        
        // Restoring likesfrom the localStrage
        // localStorage -> sessionStorage
        if (storage) this.likes = storage;
    }
}