function getShortMessages(messages) {
    var filtered = messages.filter(function(item) {
        return item.message.length < 50;
    });
    return filtered.map(function(item) {
        return item.message;
    });
}

module.exports = getShortMessages;