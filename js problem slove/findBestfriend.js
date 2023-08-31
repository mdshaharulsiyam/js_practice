let allFriend = ['abrar','rafilu','sabbir','abu toha','shohanur rahman','polash','rakesh','md shaharul siyam'];

function bestFriend(friends) {
    let bestFriend = friends[0];
    for (let i = 0; i < friends.length; i++) {
        let friend = friends[i];
        if (friend.length > bestFriend.length) {
            bestFriend = friend;
        }
    } 
    return bestFriend;
}
let mybestfriend = bestFriend(allFriend)
console.log(mybestfriend)