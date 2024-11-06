function isEmpty(value) {
    // null이나 undefined는 비어있다고 간주합니다.
    if (value === null || value === undefined) return true;

    // 문자열인 경우, 빈 문자열일 때만 비어있다고 간주합니다.
    if (typeof value === 'string') return value === '';

    // 배열인 경우, 모든 요소가 비어있는지 재귀적으로 확인합니다.
    if (Array.isArray(value)) return value.every(isEmpty);

    // 객체인 경우, 모든 속성이 비어있는지 확인합니다.
    if (typeof value === 'object') {
        return Object.values(value).every(isEmpty);
    }

    // 원시 타입이거나 그 외의 경우는 비어있지 않다고 간주합니다.
    return false;
}

console.log(isEmpty(null));
console.log(isEmpty({}));
console.log(isEmpty(0));
console.log(isEmpty(false));
console.log(isEmpty([{}, { a: [] }]));
console.log(isEmpty({ a: null, b: '' }));
