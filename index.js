export default class TimeModule {
    super()
    constructor(){}
    formatTime = function (data) {
        let date = new Date(data);
        let hh = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        let mm = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        let ss = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        return `${hh}:${mm}:${ss}`
    };
    formatDate = function (data) {
        let date = new Date(data);
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let year = date.getFullYear();
        return `${month}/${day}/${year}`
    }
    msToTime = function (duration) {
        let milliseconds = parseInt((duration % 1000) / 100)
            , seconds = parseInt((duration / 1000) % 60)
            , minutes = parseInt((duration / (1000 * 60)) % 60)
            , hours = parseInt((duration / (1000 * 60 * 60)))
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        
        let timeDiff;

        if (seconds > 1) {
            timeDiff = `${seconds}.${milliseconds} sec ago`;
        }
        if (minutes > 0) {
            timeDiff = `${minutes} min ago`;
        }
        if (hours > 0) {
            timeDiff = `${hours}hr ${minutes} min ago`;
        }
        if (hours > 24) {
            let days = (hours / 24).toFixed(0);
            timeDiff = `${days} days ago`;
        }
        if (hours > 168) {
            timeDiff = 'Over a week ago';
        }
        return timeDiff;
    };

    timeago = function (data) {
        let date = new Date(data).valueOf();
        let now = Date.now().valueOf();
        let diff = now - date;
        return this.msToTime(diff);
    }

    convertUTCDateToLocalDate = function (date) {
        let n = new Date(date);
        let utcHours = n.getHours();
        let offset = n.getTimezoneOffset();
        let newDate = n.setHours(utcHours - (offset / 60));
        let localDate = new Date(newDate);
        return localDate;
    };
}

