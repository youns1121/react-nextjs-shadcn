
export const isEqual = (value: unknown, other: unknown): boolean => {
    if (value === other) {
        return true;
    }

    if (typeof value !== typeof other) {
        return false;
    }

    if (Array.isArray(value) && Array.isArray(other)) {
        if (value.length !== other.length) {
            return false;
        }
        for (let i = 0; i < value.length; i++) {
            if (!isEqual(value[i], other[i])) {
                return false;
            }
        }
        return true;
    }

    if (
        typeof value === 'object' &&
        typeof other === 'object' &&
        value !== null &&
        other !== null
    ) {
        const valueObj = value as Record<string, unknown>;
        const otherObj = other as Record<string, unknown>;
        const valueKeys = Object.keys(valueObj);
        const otherKeys = Object.keys(otherObj);

        if (valueKeys.length !== otherKeys.length) {
            return false;
        }

        return valueKeys.every(
            (key) =>
                Object.prototype.hasOwnProperty.call(otherObj, key) &&
                isEqual(valueObj[key], otherObj[key]),
        );
    }

    return value === other;
};

export const convertToDate = (dateString: string) => {
    if (!dateString) return;
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const day = String(dateObject.getDate()).padStart(2, '0');
    const hours = String(dateObject.getHours()).padStart(2, '0');
    const minutes = String(dateObject.getMinutes()).padStart(2, '0');
    const seconds = String(dateObject.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}