console.log(module);

module.exports = {
    getDate : function() {
        let today = new Date();
        let options = {
            weekday: "long",
            day: "numeric",
            month: "long"
        };
        let day = today.toLocaleDateString("en-US", options);
        return day;
    },
    getDay : function getOtherDate() {
        let today = new Date();
        let options = {
            weekday: "long"
        };
        let day = today.toLocaleDateString("en-US", options);
        return day;
    }
}