function friendRecommendations(network, user) {
    // targetUser에 user를 저장합니다.
    const targetUser = user;

    // targetUser의 직접적인 친구 목록을 Set 객체로 만듭니다.
    const directFriends = new Set(network[targetUser]);

    // 친구 추천 목록을 저장할 Set 객체를 만듭니다.
    const recommendations = new Set();

    // directFriends에 있는 각 친구를 순회합니다.
    for (const friend of directFriends) {
        // 친구의 친구 목록을 가져와 순회합니다.
        for (const friendOfFriend of network[friend]) {
            // 친구의 친구가 targetUser가 아니고 이미 directFriends에 포함되지 않았다면 추천 목록에 추가합니다.
            if (friendOfFriend !== targetUser && !directFriends.has(friendOfFriend)) {
                recommendations.add(friendOfFriend);
            }
        }
    }

    // 추천 목록을 배열로 변환하여 반환합니다.
    return Array.from(recommendations);
}

const network = {
    Alice: ["Bob", "Charlie"],
    Bob: ["Alice", "David"],
    Charlie: ["Alice", "Eve"],
    David: ["Bob"],
    Eve: ["Charlie"]
};

console.log(friendRecommendations(network, "Alice"));
